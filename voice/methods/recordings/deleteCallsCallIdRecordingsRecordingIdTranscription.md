{% method %}

## Delete Transcription

Delete the specified transcription.

### Request URL

<code class="delete">DELETE</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

Note: After the deletion is requested and a `204` is returned, the transcription will not be accessible anymore. However, it is not deleted immediately. This deletion process, while transparent and irreversible, can take an additional 24 to 48 hours.

{% common %}

### Example 1 of 1: Delete recording

{% sample lang="http" %}

```bash
curl -X DELETE \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription" \
     -u '{username}:{password}'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
ApiResponse<Void> response = controller.deleteRecordingTranscription(accountId, callId, recordingId);
```

{% sample lang="csharp" %}

```csharp
controller.DeleteRecordingTranscription(accountId, callId, recordingId);
```

{% sample lang="ruby" %}

```ruby
voice_client.delete_recording_transcription(VOICE_ACCOUNT_ID, call_id, recording_id)
```

{% sample lang="python" %}

```python
voice_client.delete_recording_transcription(VOICE_ACCOUNT_ID, call_id, recording_id)
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
const recordingId = 'r-abc12345-6def-abc1-2345-6defabc12345';

const response = await controller.deleteCallTranscription(accountId, callId, recordingId);
```

{% sample lang="php" %}

```php
$voiceClient->deleteRecordingTranscription($accountId, $callId, $recordingId);
```

{% endmethod %}
