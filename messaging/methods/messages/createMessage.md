{% method %}

## Send SMS or MMS Messages

Endpoint for sending text messages and picture messages using V2 messaging.

### Request URL

<code class="post">POST</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/messages`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API username and password. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Invalid Phone Number Handling

When sending a group message to an invalid phone number, you may receive extraneous [callback events](../../callbacks/messageEvents.md).  You can read more on the [Messaging API concepts page](../../about.md#group-message-invalid).

### Tags

* If there is a need to identify individual outbound messages, or correlate them with an ID in your own application, the `tag` field can be set to any string (max 1024 chars). The custom `tag` will be included in all callbacks for an outbound message.
* ⚠️ The tag field is intended for use in correlation/troubleshooting. **You should not include sensitive or personally-identifiable information in the tag field.**

### Supported Parameters

| Parameter     | Mandatory | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:--------------|:----------|:---------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| from          | Yes       | `string`                                                       | One of your telephone numbers the message should come from (must be in E.164 format, like `+19195551212`).                                                                                                                                                                                                                                                                                                                    |
| to            | Yes       | `string`<br>**-OR-**<br>`array` of `1` (one) or more `strings` | The phone number(s) the message should be sent to (must be in E.164 format, like `+19195551212`). <br><br> Example: <br> `"+19195551212"` <br> **-OR-**<br> `["+19195551212"]` <br> **-OR-**<br> `["+19195551212", "+19195554444", "+19192227777"]` <br><br> **If you supply more than one number, it will be sent as a group message.**                                                                                      |
| text          | Yes (if media is not provided)      | `string`                                                       | The contents of the text message (must be 2048 characters or less).                                                                                                                                                                                                                                                                                                                                                           |
| applicationId | Yes       | `string`                                                       | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                                                                                      |
| media*        | No (required if no text is provided)       | `array`                                                        | A list of URLs to include as media attachments as part of the message. If this field is included, the message will be sent as MMS no matter the number of recipients.<br>Refer to the [What MMS message size limits must be adhered to?](https://support.bandwidth.com/hc/en-us/articles/360014235473-What-MMS-message-size-limits-must-be-adhered-to-) article to learn more about file size limitations and best practices. |
| tag           | No        | `string`                                                       | Any string which will be included in the callback events of the message. (max 1024 Chars)                                                                                                                                                                                                                                                                                                                                     |
| priority      | No        | `string` | The message's priority, currently for toll-free or short code SMS only. Accepted values are `"default"` or `"high"`. Messages with a priority value of `"high"` are given preference over your other traffic. If not set in the request body, Bandwidth will use the `"default"` value. |

* Please check the [FAQ](https://support.bandwidth.com) for information on media size limits

### Response Parameters

| Parameter     | Type     | Description                                                                                                                                                                                                                                                                                                                                                         |
|:--------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                                                                       |
| owner         | `string` | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to. |
| time          | `string` | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                          |
| direction     | `string` | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                      |
| to            | `array`  | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                  |
| from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| text          | `string` | Empty text/string. Message text content will not be sent in callback.                                                                                                                                                                                                                                                                                               |
| applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| media         | `array`  | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| tag           | `string` | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| segmentCount  | `int`    | This indicates the number of segments the original message from the user is broken into before sending over to carrier networks                                                                                                                                                                                                                                      |
| priority      | `string` | The priority specified by the user |
{% common %}

### Example 1 of 5: Send a single text message

{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{accountId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "tag"           : "test message"
}

```

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

{% sample lang='bash' %}

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "tag"           : "test message"
    }
  '
```


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

{% sample lang="java" %}

```java
MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();

toNumbers.add("+12345678902");

messageRequest.setApplicationId(MSG_APPLICATION_ID);
messageRequest.setText("Hey, check this out!");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );
messageRequest.setTag("test tag");

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
System.out.println(response.getResult().getId());
```

{% sample lang="csharp" %}

```csharp
MessageRequest messageRequest = new MessageRequest();
messageRequest.ApplicationId = MSG_APPLICATION_ID;
messageRequest.To = new List<string> { "+12345678902" };
messageRequest.From = "+12345678901";
messageRequest.Text = "Hey, check this out!";
messageRequest.Tag = "test message";

