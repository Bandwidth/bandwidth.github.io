{% method %}

## Send SMS or MMS Messages

Endpoint for sending text messages and picture messages using V2 messaging.

### Request URL

<code class="post">POST</code>`https://messaging.bandwidth.com/api/v2/users/{userId}/messages`

** Notice: The old URL `https://api.catapult.inetwork.com/v2/users/{userId}/messages` has been deprecated, and will be taken offline June 13th, 2019. Please update your system to use the new URL. **

### Invalid Phone Number handing

When sending a group message to an invalid phone number, you may receive extraneous [callback events](../events/messageEvents.md).  You can read more on the [Messaging API concepts page](../concepts.md#group-message-invalid).

### Tags
* If there is a need to identify individual outbound messages, or correlate them with an ID in your own application, the `tag` field can be set to any string (max 1024 chars). The custom `tag` will be included in all callbacks for an outbound message.

### Supported Parameters
| Parameter     | Type                                                                  | Description                                                                                                                                                                                                                              | Mandatory |
|:--------------|:----------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from          | `string`                                                              | One of your telephone numbers the message should come from (must be in E.164 format, like `+19195551212`).                                                                                                                                 | Yes       |
| to            | `string`<br>**-OR-**<br>`array` of `1` (one) or more `strings`                 | The phone number(s) the message should be sent to (must be in E.164 format, like `+19195551212`). <br><br> Example: <br> `"+19195551212"` <br> **-OR-**<br> `["+19195551212"]` <br> **-OR-**<br> `["+19195551212", "+19195554444", "+19192227777"]` <br><br> **If you supply more than one number, it will be sent as a group message.** | Yes       |
| text          | `string`                                                              | The contents of the text message (must be 2048 characters or less).                                                                                                                                                                      | Yes       |
| applicationId | `string`                                                              | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                 | Yes       |
| media*         | `array`                                                               | A list of URLs to include as media attachments as part of the message. If this field is included, the message will be sent as MMS no matter the number of recipients. Media sent in messages is limited to 3.75MB.                                                                                                                                                                   | No        |
| tag           | `string`                                                              | Any string which will be included in the callback events of the message. (max 1024 Chars)                                                                                                                                                                 | No        |

*Please check the [FAQ](https://dev.bandwidth.com/faq) for information on media size limits

{% common %}

### Example 1 of 5: Send a single text message

{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   {
     to            : [ '+12345678902'],
     from          : '+12345678901',
     text          : 'Hey, check this out!',
     applicationId : '93de2206-9669-4e07-948d-329f4b722ee2',
     tag           : 'test message'
   },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [ "+12345678902" ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "direction"     : "out",
  "segmentCount"  : 1
}
```


### Example 2 of 5: Send a picture message
{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
    ],
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
          ],
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   { to: [ '+12345678902'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     applicationId: '93de2206-9669-4e07-948d-329f4b722ee2',
     media: [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
      ],
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [
    "+12345678902",
  ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "media"         : [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
  ],
  "direction"     : "out",
  "segmentCount"  : 1
}
```

### Example 3 of 5: Send multiple pictures in a message
{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
      "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
    ],
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
          "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
        ],
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body: {
   to            : [ '+12345678902'],
   from          : '+12345678901',
   text          : 'Hey, check this out!',
   applicationId : '93de2206-9669-4e07-948d-329f4b722ee2',
   media         : [
    'https://s3.amazonaws.com/bw-v2-api/demo.jpg',
    'https://s3.amazonaws.com/bw-v2-api/demo2.jpg'
   ],
   tag           : 'test message'},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"           : "14762070468292kw2fuqty55yp2b2",
  "time"         : "2016-09-14T18:20:16Z",
  "to"           : [
    "+12345678902",
  ],
  "from"         : "+12345678901",
  "text"         : "Hey, check this out!",
  "tag"          : "test message",
  "owner"        : "+12345678901",
  "media"        : [
   "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
   "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
  ],
  "direction"    : "out",
  "segmentCount" : 1
}
```
### Example 4 of 5: Send a group message

{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : [
      "+12345678902",
      "+12345678903"
    ],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : [
          "+12345678902",
          "+12345678903"
        ],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   { to: [ '+12345678902', '+12345678903'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     applicationId: '93de2206-9669-4e07-948d-329f4b722ee2',
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [
    "+12345678902",
    "+12345678903"
  ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "direction"     : "out",
  "segmentCount"  : 1
}
```

### Example 5 of 5: Send a picture to a group message thread
{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : [
      "+12345678902",
      "+12345678903"
    ],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
    ],
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : [
          "+12345678902",
          "+12345678903"
        ],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
        ],
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://messaging.bandwidth.com/api/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   { to          : [ '+12345678902', '+12345678903'],
   from          : '+12345678901',
   text          : 'Hey, check this out!',
   applicationId : '93de2206-9669-4e07-948d-329f4b722ee2',
   media         : [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
   ],
   tag           : 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [
    "+12345678902",
    "+12345678903"
  ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "media"         : [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
  ],
  "direction"     : "out",
  "segmentCount"  : 1
}
```

{% endmethod %}
