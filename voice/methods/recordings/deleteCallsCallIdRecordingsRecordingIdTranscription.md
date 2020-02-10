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
// coming soon
```

{% sample lang="csharp" %}

```csharp
// coming soon
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
await voiceController.deleteRecordingTranscription(accountId, callId, recordingId);
```

{% sample lang="php" %}

```php
$voiceClient->deleteRecordingTranscription($accountId, $callId, $recordingId);
```

{% endmethod %}
