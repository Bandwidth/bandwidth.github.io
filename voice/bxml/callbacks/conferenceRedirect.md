{% method %}
## Conference Redirect Event
The Conference Redirect event is fired whenever an existing [conference](../verbs/conference.md) is modified via a POST request made to the [/conferences/{conferenceId}](../../methods/conferences/postConferencesConferenceId.md) endpoint

The response may be either empty or a BXML document. Only the following verbs are valid for conferences:
* [`PlayAudio`](../verbs/playAudio.md)
* [`SpeakSentence`](../verbs/speakSentence.md)
* [`StartRecording`](../verbs/startRecording.md)
* [`StopRecording`](../verbs/stopRecording.md)
* [`PauseRecording`](../verbs/pauseRecording.md)
* [`ResumeRecording`](../verbs/resumeRecording.md)
### Expected response

```http
HTTP/1.1 204
```

```http
HTTP/1.1 200
Content-Type: application/xml; charset=utf-8

<Response>
    <!-- BXML verbs to execute in the conference -->
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
POST http://[External server URL]
```

```json
   {
       "conferenceId"  : "conf-59082d52-4a2ab5be-ce26-43ed-af94-431b8a19d4e3",
       "name"          : "thisConference",
       "eventType"     : "conferenceRedirect",
   }

```

{% endmethod %}