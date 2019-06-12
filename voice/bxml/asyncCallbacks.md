## Async Callbacks

###  Understanding Async Callback Events
Async callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and
BXML.  The HTTP POST method is used by default.  The request will have a JSON body that describes the event.  An
HTTP 201 response with no content is expected.  HTTP 200 is also acceptable.

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each 
callback's URL.  If the GET method is used, the properties are passed as query parameters.  This can cause very long
URLs, so POST is the preferred method.

| Callback                                            | Description                                                                                                                     |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [CallComplete](bxml/callBacks/callComplete.md)   | Bandwidth API sends this to the application when a call ends. |
| [RecordingAvailable](bxml/callBacks/recordingAvailable.md)| Bandwidth API sends this to the application when a recording can be accessed. |

