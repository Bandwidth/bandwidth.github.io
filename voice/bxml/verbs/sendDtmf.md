{% method %}
## XML: `<SendDtmf>`
The SendDtmf verb is used to play DTMF digits in the call.
* The `,` and lowercase `w` characters introduce a half-second pause into the DTMF sequence.
* An uppercase `W` character introduces a one-second pause into the DTMF sequence.
* `*`, `#`, `a-d`, and `A-D` are also supported in addition to the numeric characters `0-9`.

### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |

### Text Content
| Name        | Description |
|:------------|:------------|
| digits        |  String containing the DTMF characters to be sent in a call. Allows a maximum of 50 characters. The digits will be sent one-by-one with a marginal delay.

### Callbacks Received

None

{% common %}
#### Example 1 of 1:  PlayAudio Verb

This shows how to use Bandwidth XML to play 1, 2, pause, 3, 4 on a call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SendDtmf>12w34</SendDtmf>
</Response>
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
# Ruby Example
```

{% sample lang="python" %}

```python
# Python Example
```

{% endmethod %}
