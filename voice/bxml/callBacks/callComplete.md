{% method %}
## Call Complete Event
The Call Complete event is fired when a call ends.

### Expected response
```http
HTTP/1.1 204
```


### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `callComplete`                                                                                                                      |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.
| callId    | The call id associated with the event.       
| completeTime | Time the call ended. |                                                                                                                |
| cause     | Reason the call ended - `busy`, `timeout`, `hangup`, `error`, `callbackLimitExceeded`, or `unknown`. |
| tag       | The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                                                                                     |

{% common %}
#### HTTP request sent to `callCompleteUrl`
#### Example JSON

```json
{
	"eventType":"string",
	"from":"string",
	"to":"string",
	"direction":"string",
	"callId":"string",
	"completeTime":"string",
	"cause":"string",
	"tag":"string"
}
```

#### Example: Call ended due to a busy signal

```
POST http://[External server URL]
```

```json
{
	"eventType":"callComplete",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"completeTime":"2017-09-01T15:54:22.234Z",
	"cause":"busy"
}
```

{% endmethod %}
