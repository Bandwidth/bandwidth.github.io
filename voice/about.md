# Bandwidth Voice API

## Base API URL
`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

## REST API Reference Index

| Resource                           | Description                                                               |
|:-----------------------------------|:--------------------------------------------------------------------------|
| [`/calls`](methods/calls/about.md) | The Calls resource lets you make and phone calls and modify active calls. |


## BXML verbs

| Verb                                             | Description                                                                        |
|:-------------------------------------------------|:-----------------------------------------------------------------------------------|
| [`<Forward>`](bxml/verbs/forward.md)             | The Forward verb is used to forward an unanswered incoming call to another number. |
| [`<Gather>`](bxml/verbs/gather.md)               | The Gather verb is used to collect digits for some period of time.                 |
| [`<Hangup>`](bxml/verbs/hangup.md)               | The Hangup verb is used to hangup current call.                                    |
| [`<Pause>`](bxml/verbs/pause.md)                 | The Pause verb is used to delay for a period of time in the call.                  |
| [`<PlayAudio>`](bxml/verbs/playAudio.md)         | The PlayAudio verb is used to play an audio file in the call.                      |
| [`<Redirect>`](bxml/verbs/redirect.md)           | The Redirect verb is used to redirect the current XML execution to another URL.    |
| [`<SendDtmf>`](bxml/verbs/sendDtmf.md)           | The SendDtmf verb is used to play DTMF digits in the call.                         |
| [`<SpeakSentence>`](bxml/verbs/speakSentence.md) | The SpeakSentence verb is used to convert any text into speak for the caller.      |
| [`<Transfer>`](bxml/verbs/transfer.md)           | The Transfer verb is used to transfer the call to another number.                  |

## BXML Callbacks

| Callback                                                | Description                                                                    |
|:--------------------------------------------------------|:-------------------------------------------------------------------------------|
| [Answer](bxml/callbacks/answer.md)                      | Bandwidth API sends this to the application when the call is answered.         |
| [Gather](bxml/callbacks/gather.md)                      | Bandwidth API sends this when a `<Gather>` is completed.                       |
| [Initiate](bxml/callbacks/initiate.md)                  | Bandwidth API sends this to the application when an inbound call arrives.      |
| [Redirect](bxml/callbacks/redirect.md)                  | Bandwidth API sends this to the application when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](methods/calls/postCallsCallId.md) endpoint requesting a redirect. |
| [Transfer Answer](bxml/callbacks/transferAnswer.md)     | Bandwidth API sends this to the application when the `<Transfer>` is answered. |
| [Transfer Complete](bxml/callbacks/transferComplete.md) | Bandwidth API sends this to the application when the `<Transfer>` is complete. |

## Asynchronous Callbacks
| Callback                                   | Description                                                   |
|:-------------------------------------------|:--------------------------------------------------------------|
| [Disconnect](bxml/callbacks/disconnect.md) | Bandwidth API sends this to the application when a call ends. |

## Error Codes
| Type                         | Description                                                           |
|:-----------------------------|:----------------------------------------------------------------------|
| [Rate Limits](rateLimits.md) | Every endpoint is rate limited                                        |
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API |

---