var response = msgClient.CreateMessage(MSG_ACCOUNT_ID, messageRequest);

Console.WriteLine(response.Data.Id);
```


{% sample lang="ruby" %}

```ruby
body = MessageRequest.new
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.from = "+12345678901"
body.text = "Hey, check this out!"
body.tag = "test message"
begin
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    puts result.data.id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = MessageRequest()
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.mfrom = "+12345678901"
body.text = "Hey, check this out!"
try:
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    print(result.body.id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.'
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult());
} catch (Exception $e) {
    print_r($e);
}
```

{% common %}

### Example 2 of 5: Send a picture message
{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{accountId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

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

{% sample lang='bash' %}

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
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

{% sample lang="java" %}

```java
MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();
List<String> medias = new ArrayList<>();

toNumbers.add("+12345678902");
medias.add("https://s3.amazonaws.com/bw-v2-api/demo.jpg");

messageRequest.setApplicationId(MSG_APPLICATION_ID);
messageRequest.setText("Hey, check this out!");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );
messageRequest.setTag("test tag");
messageRequest.setMedia(medias);

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
System.out.println(response.getResult().getId());
```

{% sample lang="csharp" %}

```csharp
MessageRequest messageRequest = new MessageRequest();
messageRequest.ApplicationId = MSG_APPLICATION_ID;
messageRequest.To = new List<string> { "+12345678902" };
messageRequest.From = "+12345678901";
messageRequest.Text = "Hey, check this out!";
messageRequest.Tag = "test message";
messageRequest.Media = new List<string> { "https://s3.amazonaws.com/bw-v2-api/demo.jpg" };

var response = msgClient.CreateMessage(MSG_ACCOUNT_ID, messageRequest);

Console.WriteLine(response.Data.Id);
```


{% sample lang="ruby" %}

```ruby
body = MessageRequest.new
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.from = "+12345678901"
body.text = "Hey, check this out!"
body.tag = "test message"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg"]
begin
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    puts result.data.id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = MessageRequest()
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.mfrom = "+12345678901"
body.text = "Hey, check this out!"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg"]
try:
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    print(result.body.id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.',
    media: ['https://s3.amazonaws.com/bw-v2-api/demo.jpg']
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";
$body->media = array("https://s3.amazonaws.com/bw-v2-api/demo.jpg");

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult());
} catch (Exception $e) {
    print_r($e);
}
```

{% common %}

### Example 3 of 5: Send multiple pictures in a message
{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{accountId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

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

{% sample lang='bash' %}

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
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
{% sample lang="java" %}

```java
MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();
List<String> medias = new ArrayList<>();

toNumbers.add("+12345678902");
medias.add("https://s3.amazonaws.com/bw-v2-api/demo.jpg");
medias.add("https://s3.amazonaws.com/bw-v2-api/demo2.jpg");

messageRequest.setApplicationId(applicationId);
messageRequest.setText("Hello World");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );
messageRequest.setMedia(medias);

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
response.getResult().getId();
System.out.println(response.getResult().getId());
```

{% sample lang="csharp" %}

```csharp
MessageRequest messageRequest = new MessageRequest();
messageRequest.ApplicationId = MSG_APPLICATION_ID;
messageRequest.To = new List<string> { "+12345678902" };
messageRequest.From = "+12345678901";
messageRequest.Text = "Hey, check this out!";
messageRequest.Tag = "test message";
messageRequest.Media = new List<string> { "https://s3.amazonaws.com/bw-v2-api/demo.jpg", "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"  };

var response = msgClient.CreateMessage(MSG_ACCOUNT_ID, messageRequest);

