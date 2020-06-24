{% method %}

## XML: `<Bridge>`
The Bridge verb is used to bridge another party (target call) onto the current call.

When the target call is bridged, any BXML being executed in it will be cancelled. 

The bridge ends when one of the calls leaves the bridge.
A call leaves the bridge when it is hung up or when it gets [redirected](../../methods/calls/postCallsCallId.md) to another BXML.

The [Bridge Complete](../callbacks/bridgeComplete.md) and [Bridge Target Complete](../callbacks/bridgeTargetComplete.md)
callbacks are sent when the bridge ends, to allow the call that remained in the bridge to execute new BXML.

There are certain circumstances in which calls cannot be bridged, such as when the target call:
* is outbound and is still not answered
* is already bridged with another call
* is executing [&lt;Forward&gt;](forward.md)
* is already hung up

In any of those cases a [Bridge Complete](../callbacks/bridgeComplete.md) event is sent with an error message.

### Attributes
| Attribute                     | Description                                                                                                                                                                                                                                                   |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bridgeCompleteUrl             | (optional) URL to send the [Bridge Complete](../callbacks/bridgeComplete.md) event to and request new BXML.<br/> If this attribute is specified, then Verbs following the `<Bridge>` verb will be ignored and the BXML returned in this callback is executed on the call.<br/> If this attribute is not specified then no callback will be sent, and execution of the verbs following the `<Bridge>` verb continues. |
| bridgeCompleteMethod          | (optional) The HTTP method to use for the request to `bridgeCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                                 |
| bridgeTargetCompleteUrl       | (optional) URL to send the [Bridge Target Complete](../callbacks/bridgeTargetComplete.md) event to and request new BXML.<br/> If this attribute is specified, then the BXML returned in this callback is executed on the target call.<br/> If this attribute is not specified then no callback will be sent, and the target call will be hung up. |
| bridgeTargetCompleteMethod    | (optional) The HTTP method to use for the request to `bridgeTargetCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                           |
| username                      | (optional) The username to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                  |
| password                      | (optional) The password to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                  |
| tag                           | (optional) A custom string that will be sent with the `bridgeComplete` callback and all future callbacks of the call unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.   |

### Text Content
| Name        | Description                                               |
|:------------|:----------------------------------------------------------|
| Target call | String containing the `callId` of the call to be bridged. |

### Callbacks Received
| Callbacks                                                      | Can reply with more BXML |
|:---------------------------------------------------------------|:-------------------------|
| [Bridge Complete](../callbacks/bridgeComplete.md)              | Yes                      |
| [Bridge Target Complete](../callbacks/bridgeTargetComplete.md) | Yes                      |

{% common %}

### Example 1 of 1: Bridge calls
This shows how to use Bandwidth XML to bridge phone calls.

{% sample lang="http" %}

First call (c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d):
```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence>Wait until the second call answers</SpeakSentence>
    <Pause duration="60" />
</Response>
```

Second call:
```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence>The bridge will start now</SpeakSentence>
    <Bridge bridgeCompleteUrl="https://bridge.url/nextBXMLForSecondCall" bridgeTargetCompleteUrl="https://bridge.url/nextBXMLForFirstCall">
        c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d
    </Bridge>
</Response>
```

{% sample lang="java" %}

```java
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

First call (c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d):
```ruby
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Wait until the second call answers"
})
pause = Bandwidth::Voice::Pause.new({
    :duration => 60
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence)
response.push(pause)
puts response.to_bxml()
```

Second call:
```ruby
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "The bridge will start now"
})
bridge = response = Bandwidth::Voice::Bridge.new({
    :call_id => "c-c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    :bridge_complete_url => "https://bridge.url/nextBXMLForSecondCall",
    :bridge_target_complete_url => "https://bridge.url/nextBXMLForFirstCall"
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence)
response.push(bridge)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

First call (c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d):
```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Wait until the second call answers");
$pause = new BandwidthLib\Voice\Bxml\Pause();
$pause->duration(60);
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($pause);

echo $response->toBxml();
```

Second call:
```php
$bridge = new BandwidthLib\Voice\Bxml\Bridge("c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d");
$bridge->bridgeCompleteUrl("https://bridge.url/nextBXMLForSecondCall");
$bridge->bridgeTargetCompleteUrl("https://bridge.url/nextBXMLForFirstCall");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($bridge);

echo $response->toBxml();
```

{% common %}

{% endmethod %}