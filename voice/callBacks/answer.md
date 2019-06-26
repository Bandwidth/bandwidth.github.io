{% method %}
## Answer Event

The Answer event is fired when a new call is originated and the callee answers the phone.

### Expected response

```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process in the call -->
</Response>
```

### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`                                                                                                                            |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                                            |
| callId    | The call id associated with the event.                                                                                                                       |
| tag       | The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                                                                                     |

{% common %}
#### HTTP request sent to the callback url
#### Example JSON

```json
{
	"eventType":"string",
	"from":"string",
	"to":"string",
	"direction":"string",
	"callId":"string",
	"tag":"string"
}
```

#### Example: Basic answer event

```
POST http://[External server URL]
```

```json
{
	"eventType":"answer",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05"
}
```

#### Example: Answer event with tag property

```
POST http://[External server URL]
```
```json
{
	"eventType":"answer",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"tag":"example-tag"
}
```

{% endmethod %}
