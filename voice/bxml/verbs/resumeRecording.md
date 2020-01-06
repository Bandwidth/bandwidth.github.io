{% method %}
## XML: `<ResumeRecording>`
The ResumeRecording verb is used to resume a recording that was previously paused by a [`<PauseRecording>`](pauseRecording.md) verb.

Audio that occurs between a [`<PauseRecording>`](pauseRecording.md) verb and a `<ResumeRecording>` verb will not be present in the recording.

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

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

{% sample lang="python" %}

```python
# coming soon
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
#coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% sample lang="php" %}

```php
//coming soon
```


{% endmethod %}
