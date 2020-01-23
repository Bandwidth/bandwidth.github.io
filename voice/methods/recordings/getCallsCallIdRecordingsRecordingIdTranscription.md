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

<!--
Description taken from:
https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_Item.html
https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-dg.pdf
-->

| Attribute   | Description                                                                       |
|:------------|:----------------------------------------------------------------------------------|
| transcripts | Contains the transcription, which is created from the concatenation of the items. |
| items       | List of words transcribed from the input audio (see Item).                        |

#### Item

| Attribute    | Description                                                                         |
|:-------------|:------------------------------------------------------------------------------------|
| start_time   | (optional) Offset from the beginning of the recording to the beginning of the item. |
| end_time     | (optional) Offset from the beginning of the recording to the end of the item.       |
| alternatives | Contains the `content` and `confidence` attributes, which correspond respectively to the recognized word or punctuation and the confidence on the recognized content, ranging from `0.0` to `1.0`. |
| type         | The type of the item. Valid Values: `pronunciation`, `punctuation`.                 |

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
      "transcript": "transcribing is easy."
    }
  ],
  "items": [
    {
      "start_time": "0.14",
      "end_time": "0.95",
      "alternatives": [
        {
          "confidence": "1.0",
          "content": "transcribing"
        }
      ],
      "type": "pronunciation"
    },
    {
      "start_time": "0.95",
      "end_time": "1.14",
      "alternatives": [
        {
          "confidence": "0.9905",
          "content": "is"
        }
      ],
      "type": "pronunciation"
    },
    {
      "start_time": "1.14",
      "end_time": "1.72",
      "alternatives": [
        {
          "confidence": "0.9984",
          "content": "easy"
        }
      ],
      "type": "pronunciation"
    },
    {
      "alternatives": [
        {
          "confidence": "0.0",
          "content": "."
        }
      ],
      "type": "punctuation"
    }
  ]
}
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
