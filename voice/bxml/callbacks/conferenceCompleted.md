{% method %}
## Conference Completed Event
The Conference Completed event is fired when the last member leaves the [conference](../verbs/conference.md).  
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description |
|:----------   |:------------|
| eventType    | The event type, value is `conferenceCompleted` |
| conferenceId | The ID of the new conference that was created |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null. |

{% common %}

#### Example: The last member leaves the conference

```
POST http://[External server URL]
```

```json
{
    "conferenceId"   : "conf-59082d52-4a2ab5be-ce26-43ed-af94-431b8a19d4e3",
    "name"           : "thisConference",
    "eventType"      : "conferenceCompleted",
    "tag"            : "conferenceTag"
}
```

{% endmethod %}
