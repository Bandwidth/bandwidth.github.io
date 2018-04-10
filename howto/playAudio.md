{% multimethod %}
{% endmultimethod %}

# Title {#top}

## About {#about}

Play a .mp3 or .wav file on an active phone call. For more information about playing an audio file onto a call, visit the [full documentation](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html).

## Assumptions
* You have signed up for the [Bandwidth voice & messaging APIs](https://app.bandwidth.com)
* You are familiar with:
	* [receiving incoming calls](incomingCallandMessaging.md)
	* [making outbound calls](outboundCall.md)

## Steps
1. [Create call with callback URL](./outboundCall.md) -or- [Recieve Incoming Call](./incomingCallandMessaging.md)
2. [Make sure call is answered and active]()
3. [Play audio on call](#play-audio)
## Step 1 {#hotlink-to-step1}

Create an outbound call with a callback url.

{% extendmethod %}

### Create Call Parameters

| Property    | Description                            |
|:------------|:---------------------------------------|
| from | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like +19195551212). |
| to | The number to call (must be either an E.164 formatted number, like +19195551212, or a valid SIP URI, like sip:someone@somewhere.com).|
| callbackUrl | The full server URL where the call events related to the Call will be sent to.|

[Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html) to learn more about creating a call.

{% common %}

### Example of creating a call with callbackUrl

{% sample lang="http" %}


```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8
{
    "to": "{toNumber}",
    "from": "{fromNumber}",
    "callbackUrl": "{callbackUrl}"
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
//This assumes you have already input your credentials.
call = Bandwidth::Call.create({
   :from => "{fromNumber}",
   :to => "{toNumber}",
   :callbackUrl => "{requestUrl}"})

puts call.id
```

{% endextendmethod %}


## Step 2 {#hotlink-to-step2}

In order to play an audio file on a call, the call must be answered. When the call is answered, Bandwidth will notify the callbackUrl with an eventType = "answer". Once we recieve this callback, we can procede with playing the audio file.

{% extendmethod %}

{% common %}

### Example of callback answer event

{% sample lang="http" %}

Snip of json

```json
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
## Step 3 {#hotlink-to-step1}

Play an audio file on the call.

{% extendmethod %}

### Play an audio file

| Property    | Description                            |
|:------------|:---------------------------------------|
| fileUrl | The location of an audio file to play (WAV and MP3 supported).

To STOP AUDIO FILE PLAYBACK send an empty string like: `{"fileUrl": ""}` |

[Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html) to learn more about playing an audio file in a call.

{% common %}

### Example of playing an audio file

{% sample lang="http" %}


```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8
{
    "fileUrl": "{fileUrl}"
}
```

{% sample lang="js" %}

```js
//Promise
client.Call.playAudioFile("{callId}", "{fileUrl}").then(function (res) {});

//Callback
client.Call.playAudioFile("{callId}", "{fileUrl}", function (err, res)
```

{% sample lang="csharp" %}

```csharp
await client.Call.PlayAudioFileAsync("{callId}", "{fileUrl}");
```

{% sample lang="ruby" %}

```ruby
call.play_audio({
    :file_url => "{fileUrl}"
})
```

{% endextendmethod %}

