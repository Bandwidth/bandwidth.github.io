# Node.JS SDK

## Release notes

### Messaging

https://www.npmjs.com/package/@bandwidth/messaging

| Version | Notes |
|--|--|
| 2.0.0 | Removed all messaging exceptions and normalized them under `MessagingException` |

### Voice API

https://www.npmjs.com/package/@bandwidth/voice

| Version | Notes |
|--|--|
| 1.2.0 | Added Conferencing API endpoints |

### BXML

https://www.npmjs.com/package/@bandwidth/bxml

| Version | Notes |
|--|--|
| 2.0.0 | Renamed `toXml()` to `toBxml()` |
| 2.1.0 | Added support for Record verb, and SSML in SpeakSentence |
| 2.2.0 | Added StartRecording, PauseRecording, ResumeRecording, and StopRecording verbs |
| 2.3.0 | Added support for transcriptions to Record and StartRecording verbs |
| 2.3.1 | Fixed startRecording init |
| 2.4.0 | Added transferDisconnectUrl and transferDisconnectMethod to PhoneNumber |
| 2.5.0 | Updated Pause (changed code comment to floats instead of ints), SendDtmf (added toneInterval and toneDuration attributes), and Record (added silenceTimeout attribute) verbs |
| 2.6.0 | Multiple nested verbs with Gather verb |
| 2.7.0 | Added Conferencing BXML |


### Numbers

https://www.npmjs.com/package/@bandwidth/numbers

| Version | Notes |
|--|--|
| 1.1.0   | Added import tn functionality, added promise based `Async` functions                                                                      |
| 1.2.0   | Added CSR lookup functionality                                                                                                            |
| 1.2.1   | Fixed Subscription List functionality. Example code at: [examples/subscription_list_and_delete](examples/subscription_list_and_delete.js) |
| 1.2.2   | Readme Typo for `RemoveImportedTnOrder`                                                                                                   |

### MFA

https://www.npmjs.com/package/@bandwidth/mfa

| Version | Notes |
|--|--|
| 1.0.0 | First release |

### WebRTC

https://www.npmjs.com/package/@bandwidth/webrtc

| Version | Notes |
|--|--|
| 0.1.0 | Alpha release |

## Links 

[Github Voice](https://github.com/Bandwidth/node-voice)
<br/>
[Github Messaging](https://github.com/Bandwidth/node-messaging)
<br/>
[Github Numbers](https://github.com/Bandwidth/node-numbers)

[NPM Voice](https://www.npmjs.com/package/@bandwidth/voice)
<br/>
[NPM Messaging](https://www.npmjs.com/package/@bandwidth/messaging)
<br/>
[NPM Numbers](https://www.npmjs.com/package/@bandwidth/numbers)

[Code Examples](https://github.com/Bandwidth/examples/tree/master/nodejs)

## Download & Install

```bash
npm install @bandwidth/messaging
npm install @bandwidth/voice
npm install @bandwidth/bxml
```

## Initialize Bandwidth Client

```js
const BandwidthMessaging = require('@bandwidth/messaging');
BandwidthMessaging.Configuration.basicAuthUserName = "token";
BandwidthMessaging.Configuration.basicAuthPassword = "secret";
const messagingController = BandwidthMessaging.APIController;

const BandwidthVoice = require('@bandwidth/voice');
BandwidthVoice.Configuration.basicAuthUserName = "username";
BandwidthVoice.Configuration.basicAuthPassword = "password";
const voiceController = BandwidthVoice.APIController;

const BandwidthBxml = require('@bandwidth/bxml');
```

## Create Phone Call

```js
var body = new BandwidthVoice.ApiCreateCallRequest({
    "from"          : "+19999999999",
    "to"            : "+18888888888",
    "applicationId" : "123",
    "answerUrl"     : "https://test.com",
    "answerMethod"  : "POST",
    "callTimeout"   : 30
});
var response = await voiceController.createCall(accountId, body);
console.log(response);
```

## Generate BXML

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("test");
speakSentence.setVoice("susan");
speakSentence.setGender("female");
speakSentence.setLocale("en_US");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);

console.log(response.toBxml());
```

## Send Text Message

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId" : applicationId ,
    "to"            : ["+19999999999"],
    "from"          : "+18888888888",
    "text"          : "The quick brown fox jumps over a lazy dog."
});

var response = await messagingController.createMessage(msgUserId, body);
console.log(response);
```

## Order Phone Number

```js
//coming soon
```
