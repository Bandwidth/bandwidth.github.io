{% method %}
## XML: `<StopRecording>`
The StopRecording verb stops a recording that was started by a preceding [`<StartRecording>`](startRecording.md) verb.
If there is not currently an active recording, this verb has no effect.

### Attributes
None

### Callbacks Received

None

{% common %}
#### Example: StopRecording Verb
Shows how to stop recording before an automatic farewell message plays

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence>This call may be recorded for training purposes.</SpeakSentence>
   <StartRecording/>
   <Transfer>
       <PhoneNumber>+11234567892</PhoneNumber>
   </Transfer>
   <StopRecording/>
   <SpeakSentence>You are not being recorded anymore. Thank you for calling. Have a nice day!</SpeakSentence>
</Response>
```

{% endmethod %}
