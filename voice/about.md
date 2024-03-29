{% raw %}
<section class="voiceAbout">
{% endraw %}

# Bandwidth Voice API

## Base API URL
`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

## REST API Reference Index

| Resource                                          | Description                                                                       |
|:--------------------------------------------------|:----------------------------------------------------------------------------------|
| [`/calls`](methods/calls/about.md)                | The Calls resource lets you make phone calls and modify active calls.             |
| [`/conferences`](methods/conferences/about.md)    | The Conferences resource lets you retrieve information and modify conferences.    |
| [`/recordings`](methods/recordings/about.md)      | The Recordings resource lets you retrieve information about recordings created during calls as well as manage recordings on a live call. |


## BXML verbs

| Verb                                                 | Description                                                                                           |
|:-----------------------------------------------------|:------------------------------------------------------------------------------------------------------|
| [`<Bridge>`](bxml/verbs/bridge.md)                   | The Bridge verb is used to bridge two calls.                                                          |
| [`<Conference>`](bxml/verbs/conference.md)           | The Conference verb is used to add a call to a conference.                                            |
| [`<Forward>`](bxml/verbs/forward.md)                 | The Forward verb is used to forward an unanswered incoming call to another number.                    |
| [`<Gather>`](bxml/verbs/gather.md)                   | The Gather verb is used to collect DTMF digits.                                                       |
| [`<Hangup>`](bxml/verbs/hangup.md)                   | The Hangup verb is used to hang up or reject a call.                                                  |
| [`<Pause>`](bxml/verbs/pause.md)                     | The Pause verb is used to delay verb execution for a period of time.                                  |
| [`<PauseRecording>`](bxml/verbs/pauseRecording.md)   | The PauseRecording verb is used to pause a recording previously started by a `<StartRecording>` verb. |
| [`<PlayAudio>`](bxml/verbs/playAudio.md)             | The PlayAudio verb is used to play an audio file in the call.                                         |
| [`<Record>`](bxml/verbs/record.md)                   | The Record verb allows a segment of audio to be recorded during a call.                               |
| [`<Redirect>`](bxml/verbs/redirect.md)               | The Redirect verb is used to redirect the current XML execution to another URL.                       |
| [`<ResumeRecording>`](bxml/verbs/resumeRecording.md) | The ResumeRecording verb is used to resume a recording previously paused by a `<PauseRecording>` verb.|
| [`<Ring>`](bxml/verbs/ring.md)                       | The Ring verb is used to play ringing audio on a call.                                                |
| [`<SendDtmf>`](bxml/verbs/sendDtmf.md)               | The SendDtmf verb is used to play DTMF digits in the call.                                            |
| [`<SpeakSentence>`](bxml/verbs/speakSentence.md)     | The SpeakSentence verb converts text into audible speech.                                             |
| [`<StartGather>`](bxml/verbs/startGather.md)         | The StartGather verb is used to collect DTMF digits during the execution of other verbs. |
| [`<StartRecording>`](bxml/verbs/startRecording.md)   | The StartRecording verb allows a segment of a call to be recorded while other verbs are executing.    |
| [`<StopGather>`](bxml/verbs/stopGather.md)           | The StopGather verb stops the DTMF collection initiated by `<StartGather>`. |
| [`<StopRecording>`](bxml/verbs/stopRecording.md)     | The StopRecording verb stops a recording that was previously started by a `<StartRecording>`.         |
| [`<Tag>`](verbs/tag.md)                              | The Tag verb is used to set a new tag value without executing a callback. |
| [`<Transfer>`](bxml/verbs/transfer.md)               | The Transfer verb is used to transfer the call to another number.                                     |

## BXML Callbacks

| Callback                                                         | Description                                                                                                                                                                                     |
|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Answer](bxml/callbacks/answer.md)                               | Bandwidth API sends this when the call is answered.                                                                                                                                             |
| [Bridge Complete](bxml/callbacks/bridgeComplete.md)              | Bandwidth API sends this to the application when a `<Bridge>` is complete and the original call needs to continue.                                                                              |
| [Bridge Target Complete](bxml/callbacks/bridgeTargetComplete.md) | Bandwidth API sends this to the application when a `<Bridge>` is complete and the target call needs to continue.                                                                                |
| [Gather](bxml/callbacks/gather.md)                               | Bandwidth API sends this when a `<Gather>` is completed.                                                                                                                                        |
| [Initiate](bxml/callbacks/initiate.md)                           | Bandwidth API sends this when an inbound call arrives.                                                                                                                                          |
| [Record Complete](bxml/callbacks/recordComplete.md)              | Bandwidth API sends this when a `<Record>` is completed. The recording is not available to download until the [Recording Available](bxml/callbacks/recordingAvailable.md) event is received.    |
| [Redirect](bxml/callbacks/redirect.md)                           | Bandwidth API sends this when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](methods/calls/postCallsCallId.md) endpoint requesting a redirect.             |
| [Transfer Answer](bxml/callbacks/transferAnswer.md)              | Bandwidth API sends this when the `<Transfer>` is answered.                                                                                                                                     |
| [Transfer Complete](bxml/callbacks/transferComplete.md)          | Bandwidth API sends this when the `<Transfer>` is complete and the original call needs to continue.                                                                                             |
| [Conference Created](bxml/callbacks/conferenceCreated.md)        | Bandwidth API sends this when a new conference is created.                                                                                                                                      |
| [Conference Member Join](bxml/callbacks/conferenceMemberJoin.md) | Bandwidth API sends this when a new member joins a conference.                                                                                                                                  |
| [Conference Member Exit](bxml/callbacks/conferenceMemberExit.md) | Bandwidth API sends this when a member leaves a conference.                                                                                                                                     |
| [Conference Redirect](bxml/callbacks/conferenceRedirect.md)      | Bandwidth API sends this to the application when a POST request is made to the [/conferences/{conferenceId}](methods/conferences/postConferencesConferenceId.md) endpoint requesting to modify a conference. |
| [Machine Detection Complete](bxml/callbacks/machineDetectionComplete.md) | Bandwidth API sends this when a machine detection operation is completed. |

## Asynchronous Callbacks
| Callback                                                            | Description                                                                                                                      |
|:--------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| [Conference Completed](bxml/callbacks/conferenceCompleted.md)       | Bandwidth API sends this after the last member leaves the conference. |
| [Conference Recording Available](bxml/callbacks/conferenceRecordingAvailable.md) | Bandwidth API sends this when a recording started by a `<StartRecording>`in a conference is available for download. |
| [Disconnect](bxml/callbacks/disconnect.md)                          | Bandwidth API sends this when a call ends. |
| [DTMF](bxml/callbacks/dtmf.md)                                      | Bandwidth API sends this for every digit detected after a `<StartGather>` is executed. |
| [Recording Available](bxml/callbacks/recordingAvailable.md)         | Bandwidth API sends this when a recording started by either a `<StartRecording>` or a `<Record>` verb in a call is available for download. |
| [Transfer Disconnect](bxml/callbacks/transferDisconnect.md)         | Bandwidth API sends this when any leg of a `<Transfer>` ends.                                                                    |
| [Transcription Available](bxml/callbacks/transcriptionAvailable.md) | Bandwidth API sends this when the transcription of a recording is available for download.                                        |

## Error Codes
| Type                         | Description                                                           |
|:-----------------------------|:----------------------------------------------------------------------|
| [Rate Limits](rateLimits.md) | Every endpoint is rate limited                                        |
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API |

---
