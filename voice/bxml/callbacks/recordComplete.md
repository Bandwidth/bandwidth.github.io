{% method %}
##  Record Complete event

The Record Complete event is sent after a [`<Record>`](../verbs/record.md) verb has executed and the BXML returned by this callback is executed next.

When the recording is available for download, a [Recording Available](recordingAvailable.md) event will be sent.

### Expected response

```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process now that the <Record> has finished -->
</Response>
```

### Properties
| Property          | Description                                                                                                                                                                                           |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType         | The event type, value is `recordComplete`.                                                                                                                                                            |
| accountId         | The user account associated with the call.                                                                                                                                                            |
| applicationId     | The id of the application associated with the call.                                                                                                                                                   |
| to                | The phone number that received the call, in E.164 format (e.g. +15555555555).                                                                                                                         |
| from              | The phone number that made the call, in E.164 format (e.g. +15555555555).                                                                                                                             |
| direction         | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                                                                                     |
| callId            | The call id associated with the event.                                                                                                                                                                |
| parentCallId      | (optional) If the event is related to the B leg of a `<Transfer>`, the call id of the original call leg that executed the `<Transfer>`. Otherwise, null.                                              |
| recordingId       | The unique id for this recording.                                                                                                                                                                     |
| callUrl           | The URL of the call associated with the event.                                                                                                                                                        |
| mediaUrl          | URL to retrieve the contents of the recording.                                                                                                                                                        |
| answerTime        | Time the call was answered, in ISO 8601 format.                                                                                                                                                       |
| startTime         | Time the recording was started, in ISO 8601 format.                                                                                                                                                   |
| endTime           | Time the recording ended, in ISO 8601 format.                                                                                                                                                         |
| duration          | Duration of the recording, in ISO 8601 format.                                                                                                                                                        |
| channels          | Number of channels in the recording.                                                                                                                                                                  |
| fileFormat        | The audio format that the recording was saved as (`wav` or `mp3`).                                                                                                                                    |
| tag               | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.                                                                                     |
| transferCallerId  | (optional) If the event is related to the B leg of a `<Transfer>`, the phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555). Otherwise, null.                 |
| transferTo        | (optional) If the event is related to the B leg of a `<Transfer>`, the phone number used as the `to` field of the B-leg call in E.164 format (e.g. +15555555555). Otherwise, null.                    |

{% common %}

#### Example: Record Complete event

```
POST http://[External server URL]
```

```json
{
	"eventType"     : "recordComplete",
	"accountId"     : "55555555",
	"applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"to"            : "+15553334444",
	"from"          : "+15551112222",
	"direction"     : "outbound",
	"callId"        : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"recordingId"   : "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
	"callUrl"       : "https://../{accountId}/calls/{callId-1}",
	"channels"      : 1,
	"answerTime"    : "2019-09-13T16:48:26.665Z",
	"startTime"     : "2019-09-13T16:48:29.235Z",
	"endTime"       : "2019-09-13T16:48:48.890Z",
	"duration"      : "PT20.056S",
	"fileFormat"    : "wav",
	"mediaUrl"      : "https://../{accountId}/calls/{callId-1}/recordings/{recordingId}/media"
}
```

{% endmethod %}
