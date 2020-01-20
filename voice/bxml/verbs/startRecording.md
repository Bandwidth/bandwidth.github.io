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
| multiChannel                 | (optional) A boolean value indicating whether or not the recording file should separate each side of the call into its own audio channel. Default value is `false`.                                                    |

If the `recordingAvailableUrl` attribute is specified, then the [Recording Available](../callbacks/recordingAvailable.md)
event is sent to the URL once the recording is available for download, indicating the `mediaUrl` and if there was any issue processing the recording.
<br>
BXML returned in response to this callback will be ignored.

If the `multiChannel` attribute is `true`, then the resulting recording will have 2 audio channels.<br>
The caller/called party will be recorded in channel 0 (left channel) while [`<PlayAudio>`](playAudio.md) and [`<SpeakSentence>`](speakSentence.md) will be recorded in channel 1 (right channel).<br>
During a [`<Transfer>`](transfer.md) the A-leg will be recorded in channel 0 (left channel) while the B-leg will be recorded in channel 1 (right channel).

<aside class="alert general small"><p>NOTE: Only one &lt;StartRecording&gt; verb may be active at a time. If a second &lt;StartRecording&gt; verb is used without first using a &lt;StopRecording&gt; verb, the second &lt;StartRecording&gt; will be ignored.</p></aside>

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |

{% common %}
#### Example 1 of 1: Recording of a call
This shows how to use Bandwidth XML to record a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+15554567892</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% sample lang="java" %}

```java
StartRecording startRecording = StartRecording.builder()
        .recordingAvailableUrl("https://myapp.com/noBXML")
        .build();

SpeakSentence speakSentence = SpeakSentence.builder()
        .voice("bridget")
        .text("This call is being recorded.  Please wait while we transfer you.")
        .build();

Transfer transfer = Transfer.builder()
        .phoneNumbers(
                PhoneNumber.builder().phoneNumber("+15554567892").build()
        )
        .build();

StopRecording stopRecording = StopRecording.builder().build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(startRecording)
        .add(transfer)
        .add(stopRecording);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "This call is being recorded. Please wait while we transfer you."
};

StartRecording startRecording = new StartRecording
{
    RecordingAvailableUrl = "https://myapp.com/noBXML"
};

Transfer transfer = new Transfer
{
    PhoneNumbers = new PhoneNumber[] {new PhoneNumber
    {
        Number = "+15554567892"
    } }
};

StopRecording stopRecording = new StopRecording();

SpeakSentence speakSentence1 = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "Thanks for your call. Have a nice day!"
};

Response response = new Response();
response.Add(speakSentence);
response.Add(startRecording);
response.Add(transfer);
response.Add(stopRecording);
response.Add(speakSentence1);

Console.WriteLine(response.ToBXML());
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

stop_recording = Bandwidth::Voice::StopRecording.new()

speak_sentence_end = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Thanks for your call. Have a nice day!",
    :voice => "bridget"
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence_start)
response.push(start_recording)
response.push(transfer)
response.push(stop_recording)
response.push(speak_sentence_end)

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

stop_recording = StopRecording()

speak_sentence_end = SpeakSentence(
    sentence="Thanks for your call. Have a nice day!",
    voice="bridget"
)

response = Response()
response.add_verb(speak_sentence_start)
response.add_verb(start_recording)
response.add_verb(transfer)
response.add_verb(stop_recording)
response.add_verb(speak_sentence_end)

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

var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var speakSentenceEnd = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceEnd.setSentence("Thanks for your call. Have a nice day!");
speakSentenceEnd.setVoice("bridget");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentenceStart);
response.addVerb(startRecording);
response.addVerb(transfer);
response.addVerb(stopRecording);
response.addVerb(speakSentenceEnd);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentenceStart = new BandwidthLib\Voice\Bxml\SpeakSentence("This call is being recorded. Please wait while we transfer you.");
$speakSentenceStart->voice("bridget");

$startRecording = new BandwidthLib\Voice\Bxml\StartRecording();
$startRecording->recordingAvailableUrl("https://myapp.com/noBXML");

$phoneNumber = new BandwidthLib\Voice\Bxml\PhoneNumber("+15554567892");
$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->phoneNumbers(array($phoneNumber));

$stopRecording = new BandwidthLib\Voice\Bxml\StopRecording();

$speakSentenceEnd = new BandwidthLib\Voice\Bxml\SpeakSentence("Thanks for your call. Have a nice day!");
$speakSentenceEnd->voice("bridget");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentenceStart);
$response->addVerb($startRecording);
$response->addVerb($transfer);
$response->addVerb($stopRecording);
$response->addVerb($speakSentenceEnd);

echo $response->toBxml();
```

{% endmethod %}
