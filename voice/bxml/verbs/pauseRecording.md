{% method %}
## XML: `<PauseRecording>`
The PauseRecording verb pauses a recording that was started by a preceding [`<StartRecording>`](startRecording.md) verb. 

Audio that occurs between the `<PauseRecording>` and [`<ResumeRecording>`](resumeRecording.md) tag will not be present in the recording.

The paused period will not be included in the duration of the recording and will not be billed.

If there is not currently an active recording, this verb has no effect.

### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received
None

{% common %}
#### Example: Pausing a recording
This shows how to use Bandwidth XML to pause a recording in a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">Transferring your call, please wait, this call is being recorded.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+11234567892</PhoneNumber>
    </Transfer>
    <PauseRecording/>
    <Gather gatherUrl="https://myapp.com/gatherCallbackBxml" maxDigits="1" firstDigitTimeout="10">
        <SpeakSentence voice="kate">Press one if you want to be transferred to another number.</SpeakSentence>
    </Gather>
</Response>
```

Gather callback bxml:
```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <ResumeRecording/>
    <Transfer>
        <PhoneNumber>+11234567893</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call, have a nice day.</SpeakSentence>
</Response>
```

{% endmethod %}