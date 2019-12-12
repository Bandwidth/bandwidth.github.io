# Node.JS SDK

### Download & Install

npm install @bandwidth/messaging

### Initialize Bandwidth Client

```js
const BandwidthMessaging = require('@bandwidth/messaging');
BandwidthMessaging.Configuration.basicAuthUserName = "token";
BandwidthMessaging.Configuration.basicAuthPassword = "secret";
```

### Create Phone Call

```js
const foo = new bar();
```

### Generate BXML

```js
const foo = new bar();
```

### Send Text Message

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId": applicationId ,
    "to": ["+19999999999"],
    "from": "+18888888888",
    "text": "The quick brown fox jumps over a lazy dog."
});

controller.createMessage(msgUserId, body, function(error, response, context) {
    console.log(response);
});
```

### Order Phone Number

```js
const foo = new bar();
```
