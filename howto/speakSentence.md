{% multimethod %}
{% endmultimethod %}

# How to Speak Sentence on a Call {#top}

## About {#about}

Speak a sentence on an active phone call. For more information about speak sentence, visit the [full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html).

## Assumptions
* You have signed up for the [Bandwidth voice & messaging APIs](https://app.bandwidth.com)
* You are familiar with:
  * [receiving incoming calls](incomingCallandMessaging.md)
  * [making outbound calls](outboundCall.md)

## Steps
1. [Create call with callback URL](./outboundCall.md) -or- [Recieve Incoming Call](./incomingCallandMessaging.md)
2. [Check if call is answered](#hotlink-to-step2)
3. [Speak sentence on call](#hotlink-to-step3)

## Step 1 {#hotlink-to-step1} - Create outbound call with callback url.

### Before Speaking
1. [Create call with callback URL](./outboundCall.md) -or- [Receive Incoming Call](./incomingCallandMessaging.md)
2. Make sure call is answered and active

### Speak Sentence options
Bandwidth supports many voice options. You may specify the gender, accent, and voice. [Click here](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)for a full list of the speaker options.


[Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html) to learn more about creating an outbound call.

{% extendmethod %}

### Create Call Parameters

| Property    | Description                            |
|:------------|:---------------------------------------|
| from | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like +19195551212). |
| to | The number to call (must be either an E.164 formatted number, like +19195551212, or a valid SIP URI, like sip:someone@somewhere.com).|
| callbackUrl | The full server URL where the call events related to the Call will be sent to.|

{% common %}

### Example of creating a call with callbackUrl

{% sample lang="http" %}
### This sends these call backs
* Full callbacks https://dev.bandwidth.com/ap-docs/apiCallbacks/audio.html

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"          : "{toNumber}",
    "from"        : "{fromNumber}",
    "callbackUrl" : "{callbackUrl}"
}
```

{% sample lang="js" %}

### Speak Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.speakSentence("callId", "Hello From Bandwidth").then(function (res) {});
```

### Speak Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.speakSentence("bridgeID", "Hello From Bandwidth").then(function (res) {});
```

### Speak Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.speakSentence("conferenceID", "Hello From Bandwidth", function (err, res) {});
```

### Speak Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.speakSentenceToMember("conferenceID", "memberID", "Hello From Bandwidth")
 .then(function (res) {});
```

### Stop Speaking Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.stopSpeaking("callId").then(function (res) {});
```

### Stop Speaking Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.stopSpeaking("bridgeID").then(function (res) {});
```

### Stop Speaking Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.stopSpeaking("conferenceID").then(function (res) {});
```

### Stop Speaking Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
//This assumes you have already input your credentials.
client.Call.create({
    from: "{toNumber}",
    to: "{fromNumber}",
    callbackUrl: "{callbackUrl}"
})
.then(function (id) {
    console.log(id);
})
```

{% sample lang="csharp" %}

### Speak Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "Hello From Bandwidth");
```

### Speak Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.SpeakSentenceAsync("{bridgeId}", "Hello From Bandwidth");
```

### Speak Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
//This assumes you have already input your credentials.
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}"
    CallbackUrl = "{callbackUrl}"
});
Console.WriteLine($"Created call with id {call.Id}");
```

{% sample lang="ruby" %}

```ruby
## This assumes you have already input your credentials.
call = Bandwidth::Call.create({
   :from => "{fromNumber}",
   :to => "{toNumber}",
   :callbackUrl => "{requestUrl}"})

puts call.id
```

{% endextendmethod %}

## Step 2 {#hotlink-to-step2} - Check if call is answered

### Speak Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.SpeakSentenceToMemberAsync("{conferenceId1}", "{memberId1}", "Hello From Bandwidth");
```

### Stop Speaking Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "");
```

### Stop Speaking Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.SpeakSentenceAsync("{bridgeId}", "");
```

### Stop Speaking Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.SpeakSentenceAsync("{conferenceId1}", "");
```

### Stop Speaking Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.SpeakSentenceToMemberAsync("{conferenceId1}", "{memberId1}", "");
```

{% extendmethod %}

In order to speak a sentence on a call, the call must be answered. When the call is answered, Bandwidth will notify the callbackUrl with an eventType = "answer". Once we recieve this callback, we can procede with speak sentence.


{% common %}

### Example of callback answer event

json response

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
    "eventType" : "answer",
    "from"      : "{toNumber}",
    "to"        : "{fromNumber}",
    "callId"    : "{callId}",
    "callUri"   : "{callUri}",
    "callState" : "active",
    "time"      : "date"
}
```

{% endextendmethod %}

## Step 3 {#hotlink-to-step3} - Speak sentence on call

Bandwidth supports many voice options. You may specify the gender, accent, and voice. [Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)for a full list of the speaker options.

{% extendmethod %}

### Speak sentence options

### Speak Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:sentence => "Hello from Bandwidth"})
```

### Speak Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:sentence => "Hello from Bandwidth"})
```

### Speak Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:sentence => "Hello from Bandwidth"})
```

### Stop Speaking Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:sentence => ""})
```

### Stop Speaking Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:sentence => ""})
```

### Stop Speaking Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:sentence => ""})
```

| Property    | Description                            |
|:------------|:---------------------------------------|
| sentence | The sentence to speak. MAXIMUM LENGTH 1000 CHARACTERS. To STOP SENTENCE PLAYBACK send an empty string like: `{"sentence": ""}`|
| gender | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.|
| locale | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports: en_US or en_UK (English), es or es_MX (Spanish), fr or fr_FR (French), de or de_DE (German), and t or it_IT (Italian) It will be considered only if sentence is not null/empty. The en_US will be used by default.|
| voice | The voice to speak the sentence. Audio currently supports these voices: English US: Kate, Susan, Julie, Dave, Paul; English UK: Bridget; Spanish: Esperanza, Violeta, Jorge; French: Jolie, Bernard; German: Katrin, Stefan; Italian: Paola, Luca It will be considered only if sentence is not null/empty. Susan’s voice will be used by default. |

{% common %}

### Example of speak sentence

{% sample lang="http" %}

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "sentence" : "hola de Bandwidth",
    "gender"   : "male",
    "locale"   : "es",
    "voice"    : "Jorge"
}
```

{% sample lang="js" %}

```js
var options = {
    sentence : "hola de Bandwidth",
    gender   : "male",
    locale   : "es",
    voice    : "Jorge"
}
//Promise
client.Call.playAudioAdvanced("callId", options).then(function (res) {});
```

{% sample lang="csharp" %}
### Speak Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.speak_sentence_to_call('callId', 'Hello from Bandwidth')
```

