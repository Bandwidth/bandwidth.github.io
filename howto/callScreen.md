{% multimethod %}
{% endmultimethod %}

# Call Screening {#top}

## About {#about}
Call screening allows the original caller to record their name before forwarding the call to the final destination. When the forwarded call is answered, the recorded name is played back to the recipeint.

## Assumptions
* You have signed up for the [Bandwidth voice & messaging APIs](https://app.bandwidth.com)
* You are familiar with:
  * [Receiving incoming calls and messages](incomingCallandMessaging.md)
  * [Playing audio on a call](playAudio.md)
  * [Recording audio on a call](recordCall.md)
  * [Creating a gather request](createGather.md)
  * [Forwarding a call](http://dev.bandwidth.com/ap-docs/methods/calls/postTransferCall.html)

## Steps
1. [Recieve Incoming Call and Answer event](#incomingCall-and-answer)
2. [Use the Speak Sentence method to prompt user to record their name](#speak-sentence)
3. [Receive the Speak Sentence Events](#speak-finished)
4. [Turn on Audio Recording](#turn-on-recording)
5. [Create Gather](#create-gather)
6. [Recieve either gather event or timeout](#gather-complete)
7. [Turn off audio recording](#turn-off-recording)
8. [Get audio recording location](#recording-finished)
9. [Transfer the call with whisperAudio](#transfer-with-whisper)

## Recieve Incoming Call and Answer event {#incomingCall-and-answer}

After setting up your [application to recieve incoming calls](incomingCallandMessaging.md) with `autoAnswer` enabled. You will recieve two events back to back:

1. [`incomingCall`](http://dev.bandwidth.com/ap-docs/apiCallbacks/incomingCall.html)
2. [`answer`](http://dev.bandwidth.com/ap-docs/apiCallbacks/answer.html)

Your server should reply with any `HTTP 2xx` code to acknowledge that the callback event was delivered.  Any thing returned in the response besides the status code is ignored by Bandwidth.

{% extendmethod %}

### Incoming Call Event Properties

| Property      | Description                                                                                                                                                  |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType     | The event type, value is incomingcall.                                                                                                                       |
| callId        | The call id associated with the event.                                                                                                                       |
| callUri       | The complete URL of the call resource for this event.                                                                                                        |
| from          | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to            | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| callState     | The state of the call, value is active.                                                                                                                      |
| applicationId | The id of the application associated with phone number for this this incoming call.                                                                          |
| time          | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |

{% common %}

### Example Incoming Call Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
   "eventType"     : "incomingcall",
   "from"          : "+13233326955",
   "to"            : "+13865245000",
   "callId"        : "{callId}",
   "callUri"       : "https://.../{userId}/calls/{callId}",
   "callState"     : "active",
   "applicationId" : "{appId}",
   "time"          : "2012-11-14T16:21:59.616Z"
}
```

{% endextendmethod %}

{% extendmethod %}

### Answer Event Properties

| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`.                                                                                                                           |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| callState | The call state. Value will be `active`.                                                                                                                      |
| callId    | The call id associated with the event.                                                                                                                       |
| callUri   | The full URL of the call resource for this event.                                                                                                            |
| tag       | String provided when call created.                                                                                                                           |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC).                                                                                    |

{% common %}

### Example Answer Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "eventType" : "answer",
  "from"      : "+15753222083",
  "to"        : "+13865245000",
  "callId"    : "{call-id}",
  "callUri"   : "https://.../{user-id}/calls/{call-id}",
  "callState" : "active",
  "time"      : "2012-11-14T16:28:31.536Z"
}
```

{% endextendmethod %}

## Use the Speak Sentence method to prompt user to record their name {#speak-sentence}

In order to prevent the prompt from being recorded, you need to use the `playAudio` to speak a sentence before turning on recording.

For the purposes of this tutorial, we're using the text-to-speech features of the API. The same flow holds true if you wanted to use a pre-recorded message as well.

{% extendmethod %}

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio`

### Basic Parameters

| Parameter | Description                                                                                        |
|:----------|:---------------------------------------------------------------------------------------------------|
| sentence  | The sentence to speak. **MAXIMUM LENGTH 1000 CHARACTERS**                                          |
| gender    | The gender of the voice used to synthesize the sentence.                                           |
| locale    | The locale used to get the accent of the voice used to synthesize the sentence.                    |
| voice     | The voice to speak the sentence.                                                                   |
| tag       | A string that will be included in the events delivered when the audio playback starts or finishes. |

For more options and configuration [view the full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)

{% common %}

### Example Speak Sentence Request

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "sentence": "Please state your name then press any key when you're done"
}
```

{% endextendmethod %}

## Receive the Speak Sentence Events {#speak-finished}

During the speak sentence Bandwidth will send two [callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/speak.html) with the status of the sentence:

1. `{"eventType": "speak", "status": "started"}`
2. `{"eventType": "speak", "status": "done"}`

{% extendmethod %}

### Speak Sentence Event Properties

| Property  | Description                                                               |
|:----------|:--------------------------------------------------------------------------|
| eventType | The event type, value is `speak`.                                         |
| status    | Values are `started` or `done`.                                           |
| state     | Values are `PLAYBACK_START` or `PLAYBACK_STOP`.                           |
| callId    | The call id associated with the event.                                    |
| callUri   | The full URL of the call resource for this event.                         |
| tag       | String provided when text-to-speech started.                              |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC). |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/apiCallbacks/speak.html).

{% common %}

### Example Start Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "callId"    : "{callId}",
  "callUri"   : "https://.../{userId}/calls/{callId}",
  "eventType" : "speak",
  "status"    : "started",
  "time"      : "2013-06-26T17:55:45.748Z"
}
```

### Example Done Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "callId"    : "{callId}",
  "callUri"   : "https://.../{userId}/calls/{callId}",
  "eventType" : "speak",
  "status"    : "done",
  "time"      : "2013-06-26T17:55:46.768Z"
}
```

{% endextendmethod %}

## Turn on Audio Recording {#turn-on-recording}

Once you receive the `{ "status": "done" }` event for the sentence, you'll want to immediately turn on recording and create a gather.

{% extendmethod %}

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

### Basic Parameters

| Parameter           | Description                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------|
| recordingEnabled    | Indicates if the call should be recorded. Values `true` or `false`.                   |
| recordingFileFormat | The file format of the recorded call. Supported values are `wav` (default) and `mp3`. |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html).

{% common %}

### Example Recording Toggle On

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/ HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "recordingEnabled": true
}
```

{% endextendmethod %}

## Create Gather {#create-gather}

This solution uses the [`gather`](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdGather.html) method to allow us to specify a `interDigitTimeout` and `maxDigits: 1` so that we can stop recording easily after a specified duration has passed, -OR- the caller presses any digit.

{% extendmethod %}

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather`

### Basic Parameters

| Parameter         | Description                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------|
| maxDigits         | The maximum number of digits to collect, not including terminating digits (maximum 30).           |
| interDigitTimeout | Stop gathering if a DTMF digit is not detected in this many seconds (default 5.0; maximum 30.0).  |
| tag               | A string you choose that will be included with the response and events for this gather operation. |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdGather.html).

{% common %}

### Example Create Gather

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "maxDigits"         : "1",
  "interDigitTimeout" : "6"
}
```

{% endextendmethod %}

## Recieve either gather event or timeout {#gather-complete}

When either the user has pressed a digit or the timeout has passed, you'll get a callback indicating as such.  Once we recieve the gather event, so long as it's not a `hung-up` event we want to now turn off recording.  If the caller hangsup during the gather, the flow should end.

{% extendmethod %}

### Gather Event Properties

| Property  | Description                                                                                                                                                                                                                                                                                                                                                              |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `gather`.                                                                                                                                                                                                                                                                                                                                       |
| state     | The state of the gather. Value is `completed`.                                                                                                                                                                                                                                                                                                                           |
| digits    | The digits collected from user.                                                                                                                                                                                                                                                                                                                                          |
| reason    | `max-digits` - The maximum number of digits specified for the gather com.<br> `terminating-digit` - The digit specified in the gather com was entered.<br> `inter-digit-timeout` - A timeout occurred indicating the maximum amount of time to wait between digits, or before the first digit was pressed.<br> `hung-up` - Call was hung up thus terminating the gather. |
| callId    | The call id associated with the event.                                                                                                                                                                                                                                                                                                                                   |
| gatherId  | The gather event unique id.                                                                                                                                                                                                                                                                                                                                              |
| time      | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                                                                                                                                                                                                                                          |
| tag       | String used when creating the [gather](#create-gather)                                                                                                                                                                                                                                                                                                                   |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/apiCallbacks/gather.html).

{% common %}

### Example Gather Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "eventType" : "gather",
  "reason"    : "max-digits",
  "state"     : "completed",
  "digits"    : "5",
  "time"      : "2014-07-31T01:01:27Z",
  "callId"    : "{callId}",
  "gatherId"  : "{gatherId}",
  "tag"       : "{tag}"
}
```

{% endextendmethod %}

## Turn off audio recording {#turn-off-recording}

Once you receive the `{ "eventType" : "gather", "state": "completed" }` event for the gather, you'll want to immediately turn **off** recording.

{% extendmethod %}

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

### Basic Parameters

| Parameter        | Description                                                         |
|:-----------------|:--------------------------------------------------------------------|
| recordingEnabled | Indicates if the call should be recorded. Values `true` or `false`. |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html).

{% common %}

### Example Recording Toggle On

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/ HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "recordingEnabled": false
}
```

{% endextendmethod %}

## Get audio recording location {#recording-finished}

When the recording has been finished, Bandwidth will send a callback to your server with the location of the recording.  You can use this URL to playback the recording on any call.

{% extendmethod %}

### Recording Event Properties

| Property     | Description                                                                    |
|:-------------|:-------------------------------------------------------------------------------|
| eventType    | The event type, value is `recording`.                                          |
| state        | The state of the recording, callback event values are `complete` or `error`.   |
| status       | The state of the recording, callback event values are `complete` or `error`.   |
| callId       | The call id associated with the event.                                         |
| recordingId  | The unique id of the recording resource.                                       |
| recordingUri | The full URL of the recording resource.                                        |
| startTime    | Date/time the recording started. Timestamp follows the ISO8601 format (UTC).   |
| endTime      | Date/time the recording completed. Timestamp follows the ISO8601 format (UTC). |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/apiCallbacks/recording.html).

{% common %}

### Example Record Complete Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "callId"       : "{callId}",
  "eventType"    : "recording",
  "recordingId"  : "{recordingId}",
  "recordingUri" : "https://.../{userId}/recordings/{recordingId}",
  "status"       : "complete",
  "startTime"    : "2013-08-19T16:56:57.643Z",
  "endTime"      : "2013-08-19T16:57:08.712Z"
}
```

{% endextendmethod %}


## Transfer the call with whisperAudio {#transfer-with-whisper}

The final step is to transfer the original call to the desired forwarding destination.  Using the `{ "state": "transferring" }` update to the call will allow you to specify a `whisper` to be played to the recipient before the two calls are bridged.

In this case, you'll use the `recordingUri` from above as the `fileUrl` within the `whisperAudio`.

{% extendmethod %}

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

### Basic Parameters

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                                                          |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| state            | `transferring` to transfer the incoming call to another line.                                                                                                                                                                                                                                                                                                                                        |
| transferTo       | Phone number or SIP address that the call is going to be transferred to.                                                                                                                                                                                                                                                                                                                             |
| transferCallerId | This is the caller id that will be used when the call is transferred. This parameter is only considered in transfer state.<br>- transferring an incoming call: allowed values are 1) `private` 2) the incoming call `from` number or 3) any Bandwidth number owned by user.<br>- transferring an outgoing call call: allowed values are 1) `private` or 2) any Bandwidth phone number owned by user. |
| callbackUrl      | The server URL where the call events for the new call will be sent upon transferring.                                                                                                                                                                                                                                                                                                                |
| whisperAudio     | Audio to be played to the caller that the call will be transferred to.                                                                                                                                                                                                                                                                                                                               |

For more details [view the full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postTransferCall.html).

{% common %}

### Example Transfer Call with Whisper

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/ HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "state"            : "transferring",
  "transferCallerId" : "private"
  "transferTo"       : "+18382947878",
  "callbackUrl"      : "{{your-url}}",
  "whisperAudio"     : {
    "fileUrl" : "{{recordingUri-from-above}}"
  }
}
```

{% endextendmethod %}

## Wrapping it up

Once the original inbound call has been updated with the `{ "state": "transferring" }` to transfer the call, Bandwidth will play a default ringing to the inbound call while the call is transferred. When the final destination answers the call and the whisper is finished, the two will be bridged together.