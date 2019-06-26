{% method %}
##  Transfer Complete Event – <Transfer> verb
This event is sent to the callbackUrl of the Leg-A call when the transferred call(B-leg) completes. 
In a simultaneous ringing scenario, only one call leg-B succeeds and this event corresponds to that successful leg. If none of the calls were answered, transferComplete is not sent. 

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process in the call -->
</Response>
```


### Properties
| Property   | Description                                                                                                                                                                    |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType  | The event type, value is `transferComplete`.                                                                                                                                   |
| from       | The phone number or SIP address used in the From field of the original call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| to         | The phone number or SIP address used in the To field of the original call.. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).  |
| direction  | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                                                                 |
| callId     | The call id associated with the event.                                                                                                                                         |
| tag        | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.                                                                                                                        |
| transferCallerId | The phone number or SIP address used as the From field of the B-leg call.. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).  |
| transferTo | The phone number or SIP address used as the To field of the B-leg call.. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).  |
| cause      | Reason the B-leg call ended - `busy`, `timeout`, `hangup`, `error`, or `unknown`. `hangup` indicates the call was answered normally. |

{% common %}

#### HTTP request sent to the `transferCompleteUrl`

#### Example JSON

```json
{
  "eventType":"string",
  "from":"string",
  "to":"string",
  "direction":"string",
  "callId":"string",
  "tag":"string",
  "transferTo": "string",
  "callState": "string"
}
```

#### Example: Successful transfer to 1-800-555-1111

```
POST http://[External server URL]
```

```json
{
	"eventType":"transferComplete",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"transferTo":"+18005551111",
	"callState":"completed"
}
```

#### Example: Failed transfer to busy number

```
POST http://[External server URL]
```

```json
{
	"eventType":"transferComplete",
	"from":"+15753222083",
	"to":"+13865245000",
	"direction":"outbound",
	"callId":"3C5F8A8B-CDA2-443A-B797-B3ADA2197E05",
	"transferTo":"+18005551111",
	"callState":"busy"
}
```

{% endmethod %}
