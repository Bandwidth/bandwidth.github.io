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
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetRecordingTranscription(accountId, callId, recordingId);

Console.WriteLine(response.Data.Transcripts[0].Text);n
```

{% sample lang="ruby" %}

```ruby
# coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% sample lang="js" %}

```js
// coming soon
```

{% sample lang="php" %}

```php
// coming soon
```

{% endmethod %}
