{% method %}
## XML: `<StartRecording>`
The StartRecording verb allows a segment of a call to be recorded while other verbs are executing.

All audio on both sides of the call will be recorded until the call ends or the [`<StopRecording>`](stopRecording.md) verb is used or the [`<PauseRecording>`](pauseRecording.md) verb is used.

### Attributes
| Attribute                    | Description                                                                                                                                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recordingAvailableUrl        | (optional) URL to send the [Recording Available](../callbacks/recordingAvailable.md) event to once it has been processed. Does not accept BXML.                                                                        |
| recordingAvailableMethod     | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default value is POST.                                                                                                      |
| username                     | (optional) The username to send in the HTTP request to `recordingAvailableUrl`. If specified, the URL must be TLS-encrypted (i.e., `https`).                                                                           |
| password                     | (optional) The password to send in the HTTP request to `recordingAvailableUrl`. If specified, the URL must be TLS-encrypted (i.e., `https`).                                                                           |
| tag                          | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| fileFormat                   | (optional) The audio format that the recording will be saved as: `mp3` or `wav`.  Default value is `wav`.                                                                                                              |
| multiChannel                 | (optional) A boolean value indicating whether or not the recording file should separate each side of the call into its own audio channel. Default value is `false`. `true` results in two channels.                    |

If the `recordingAvailableUrl` attribute is specified, then the [Recording Available](../callbacks/recordingAvailable.md) event is sent to the URL once the recording is available for download. BXML returned in response to this callback will be ignored.

<aside class="alert general small"><p>NOTE: Only one &lt;StartRecording&gt; verb may be active at a time. If a second &lt;StartRecording&gt; verb is used without first using a &lt;StopRecording&gt; verb, the second &lt;StartRecording&gt; will be ignored.</p></aside>

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |

{% common %}
#### Example: Recording of a call
This shows how to use Bandwidth XML to record a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+11234567892</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% endmethod %}
