# Voice Concepts

See [Release Notes](relnotes.md) for important information specific to this preview release.

## Base API URL
`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}`

## REST API Reference Index

| Resource                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`/calls`](methods/calls/calls.md)                                            | The Calls resource lets you make phone calls and view information about previous inbound and outbound calls.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`/recordings`](methods/recordings/recordings.md)                             | The Recordings resource lets you access recordings made during a call. |

## REST API Callback Reference Index

## BXML verbs

| Verb                                             | Description                                                                                                                                     |
|:-------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| [`<Gather>`](bxml/verbs/gather.md)               | The Gather verb is used to collect digits for some period of time.                                                                              |
| [`<Hangup>`](bxml/verbs/hangup.md)               | The Hangup verb is used to hangup current call.                                                                                                 |
| [`<PlayAudio>`](bxml/verbs/playAudio.md)         | The PlayAudio verb is used to play an audio file in the call.                                                                                   |
| [`<Record>`](bxml/verbs/record.md)               | The Record verb allows a segment of audio to be recorded during a call. |
| [`<Redirect>`](bxml/verbs/redirect.md)           | The Redirect verb is used to redirect the current XML execution to another URL.                                                                 |
| [`<SpeakSentence>`](bxml/verbs/speakSentence.md) | The SpeakSentence verb is used to convert any text into speak for the caller.                                                                   |
| [`<StartRecording>`](bxml/verbs/startRecording.md) | The StartRecording verb allows an entire section of a call to be recorded. |
| [`<StopRecording>`](bxml/verbs/stopRecording.md) | The StopRecording verb stops a recording that was started by a preceding [`<StartRecording>`](startRecording.md) verb. |
| [`<Record>`](bxml/verbs/record.md)               | The Record verb allows call recording. At the end of the call, a call recording event containing the media with recorded audio URL is generated |
| [`<Transfer>`](bxml/verbs/transfer.md)           | The Transfer verb is used to transfer the call to another number.                                                                               |

## BXML Callbacks

| Callback                                                | Description                                                                                                                     |
|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [Answer](bxml/callBacks/answer.md)                      | Bandwidth API sends this to the application when the call is answered.                                                  |
| [Gather](bxml/callBacks/gather.md)                      | Bandwidth API sends this when the gather command completes in a call.                                             |
| [Record Complete](bxml/callBacks/recordComplete.md)     | Bandwidth API sends this to the application when a recording stops. |
| [Redirect](bxml/callBacks/redirect.md)                  | Bandwidth API sends this to the application when a `<Redirect>` is requested                                              |
| [Transfer Answer](bxml/callBacks/transferAnswer.md)     | Bandwidth API sends this to the application when the `<Transfer>`is answered                                              |
| [Transfer Complete](bxml/callBacks/transferComplete.md) | Bandwidth API sends this to the application when the `<Transfer>`is complete                                              |

## Asynchronous Callbacks
| Callback                                         | Description                                                                                                                     |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [CallComplete](bxml/callBacks/callComplete.md)   | Bandwidth API sends this to the application when a call ends. |
| [RecordingAvailable](bxml/callBacks/recordingAvailable.md)| Bandwidth API sends this to the application when a recording can be accessed. |

## Error Codes
| Type                         | Description                                                                |
|:-----------------------------|:---------------------------------------------------------------------------|
| [Rate Limits](rateLimits.md) | Every endpoint is rate limited, Calls and Messages are handled differently |
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API      |

---