### Speak Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.speak_sentence_to_bridge('bridgeId', 'Hello from Bandwidth')
```

### Speak Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.speak_sentence_to_conference('conferenceId', 'Hello from Bandwidth')
```

### Speak Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.speak_sentence_to_conference_member('conferenceId', 'memberId', 'Hello from Bandwidth')
```

### Stop Speaking Sentence to [call](https://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```python
api.speak_sentence_to_call('callId', '')
```

### Stop Speaking Sentence to [bridge](https://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```python
api.speak_sentence_to_bridge('bridgeId', '')
```

### Stop Speaking Sentence to [entire conference](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```python
api.speak_sentence_to_conference('conferenceId', '')
```

### Stop Speaking Sentence to [specific conference member](https://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```python
api.speak_sentence_to_conference_member('conferenceId', 'memberId', '')
```

```csharp
await client.Call.PlayAudioAsync("{callId1}", new PlayAudioData
{
    Sentence = "hola de Bandwidth",
    Gender = Gender.Male,
    Voice = "Jorge",
    Locale = "es"
});

```

{% sample lang="ruby" %}

```ruby
call.play_audio({
    :sentence => "hola de Bandwidth",
    :gender => "male",
    :voice => "Jorge",
    :locale => "es"
})
```

{% endextendmethod %}

