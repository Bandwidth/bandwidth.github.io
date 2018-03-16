{% method %}

# How To Play Audio On A Call {#top}

## About {#about}

Play a .mp3 or .wav file on an active phone call. For more information about playing an audio file onto a call, visit the [full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html).

## Assumptions
* You have signed up for the [Bandwidth voice & messaging APIs](https://app.bandwidth.com)
* You are familiar with [receiving incoming calls](incomingCallandMessaging.md) and [making outbound calls](outboundCall.md)

## Steps
**Steps 1 and 2 should be completed before using this tutorial**
1. [Create call with callback URL](./outboundCall.md) -or- [Recieve Incoming Call](./incomingCallandMessaging.md)
2. [Make sure call is answered and active]()
3. [Play audio on call](#play-audio)

## Play audio on call {#play-audio}

#### Play audio options
The fileURL is the location of the audio file. Bandwidth currently supports WAV and MP3 files. [Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)for more information about play audio options.

#### Play audio file to the resource (ie. ...`/{userId}/calls/{callId}/`)
```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/.../{Resrouce_Id}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "fileUrl": "MP3"
}
```

#### Play audio properties
| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl     | The location of an audio file to play (WAV and MP3 supported). <br> <br>To **STOP AUDIO FILE PLAYBACK** send an empty string like: `{"fileUrl": ""}`                                                                                                                                                                                                                                            | No        |
| sentence    | The sentence to speak. **MAXIMUM LENGTH 1000 CHARACTERS**  <br> <br> To **STOP SENTENCE PLAYBACK** send an empty string like: `{"sentence": ""}`                                                                                                                                                                                                                                                | No        |
| gender      | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.                                                                                                                                                                                                                                         | No        |
| locale      | The locale used to get the accent of the voice used to synthesize the sentence. For a full list of options, visit the [full api documantation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html).         			                         | No        |
| voice       | The voice to speak the sentence. For a full list of options, visit the [full api documantation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html).   | No        |

#### Response

```http
HTTP/1.1 200 OK
```

#### This sends these call backs

* [Full callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/audio.html)

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "eventType" : "string",
  "callId"    : "string",
  "callUri"   : "string",
  "status"    : "string",
  "time"      : "date",
  "tag"       : "string"
}
```

{% sample lang="js" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.playAudioFile("callId", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.playAudioFile("bridgeID", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.playAudioFile("conferenceID", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.playAudioFileToMember("conferenceID", "memberId", "http://myurl.com/file.mp3")
  .then(function (res) {});
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.stopAudioFilePlayback("callId").then(function (res) {});
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.stopAudioFilePlayback("bridgeID").then(function (res) {});
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.stopAudioFilePlayback("conferenceID").then(function (res) {});
```

### Stop Playing Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.stopAudioFilePlayback("conferenceID", "memberId").then(function (res) {});
```

{% sample lang="csharp" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "http://myurl.com/file.mp3");
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.PlayAudioFileAsync("bridgeID", "http://myurl.com/file.mp3");
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "http://myurl.com/file.mp3");
```

### Play Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.PlayAudioFileToMemberAsync("{conferenceId1}", "{memberId1}", "http://myurl.com/file.mp3");
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "");
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.PlayAudioFileAsync("{bridgeId1}", "");
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "");
```

### Stop Playing Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.PlayAudioFileToMemberAsync("{conferenceId1}", "{memberId1}", "");
```

{% sample lang="ruby" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:file_url => "http://myurl.com/file.mp3"})
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:file_url => "http://myurl.com/file.mp3"})
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:file_url => "http://myurl.com/file.mp3"})
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:file_url => ""})
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:file_url => ""})
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:file_url => ""})
```

{% sample lang="python" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.play_audio_file_to_call('callId', 'http://myurl.com/file.mp3')
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.play_audio_file_to_bridge('bridgeId', 'http://myurl.com/file.mp3')
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.play_audio_file_to_conference('conferenceId', 'http://myurl.com/file.mp3')
```

### Play Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.play_audio_file_to_conference_member('conferenceId', 'memberId', 'http://myurl.com/file.mp3')
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.play_audio_file_to_call('callId', '')
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.play_audio_file_to_bridge('bridgeId', '')
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.play_audio_file_to_conference('conferenceId', '')
```

### Stop Playing Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.play_audio_file_to_conference_member('conferenceId', 'memberId', '')
```

{% endmethod %}





