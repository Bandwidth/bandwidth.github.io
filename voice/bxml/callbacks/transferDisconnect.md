{% method %}
##  Transfer Disconnect Event – <Transfer> verb
This event is sent to the `transferDisconnectUrl` of each `<PhoneNumber>` tag when its respective call leg ends for any reason.
The event is sent in the normal case, when the transferred leg is answered and later hung up, but is also sent if the new leg
was never answered in the first place, if it was rejected, and if the original call leg hung up before the transferred leg.

The `cause` for a `transferDisconnect` event on a call can be:
- `hangup`: there was no more BXML to execute in it; it indicates that the call ended normally.
- `busy`: the callee was busy.
- `timeout`: the call wasn't answered before the `callTimeout` was reached.
- `cancel`: while the call was ringing, it was cancelled by its originator.
- `rejected`: the call was rejected by the callee.
- `callback-error`: a BXML callback couldn't be delivered.
- `invalid-bxml`: an invalid bxml was tried to be played in the call.
- `application-error`: some non-supported action was tried on the call, e.g. trying to play a .ogg audio.
- `account-limit`: the rate limits on the account were reached.
- `node-capacity-exceeded`: the system itself reached its maximum capacity.
- `error`: some error not described in any of the other causes happened on the call.
- `unknown`: some unknown error happened on the call.

### Expected response
```http
HTTP/1.1 204
```

### Properties
| Property         | Description                                                                                                                                                                                                                               |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is `transferDisconnect`.                                                                                                                                                                                            |
| from             | The phone number used in the `from` field of the original call, in E.164 format (e.g. +15555555555).                                                                                                                                      |
| to               | The phone number user in the `to` field of the original call, in E.164 format (e.g. +15555555555).                                                                                                                                        |
| direction        | The direction of the call. Always `outbound` for this event.                                                                                                                                                                              |
| callId           | The call id associated with the event.                                                                                                                                                                                                    |
| parentCallId     | The call id of the original call leg that contained the `<Transfer>` tag.                                                                                                                                                                 |
| callUrl          | The URL of the call associated with the event.                                                                                                                                                                                            |
| tag              | The `tag` specified earlier in the call. If no `tag` was specified or it was previously cleared, null.                                                                                                                                    |
| startTime        | Time the transferred leg was started, in ISO 8601 format.                                                                                                                                                                                 |
| answerTime       | (optional) Time the transferred leg was answered, in ISO 8601 format.                                                                                                                                                                     |
| endTime          | Time the transferred leg ended, in ISO 8601 format.                                                                                                                                                                                       |
| transferCallerId | The phone number used as the `from` field of the B-leg call, in E.164 format (e.g. +15555555555).                                                                                                                                         |
| transferTo       | The phone number used as the `to` field of the B-leg call, in E.164 format (e.g. +15555555555).                                                                                                                                           |
| cause            | Reason the transferred leg ended - `busy`, `timeout`, `hangup`, `cancel`, `rejected`, `callback-error`, `invalid-bxml`, `account-limit`, `node-capacity-exceeded`, `error`, `unknown` or `application-error`. |
| errorMessage     | Text explaining the reason that caused the transferred leg to be ended in case of errors.                                                                                                                                                 |
| errorId          | Bandwidth internal id that references the error event.                                                                                                                                                                                    |

{% common %}

#### Example: Successful transfer to 1-555-666-7777

```
POST http://[External server URL]
```

```json
{
    "eventType"        : "transferDisconnect",
    "from"             : "+15551112222",
    "to"               : "+15553334444",
    "direction"        : "outbound",
    "callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "parentCallId"     : "c-95ac8d6e-2c7ae496-7558-47a4-b291-4f02a3ca6942",
    "callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "transferCallerId" : "+15551115555",
    "transferTo"       : "+15556667777",
    "startTime"        : "2019-12-27T19:18:20.721Z",
    "answerTime"       : "2019-12-27T19:18:23.320Z",
    "endTime"          : "2019-12-27T19:19:27.987Z",
    "cause"            : "hangup"
}
```

#### Example: Failed transfer to busy number

```
POST http://[External server URL]
```

```json
{
    "eventType"        : "transferDisconnect",
    "from"             : "+15551112222",
    "to"               : "+15553334444",
    "direction"        : "outbound",
    "callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "parentCallId"     : "c-95ac8d6e-2c7ae496-7558-47a4-b291-4f02a3ca6942",
    "callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "transferCallerId" : "+15551115555",
    "transferTo"       : "+15556667777",
    "startTime"        : "2019-12-27T19:23:38.685Z",
    "endTime"          : "2019-12-27T19:23:39.465Z",
    "cause"            : "busy",
    "errorMessage"     : "Callee is busy",
    "errorId"          : "4642074b-7b58-478b-96e4-3a60955c6765"
}
```

{% endmethod %}
