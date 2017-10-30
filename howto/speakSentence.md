{% method %}

# How to speak a sentence on a call

### Before Speaking
1. [Create call with callback URL](http://dev.bandwidth.com/howto/outboundCall.html)
2. [Make sure call is answered and active](http://dev.bandwidth.com/howto/sip.html)

### Speak Sentence options
Bandwidth supports many voice options. You may specify the gender, accent, and voice. [Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)for a full list of the speaker options.

### Speak Sentence to the resource

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/.../{Resrouce_Id}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "gender": "female",
    "sentence": "Hello from Bandwidth.",
    "locale": "en_US",
    "voice": "julie"
}
```

### Response

```http
HTTP/1.1 200 OK
```

### This sends these call backs
* Full callbacks http://dev.bandwidth.com/ap-docs/apiCallbacks/audio.html

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8
{
  "eventType": "string",
  "callId": "string",
  "callUri": "string",
  "status": "string",
  "time": "date",
  "tag": "string"
}
```

{% sample lang="js" %}

### Speak Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.speakSentence("callId", "Hello From Bandwidth").then(function (res) {});
```

### Speak Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.speakSentence("bridgeID", "Hello From Bandwidth").then(function (res) {});
```

### Speak Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.speakSentence("conferenceID", "Hello From Bandwidth", function (err, res) {});
```

### Speak Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.speakSentenceToMember("conferenceID", "memberID", "Hello From Bandwidth")
 .then(function (res) {});
```

### Stop Speaking Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.stopSpeaking("callId").then(function (res) {});
```

### Stop Speaking Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.stopSpeaking("bridgeID").then(function (res) {});
```

### Stop Speaking Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.stopSpeaking("conferenceID").then(function (res) {});
```

### Stop Speaking Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.speakSentenceToMember("conferenceID", "memberID", "")
```







{% sample lang="csharp" %}

### Speak Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "Hello From Bandwidth");
```

### Speak Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.SpeakSentenceAsync("{bridgeId}", "Hello From Bandwidth");
```

### Speak Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.SpeakSentenceAsync("{conferenceId1}", "Hello From Bandwidth");
```

### Speak Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.SpeakSentenceToMemberAsync("{conferenceId1}", "{memberId1}", "Hello From Bandwidth");
```

### Stop Speaking Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "");
```

### Stop Speaking Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.SpeakSentenceAsync("{bridgeId}", "");
```

### Stop Speaking Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.SpeakSentenceAsync("{conferenceId1}", "");
```

### Stop Speaking Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.SpeakSentenceToMemberAsync("{conferenceId1}", "{memberId1}", "");
```







{% sample lang="ruby" %}

### Speak Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:sentence => "Hello from Bandwidth"})
```

### Speak Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:sentence => "Hello from Bandwidth"})
```

### Speak Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:sentence => "Hello from Bandwidth"})
```

### Stop Speaking Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:sentence => ""})
```

### Stop Speaking Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:sentence => ""})
```

### Stop Speaking Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:sentence => ""})
```

{% sample lang="python" %}

### Speak Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.speak_sentence_to_call('callId', 'Hello from Bandwidth')
```

### Speak Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.speak_sentence_to_bridge('bridgeId', 'Hello from Bandwidth')
```

### Speak Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.speak_sentence_to_conference('conferenceId', 'Hello from Bandwidth')
```

### Speak Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.speak_sentence_to_conference_member('conferenceId', 'memberId', 'Hello from Bandwidth')
```

### Stop Speaking Sentence to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.speak_sentence_to_call('callId', '')
```

### Stop Speaking Sentence to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.speak_sentence_to_bridge('bridgeId', '')
```

### Stop Speaking Sentence to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.speak_sentence_to_conference('conferenceId', '')
```

### Stop Speaking Sentence to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.speak_sentence_to_conference_member('conferenceId', 'memberId', '')
```

{% endmethod %}





