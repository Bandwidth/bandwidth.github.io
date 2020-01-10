{% method %}
## XML: `<StopRecording>`
The StopRecording verb is used to stop a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.

If there is not an ongoing recording at the time of this verb's execution, it has no effect.
If a previous recording was paused, <StopRecording> will end it.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

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

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
stop_recording = Bandwidth::Voice::StopRecording.new()

response.push(stop_recording)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
stop_recording = StopRecording()

response.add_verb(stop_recording)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var response = new BandwidthBxml.Response();
response.addVerb(stopRecording);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
//coming soon
```

{% endmethod %}
