{% method %}

## Fetch Transcription Information
Get information about the transcription, regardless its state.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}/transcriptions/{transcriptionId}`

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


### Example: Get transcription properties

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recording-id}/transcriptions/{transcription-id} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}


```js
// Promise
client.Recording.getTranscription(recordingId, transcriptionId).then(function(transcription){});

// Callback
client.Recording.getTranscription(recordingId, transcriptionId, function(err, transcription){});
```

{% sample lang="csharp" %}

```csharp
var transcription = await client.Transcription.GetAsync("recordingId", "transcriptionId");
Console.WriteLine(transcription.State);
// Completed
```

{% sample lang="ruby" %}

```ruby
transcription = recording.get_transacription("transcription_id")
text = transcription[:text]
```

{% common %}


> The above command returns JSON structured like this:

```
{
    "chargeableDuration": 11,
    "id": "{transcriptionId}",
    "state": "completed",
    "text": "Hey there, I was calling to talk about plans for this saturday. ",
    "textSize": 63,
    "textUrl": "https://api.catapult.inetwork.com/.../media/{transcriptionId}",
    "time": "2014-12-23T23:08:59Z"
}
```
{% endmethod %}
