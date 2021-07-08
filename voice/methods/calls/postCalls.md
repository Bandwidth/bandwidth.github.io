{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.


<aside class="alert general">
<p>IMPORTANT NOTE ABOUT AUTHORIZATION!</p>
You should not include sensitive or personally-identifiable information in any tag or URL field! Always use the proper username and password fields for authorization.
</aside>


---

### Supported Parameters

| Parameter | Description | Mandatory |
|:----------|:------------|:----------|
| from | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+15555551212`, or be one of the following strings: `Restricted`, `Anonymous`, `Private`, or `Unavailable`). | Yes |
| to | The destination to call (must be an E.164 formatted number (e.g. `+15555551212`) or a SIP URI (e.g. `sip:user@server.com`)). | Yes |
| applicationId | The id of the application to associate this call with, for billing purposes. | Yes |
| answerUrl | The full URL to send the [Answer](../../bxml/callbacks/answer.md) event to when the called party answers. This endpoint should return the first [BXML document](../../bxml/about.md) to be executed in the call. | Yes |
| answerMethod | (optional) The HTTP method to use for the request to `answerUrl`. GET or POST. Default value is POST. | No |
| disconnectUrl | (optional) The URL to send the [Disconnect](../../bxml/callbacks/disconnect.md) event to when the call ends. This event does not expect a BXML as response. | No |
| disconnectMethod | (optional) The HTTP method to use for the request to `disconnectUrl`. GET or POST. Default value is POST. | No |
| username | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`. | No |
| password | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`. | No |
| callTimeout | (optional) This is the timeout (in seconds) for the callee to answer the call.  Can be any numeric value (including decimals) between 1 and 300.  Default: 30 | No |
| tag | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. | No |
| answerFallbackUrl | (optional) A fallback url which, if provided, will be used to retry the answer callback delivery in case `answerUrl` fails to respond | No |
| answerFallbackMethod | (optional) The HTTP method to use to deliver the answer callback to `answerFallbackUrl`. GET or POST. Default value is POST. | No |
| fallbackUsername | (optional) The username to send in the HTTP request to `answerFallbackUrl` | No |
| fallbackPassword | (optional) The password to send in the HTTP request to `answerFallbackUrl` | No |
| callbackTimeout | (optional) This is the timeout (in seconds) to use when delivering callbacks for the call. Can be any numeric value (including decimals) between 1 and 25. Default: 15 | No |
| uui | (optional) The value of the `User-To-User` header to send within the initial `INVITE` when calling a SIP URI. Must include the `encoding` parameter as specified in [`RFC 7433`](https://tools.ietf.org/html/rfc7433). Only `base64` and `jwt` encoding are currently allowed. This value, including the encoding specifier, may not exceed 256 characters. | No |
| machineDetection | (optional) The [machine detection request](#machine-detection-request) used to perform a [machine detection](../../guides/machineDetection.md) operation on the answerer leg. | No |

**NOTE:** Any error that causes the call to be hung up (for example invalid BXML or rate limiting) will be delivered to the `disconnectUrl` via a [Disconnect](../../bxml/callbacks/disconnect.md) event.  This is currently the only way to receive user errors, so while `disconnectUrl` is not mandatory, we highly recommend providing it so that user errors can be delivered.

#### Machine detection request

| Parameter          | Description | Mandatory |
|:-------------------|:------------|:----------|
| mode               | The machine detection mode. Can be [`sync`](../../guides/machineDetection.md#sync-mode) or [`async`](../../guides/machineDetection.md#async-mode). Default is `async`. | No |
| detectionTimeout   | The timeout used for the whole operation. If no result is determined in this period, a callback with a `timeout` result is sent. Default is 15 seconds. | No |
| silenceTimeout     | If no speech is detected in this period, a callback with a `silence` result is sent. Default is 10 seconds. | No |
| speechThreshold    | Threshold to use when determining the result of the operation if a result was not determined yet. If the length of the speech detected is above this threshold, the result will be `answering-machine`. If the length of speech detected is below this threshold, the result will be `human`. Default is 10 seconds. | No |
| speechEndThreshold | Threshold to use to determine an end of speech. Default is 5 seconds. | No |
| delayResult        | If set to true and an answering machine is detected, delays the sending of the `answering-machine` result until the machine is done speaking or until the `detectionTimeout` is reached. If false, the `answering-machine` result is sent immediately. Useful if you want to leave a message only after the machine is done talking. Default is false. | No |
| callbackUrl        | The URL to send the [Machine Detection Complete](../../bxml/callbacks/machineDetectionComplete.md) when the operation is completed. | Only for `async` mode |
| callbackMethod     | The HTTP method to use for the request to `callbackUrl`. GET or POST. Default value is POST. | No |
| fallbackUrl        | A fallback URL which, if provided, will be used to retry the machine detection complete callback delivery in case `callbackUrl` fails to respond | No |
| fallbackMethod     | The HTTP method to use for the request to `fallbackUrl`. GET or POST. Default value is POST. | No |
| username           | The username to send in the HTTP request to `callbackUrl` | No |
| password           | The password to send in the HTTP request to `callbackUrl` | No |
| fallbackUsername   | The username to send in the HTTP request to `fallbackUrl` | No |
| fallbackPassword   | The password to send in the HTTP request to `fallbackUrl` | No |

{% common %}

### Example 1 of 1: Create an outbound phone call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "from"          : "+15555551212",
      "to"            : "+15555551313",
      "answerUrl"     : "http://www.myapp.com/hello",
      "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
    }'
```

> Responds

```http
HTTP/1.1 201
Content-type: application/json
Location: https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d

{
    "accountId"            : "55555555",
    "from"                 : "+19195551212",
    "to"                   : "+19195551313",
    "applicationId"        : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
    "callId"               : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "startTime"            : "2019-06-20T15:54:22.234Z",
    "callUrl"              : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "callTimeout"          : 30,
    "callbackTimeout"      : 15,
    "answerUrl"            : "http://www.myapp.com/hello",
    "answerMethod"         : "POST",
    "answerFallbackUrl"    : null,
    "answerFallbackMethod" : "POST",
    "disconnectUrl"        : null,
    "disconnectMethod"     : "POST",
    "username"             : null,
    "password"             : null,
    "fallbackUsername"     : null,
    "fallbackPassword"     : null,
    "tag"                  : null
}
```

{% sample lang="java" %}

```java
ApiCreateCallRequest createCallRequest = new ApiCreateCallRequest();
createCallRequest.setTo("+19195551313");
createCallRequest.setFrom("+19195551212");
createCallRequest.setAnswerUrl("http://www.myapp.com/hello");
createCallRequest.setApplicationId(VOICE_APPLICATION_ID); //String

try {
    ApiResponse<ApiCallResponse> response = voiceClient.createCall(VOICE_ACCOUNT_ID, createCallRequest);
    System.out.println(response.getResult().getCallId());
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
ApiCreateCallRequest apiCreateCallRequest = new ApiCreateCallRequest();
apiCreateCallRequest.From = "+19195551212";
apiCreateCallRequest.To = "+19195551313";
apiCreateCallRequest.AnswerUrl = "http://www.myapp.com/hello";
apiCreateCallRequest.ApplicationId = VOICE_APPLICATION_ID; //string

var response = voiceClient.CreateCall(VOICE_ACCOUNT_ID, apiCreateCallRequest);
Console.WriteLine(response.Data.CallId);
```


{% sample lang="ruby" %}

```ruby
body = ApiCreateCallRequest.new
body.from = "+19195551212"
body.to = "+19195551313"
body.answer_url = "http://www.myapp.com/hello"
body.application_id = "7fc9698a-b04a-468b-9e8f-91238c0d0086"

begin
    result = voice_client.create_call(account_id, :body => body)
    puts result.data.call_id
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = ApiCreateCallRequest()
body.mfrom = "+19195551212"
body.to = "+19195551313"
body.answer_url = "http://www.myapp.com/hello"
body.application_id = "7fc9698a-b04a-468b-9e8f-91238c0d0086"

try:
    result = voice_client.create_call(account_id, body)
    print(result.body.call_id)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthUserName: username,
    basicAuthPassword: password
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createCall(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: '+19999999999',
    from: '+18888888888',
    answerUrl: 'https://test.com',
    answerMethod: 'POST',
    callTimeout: 30
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest();
$body->from = "+15554443333";
$body->to = "+15554442222";
$body->answerUrl = "https://test.com";
$body->applicationId = "3-6-4-b-4";

try {
    $response = $voiceClient->createCall($accountId, $body);
    print_r($response->getResult()->callId);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% endmethod %}
