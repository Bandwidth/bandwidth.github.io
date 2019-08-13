{% method %}
## Send SMS/MMS with Delivery Receipts
Delivery Receipts (DLR) add two new states to the messaging lifecyle – delivered and not delivered. When a message is sent, it is sent by the SMPP gateway to the SMSC with the delivery receipt value set. The SMSC will return the final disposition of the message as determined by the carrier. Values returned include the following:

| **Error Code** | **SMSC Description**                   | **Bandwidth API Description**                 |
|:---------------|:---------------------------------------|:----------------------------------------------|
| 0              | Message Delivered to Carrier           | Message delivered to carrier                  |
| 187            | Spam Detected – Statistical            | Statistical spam detected                     |
| 188            | Spam Detected -Keyword                 | Keyword spam detected                         |
| 189            | Spam Detected                          | Spam detected                                 |
| 482            | Loop Detected                          | Loop detected                                 |
| 600            | Destination Carrier Queue Full         | Destination carrier could not accept messages |
| 610            | submit\_sm or submit\_multi failed     | Message submission failed                     |
| 620            | Destination App Error                  | Destination application error                 |
| 630            | NACK                                   | Message not acknowledge                       |
| 650            | Destination Failure                    | Destination Failure                           |
| 700            | Invalid Service Type                   | Invalid service type                          |
| 720            | Invalid Destination Address            | Invalid destination number                    |
| 740            | Invalid Source Address                 | Invalid source number                         |
| 750            | Destination Rejected Message           | Destination Rejected Message                  |
| 751            | Destination Rejected Message too large | Destination Rejected Message too large        |
| 770            | Destination Rejected due to spam       | Destination Rejected due to spam              |
| 775            | Rejected due to user opt out           | Rejected due to user opt out                  |
| 902            | Message Expired                        | Message Expired                               |
| 999            | Unknown Error                          | Unknown error                                 |

The app platform will send a new event on delivery receipt based on the value of the new messages parameter, receiptRequested. The event will initially only be delivered on failure, but will, eventually allow an event for every receipt on every message.

### Messages Resource
| **Property**         | **Type**        | **Description**                                                                                                                                                                                                                                                                                                                                     | **Default** | **Values**      |
|:---------------------|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|:----------------|
| receiptRequested     | string (1 – 16) | Controls how delivery receipt events are delivered. The default value, no, will result in no delivery receipt events being generated. The value of yes will result in delivery receipts on  failure, e.g. if the message is not delivered by the stage carrier. The value of all results in an per message, when the delivery receipts is available | no          | none,all, error |
| State                |                 | Remains unchanged                                                                                                                                                                                                                                                                                                                                   |             |                 |
| Delivery State       |                 | Delivered/Not-Delivered                                                                                                                                                                                                                                                                                                                             |             |                 |
| Delivery Code        |                 |                                                                                                                                                                                                                                                                                                                                                     |             |                 |
| Delivery Description |                 |                                                                                                                                                                                                                                                                                                                                                     |             |                 |

{% common %}
### Example: Send SMS with delivery receipt

{% sample lang="shell" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
    -d \
  '
  {
    "to": "+18284467788",
    "from": "+19197124466",
    "text": "Watch out for the construction on I-25 and Hwy 52",
    "receiptRequested" : "all",
    "callbackUrl" : "http://yourserver.com/message/dlr"
  }'
```

{% sample lang="js" %}

```js
//NodeJS

var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
    userId    : "YOUR_USER_ID",
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});
var message = {
  from: "+19195551212",  // <-- This must be a Bandwidth number on your account
  to: "+191955512142",
  text: "Hello World",
  receiptRequested: "all",
  callbackUrl: "http://requestb.in",
  tag: Date.now().toString()
};

//Use Promises
client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});

```

{% sample lang="csharp" %}

```csharp
using System;
using System.Threading.Tasks;
using Bandwidth.Net;
using Bandwidth.Net.Api;

public class Program
{
  //API credentials which can be found on your account page at https://catapult.inetwork.com/pages/login.jsf
  private const string UserId = "u-userID"; //{user_id}
  private const string Token = "t-token"; //{token}
  private const string Secret = "secret"; //{secret}

  public static void Main()
  {
    try
    {
      RunAsync().Wait();
    }
    catch (Exception ex)
    {
      Console.Error.WriteLine(ex.Message);
      Environment.ExitCode = 1;
    }
  }

  private static async Task RunAsync()
  {
    var client = new Client(UserId, Token, Secret);

    await client.Message.SendAsync(new MessageData
    {
      From = "+19195551212",
      To = "+191955512142",
      Text = "Test",
      ReceiptRequested = MessageReceiptRequested.All,
      CallbackUrl = "http://requestb.in"
    });

  }
}
```

{% common %}

Callback events will be sent on each state transition.

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
  "eventType":"sms",
  "direction":"out",
  "messageId": "m-kv54fk7x66fakdnb5owdk4y",
  "messageUri": "https://api.../<userId>/messages/m-absd",
  "from":"+13233326955",
  "to":"+13865245000",
  "text":"Example",
  "applicationId":"a-25nh2lj6qrxznkfu4b732jy",
  "time":"2012-11-14T16:13:06.076Z",
  "state":"not-delivered",
  "errorcode": "720",
  "error":"Invalid Service Type"
}
```


{% endmethod %}
