{% method %}

## Delete Recording Media

Delete the media of the specified recording.

### Request URL

<code class="delete">DELETE</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

Note: After the deletion is requested and a `204` is returned, the media will not be accessible anymore. However, it is not deleted immediately. This deletion process, while transparent and irreversible, can take an additional 24 to 48 hours.

{% common %}

### Example 1 of 1: Delete recording

{% sample lang="http" %}

```bash
curl -X DELETE \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media" \
     -u '{username}:{password}'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
ApiResponse<Void> response = controller.deleteRecordingMedia(accountId, callId, recordingId);
```

{% sample lang="csharp" %}

```csharp
controller.DeleteRecordingMedia(accountId, callId, recordingId);
```

{% sample lang="ruby" %}

```ruby
voice_client.delete_recording_media(VOICE_ACCOUNT_ID, call_id, recording_id)
```

{% sample lang="python" %}

```python
voice_client.delete_recording_media(VOICE_ACCOUNT_ID, call_id, recording_id)
```

{% sample lang="js" %}

```js
await voiceController.deleteRecordingMedia(accountId, callId, recordingId);
```

{% sample lang="php" %}

```php
$voiceClient->deleteRecordingMedia($accountId, $callId, $recordingId);
```

{% endmethod %}
