{% method %}
## Conference Recording Available event

The Conference Recording Available event is sent after a conference recording has been processed.
It indicates that the recording is available for download.

### Expected response

```http
HTTP/1.1 204
```

### Properties
| Property          | Description                                                                                                                                                                                           |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType         | The event type, value is `conferenceRecordingAvailable`.                                                                                                                                              |
| conferenceId      | The ID of the conference that the recording was made on. |
| name              | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |
| accountId         | The user account associated with the conference.                                                                                                                                                      |
| recordingId       | The unique id for this recording.                                                                                                                                                                     |
| channels          | Number of channels in the recording (always 1 for conference recordings).                                                                                                                             |
| startTime         | The time that the recording started (in ISO8601 format).                                                                                                                                              |
| endTime           | The time that the recording ended (in ISO8601 format).                                                                                                                                                |
| duration          | The duration of the recording (in ISO8601 format).                                                                                                                                                    |
| fileFormat        | The audio format that the recording was saved as (`wav` or `mp3`).                                                                                                                                    |
| mediaUrl          | The URL of the recording media.                                                                                                                                                                       |
| tag               | (optional) The `tag` that was set at conference creation, if any. |
| status            | The state of the recording. Can be `complete`, `partial`, or `error`. A `partial` status indicates that, although the recording is available to be downloaded, parts of the recording are missing.    |

{% common %}

#### Example: Conference Recording Available event

```
POST http://[External server URL]
```

```json
{
	"eventType"     : "conferenceRecordingAvailable",
	"accountId"     : "55555555",
	"conferenceId"  : "conf-95ac90b3-ac6cd003-85e4-466f-b2e2-3fc5462c5d0d",
	"name"          : "thisConference",
	"recordingId"   : "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
	"channels"      : 1,
	"startTime"     : "2019-09-13T16:48:29.235Z",
	"endTime"       : "2019-09-13T16:48:48.890Z",
	"duration"      : "PT20.056S",
	"fileFormat"    : "wav",
	"mediaUrl"      : "https://../{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media",
	"status"        : "complete"
}
```

{% endmethod %}