{% method %}
## XML: `<PauseRecording>`
The PauseRecording verb is used to pause a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.

Audio that occurs between a `<PauseRecording>` verb and a [`<ResumeRecording>`](resumeRecording.md) verb will not be present in the recording.

The paused period will not be included in the duration of the recording and therefore will not contribute to the recording portion of the bill.

If there is not an ongoing recording at the time of this verb's execution, it has no effect.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received
None

{% common %}
#### Example: Pausing a recording
This shows how to use Bandwidth XML to pause a recording in a phone call.
In this example, only the transfers themselves will be recorded, and the text-to-speech instructing the user will not be present in the recording.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
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
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% endmethod %}
