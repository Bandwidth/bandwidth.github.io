{% method %}
##  Transcription Available event

The Transcription Available event is sent when the recording transcription is available to be downloaded.

### Expected response

```http
HTTP/1.1 204
```

### Properties
| Property      | Description                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------|
| eventType     | The event type, value is `transcriptionAvailable`.                                                   |
| accountId     | The account id associated with the event.                                                            |
| applicationId | The application id associated with the event.                                                        |
| callId        | The call id associated with the event.                                                               |
| recordingId   | The unique id for this recording.                                                                    |
| to            | The phone number that received the call, in E.164 format (e.g. +15555555555).                        |
| from          | The phone number that made the call, in E.164 format (e.g. +15555555555).                            |
| direction     | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.    |
| tag           | (optional) The `tag` specified earlier in the call.                                                  |
| startTime     | Time the recording started (in ISO8601 format).                                                      |
| endTime       | Time the recording ended (in ISO8601 format).                                                        |
| duration      | Length of the recording (in ISO8601 format).                                                         |
| fileFormat    | The format that the recording was saved in - `mp3` or `wav`.                                         |
| callUrl       | The URL of the call associated with the event.                                                       |
| mediaUrl      | URL to retrieve the contents of the recording.                                                       |
| transcription | Transcription information, see below.                                                                |

### Transcription Properties
| Property      | Description                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------|
| id            | The unique id of the transcription.                                                                  |
| url           | URL to retrieve the transcription output.                                                            |
| status        | The state of the transcription. Can be `available`, `error`, `timeout`, `file-size-too-big`.         |
| completedTime | Time the transcription was completed (in ISO8601 format).                                            |

{% common %}

#### Example: Recording Available event

```
POST http://[External server URL]
```

```json
{
	"eventType"     : "transcriptionAvailable",
	"accountId"     : "55555555",
	"callId"        : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"recordingId"   : "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
	"applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"direction"     : "outbound",
	"from"          : "+15551112222",
	"to"            : "+15553334444",
	"startTime"     : "2019-09-13T16:48:29.235833Z",
	"endTime"       : "2019-09-13T16:48:48.890016Z",
	"duration"      : "PT20.056S",
	"fileFormat"    : "wav",
	"callUrl"       : "https://../{accountId}/calls/{callId-1}",
	"mediaUrl"      : "https://../{accountId}/calls/{callId-1}/recordings/{recordingId}/media",
	"transcription" : {
		"id"            : "t-1a68a908-544f-48ae-b30d-d1747dca3723",
		"url"           : "https://../{accountId}/calls/{callId-1}/recordings/{recordingId}/transcription",
		"status"        : "available",
		"completedTime" : "2019-09-13T16:49:28.883159Z"
	}
}
```

{% endmethod %}