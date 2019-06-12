{% method %}
## XML: `<Hangup>`
The Hangup verb is used to hang up the current call.


### Attributes
This verb does not support attributes.

### Callbacks Received
| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [CallComplete](../callBacks/callComplete.md) | No                      |

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
