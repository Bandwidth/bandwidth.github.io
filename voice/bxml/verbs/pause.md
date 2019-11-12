{% method %}

## XML: `<Pause>`
The Pause verb is used to delay for a set period of time.  Silence will be heard.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | (optional) The 'duration' attribute specifies how many seconds Bandwidth will wait silently before continuing on. Default value is 1. Range: decimal values between 0.1 - 86400. |


### Callbacks Received

None

{% common %}
#### Example 1 of 1:  Pause Verb
This shows how to use Bandwidth XML to pause for 2 seconds.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Pause duration="2" />
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
response = Response()
pause = Pause(duration=2)

response.add_verb(pause)
print(response.to_bxml())
```

{% endmethod %}
