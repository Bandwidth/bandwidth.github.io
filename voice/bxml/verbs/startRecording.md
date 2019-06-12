{% method %}
## XML: `<StartRecording>`
The StartRecording verb allows an entire section of a call to be recorded. All audio on both sides of the call will be
recorded until either the call ends or the [`<StopRecording>`](stopRecording.md) verb is used.

NOTE: Only one `<StartRecording>` verb may be active at a time. If a second `<StartRecording>` verb is used without first
using a [`<StopRecording>`](stopRecording.md) verb, the second `<StartRecording>` will be ignored.

### Attributes
| ATTRIBUTE             | DESCRIPTION                                                                                                                                                                                               |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recordingAvailableUrl     | (optional) URL to send the [Recording Available](../callBacks/recordingAvailable.md) event to |
| recordingAvailableMethod  | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default Value is POST. |
| fileFormat            | (optional) The format that the recording will be saved in - `mp3` or `wav`.                                                                                                                                      |
| multiChannel | (optional) A boolean value indicating whether or not the recording file should have each side of the call in its own audio channel.<br> Default is `false` |

If the `recordingAvailableUrl` attribute is specified, the [Recording Available](../callBacks/recordingAvailable.md) event is sent to the URL
once the recording is available for download.  No BXML is expected.  This event may be fired after the call completes. 

### Callbacks Received

| Callbacks                                               | Can reply with more BXML |
|:--------------------------------------------------------|:-------------------------|
| [Recording Avaialable](../callBacks/recordingAvailable.md)         | No                      |

{% common %}
#### Example: StartRecording Verb With Transfer
Shows how to play an automatic greeting message, then start recording the call as it is transferred to a human.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence>This call may be recorded for training purposes.</SpeakSentence>
   <StartRecording/>
   <Transfer>
       <PhoneNumber>+11235557892</PhoneNumber>
   </Transfer>
   <StopRecording/>
   <SpeakSentence>You are not being recorded anymore. Thank you for calling. Have a nice day!</SpeakSentence>
</Response>
```

#### Example: StartRecording Verb
Shows how to record a certain section of a call and get notified when the recording is uploaded

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <StartRecording uploadCompleteUrl="http://myserver.com/uploaded" />
   <SpeakSentence>This and whatever the human says will be recorded.</SpeakSentence>
   <Hangup/>
</Response>
```

{% endmethod %}
