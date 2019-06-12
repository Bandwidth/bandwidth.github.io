{% method %}
## XML: `<Gather>`
The Gather verb is used to collect digits for some period of time.

### Attributes
| Attribute         | Description                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| gatherUrl         | (optional) URL to send [Gather event](../callBacks/gather.md) to and request new BXML.                                                                                                |
| gatherMethod      | (optional) The HTTP method to use for the request to `gatherUrl`. GET or POST. Default value is POST. |
| tag	            | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits | (optional) When pressed, this digit will terminate the Gather. (Default value is `“#”`)                                                                                                   |
| maxDigits         | (optional) Max number of digits to collect (Default value is 128)                                                                                             |
| interDigitTimeout | (optional) Time (in seconds) allowed between digit presses before automatically terminating the Gather. Default value is 5. Range: 0.1 - 60|
| timeout           | (optional) Time (in seconds) to pause after any audio from nested `<SpeakSentence>` or `<PlayAudio>` verb is played (in seconds) before terminating the Gather. |

The gather is terminated when one of these conditions is met:
 1. The user presses a terminating digit (if specified)
 1. The user has pressed at least one key and more than `interDigitTimeout` seconds have elapsed
 1. Any nested audio has ended and `timeout` seconds have elapsed without the user pressing any digits
 1. The user presses `maxDigits` digits

If the `gatherUrl` attribute is specified, the [Gather event](../callBacks/gather.md) is sent to the `gatherUrl` upon 
completion of the gather. BXML returned by that callback are then executed. If `gatherUrl` is specified, verbs following the `<Gather>` will be ignored.
 
If no `gatherUrl` attribute is specified, the gathered digits are discarded and execution of verbs following the `<Gather>` continues.

### Nestable Verbs
The following verbs may be nested inside of a `<Gather>` tag.  A maximum of one verb is allowed:

| Verb          | Description                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------|
| SpeakSentence | (optional) Using the SpeakSentence inside the Gather verb will speak the text to the callee. |
| PlayAudio     | (optional) Using the PlayAudio inside the Gather verb will play the media to the callee.     |

### Callbacks Received

| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [Gather](../callBacks/gather.md) | Yes                      |

{% common %}
#### Example: Gather Verb
This example shows how to use the Gather verb to speak a sentence, collect digits input from the phone, and send the
results to `https://gather.url/nextBXML`


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Gather gatherUrl="https://gather.url/nextBXML" timeout="10" terminatingDigits="#">
      <SpeakSentence voice="Emily">Please press a digit.</SpeakSentence>
   </Gather>
</Response>
```

{% endmethod %}
