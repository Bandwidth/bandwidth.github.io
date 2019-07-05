{% method %}
## XML: `<Gather>`
The Gather verb is used to collect digits for some period of time.

### Attributes

| Attribute         | Description                                                                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| gatherUrl         | (optional) URL to send [Gather event](../callBacks/gather.md) to and request new BXML.                                                                                                                                 |
| gatherMethod      | (optional) The HTTP method to use for the request to `gatherUrl`. GET or POST. Default value is POST.                                                                                                                  |
| username          | (optional) The username to send in the HTTP request to `gatherUrl`.                                                                                                                                                    |
| password          | (optional) The password to send in the HTTP request to `gatherUrl`.                                                                                                                                                    |
| tag               | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits | (optional) When any of these digits are pressed, it will terminate the Gather. Default value is none.                                                                                                                  |
| maxDigits         | (optional) Max number of digits to collect. Default value is 128.                                                                                                                                                      |
| interDigitTimeout | (optional) Time (in seconds) allowed between digit presses before automatically terminating the Gather. Default value is 5. Range: decimal values between 1 - 60.                                                      |
| firstDigitTimeout | (optional) Time (in seconds) to pause after any audio from nested `<SpeakSentence>` or `<PlayAudio>` verb is played (in seconds) before terminating the Gather. Can use decimal values.                                |
| repeatCount       | (optional) The number of times the audio prompt should be repeated if no digits are pressed. The delay between repetitions will be equal to `firstDigitTimeout`. Default value is 1. Range: 1-30.                      |

The gather is terminated when one of these conditions is met:
 1. The user presses a terminating digit (if specified)
 1. The user has pressed at least one key and more than `interDigitTimeout` seconds have elapsed
 1. Any nested audio has ended and `firstDigitTimeout` seconds have elapsed without the user pressing any digits
 1. The user presses `maxDigits` digits

If the `gatherUrl` attribute is specified, the [Gather event](../callBacks/gather.md) is sent to the `gatherUrl` upon
completion of the gather. BXML returned by that callback are then executed. If `gatherUrl` is specified, verbs following the `<Gather>` will be ignored.

If no `gatherUrl` attribute is specified, the gathered digits are discarded and execution of verbs following the `<Gather>` continues.

### Nestable Verbs
The following verbs may be nested inside of a `<Gather>` tag.  A maximum of one verb is allowed:

| Verb                              | Description                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------|
| [SpeakSentence](speakSentence.md) | (optional) Using the SpeakSentence inside the Gather verb will speak the text until a digit is received. |
| [PlayAudio](playAudio.md)         | (optional) Using the PlayAudio inside the Gather verb will play the media until a digit is received.     |

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
   <Gather gatherUrl="https://gather.url/nextBXML" firstDigitTimeout="10" terminatingDigits="#">
      <SpeakSentence voice="kate">Please press a digit.</SpeakSentence>
   </Gather>
</Response>
```

{% endmethod %}
