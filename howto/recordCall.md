{% method %}

# How to create a call and start recording it, how to start recording on an active call, and how to stop recording on an active call

### Before playing audio file
1. [Create call with callback URL](http://dev.bandwidth.com/howto/outboundCall.html)
2. [Make sure call is answered and active](http://dev.bandwidth.com/howto/sip.html)


### How to create a call and start recording it [create call](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)
```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "from": "{fromNumber}",
    "to": "{toNumber}",
    "recordingEnabled": "true"
}
```

### How to start recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "recordingEnabled": "true"
}
```

### How to stop recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "recordingEnabled": "false"
}
```

### Response

```http
HTTP/1.1 200 OK
```

### This sends these call backs when the recording has been completed

* [Full callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/recording.html)

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8
{
   "callId": "{callId}",
   "eventType": "recording",
   "recordingId": "{recordingId}",
   "recordingUri": "https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}",
   "status": "complete",
   "startTime": "2013-08-19T16:56:57.643Z",
   "endTime": "2013-08-19T16:57:08.712Z"
}
```

{% sample lang="js" %}

### How to create a call and start recording it [create call](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)
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

### How to start recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```js
client.Call.enableRecording("callId").then(function (res) {});
```

### How to stop recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```js
client.Call.disableRecording("callId").then(function (res) {});
```

{% sample lang="csharp" %}

### How to create a call and start recording it [create call](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)
```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}",
    RecordingEnabled = true
});
Console.WriteLine($"Created call with id {call.Id}");
```

### How to start recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```csharp
await client.Call.TurnCallRecordingAsync("callID", true);
```

### How to stop recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```csharp
await client.Call.TurnCallRecordingAsync("callID", false);
```

{% sample lang="ruby" %}

### How to create a call and start recording it [create call](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html)
```ruby
call = Call.create(client, {
    :from => "{fromNumber}",
    :to => "{toNumber}",
    :recording_enabled => true
})
```

### How to start recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```ruby
call.recording_on()
```

### How to stop recording on an active call [active call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallId.html)
```ruby
call.recording_off()
```

{% endmethod %}





