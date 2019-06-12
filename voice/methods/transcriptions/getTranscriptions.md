{% method %}
## List Transcriptions on Recording
Get all the transcriptions that were made for the given recodingId

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}/transcriptions`

---

### Properties
| Property           | Description                                                                                                                                                                       |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | The unique id of the transcriptions resource.                                                                                                                                     |
| state              | The state of the transcription, `transcribing` `completed` `error`                                                                                                                |
| text               | The transcribed text.                                                                                                                                                             |
| time               | The date/time the transcription resource was created (UTC).                                                                                                                       |
| chargeableDuration | The seconds between activeTime and endTime for the recording; this is the time that is going to be used to charge the resource. Note: transcriptions is billed in 1 minute units. |
| textSize           | The size of the transcribed text. If the text is longer than 1000 characters it will be cropped; the full text can be retrieved from the url available at textUrl property.       |
| textUrl            | An url to the full text; this property is available regardless the textSize.                                                                                                      |

{% common %}

### Example: Get all the transcriptions for a recording resource id

{% sample lang="bash" %}
```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recording-id}/transcriptions \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Recording.getTranscriptions(recordingId).then(function(transcriptions){});

// Callback
client.Recording.getTranscriptions(recordingId, function(err, transcriptions){});
```

{% sample lang="csharp" %}
```csharp
var transcriptions = client.Transcription.List("{recordingId}");
var firstTranscription = transcriptions.First();
Console.WriteLine($"{firstTranscription.Id} - {firstTranscription.Text}");
// tr-1234 - Hello there
```

{% sample lang="ruby" %}
```ruby
transcriptions = recording.get_transacriptions()
first_transcription_text = transcriptions[0].text
```

{% common %}

> The above command returns JSON structured like this:

```json
[
    {
        "chargeableDuration": 60,
        "id": "{transcription-id}",
        "state": "completed",
        "time": "2014-10-09T12:09:16Z",
        "text": "{transcription-text}",
        "textSize": 3627,
        "textUrl": "{url-to-full-text}"
    },
    {
        "chargeableDuration": 60,
        "id": "{transcription-id}",
        "state": "completed",
        "text": "{transcription-text}",
        "time": "2014-10-09T14:04:44Z",
        "textSize": 72,
        "textUrl": "{url-to-full-text}"
    }
]
```
{% endmethod %}
