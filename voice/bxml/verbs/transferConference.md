{% method %}

## XML: `<Transfer>`
The Transfer verb with `<Conference>` is used to join the current call into a conference.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Nested Tags
The nested tag `<Conference>` defines the conference the call will join.

| Verb        | Description                                                                                                                     |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------|
| Conference  | The name of the conference with alphanumeric characters and the symbols `-`, `_`, and `.` with maximum length of 50 characters. |

#### Conference attributes
| Attribute                | Description                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mute                     | (optional) A boolean value to indicate if the member can't speak in the conference. Defaults to false                                                                                                                   |
| hold                     | (optional) A boolean value to indicate if the member can't hear or speak in the conference. Defaults to false                                                                                                           |
| callIdsToCoach           | (optional) The list of call ids to coach.                                                                                                                                                                               |
| conferenceEventUrl       | (optional) URL to send Conference events to and request new BXML.                                                                                                                                                       |
| conferenceEventMethod    | (optional) The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST.                                                                                                          |
| username                 | (optional) The username to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| password                 | (optional) The password to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| tag                      | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

### Callbacks Received
| Callbacks                                                 | Can reply with more BXML |
|:----------------------------------------------------------|:-------------------------|
| [Conference Event](../callbacks/conferenceEvent.md)       | Yes                      |

{% common %}

### Example 1 of 1: Join Conference
This shows how to use Bandwidth XML to add a call in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Transferring your call, please wait.</SpeakSentence>
    <Transfer>
        <Conference>my-conference</Conference>
    </Transfer>
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
