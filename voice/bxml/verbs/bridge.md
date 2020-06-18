{% method %}

## XML: `<Bridge>`
The Bridge verb is used to bridge another party (target call) onto the current call.

When the target call is bridged, any BXML being executed in it will be cancelled. 

The target call cannot be bridged under certain circumstances:
* It is an unanswered outbound call.
* It is already bridged with another call.
* It is a Forwarded call.
* It is already hung up.

In any of those cases a [Bridge Complete](../callbacks/bridgeComplete.md) event is sent with an error message.

The bridge ends when one of the calls leave the bridge.
A call leaves the bridge when it is hung up or when it gets [redirected](../../methods/calls/postCallsCallId.md) to another BXML.

### Attributes
| Attribute                     | Description                                                                                                                                                                                                                                                   |
|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bridgeCompleteUrl             | (optional) URL to send the [Bridge Complete](../callbacks/bridgeComplete.md) event to and request new BXML.<br/> If this attribute is specified, then Verbs following the `<Bridge>` will be ignored and the BXML returned in this callback is executed on the call.<br/> If this attribute is not specified, then no callback will be sent, and execution of the verbs following the `<Bridge>` verb continues. |
| bridgeCompleteMethod          | (optional) The HTTP method to use for the request to `bridgeCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                                 |
| bridgeTargetCompleteUrl       | (optional) URL to send the [Bridge Target Complete](../callbacks/bridgeTargetComplete.md) event to and request new BXML.<br/> If this attribute is specified, then the BXML returned in this callback is executed on the target call.<br/> If this attribute is not specified, then no callback will be sent and the target call will be hung up. |
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

### Example 1 of 1: Simple Bridge
This shows how to use Bandwidth XML to bridge phone calls.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Bridge>c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d</Bridge>
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

```ruby
# TODO
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

```php
// TODO
```

{% common %}

{% endmethod %}
