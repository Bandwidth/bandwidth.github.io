var Bandwidth = require("node-bandwidth");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);

//Bandwidth Credentials
var client = new Bandwidth({
    userId    : "u-axqs3dv6in72g4gfyxxcfhy",
    apiToken  : "t-wq4l4ckbp3eksnqx2dlz2ti",
    apiSecret : "uondfoamf4qdaf2heemwwtocncu2rp3u47b7t5a"
});

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

/*********** Make a Call ***********/
var numbers = {
    to: "+13035659555",         //number to send to
    from: "+17204407441" //Bandwidth number
};
var callbackUrl= "http://39736a69.ngrok.io/outbound-callbacks";

//Listener (sets root to listen after)
app.get("/", function (req, res) {
    console.log(req);
    res.send("Hi this is Sarah");
    //res.send(can be a website);
});
http.listen(app.get('port'), function(){
    //once done loadin then do this (callback)
    console.log('listening on *:' + app.get('port'));
});

var createCall = function(params, callbackUrl){
    console.log(callbackUrl);
    return client.Call.create({
        from: params.from,
        to: params.to,
        callbackUrl: callbackUrl
    })

};
app.post("/outbound-callbacks", function(req, res){
    var body = req.body;
    var sentence = "Hello from Bandwidth";
    console.log(body);
    if(checkIfAnswer(body.eventType)){
        speakSentenceInCall(body.callId, sentence)
        .then(function(response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    }
    else if(body.eventType === "hangup" && body.cause === "NO_ANSWER"){
      sendCall(body.to);
    }
    else if(isSpeakingDone(body)){
        client.Call.hangup(body.callId)
        .then(function(){
            console.log("Hangup call");
        })
        .catch(function(err){
            console.log("error in hanging up the call");
            console.log(err);
        });
    }

});
createCallWithCallback(numbers, callbackUrl);

//helper methods
var getBaseUrl = function (req) {
    return 'http://' + req.hostname;
};
var speakSentenceInCall = function(callID, sentence){
    return client.Call.speakSentence(callID, sentence);
}
var isSpeakingDone = function(callBackEvent){
    return (callBackEvent.eventType === "speak" && callBackEvent.state === "PLAYBACK_STOP");
}
var checkIfAnswer = function(eventType){
    return (eventType === "answer");
}
