{% method %}
## Send SMS/MMS
*_This example shows you how to send an outbound SMS or MMS message to a mobile phone._*

![Graphic](images/how-to-send-sms.png)

### Using Postman

[![Postman](images/postman.svg)](https://app.getpostman.com/run-collection/8aec904a67e85cbbede2)

* Import the example to Postman by clicking the button and access it in “Collections”.
* Make sure to replace the {userId} in the url and the {token} and {secret} in Authorization.  Your credentials can be found in the “Account” tab of the API console.
* Also set the phone numbers and message in Body.

{% common %}
### Example: Send a SMS

{% sample lang="shell" %}

```shell
// find your credentials http://ap.bandwidth.com/docs/security/
// Replace from number with a Bandwidth Phone Number on your account
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"from": "+12525089000", "to": "+15035555555", "text": "Hello there from Bandwidth!"}'
```

{% sample lang="js" %}

```js
// install sdk: npm install node-bandwidth

var Bandwidth = require("node-bandwidth");
var client = new Bandwidth({
    userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});
var message = {
	from: "+19195551212",  // <-- This must be a Bandwidth number on your account
	to: "+191955512142",
	text: "Hello World"
};

//Use Promises
client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});

//Use callbacks
client.Message.send(message, function(err, message) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Message sent with ID " + message.id);
});
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for susbcribing to Unicorn Enterprises!"
});
```



{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for susbcribing to Unicorn Enterprises!"
})
```

{% common %}
### Example: Send a MMS (Picture Messaging)

{% sample lang="shell" %}
```shell
// find your credentials http://ap.bandwidth.com/docs/security/
// Replace from number with a Bandwidth Phone Number on your account
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{user-id}/messages \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"from": "+12018994225", "to": "+12223334444", "text": "Hello there from Bandwidth!", "media":["https://s3.amazonaws.com/bwdemos/logo.png"]}'
	```

{% sample lang="js" %}

```js
// install sdk: npm install node-bandwidth

var Bandwidth = require("node-bandwidth");
var client = new Bandwidth({
    userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});
var message = {
	from: "+19195551212",  // <-- This must be a Bandwidth number on your account
	to: "+191955512142",
	text: "Test",
	media: ["https://s3.amazonaws.com/bwdemos/logo.png"]
};

//Use Promises
client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});

//Use callbacks
client.Message.send(message, function(err, message) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Message sent with ID " + message.id);
});
```


{% sample lang="csharp" %}

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for susbcribing to Unicorn Enterprises!",
    Media = new[] {"https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"},
    CallbackUrl = "http://my.callback.url"
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for susbcribing to Unicorn Enterprises!",
    :media => ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"],
    :callback_url => "http://my.callback.url"
})
```



{% endmethod %}