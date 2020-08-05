{% method %}
## XML: `<StartGather>`
The `StartGather` verb is used to get asynchronous notifications of digits detected while other verbs are executed.

It can, for instance, listen for DTMFs while a call is in a [`<Conference>`](conference.md) or in a [`<Bridge>`](bridge.md), or during the execution of any other verb.

The only exception is the [`<Gather>`](gather.md) verb. When a [`<Gather>`](gather.md) is executed, the `<StartGather>` is paused until the [`<Gather>`](gather.md) verb ends, after that it is automatically resumed.

The `<StartGather>` verb can be cancelled by the [`<StopGather>`](stopGather.md) verb.

### Attributes
| Attribute           | Description                                                                                                                                                                                                             |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dtmfUrl             | URL to send the [dtmf event](../callbacks/dtmf.md) to. May be a relative URL.                                                                                                                                           |
| dtmfMethod          | (optional) The HTTP method to use for the request to `dtmfUrl`. GET or POST. Default value is POST.                                                                                                                     |
| username            | (optional) The username to send in the HTTP request to `dtmfUrl`.                                                                                                                                                       |
| password            | (optional) The password to send in the HTTP request to `dtmfUrl`.                                                                                                                                                       |
| dtmfFallbackUrl     | (optional) URL to send the [dtmf event](../callbacks/dtmf.md) to. May be a relative URL.                                                                                                                                |
| dtmfFallbackMethod  | (optional) The HTTP method to use for the request to `dtmfFallbackUrl`. GET or POST. Default value is POST.                                                                                                             |
| fallbackUsername    | (optional) The username to send in the HTTP request to `dtmfFallbackUrl`.                                                                                                                                               |
| fallbackpassword    | (optional) The password to send in the HTTP request to `dtmfFallbackUrl`.                                                                                                                                               |
| tag                 | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.  |

### Callbacks Received
| Callback                      | Can reply with more BXML |
|:------------------------------|:-------------------------|
| [dtmf](../callbacks/dtmf.md)  | No                       |

{% common %}

#### Example 1 of 1: Gather digits during a Conference
This example shows how to use the `StartGather` verb to listen for digits pressed while the call is in a `Conference`.
Whenever a digit is entered, a [dtmf](../callbacks/dtmf.md) event is sent with the detected digit.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartGather dtmfUrl="https://startgather.url/callback" />
    <Conference>my-conference</Conference>
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

{% endmethod %}
