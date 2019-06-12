{% method %}
## Redirect Event

The Redirect event is fired when a `<Redirect>` verb is executed.  Its purpose is to get the next
set of verbs from the calling application.

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
| eventType | The event type, value is `redirect`                                                                                                                            |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                                            |
| callId    | The call id associated with the event.                                                                                                                       |
| tag       | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.   |

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

#### Example: Basic redirect event

```
POST http://[External server URL]
```

```json
{
	"eventType":"redirect",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05"
}
```

#### Example: Redirect event with tag property

```
POST http://[External server URL]
```
```json
{
	"eventType":"redirect",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"tag":"example-tag"
}
```

{% endmethod %}
