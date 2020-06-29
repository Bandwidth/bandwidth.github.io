{% method %}
## XML: `<Redirect>`
The Redirect verb is used to redirect the current XML execution to another URL.

### Attributes

| Attribute      | Description                                                                                                                                                                                                            |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| redirectUrl    | (required) URL to request new BXML from. A [Redirect](../callbacks/redirect.md) event will be sent to this endpoint.                                                                                                   |
| redirectMethod | (optional) The HTTP method to use for the request to `redirectUrl`. GET or POST. Default Value is POST.                                                                                                                |
| username       | (optional) The username to send in the HTTP request to `redirectUrl`.                                                                                                                                                  |
| password       | (optional) The password to send in the HTTP request to `redirectUrl`.                                                                                                                                                  |
| tag            | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

<aside class="alert general small">
<p>
&lt;Redirect&gt should be the last verb in the BXML, as any verbs after &lt;Redirect&gt; will not be executed.
<p>
</aside>

### Callbacks Received

| Callbacks                            | Can reply with more BXML |
|:-------------------------------------|:-------------------------|
| [Redirect](../callbacks/redirect.md) | Yes                      |


{% common %}
#### Example 1 of 1: Redirect Verb
This shows how to use Bandwidth XML to redirect the response to a new url.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Redirect redirectUrl="http://flow.url/newFlow" username='username' password='password'/>
</Response>
```

{% sample lang="java" %}

```java
Redirect redirect = Redirect.builder()
        .redirectUrl("https://flow.url/newFlow")
        .build();

Response response = Response.builder().build()
        .add(redirect);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

Redirect redirect = new Redirect();
redirect.RedirectUrl = "http://flow.url/newFlow";

response.Add(redirect);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
redirect = Bandwidth::Voice::Redirect.new({
    :redirect_url => "http://flow.url/newFlow"
})

response.push(redirect)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
redirect = Redirect(
    redirect_url="http://flow.url/newFlow"
)

response.add_verb(redirect)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var redirect = new BandwidthBxml.Verbs.Redirect();
redirect.setRedirectUrl("https://flow.url/nextFlow");

var response = new BandwidthBxml.Response();
response.addVerb(redirect);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$redirect = new BandwidthLib\Voice\Bxml\Redirect();
$redirect->redirectUrl("https://flow.url/newFlow");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($redirect);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
