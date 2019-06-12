{% method %}
##  Record Complete event

The Record Complete event is fired after a `<Record>` verb is executed.  It provides metadata about the recording
to the calling application.

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process in the call -->
</Response>
```

### Properties
| Property         | Description                                                                    |
|:-----------------|:-------------------------------------------------------------------------------|
| eventType        | The event type, value is `recordComplete`.        |                                                                                                                                                                                                                                                                                                                                 
| callId           | The call id associated with the event.                                                                                                                       |
| recordingId      | The unique id for this recording.                                                                                                                       |
| to               | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from             | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.
| channels         | Number of channels in the recording (1 or 2) |
| startTime        | Time the recording started (in ISO8601 format) |
| endTime          | Time the recording ended (in ISO8601 format) |
| duration         | Length of the recording (in seconds).              | 
| terminatingDigit | The digit the user pressed to end the recording.  `null` if no terminating digit was pressed.   |
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
  "terminatingDigit": "char",
  "tag":"string"
}
```

#### Example: Recording with no terminating digit

```
POST http://[External server URL]
```

```json
{
	"eventType":"recordComplete",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"c-0a020305-3c5f8a8b-cda2-443a-b797-b3ada2197e05",
	"recordingId":"582d2486-87c8-4a45-a9cc-bdf9797c620f",
	"channels":"1",
	"startTime":"2017-09-01T12:33:05.000Z",
	"endTime":"2017-09-01T12:33:07.231Z",
	"duration":"2"
}
```

#### Example: Recording completed because the terminating digit was pressed

```
POST http://[External server URL]
```

```json
{
	"eventType":"recordingComplete",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"c-0a020305-3c5f8a8b-cda2-443a-b797-b3ada2197e05",
	"recordingId":"9ab694cd-f420-4840-aa79-526950950a03",
	"channels":"1",
	"startTime":"2017-09-01T12:33:10.000Z",
	"endTime":"2017-09-01T12:33:15.522Z",
	"duration":"5",
	"terminatingDigit": "#"
}
```

{% endmethod %}
