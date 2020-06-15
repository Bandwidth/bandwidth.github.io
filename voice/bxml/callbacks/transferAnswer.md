{% method %}
##  Transfer Answer Event – <Transfer> verb
When processing a [`<Transfer>`](../verbs/transfer.md) verb, this event is sent when a called party (B-leg) answers.  The event is sent to
  the endpoint specified in the `transferAnswerUrl` attribute of the `<PhoneNumber>` tag that answered. Verbs returned by this callback will be
  executed for the called party only. Afterward, the called party will be bridged to the original
  call. Allowed verbs are [Gather](../verbs/gather.md), [Hangup](../verbs/hangup.md), [Pause](../verbs/pause.md),
  [PauseRecording](../verbs/pauseRecording.md), [PlayAudio](../verbs/playAudio.md), [Record](../verbs/record.md), 
  [Redirect](../verbs/redirect.md), [ResumeRecording](../verbs/resumeRecording.md), [SendDtmf](../verbs/sendDtmf.md), 
  [SpeakSentence](../verbs/speakSentence.md), [StartRecording](../verbs/startRecording.md), and [StopRecording](../verbs/stopRecording.md). 
  Verbs not allowed during this event are [Conference](../verbs/conference.md), [Forward](../verbs/forward.md), and [Transfer](../verbs/transfer.md).
  
  
  It is important to note that no other BXML verbs may be specified after a Transfer Answer Event is called.

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to play to the called party -->
</Response>
```

### Properties
| Property         | Description                                                                                                       |
|:-----------------|:------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `transferAnswer`.                                                                        |
| accountId        | The user account associated with the call.                                                                        |
| applicationId    | The id of the application associated with the call.                                                               |
| from             | The phone number used in the `from` field of the original call, in E.164 format (e.g. +15555555555).              |
| to               | The phone number used in the `to` field of the original call, in E.164 format (e.g. +15555555555).                |
| direction        | The direction of the call. Always `outbound` for this event.                                                      |
| callId           | The call id of the newly-created B leg.                                                                           |
| parentCallId     | The call id of the original call leg that contained the `<Transfer>` tag.                                         |
| callUrl          | The URL of the call associated with the event.                                                                    |
| startTime        | Time the call was started, in ISO 8601 format.                                                                    |
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
	"eventType"        : "transferAnswer",
	"accountId"        : "55555555",
	"applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"from"             : "+15551112222",
	"to"               : "+15553334444",
	"direction"        : "outbound",
	"callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"parentCallId"     : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
	"callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"startTime"        : "2019-06-20T15:54:22.234Z",
	"transferTo"       : "+15556667777",
	"transferCallerId" : "+15551112222"
}
```

{% endmethod %}
