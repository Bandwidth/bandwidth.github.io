{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.  The URL of an audio file should be included in the body
of the `<PlayAudio>` tag.  If a relative URL is given, it is resolved relative to the endpoint that returned the BXML.

⚠️ **ONLY** .wav files encoded as PCM or G711 are supported.

### Attributes
| ATTRIBUTE | Description                                                        |
|:----------|:-------------------------------------------------------------------|
| username  | (optional) The username to send in the HTTP request to `audioUri`. |
| password  | (optional) The password to send in the HTTP request to `audioUri`. |


### Text Content
| Name     | Description                                                                |
|:---------|:---------------------------------------------------------------------------|
| audioUri | The URL of the audio file realative to the endpoint that returned the BXML <br> ⚠️ **ONLY** .wav files encoded as PCM or G711 are supported.
 |


### Callbacks Received

None

{% common %}

#### Example 1 of 1:  PlayAudio Verb

This shows how to use Bandwidth XML to play two audio clips into a phone call.

⚠️ **ONLY** .wav files encoded as PCM or G711 are supported.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <PlayAudio>https://audio.url/audio1.wav</PlayAudio>
   <PlayAudio>https://audio.url/audio2.wav</PlayAudio>
</Response>
```

{% sample lang="java" %}

```java
PlayAudio playAudio1 = PlayAudio.builder()
        .audioUri("https;//audio.url/audio1.wav")
        .build();

PlayAudio playAudio2 = PlayAudio.builder()
        .audioUri("https://audio.url/audio2.wav")
        .build();

Response response = Response.builder().build()
        .add(playAudio1)
        .add(playAudio2);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

PlayAudio playAudio1 = new PlayAudio();
playAudio1.Url = "https://audio.url/audio1.wav";

PlayAudio playAudio2 = new PlayAudio();
playAudio2.Url = "https://audio.url/audio2.wav";

response.Add(playAudio1);
response.Add(playAudio2);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
play_audio_1 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio.url/audio1.wav"
})
play_audio_2 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio.url/audio2.wav"
})

response.push(play_audio_1)
response.push(play_audio_2)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
play_audio_1 = PlayAudio(
    url="https://audio.url/audio1.wav"
)
play_audio_2 = PlayAudio(
    url="https://audio.url/audio2.wav"
)

response.add_verb(play_audio_1)
response.add_verb(play_audio_2)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var playAudio1 = new BandwidthBxml.Verbs.PlayAudio();
playAudio1.setUrl("https://audio.url/audio1.wav");
var playAudio2 = new BandwidthBxml.Verbs.PlayAudio();
playAudio2.setUrl("https://audio.url/audio2.wav");

var response = new BandwidthBxml.Response();
response.addVerb(playAudio1);
response.addVerb(playAudio2);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$playAudio1 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio.url/audio1.wav");
$playAudio2 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio.url/audio2.wav");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($playAudio1);
$response->addVerb($playAudio2);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
