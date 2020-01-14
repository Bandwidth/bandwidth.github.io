# BXML Recording

## About

This guide will show how to do call recording via the [Record](../bxml/verbs/record.md) and [StartRecording](../bxml/verbs/startRecording.md) verbs.

### Record

The Record verb starts recording in a call and pauses all BXML execution until the recording is terminated by a timeout (`maxDuration`) or a terminating digit (`terminatingDigits`). Once the recording ends, BXML execution will continue at the next verb, or at the BXML at the `recordCompleteUrl` if this attribute is set.

If the `recordingAvailableUrl` attribute is set, this URL will receive a callback once the recording is available to use.

#### Record Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Record recordCompleteUrl="https://myapp.com/nextBXML" maxDuration="10"/>
</Response>
```

### StartRecording

The StartRecording verb starts recording in a call without pausing BXML execution. The [PauseRecording](../bxml/verbs/pauseRecording.md), [ResumeRecording](../bxml/verbs/resumeRecording.md), and [StopRecording](../bxml/verbs/stopRecording.md) BXML verbs can be used to toggle the recording. Recording is terminated by either the call ending, or by a StopRecording verb.

Much like the Record verb, StartRecording also has a `recordingAvailableUrl` attribute to receive the recording available callback.

#### StartRecording Examples

##### Basic StartRecording

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
</Response>
```

##### StartRecording Used With StopRecording, PauseRecording, and ResumeRecording

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <SpeakSentence voice="bridget">Recording is active while this sentence is being spoken.</SpeakSentence>
    <PauseRecording/>
    <SpeakSentence voice="bridget">Recording has been paused.</SpeakSentence>
    <ResumeRecording/>
    <SpeakSentence voice="bridget">Recording has been resumed and is active while this sentence is being spoken.</SpeakSentence>
    <StopRecording/>
    <SpeakSentence voice="bridget">Recording has been stopped.</SpeakSentence>
</Response>
```
