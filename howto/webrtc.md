# JSSIP with Bandwidth Voice API

## Prerequisites

- Register for a Bandwidth Voice API account [here](https://catapult.inetwork.com)
- Register a SIP domain (domain name should be in low case !!!)
- Create an endpoint/user
- If you want to make calls to the PSTN (normal phones) you will need a server to handler events from Catapult
- Make phone calls

For a more in depth guide, view [this article](sip.md)

## Quick Start with JsSip
Full Documentation is located at [JsSip's site](http://jssip.net/documentation/3.0.x/)


CDN hosted library:

* [minified](https://cdnjs.cloudflare.com/ajax/libs/jssip/3.0.0/jssip.min.js)
* [not-minified](https://cdnjs.cloudflare.com/ajax/libs/jssip/3.0.0/jssip.js)


## Live Demo (once server has been configured)

[JSFIDDLE Demo Client](https://jsfiddle.net/msqenm70/35/)

### Supported Browsers
* Firefox
* Chrome
* Other Chromium-based browsers

### Outbound Call
```javascript
var callOptions = {
  mediaConstraints: {
    audio: true, // only audio calls
    video: false
  }
};

var socket = new JsSIP.WebSocketInterface('wss://webrtc.registration.bandwidth.com:10443');

var bwPhone = new JsSIP.UA({
  'uri': 'sip:sip-user@your-domain.bwapp.bwsip.io',
  'password': 'password',
  'sockets': [socket]
});

bwPhone.start();

bwPhone.on("registered", function(){
    bwPhone.call("222-333-4444", callOptions);
});

bwPhone.on("newRTCSession", function(data){
    var session = data.session; // outgoing call session here
    session.on("confirmed",function(){
        //the call has connected, and audio is playing
    });
    session.on("ended",function(){
        //the call has ended
    });
    session.on("failed",function(){
        // unable to establish the call
    });

    session.on('peerconnection', function(data) {
      data.peerconnection.addEventListener('addstream', function(e){
        // handle remote audio stream here like
        // remoteAudio.src = window.URL.createObjectURL(e.stream);
      });
    });

    //play a DTMF tone
    session.sendDTMF("1");
    session.sendDTMF("#");

    //mute call
    session.mute({audio: true});

    //unmute call
    session.unmute({audio: true});

    //to hangup the call
    session.terminate();

});

```

###Inbound Call

```javascript
var socket = new JsSIP.WebSocketInterface('wss://webrtc.registration.bandwidth.com:10443');

var callOptions = {
  mediaConstraints: {
    audio: true, // only audio calls
    video: false
  }
};

var bwPhone = new JsSIP.UA({
  'uri': 'sip:sip-user@your-domain.bwapp.bwsip.io',
  'password': 'password',
  'sockets': [socket]
});
bwPhone.start();

bwPhone.on("newRTCSession", function(data){
    var session = data.session;
    session.on('peerconnection', function(data) {
      data.peerconnection.addEventListener('addstream', function(e){
        // handle remote audio stream here like
        // remoteAudio.src = window.URL.createObjectURL(e.stream);
      });
    });

    if (session.direction === "incoming") {
        // incoming call here
        session.on("accepted",function(){
            //the call has answered
        });
        session.on("ended",function(){
            //the call has ended
        });
        session.on("failed",function(){
            // unable to establish the call
        });

        // Answer call
        session.answer(callOptions);

        // Reject call (or hang up it)
        session.terminate();
    }
});
```

### Passwordless connection (via auth token)
```javascript
var socket = new JsSIP.WebSocketInterface('wss://webrtc.registration.bandwidth.com:10443');

var authToken = "1234567890"; // you can get this token by POST /v1/users/<userId>/domains/<domainId>/endpoints/<endpointId>/tokens

var authHeader = "X-Callsign-Token: " + authToken;

var callOptions = {
  extraHeaders: [authHeader], // set auth token here (it will be passed on making calls and answering incoming call)
  mediaConstraints: {
    audio: true, // only audio calls
    video: false
  }
};

var bwPhone = new JsSIP.UA({
  'uri': 'sip:sip-user@your-domain.bwapp.bwsip.io',
  'sockets': [socket],
   'register': false // don't register automatically on start()
});
bwPhone.registrator().setExtraHeaders([authHeader]); // set auth header on register
bwPhone.start();
bwPhone.on('connected', function(){
    // connected to websocket
    bwPhone.register(); // connect to SIP server
});

bwPhone.on('registered', function(){
     // ready to make calls and receive incoming calls
     // making a call
     bwPhone.call("222-333-4444", callOptions);
});

bwPhone.on("newRTCSession", function(data){
    var session = data.session;

    if (session.direction === "incoming") {
        // answer incoming call
        session.answer(callOptions);
    }
});
```

Warning: `JSIP.RTCSession.sendDTMF` doesn't work with Catapult server right. A solution to avoid that is using own function

```js
session.on('confirmed',function(){
    var localStream = session.connection.getLocalStreams()[0];
    var dtmfSender = session.connection.createDTMFSender(localStream.getAudioTracks()[0])
    // redefine sendDTMF with own one (which will work with Catapult right)
    session.sendDTMF = function(tone){
      dtmfSender.insertDTMF(tone);
    };
  });
```
