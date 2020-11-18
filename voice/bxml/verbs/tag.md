{% method %}
## XML: `<Tag>`
The Tag verb is used to set a new tag value without executing a callback. This new tag will be sent with
all future callbacks unless overwritten by a future `tag` attribute or `<Tag>` verb, or cleared.

### Text Content
| Name | Description |
|:-----|:------------|
| tag  | The new tag value. Leading and trailing whitespace is trimmed. Leave blank to clear the tag. |

### Callbacks Received

None


{% common %}
#### Example 1 of 1: Redirect Verb
This shows how to use BXML to set the tag for a call to the value "abc123" before playing an audio clip.
When the platform hangs up at the end of the audio clip, the tag reported in the [disconnect event](../callbacks/disconnect.md)
will be "abc123".

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Tag>
      abc123
   </Tag>
   <PlayAudio>/myMediaFile.mp3</PlayAudio>
</Response>
```

{% sample lang="java" %}

```java
// Coming soon
```

{% sample lang="csharp" %}

```csharp
// Coming soon
```


{% sample lang="ruby" %}

```ruby
// Coming soon
```

{% sample lang="python" %}

```python
# Coming soon
```

{% sample lang="js" %}

```js
// Coming soon
```

{% sample lang="php" %}

```php
// Coming soon
```

{% endmethod %}
