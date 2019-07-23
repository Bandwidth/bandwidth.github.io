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
| to           | The phone number that received the call, in E.164 format (e.g. +15555555555).                                                       |
| from         | The phone number that made the call, in E.164 format (e.g. +15555555555).                                                           |
| direction    | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.                                   |
| callId       | The call id associated with the event.                                                                                              |
| callUrl      | The URL of the call associated with the event.                                                                                      |       
| startTime    | Time the call was started, in ISO 8601 format.                                                                                      |
| answerTime   | (optional) Time the call was answered, in ISO 8601 format.                                                                          |
| endTime      | Time the call ended, in ISO 8601 format.                                                                                            |
| cause        | Reason the call ended - `busy`, `timeout`, `hangup`, `cancel`, `rejected`, `callback-error`, `invalid-bxml`, `error`, or `unknown`. |
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                     |

{% common %}

#### Example: Call ended due to a busy signal

```
POST http://[External server URL]
```

```json
{
	"eventType":"disconnect",
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl": "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"startTime":"2019-06-20T15:54:22.234Z",
	"answerTime":"",
	"endTime":"2019-06-20T15:55:54.123Z",
	"cause":"busy"
}
```

{% endmethod %}
