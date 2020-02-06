{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                             | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------     |:----------|
| from               | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+15555551212`).                                                                                                      | Yes       |
| to                 | The number to call (must be an E.164 formatted number, like `+15555551212`                                                                                                                                              | Yes       |
| applicationId      | The id of the application to associate this call with, for billing purposes.                                                                                                                                            | Yes       |
| answerUrl          | The full URL to send the [Answer](../../bxml/callbacks/answer.md) event to when the called party answers. This endpoint should return the first [BXML document](../../bxml/about.md) to be executed in the call.        | Yes       |
| answerMethod       | (optional) The HTTP method to use for the request to `answerUrl`. GET or POST. Default value is POST.                                                                                                                   | No        |
| disconnectUrl      | (optional) The URL to send the [Disconnect](../../bxml/callbacks/disconnect.md) event to when the call ends. This event does not expect a BXML as response.                                                             | No        |
| disconnectMethod   | (optional) The HTTP method to use for the request to `disconnectUrl`. GET or POST. Default value is POST.                                                                                                               | No        |
| username           | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| password           | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| callTimeout        | (optional) This is the timeout (in seconds) for the callee to answer the call.  Can be any numeric value (including decimals) between 1 and 300.  Default: 30                                                           | No        |
| tag                | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.  | No        |

**NOTE:** Any error that causes the call to be hung up (for example invalid BXML or rate limiting) will be delivered to the `disconnectUrl` via a [Disconnect](../../bxml/callbacks/disconnect.md) event.  This is currently the only way to receive user errors, so while `disconnectUrl` is not mandatory, we highly recommend providing it so that user errors can be delivered.

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
    "accountId"        : "55555555",
    "from"             : "+19195551212",
    "to"               : "+19195551313",
    "applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
    "callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "startTime"        : "2019-06-20T15:54:22.234Z",
    "callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "callTimeout"      : 30.0,
    "answerUrl"        : "http://www.myapp.com/hello",
    "answerMethod"     : "POST",
    "disconnectUrl"    : null,
    "disconnectMethod" : "POST",
    "username"         : null,
    "password"         : null,
    "tag"              : null
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
apiCreateCallRequest.MFrom = "+19195551212";
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
    result = voice_client.create_call(account_id, body: body)
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
var body = new BandwidthVoice.ApiCreateCallRequest({
    "from": "+19999999999",
    "to": "+18888888888",
    "applicationId": "123",
    "answerUrl": "https://test.com",
    "answerMethod": "POST",
    "callTimeout": 30
});

try {
    var response = await voiceController.createCall(accountId, body);
    console.log(response);
catch (error) {
    console.error(error);
}
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
    print_r($response);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% endmethod %}
