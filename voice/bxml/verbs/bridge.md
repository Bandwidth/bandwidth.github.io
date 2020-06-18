{% method %}

## XML: `<Bridge>`
The Bridge verb is used to bridge another party onto the current call.

### Attributes
| Attribute                     | Description                                                                                                                                                                                                                                                 |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bridgeCompleteUrl             | (optional) URL to send the [Bridge Complete](../callbacks/bridgeComplete.md) event to and request new BXML. [See below](#bridgeCompleteUrl) for further details.                                                                                            |
| bridgeCompleteMethod          | (optional) The HTTP method to use for the request to `bridgeCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                               |
| bridgeTargetCompleteUrl       | (optional) URL to send the [Bridge Target Complete](../callbacks/bridgeTargetComplete.md) event to and request new BXML to be executed on the target call. [See below](#bridgeTargetCompleteUrl) for further details.                                       |
| bridgeTargetCompleteMethod    | (optional) The HTTP method to use for the request to `bridgeTargetCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                         |
| username                      | (optional) The username to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                |
| password                      | (optional) The password to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                |
| tag                           | (optional) A custom string that will be sent with the `bridgeComplete` callback and all future callbacks of the call unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

#### bridgeCompleteUrl {#bridgeCompleteUrl}
If the called party (target call) is the first to leave the bridge, then the [BridgeComplete](../callbacks/bridgeComplete.md) callback is sent to the `bridgeCompleteUrl`.

<aside class="alert general small"><p>A call leaves the bridge when it hangs up or when it gets [redirected](../../methods/calls/postCallsCallId.md) to another BXML.</p></aside>

Verbs following the `<Bridge>` will be ignored when the `bridgeCompleteUrl` attribute is specified, and the BXML returned by this callback is executed on the call.
If the `bridgeCompleteUrl` attribute is not specified, then no callback will be sent and execution of verbs following the `<Bridge>` tag continues.

This callback is also sent if any problem occurs with the bridge, such as the target call was not answered yet, or it was already hung up.

A call leaves the bridge when it hangs up or when it gets [redirected](../../methods/calls/postCallsCallId.md) to another BXML.

#### bridgeTargetCompleteUrl {#bridgeTargetCompleteUrl}
If the caller is the first to leave the bridge, then the [BridgeTargetComplete](../callbacks/bridgeTargetComplete.md) callback is sent to the `bridgeTargetCompleteUrl`,
and the BXML returned by this callback is executed on the target call.

If the `bridgeTargetCompleteUrl` attribute is not specified, then no event will be sent and the target call will be hung up.

### Text Content
| Name        | Description                                               |
|:------------|:----------------------------------------------------------|
| Target call | String containing the `callId` of the call to be bridged. |

If the target call is an outbound call, then it must be active (answered). Unanswered outbound calls or calls already hung up cannot be bridged and will result in a [Bridge Complete](../callbacks/bridgeComplete.md) event to be send with a failure message.

When a target call is bridged, any BXML being executed in it will be cancelled. 

<aside class="alert general small"><p>A target call cannot be bridged by multiple callers, so a target call that is already bridged with another call cannot be bridged again until the bridge is completed.</p></aside>

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
