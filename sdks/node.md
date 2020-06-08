# Node.JS SDK

## Release notes

### Messaging

| Version | Notes |
|--|--|
| 2.0.0 | Removed all messaging exceptions and normalized them under `MessagingException` |

### Voice

| Version | Notes |
|--|--|

### BXML

| Version | Notes |
|--|--|
| 2.6.0 | Added support for multi nested verbs in Gathers |

### Numbers

| Version | Notes |
|--|--|

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
