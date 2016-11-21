#Welcome to Bandwidth!
Here you will find everything you need to get started. Jump right into the [full API reference](http://dev.bandwidth.com/ap-docs/methods/restApi.html) or see how its done with with a scenario below:

<div class="devCards">
  <i class="icons8-hashtag" style="font-size: 40px"></i>
  <h2>Telephone Numbers</h2>
  <a href="howto/buytn.html">Buy a telephone number</a><br>
  You will need to do this first. Go for it!
</div><div class="devCards">
  <i class="icons8-phone" style="font-size: 40px"></i>
  <h2>Voice</h2>
  <a href="howto/outboundCall.html">Make a call</a><br>Put that number to use!
</div><div class="devCards">
  <i class="icons8-sms" style="font-size: 40px"></i>
  <h2>Messaging</h2>
  <a href="howto/sendSMSMMS.html">Send a text</a><br>SMS or MMS, send it now.
</div>

### Send Message

```js
client.Message.send({
    from : "+19195551212",
    to   : "+19195551213",
    text : "Thank you for susbcribing to Unicorn Enterprises!"
})
.then(function(message){
    console.log(message.id);
});
```

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for susbcribing to Unicorn Enterprises!"
});
```

```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for susbcribing to Unicorn Enterprises!"
})
```

```bash

curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
        -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "text": "Good morning, this is a test message",
        "callbackUrl": "http://my.callback.url"
    }'
```

### Make Call

```js
client.Call.create({
    from: "{fromNumber}",
    to: "{toNumber}"
})
.then(function (call) {
    console.log(call.id);
})
```

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}"
});
```

```ruby
call = Call.create(client, {:from => "{fromNumber}", :to => "{toNumber}"})
```

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}"
    }'
  ```
