## How to Import Bandwidth Numbers to your account

![Description Image](../images/how-to-import-numbers.png)

## PreReqs

|                 | Description                                                                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `accountId`     | This ID is associated with your Bandwidth Dashboard account. Note: If you don’t know your Provider Account ID, please open a ticket with our support group. |
| `userName`      | This is your user name used to log into the Bandwidth Dashboard.                                                                                            |
| `password`      | This is your password used to log into the Bandwidth Dashboard.                                                                                             |
| `userId`        | This is the user id associated with your [application platform account](../security.md)                                                                     |
| `token`         | This is the api token associated with your [application platform account](../security.md)                                                                   |
| `secret`        | This is the api secret associated with your [application platform account](../security.md)                                                                  |
| `applicationId` | This is the application platform [applicationId](incomingCallandMessaging.md) to assign the imported numbers.                                               |

## Step 1 **Import Number** - Using the Bandwidth Voice & Messaging API

Import numbers with the `applicationId`

| Parameter       | Description                                                                                                                                                 | Mandatory |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| `Number`        | Dashboard Phone Number being imported. E.164 format.                                                                                                        | Yes       |
| `applicationId` | HTTP Application you want the phone number to be registered to for inbound messages.                                                                        | Yes       |
| `providerName`  | Always use this provider “bandwidth-dashboard”                                                                                                              | Yes       |
| `accountId`     | This ID is associated with your Bandwidth Dashboard account. Note: If you don’t know your Provider Account ID, please open a ticket with our support group. | Yes       |
| `userName`      | This is your user name used to log into the Bandwidth Dashboard.                                                                                            | Yes       |
| `password`      | This is your password used to log into the Bandwidth Dashboard.                                                                                             | Yes       |

### Example: Import Numbers (One at a time)

You'll need to repeat this process for _EVERY_ number that will be imported to the application platform from the Bandwidth Dashboard.

<code class="post">POST</code> to `https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers`

```http
POST https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "number"        : "+14352154439",
  "applicationId" : "{{applicationId}}",
  "name"          : "text messaging TN",
  "provider"      : {
    "providerName" : "bandwidth-dashboard",
    "properties"   : {
      "accountId" : "9999999",
      "userName"  : "wileCoyote",
      "password"  : "catchThatBird"
    }
  }
}
```

#### Example Respone: 201 - Created

The `numberId` is returned in the `Location` Header.

```http
Status: 201 Created
Location: https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers/n-id3x6rblp4jrkih2u7zxjdy
```

## Step 2 **Send Message** - Using the Bandwidth Communication API

To send a message with your imported number, use the `/messaging` capabilities as normal.

* [Learn About Sending Messages](https://dev.bandwidth.com/ap-docs/methods/messages/messages.html)

### Example: Send New Message

<code class="post">POST</code> to `https://api.catapult.inetwork.com/v1/users/{userId}/messages`

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "from" : "14352154439",
    "to"   : "{toNumber}",
    "text" : "Good morning, this is a test message"
}
```

#### Example Respone: 201 - Created

The `messageId` is returned in the `Location` Header.

```http
Status: 201 Created
Location: https://api.catapult.inetwork.com/v1/users/{{UserId}}/messages/m-id3x6rblp4jrkih2u7zxjdy
```

## Step 3 **Incoming Messages** - Using the Bandwidth Communication API

Bandwith will send you either a <code class="get">GET</code> or <code class="post">POST</code> HTTP Callback based on your `application` configuration in Step 3.

* [Learn About Incoming Messages *POST*](https://dev.bandwidth.com/ap-docs/apiCallbacks/messagingEvents.html)
* [Learn About Incoming Messages *GET*](https://dev.bandwidth.com/ap-docs/bxml/callBacks/incomingSMS.html)


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

```http
POST http://your-url-for-callbacks.com HTTP/1.1
Content-Type: application/json; charset=utf-8

{
   "eventType"     : "sms",
   "direction"     : "in",
   "messageId"     : "{messageId}",
   "messageUri"    : "https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}",
   "from"          : "+13233326955",
   "to"            : "+14352154439",
   "text"          : "Example",
   "applicationId" : "{appId}",
   "time"          : "2012-11-14T16:13:06.076Z",
   "state"         : "received"
}
```
