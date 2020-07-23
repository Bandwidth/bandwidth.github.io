{% method %}
## Conference Completed Event
The Conference Completed event is fired when the last member leaves the [conference](../verbs/conference.md).

The response to this event may not contain BXML.

### Expected response

```http
HTTP/1.1 204
```

### Properties

| Property     | Description |
|:-------------|:------------|
| eventType    | The event type, value is `conferenceCompleted`. |
| conferenceId | The ID of the new conference that was created. |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |
| tag          | (optional) The `tag` that was set at conference creation, if any. |

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
