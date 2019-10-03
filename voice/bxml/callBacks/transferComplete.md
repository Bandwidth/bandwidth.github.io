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
| Property         | Description                                                                                                                           |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `transferComplete`.                                                                                          |
| from             | The phone number used in the `from` field of the original call, in E.164 format (e.g. +15555555555).                                  |
| to               | The phone number user in the `to` field of the original call, in E.164 format (e.g. +15555555555).                                    |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                     |
| callId           | The call id associated with the event.                                                                                                |
| callUrl          | The URL of the call associated with the event.                                                                                        |
| tag              | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.                                |
| transferCallerId | The phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555).                                     |
| transferTo       | The phone number used as the `to` field of the B-leg call, in E.164 format (e.g. +15555555555).                                       |
| cause            | Reason the call ended - `busy`, `timeout`, `hangup`, `cancel`, `error`, or `unknown`. `hangup` indicates the call has ended normally. |

{% common %}

#### Example: Successful transfer to 1-555-666-7777

```
POST http://[External server URL]
```

```json
{
	"eventType":"transferComplete",
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"transferCallerId":"+15551115555",
	"transferTo":"+15556667777",
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
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"transferCallerId":"+15551115555",
	"transferTo":"+15556667777",
	"callState":"busy"
}
```

{% endmethod %}