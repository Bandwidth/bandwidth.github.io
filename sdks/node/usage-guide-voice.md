# Usage and Migration Guide for Node.js Voice 2.x

Bandwidth's Node.js Voice SDK has seen significant changes when moving from 1.x to 2.x. Outlined below are a number of common scenarios where you'll see changes.

---

## Client Initialization

### 2.x

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthPassword: 'password',
    basicAuthUserName: 'username'
});

const controller = new ApiController(client);
```

### 1.x

```js
const BandwidthVoice = require('@bandwidth/voice');
BandwidthVoice.Configuration.basicAuthUserName = "username";
BandwidthVoice.Configuration.basicAuthPassword = "password";
const controller = BandwidthVoice.APIController;

const BandwidthBxml = require('@bandwidth/bxml');
```

---

## Create Phone Call

### 2.x

```js
const accountId = '1111111';

const response = await controller.createCall(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    from: '+19999999999',
    to: '+18888888888',
    answerUrl: 'https://your-server.com/webhooks/answer',
    answerMethod: 'POST',
    callTimeout: 30
});
```

### 1.x

```js
var body = new BandwidthVoice.ApiCreateCallRequest({
    "from"          : "+19999999999",
    "to"            : "+18888888888",
    "applicationId" : "abc12345-6def-abc1-2345-6defabc12345",
    "answerUrl"     : "https://your-server.com/webhooks/answer",
    "answerMethod"  : "POST",
    "callTimeout"   : 30
});
const accountId = "1111111";
var response = await controller.createCall(accountId, body);
```

---

## Generate BXML

### 2.x

```js
import { SpeakSentence, Response } from '@bandwidth/voice';

const speakSentence = new SpeakSentence({
    sentence: 'This is a spoken test.',
    locale: 'en_US'
    voice: 'susan',
    gender: 'female'
});

const response = new Response(speakSentence);
```

### 1.x

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("This is a spoken test.");
speakSentence.setVoice("susan");
speakSentence.setGender("female");
speakSentence.setLocale("en_US");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
```