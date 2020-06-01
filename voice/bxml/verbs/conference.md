{% method %}

## XML: `<Conference>`
Used to join the current call into a conference.

Conference names are created and specified by your application.

A maximum of 20 calls may be in a particular conference.

### Text Content
| Name        | Description |
|:------------|:------------|
| name        | The name of the conference with alphanumeric characters and the symbols `-`, `_`, and `.` with maximum length of 50 characters. |

#### Conference attributes
| Attribute                | Description                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mute                     | (optional) A boolean value to indicate if the member can't speak in the conference. Defaults to false                                                                                                                   |
| hold                     | (optional) A boolean value to indicate if the member can't hear or speak in the conference. Defaults to false                                                                                                           |
| callIdsToCoach           | (optional) A comma-separated list of call ids to coach. When a call joins a conference with this attribute set, it will coach the listed calls. Those calls will be able to hear and be heard by the coach, but other calls in the conference will not hear the coach.<br><br>Calls may be added to the conference in any order - if the matching calls are not already in the conference, then once the matching calls are added, the coach will be able to hear and speak to the matching calls. Note that this will not add the matching calls to the conference; each call must individually execute a `<Conference>` verb to join.<br><br>A conference may only have one coach.|
| conferenceEventUrl       | (optional) URL to send Conference events to. The URL, method, username, and password are set by the BXML document that creates the conference, and all events related to that conference will be delivered to that same endpoint. If more calls join afterwards and also have this property (or any other callback related properties like `username` and `password`), they will be ignored and the original callback information will be used. |
| conferenceEventMethod    | (optional) The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST.                                                                                                          |
| username                 | (optional) The username to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| password                 | (optional) The password to send in the HTTP request to `conferenceEventUrl`.                                                                                                                                            |
| tag                      | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

### Callbacks Received
| Callbacks                                                      | Can reply with BXML |
|:---------------------------------------------------------------|:--------------------|
| [Conference Created](../callbacks/conferenceCreated.md)        | No                  |
| [Conference Member Join](../callbacks/conferenceMemberJoin.md) | No                  |
| [Conference Member Exit](../callbacks/conferenceMemberExit.md) | No                  |
| [Conference Completed](../callbacks/conferenceCompleted.md)    | No                  |

{% common %}

### Example 1 of 2: Join Conference
This shows how to use Bandwidth XML to add a call in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">You will be added to your conference now.</SpeakSentence>
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

{% common %}

### Example 2 of 2: Join Conference as Coach
This shows how to add a coach in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Welcome. You are going to coach 2 calls, please wait.</SpeakSentence>
    <Conference callIdsToCoach="c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f">my-conference</Conference>
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
