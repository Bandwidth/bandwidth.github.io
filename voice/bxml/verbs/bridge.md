{% method %}

## XML: `<Bridge>`
The Bridge verb is used to bridge another party onto the current call.

### Attributes
| Attribute                     | Description                                                                                                                                                                                                                                                 |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bridgeCompleteUrl             | (optional) URL to send the [Bridge Complete](../callbacks/bridgeComplete.md) event to and request new BXML. [See below](#bridgeComplete) for further details.                                                                                               |
| bridgeCompleteMethod          | (optional) The HTTP method to use for the request to `bridgeCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                               |
| bridgeTargetCompleteUrl       | (optional) URL to send the [Bridge Target Complete](../callbacks/bridgeTargetComplete.md) event to and request new BXML to be executed on the target call.                                                                                                  |
| bridgeTargetCompleteMethod    | (optional) The HTTP method to use for the request to `bridgeTargetCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                         |
| username                      | (optional) The username to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                |
| password                      | (optional) The password to send in the HTTP request to `bridgeCompleteUrl` and to `bridgeTargetCompleteUrl`.                                                                                                                                                |
| tag                           | (optional) A custom string that will be sent with the `bridgeComplete` callback and all future callbacks of the call unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

#### BridgeComplete event {#bridgeComplete}
If the called party (target call) is the first to hang up or leave the bridge, then the [BridgeComplete](../callbacks/bridgeComplete.md) callback is sent.

Verbs following the `<Bridge>` will be ignored when the `bridgeCompleteUrl` attribute is specified, and the BXML returned by this callback is executed on the original call.

If the `bridgeCompleteUrl` attribute is not specified, then no event will be sent and execution of verbs following the `<Bridge>` tag continues.

This callback is also sent if any problem occurs with the bridge, such as the target call was not answered yet, or it was already hung up.

#### BridgeTargetComplete event {#bridgeTargetComplete}
If the caller is the first to hang up or leave the bridge, then the [BridgeTargetComplete](../callbacks/bridgeTargetComplete.md) callback is sent,
and the BXML returned by this callback is executed on the target call.

If the `bridgeTargetCompleteUrl` attribute is not specified, then no event will be sent and the target call will be hung up.

### Text Content
| Name        | Description                                               |
|:------------|:----------------------------------------------------------|
| Target call | String containing the `callId` of the call to be bridged. |

If the target call is an outbound call, then it must be active (answered). Unanswered outbound calls or calls already hung up cannot be bridged and will result in a [Bridge Complete](../callbacks/bridgeComplete.md) event to be send with a failure message.

Any BXML being executed in the target call will be cancelled when that call is bridged.

A target call cannot be bridged by multiple callers, so a target call that is already bridged with another call cannot be bridged again until the bridge is completed.

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
