{% method %}
##  Bridge Target Complete Event
This event is sent to the `bridgeTargetCompleteUrl` if the originating call leaves the [bridge](../verbs/bridge.md),
and the BXML returned in this callback is executed on the target call.

### Expected response
```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to process in the target call -->
</Response>
```

### Properties
| Property         | Description                                                                                               |
|:-----------------|:----------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `bridgeTargetComplete`.                                                          |
| accountId        | The user account associated with the call.                                                                |
| applicationId    | The id of the application associated with the call.                                                       |
| from             | The phone number used in the `from` field of the original call, in E.164 format (e.g. +15555555555).      |
| to               | The phone number user in the `to` field of the original call, in E.164 format (e.g. +15555555555).        |
| direction        | The direction of the call. Either `inbound` or `outbound`. The direction of a call never changes.         |
| callId           | The bridge target call id.                                                                                |
| callUrl          | The URL of the call associated with the event.                                                            |
| startTime        | Time the call was started, in ISO 8601 format.                                                            |
| tag              | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.    |

{% common %}

#### Example: Bridge completion

```
POST http://[External server URL]
```

```json
{
	"eventType"        : "bridgeTargetComplete",
	"accountId"        : "55555555",
	"applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
	"from"             : "+15551112222",
	"to"               : "+15553334444",
	"direction"        : "outbound",
	"callId"           : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
	"callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
	"startTime"        : "2019-07-31T13:13:34.859Z",
}
```

{% endmethod %}
