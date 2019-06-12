{% method %}
## XML: `<Record>`
The Record verb allows a segment of audio to be recorded during a call. At the end of the recording, 
a [Record Complete](../callBacks/recording.md) event is generated.

### Attributes
| ATTRIBUTE             | DESCRIPTION                                                                                                                                                                                               |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recordCompleteUrl     | (optional) URL to send the [Record Complete](../callBacks/recordComplete.md) event to  |
| recordCompleteMethod  | (optional) The HTTP method to use for the request to `recordCompleteUrl`. GET or POST. Default Value is POST. |
| tag	                | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits     | (optional) When pressed, this digit will terminate the recording. (Default value is `“#”`)                                                                                                   |
| maxDuration           | (optional) Maximum length of recording (in seconds). Max 10800 (3 hours)
| fileFormat            | (optional) The format that the recording will be saved in - `mp3` or `wav`.                                                                                                                                      |
| recordingAvailableUrl     | (optional) URL to send the [Recording Available](../callBacks/recordingAvailable.md) event to |
| recordingAvailableMethod  | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default Value is POST. |

If the `recordCompleteUrl` attribute is specified, the [Record Complete](../callBacks/recording.md) event is sent to the `recordCompleteUrl` and
BXML returned by that callback is executed next. Any verbs following the `<Record>` tag will be ignored.
 
If no `recordCompleteUrl` is specified, execution of verbs following the `<Record>` tag continues.  The recording will be available
on the server.

If the `recordingAvailableUrl` attribute is specified, the [Recording Available](../callBacks/recordingAvailable.md) event is sent to the URL
once the recording is available for download.  No BXML is expected and this may occur before, after, or during the [Record Complete](../callBacks/recording.md) event. 

### Callbacks Received

| Callbacks                                      | Can reply with more BXML |
|:-----------------------------------------------|:-------------------------|
| [Record Complete](../callBacks/recording.md)         | Yes                      |
| [Recording Avaialable](../callBacks/recordingAvailable.md)         | No                      |

{% common %}
#### Example: Recording Verb
This shows how to use Bandwidth XML record a caller's name.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence voice="Emily">Please say your name</SpeakSentence>
   <Record recordCompleteUrl="https://record.url.server/record" />
</Response>
```

{% endmethod %}
