{% method %}

## Download Recording

Retrieve the specified recording's audio file. [⚠️ Be sure to not expose your API Credentials to end-users](./about.md#caution-recordings)

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Download a recording

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media" \
    -u '{username}:{password}' \
    --output recording.wav
```

```
HTTP/1.1 200
```

{% sample lang="java" %}

```java
try {
    ApiResponse<InputStream> response = voiceClient.getStreamRecordingMedia(VOICE_ACCOUNT_ID, "callId", "recordingId");
    byte[] bytes = response.getResult().readAllBytes();
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
File.open("file_to_write", "wb") do |f|
    response = voice_client.get_stream_recording_media(VOICE_ACCOUNT_ID, call_id, recording_id)
    f.puts(response.data)
end
```

{% sample lang="python" %}

```python
with(open("file_to_write", "wb")) as f:
    response = voice_client.get_stream_recording_media(VOICE_ACCOUNT_ID, call_id, recording_id)
    f.write(response.body)
```

{% sample lang="js" %}

```js
var response = await voiceController.getStreamRecordingMedia(accountId, callId, recordingId);
fs.writeFileSync("file_to_write", response, "binary");
```

{% endmethod %}
