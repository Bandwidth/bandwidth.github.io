# How to Get Started with Bandwidth Hosted Messaging

<aside class="alert warning small"><p>Your account must be enabled for Hosted Messaging</p></aside>

![Description Image](../images/how-to-import-numbers.png)

## Step 1 *Create Import Request* - Using the Dashboard API
<code class="post">POST</code> to `/accounts/{accountId}/externalTns` With a list of phone numbers you would like to use Bandwidth for messaging.

| Parameter           | Description                                                                        | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------| :-- |
| `CustomerOrderID` | An order ID created by the customer for their tracking purposes                        | Yes |
| `SiteId`          | The ID of the Site that the Telephone Numbers are to be provisioned to.     | Yes |
| `SipPeerId`       | The ID of the SIP Peer that the Telephone Numbers are to be provisioned to. | No |
| `Action`          |  Indentify the action on external TNs. Allowed values... IMPORT or REMOVE.   | Yes |

### Example: XML Request

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <CustomerOrderID>ICPA123ABC</CustomerOrderID>
    <SiteId>743</SiteId>
    <SipPeerId>303716</SipPeerId>
    <Action>[ IMPORT | REMOVE ]</Action>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</ExternalTnsOrder>
```

#### Example: XML Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrderResponse>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>RECEIVED</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
</ExternalTnsOrderResponse>
```

## Step 2 *Get Status* - Using the Dashboard API
Using the the `<OrderId>` returned in step fetch the `<ProcessingStatus>` of the order by:

<code class="get">GET</code> to `/accounts/{accountId}/externalTns/<{{OrderId}}>`

The `<ProcessingStatus>` has multiple values:

<aside class="alert general small"><p>Only numbers that are COMPLETED without ERROR can be used.</p></aside>

| Status     | Description                                                                                     |
|:-----------|:------------------------------------------------------------------------------------------------|
| `RECEIVED`   | Order has yet to be processed, initial status                                                   |
| `PROCESSING` | Order is processing through                                                                     |
| `COMPLETE`   | Every number requested in the number is now available via Dashboard                             |
| `PARTIAL`    | Some numbers were procesed, others failed. <br> Check the `<ERRORS>` field for more information |
| `FAILED`     | Entire order failed. <br> Check the `<ERRORS>` field for more information.                       |

### Example: COMPLETE XML Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>COMPLETE</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
</ExternalTnsOrder>
```

### Example: PARTIAL XML Response

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>PARTIAL</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
    <Errors>
        <Error>
            <Code>[int]</Code>
            <Description>[string]</Description>
            <TelephoneNumbers>
                <TelephoneNumber>9199918388</TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </Errors>
</ExternalTnsOrder>
```

## Step 3 *Create Application* - Using the Bandwidth Communication API

You'll need to configure an [`application`](http://dev.bandwidth.com/ap-docs/methods/applications/applications.html) in the Bandwidth Communication API. You may already have an application configured; if so, take note of the `applicationId`. Otherwise you'll need to create an application.

