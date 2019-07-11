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


### Callbacks Received

None

{% common %}
#### Example:  PlayAudio Verb
This shows how to use Bandwidth XML to play 1, 2, pause, 3, 4 on a call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SendDtmf>12w34</SendDtmf>
</Response>
```

{% endmethod %}
