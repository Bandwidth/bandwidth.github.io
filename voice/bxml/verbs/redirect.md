{% method %}
## XML: `<Redirect>`
The Redirect verb is used to redirect the current XML execution to another URL.

### Attributes
| Attribute         | Description                                                     |
|:------------------|:----------------------------------------------------------------|
| redirectUrl       | (required) URL to request new BXML from. A [Redirect](../callBacks/redirect.md) event will be sent to this endpoint.     |
| redirectMethod    | (optional) The HTTP method to use for the request to `redirectUrl`. GET or POST. Default Value is POST.|
| tag	            | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

<aside class="alert general small">
<p>
Any verbs after &lt;Redirect&gt; will not be executed.
<p>
</aside>

### Callbacks Received

| Callbacks                            | Can reply with more BXML |
|:-------------------------------------|:-------------------------|
| [Redirect](../callBacks/redirect.md) | Yes                      |


{% common %}
#### Example: Redirect Verb
This shows how to use Bandwidth XML to redirect the response to a new url.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Redirect redirectUrl="http://flow.url/newFlow"/>
</Response>
```

{% endmethod %}
