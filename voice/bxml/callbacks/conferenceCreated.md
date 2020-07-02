{% method %}
## Conference Created Event
The Conference Created event is fired whenever a new [conference](../verbs/conference.md) that specified a `callbackUrl` is created.

The response may be either empty or a BXML. Only `<PlayAudio>` and `<SpeakSentence>` are supported, which will be heard by members that enter the conference while still playing.

### Expected response

```http
HTTP/1.1 204
```

```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- <PlayAudio> or <SpeakSentence> BXML verbs to play in the conference -->
</Response>
```

### Properties

| Property     | Description |
|:-------------|:------------|
| eventType    | The event type, value is `conferenceCreated`. |
| conferenceId | The ID of the new conference that was created. |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |
| tag          | (optional) The `tag` that was set at conference creation, if any. |

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
