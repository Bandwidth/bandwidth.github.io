{% method %}
##  Transfer Answer Event – <Transfer> verb
When processing a `<Transfer>` verb, this event is sent when a called party (B-leg) answers.  The event is sent to
  the endpoint specified in the `transferAnswerUrl` attribute of the `<PhoneNumber>` tag that answered.  `<PlayAudio>` and/or `<SpeakSentence>` verbs returned by this callback will be
  executed for the called party only.  No other BXML verbs may be specified.  At the conclusion of the BXML, the called party will be bridged to the original
  call.

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- <PlayAudio> or <SpeakSentence> BXML verbs to announce to called party -->
</Response>
```

### Properties
| Property         | Description                                                                                                       |
|:-----------------|:------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `transferAnswer`.                                                                        |
| from             | The phone number used in the `from` field of the original call, in E.164 format (e.g. +15555555555).              |
| to               | The phone number used in the `to` field of the original call, in E.164 format (e.g. +15555555555).                |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                 |
| callId           | The call id associated with the event.                                                                            |
| callUrl          | The URL of the call associated with the event.                                                                    |
| tag              | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null. |
| transferCallerId | The phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555).                 |
| transferTo       | The phone number used as the `to` field of the B-leg call, in E.164 format (e.g. +15555555555).                   |

{% common %}

#### Example: Successful transfer to 1-555-666-7777

```
POST http://[External server URL]
```

```json
{
	"eventType":"transferAnswer",
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"transferTo":"+15556667777",
	"transferCallerId":"+15551112222"
}
```

{% endmethod %}
