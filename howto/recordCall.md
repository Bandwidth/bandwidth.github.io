{% method %}

# How to record a call

This guide covers:

* How to create a call with recording enabled
* How to toggle-on recording on an active call
* How to toggle-off recording on an active call

### Before playing audio file

1. [Create call with callback URL](./outboundCall.md) -or- [Recieve Incoming Call](./incomingCallandMessaging.md)
2. Make sure call is answered and active


### How to create a call and start recording it [create call](https://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "from"             : "{fromNumber}",
    "to"               : "{toNumber}",
    "recordingEnabled" : "true"
}
```

### How to start recording on an active call [active call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "recordingEnabled": "true"
}
```

### How to stop recording on an active call [active call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "recordingEnabled": "false"
}
```

### Response

```http
HTTP/1.1 200 OK
```

### This sends these call backs when the recording has been completed

* [Full callbacks](https://dev.bandwidth.com/ap-docs/apiCallbacks/recording.html)

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8

{
   "callId"       : "{callId}",
   "eventType"    : "recording",
   "recordingId"  : "{recordingId}",
   "recordingUri" : "https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}",
   "status"       : "complete",
   "startTime"    : "2013-08-19T16:56:57.643Z",
   "endTime"      : "2013-08-19T16:57:08.712Z"
}
```

{% common %}

### How to create a call and start recording it [create call](https://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)

{% sample lang="js" %}

```js
client.Call.create({
    from: "{fromNumber}",
    to: "{toNumber}",
    recordingEnabled: true
})
.then(function (id) {
    console.log(id);
})
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}",
    RecordingEnabled = true
});
Console.WriteLine($"Created call with id {call.Id}");
```

{% sample lang="ruby" %}

```ruby
call = Call.create(client, {
    :from => "{fromNumber}",
    :to => "{toNumber}",
    :recording_enabled => true
})
```

{% common %}

### How to start recording on an active call [active call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)

{% sample lang="js" %}

```js
client.Call.enableRecording("callId").then(function (res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.TurnCallRecordingAsync("callID", true);
```

{% sample lang="ruby" %}

```ruby
call.recording_on()
```

{% common %}

### How to stop recording on an active call [active call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)

{% sample lang="js" %}

```js
client.Call.disableRecording("callId").then(function (res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.TurnCallRecordingAsync("callID", false);
```

{% sample lang="ruby" %}

```ruby
call.recording_off()
```

{% endmethod %}





