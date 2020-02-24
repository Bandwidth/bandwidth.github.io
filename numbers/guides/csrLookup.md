{% multimethod %}
{% endmultimethod %}

# Bandwidth Customer Service Records (CSR) Lookup API {#top}

This walks through how to programmatically lookup Customer Service Records (CSRs for short) for Phone Numbers before porting into your Bandwidth account.

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for CSR Lookup (please contact [support](https://support.bandwidth.com))

## API Authentication

The Numbers API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Table of Contents

* []

## Next Steps

Once the CSR record have been pulled, phone numbers are ready to create a [port order](portingPhoneNumbers.md) with the validated CSR information.

* [Porting Guide](portingPhoneNumbers.md)

## Importing Phone Numbers Overview

There are 3 different APIs that you will use to manage phone numbers for hosted messaging:

| Endpoint                  | Description                                                                                                                                                                         |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/csrs`                   | Initiates the process of importing a new number to your account.                                                                                                                    |
| `/removeImportedTnOrders` | Initiates the process of removing the numbers that were imported into your account for hosted messaging.  Removing an imported TN will restore it to it’s prior pre-imported state. |
| `/importTnChecker`        | Preliminary check to make sure that a TN is “importable” by checking against our internal databases.                                                                                |

## Create Subscription for `importtnorders` {#create-subscription}

The [Subscription](../../account/subscriptions/methods/postSubscriptions.md) contains the HTTP URL to receive HTTP Callbacks/webhooks anytime there is an update to the `importTnOrder` status.

Learn more about [subscriptions in the documentation](../../account/subscriptions/about.md).

{% extendmethod %}

#### Subscription Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions`

#### Request Authentication

The [Subscriptions](../../account/subscriptions/about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

| Parameters               | Mandatory                  | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<OrderType>`            | Yes, set to `csrs`         | The type of Order of the subscription, set to `csrs` for this guide.                                                                                                                                                                                                                                                                                                                                            |
| `<CallbackSubscription>` | Yes                        | Container for the callback details                                                                                                                                                                                                                                                                                                                                                                              |
| `<Expiry>`               | Yes                        | The time **in seconds** to persist the subscription. Bandwidth recommends setting the `<Expiry>` value to a very large integer to prevent the subscription from expiring in the next decade or so.  <br> Example Times <ul> <li>99 years = `3122064000` seconds</li><li>2 weeks = `1209600` seconds</li><li>1 week = `604800` seconds</li><li>1 day = `86400` seconds</li><li>1 hour = `3600` seconds</li></ul> |
| `<URL>`                  | Yes                        | Url to receive callbacks for the specified `orderId` or `orderType`                                                                                                                                                                                                                                                                                                                                             |
| `<CallbackCredentials>`  | No, but highly recommended | Container for the Auth                                                                                                                                                                                                                                                                                                                                                                                          |
| `<BasicAuthentication>`  | -                          | Basic auth credentials to apply to your message & voice events                                                                                                                                                                                                                                                                                                                                                  |
| `Username`               | No, but highly recommended | Basic auth `Username`                                                                                                                                                                                                                                                                                                                                                                                           |
| `Password`               | No, but highly recommended | Basic auth `Password`                                                                                                                                                                                                                                                                                                                                                                                           |
| `<PublicKey>`            | No                         | BASE64 encoded public key matching the notification receiving server                                                                                                                                                                                                                                                                                                                                            |

{% common %}

### Create Subscription

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
  <OrderType>csrs</OrderType>
  <CallbackSubscription>
    <URL>{your-callback-url}</URL>
    <Expiry>3153600000</Expiry>
    <CallbackCredentials>
      <BasicAuthentication>
          <Username>User15</Username>
          <Password>Hunter15</Password>
      </BasicAuthentication>
    </CallbackCredentials>
  </CallbackSubscription>
</Subscription>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{applicationID}}
```

{% endextendmethod %}

---

## Create a CSR Order

Before creating the order, be sure to collect any information from the end user to submit to the CSR API. Generally speaking, the more information provided, the better.

* Address
* AccountNumber
* PIN Numbers
* More (see table below for options)

If for whatever reason the provided information was not correct or sufficient, the order will transition to the non-terminal state: `ACTION_REQUIRED`. The required fields will be listed to be updated via a <code class="put">PUT</code> request to the `csrOrderId`

{% extendmethod %}

#### CSR Request Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/csrs`


| Parameter                             | Mandatory | Description                                                                                                                                                                                                                                                 |
|:--------------------------------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountId (URL Parameter)             | Yes       | The account ID for creating csr order.                                                                                                                                                                                                                      |
| CustomerOrderId                       | No        | Internal customer order id for tracking the order.  Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.                                                                                                                   |
| WorkingOrBillingTelephoneNumber (WTN) | Yes       | Working or Billing telephone number in 10-digits format NPANXXXXXX.                                                                                                                                                                                         |
| AccountNumber                         | No        | Identifies the main account number on your bill, assigned by the current service provider. Alphanumeric characters are supported with a max length of 20 characters.                                                                                        |
| AccountTelephoneNumber                | No        | Identifies the account telephone number assigned by the current service provider. Alphanumeric characters are supported with a max length of 10 characters.                                                                                                 |
| EndUserName                           | No        | Identifies the name of the end user associated with the telephone number being queried. Alphanumeric characters are supported with a max length of 100 characters.                                                                                          |
| AuthorizingUserName                   | No        | Identifies the name of the end user who signed the authorization. Alphanumeric characters are supported with a max length of 100 characters.                                                                                                                |
| CustomerCode                          | No        | Identifies the customer code associated with the service provider. Must be numeric characters only with a max length of 3 characters.                                                                                                                       |
| EndUserPIN                            | No        | Identifies the end user’s personal identification number (PIN). Alphanumeric characters are supported with a max length of 50 characters.                                                                                                                   |
| EndUserPassword                       | No        | Identifies the end user’s password to access the CSR, if applicable. Alphanumeric characters are supported with a max length of 100 characters.                                                                                                             |
| AddressLine1                          | No        | Identifies the address line 1 portion of the service address. Alphanumeric characters are supported with a max length of 200 characters.                                                                                                                    |
| City                                  | No        | Identifies the city of the end user where the telephone number is being serviced. Alphanumeric characters are supported with a max length of 100 characters.                                                                                                |
| State                                 | No        | Identifies the abbreviation for the state or province of the end user where the telephone number is being serviced. Must be alpha characters only in the format XX with a max length of 2 characters, where XX is the state or province abbreviation.       |
| ZIPCode                               | No        | Identifies the ZIP code, ZIP Code + extension, or postal code or the end user where the telephone number is being serviced. Alphanumeric characters are supported with a max length of 10 characters (including the dash if using ZIP Code with extension). |
| TypeOfService                         | No        | The type of service identifying the end user account. Must be alphabetic characters only with a max length of 50 characters.                                                                                                                                |


{% common %}

### Create CSR Order

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/csrs HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Csr>
  <CustomerOrderId>CustomerOrderId</CustomerOrderId>
  <WorkingOrBillingTelephoneNumber>9198675309</WorkingOrBillingTelephoneNumber>
  <EndUserPIN>1234</EndUserPIN>
</Csr>

```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/csrs/{{csrOrderId}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CsrResponse>
    <OrderId>18cee9d0-a5c5-4322-9a47-d04176bc924c</OrderId>
    <Status>RECEIVED</Status>
</CsrResponse>
```

{% endextendmethod %}

---

## Receive callback for the CSR Order {#receive-callback}

Anytime the status of the order is updated (complete, error, etc...) Bandwidth will send an HTTP callback/webhook to the URL specified in the subscription.

**Bandwidth expects an HTTP-2xx response to any callbacks.**

{% extendmethod %}

### Callback Parameters

#### Request URL

<code class="post">POST</code>`{{your-callback-url_as-defined-in-the-subscription}}`

| Parameter           | Description                                                        |
|:--------------------|:-------------------------------------------------------------------|
| `<SubscriptionId>`  | Subscription ID that the notification is in response to.           |
| `<OrderType>`       | Will be `importtnorders`                                           |
| `<OrderId>`         | ID of the importTNOrder                                            |
| `<CustomerOrderId>` | Custom Order Id defined when creating the importTnOrder            |
| `<Status>`          | The newly updated status reflecting the state of the importTnOrder |
| `<Message>`         | Description about the status                                       |
| `<Note>`            | Custom note added when updating or creating the importTnOrder      |


{% common %}

### Receive Callback to your server

{% sample lang="http" %}

```http
POST https://your-callback-url_as-defined-in-the-subscription HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {subscription_user:subscription_password}

<?xml version="1.0"?>
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>importtnorders</OrderType>
    <OrderId>...</OrderId>
    <CustomerOrderId>...</CustomerOrderId>
    <Status>COMPLETE | FAILED | PARTIAL | EXCEPTION ... </Status>
    <Message>Import TN order processing has started.</Message>
    <Note>...</Note>
</Notification>
```

{% common %}

### Response as generated by **your** server

```http
HTTP/1.1 200 OK
```

{% endextendmethod %}

---

## Fetch Order Status {#fetch-order-status}

**Optional** At anytime, you're able to get the order status by creating a GET request to the order-id returned when creating the importTnOrder.

{% extendmethod %}

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders/{{orderId}}`

#### Response Parameters

| Parameters               | Description                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------|
| `<CustomerOrderId>`      | Custom OrderId provided when creating the order                                                         |
| `<OrderCreateDate>`      | Date order was created                                                                                  |
| `<AccountId>`            | AccountId for the import TN order                                                                       |
| `<CreatedByUser>`        | User that created the import TN Order                                                                   |
| `<OrderId>`              | Id of import TN order                                                                                   |
| `<LastModifiedDate>`     | The last time the import TN order was updated                                                           |
| `<SiteId>`               | The site (subaccount) the imported TN(s) will be assigned                                               |
| `<SipPeerId>`            | The sippeer (location) the imported TN(s) will be assigned                                              |
| `<Subscriber>`           | Subscriber information                                                                                  |
| `<LoaAuthorizingPerson>` | First and last name of person who authorized LOA.                                                       |
| `<TelephoneNumbers>`     | List of `TelephoneNumber` to import                                                                     |
| `<ProcessingStatus>`     | The current status of the import TN order. The `LastModifiedDate` indicates when the status was updated |
| `<Errors>`               | Any errors that occured during the request                                                              |

{% common %}

### Fetch importTnOrder Status

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/importTnOrders/{{orderId}} HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<ImportTnOrder>
   <OrderCreateDate>2019-08-28T13:09:11.192Z</OrderCreateDate>
   <AccountId>9900674</AccountId>
   <CreatedByUser>mmacchioni</CreatedByUser>
   <OrderId>fc84600b-6029-49b4-a09d-a813abb5f135</OrderId>
   <LastModifiedDate>2019-08-28T13:09:26.295Z</LastModifiedDate>
   <SiteId>14419</SiteId>
   <Subscriber>
      <Name>BANDWDITH</Name>
      <ServiceAddress>
         <HouseNumber>900</HouseNumber>
         <StreetName>Main Campus Dr.</StreetName>
         <City>Raleigh</City>
         <StateCode>NC</StateCode>
         <Zip>27606</Zip>
         <County>Wake</County>
         <Country>United States</Country>
         <AddressType>Service</AddressType>
      </ServiceAddress>
   </Subscriber>
   <LoaAuthorizingPerson>Mark Macchioni</LoaAuthorizingPerson>
   <TelephoneNumbers>
      <TelephoneNumber>9195041533</TelephoneNumber>
   </TelephoneNumbers>
   <ProcessingStatus>COMPLETE</ProcessingStatus>
   <Errors />
   <SipPeerId>521967</SipPeerId>
</ImportTnOrder>
```

{% endextendmethod %}

---

## Upload Letter of Authorization (LOA) {#upload-loa}

For **completed** orders, Bandwidth requires a completed Subscriber "Letter of Authorization" (LOA) from the phone number user.  The LOA file is used in the case there is a dispute to ensure the phone number had permission to be enabled for hosted messaging for Bandwidth.

You are able to keep the LOA file within your own system, or upload the file to Bandwidth as part of the `importTnOrder` path.

{% extendmethod %}

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders/{{orderId}}/loas`

#### Request Parameters

A POST request to the /loas resource will upload the file. The key attribute to a successful upload is to ensure that the headers are set correctly to support the _type_ of the file upload.

{% common %}

### Upload PDF for an importTnOrder

{% sample lang="http" %}

```http
POST https://dashboard.../{{accountId}}/importTnOrders/{{orderId}}/loas HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
Accept: /
Accept-Encoding: gzip, deflate
Content-Type: application/pdf
```

```
[file-content-as-body]
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
```
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>
```

{% endextendmethod %}

---

## Check in service numbers to ensure number imported {#check-inservice-numbers}

Optional, but recommended. To finally confirm that the phone number was successfully imported into your Bandwidth account, create a <code class="get">GET</code>  request to the inserviceNumbers to list the numbers in your account.

If everything was imported correctly, the recently imported number will appear in the returned payload.

{% extendmethod %}

### Inservice Numbers Parameters

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/inserviceNumbers`

#### Response Parameters

| Parameters           | Description                                                    |
|:---------------------|:---------------------------------------------------------------|
| `<TotalCount>`       | Total number of inserviceNumbers on the account                |
| `<Links>`            | Pagination parameters                                          |
| `<TelephoneNumbers>` | List of In-service Numbers represented by `<TelephoneNumber>`s |

{% common %}

### Fetch inServiceNumbers

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/inserviceNumbers HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<TNs>
    <TotalCount>59</TotalCount>
    <Links>
        <first> ( a link goes here ) </first>
    </Links>
    <TelephoneNumbers>
        <Count>59</Count>
        <TelephoneNumber>3032281000</TelephoneNumber>
        <TelephoneNumber>3032280004</TelephoneNumber>
        <!-- SNIP -->
        <TelephoneNumber>8043814900</TelephoneNumber>
        <TelephoneNumber>8047672642</TelephoneNumber>
        <TelephoneNumber>8043024368</TelephoneNumber>
        <TelephoneNumber>8042147950</TelephoneNumber>
        <TelephoneNumber>8043169931</TelephoneNumber>
        <TelephoneNumber>8043325302</TelephoneNumber>
    </TelephoneNumbers>
</TNs>
```

{% endextendmethod %}

---
