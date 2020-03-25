{% multimethod %}
{% endmultimethod %}

# Bandwidth Account API Setup {#top}

This walks through how to programmatically setup and configure your Bandwidth account _via APIs_ for use with [HTTP Voice](../../voice/about.md) and [HTTP Messaging](../../messaging/about.md)

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for HTTP Voice & HTTP Messaging (please contact support@bandwidth.com)

## API Authentication

The Account Management API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Getting Started

* [Create **messaging** application](#create-messaging-application)
* [Create **voice** application](#create-voice-application)
* [Create subaccount (_site_)](#create-subaccount-site)
* [Create location (_sippeer_)](#create-location)
* [Enable **SMS** on Location (_sippeer_)](#enable-sms-on-location)
* [Enable **MMS** on Location (_sippeer_)](#enable-mms-on-location)
* [Assign Application to Location (_sippeer_)](#assign-messaging-application-to-location)
* [Enable HTTP Voice **and** assign Application on Location (_sippeer_)](#assign-application-enable-voice-on-location)

## Next Steps

Once the account has been configured correctly for HTTP Services. See the guides for:

* [Ordering Phone Numbers with a Callback](../../numbers/guides/onDemandNumberSearchAndOrder.md)
* [Ordering Phone Numbers and polling order status](../../numbers/guides/numberOrderingSummary.md)
* [HTTP Messaging](../../messaging/about.md)
* [HTTP Voice](../../voice/about.md)

## Create **Messaging** Application {#create-messaging-application}

<aside class="alert general small">
<p>
Save the <code>Application Id</code> after creating the application.
</p>
</aside>

The [Application](../applications/about.md) contains the HTTP URL you want to use for both inbound and outbound messages.

Learn more about [applications in the documentation](../applications/about.md).

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`

#### Request Authentication

The [Applications](../applications/about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

| Parameters               | Mandatory | Description                                                                                          |
|:-------------------------|:----------|:-----------------------------------------------------------------------------------------------------|
| `ServiceType`            | Yes       | Set to `Messaging-V2`                                                                                |
| `AppName`                | Yes       | Plain text name of the application                                                                   |
| `MsgCallbackUrl`         | Yes       | Url to receive _all_ [message events](../../messaging/callbacks/messageEvents.md)                    |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your [message events](../../messaging/callbacks/messageEvents.md) |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                  |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
  <ServiceType>Messaging-V2</ServiceType>
  <AppName>Production Server</AppName>
  <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
  <CallbackCreds>
    <UserId>Your-User-id</UserId>
    <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{applicationID}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{messaging-applicationId}}</ApplicationId>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
    <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
    </CallbackCreds>
  </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---

## Create **Voice** Application {#create-voice-application}

<aside class="alert general small">
<p>
Save the <code>Application Id</code> after creating the application.
</p>
</aside>

The [Application](../applications/about.md) contains the HTTP URL you want to use for inbound calls.

Learn more about [applications in the documentation](../applications/about.md).

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`


| Parameters                 | Mandatory | Description                                                                                                                |
|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`              | Yes       | Set to `Voice-V2`                                                                                                          |
| `AppName`                  | Yes       | Plain text name of the application                                                                                         |
| `CallInitiatedCallbackUrl` | Yes       | Url to receive **actionable** [voice events](../../voice/bxml/callbacks/about.md)                                          |
| `CallStatusCallbackUrl`    | No        | Url to receive [voice events](../../voice/bxml/callbacks/about.md) NOT related to Initiated. Such as: rejected or hung up. |
| `CallbackCreds`            | No        | Basic auth credentials to apply to your [voice events](../../voice/bxml/callbacks/about.md)                                |
| `CallbackCreds.UserId`     | No        | Basic auth `UserId`                                                                                                        |
| `CallbackCreds.Password`   | No        | Basic auth `Password`                                                                                                      |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
  <ServiceType>Voice-V2</ServiceType>
  <AppName>Production Server2</AppName>
  <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
  <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
  <CallbackCreds>
    <UserId>Your-User-id</UserId>
    <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{voice-applicationId}}

<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{voice-applicationId}}</ApplicationId>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server2</AppName>
    <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
    <CallInitiatedMethod>POST</CallInitiatedMethod>
    <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
    <CallStatusMethod>POST</CallStatusMethod>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
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

| Parameters                | Mandatory | Description                                                                                                                                                                                                                              |
|:--------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Name`                    | Yes       | The name of the site. Max length of 10 characters                                                                                                                                                                                        |
| `Description`             | No        | The description of the site                                                                                                                                                                                                              |
| `Address`                 | Yes       | The address of the site                                                                                                                                                                                                                  |
| `CustomerProvidedID`      | No        | Optional custom ID to assign to your application. Max length of 10 characters                                                                                                                                                            |
| `CustomerName`            | No        | Optional custom name to assign to your application. Max length of 50 characters                                                                                                                                                          |

{% common %}

### Create Sub-Account (site)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Site>
  <Name>BandwidthHQ</Name>
  <Description>Test Gateway</Description>
  <CustomerName>BW</CustomerName>
  <Address>
    <HouseNumber>900</HouseNumber>
    <StreetName>Main Campus Dr</StreetName>
    <City>RALEIGH</City>
    <StateCode>NC</StateCode>
    <Zip>27606</Zip>
    <AddressType>Billing</AddressType>
  </Address>
</Site>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response
```http
HTTP/1.1 201 Created
Location: https://{baseurl}/accounts/{{accountId}}/sites/{{siteID}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteResponse>
  <Site>
    <Id>29488</Id>
    <Name>BandwidthHQ</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
      <HouseNumber>900</HouseNumber>
      <StreetName>Main Campus Dr</StreetName>
      <City>RALEIGH</City>
      <StateCode>NC</StateCode>
      <Zip>27606</Zip>
      <Country>United States</Country>
      <AddressType>Billing</AddressType>
    </Address>
  </Site>
</SiteResponse>
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

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers`

| Parameters      | Mandatory | Description                                                                                                                                                                                                                                                                                     |
|:----------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PeerName`      | Yes       | Plain text name of the Location (_sippeer_)                                                                                                                                                                                                                                                     |
| `IsDefaultPeer` | No        | Boolean: <br> * `true` <br> * `false` <br> The Default SIP Peer is the default "destination" for any Telephone Numbers that are ordered for the Site in which the SIP Peer resides.  Each sub-account (_site_) can have only 1 default SIP Peer. You can configure multiple SIP Peers on a Site |

{% common %}

### Create Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipPeer>
  <PeerName>Bandwidth 2020-01-06</PeerName>
  <IsDefaultPeer>true</IsDefaultPeer>
</SipPeer>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Location: https://{baseurl}/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}
```

> Save the {{sippeerId}} from the `location` header!


{% endextendmethod %}

---

## Enable SMS on Location (_sippeer_) {#enable-sms-on-location}

In order to use HTTP messaging in your account, you need to enable SMS and MMS on each location after creating.

{% extendmethod %}

### Enable SMS Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/sms`

| Parameters  | Mandatory | Description                                                                                           |
|:------------|:----------|:------------------------------------------------------------------------------------------------------|
| `TollFree`  | Yes       | Will enable texting to and from _toll-free phone numbers_. <br> Boolean: <br> * `true` <br> * `false` |
| `ShortCode` | Yes       | Will enable texting to and from _short codes_. <br> Boolean: <br> * `true` <br> * `false`             |
| `Protocol`  | Yes       | **MUST BE SET TO** `HTTP`                                                                             |
| `Zone1`     | Yes       | **MUST BE SET TO**: `true`                                                                            |
| `Zone2`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone3`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone4`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone5`     | Yes       | **MUST BE SET TO**: `false`                                                                           |

{% common %}

### Enable SMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/sms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

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

{% sample lang="csharp" %}

```csharp
//TODO
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

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/mms`

| Parameters | Mandatory | Description               |
|:-----------|:----------|:--------------------------|
| `Protocol` | Yes       | **MUST BE SET TO** `HTTP` |

{% common %}

### Enable MMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/mms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

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

{% sample lang="csharp" %}

```csharp
//TODO
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

## Assign Messaging Application to Location (_sippeer_) {#assign-messaging-application-to-location}

In order to use the messaging API, you need to assign the `application` created above to the location (_sippeer_)

{% extendmethod %}

### Assign Application Parameters

#### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/applicationSettings`

| Parameters             | Mandatory | Description                                             |
|:-----------------------|:----------|:--------------------------------------------------------|
| `HttpMessagingV2AppId` | Yes       | The application ID from the `application` created above |


{% common %}

### Assign Application to Location (_sippeer_)

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/applicationSettings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<ApplicationsSettings>
  <HttpMessagingV2AppId>{{messaging-applicationId}}</HttpMessagingV2AppId>
</ApplicationsSettings>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
  <ApplicationsSettings>
    <HttpMessagingV2AppId>{{messaging-applicationId}}</HttpMessagingV2AppId>
  </ApplicationsSettings>
</ApplicationsSettingsResponse>
```

{% endextendmethod %}

---

## Assign Voice Application **AND** Enable HTTP Voice on Location (_sippeer_) {#assign-application-enable-voice-on-location}

In addition to enabling SMS & MMS, you must also enable HTTP Voice services on the location to send and receive phone calls.  This is done with a single API call to the voice settings endpoint of the location (sippeer).

Bandwidth's voice services and split into two different names:

* Origination = "inbound calls"
* Termination = "outbound calls"

Bandwidth requires that **both** origination (inbound calls) and termination (outbound calls) be set to the same protocol.  As such, updating either the "origination" or "termination" settings to `HTTP` will set the others' setting to the same application.

It is only required to set **either** `termination/settings` or `origination/settings` for configuring HTTP Voice (SIP customers may have different settings). Setting one or the other, will copy the settings to the other settings profile. This example adds and configures the `origination/settings`, however sending the same request body to the `termination/settings` will result in the same configuration.

{% extendmethod %}

### Enable HTTP Voice Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/origination/settings`

| Parameters | Mandatory | Description               |
|:-----------|:----------|:--------------------------|
| `VoiceProtocol` | Yes       | **MUST BE SET TO** `HTTP` |
| `HttpSettings` | Yes | Parent element for HTTP settings |
| `HttpVoiceV2AppId` | Yes | The applicationId of the **Voice** application created above |

{% common %}

### Enable HTTP Voice on Location (via Origination Settings) (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/origination/settings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipPeerOriginationSettings>
  <VoiceProtocol>HTTP</VoiceProtocol>
  <HttpSettings>
    <HttpVoiceV2AppId>{{voice-applicationId}}</HttpVoiceV2AppId>
  </HttpSettings>
</SipPeerOriginationSettings>
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>{{voice-applicationId}}</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
```

### Ensure HTTP Voice settings on Location (_sippeer_)


{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/termination/settings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% sample lang="csharp" %}

```csharp
//TODO
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>{{Voice-Application-Id}}</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
```

{% endextendmethod %}

---
