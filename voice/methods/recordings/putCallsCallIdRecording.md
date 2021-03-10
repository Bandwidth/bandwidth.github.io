{% method %}
## Pause or resume a recording on an active Call
Pause or resume a recording on an active phone call.

### Request URL

<code class="put">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters
| Parameter       | Description                                                                                                                            | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state           | The recording state. Possible values: <br><br> `paused` to pause an active recording<br>`recording` to resume a paused recording<br>   | Yes       |
{% common %}

### Example 1 of 1: Pause a currently active recording

{% sample lang="http" %}

```bash
curl -X PUT \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording' \
     -u '{username}:{password}'
     -H 'Content-type: application/json' \
     --data-raw '
     {
       "state": "paused"
     }'
```

{% sample lang="java" %}

```java
ModifyCallRecordingState modifyCallRecordingState = new ModifyCallRecordingState();
modifyCallRecordingState.setState(State1Enum.PAUSED);

try {
    ApiResponse<Void> response = voiceClient.modifyCallRecordingState(VOICE_ACCOUNT_ID, "callId", modifyCallRecordingState);
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
controller.ModifyCallRecordingState(accountId, callId, new ModifyCallRecordingState
{
    State = State1Enum.PAUSED
});
```

{% sample lang="ruby" %}

```ruby
body = ModifyCallRecordingState.new
body.state = "paused"
voice_client.modify_call_recording_state(VOICE_ACCOUNT_ID, call_id, :body => body)
```

{% sample lang="python" %}

```python
body = ModifyCallRecordingState()
body.state = "paused"
voice_client.modify_call_recording_state(VOICE_ACCOUNT_ID, call_id, body=body)
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

const response = await controller.modifyCallRecordingState(accountId, callId, {
    state: 'paused'
});
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Voice\Models\ModifyCallRecordingState();
$body->state = "paused";

try {
    $voiceClient->modifyCallRecordingState($accountId, $callId, $body);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% endmethod %}
