# Bandwidth XML (BXML)

Bandwidth XML allows you to create a voice application as easily as you create a Web application. Using Bandwidth XML (or BXML) your application handles incoming call events using standard action verbs that are described in XML.

Before we begin creating a new BXML application you’ll need two things initially setup:

1. A phone number that is allocated to your Bandwidth Application Platform account and is configured to an application. See here on how to do that. Note that when you create the application you’ll need to make sure that the Callback HTTP method  is set to <code class="get">GET</code>.

2. A public Web site that you can create content on and will handle the requests for BXML. Note that the endpoint for this site should be used to create the application in you setup above.

###  Understanding BXML Callback Events
BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and BXML. Their purpose 
is to 1) inform you of events that have happened in the call flow and 2) receive instructions from your 
application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event.  It
expects an XML response consisting of BXML verbs.

The first BXML callback is made when the call is created with [POST /calls](../methods/calls/postCalls.md) as 
the `answerUrl` field.  Subsequent callbacks are made by specifying event-specific `*Url` attributes on the appropriate verbs.  If a 
relative URL is provided in BXML, it is resolved relative to the request that retrieved that BXML.

### Verbs

| Verb                                        | Description                                                                                                                                                                         |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`<Gather>`](verbs/gather.md)               | The Gather verb is used to collect digits for some period of time.                                                                                                                  |
| [`<Hangup>`](verbs/hangup.md)               | The Hangup verb is used to hangup current call.                                                                                                                                     |
| [`<PlayAudio>`](verbs/playAudio.md)         | The PlayAudio verb is used to play an audio file in the call.                                                                                                                       |
| [`<Record>`](verbs/record.md)               | The Record verb allows call recording. At the end of the call, a call recording event containing the media with recorded audio URL is generated                                     |
| [`<Redirect>`](verbs/redirect.md)           | The Redirect verb is used to redirect the current XML execution to another URL.                                                                                                     |
| [`<SpeakSentence>`](verbs/speakSentence.md) | The SpeakSentence verb is used to convert any text into speak for the caller.                                                                                                       |
| [`<StartRecording>`](verbs/startRecording.md)| The StartRecording verb is used to start recording a call.                                                                                                       |
| [`<StopRecording>`](verbs/stopRecording.md) | The StopRecording verb is used to stop recording a call.                                                                                                      |
| [`<Transfer>`](verbs/transfer.md)           | The Transfer verb is used to transfer the call to another number.                                                                                                                   |

### BXML Callbacks

BXML callbacks are HTTP messages that are sent to your application server to notify you of activity related to your Bandwidth resources during a BXML usage.

| Callback                                       | Description                                                                                                               |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Answer](callBacks/answer.md)                  | Bandwidth API sends this to the application when the call is answered.                                                    |
| [Gather](callBacks/gather.md)                  | Bandwidth API sends this when the gather command completes in a call.                                                     |
| [Recording](callBacks/recording.md)            | Bandwidth API sends this to the application when an the recording media file is saved or an error occurs while saving it. |
| [Redirect](callBacks/redirect.md)              | Bandwidth API sends this to the application when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](../methods/calls/postCalls.md) endpoint requesting a redirect                                              |
| [Transfer Answer](callBacks/transferAnswer.md) | Bandwidth API sends this to the application when a `<Transfer>` is answered                                              |
| [Transfer Complete](callBacks/transferComplete.md)     | Bandwidth API sends this to the application when a `<Transfer>` has ended complete                                              |

