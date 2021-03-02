# Usage and Migration Guide for Node.js Messaging 3.x

Bandwidth's Node.js Messaging SDK has seen significant changes when moving from 2.x to 3.x. Outlined below are a number of common scenarios where you'll see changes.

---

## Client Initialization

### 3.x

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

### 3.x

```js
const response = await controller.createMessage('user-id-123', {
    applicationId: 'app-id-123',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.'
});
```

### 2.x

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId" : "app-id-123",
    "to"            : ["+19999999999"],
    "from"          : "+18888888888",
    "text"          : "The quick brown fox jumps over the lazy dog."
});

var response = await controller.createMessage("user-id-123", body);
```