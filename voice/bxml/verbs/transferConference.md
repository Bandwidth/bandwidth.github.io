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
| callIdsToCoach           | (optional) The list of call ids to [coach](#callIdsToCoach).                                                                                                                                                                               |
| conferenceEventUrl       | (optional) URL to send Conference events to and request new BXML.                                                                                                                                                       |
| conferenceEventMethod    | (optional) The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST.                                                                                                          |
| username                 | (optional) The username to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| password                 | (optional) The password to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| tag                      | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

### {#callIdsToCoach}
When a call joins a conference with the `callIdsToCoach` attribute set, this call will coach the given calls.
The other calls in the conference will not hear the voice of this call.

Note that other calls will still join the conference without this variable set and that a conference accepts only one coach.

### Callbacks Received
| Callbacks                                                 | Can reply with more BXML |
|:----------------------------------------------------------|:-------------------------|
| [Conference Event](../callbacks/conferenceEvent.md)       | Yes                      |

{% common %}

### Example 1 of 2: Join Conference
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

### Example 2 of 2: Join Conference as Coach
This shows how to add a coach in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Welcome, you are going to coach 2 calls, please wait.</SpeakSentence>
    <Transfer>
        <Conference callIdsToCoach="c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f">my-conference</Conference>
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
