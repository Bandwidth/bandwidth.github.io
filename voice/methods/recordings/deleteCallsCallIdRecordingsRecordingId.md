{% method %}

## Delete Recording

Delete the metadata, the media and the transcription of the specified recording.

### Request URL

<code class="delete">DELETE</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}`

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
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}" \
     -u '{username}:{password}'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
try {
    ApiResponse<Void> response = voiceClient.deleteRecording(VOICE_ACCOUNT_ID, "callId", "recordingId");
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp

//coming soon

```

{% sample lang="ruby" %}

```ruby
voice_client.delete_recording(VOICE_ACCOUNT_ID, call_id, recording_id)
```

{% sample lang="python" %}

```python
voice_client.delete_recording(VOICE_ACCOUNT_ID, call_id, recording_id)
```

{% sample lang="js" %}

```js
try {
    await voiceController.deleteRecording(accountId, callId, recordingId);
catch (error) {
    console.error(error);
}
```

{% sample lang="php" %}

```php
try {
    $voiceClient->deleteRecording($accountId, $callId, $recordingId);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% endmethod %}
