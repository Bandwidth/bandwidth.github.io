## BXML Callbacks

###  Understanding BXML Callback Events
BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and BXML.  Their purpose 
is to 1) inform you of events that have happened in the call flow and 2) receive instructions from your 
application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event.  It
expects an XML response consisting of [BXML verbs](bxml.md).

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each 
callback's URL.  If the GET method is used, the properties are passed as query parameters.  This can cause very long
URLs, so POST is the preferred method.

| Callback                                            | Description                                                                                                                     |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [Answer](callBacks/answer.md)                       | Bandwidth API sends this to the application when the call is answered.                                                  |
| [Gather](callBacks/gather.md)                       | Bandwidth API sends this when the gather command completes in a call.                                             |
| [RecordComplete](callBacks/recordComplete.md)       | Bandwidth API sends this to the application when a recording stops. |
| [Redirect](callBacks/redirect.md)                   | Bandwidth API sends this to the application when a `<Redirect>` is requested                                              |
| [Transfer Answer](callBacks/transferAnswer.md)      | Bandwidth API sends this to the application when the `<Transfer>`is answered                                              |
| [Transfer Complete](callBacks/transferComplete.md)  | Bandwidth API sends this to the application when the `<Transfer>`is complete                                              |

