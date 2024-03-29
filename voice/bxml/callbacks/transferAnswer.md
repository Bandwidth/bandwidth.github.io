{% method %}
##  Transfer Answer Event – <Transfer> verb
When processing a [`<Transfer>`](../verbs/transfer.md) verb, this event is sent when a called party (B-leg) answers.  The event is sent to
  the endpoint specified in the `transferAnswerUrl` attribute of the `<PhoneNumber>` tag that answered. BXML returned by this callback will be executed for the called party only. After all BXML has been executed, the called party will be bridged to the original
  call. 
  
Most BXML verbs are allowed in response to a `transferAnswer` event, but some are not allowed. A full list of verbs and whether or not they are allowed:

| Verb                                              | Allowed       |
|---------------------------------------------------|---------------|
| [Bridge](../verbs/bridge.md)                      | No            |
| [Conference](../verbs/conference.md)              | No            |
| [Forward](../verbs/forward.md)                    | No            |
| [Gather](../verbs/gather.md)                      | Yes           |
| [Hangup](../verbs/hangup.md)                      | Yes           |
| [Pause](../verbs/pause.md)                        | Yes           |
| [PauseRecording](../verbs/pauseRecording.md)      | Yes           |
| [PlayAudio](../verbs/playAudio.md)                | Yes           |
| [Record](../verbs/record.md)                      | Yes           |
| [Redirect](../verbs/redirect.md)                  | Yes           |
| [ResumeRecording](../verbs/resumeRecording.md)    | Yes           |
| [Ring](../verbs/ring.md)                          | Yes           |
| [SendDtmf](../verbs/sendDtmf.md)                  | Yes           |
| [SpeakSentence](../verbs/speakSentence.md)        | Yes           |
| [StartGather](../verbs/startGather.md)            | Yes           |
| [StartRecording](../verbs/startRecording.md)      | Yes           |
| [StopGather](../verbs/stopGather.md)              | Yes           |
| [StopRecording](../verbs/stopRecording.md)        | Yes           |
| [Tag](../verbs/tag.md)                            | Yes           |
| [Transfer](../verbs/transfer.md)                  | No            |

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- Valid, executable BXML verbs to play to the called party -->
</Response>
```

### Properties
| Property          | Description |
|:------------------|:------------|
| eventType         | The event type, value is `transferAnswer`. |
| eventTime         | The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution. |
| accountId         | The user account associated with the call. |
| applicationId     | The id of the application associated with the call. |
| from              | The provided identifier string of the caller used in the `from` field of the original call. |
| to                | The phone number used in the `to` field of the original call, in E.164 format (e.g. +15555555555). |
| direction         | The direction of the call. Always `outbound` for this event. |
| callId            | The call id of the newly-created B leg. |
| parentCallId      | The call id of the original call leg that executed the `<Transfer>` tag. |
| callUrl           | The URL of the call associated with the event. |
| enqueuedTime      | (optional) If [call queueing](../../methods/calls/postCalls.md) is enabled and this is an outbound call, time the call was queued, in ISO 8601 format. |
| startTime         | Time the call was started, in ISO 8601 format. |
| answerTime        | Time the call was answered, in ISO 8601 format. |
| tag               | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, this field will not be present. |
| transferCallerId  | The phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555) or one of `Restricted`, `Anonymous`, `Private`, or `Unavailable`. |
| transferTo        | The phone number used as the `to` field of the B-leg call, in E.164 format (e.g. +15555555555). |

{% common %}

#### Example: Successful transfer to 1-555-666-7777

```
POST http://[External server URL]
```

```json
{
	"eventType"        : "transferAnswer",
	"eventTime"        : "2019-06-20T15:57:22.477Z",
	"accountId"        : "55555555",
	"applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"from"             : "+15551112222",
	"to"               : "+15553334444",
	"direction"        : "outbound",
	"callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"parentCallId"     : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
	"callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"startTime"        : "2019-06-20T15:54:22.234Z",
	"answerTime"       : "2019-06-20T15:54:25.432Z",
	"transferTo"       : "+15556667777",
	"transferCallerId" : "+15551112222"
}
```

#### Example: Successful transfer to 1-555-666-7777 with Enqueued Time

```http
POST http://[External server URL]
```

```json
{
	"eventType"        : "transferAnswer",
	"eventTime"        : "2019-06-20T15:57:22.477Z",
	"accountId"        : "55555555",
	"applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"from"             : "+15551112222",
	"to"               : "+15553334444",
	"direction"        : "outbound",
	"callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"parentCallId"     : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
	"callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"enqueuedTime"     : "2019-06-20T15:51:54.109Z",
	"startTime"        : "2019-06-20T15:54:22.234Z",
	"answerTime"       : "2019-06-20T15:54:25.432Z",
	"transferTo"       : "+15556667777",
	"transferCallerId" : "+15551112222"
}
```

{% endmethod %}
