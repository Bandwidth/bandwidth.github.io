# Node.js SDK

## Links

The Node.js SDK(s) are available via [NPM](https://www.npmjs.com/search?q=%40bandwidth) & GitHub.

| Links                                                                        | Description                                                                   | Github                                                                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [`@bandwidth/numbers`](https://www.npmjs.com/package/@bandwidth/numbers)     | Manage phone numbers and account settings                                     | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/node-numbers)                |
| [`@bandwidth/voice`](https://www.npmjs.com/package/@bandwidth/voice)       | Create outbound phone calls and manage call media (recordings/transcriptions) | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/node-voice)                  |
| [`@bandwidth/messaging`](https://www.npmjs.com/package/@bandwidth/messaging) | Create outbound messages and manage message media (MMS)                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/node-messaging)              |
| [`@bandwidth/mfa`](https://www.npmjs.com/package/@bandwidth/mfa)             | Create Multifactor Auth calls or messages                                     | [<img src="https://github.com/favicon.ico">](https://github.com/bandwidth/node-mfa)                    |
| [`@bandwidth/webrtc`](https://www.npmjs.com/package/@bandwidth/webrtc)       | Create and manage WebRTC Sessions                                             | N/A                                                                                                    |
| [Code Examples](https://github.com/search?q=topic%3Anodejs+org%3ABandwidth-Samples)    | NodeJS code examples                                                          | [<img src="https://github.com/favicon.ico">](https://github.com/search?q=topic%3Anodejs+org%3ABandwidth-Samples) |

## Release notes

### [Messaging](https://www.npmjs.com/package/@bandwidth/messaging)

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 3.0.0   | Updated to TypeScript and reduced model verbosity |
| 2.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |

### [Voice API](https://www.npmjs.com/package/@bandwidth/voice)

| Version | Notes                            |
|:--------|:---------------------------------|
| 1.2.0   | Added Conferencing API endpoints |
| 1.3.0 | Added conference detail endpoints |
| 1.4.0 | Added conference management endpoints |

### [Numbers](https://www.npmjs.com/package/@bandwidth/numbers)

| Version | Notes                                                                                                                                     |
|:--------|:------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1.0   | Added import tn functionality, added promise based `Async` functions                                                                      |
| 1.2.0   | Added CSR lookup functionality                                                                                                            |
| 1.2.1   | Fixed Subscription List functionality. Example code at: [examples/subscription_list_and_delete](examples/subscription_list_and_delete.js) |
| 1.2.2   | Readme Typo for `RemoveImportedTnOrder`                                                                                                   |

### [MFA](https://www.npmjs.com/package/@bandwidth/mfa)

| Version | Notes                                                  |
|:--------|:-------------------------------------------------------|
| 1.0.0   | First release                                          |
| 1.1.0   | Updated schema with digits and expirationTimeInMinutes |
| 2.0.0 | Removed `from` and `digits` from `TwoFactorVerifyRequestSchema` |

### [WebRTC](https://www.npmjs.com/package/@bandwidth/webrtc)

| Version | Notes                              |
|:--------|:-----------------------------------|
| 0.1.0   | Alpha release                      |
| 0.2.0   | Updated Permission schema          |
| 0.3.0   | Updated server to fix URL encoding |


## Download & Install

```bash
npm install @bandwidth/messaging
npm install @bandwidth/voice
```

## Create Phone Call

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthPassword: 'password',
    basicAuthUserName: 'username'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createCall(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    from: '+19999999999',
    to: '+18888888888',
    answerUrl: 'https://your-server.com/webhooks/answer',
    answerMethod: 'POST',
    callTimeout: 30
});

console.log(response);
```

## Generate BXML

```js
import { SpeakSentence, Response } from '@bandwidth/voice';

const speakSentence = new SpeakSentence({
    sentence: 'This is a spoken test.',
    locale: 'en_US'
    voice: 'susan',
    gender: 'female'
});

const response = new Response(speakSentence);

console.log(response.toBxml());
```

## Send Text Message

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
    basicAuthPassword: 'password',
    basicAuthUserName: 'username'
});

const controller = new ApiController(client);

const accountId = '1111111';

const response = await controller.createMessage(accountId, {
    applicationId: 'abc12345-6def-abc1-2345-6defabc12345',
    to: ['+19999999999'],
    from: '+18888888888',
    text: 'The quick brown fox jumps over the lazy dog.'
});

console.log(response);
```
