## BXML Callbacks

###  Understanding BXML Callback Events

BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and BXML. Their purpose is to:
1. inform you of events that have happened in the call flow
2. receive instructions from your application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event. It expects an XML response consisting of [BXML verbs](../../about.md).

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each callback's URL. If the GET method is used, the properties are passed as query parameters. This can cause very long URLs, so POST is the preferred method.

We use a 15s request timeout by default when trying to deliver all callbacks. However, you can customize that value [when creating an outbound call](../../methods/calls/postCalls.md) by setting a `callbackTimeout` on the request.

Relative URLs are allowed in BXML verb attributes and they will be resolved against the server's URL that just responded with the BXML containing the relative URL. For example, if we send an [answer event](./answer.md) to `https://example.com/answer` and the BXML sent back to us contains a [Gather](../verbs/Gather.md) with a `gatherUrl=/onGatherComplete`, the [gather event](./gather.md) will be sent to `https://example.com/onGatherComplete`.

| Callback                                          | Description                                                                                                                                                                                                  |
|:--------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Answer](answer.md)                               | Bandwidth API sends this when the call is answered.                                                                                                                                       |
| [Bridge Complete](bridgeComplete.md)              | Bandwidth API sends this to the application when a `<Bridge>` is complete and the original call needs to continue.                                                                                           |
| [Bridge Target Complete](bridgeTargetComplete.md) | Bandwidth API sends this to the application when a `<Bridge>` is complete and the target call needs to continue.                                                                                             |
| [Gather](gather.md)                               | Bandwidth API sends this when a `<Gather>` is completed.                                                                                                                                                     |
| [Initiate](initiate.md)                           | Bandwidth API sends this when an inbound call arrives.                                                                                                                                    |
| [Record Complete](recordComplete.md)              | Bandwidth API sends this when a `<Record>` is completed. The recording is not available to download until the [Recording Available](recordingAvailable.md) event is received.             |
| [Redirect](redirect.md)                           | Bandwidth API sends this when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](../../methods/calls/postCallsCallId.md) endpoint requesting a redirect. |
| [Transfer Answer](transferAnswer.md)              | Bandwidth API sends this when the `<Transfer>` is answered.                                                                                                                                 |
| [Transfer Complete](transferComplete.md)          | Bandwidth API sends this when the `<Transfer>` is complete and the original call needs to continue.                                                                                         |
| [Conference Created](conferenceCreated.md)        | Bandwidth API sends this when a new conference is created.                                                                                                                                                   |
| [Conference Member Join](conferenceMemberJoin.md) | Bandwidth API sends this when a new member joins a conference.                                                                                                                                               |
| [Conference Member Exit](conferenceMemberExit.md) | Bandwidth API sends this when a member leaves a conference.                                                                                                                                                  |
| [Conference Redirect](conferenceRedirect.md)      | Bandwidth API sends this to the application when a POST request is made to the [/conferences/{conferenceId}](../../methods/conferences/postConferencesConferenceId.md) endpoint requesting to modify a conference. |

## Asynchronous Callbacks

###  Understanding Asynchronous Callback Events
Asynchronous callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and
BXML.  The HTTP POST method is used by default.  The request will have a JSON body that describes the event.  An
HTTP 201 response with no content is expected.  HTTP 200 is also acceptable. If there is a response body (including BXML), it will be ignored.

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each
callback's URL.  If the GET method is used, the properties are passed as query parameters.  This can cause very long
URLs, so POST is the preferred method.

| Callback                                       | Description                                                                                                                                         |
|:-----------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Conference Completed](conferenceCompleted.md) | Bandwidth API sends this after the last member leaves the conference.                                                                               |
| [Conference Recording Available](conferenceRecordingAvailable.md) | Bandwidth API sends this when a recording started by a `<StartRecording>`in a conference is available for download. |
| [Disconnect](disconnect.md)                    | Bandwidth API sends this when a call ends.                                                                                       |
| [DTMF](dtmf.md)                                | Bandwidth API sends this for every digit detected after a `<StartGather>` is executed. |
| [Recording Available](recordingAvailable.md)   | Bandwidth API sends this when a recording started by either a `<StartRecording>` or a `<Record>` verb in a call is available for download. |
| [Transfer Disconnect](transferDisconnect.md)   | Bandwidth API sends this when any leg of a `<Transfer>` ends.                                                                                       |
| [Transcription Available](transcriptionAvailable.md) | Bandwidth API sends this when the transcription of a recording is available for download. |
