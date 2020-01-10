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

#### Example 1 of 1 : Pausing a recording


This shows how to use Bandwidth XML to pause a recording in a phone call.
In this example, only the transfers themselves will be recorded, and the text-to-speech instructing the user will not be present in the recording.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+15554567892</PhoneNumber>
    </Transfer>
    <PauseRecording/>
    <Gather gatherUrl="https://myapp.com/gatherCallbackBxml" maxDigits="1" firstDigitTimeout="10">
        <SpeakSentence voice="kate">Press one if you want to be transferred to another number.</SpeakSentence>
    </Gather>
</Response>
```

{% sample lang="java" %}

```java
//coming soon
```

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
speak_sentence_start = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "This call is being recorded. Please wait while we transfer you.",
    :voice => "bridget"
})

start_recording = Bandwidth::Voice::StartRecording.new({
    :recording_available_url => "https://myapp.com/noBXML"
})

phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15554567892"
})
transfer = Bandwidth::Voice::Transfer.new({
    :phone_numbers => [phone_number]
})

pause_recording = Bandwidth::Voice::PauseRecording.new()

speak_sentence_gather = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Press one if you want to be transferred to another number.",
    :voice => "kate"
})
gather = Bandwidth::Voice::Gather.new({
    :max_digits => 1,
    :first_digit_timeout => 10,
    :gather_url => "https://myapp.com/gatherCallbackBxml",
    :speak_sentence => speak_sentence_gather
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence_start)
response.push(start_recording)
response.push(transfer)
response.push(pause_recording)
response.push(gather)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
speak_sentence_start = SpeakSentence(
    sentence="This call is being recorded. Please wait while we transfer you.",
    voice="bridget"
)

start_recording = StartRecording(
    recording_available_url="https://myapp.com/noBXML"
)

phone_number = PhoneNumber(
    number="+15554567892"
)
transfer = Transfer(
    phone_numbers=[phone_number]
)

pause_recording = PauseRecording()

speak_sentence_gather = SpeakSentence(
    sentence="Press one if you want to be transferred to another number.",
    voice = "kate"
)
gather = Gather(
    max_digits=1,
    first_digit_timeout=10,
    gather_url="https://myapp.com/gatherCallbackBxml",
    speak_sentence=speak_sentence_gather
)

response = Response()
response.add_verb(speak_sentence_start)
response.add_verb(start_recording)
response.add_verb(transfer)
response.add_verb(pause_recording)
response.add_verb(gather)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentenceStart = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceStart.setSentence("This call is being recorded. Please wait while we transfer you.");
speakSentenceStart.setVoice("bridget");

var startRecording = new BandwidthBxml.Verbs.StartRecording();
startRecording.setRecordingAvailableUrl("https://myapp.com/noBXML");

var phoneNumber = new BandwidthBxml.Verbs.PhoneNumber();
phoneNumber.setNumber("+15554567892");
var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.addPhoneNumber(phoneNumber);

var pauseRecording = new BandwidthBxml.Verbs.PauseRecording();

var speakSentenceGather = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceGather.setSentence("Press one if you want to be transferred to another number.");
speakSentenceGather.setVoice("kate");
var gather = new BandwidthBxml.Verbs.Gather();
gather.setSpeakSentence(speakSentenceGather);
gather.setMaxDigits(1);
gather.setFirstDigitTimeout(10);
gather.setGatherUrl("https://myapp.com/gatherCallbackBxml");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentenceStart);
response.addVerb(startRecording);
response.addVerb(transfer);
response.addVerb(pauseRecording);
response.addVerb(gather);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
//coming soon
```

{% common %}

> Gather callback bxml:

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <ResumeRecording/>
    <Transfer>
        <PhoneNumber>+15554567893</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
resume_recording = Bandwidth::Voice::ResumeRecording.new()

phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15554567893"
})
transfer = Bandwidth::Voice::Transfer.new({
    :phone_numbers => [phone_number]
})

stop_recording = Bandwidth::Voice::StopRecording.new()

speak_sentence_end = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Thanks for your call. Have a nice day!",
    :voice => "bridget"
})

response = Bandwidth::Voice::Response.new()
response.push(resume_recording)
response.push(transfer)
response.push(stop_recording)
response.push(speak_sentence_end)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
resume_recording = ResumeRecording()

phone_number = PhoneNumber(
    number="+15554567893"
)
transfer = Transfer(
    phone_numbers=[phone_number]
)

stop_recording = StopRecording()

speak_sentence_end = SpeakSentence(
    sentence="Thanks for your call. Have a nice day!",
    voice="bridget"
)

response = Response()
response.add_verb(resume_recording)
response.add_verb(transfer)
response.add_verb(stop_recording)
response.add_verb(speak_sentence_end)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var resumeRecording = new BandwidthBxml.Verbs.ResumeRecording();

var phoneNumber = new BandwidthBxml.Verbs.PhoneNumber();
phoneNumber.setNumber("+15554567893");
var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.addPhoneNumber(phoneNumber);

var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var speakSentenceEnd = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceEnd.setSentence("Thanks for your call. Have a nice day!");
speakSentenceEnd.setVoice("bridget");

var response = new BandwidthBxml.Response();
response.addVerb(resumeRecording);
response.addVerb(transfer);
response.addVerb(stopRecording);
response.addVerb(speakSentenceEnd);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
//coming soon
```


{% endmethod %}
