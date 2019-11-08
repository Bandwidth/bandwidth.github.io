{% method %}
## XML: `<Record>`
The Record verb allows a segment of audio to be recorded during a call. At the end of the recording, a [Record Complete](../callbacks/recordComplete.md) event is generated.

### Attributes

| Attribute                    | Description                                                                                                                                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recordCompleteUrl            | (optional) URL to send the [Record Complete](../callbacks/recordComplete.md) event to and request new BXML.                                                                                                            |
| recordCompleteMethod         | (optional) The HTTP method to use for the request to `recordCompleteUrl`. GET or POST. Default value is POST.                                                                                                          |
| recordingAvailableUrl        | (optional) URL to send the [Recording Available](../callbacks/recordingAvailable.md) event to.                                                                                                                         |
| recordingAvailableMethod     | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default value is POST.                                                                                                      |
| username                     | (optional) The username to send in the HTTP request to `recordCompleteUrl` or `recordingAvailableUrl`. If username and password are specified, then https is required.                                                 |
| password                     | (optional) The password to send in the HTTP request to `recordCompleteUrl` or `recordingAvailableUrl`. If username and password are specified, then https is required.                                                 |
| tag                          | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits            | (optional) When pressed, this digit will terminate the recording. Default value is `“#”`.                                                                                                                              |
| maxDuration                  | (optional) Maximum length of recording (in seconds). Max 10800 (3 hours). Default value is 60.                                                                                                                         |
| fileFormat                   | (optional) The format that the recording will be saved in: `mp3` or `wav`.  Default value is `wav`.                                                                                                                    |

The caller can press a `terminatingDigit` to stop the recording.

A `maxDuration` can be specified to stop recording after a specified period.

If the `recordCompleteUrl` attribute is specified, the [Recording Complete](../callbacks/recordComplete.md) event is sent to the `recordCompleteUrl` and the BXML returned by that callback is executed next and all verbs following the `<Record>` tag will be ignored. If no `recordCompleteUrl` is specified, execution of verbs following the `<Record>` tag continues. The recording will still be available on the server.

If the `recordingAvailableUrl` attribute is specified, the [Recording Available](../callbacks/recordingAvailable.md) event is sent to the URL once the recording is available for download. No BXML is expected.

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Record Complete](../callbacks/recordComplete.md)                 | Yes                      |
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |

{% common %}
#### Example: Redirect Verb
This shows how to use Bandwidth XML to record a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">Please leave your message after the beep</SpeakSentence>
    <PlayAudio>http://audio.url/beep.wav</PlayAudio>
    <Record recordCompleteUrl="https://myapp.com/nextBXML" maxDuration="10"/>
</Response>
```

{% endmethod %}
