{% method %}
## XML: `<Hangup>`
The Hangup verb is used to hang up the current call.

The Hangup verb is also used to reject incoming calls either explicitly or implicitly.


### Attributes

| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received

| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [CallComplete](../callBacks/disconnect.md) | No                      |

{% common %}
#### Example: Hangup Verb
This shows how to use Bandwidth XML to hang up an existing call.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Hangup/>
</Response>
```


{% endmethod %}
