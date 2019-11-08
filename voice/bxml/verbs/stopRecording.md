{% method %}
## XML: `<StopRecording>`
The StopRecording verb stops a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.
 
If there is not currently an active recording, this verb has no effect.
If a previous recording was paused, <StopRecording> will end it.

### Attributes

| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |

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
    <SpeakSentence voice="bridget">Transferring your call, please wait, this call is being recorded.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+11234567892</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call, have a nice day.</SpeakSentence>
</Response>
```

{% endmethod %}
