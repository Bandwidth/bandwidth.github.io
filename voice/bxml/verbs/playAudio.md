{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.  The URL of an audio file should be included in the body
of the `<PlayAudio>` tag.  If a relative URL is given, it is resolved relative to the endpoint that returned the BXML.

**NOTE:** .wav files encoded as PCM or G711 are supported.

### Attributes
| ATTRIBUTE | Description                                                        |
|:----------|:-------------------------------------------------------------------|
| username  | (optional) The username to send in the HTTP request to `audioUri`. |
| password  | (optional) The password to send in the HTTP request to `audioUri`. |


### Text Content
| Name     | Description                                                                |
|:---------|:---------------------------------------------------------------------------|
| audioUri | The URL of the audio file realative to the endpoint that returned the BXML |


### Callbacks Received

None

{% common %}

#### Example 1 of 1:  PlayAudio Verb

This shows how to use Bandwidth XML to play two audio clips into a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <PlayAudio>https://audio.url/audio1.wav</PlayAudio>
   <PlayAudio>https://audio.url/audio2.wav</PlayAudio>
</Response>
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
# Ruby Example
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

{% endmethod %}
