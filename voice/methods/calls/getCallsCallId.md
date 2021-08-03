{% method %}

## Retrieve Call Information
Retrieve the current state of a specific call. This information is near-realtime, so it may take
a few minutes for your call to be accessible using this endpoint.

**Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to
retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.

The `disconnectCause` for a call can be:
- `hangup`: one party hung up the call, a [`<Hangup>`](../../bxml/verbs/hangup.md) verb was executed, or there was no more BXML to execute; it indicates that the call ended normally.
- `busy`: the callee was busy.
- `timeout`: the call wasn't answered before the `callTimeout` was reached.
- `cancel`: the call was cancelled by its originator while it was ringing.
- `rejected`: the call was rejected by the callee.
- `callback-error`: a BXML callback couldn't be delivered to your callback server.
- `invalid-bxml`: invalid BXML was returned in response to a callback.
- `application-error`: an unsupported action was tried on the call, e.g. trying to play a .ogg audio.
- `account-limit`: the account rate limits were reached.
- `node-capacity-exceeded`: the system maximum capacity was reached.
- `error`: some error not described in any of the other causes happened on the call.
- `unknown`: some unknown error happened on the call.

Note: this list is not exhaustive and other values can appear in the future.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

### Response Attributes

| Property        | Description                                                                                                              |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------|
| callId          | The call id.                                                                                                             |
| parentCallId    | (optional) The A-leg call id, set only if this call is the B-leg of a [`<Transfer>`](../../bxml/verbs/transfer.md).      |
| applicationId   | The application id associated  with the call.                                                                            |
| accountId       | The account id associated with the call.                                                                                 |
| to              | The phone number that received the call, in E.164 format (e.g. +15555555555).                                            |
| from            | The phone number that made the call, in E.164 format (e.g. +15555555555).                                                |
| direction       | The direction of the call. Either `inbound` or `outbound`.                                                               |
| state           | The current state of the call: `initiated`, `answered`, or `disconnected`.                                               |
| startTime       | The time the call was initiated, in ISO 8601 format.                                                                     |
| answerTime      | (optional) Populated once the call has been answered, with the time in ISO 8601 format.                                  |
| endTime         | (optional) Populated once the call has ended, with the time in ISO 8601 format.                                          |
| disconnectCause | (optional) Populated once the call has ended, with the reason the call ended. See above for possible values. |
| errorMessage    | (optional) Populated only if the call ended with an error, with a text explaining the reason.                            |
| errorId         | (optional) Populated only if the call ended with an error, with a Bandwidth internal id that references the error event. |
| lastUpdate      | The last time the call had a state update, in ISO 8601 format.                                                           |

{% common %}

### Example 1 of 1: Retrieve information about a specific call

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}" \
    -u '{username}:{password}'
```

```json
{
  "callId"              : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
  "parentCallId"        : null,
  "applicationId"       : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
  "accountId"           : "5555555",
  "to"                  : "+15553334444",
  "from"                : "+15551112222",
  "direction"           : "inbound",
  "state"               : "disconnected",
  "startTime"           : "2019-10-21T16:45:11.293Z",
  "answerTime"          : "2019-10-21T16:45:14.352Z",
  "endTime"             : "2019-10-21T16:55:12.950Z",
  "disconnectCause"     : "hangup",
  "errorMessage"        : null,
  "errorId"             : null,
  "lastUpdate"          : "2019-10-21T16:55:12.971Z"
}
```

{% sample lang="csharp" %}

```csharp
var response = voiceClient.GetCall(accountId, callID);
Console.WriteLine(response.State);
```

{% sample lang="java" %}

```java
ApiResponse<CallState> response = null;
try {
    response = voiceController.getCall(accountId, callId);
} catch (IOException | ApiException e) {
    System.out.println(e.getMessage());
}
```

{% sample lang="ruby" %}

```ruby
result = voice_client.get_call(account_id, call_id)
puts result.data.state
```

{% sample lang="python" %}

```python
response = voice_client.get_call(account_id, call_id)
print(response.body.state)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthUserName: 'username',
    basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';
const callId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';

const response = await controller.getCallState(accountId, callId);
```

{% sample lang="php" %}

```php
$response = $voiceClient->getCall($accountId, $callId);
print_r($response->getResult()->state);
```

{% endmethod %}
