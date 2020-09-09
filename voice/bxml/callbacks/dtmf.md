{% method %}
## DTMF Event

The DTMF event is sent for every digit detected after a [`<StartGather>`](../verbs/startGather.md) verb is executed.

You may not respond to this event with BXML.

### Expected response

```http
HTTP/1.1 204
```

### Properties
| Property         | Description |
|:-----------------|:------------|
| eventType        | The event type, value is `dtmf`. |
| accountId        | The user account associated with the call. |
| applicationId    | The id of the application associated with the call. |
| to               | The phone number that received the call, in E.164 format (e.g. +15555555555). |
| from             | The phone number that made the call, in E.164 format (e.g. +15555555555). |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes. |
| callId           | The call id associated with the event. |
| digit            | The digit collected in the call. |
| callUrl          | The URL of the call associated with the event. |
| startTime        | Time the call was started, in ISO 8601 format. |
| answerTime       | Time the call was answered, in ISO 8601 format. |
| parentCallId     | (optional) If the event is related to the B leg of a `<Transfer>`, the call id of the original call leg that executed the `<Transfer>`. Otherwise, null. |
| transferCallerId | (optional) If the event is related to the B leg of a `<Transfer>`, the phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555). Otherwise, null. |
| transferTo       | (optional) If the event is related to the B leg of a `<Transfer>`, the phone number used as the `to` field of the B-leg call in E.164 format (e.g. +15555555555). Otherwise, null. |
| tag              | (optional) The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null. |

{% common %}

#### Example: DTMF event

```
POST http://[External server URL]
```

```json
{
	"eventType"        : "dtmf",
	"accountId"        : "55555555",
	"applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"startTime"        : "2019-06-20T15:54:22.234Z",
	"answerTime"       : "2019-06-20T15:54:25.432Z",
	"from"             : "+15551112222",
	"to"               : "+15553334444",
	"direction"        : "outbound",
	"callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"digit"            : "2"
}
```

{% endmethod %}