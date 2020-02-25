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

* [Create Subscription for CSR Order Updates](#create-subscription)
* [Create a CSR Order](#create-csr-order)
* [Receive callback for the CSR Order](#receive-callback)
* [Fetch Order Status](#fetch-order-status)

## Next Steps

Once the CSR record have been pulled, phone numbers are ready to create a [port order](portingPhoneNumbers.md) with the validated CSR information.

* [Porting Guide](portingPhoneNumbers.md)

## Importing Phone Numbers Overview

There are 3 different APIs that you will use to manage phone numbers for hosted messaging:

| Endpoint          | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| `/subscriptions`  | Setup Bandwidth to send HTTP Callbacks to your server as the status updates |
| `/csrs`           | Create the CSR lookup order.                                                |
| `/csrs/{orderId}` | Fetch information about the CSR lookup and order status                     |

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

{% sample lang="php" %}

```php
$subscription = $account->subscriptions()->create([
    "OrderType" => "csrs",
    "CallbackSubscription" => [
        "URL" => "{your-callback-url}"
    ]
]);
print_r($subscription->SubscriptionId);
```

{% sample lang="ruby" %}

```ruby
subscription = {
  :order_type => "csrs",
  :callback_subscription => {
    :URL => "https://test4.com"
  }
}
response = BandwidthIris::Subscription.create(subscription)
puts response.to_data()[:subscription_id]
```

{% common %}

### Response

{% sample lang="http" %}

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{applicationID}}
```

{% sample lang="php" %}

```php
390-f-42-89-40
```

{% sample lang="ruby" %}

```ruby
390-f-42-89-40
```

{% endextendmethod %}

---

## Create a CSR Order {#create-csr-order}

Before creating the order, be sure to collect any information from the end user to submit to the CSR API. Generally speaking, the more information provided, the better.

* Address
* AccountNumber
* PIN Numbers
* More (see table below for options)

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

{% sample lang="php" %}

```php
$csrOrder = new \Iris\Csr(array(
    "CustomerOrderId" => "order id",
    "WorkingOrBillingTelephoneNumber" => "5554443333"
));

$response = $account->createCsrOrder($csrOrder);
print_r($response->OrderId);
```

{% sample lang="ruby" %}

```ruby
csr_data = {
    :customer_order_id => "order id",
    :working_or_billing_telephone_number => "5554443333"
}

response = BandwidthIris::Csr.create(csr_data)
puts response[0][:order_id]
```

{% common %}

### Response

{% sample lang="http" %}

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/csrs/{{orderId}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CsrResponse>
    <OrderId>18cee9d0-a5c5-4322-9a47-d04176bc924c</OrderId>
    <Status>RECEIVED</Status>
</CsrResponse>
```

{% sample lang="php" %}

```php
18cee9d0-a5c5-4322-9a47-d04176bc924c
```

{% sample lang="ruby" %}

```ruby
18cee9d0-a5c5-4322-9a47-d04176bc924c
```

{% endextendmethod %}

---

## Receive callback for the CSR Order {#receive-callback}

Anytime the status of the order is updated (`COMPLETE`, `FAILED`, `ACTION_REQUIRED` etc...) Bandwidth will send an HTTP callback/webhook to the URL specified in the subscription.

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

### Example 1 of 2: Receive Successful Callback to your server

{% sample lang="http" %}

```http
POST https://your-callback-url_as-defined-in-the-subscription HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {subscription_user:subscription_password}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notification>
  <Status>COMPLETE</Status>
  <SubscriptionId>bfdf89f4-8d0c-4415-a203-ceb7afe00f88</SubscriptionId>
  <Message>The CSR request is complete.</Message>
  <OrderId>20ba7d26-7fa0-4716-ab45-6c8e07d37862</OrderId>
  <OrderType>csrs</OrderType>
</Notification>
```

{% common %}

### Response as generated by **your** server

```http
HTTP/1.1 200 OK
```

### Example 2 of 2: Receive Failed Callback to your server

{% sample lang="http" %}

```http
POST https://your-callback-url_as-defined-in-the-subscription HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {subscription_user:subscription_password}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notification>
  <Status>FAILED</Status>
  <SubscriptionId>bfdf89f4-8d0c-4415-a203-ceb7afe00f88</SubscriptionId>
  <Message>The CSR request has failed.</Message>
  <OrderId>91e7298a-0942-47e4-996b-788da5544b6b</OrderId>
  <OrderType>csrs</OrderType>
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

At anytime, you're able to get the order status by creating a GET request to the order-id returned when creating the CSR order.
You'll need to fetch the order status for both `FAILED` and `COMPLETE` CSR order statuses for more detail on the CSR request.

{% extendmethod %}

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/csrs/{{orderId}}`

#### Response Parameters

| Parameters           | Description                                                                                                                                                                                                                     |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<CustomerOrderId>`  | Custom OrderId provided when creating the order                                                                                                                                                                                 |
| `<OrderCreateDate>`  | Date order was created                                                                                                                                                                                                          |
| `<AccountId>`        | AccountId for the import TN order                                                                                                                                                                                               |
| `<CreatedByUser>`    | User that created the import TN Order                                                                                                                                                                                           |
| `<OrderId>`          | Id of import TN order                                                                                                                                                                                                           |
| `<LastModifiedDate>` | The last time the import TN order was updated                                                                                                                                                                                   |
| `<Status>`           | The current status of the import TN order. The `LastModifiedDate` indicates when the status was updated                                                                                                                         |
| `<CsrData>`          | The complete CSR data from the lookup request.  The element will contain sub-elements such as:<br><ul><li>CustomerName</li><li>ServiceAddress</li><li>WorkingTelephoneNumbersOnAccount</li><li>WorkingTelephoneNumber</li></ul> |
| `<Errors>`           | Any errors that occured during the request                                                                                                                                                                                      |

{% common %}

### Example 1 of 2: Fetch Successful CSR Order Status

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/csrs/{{orderId}} HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% sample lang="php" %}

```php
$response = $account->getCsrOrder("csr_id");
print_r($response->CsrData->CustomerName);
```

{% sample lang="ruby" %}

```ruby
response = BandwidthIris::Csr.get("csr_id")
puts response[0][:csr_data][:customer_name]
```

{% common %}

> Responds

{% sample lang="http" %}

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CsrResponse>
  <LastModifiedBy>{api-userName}</LastModifiedBy>
  <OrderCreateDate>2020-02-25T15:39:22.079Z</OrderCreateDate>
  <AccountId>{accountId}</AccountId>
  <OrderId>20ba7d26-7fa0-4716-ab45-6c8e07d37862</OrderId>
  <LastModifiedDate>2020-02-25T15:39:41.166Z</LastModifiedDate>
  <Status>COMPLETE</Status>
  <CsrData>
    <CustomerName>House of Mouse</CustomerName>
    <ServiceAddress>
      <UnparsedAddress>1234 Main ST Durham NC 27707</UnparsedAddress>
      <HouseNumber>1234</HouseNumber>
      <StreetName>Main</StreetName>
      <StreetSuffix>ST</StreetSuffix>
      <City>Durham</City>
      <State>NC</State>
      <Zip>27707</Zip>
    </ServiceAddress>
    <WorkingTelephoneNumber>9198675309</WorkingTelephoneNumber>
    <WorkingTelephoneNumbersOnAccount>
      <TelephoneNumber>9198675309</TelephoneNumber>
    </WorkingTelephoneNumbersOnAccount>
  </CsrData>
</CsrResponse>
```

{% sample lang="php" %}

```php
House of Mouse
```

{% sample lang="ruby" %}

```ruby
House of Mouse
```

{% common %}

### Example 2 of 2: Fetch Failed CSR Order Status

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/csrs/{{orderId}} HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% sample lang="php" %}

```php
$response = $account->getCsrOrder($bad_order_id);
print_r($response->Errors->Error->Description);
```

{% sample lang="ruby" %}

```ruby
begin
    response = BandwidthIris::Csr.get(bad_order_id)
    puts response
rescue => e
    puts e
end
```

{% common %}

> Responds

{% sample lang="http" %}

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CsrResponse>
  <Errors>
    <Error>
      <Code>26500</Code>
      <Description>CSR is not available for this TN</Description>
    </Error>
  </Errors>
  <LastModifiedBy>{api-userName}</LastModifiedBy>
  <OrderCreateDate>2020-02-25T15:16:42.196Z</OrderCreateDate>
  <AccountId>{accoundId}</AccountId>
  <OrderId>2c61ed2d-a8d7-4b78-8b5a-dcded8390ec8</OrderId>
  <LastModifiedDate>2020-02-25T15:16:42.841Z</LastModifiedDate>
  <Status>FAILED</Status>
  <CsrData>
    <WorkingTelephoneNumber>9198675309</WorkingTelephoneNumber>
  </CsrData>
</CsrResponse>
```

{% sample lang="php" %}

```php
CSR is not available for this TN
```

{% sample lang="ruby" %}

```ruby
CSR is not available for this TN
```

{% endextendmethod %}
