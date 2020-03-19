{% method %}

## Retrieve Call Information
Retrieve the current state of a specific call.

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
| parentCallId    | (optional) The A-leg call id, set only if this call is the B-leg of a [`<Transfer>`](../../bxml/verbs/transferPhoneNumber.md).      |
| applicationId   | The application id associated  with the call.                                                                            |
| accountId       | The account id associated with the call.                                                                                 |
| to              | The phone number that received the call, in E.164 format (e.g. +15555555555).                                            |
| from            | The phone number that made the call, in E.164 format (e.g. +15555555555).                                                |
| direction       | The direction of the call. Either `inbound` or `outbound`.                                                               |
| state           | The current state of the call: `initiated`, `answered`, or `disconnected`.                                               |
| startTime       | The time the call was initiated, in ISO 8601 format.                                                                     |
| answerTime      | (optional) Populated once the call has been answered, with the time in ISO 8601 format.                                  |
| endTime         | (optional) Populated once the call has ended, with the time in ISO 8601 format.                                          |
| disconnectCause | (optional) Populated once the call has ended, with the reason the call ended: `busy`, `timeout`, `hangup`, `cancel`, `rejected`, `callback-error`, `invalid-bxml`, `account-limit`, `node-capacity-exceeded`, `error`, or `unknown`.<br>`hangup` indicates the call ended normally. |
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
  "startTime"           : "2019-10-21T16:45:11.293728Z",
  "answerTime"          : "2019-10-21T16:45:14.352125Z",
  "endTime"             : "2019-10-21T16:55:12.950568Z",
  "disconnectCause"     : "hangup",
  "errorMessage"        : null,
  "errorId"             : null,
  "lastUpdate"          : "2019-10-21T16:55:12.971571Z"
}
```

{% sample lang="csharp" %}

```csharp
var response = voiceClient.GetCallState(accountId, callID);
Console.WriteLine(response.State);
```

{% sample lang="java" %}

```java
ApiResponse<ApiCallStateResponse> response = null;
try {
    response = voiceController.getCallState(accountId, callId);
} catch (IOException | ApiException e) {
    System.out.println(e.getMessage());
}
```

{% sample lang="ruby" %}

```ruby
result = voice_client.get_call_state(account_id, call_id)
puts result.data.state
```

{% sample lang="python" %}

```python
response = voice_client.get_call_state(account_id, call_id)
print(response.body.state)
```

{% sample lang="js" %}

```js
var response = await voiceController.getCallState(accountId, callId);
console.log(response.state);
```

{% sample lang="php" %}

```php
$response = $voiceClient->getCallState($accountId, $callId);
print_r($response->getResult()->state);
```

{% endmethod %}
