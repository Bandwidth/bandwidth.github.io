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
| Property         | Description                                                                                                       |
|:-----------------|:------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `recordComplete`.                                                                        |
| to               | The phone number that received the call, in E.164 format (e.g. +15555555555).                                     |
| from             | The phone number that made the call, in E.164 format (e.g. +15555555555).                                         |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                 |
| callId           | The call id associated with the event.                                                                            |
| recordingId      | The unique id for this recording.                                                                                 |
| callUrl          | The URL of the call associated with the event.                                                                    |
| mediaUrl         | URL to retrieve the contents of the recording.                                                                    |
| startTime        | Time the recording was started, in ISO 8601 format.                                                               |
| endTime          | Time the recording ended, in ISO 8601 format.                                                                     |
| duration         | Duration of the recording, in ISO 8601 format.                                                                    |
| channels         | Number of channels in the recording.                                                                              |
| fileFormat       | The audio format that the recording was saved as (`wav` or `mp3`).                                                |
| tag              | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null. |

{% common %}

#### Example: Record Complete event

```
POST http://[External server URL]
```

```json
{
  "eventType"   : "recordComplete",
  "to"          : "+15553334444",
  "from"        : "+15551112222",
  "direction"   : "outbound",
  "callId"      : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
  "recordingId" : "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
  "callUrl"     : "https://../{accountId}/calls/{callId-1}",
  "channels"    : 1,
  "startTime"   : "2019-09-13T16:48:29.235833Z",
  "endTime"     : "2019-09-13T16:48:48.890016Z",
  "duration"    : "PT20.056S",
  "fileFormat"  : "wav",
  "mediaUrl"    : "https://../{accountId}/calls/{callId-1}/recordings/{recordingId}/media"
}
```

{% endmethod %}
