{% method %}

# Simple Voicemail System

Logic: Your personal number creates an inbound call to Bandwidth(BW), which will automatically answer the call. Upon answering, a call is immediately created from the BWnumber to the toNumber. After a set call timeout (ie. 10sec) is reached, meaning there is no answer from the toNumber, a sentence is spoken.  After the sentence is spoken, recording is enabled and then disabled when the call is hung up. After the call is hung up, a transcription of the recording is rendered.

## Setup your [application](http://dev.bandwidth.com/ap-docs/methods/applications/applications.html)

1. Log in to your [Bandwidth Voice and Messaging API Dashboard](https://app.bandwidth.com) --> My Apps --> Create New.
2. Then add a Bandwidth phone number to the application

| Parameter                           | Value                 |
|:------------------------------------|:----------------------|
| Callback HTTP Method                | `POST`                |
| Application Type                    | `Voice`               |
| Voice Callback                      | `{Your callback URL}/in-call` |
| Automatically answer incoming calls | `True`                |


{% sample lang="js" %}

## Javascript Walkthrough

{% common %}
### Set the necessary dependencies and client credentials

{% sample lang="js" %}

```js
var Bandwidth = require("node-bandwidth");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);


var client = new Bandwidth({
    // uses my environment variables. Go to dev.bandwidth.com, look under Account -> API Information -> Credentials OR .zsrh file
    userId    : {BANDWIDTH_USER_ID}, // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : {BANDWIDTH_API_TOKEN},
    apiSecret : {BANDWIDTH_API_SECRET}
});
```

{% common %}

### Include required JSON parser, port, URL base, and port listener

{% sample lang="js" %}

```js

app.use(bodyParser.json());
//use a json body parser
app.set('port', (process.env.PORT || 4000));
//set port to an environment variable port or 4000

const getBaseUrlFromReq = (req) => {
    return 'http://' + req.hostname;
};

app.get("/", function (req, res) {
    console.log(req);
    res.send("Simple_Voicemail_System");
});

http.listen(app.get('port'), function(){
  console.log('listening on *: ' + app.get('port'));
});
```

{% common %}

### Choose intermediary 'BWNumber' and the 'toNumber' to call

{% sample lang="js" %}

```js
let toNumber = "+12345678901";

//----Bandwidth Number to call: {SELECTED BW NUMBER from App Set-Up}-----
```

{% common %}

### Logic if-else statements for the Outbound call from the BW number to the toNumber

{% sample lang="js" %}

```js
app.post('/out-call', function (req, res) {     //OUTBOUND CALLS
    var this_url2 = getBaseUrlFromReq(req);
    if (req.body.eventType === 'answer') {
        console.log("Incoming CallId: " + req.body.tag);
        console.log("Outgoing CallId: " + req.body.callId);
        console.log(req);
        client.Bridge.create({
          bridgeAudio: true,
            callIds : [req.body.tag, req.body.callId]
        })
        .then(function (bridge) {
            console.log("BridgeId: " + bridge.id);
            console.log("---Call has been bridged----");
        })
        .catch(function(err){
          console.log(err);
          console.log("----Could not bridge the call----");
        });
    }
  else if (req.body.eventType === "timeout"){
    console.log("Tag: " + req.body.tag)
    client.Call.speakSentence(req.body.tag, "You have reached {NAME/COMPANY}. Sorry we can't get to the phone right now, please leave your message after the beep.")
    .then(function(res){
      console.log("---Voicemail message spoken---");
    })
    .catch(function(err){
      console.log(err);
      console.log("Could not speak the voicemail intro sentence");
    })
  }
  else if (req.body.eventType === "hangup"){          //will automatically stop recording here
    console.log(req.body);
    console.log("----Your call has hungup----");
  }
    else{
      console.log(req.body);
    }
});
```

{% common %}

### Logic if-else statements for the Inbound call from your personal phone number to the BW number

{% sample lang="js" %}

```js
app.post('/in-call', function (req, res) {        //INBOUND CALLS
  if (req.body.eventType === "incomingcall"){
      console.log("Incoming callId: " + req.body.callId);
    var this_url1 = getBaseUrlFromReq(req);
    createCallWithCallback(req.body.to, this_url1, req.body.callId);
  }
  else if (req.body.eventType === "speak" && req.body.state === "PLAYBACK_STOP"){
    console.log("CallId for the recording: " + req.body.callId);
    client.Call.enableRecording(req.body.callId)
    .then(function (res) {
      console.log("---Recording has started----");
    })
    .catch(function(err){
      console.log(err);
      console.log("Could not record");
    });
  }
  else if (req.body.eventType === "recording" && req.body.state === "complete"){
    console.log("---The original inbound call has been hungup---");
    client.Recording.createTranscription(req.body.recordingId)
    .then(function(transcription){
      console.log("-----Transcribing-----");
    })
    .catch(function(err){
      console.log(err);
      console.log("Sorry, something went wrong with the transcription");
    });
  }
  else if (req.body.eventType === "transcription" && req.body.state === "completed"){
    console.log(req.body);
    console.log("Transcribed");
  }
  else{
    console.log(req.body);
  }
});
```

{% common %}

### Create call from BW number to toNumber

{% sample lang="js" %}

```js
var createCallWithCallback = function(FromBWnumber, this_url, tag){
    return client.Call.create({
    from: FromBWnumber,
        to: toNumber,
        callTimeout: 10,
        callbackUrl: this_url + '/out-call',
        tag: tag
    })
    .then(function (call) {
        console.log("Outgoing call Id: " + call.callId);
        console.log(call);
        console.log("----Outbound call has been created----");
    })
    .catch(function(err){
      console.log(err);
      console.log("---Outbound call could not be created---");
    })
};
```


{% endmethod %}