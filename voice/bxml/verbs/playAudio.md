{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.  The URL of an audio file should be included in the body
of the `<PlayAudio>` tag.  If a relative URL is given, it is resolved relative to the endpoint that returned the BXML.

Both `.wav` and `.mp3` files are supported.

### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |


### Callbacks Received

None

{% common %}
#### Example:  PlayAudio Verb
This shows how to use Bandwidth XML to play two audio clips into a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
   <PlayAudio>https://audio.url/audio.mp3</PlayAudio>
   <PlayAudio>https://audio.url/audio.wav</PlayAudio>
</Response>
```

{% endmethod %}
