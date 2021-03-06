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

| Property          | Description |
|:------------------|:------------|
| eventType         | The event type, value is `conferenceRedirect`. |
| eventTime         | The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution. |
| conferenceId      | The ID of the conference. |
| name              | The custom name used to reference this conference. This the name that you included inside the body of the [`<Conference>`](../verbs/conference.md) tag. |
| tag               | (optional) The `tag` that was set at conference creation. If no `tag` was specified, this field will not be present. |

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
       "eventTime"     : "2019-09-13T16:50:53.788Z"
   }

```

{% endmethod %}
