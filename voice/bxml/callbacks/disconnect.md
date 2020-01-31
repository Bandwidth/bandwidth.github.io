{% method %}
## Disconnect Event
The Disconnect event is fired when a call ends, for any reason.

### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description                                                                                                                         |
|:----------   |:------------------------------------------------------------------------------------------------------------------------------------|
| eventType    | The event type, value is `disconnect`                                                                                               |
| accountId     | The user account associated with the call.                                                                                          |
| applicationId | The id of the application associated with the call.                                                                                 |
| to           | The phone number that received the call, in E.164 format (e.g. +15555555555).                                                       |
| from         | The phone number that made the call, in E.164 format (e.g. +15555555555).                                                           |
| direction    | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                   |
| callId       | The call id associated with the event.                                                                                              |
| callUrl      | The URL of the call associated with the event.                                                                                      |
| startTime    | Time the call was started, in ISO 8601 format.                                                                                      |
| answerTime   | (optional) Time the call was answered, in ISO 8601 format.                                                                          |
| endTime      | Time the call ended, in ISO 8601 format.                                                                                            |
| cause        | Reason the call ended<br> `busy`, `timeout`, `hangup`, `cancel`, `rejected`, `callback-error`, `invalid-bxml`, `account-limit`, `node-capacity-exceeded`, `error`, or `unknown`. `hangup` indicates the call has ended normally. |
| errorMessage | (optional) Text explaining the reason that caused the call to be ended in case of errors.                                           |
| errorId      | (optional) Bandwidth internal id that references the error event.                                                                   |
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                     |

{% common %}

#### Example: Call ended due to a busy signal

```
POST http://[External server URL]
```

```json
{
	"eventType"     : "disconnect",
	"accountId"     : "55555555",
	"applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"from"          : "+15551112222",
	"to"            : "+15553334444",
	"direction"     : "outbound",
	"callId"        : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl"       : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"startTime"     : "2019-06-20T15:54:22.234Z",
	"endTime"       : "2019-06-20T15:55:54.123Z",
	"cause"         : "busy",
	"errorMessage"  : "Callee is busy",
	"errorId"       : "4642074b-7b58-478b-96e4-3a60955c6765"
}
```

{% endmethod %}