| Parameter                         | Description                                                                                                      | Mandatory |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------|:----------|
| `name`                              | A name you choose for this application.                                                                          | Yes       |
| `incomingMessageUrl`                | A URL where message events will be sent for an inbound SMS message                                               | Yes        |
| `incomingMessageUrlCallbackTimeout` | Determine how long should the platform wait for incomingMessageUrl's response before timing out in milliseconds. | No        |
| `incomingMessageFallbackUrl`        | The URL used to send the callback event if the request to incomingMessageUrl fails.                              | No        |
| `callbackHttpMethod`                | Set to <code class="post">POST</code> to use [REST API Control](http://dev.bandwidth.com/ap-docs/apiCallbacks/messagingEvents.html)<br> Set to <code class="get">GET</code> to use [BXML Control](http://dev.bandwidth.com/ap-docs/bxml/callBacks/incomingSMS.html)  | No        |

### Example: Create an application

<code class="post">POST</code> to `https://api.catapult.inetwork.com/v1/users/{userId}/applications/`

```json
{
  "name": "MyFirstApp",
  "incomingMessageUrl": "http://example.com/messages.php",
  "callbackHttpMethod": "POST"
}
 ```

#### Example Response: 201 - Created

The `applicationId` is returned in the `Location` Header.

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/applications/{applicationId}
```

## Step 4 *Import Number* - Using the Bandwidth Communication API

Import numbers with the `applicationId` from Step 3

| Parameter          | DESCRIPTION                                                                                                                                                 | Mandatory
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:---|
| `Number`              | Dashboard Phone Number being imported. E.164 format.                                                                                                        |Yes|
| `applicationId`    | HTTP Application you want the phone number to be registered to for inbound messages.                  |Yes|
| `providerName`     | Always use this provider “bandwidth-dashboard”                                                                                                              |Yes|
| `accountId` | This ID is associated with your Bandwidth Dashboard account. Note: If you don’t know your Provider Account ID, please open a ticket with our support group. |Yes|
| `userName` | This is your user name used to log into the Bandwidth Dashboard.                                                                                            |Yes|
| `password`   | This is your password used to log into the Bandwidth Dashboard.                                                                                             |Yes|

### Example: Import Numbers (One at a time)

You'll need to repeat this process for _EVERY_ number imported in Step 1.

<code class="post">POST</code> to `https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers`

```json
{
  "number": "+14352154439",
  "applicationId":"{{applicationId}}",
  "name" : "text messaging TN",
  "provider": {
    "providerName": "bandwidth-dashboard",
    "properties": {
      "accountId": "9999999",
      "userName": "wileCoyote",
      "password": "catchThatBird"
    }
  }
}
```

#### Example Respone: 201 - Created

The `numberId` is returned in the `Location` Header.

```
201 Created
Location:
https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers/n-id3x6rblp4jrkih2u7zxjdy
```

## Step 5 *Send Message* - Using the Bandwidth Communication API

To send a message with your imported number, use the `/messaging` capabilities as normal.

* [Learn About Sending Messages](http://dev.bandwidth.com/ap-docs/methods/messages/messages.html)

### Example: Send New Message

<code class="post">POST</code> to `https://api.catapult.inetwork.com/v1/users/{userId}/messages`

```json
{
    "from": "14352154439",
    "to": "{toNumber}",
    "text": "Good morning, this is a test message"
}
```

#### Example Respone: 201 - Created

The `messageId` is returned in the `Location` Header.

```
201 Created
Location:
https://api.catapult.inetwork.com/v1/users/{{UserId}}/messages/m-id3x6rblp4jrkih2u7zxjdy
```

## Step 6 *Incoming Messages* - Using the Bandwidth Communication API

Bandwith will send you either a <code class="get">GET</code> or <code class="post">POST</code> HTTP Callback based on your `application` configuration in Step 3.

* [Learn About Incoming Messages *POST*](http://dev.bandwidth.com/ap-docs/apiCallbacks/messagingEvents.html)
* [Learn About Incoming Messages *GET*](http://dev.bandwidth.com/ap-docs/bxml/callBacks/incomingSMS.html)


### Example `GET` Callback

All the relevant fields are passed as query parameters

<code class="get">GET</code> `http://[External server URL]`

```html
/{callbackUrl}?
  messageId=m-asdf&
  from=%2B19191231111&
  eventType=sms&
  text=test&
  time=2016-12-01T16:04:49Z&
  to=%2B14352154439&
  state=received&
  applicationId=a-yr3jpxasdfh5xh5e35saoi&
  direction=in&
  messageUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2Fu-123%2Fmessages%2Fm-asdf
```

### Example `POST` Callback

<code class="post">POST</code> `http://[External server URL]`

```json
{
   "eventType":"sms",
   "direction":"in",
   "messageId": "{messageId}",
   "messageUri": "https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}",
   "from":"+13233326955",
   "to":"+14352154439",
   "text":"Example",
   "applicationId":"{appId}",
   "time":"2012-11-14T16:13:06.076Z",
   "state":"received"
}
```
