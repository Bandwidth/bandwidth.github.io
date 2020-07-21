{% method %}
## Conference Redirect Event
The Conference Redirect event is fired whenever an existing conference is modified via a POST request made to the [/conferences/{conferenceId}](../../methods/conferences/postConferencesConferenceId.md) endpoint
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
| eventType    | The event type, value is `conferenceRedirect`. |
| conferenceId | The ID of the new conference that was created. |
| name         | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |

{% common %}

#### Example: Conference redirect

```

```

{% endmethod %}
