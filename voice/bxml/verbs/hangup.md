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
| [CallComplete](../callbacks/disconnect.md) | No                      |

{% common %}


#### Example 1 of 1: Hangup Verb
This shows how to use Bandwidth XML to hang up an existing call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Hangup/>
</Response>
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

Hangup hangup = new Hangup();

response.Add(hangup);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
hangup = Hangup()

response.add_verb(hangup)
print(response.to_bxml())
```

{% endmethod %}
