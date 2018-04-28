{% multimethod %}
{% endmultimethod %}

# How to Forward a Call {#top}

## About {#about}

Forward a call by bridging together an incoming phone call to an outgoing phone call. When an incoming call is initiated, meaning someone calls the Bandwidth phone number, the Bandwidth number makes an outgoing call to another number. These two calls are then bridged.

## Assumptions
* You have signed up for the [Bandwidth voice & messaging APIs](https://app.bandwidth.com)
* You are familiar with:
  * [Receiving incoming calls and messages](incomingCallandMessaging.md)
  * [Making outbound calls](playAudio.md)

## Steps
1. [Recieve Incoming Call](#incomingCall-and-answer)
2. [Make Outgoing Call](#outbound-call)
3. [Check Call is Active](#active)
4. [Bridge Calls](#bridge)

## Step 1 - Recieve Incoming Call {#incomingCall-and-answer}

There are two ways to setup your program to answer incoming calls. The first is by using the [Voice & Messaging Dashboard](https://app.bandwidth.com/login). In the Voice & Messaging Dashboard, create a new application with a callbackURL. Turn "automatically answer incoming calls" to on. Finally, add a Bandwidth number to the application. The second way is by setting up your [application to recieve incoming calls to a Bandwidth number](incomingCallandMessaging.md) with "autoAnswer" enabled. You will recieve two events back to back:

1. [`incomingCall`](http://dev.bandwidth.com/ap-docs/apiCallbacks/incomingCall.html)
2. [`answer`](http://dev.bandwidth.com/ap-docs/apiCallbacks/answer.html)

Your server should reply with any `HTTP 2xx` code to acknowledge that the callback event was delivered.  Anything returned in the response besides the status code is ignored by Bandwidth.

{% extendmethod %}

### Incoming Call Event Properties

| Property      | Description                                                                                                                                                  |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType     | The event type, value is incomingcall.                                                                                                                       |
| callId        | The call id associated with the event.                                                                                                                       |
| callUri       | The complete URL of the call resource for this event.                                                                                                        |
| from          | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to            | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| callState     | The state of the call, value is active.                                                                                                                      |
| applicationId | The id of the application associated with phone number for this this incoming call.                                                                          |
| time          | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |

{% common %}

### Example Incoming Call Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
   "eventType"     : "incomingcall",
   "from"          : "+13233326955",
   "to"            : "+13865245000",
   "callId"        : "{callId}",
   "callUri"       : "https://.../{userId}/calls/{callId}",
   "callState"     : "active",
   "applicationId" : "{appId}",
   "time"          : "2012-11-14T16:21:59.616Z"
}
```

{% endextendmethod %}

{% extendmethod %}

### Answer Event Properties

| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`.                                                                                                                           |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| callState | The call state. Value will be `active`.                                                                                                                      |
| callId    | The call id associated with the event.                                                                                                                       |
| callUri   | The full URL of the call resource for this event.                                                                                                            |
| tag       | String provided when call created.                                                                                                                           |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC).                                                                                    |

{% common %}

### Example Answer Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "eventType" : "answer",
  "from"      : "+15753222083",
  "to"        : "+13865245000",
  "callId"    : "{call-id}",
  "callUri"   : "https://.../{user-id}/calls/{call-id}",
  "callState" : "active",
  "time"      : "2012-11-14T16:28:31.536Z"
}
```

{% endextendmethod %}

## Step 2 - Make an outgoing call {#outbound-call}

Create an outbound call from your Bandwidth number to the number you would like to connect with. [Click here](http://dev.bandwidth.com/ap-docs/methods/calls/postCalls.html) to learn more about creating an outbound call.

{% extendmethod %}

### Create Call Parameters

| Property    | Description                            |
|:------------|:---------------------------------------|
| from | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like +19195551212). |
| to | The number to call (must be either an E.164 formatted number, like +19195551212, or a valid SIP URI, like sip:someone@somewhere.com).|
| callbackUrl | The full server URL where the call events related to the Call will be sent to.|

{% common %}

### Example of creating a call with callbackUrl

{% sample lang="http" %}

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"          : "{toNumber}",
    "from"        : "{fromNumber}",
    "callbackUrl" : "{callbackUrl}"
}
```

{% sample lang="js" %}

```js
//This assumes you have already input your credentials.
client.Call.create({
    from: "{toNumber}",
    to: "{fromNumber}",
    callbackUrl: "{callbackUrl}"
})
.then(function (id) {
    console.log(id);
})
```

{% sample lang="csharp" %}

```csharp
//This assumes you have already input your credentials.
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}"
    CallbackUrl = "{callbackUrl}"
});
Console.WriteLine($"Created call with id {call.Id}");
```

{% sample lang="ruby" %}

```ruby
## This assumes you have already input your credentials.
call = Bandwidth::Call.create({
   :from => "{fromNumber}",
   :to => "{toNumber}",
   :callbackUrl => "{requestUrl}"})

puts call.id
```

{% endextendmethod %}

## Step 3 - Check Call is Active {#active}
{% extendmethod %}

First, make sure both calls are active by getting their call information. The call state must be "active" in order to bridge the calls. To check the current state, use the `callInfo` method. The only parameter this method needs is the callId that was given in the Json response when the incoming call was answered and when the outbound call was created.

{% common %}
### Get Call Information

{% sample lang="http" %}

```http
Get https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}  HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}
```

{% sample lang="js" %}

```js
client.Call.get("{callId}")
.then(function (response) {
    console.log(respone);
});
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.GetAsync("{callId1}");
Console.WriteLine($"{call.From} - {call.To}");
```

{% sample lang="ruby" %}

```ruby
call = Call.get(client, "{callId1}")
to = call[:to]
```

{% endextendmethod %}

## Step 3 - Bridge Calls {#bridge}
{% extendmethod %}

Finally, use the bridge method to bridge together the two calls. To ensure two way communication, make sure bridge audio is true.

### Bridge Parameters

| Property    | Description                            |
|:------------|:---------------------------------------|
| bridgeAudio  | Enable/Disable two way audio path (default = true).|
| callIds |The list of call ids in the bridge. If the list of call ids is not provided the bridge is logically created and it can be used to place calls later.|

{% common %}

### Bridge Calls

{% sample lang="http" %}

```http
Get https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/bridges/  HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
"bridgeAudio": "true",
"callIds": ["{callId1}","{callId2}"]
}
```

{% sample lang="js" %}

```js
client.Bridge.create({
    bridgeAudio: true,
    callIds: ['c-qbs5kwrsyx6wsdi', 'c-zan4g74pprsq']
});
```

{% sample lang="csharp" %}

```csharp
var bridge = await client.Bridge.CreateAsync(new CreateBridgeData{
    BridgeAudio = true,
    CallIds = new[]{"c-qbsx6wsdi", "c-zan4g7prsq"}
});
```

{% sample lang="ruby" %}

```ruby
bridge = Bridge.create(client, {
    :bridge_audio => true,
    :call_ids => ["c-qbsx6wsdi", "c-zan4g7prsq"]
})
```

{% endextendmethod %}