{% method %}
## XML: `<StartRecording>`
The StartRecording verb allows an entire section of a call to be recorded. All audio on both sides of the call will be recorded until either the call ends or the `<StopRecording>` verb is used.

### Attributes

| Attribute                    | Description                                                                                                                                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recordingAvailableUrl        | (optional) URL to send the [Recording Available](../callbacks/recordingAvailable.md) event to.                                                                                                                         |
| recordingAvailableMethod     | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default value is POST.                                                                                                      |
| username                     | (optional) The username to send in the HTTP request to `recordCompleteUrl` or `recordingAvailableUrl`. If username and password are specified, then https is required.                                                 |
| password                     | (optional) The password to send in the HTTP request to `recordCompleteUrl` or `recordingAvailableUrl`. If username and password are specified, then https is required.                                                 |
| tag                          | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| fileFormat                   | (optional) The format that the recording will be saved in - `mp3` or `wav`.  Default value is `wav`.                                                                                                                   |
| multiChannel                 | (optional) A boolean value indicating whether or not the recording file should have each side of the call in its own audio channel. Default value is `false`.                                                          |

If the `recordingAvailableUrl` attribute is specified, the [Recording Available](../callbacks/recordingAvailable.md) event is sent to the URL once the recording is available for download. No BXML is expected.

<aside class="alert general small"><p>NOTE: Only one &lt;StartRecording&gt; verb may be active at a time. If a second &lt;StartRecording&gt; verb is used without first using a &lt;StopRecording&gt; verb, the second &lt;StartRecording&gt; will be ignored.</p></aside>

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |

{% common %}
#### Example: Redirect Verb
This shows how to use Bandwidth XML to record a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <SpeakSentence voice="bridget">Transferring your call, please wait, this call is being recorded</SpeakSentence>
    <Transfer>
        <PhoneNumber>+11234567892</PhoneNumber>
    </Transfer>
</Response>
```

{% endmethod %}
