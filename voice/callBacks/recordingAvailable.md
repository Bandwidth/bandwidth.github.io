{% method %}
##  Recording Available event

The Recording Available event is sent when a recording is available to be downloaded.

### Expected response
```http
HTTP/1.1 204
```

### Properties
| Property         | Description                                                                    |
|:-----------------|:-------------------------------------------------------------------------------|
| eventType        | The event type, value is `recordingAvailable`.        |                                                                                                                                                                                                                                                                                                                                 
| callId           | The call id associated with the event.                                                                                                                       |
| recordingId      | The unique id for this recording.                                                                                                                       |
| to               | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from             | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.  
| channels         | Number of channels in the recording (1 or 2). |
| startTime        | Time the recording started (in ISO8601 format). |
| endTime          | Time the recording ended (in ISO8601 format). |
| duration         | Length of the recording (in seconds).              |
| fileFormat       | The format that the recording was saved in - `mp3` or `wav`.                                                                                                                                      |
| mediaUrl         | URL to retrieve the contents of the recording. |
| tag              | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.   |

{% common %}
#### HTTP request sent to the `recordCompleteUrl` from the [`<Record>`](../verbs/record.md) verb:

#### Example JSON

```json
{
  "eventType":"string",
  "callId":"string",
  "recordingId":"string",
  "from":"string",
  "to":"string",
  "direction":"string",
  "channels":"integer",
  "startTime":"string",
  "stopTime":"string",
  "duration": "integer",
  "fileFormat":"string",
  "mediaUrl":"string",
  "tag":"string"
}
```

#### Example: Multi-channel recording

```
POST http://[External server URL]
```

```json
{
	"eventType":"recordingAvailable",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"c-0a020305-3c5f8a8b-cda2-443a-b797-b3ada2197e05",
	"recordingId":"582d2486-87c8-4a45-a9cc-bdf9797c620f",
	"channels":"2",
	"startTime":"2017-09-01T12:33:00.000Z",
	"endTime":"2017-09-01T12:34:04.115Z",
	"duration":"64",
	"fileFormat":"wav",
	"mediaUrl":"https://dev.bandwidth.com/v2/accounts/1/calls/c-0a020305-3c5f8a8b-cda2-443a-b797-b3ada2197e05/recordings/582d2486-87c8-4a45-a9cc-bdf9797c620f/media"
}
```

{% endmethod %}
