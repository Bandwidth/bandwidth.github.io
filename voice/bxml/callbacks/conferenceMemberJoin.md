{% method %}
## Conference Member Join Event
The Conference Member Join event is fired whenever a caller joins a [conference](../verbs/conference.md) that specified a callbackUrl.
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description                                                                                                     |
|:----------   |:----------------------------------------------------------------------------------------------------------------|
| eventType    | The event type, value is `conferenceMemberJoin`                                                                 |
| conferenceId | The ID of the new conference that was created |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag.|
| callId       | The callId of the member that left the conference |
| from         | The from number of the call that left the conference |
| to           | The to number of the call that left the conference |
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null. |

{% common %}

#### Example: Member joins the conference

```
POST http://[External server URL]
```

```json
{
    "conferenceId"  : "conf-59082d52-4a2ab5be-ce26-43ed-af94-431b8a19d4e3",
    "name"          : "thisConference",
    "eventType"     : "conferenceMemberJoin",                                                                                                                                                                                                                                                    
    "callId"        : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "to"            : "+15551112345",
    "from"          : "+15559998765",
    "tag"           : "conferenceTag"
}
```

{% endmethod %}
