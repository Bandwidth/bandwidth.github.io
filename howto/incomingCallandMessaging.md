{% method %}
## Incoming Call & Messaging (REST)

Incoming calls and messages are sent to a web address configured in [`applications`](http://dev.bandwidth.com/ap-docs/methods/applications/applications.html).

![WhyCallBack](../images/app-welcome.png)

In order to recieve incoming call and messaging events, you'll need to:

1. [Create an application](http://dev.bandwidth.com/ap-docs/methods/applications/postApplications.html)
2. [Order a phone number](http://dev.bandwidth.com/ap-docs/methods/availableNumbers/postAvailableNumbersLocal.html)
3. [Assign the phone number to the application](http://dev.bandwidth.com/ap-docs/methods/phoneNumbers/postPhoneNumbersNumberId.html)

### Sample Payloads
For detailed information on _all_ [callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html), refer to the full API reference:
* [Messaging Callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/messagingEvents.html)
* [Voice Callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/voiceEvents.html)

#### Incoming Messages
```json
{
	"eventType"     : "sms",
	"direction"     : "in",
	"messageId"     : "{messageId}",
	"messageUri"    : "https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}",
	"from"          : "+13233326955",
	"to"            : "+13865245000",
	"text"          : "Example",
	"applicationId" : "{appId}",
	"time"          : "2012-11-14T16:13:06.076Z",
	"state"         : "received"
}
```

#### Incoming Phone Call

```json
{
	"eventType"     : "incomingcall",
	"from"          : "+13233326955",
	"to"            : "+13865245000",
	"callId"        : "{callId}",
	"callUri"       : "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
	"callState"     : "active",
	"applicationId" : "{appId}",
	"time"          : "2012-11-14T16:21:59.616Z"
}
```

{% common %}
### Example: Create an application

{% sample lang="curl" %}

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/applications \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"name": "MyFirstApp",
		"incomingCallUrl": "http://example.com/calls.php",
		"incomingMessageUrl": "http://example.com/messages.php",
		"callbackHttpMethod": "GET",
		"autoAnswer": true
	}'
```

{% sample lang="js" %}

```js
//Promise
client.Application.create({
	name: 'MyFirstApp',
	incomingCallUrl: 'http://your-server.com/CallCallback',
	incomingMessageUrl: 'http://your-server.com/MsgCallback'
})
.then(function (application) {
	console.log(application.id);
});
```
{% sample lang="csharp" %}

```csharp
var application = await client.Application.CreateAsync(new CreateApplicationData{
	Name = "SampleApp2",
	IncomingCallUrl = "http://your-server.com/CallCallback",
	IncomingMessageUrl = "http://your-server.com/MsgCallback"
});
```

{% sample lang="ruby" %}

```ruby
application = Application.create(client, {
	:name => "SampleApp2",
	:incoming_call_url => "http://your-server.com/CallCallback",
	:incoming_message_url => "http://your-server.com/MsgCallback"
})
```

{% common %}
### Example: Search and order phone number

{% sample lang="curl" %}

```curl
curl -v -X POST  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
// Search 2 available local phone numbers with area code 910 and order them

// Promise
client.AvailableNumber.searchAndOrder("local", { areaCode : "910", quantity : 2 }).then(function (numbers) {});

// Callback
client.AvailableNumber.serchAndOrder("local", { areaCode : "910", quantity : 2 }, function (err, numbers) {});
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchAndOrderLocalAsync(
  new LocalNumberQueryForOrder{ AreaCode = "910", Quantity = 2});
var firstResult = results.First();
var number = firstResult.Number;
var numberId = firstResult.Id;
```

{% sample lang="ruby" %}

```ruby
results = AvailableNumber.search_and_order_local(client, {area_code: '910', quantity: 2})
first_result = results.next
number = first_result[:number]
number_id = first_result[:id]
```

{% common %}
### Example: Add phone number to application
{% sample lang="curl" %}

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/{numberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"applicationId": "{application_id}"
	}'
```

{% sample lang="js" %}


```js
// Promise
client.PhoneNumber.update(numberId, {applicationId: "{application_id}"}).then(function(){});

// Callback
client.PhoneNumber.update(numberId, {applicationId: "{application_id}"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.PhoneNumber.UpdateAsync(numberId, new UpdatePhoneNUmberData {
    ApplicationId = "{application_id}"
});
```

{% sample lang="ruby" %}

```ruby
phoneNumber.update({:application_id => "{application_id}"})
```

{% common %}
### Example: Setup an application and order phone number


{% sample lang="js" %}

```js
// npm install --save node-bandwidth
var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
	userId    : "{{userId}}",
	apiToken  : "{{apiToken}}",
	apiSecret : "{{apiSecret}}"
});

function createApplication (params) {
	return client.Application.create(params)
}

function searchAndOrderPhoneNumber (state, applicationId) {
	return client.AvailableNumber.search("local", {state: state})
	.then(function (availableNumbers) {
		//Parameters for ordering the phone number
		var phoneNumberPayload = {
			//Be sure to set the applicationId to the id of application created
			applicationId : applicationId,
			number : availableNumbers[0].number,
			name : availableNumbers[0].nationalNumber
		}
		//Order the phone number
		return client.PhoneNumber.create(phoneNumberPayload);
	});
}

//Parameters for creating new application
var appPayload = {
	name: "MyFirstApp2", // Name
	incomingCallUrl: "http://example.com/calls", //Callback URL for phone calls
	incomingMessageUrl : "http://example.com/messages" //Callback URL for messages
};

createApplication(appPayload)
.then(function (application) {
	console.log("Application ID: " + application.id);
	return searchAndOrderPhoneNumber("NC", application.id);
})
.catch(function (e) {
	console.error(e);
	throw e;
});



```

{% sample lang="csharp" %}

```csharp
//Download the .net sdk from ap.bandwidth.com/docs/helper-libraries/net

using System;
using System.Threading.Tasks;
using Bandwidth.Net;
using Bandwidth.Net.Api;

public class Program
{
  //API credentials which can be found on your account page at https://catapult.inetwork.com/pages/login.jsf
  private const string UserId = "{{userId}}"; //{user_id}
  private const string Token = "{{apiToken}}"; //{token}
  private const string Secret = "{{apiSecret}}"; //{secret}

  public static void Main()
  {
    try
    {
      RunAsync().Wait();
    }
    catch (Exception ex)
    {
      Console.Error.WriteLine(ex.Message);
      Environment.ExitCode = 1;
    }
  }

  private static async Task RunAsync()
  {
    var client = new Client(UserId, Token, Secret);

    var app = await client.Application.CreateAsync(new CreateApplicationData
    {
      Name = "MyFirstApp",
      IncomingCallUrl = "http://example.com/calls.php",
      IncomingMessageUrl = "http://example.com/messages.php",
      CallbackHttpMethod = CallbackHttpMethod.Post,
      AutoAnswer = true
    });

    await client.PhoneNumber.UpdateAsync("{numberId}", new UpdatePhoneNumberData {ApplicationId = app.Id});
  }
}
```
{% endmethod %}
