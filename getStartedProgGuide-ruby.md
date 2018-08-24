# Voice & Messaging Developer Guide
[.Net](../getStartedProgGuide.html) | [PHP](../getStartedProgGuide-php.html) | [Java](../getStartedProgGuide-java.html) | [Python](../getStartedProgGuide-python.html) | [Node-JS](../getStartedProgGuide-nodejs.html) | [Ruby](../getStartedProgGuide-ruby.html) 


### Core Concepts
#### REST Calls and Callbacks
Bandwidth's Voice & Messaging APIs use callbacks to communicate with the developer's servers hosting applications.  Callbacks are triggered by things like incoming calls, incoming messages, or other API calls that have a callback defined.  Understadning callbacks and how they work is a prerequisite to developing complex communications applications with Bandwidth's APIs.

![Callback Flow](https://dev.bandwidth.com/ap-docs/apiCallbacks/images/callback-events1.png)

*Guides*
* [Send SMS & MMS Guide](https://dev.bandwidth.com/howto/sendSMSMMS.html)
* [Receive Messages or Calls](https://dev.bandwidth.com/howto/incomingCallandMessaging.html) 
* [Building Blocks](https://dev.bandwidth.com/howto/howto.html) 
* [Rate Limits](https://dev.bandwidth.com/ap-docs/rateLimits.html) 

#### BXML for Voice Applications
Voice applications can be built using BXML (Bandwidth Extensible Markup Language).  BXML is incredibly powerful and easy to use.  For incoming calls, your application can form and serve BXML documents on the URL setup for voice callbacks.  For outgoing voice calls, a REST API is used to establish the call, then the callback will fetch the BXML from your application server.

![BXML Flow](https://dev.bandwidth.com/ap-docs/bxml/BXMLCallFlow.png)

*Guides*
* [BXML Overview](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html)
* [BXML Guide](https://dev.bandwidth.com/ap-docs/bxml/bxmlConcepts.html)
* [BXML Reference](https://dev.bandwidth.com/ap-docs/bxml/bxml.html)

### Step-by-Step Voice & Messaging Development
#### Development Environment and Authentication Setup 

*_The examples below use C# and Bandwidth's [.Net SDK](https://dev.bandwidth.com/clientLib/csharp.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left conatins links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Open your favorite .Net/C# IDE.  You can find a free one [here](https://visualstudio.microsoft.com/vs/community/).   
* Get the Bandwidth C# SDK (Available via NuGet or [here](https://dev.bandwidth.com/clientLib/csharp.html)) 
* Include necessary libraries.

```csharp
using System;
using System.Threading.Tasks;
using Bandwidth.Net;
using Bandwidth.Net.Api;
```

* Create a class and setup authentication constants.  NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.  

```csharp
public class Program
{
    private const string UserId = "u-userID"; // user_id 
    private const string Token = "t-token"; // token 
    private const string Secret = "secret"; // secret 
}
```

### Send and Receive Text Messages using .Net

* Create a method that instatiates a new Client object and uses the SendAsync method to send a message.

```csharp
    private static async Task RunAsync()
    {
        var client = new Client(UserId, Token, Secret);

        var sms = await client.Message.SendAsync(new MessageData
        {
            From = "+19195551212", // Your Bandwidth number
            To = "+19195551234",
            Text = "Hello World"
        });
    }
```

* Create a Main method that calls the RunAsync method and waits for a response.

```csharp
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
```

* Run the program and it should send the "Hello World" message to the nuber specified.  Complete code:

```csharp
using System;
using System.Threading.Tasks;
using Bandwidth.Net;
using Bandwidth.Net.Api;

public class Program
{
  private const string UserId = "u-userID"; // user_id
  private const string Token = "t-token"; // token
  private const string Secret = "secret"; // secret

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

    var sms = await client.Message.SendAsync(new MessageData
    {
      From = "+19195551212", // Your Bandwidth number
      To = "+19195551214",
      Text = "Hello World"
    });
  }
}
```

### Create a Call and Play Some Audio

* To create a voice call, use the code framework we put together for sending a message, but change the RunAsync method to look like this:

```csharp
private static async Task RunAsync()
{
  var client = new Client(UserId, Token, Secret);

  var callId = await client.Call.CreateAsync(new CreateCallData {
      From = "+12345678901", // Your Bandwidth number
      To   = "+12345678902"
  });
}
```

* Now add code to play a message then hangup using the call id and status of the voice call.

```csharp
private static async Task RunAsync()
{
    // Instantiate Bandwidth Client Object
    var client = new Client(UserId, Token, Secret);
    
    // Create a call
    var callId = await client.Call.CreateAsync(new CreateCallData
    {
        From = "+11234567890", // Your Bandwidth number
        To = "+11234567899" // Your mobile number for example
    });

    // Now that we have a call, let's check the call state every 
    // two seconds and play a message when the call is answered
    Call call;

    do
    {
        //Pause execution for 2 seconds
        System.Threading.Thread.Sleep(2000);

        //Get the call info
        call = await client.Call.GetAsync(callId);

        //Check call for active state (call answered)
        if (call.State == CallState.Active)
        {
            // Play some text to speech
            await client.Call.SpeakSentenceAsync(
                     callId,
                     "Hello From Bandwidth. Goodbye."
                  );

            //Pause execution so we don't hang up while speaking
            System.Threading.Thread.Sleep(3000);

            //Hangup
            await client.Call.HangupAsync(
                     callId
                  );
        }
        // Repeat until call state is a hangup or error state 
    } while (call.State != CallState.Completed &&
             call.State != CallState.Error     &&
             call.State != CallState.Rejected
            );
}
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in Step 2 above and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```csharp
// In ASP.Net action
var callbackEvent = await Request.Content.ReadAsCallbackEventAsync();

// anywhere
var callbackEvent = await content.ReadAsCallbackEventAsync(); 

// SMS callback looks like this:
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
 "eventType"     : "sms",
 "direction"     : "in",
 "messageId"     : "{messageId}",
 "messageUri"    : "https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}",
 "from"          : "+19195551214",
 "to"            : "+19195551212",
 "text"          : "Hello World",
 "applicationId" : "{appId}",
 "time"          : "2012-11-14T16:13:06.076Z",
 "state"         : "received"
}
```

### Play a Message on an Incoming Call using [BXML](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html)

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  There are two options for creating and serving BXML to Bandwidth.  The first option is to use an SDK, such as the Bandwidth C# SDK, to form BXML documents.  The second option is to build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._* 

* Using C# SDK

```csharp
using Bandwidth.Net.XmlV2.Verbs;
using Bandwidth.Net.Xml;

var response = new Response(new SpeakSentence{
    Gender = "female",
    Locale = "en_US",
    Sentence = "Hello from Bandwidth",
    Voice = "susan"
});

var xml = response.ToXml();
```

* The above code creates a document that looks like:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence voice="susan" locale="en_US" gender="female">
Hello from Bandwidth.
</SpeakSentence>

</Response>
```
