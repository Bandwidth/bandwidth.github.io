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
| mute                     | (optional) TODO |
| hold                     | (optional) TODO |
| callIdsToCoach           | (optional) TODO |
| tag                      | (optional) TODO |
| conferenceEventUrl       | (optional) TODO |
| conferenceEventMethod    | (optional) TODO |
| username                 | (optional) TODO |
| password                 | (optional) TODO |

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
