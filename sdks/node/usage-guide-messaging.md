# Usage and Migration Guide for Node.js Messaging 3.x, 4.x

Bandwidth's Node.js Messaging SDK has seen significant changes when moving from 2.x to 3.x, 4.x. Outlined below are a number of common scenarios where you'll see changes.

---

## Client Initialization

### 3.x, 4.x

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
    basicAuthPassword: 'password',
    basicAuthUserName: 'username'
});

const controller = new ApiController(client);
```

### 2.x

```js
const BandwidthMessaging = require('@bandwidth/messaging');
BandwidthMessaging.Configuration.basicAuthUserName = "username";
BandwidthMessaging.Configuration.basicAuthPassword = "password";
const controller = BandwidthMessaging.APIController;
```

---

## Send Text Message

### 3.x, 4.x

```js
const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.'
});
```

### 2.x

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId" : "abc12345-6def-abc1-2345-6defabc12345",
    "to"            : ["+19999999999"],
    "from"          : "+18888888888",
    "text"          : "The quick brown fox jumps over the lazy dog."
});

const accountId = "1111111";

var response = await controller.createMessage(accountId, body);
```
