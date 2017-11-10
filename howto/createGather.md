{% method %}

# How to create a gather on an active call. 
## This gather collects a series of DTMF digits from a phone call with an optional prompt. This request returns immediately. When the gather finishes, an event with the results will be posted to the callback URL.

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.

```http
https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "maxDigits":"5",
    "terminatingDigits":"*",
    "interDigitTimeout":"7",
    "prompt": {
        "sentence": "Please enter your 5 digit code"
    }
}
```

### Response

```http
HTTP/1.1 201 CREATED
```

{% sample lang="js" %}

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.
```js
var options =     {
    "maxDigits":"5",
    "terminatingDigits":"*",
    "interDigitTimeout":"7",
    "prompt": {
        "sentence": "Please enter your 5 digit code"
    }
};
client.Call.createGather("callId", options).then(function(res) {});
```

{% sample lang="csharp" %}

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.
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

### Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.
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



