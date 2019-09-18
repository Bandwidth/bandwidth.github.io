{% method %}
##  Recording Available event

The Recording Available event is sent after a recording is completed. Its purpose is to report the recording is available for download.

### Expected response

```http
HTTP/1.1 204
```

### Properties
| Property         | Description                                                                                                       |
|:-----------------|:------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `recordingAvailable`.                                                                    |
| to               | The phone number that received the call, in E.164 format (e.g. +15555555555).                                     |
| from             | The phone number that made the call, in E.164 format (e.g. +15555555555).                                         |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                 |
| callId           | The call id associated with the event.                                                                            |
| recordingId      | The unique id for this recording.                                                                                 |
| channels         | Number of channels in the recording (1 or 2).                                                                     |
| startTime        | Time the recording started (in ISO8601 format).                                                                   |
| endTime          | Time the recording ended (in ISO8601 format).                                                                     |
| duration         | Integer length of the recording (in seconds).                                                                     |
| fileFormat       | The format that the recording was saved in (`wav` or `mp3`).                                                      |
| callUrl          | The URL of the call associated with the event.                                                                    |
| mediaUrl         | URL to retrieve the contents of the recording.                                                                    |
| tag              | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null. |
| status           | The state of the recording, callback event values are `complete` or `error`.                                      |

{% common %}

#### Example: Recording Available event

```
POST http://[External server URL]
```

```json
{
	"eventType":"recordingAvailable",
	"to":"+15553334444",
	"from":"+15551112222",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"recordingId": "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
	"channels": "1",
	"startTime": "2019-09-13T16:48:29.235833Z",
	"endTime": "2019-09-13T16:48:48.890016Z",
	"duration": "20",
	"fileFormat": "wav",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"mediaUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d/recordings/r-115da407-e3d9-4ea7-889f-5f4ad7386a80/media",
	"status": "complete"
}
```

{% endmethod %}
