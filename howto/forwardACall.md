{% method %}
# How to Forward a Call

Logic: Forwards a call by bridging together an incoming phone call to an outgoing phone call.
When an incoming call is initiated, meaning someone calls the BW phone number,
the BW number makes an outgoing call to another number.
These two calls then get bridged to connect the callers on the other side of the BW number.

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


// Go to dev.bandwidth.com, look under Account -> API Information -> Credentials OR .zsrh file
var client = new Bandwidth({
    userId    : process.env.BANDWIDTH_USER_ID,
    apiToken  : process.env.BANDWIDTH_API_TOKEN,
    apiSecret : process.env.BANDWIDTH_API_SECRET
});
```

{% common %}

### Include required JSON parser, port, URL base, and port listener

{% sample lang="js" %}

```js
//REQUIRED CODE
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));
http.listen(app.get('port'), function(){
    console.log('listening on *: ' + app.get('port'));
});

const getBaseUrlFromReq = (req) => {
    return 'http://' + req.hostname;
};
app.get("/", function (req, res) {
    console.log(req);
    res.send("Bandwdith_Forward_A_Call");
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
//OUTBOUND CALLS
app.post('/out-call', function (req, res) {
    var this_url2 = getBaseUrlFromReq(req);
    if (req.body.eventType === 'answer') {					//Upon the to-caller answering, bridge the two calls
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
    else if (req.body.eventType === "hangup"){
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
//INBOUND CALLS
app.post('/in-call', function (req, res) {     		//When someone calls the BW number, create call to the to-caller
    if (req.body.eventType === "incomingcall"){
        console.log("Incoming callId: " + req.body.callId);
        var this_url1 = getBaseUrlFromReq(req);
        createCallWithCallback(req.body.to, this_url1, req.body.callId);
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
//Method to create outbound call with '/out-call' callback url, tag used to store inbound callId
var createCallWithCallback = function(FromBWnumber, this_url, inbound_callid){
    return client.Call.create({
        from: FromBWnumber,
        to: toNumber,
        callbackUrl: this_url + '/out-call',
        tag: inbound_callid
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