Console.WriteLine(response.Data.Id);
```


{% sample lang="ruby" %}

```ruby
body = MessageRequest.new
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.from = "+12345678901"
body.text = "Hey, check this out!"
body.tag = "test message"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg", "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"]
begin
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    puts result.data.id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = MessageRequest()
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902"]
body.mfrom = "+12345678901"
body.text = "Hey, check this out!"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg", "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"]
try:
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    print(result.body.id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.',
    media: ['https://s3.amazonaws.com/bw-v2-api/demo.jpg', 'https://s3.amazonaws.com/bw-v2-api/demo-2.jpg']
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";
$body->media = array("https://s3.amazonaws.com/bw-v2-api/demo.jpg", "https://s3.amazonaws.com/bw-v2-api/demo2.jpg");

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult());
} catch (Exception $e) {
    print_r($e);
}
```

{% common %}

### Example 4 of 5: Send a group message

{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{accountId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

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

{% sample lang='bash' %}

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
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

{% sample lang="java" %}

```java
MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();
List<String> medias = new ArrayList<>();

toNumbers.add("+12345678902");
toNumbers.add("+12345678903");

messageRequest.setApplicationId(applicationId);
messageRequest.setText("Hello World");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
System.out.println(response.getResult().getId());
```

{% sample lang="csharp" %}

```csharp
MessageRequest messageRequest = new MessageRequest();
messageRequest.ApplicationId = MSG_APPLICATION_ID;
messageRequest.To = new List<string> { "+12345678902", "+12345678903" };
messageRequest.From = "+12345678901";
messageRequest.Text = "Hey, check this out!";
messageRequest.Tag = "test message";

var response = msgClient.CreateMessage(MSG_ACCOUNT_ID, messageRequest);

Console.WriteLine(response.Data.Id);
```


{% sample lang="ruby" %}

```ruby
body = MessageRequest.new
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902", "+12345678903"]
body.from = "+12345678901"
body.text = "Hey, check this out!"
body.tag = "test message"
begin
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    puts result.data.id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = MessageRequest()
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902", "+12345678903"]
body.mfrom = "+12345678901"
body.text = "Hey, check this out!"
try:
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    print(result.body.id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999', '+10000000000'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.'
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902", "+12345678903");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult());
} catch (Exception $e) {
    print_r($e);
}
```

{% common %}

### Example 5 of 5: Send a picture to a group message thread

{% sample lang='http' %}

```http
POST https://messaging.bandwidth.com/api/v2/users/{accountId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

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

{% sample lang='bash' %}

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
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

{% sample lang="java" %}
```java
MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();
List<String> medias = new ArrayList<>();

toNumbers.add("+12345678902");
toNumbers.add("+12345678903");

medias.add("https://s3.amazonaws.com/bw-v2-api/demo.jpg");

messageRequest.setApplicationId(applicationId);
messageRequest.setText("Hello World");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );
messageRequest.setMedia(medias);

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
System.out.println(response.getResult().getId());
```

{% sample lang="csharp" %}

```csharp
MessageRequest messageRequest = new MessageRequest();
messageRequest.ApplicationId = MSG_APPLICATION_ID;
messageRequest.To = new List<string> { "+12345678902", "+12345678903" };
messageRequest.From = "+12345678901";
messageRequest.Text = "Hey, check this out!";
messageRequest.Tag = "text message";
messageRequest.Media = new List<string> { "https://s3.amazonaws.com/bw-v2-api/demo.jpg" };

var response = msgClient.CreateMessage(MSG_ACCOUNT_ID, messageRequest);
```


{% sample lang="ruby" %}

```ruby
body = MessageRequest.new
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902", "+12345678903"]
body.from = "+12345678901"
body.text = "Hey, check this out!"
body.tag = "test message"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg"]
begin
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    puts result.data.id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = MessageRequest()
body.application_id = "93de2206-9669-4e07-948d-329f4b722ee2"
body.to = ["+12345678902", "+12345678903"]
body.mfrom = "+12345678901"
body.text = "Hey, check this out!"
body.media = ["https://s3.amazonaws.com/bw-v2-api/demo.jpg"]
try:
    result = messaging_client.create_message(MESSAGING_ACCOUNT_ID, body)
    print(result.body.id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999', '+10000000000'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.',
    media: ['https://s3.amazonaws.com/bw-v2-api/demo.jpg']
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902", "+12345678903");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";
$body->media = array("https://s3.amazonaws.com/bw-v2-api/demo.jpg");

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult());
} catch (Exception $e) {
    print_r($e);
}
```

{% endmethod %}
