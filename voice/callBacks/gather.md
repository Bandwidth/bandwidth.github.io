{% method %}
##  Gather event

The gather event is sent after a `<Gather>` verb is executed.  Its purpose is to report the gathered digits 
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
| Property         | Description                                                                                                                                                                                                                                                                                                                                                                           |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `gather`.                                                                                                                                                                                                                                                                                                                                         |
| to               | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from             | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                                            |
| callId           | The call id associated with the event.                                                                                                                       |
| tag              | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.                                                                                                                        |
| digits           | The digits collected from user.  Null if a timeout occurred before any digits were pressed.               
| terminatingDigit | The digit the user pressed to end the gather.  Null if no terminating digit was pressed.                                                                                                                                                                                                                                                                                                                          |

{% common %}
#### HTTP request sent to the gatherUrl from the [`<Gather>`](../verbs/gather.md) verb:

#### Example JSON

```json
{
  "eventType":"string",
  "from":"string",
  "to":"string",
  "direction":"string",
  "callId":"string",
  "tag":"string",
  "digits": "string",
  "terminatingDigit": "char"
}
```

#### Example: Gather event completed because the max-digits were reached

```
POST http://[External server URL]
```

```json
{
	"eventType":"gather",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"digits":"25"
}
```

#### Example: Gather event completed because the terminating digit was pressed

```
POST http://[External server URL]
```

```json
{
	"eventType":"gather",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"digits":"123",
	"terminatingDigit": "#"
}
```
{% endmethod %}
