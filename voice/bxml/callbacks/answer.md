{% method %}
## Answer Event

The Answer event is fired when an outbound call is answered.

### Expected response

```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process in the call -->
</Response>
```

### Properties
| Property  | Description                                                                                                     |
|:----------|:----------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`                                                                               |
| to        | The phone number that received the call, in E.164 format (e.g. +15555555555).                                   |
| from      | The phone number that made the call, in E.164 format (e.g. +15555555555).                                       |
| direction | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.               |
| callId    | The call id associated with the event.                                                                          |
| callUrl   | The URL of the call associated with the event.                                                                  |
| tag       | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null. |

{% common %}
#### Example: Basic answer event

```
POST http://[External server URL]
```

```json
{
	"eventType":"answer",
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d"
}
```

#### Example: Answer event with tag property

```
POST http://[External server URL]
```
```json
{
	"eventType":"answer",
	"from":"+15551112222",
	"to":"+15553334444",
	"direction":"outbound",
	"callId":"c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"callUrl":"https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"tag":"example-tag"
}
```

{% endmethod %}