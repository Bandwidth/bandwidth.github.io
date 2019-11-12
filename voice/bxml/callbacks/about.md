## BXML Callbacks

###  Understanding BXML Callback Events
BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and BXML.  Their purpose
is to 1) inform you of events that have happened in the call flow and 2) receive instructions from your
application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event.  It
expects an XML response consisting of [BXML verbs](../../about.md).

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each
callback's URL.  If the GET method is used, the properties are passed as query parameters.  This can cause very long
URLs, so POST is the preferred method.

| Callback                                 | Description                                                                                                                                                                                                  |
|:-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Answer](answer.md)                      | Bandwidth API sends this to the application when the call is answered.                                                                                                                                       |
| [Gather](gather.md)                      | Bandwidth API sends this when a `<Gather>` is completed.                                                                                                                                                     |
| [Initiate](initiate.md)                  | Bandwidth API sends this to the application when an inbound call arrives.                                                                                                                                    |
| [Record Complete](recordComplete.md)     | Bandwidth API sends this to the application when a `<Record>` is completed. To download the recording look for the [Recording Available](recordingAvailable.md) event.                                       |
| [Redirect](redirect.md)                  | Bandwidth API sends this to the application when a `<Redirect>` is requested or when a POST request is made to the [/calls/{callId}](../../methods/calls/postCallsCallId.md) endpoint requesting a redirect. |
| [Transfer Answer](transferAnswer.md)     | Bandwidth API sends this to the application when the `<Transfer>` is answered.                                                                                                                               |
| [Transfer Complete](transferComplete.md) | Bandwidth API sends this to the application when the `<Transfer>` is complete.                                                                                                                               |

## Asynchronous Callbacks

###  Understanding Asynchronous Callback Events
Asynchronous callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and
BXML.  The HTTP POST method is used by default.  The request will have a JSON body that describes the event.  An
HTTP 201 response with no content is expected.  HTTP 200 is also acceptable.

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each
callback's URL.  If the GET method is used, the properties are passed as query parameters.  This can cause very long
URLs, so POST is the preferred method.

| Callback                                          | Description                                                                             |
|---------------------------------------------------|-----------------------------------------------------------------------------------------|
| [Disconnect](disconnect.md)                       | Bandwidth API sends this to the application when a call ends.                           |
| [Recording Available](recordingAvailable.md)      | Bandwidth API sends this to the application when a recording started by either a `<StartRecording>` or a `<Record>` verb is available for download. |
