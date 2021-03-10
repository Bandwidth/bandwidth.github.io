{% method %}

## Download Transcription

Retrieve the specified recording's transcription file. [⚠️ Be sure to not expose your API Credentials to end-users](./about.md#caution-recordings)

If the transcribed recording was multi-channel, then there will be 2 transcripts.<br/>
The caller/called party transcript will be the first item while [`<PlayAudio>`](playAudio.md) and [`<SpeakSentence>`](speakSentence.md) transcript will be the second item.<br>
During a [`<Transfer>`](transfer.md) the A-leg transcript will be the first item while the B-leg transcript will be the second item.

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

### Example 1 of 2: Download a single-channel transcription

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription" \
    -u '{username}:{password}'
```

```json
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
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthUserName: 'username',
    basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';
const callId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';
const recordingId = 'r-abc12345-6def-abc1-2345-6defabc12345';

const response = await controller.getRecordingTranscription(accountId, callId, recordingId);
```

{% sample lang="php" %}

```php
$response = $voiceClient->getRecordingTranscription($accountId, $callId, $recordingId);
print_r($response->getResult()->transcripts[0]->text);
print_r($response->getResult()->transcripts[0]->confidence);
```

{% common %}

### Example 2 of 2: Download a multi-channel transcription

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription" \
    -u '{username}:{password}'
```

```json
{
  "transcripts": [
    {
      "text": "transcribing is easy.",
      "confidence": 0.98
    },
    {
      "text": "Please, leave a message after the beep.",
      "confidence": 0.88
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
System.out.println(list.get(1).getText());
System.out.println(list.get(1).getConfidence());
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetRecordingTranscription(accountId, callId, recordingId);

Console.WriteLine(response.Data.Transcripts[0].Text);
Console.WriteLine(response.Data.Transcripts[0].Confidence);
Console.WriteLine(response.Data.Transcripts[1].Text);
Console.WriteLine(response.Data.Transcripts[1].Confidence);
```

{% sample lang="ruby" %}

```ruby
response = voice_client.get_recording_transcription(account_id, call_id, recording_id)
puts response.data.transcripts[0].text
puts response.data.transcripts[0].confidence
puts response.data.transcripts[1].text
puts response.data.transcripts[1].confidence
```

{% sample lang="python" %}

```python
response = voice_client.get_recording_transcription(account_id, call_id, recording_id)
print(response.body.transcripts[0].text)
print(response.body.transcripts[0].confidence)
print(response.body.transcripts[1].text)
print(response.body.transcripts[1].confidence)
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

const response = await controller.getRecordingTranscription(accountId, callId, recordingId);
```

{% sample lang="php" %}

```php
$response = $voiceClient->getRecordingTranscription($accountId, $callId, $recordingId);
print_r($response->getResult()->transcripts[0]->text);
print_r($response->getResult()->transcripts[0]->confidence);
print_r($response->getResult()->transcripts[1]->text);
print_r($response->getResult()->transcripts[1]->confidence);
```

{% endmethod %}
