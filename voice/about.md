# Bandwidth Voice API

## Base API URL
`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

## REST API Reference Index

| Resource                           | Description                                                               |
|:-----------------------------------|:--------------------------------------------------------------------------|
| [`/calls`](methods/calls/about.md) | The Calls resource lets you make and phone calls and modify active calls. |


## BXML verbs

| Verb                                                 | Description                                                                                           |
|:-----------------------------------------------------|:------------------------------------------------------------------------------------------------------|
| [`<Forward>`](bxml/verbs/forward.md)                 | The Forward verb is used to forward an unanswered incoming call to another number.                    |
| [`<Gather>`](bxml/verbs/gather.md)                   | The Gather verb is used to collect DTMF digits.                                                       |
| [`<Hangup>`](bxml/verbs/hangup.md)                   | The Hangup verb is used to hangup the current call.                                                   |
| [`<Pause>`](bxml/verbs/pause.md)                     | The Pause verb is used to delay verb execution for a period of time.                                  |
| [`<PauseRecording>`](bxml/verbs/pauseRecording.md)   | The PauseRecording verb is used to pause a recording previously started by a `<StartRecording>` verb. |
| [`<PlayAudio>`](bxml/verbs/playAudio.md)             | The PlayAudio verb is used to play an audio file in the call.                                         |
| [`<Record>`](bxml/verbs/record.md)                   | The Record verb allows a segment of audio to be recorded during a call.                               |
| [`<Redirect>`](bxml/verbs/redirect.md)               | The Redirect verb is used to redirect the current XML execution to another URL.                       |
| [`<ResumeRecording>`](bxml/verbs/resumeRecording.md) | The ResumeRecording verb is used to resume a recording previously paused by a `<PauseRecording>` verb.|
| [`<SendDtmf>`](bxml/verbs/sendDtmf.md)               | The SendDtmf verb is used to play DTMF digits in the call.                                            |
| [`<SpeakSentence>`](bxml/verbs/speakSentence.md)     | The SpeakSentence verb converts text into audible speech.                                             |
| [`<StartRecording>`](bxml/verbs/startRecording.md)   | The StartRecording verb allows a segment of a call to be recorded while other verbs are executing.    |
| [`<StopRecording>`](bxml/verbs/stopRecording.md)     | The StopRecording verb stops a recording that was previously started by a `<StartRecording>`.         |
| [`<Transfer>`](bxml/verbs/transfer.md)               | The Transfer verb is used to transfer the call to another number.                                     |

## BXML Callbacks

| Callback                                                | Description                                                                                                                                                                                                     |
|:--------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Answer](bxml/callbacks/answer.md)                      | Bandwidth API sends this to the application when the call is answered.                                                                                                                                          |
| [Gather](bxml/callbacks/gather.md)                      | Bandwidth API sends this when a `<Gather>` is completed.                                                                                                                                                        |
| [Initiate](bxml/callbacks/initiate.md)                  | Bandwidth API sends this to the application when an inbound call arrives.                                                                                                                                       |
| [Record Complete](bxml/callbacks/recordComplete.md)     | Bandwidth API sends this to the application when a `<Record>` is completed. The recording is not available to download until the [Recording Available](bxml/callbacks/recordingAvailable.md) event is received. |
| [Redirect](bxml/callbacks/redirect.md)                  | Bandwidth API sends this to the application when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](methods/calls/postCallsCallId.md) endpoint requesting a redirect.          |
| [Transfer Answer](bxml/callbacks/transferAnswer.md)     | Bandwidth API sends this to the application when the `<Transfer>` is answered.                                                                                                                                  |
| [Transfer Complete](bxml/callbacks/transferComplete.md) | Bandwidth API sends this to the application when the `<Transfer>` is complete.                                                                                                                                  |

## Asynchronous Callbacks
| Callback                                                         | Description                                                                             |
|:-----------------------------------------------------------------|:----------------------------------------------------------------------------------------|
| [Disconnect](bxml/callbacks/disconnect.md)                       | Bandwidth API sends this to the application when a call ends.                           |
| [Recording Available](bxml/callbacks/recordingAvailable.md)      | Bandwidth API sends this to the application when a recording started by either a `<StartRecording>` or a `<Record>` verb is available for download. |

## Error Codes
| Type                         | Description                                                           |
|:-----------------------------|:----------------------------------------------------------------------|
| [Rate Limits](rateLimits.md) | Every endpoint is rate limited                                        |
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API |

---
