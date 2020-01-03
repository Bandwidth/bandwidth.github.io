{% multimethod %}
{% endmultimethod %}

# Bandwidth Messaging API Setup {#top}

This walks through how to setup the Bandwidth Messaging API to send messages.
This guide is entirely focused on setup with the API.

## Assumptions

* You have downloaded [Postman](https://www.getpostman.com/) -or- have the ability to make an API request.
* You have your [Messaging](https://dashboard.bandwidth.com/portal/report/#application:/create) `token`, `secret`
* You have your [Phone Number API](https://dashboard.bandwidth.com) `accountId`, `username` and `password`
* You have an existing Sub-account you'd like to use.

## Follow along with Postman

Fill out the form on the [Postman](postman.md) page to download the Messaging collection.

## Getting Started

1. [Create application](#create-application)
2. [Create subaccount (_site_)](#create-subaccount-site)
3. [Create location (_sippeer_)](#create-location)
4. [Enable SMS on Location (_sippeer_)](#enable-sms-on-location)
5. [Enable MMS on Location (_sippeer_)](#enable-mms-on-location)
6. [Assign Application to Location (_sippeer_)](#assign-application-to-location)
7. [Order Available Numbers](#order-numbers)
8. [Check Order Status](#check-order-status)
9. [Send Text Message](#sending-messages)


## Create application {#create-application}

<aside class="alert general small">
<p>
Save the <code>Application Id</code> After creating the application.
</p>
</aside>

The Application contains the HTTP URL you want to use for both inbound and outbound messages.

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`

| Parameters               | Mandatory | Description                                                                                                                |
|:-------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`            | Yes       | The type of service the application will be used for `Messaging-V2` is the only valid service type as of February 15, 2018 |
| `AppName`                | Yes       | Plain text name of the application                                                                                         |
| `CallbackUrl`            | Yes       | Url to receive _all_ [message events](events/messageEvents.md)                                                             |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your [message events](events/messageEvents.md)                                          |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                                        |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                                      |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
      <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>Production Server</AppName>
        <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---

## Create Sub-Account (_site_) {#create-subaccount-site}

This endpoint can be used to create a subaccount (AKA site) on your account

{% extendmethod %}

#### Subaccount Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites`

| Parameters               | Mandatory | Description                                                                                                                |
|:-------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `Name` | Yes | The name of the site. Max length of 10 characters |
| `Description` | No | The description of the site |
| `Address` | Yes | The address of the site |
| `CustomerProvidedID` | No | Optional custom ID to assign to your application. Max length of 10 characters |
| `CustomerName` | No | Optional custom name to assign to your application. Max length of 50 characters |
| `UcTrunkingConfiguration` | No | For UC Trunking accounts the UcTrunkingConfiguration element describes the kind of UC trunking that is provided. The Type parameter is one of Seats, Premise, or Cloud, and the UsageCategory parameter is one of UC250, UC500 or UC1000 |

{% common %}

### Create Sub-Account

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Site>
    <Name>Raleigh</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
        <HouseNumber>1600</HouseNumber>
        <StreetName>PENNSYLVANIA</StreetName>
        <StreetSuffix>AVE</StreetSuffix>
        <PostDirectional>NW</PostDirectional>
        <City>WASHINGTON</City>
        <StateCode>DC</StateCode>
        <Zip>20006</Zip>
        <Country>US</Country>
        <AddressType>Service</AddressType>
    </Address>
</Site>
<!-- and for a UC account ... -->
<Site>
    <Name>Raleigh</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
        <HouseNumber>1600</HouseNumber>
        <StreetName>PENNSYLVANIA</StreetName>
        <StreetSuffix>AVE</StreetSuffix>
        <PostDirectional>NW</PostDirectional>
        <City>WASHINGTON</City>
        <StateCode>DC</StateCode>
        <Zip>20006</Zip>
        <Country>US</Country>
        <AddressType>Service</AddressType>
    </Address>
    <UcTrunkingConfiguration>
        <Type>Seats</Type>
        <UsageCategory>UC500</UsageCategory>
    </UcTrunkingConfiguration>
</Site>
```

{% common %}

### Response
```http
HTTP/1.1 201 Created

The site has been successfully added to the account
```

{% endextendmethod %}

## Create location (_sippeer_) {#create-location}

<aside class="alert general small">
<p>
Save the <code>Location (sippeer) Id</code> After creating the application.
</p>
</aside>

The location (_sippeer_) is a logical grouping of numbers.

* You'll need a location (_sippeer_) in order to group phone numbers.

{% extendmethod %}

### Location Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers`

| Parameters      | Mandatory | Description                                                                                                                                                                                                                                                                                     |
|:----------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PeerName`      | Yes       | Plain text name of the Location (_sippeer_)                                                                                                                                                                                                                                                     |
| `IsDefaultPeer` | No        | Boolean: <br> * `true` <br> * `false` <br> The Default SIP Peer is the default "destination" for any Telephone Numbers that are ordered for the Site in which the SIP Peer resides.  Each sub-account (_site_) can have only 1 default SIP Peer. You can configure multiple SIP Peers on a Site |

{% common %}

### Create Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<SipPeer>
  <PeerName>Bandwidth Messaging 2 test2</PeerName>
  <IsDefaultPeer>true</IsDefaultPeer>
</SipPeer>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Location: https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}
```

> Save the {{location}} from the `location` header!


{% endextendmethod %}

---

## Enable SMS on Location (_sippeer_) {#enable-sms-on-location}

In order to use messaging 2.0 in your account, you need to enable SMS and MMS on each location after creating.

{% extendmethod %}

### Enable SMS Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/features/sms`

| Parameters    | Mandatory | Description                                                                                           |
|:--------------|:----------|:------------------------------------------------------------------------------------------------------|
| `TollFree`    | Yes       | Will enable texting to and from _toll-free phone numbers_. <br> Boolean: <br> * `true` <br> * `false` |
| `ShortCode`   | Yes       | Will enable texting to and from _short codes_. <br> Boolean: <br> * `true` <br> * `false`             |
| `Protocol`    | Yes       | **MUST BE SET TO** `HTTP`                                     |
| `Zone1`       | Yes       | **MUST BE SET TO**: `true`                                                                            |
| `Zone2`       | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone3`       | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone4`       | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone5`       | Yes       | **MUST BE SET TO**: `false`                                                                           |

{% common %}

### Enable SMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/features/sms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<SipPeerSmsFeature>
  <SipPeerSmsFeatureSettings>
    <TollFree>true</TollFree>
    <ShortCode>true</ShortCode>
    <Protocol>HTTP</Protocol>
    <Zone1>true</Zone1>
    <Zone2>false</Zone2>
    <Zone3>false</Zone3>
    <Zone4>false</Zone4>
    <Zone5>false</Zone5>
  </SipPeerSmsFeatureSettings>
  <HttpSettings />
</SipPeerSmsFeature>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
  <SipPeerSmsFeature>
    <SipPeerSmsFeatureSettings>
      <TollFree>true</TollFree>
      <ShortCode>true</ShortCode>
      <Protocol>HTTP</Protocol>
      <Zone1>true</Zone1>
      <Zone2>false</Zone2>
      <Zone3>false</Zone3>
      <Zone4>false</Zone4>
      <Zone5>false</Zone5>
    </SipPeerSmsFeatureSettings>
    <HttpSettings>
      <ProxyPeerId>539692</ProxyPeerId>
    </HttpSettings>
  </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>
```


{% endextendmethod %}

---

## Enable MMS on Location (_sippeer_) {#enable-mms-on-location}

In addition to enabling SMS, you must also enable MMS to receive picture messages and other multi-media messages.

{% extendmethod %}

### Enable MMS Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/features/mms`

| Parameters    | Mandatory | Description                 |
|:--------------|:----------|:----------------------------|
| `Protocol`    | Yes       | **MUST BE SET TO** `HTTP`   |

{% common %}

### Enable MMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/features/mms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<MmsFeature>
  <MmsSettings>
    <Protocol>HTTP</Protocol>
  </MmsSettings>
  <Protocols>
    <HTTP>
      <HttpSettings />
    </HTTP>
  </Protocols>
</MmsFeature>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
  <MmsFeature>
    <MmsSettings>
      <protocol>HTTP</protocol>
    </MmsSettings>
    <Protocols>
      <HTTP>
        <HttpSettings>
          <proxyPeerId>539692</proxyPeerId>
        </HttpSettings>
      </HTTP>
    </Protocols>
  </MmsFeature>
</MmsFeatureResponse>
```


{% endextendmethod %}

---

## Assign Application to Location (_sippeer_) {#assign-application-to-location}

In order to use messaging 2.0 in your account, you need to assign the `application` created above to the location (_sippeer_)

{% extendmethod %}

### Assign Application Parameters

#### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/applicationSettings`

| Parameters             | Mandatory | Description                                             |
|:-----------------------|:----------|:--------------------------------------------------------|
| `HttpMessagingV2AppId` | Yes       | The application ID from the `application` created above |


{% common %}

### Assign Application to Location (_sippeer_)

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{account}}/sites/{{subaccount}}/sippeers/{{location}}/products/messaging/applicationSettings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<ApplicationsSettings>
  <HttpMessagingV2AppId>299ab22a-d7e6-4cf6-9f4d-2089efc0c031</HttpMessagingV2AppId>
</ApplicationsSettings>
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
  <ApplicationsSettings>
    <HttpMessagingV2AppId>299ab22a-d7e6-4cf6-9f4d-2089efc0c031</HttpMessagingV2AppId>
  </ApplicationsSettings>
</ApplicationsSettingsResponse>
```

{% endextendmethod %}

---


## Order Available Numbers {#order-numbers}

<aside class="alert general small">
<p>
Save the <code>Order Id</code> After creating the order.
</p>
</aside>

Now that you have your account setup to send & receive text messages, you need to order some numbers.

{% extendmethod %}

### Order Available Numbers Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/orders`

| Parameters | Mandatory | Description                                                                                          |
|:-----------|:----------|:-----------------------------------------------------------------------------------------------------|
| `AreaCode` | Yes       | The area code of the desired numbers.<br> <br> **This is just 1 of many ways to search for numbers** |
| `Quantity` | No        | Quantity of phone numbers to return, default is `5000`                                               |
| `SiteId`   | Yes       | The id of your subaccount (_site_)                                                                   |
| `PeerId`   | Yes       | The id of your location (_sippeer_)                                                                  |

{% common %}

### Order 1 Available Number

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{account}}/orders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Order>
  <AreaCodeSearchAndOrderType>
    <AreaCode>910</AreaCode>
    <Quantity>1</Quantity>
  </AreaCodeSearchAndOrderType>
  <SiteId>{{subaccount}}</SiteId>
  <PeerId>{{location}}</PeerId>
</Order>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{account}}/orders/{{order}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
  <Order>
    <OrderCreateDate>2017-09-18T17:36:57.274Z</OrderCreateDate>
    <PeerId>{{location}}</PeerId>
    <BackOrderRequested>false</BackOrderRequested>
    <id>a18a8979-ebed-42f0-ae5f-3cfa7941d4c2</id>
    <AreaCodeSearchAndOrderType>
      <AreaCode>910</AreaCode>
      <Quantity>1</Quantity>
    </AreaCodeSearchAndOrderType>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>{{subaccount}}</SiteId>
  </Order>
  <OrderStatus>RECEIVED</OrderStatus>
</OrderResponse>
```

{% endextendmethod %}

---

## Check Order Status {#check-order-status}

After ordering the numbers, you will need to check on the status to know when those numbers are ready to use.

<aside class="alert general small">
<p>
When the <code>Order Status</code> is <code>COMPLETE</code>&nbsp:&nbsp<code>&lt;OrderStatus&gt;COMPLETE&lt;/OrderStatus&gt;</code>, the numbers are ready to use
</p>
</aside>

{% extendmethod %}

### Check Order Status Parameters

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/orders/{{order}}`

| Parameters | Mandatory | Description         |
|:-----------|:----------|:--------------------|
| `order`    | Yes       | The ID of the order |

{% common %}

### Check order status

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{account}}/orders/{{order}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
  <CompletedQuantity>1</CompletedQuantity>
  <CreatedByUser>lorem</CreatedByUser>
  <LastModifiedDate>2017-09-18T17:36:57.411Z</LastModifiedDate>
  <OrderCompleteDate>2017-09-18T17:36:57.410Z</OrderCompleteDate>
  <Order>
    <OrderCreateDate>2017-09-18T17:36:57.274Z</OrderCreateDate>
    <PeerId>{{location}}</PeerId>
    <BackOrderRequested>false</BackOrderRequested>
    <AreaCodeSearchAndOrderType>
      <AreaCode>910</AreaCode>
      <Quantity>1</Quantity>
    </AreaCodeSearchAndOrderType>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>{{subaccount}}</SiteId>
  </Order>
  <OrderStatus>COMPLETE</OrderStatus>
  <CompletedNumbers>
    <TelephoneNumber>
      <FullNumber>9102398766</FullNumber>
    </TelephoneNumber>
  </CompletedNumbers>
  <Summary>1 number ordered in (910)</Summary>
  <FailedQuantity>0</FailedQuantity>
</OrderResponse>
```

> When the `Order Status` is `COMPLETE`: `<OrderStatus>COMPLETE</OrderStatus>`, the numbers are ready to use

{% endextendmethod %}

---

## Sending Messages {#sending-messages}

* To send a message, <code class="post">POST</code> to the [`/messages` endpoint](methods/createSingle.md)
* In the V2 Messaging API, messages are sent asynchronously. Message validation will happen after the server returns `202`. API clients should listen for HTTP callback events if they need to track message state after the initial <code class="post">POST</code> request.

{% extendmethod %}

### Message Parameters

#### Request URL
<code class="post">POST</code>`https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages`

| Parameter       | Mandatory | Description                                                                                                                                                                                       |
|:----------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `from`          | Yes       | One of your telephone numbers the message should come from (should be in E.164 format, like `+19195551212`). <br> <br> **The `+1` can be omitted for US numbers in the `from` or `to` parameter** |
| `to`            | Yes       | The phone number the message should be sent to (must be in E.164 format, like `+19195551212`).  <br> <br> **The `+1` can be omitted for US numbers in the `from` or `to` parameter**              |
| `text`          | Yes       | The contents of the text message (must be 2048 characters or less).                                                                                                                               |
| `applicationId` | Yes       | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                          |

{% common %}

### Send Text Message

{% sample lang="http" %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {token:secret}

{
  "from"          : "{{your-bandwidth-number}}",
  "to"            : "{{yourTN}}",
  "text"          : "Good morning, this is a test message",
  "applicationId" : "{{your-application-id}}"
}
```

{% common %}

### Response

```http
HTTP/1.1 202
Content-Type: application/json; charset=utf-8

{
  "id"            : "15047516192013g5tuga77zsa6jrp",
  "owner"         : "+19193529968",
  "applicationId" : "05851417-c78b-4636-81a2-014a54d8f119",
  "time"          : "2017-09-07T02:33:39.201Z",
  "direction"     : "out",
  "to"            : ["+19191231234"],
  "from"          : "+19193524444",
  "text"          : "Hi from Bandwidth!"
}
```

{% endextendmethod %}
