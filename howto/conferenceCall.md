{% method %}

# How to create a conference call

### Create conference call

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
  "from": "{number}",
  "callbackUrl":"http://my.callback.url",
  "callbackTimeout":"2000",
  "fallbackUrl":"http://my.fallback.url"
}
```

### Response

```http
HTTP/1.1 201 CREATED
```

{% sample lang="js" %}

### Create a conference call
```js
client.Conference.create({from: "+1234567890"}).then(function(conference){});
```

{% sample lang="csharp" %}

### Create a conference call
```csharp
var conference = await client.Conference.CreateAsync(new CreateConferenceData {From = "+1234567890"});
```

{% sample lang="ruby" %}

### Create a conference call
```ruby
conference = Conference.create(client,  {:from => "+1234567890"})
```

{% sample lang="python" %}

### Create a conference call
```python
conference_id = Conference.create_conference('+12018994444')
```

{% endmethod %}



