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

| Property    | Description                            |
|:------------|:---------------------------------------|
| sentence | The sentence to speak. MAXIMUM LENGTH 1000 CHARACTERS. To STOP SENTENCE PLAYBACK send an empty string like: `{"sentence": ""}`|
| gender | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.|
| locale | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports:
- en_US or en_UK (English)
- es or es_MX (Spanish)
- fr or fr_FR (French)
- de or de_DE (German)
- t or it_IT (Italian) It will be considered only if sentence is not null/empty. The en_US will be used by default.|
| voice | The voice to speak the sentence. Audio currently supports the following voices:
- English US: Kate, Susan, Julie, Dave, Paul
- English UK: Bridget
- Spanish: Esperanza, Violeta, Jorge
- French: Jolie, Bernard
- German: Katrin, Stefan
- Italian: Paola, Luca It will be considered only if sentence is not null/empty. Susan’s voice will be used by default. |

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

