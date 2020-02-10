{% method %}

## Download Transcription

Retrieve the specified recording's transcription file. [⚠️ Be sure to not expose your API Credentials to end-users](./about.md#caution-recordings)

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |


### Transcription Attributes

| Attribute    | Description                                                            |
|:-------------|:-----------------------------------------------------------------------|
| text         | The transcription.                                                     |
| confidence   | The confidence on the recognized content, ranging from `0.0` to `1.0`. |

{% common %}

### Example 1 of 1: Download a transcription

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription" \
    -u '{username}:{password}'
```

```
{
  "transcripts": [
    {
      "text": "transcribing is easy.",
      "confidence": 0.98
    }
  ]
}
```

{% sample lang="java" %}

```java
ApiResponse<TranscriptionResponse>  response = controller.getRecordingTranscription(accountId, callId, recordingId);

List<Transcript> list = response.getResult().getTranscripts();
System.out.println(list.get(0).getText());
System.out.println(list.get(0).getConfidence());
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetRecordingTranscription(accountId, callId, recordingId);

Console.WriteLine(response.Data.Transcripts[0].Text);
Console.WriteLine(response.Data.Transcripts[0].Confidence);
```

{% sample lang="ruby" %}

```ruby
response = voice_client.get_recording_transcription(account_id, call_id, recording_id)
puts response.data.transcripts[0].text
puts response.data.transcripts[0].confidence
```

{% sample lang="python" %}

```python
response = voice_client.get_recording_transcription(account_id, call_id, recording_id)
print(response.body.transcripts[0].text)
print(response.body.transcripts[0].confidence)
```

{% sample lang="js" %}

```js
var response = await voiceController.getRecordingTranscription(accountId, callId, recordingId);
console.log(response.transcripts[0].text);
console.log(response.transcripts[0].confidence);
```

{% sample lang="php" %}

```php
// coming soon
```

{% endmethod %}
