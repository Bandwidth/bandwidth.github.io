{% method %}

## Transcribe Recording

Generate the transcription for a specific recording.

### Request URL

<code class="get">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter      | Description                                                                                            | Mandatory |
|:---------------|:-------------------------------------------------------------------------------------------------------|:----------|
| callbackUrl    | The URL to send the [TranscriptionAvailable](../../bxml/callbacks/transcriptionAvailable.md) event to. | No        |
| callbackMethod | The HTTP method to use for the request to `callbackUrl`. GET or POST. Default value is POST.           | No        |
| username       | The username to send in the HTTP request to `callbackUrl`.                                             | No        |
| password       | The password to send in the HTTP request to `callbackUrl`.                                             | No        |
| tag            | A custom string that will be sent with this callbacks.                                                 | No        |

{% common %}

### Example 1 of 1: Transcribe a recording

{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "callbackUrl" : "https://www.myapp.com/transcription"
    }'
```

> Responds

```http
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
body = ApiTranscribeRecordingRequest.new
body.callback_url = "https://www.myapp.com/transcription"

voice_client.create_transcribe_recording(VOICE_ACCOUNT_ID, call_id, recording_id, :body => body)
```

{% sample lang="python" %}

```python
body = ApiTranscribeRecordingRequest()
body.callback_url = "https://www.myapp.com/transcription"

voice_client.create_transcribe_recording(VOICE_ACCOUNT_ID, call_id, recording_id, body=body)
```

{% sample lang="js" %}

```js
var body = new BandwidthVoice.ApiTranscribeRecordingRequest({
    "callbackUrl": "https://www.myapp.com/transcription"
});

await voiceController.createTranscribeRecording(accountId, callId, recordingId, body);
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Voice\Models\ApiTranscribeRecordingRequest();
$body->callbackUrl = "https://www.myapp.com/transcription";

$voiceClient->createTranscribeRecording($accountId, $callId, $recordingId, $body);
```

{% endmethod %}
