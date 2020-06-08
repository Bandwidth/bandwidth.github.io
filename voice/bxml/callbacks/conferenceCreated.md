{% method %}
## Conference Created Event
The Conference Created event is fired whenever a new [conference](../verbs/conference.md) that specified a callbackUrl is created.
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description |
|:----------   |:------------|
| eventType    | The event type, value is `conferenceCreated` |
| conferenceId | The ID of the new conference that was created |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag.|
| tag          | (optional) The `tag`  specified on conference creation. If no `tag` was specified or it was previously cleared, null. |

{% common %}

#### Example: Conference created 

```
POST http://[External server URL]
```

```json
{
    "conferenceId"  : "conf-59082d52-4a2ab5be-ce26-43ed-af94-431b8a19d4e3",
    "name"          : "thisConference",
    "eventType"     : "conferenceCreated",
    "tag"           : "conferenceTag"
}
```

{% endmethod %}
