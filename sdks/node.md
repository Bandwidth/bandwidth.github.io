# Node.JS SDK

### Download & Install

npm install @bandwidth/messaging

### Initialize Bandwidth Client

```js
const BandwidthMessaging = require('@bandwidth/messaging');
BandwidthMessaging.Configuration.basicAuthUserName = "token";
BandwidthMessaging.Configuration.basicAuthPassword = "secret";
var messagingController = BandwidthMessaging.APIController;
```

### Create Phone Call

```js
//coming soon
```

### Generate BXML

```js
//coming soon
```

### Send Text Message

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId": applicationId ,
    "to": ["+19999999999"],
    "from": "+18888888888",
    "text": "The quick brown fox jumps over a lazy dog."
});

var response = await messagingController.createMessage(msgUserId, body);
console.log(response);
```

### Order Phone Number

```js
//coming soon
```
