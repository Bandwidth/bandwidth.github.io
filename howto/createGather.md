{% method %}

# How to create a gather on an active call.

This gather collects a series of DTMF digits from a phone call with an optional prompt. This request returns immediately. When the gather finishes, an event with the results will be posted to the callback URL.

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "maxDigits"         : "5",
    "terminatingDigits" : "*",
    "interDigitTimeout" : "7",
    "prompt"            : {
        "sentence" : "Please enter your 5 digit code"
    }
}
```

### Response

```http
HTTP/1.1 201 CREATED
```

### This sends these call backs
* [Full callbacks](http://dev.bandwidth.com/ap-docs/apiCallbacks/gather.html)

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "eventType" : "gather",
    "reason"    : "max-digits",
    "state"     : "completed",
    "digits"    : "25",
    "time"      : "2014-07-31T01:01:27Z",
    "callId"    : "{callId}",
    "gatherId"  : "{gatherId}",
    "tag"       : "{tag}"
}
```

{% common %}

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.

{% sample lang="js" %}

```js
var options =     {
    "maxDigits"         : "5",
    "terminatingDigits" : "*",
    "interDigitTimeout" : "7",
    "prompt"            : {
        "sentence" : "Please enter your 5 digit code"
    }
};
client.Call.createGather("callId", options).then(function(res) {});
```

{% sample lang="csharp" %}

```csharp
var gather = await client.Call.CreateGatherAsync("{callId1}", new CreateGatherData {
    MaxDigits = "5",
    TerminatingDigits = "*",
    InterDigitTimeout = "7",
    Prompt = new GatherPrompt {
        Sentence = "Please enter your 5 digit code"
    }
});
```

{% sample lang="ruby" %}

```ruby
gather = call.create_gather({
    :max_digits => "5",
    :terminating_digits => "*",
    :inter_digit_timeout => "7",
    :prompt =>  {
        :sentence => "Please enter your 5 digit code"
    }
})
```

{% endmethod %}



