{% method %}

# Webhooks

A webhook is an HTML callback that is triggered when an event happens. Webhooks are used by Bandwidth to notify your application when an event occurs such as a text is received or a call is answered. To integrate webhooks in your application, you need to create a web application that can accept HTTP requests. Add the URL to any Bandwidth request that has a callbackURL. When an event occurs, Bandwidth sends either a POST or GET request to the URL with information about the event.

### Example of HTML callback recieved after a call is answered

```http
{ from: '+17204407441',
    to: '+13035659555',
    callbackUrl: 'http://f458b232.ngrok.io/outbound-callbacks',
    id: 'c-b6bgm4bz4okhvoesy5cwxsy' } ]
{ callId: 'c-b6bgm4bz4okhvoesy5cwxsy',
  from: '+17204407441',
  eventType: 'answer',
  to: '+13035659555',
  time: '2017-11-24T04:00:46Z',
  callUri: 'https://api.catapult.inetwork.com/v1/users/u-axqs3dv6in72g4gfyxxcfhy/calls/c-b6bgm4bz4okhvoesy5cwxsy',
  callState: 'active' }
```

### Example of HTML callbacks when audio is played into a call

```http
{ callId: 'c-b6bgm4bz4okhvoesy5cwxsy',
  eventType: 'speak',
  time: '2017-11-24T04:00:49Z',
  state: 'PLAYBACK_START',
  callUri: 'https://api.catapult.inetwork.com/v1/users/u-axqs3dv6in72g4gfyxxcfhy/calls/c-b6bgm4bz4okhvoesy5cwxsy',
  status: 'started' }
{ callId: 'c-b6bgm4bz4okhvoesy5cwxsy',
  eventType: 'speak',
  time: '2017-11-24T04:01:19Z',
  state: 'PLAYBACK_STOP',
  callUri: 'https://api.catapult.inetwork.com/v1/users/u-axqs3dv6in72g4gfyxxcfhy/calls/c-b6bgm4bz4okhvoesy5cwxsy',
  status: 'done' }
```
{% sample lang="js" %}

### Create a call with CallbackURL
```js
client.Call.create({
    from: "{fromNumber}",
    to: "{toNumber}",
    callbackUrl : "{callbackURL}"
})
.then(function (id) {
    console.log(id);
})
```

{% sample lang="csharp" %}

### Create a call with CallbackURL
```csharp
var call = await client.Call.CreateAsync(new CreateConferenceData
{
From = "{fromNumber}"
To = "{toNumber}"
CallbackUrl = "{callbackURL}"
});
```

{% sample lang="ruby" %}

### Create a call with CallbackURL
```ruby
call = Bandwidth::Call.create({
   :from => "{fromNumber}",
   :to => "{toNumber}",
   :callbackUrl => "{callbackURL}"
   })
```

{% sample lang="python" %}

### Create a call with CallbackURL
```python
call_id = api.create_call(from = "{fromNumber}", to = "{toNumber}", callback_url = "{callbackURL}"
```

{% endmethod %}



