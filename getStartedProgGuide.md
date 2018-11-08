{% method %}

# Voice & Messaging Developer Guide

### Core Concepts
#### REST Calls and Callbacks
Bandwidth's Voice & Messaging APIs use callbacks to communicate with the developer's servers hosting applications.  Callbacks are triggered by things like incoming calls, incoming messages, or other API calls that have a callback defined.  Understanding callbacks and how they work is a prerequisite to developing complex communications applications with Bandwidth's APIs.

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

{% sample lang="csharp" %}

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

{% sample lang="python" %}

*_The examples below use Python and Bandwidth's [Python SDK](https://dev.bandwidth.com/clientLib/python.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left conatins links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Install the Bandwidth Python SDK with the following command

```
pip install bandwidth-sdk
```

* Import the client in your code

```python
import bandwidth # Import the entire client

from bandwidth import messaging, voice, account # Import each client individually
```

* Initialize your desired API clients.  NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.

```python
# Importing the entire client
import bandwidth

voice_api = bandwidth.client('voice', 'u-user', 't-token', 's-secret')
messaging_api = bandwidth.client('messaging', 'u-user', 't-token', 's-secret')
account_api = bandwidth.client('account', 'u-user', 't-token', 's-secret')

# Importing each client individually
from bandwidth import messaging, voice, account

messaging_api = messaging.Client('u-user', 't-token', 's-secret')
voice_api = voice.Client('u-user', 't-token', 's-secret')
account_api = account.Client('u-user', 't-token', 's-secret')
```

* This guide uses the method of importing the entire client, but both methods are equivalent and can be interchanged.

### Send and Receive Text Messages using Python

* Create a method that instatiates a messaging api client object and uses the send_message method to send a message.

```python
import bandwidth

messaging_api = bandwidth.client('messaging', 'u-user', 't-token', 's-secret')
messaging_api.send_message(from_ = "+19195551212", # Your Bandwidth number
                           to = "+19195551234",
                           text = "Hello World")
```

* Run the program and it should send the "Hello World" message to the number specified.

### Create a Call and Play Some Audio

* To create a voice call, use the code framework we put together for sending a message, but instead we use the voice client and the create_call method:

```python
import bandwidth

voice_api = bandwidth.client('voice', 'u-user', 't-token', 's-secret')
voice_api.create_call(from_ = '+1234567890', # Your Bandwidth number
                      to = '+1234567891')
```

* Now add code to play a message then hangup using the call id and status of the voice call.

```python
import bandwidth
import time

voice_api = bandwidth.client('voice', 'u-user', 't-token', 's-secret')
call_id = voice_api.create_call(from_ = '+1234567890', # Your Bandwidth number
                                to = '+1234567891')
voice_api.play_audio_to_call(call_id, sentence="Hello From Bandwidth. Goodbye.")
time.sleep(5) # Necessary to make sure the sentence is spoken before hanging up
voice_api.hangup_call(call_id)
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in Step 2 above and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback using Flask and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```python
"""
SMS callback looks like this:
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
"""
from flask import Flask, request
app = Flask(__name__)
@app.route('/your_url', methods=["POST"])
def callback():
    data = request.data
    print(data)
```

### Play a Message on an Incoming Call using [BXML](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html)

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  There are two options for creating and serving BXML to Bandwidth.  The first option is to use an SDK, such as the Bandwidth C# SDK, to form BXML documents.  The second option is to build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._*

* Using Python SDK

```python
from bandwidth.voice.bxml import Response
from lxml.builder import E

response = Response(E.Call({
    "gender":"female",
    "locale":"en_US",
    "sentence":"Hello from Bandwidth",
    "voice":"susan"
}))

print(response.to_xml())
```

* The above code will print the following statement:

```xml
b'<xml><Response><Call gender="female" locale="en_US" sentence="Hello from Bandwidth" voice="susan"/></Response></xml>'
```

{% sample lang="java" %}

*_The examples below use Java and Bandwidth's [Java SDK](https://dev.bandwidth.com/clientLib/java.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left contains links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Open your favorite Java IDE.  You can find a free one [here](https://eclipse.org).
* Get the Bandwidth Java SDK (Available via Maven or [here](https://dev.bandwidth.com/clientLib/java.html)).
* Include necessary packages.

```java
package com.bandwidth.sdk.examples;
import com.bandwidth.sdk.model.*;
import com.bandwidth.sdk.model.events.*;
```

* Create a class and setup authentication.  NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.

```java
public class BandwidthExample {
  public static void main(final String[]args) {

          // First test if the creds are set via environment args
          String userId = System.getenv().get("BANDWIDTH_USER_ID");
          String apiToken = System.getenv().get("BANDWIDTH_API_TOKEN");
          String apiSecret = System.getenv().get("BANDWIDTH_API_SECRET");

          try {
              final Account account = Account.get();

              System.out.println("Environment Vars:");
              System.out.println(account.getAccountInfo());
          }
          catch(final Exception e) {
              e.printStackTrace();
          }
  }
}

```

### Send and Receive Text Messages using Java

* Create a Message object and call the create method to send a message.

```java
public class TextMessageExample {
  /**
   * @param args the args.
   */
  public static void main(final String[] args) {
    // There are two ways to set your creds, e.g. your App Platform userId, api token and api secret
    // you can set these as environment variables or set them with the
    // BandwidthClient.getInstance().setCredentials(userId, apiToken, apiSecret) method.
    //
    // Use the setenv.sh script to set the env variables
    // BANDWIDTH_USER_ID
    // BANDWIDTH_API_TOKEN
    // BANDWIDTH_API_SECRET
    //
    // or uncomment this line and set them here
    // BandwidthClient.getInstance().setCredentials(userId, apiToken, apiSecret);

    // put your numbers in here
    final String toNumber = "+1";// your phone number here
    final String fromNumber = "+1";// this is a number that is allocated on the AppPlatform. You can do this
               // via the dev console or with the SDK (see AllocateNumberExample)

    try {

      final Message message = Message.create(toNumber, fromNumber, "Test, test! What up from App Platform");

      System.out.println("message:" + message);
    }
    catch(final Exception e) {
      e.printStackTrace();
    }
  }
}
```

### Create a Call and Play Some Audio

* Create a Call object and use its create method to make an outbound call, then play a message using the speakSentence method:

```java
package com.bandwidth.sdk.examples;

import java.util.Map;
import java.util.HashMap;

import com.bandwidth.sdk.model.Call;

/**
 * This example shows how to make an outbound call using the sdk. It dials a number and speaks a sentence.
 *
 * Note that this does not implement an event server. See java-bandwidth-examples for a full event server.
 *
 * @author smitchell
 *
 */
public class OutboundCallExample {

  /**
   * @param args the args.
   * @throws Exception error.
   */
  public static void main(final String[] args) throws Exception{
        // There are two ways to set your creds, e.g. your App Platform userId, api token and api secret
    // you can set these as environment variables or set them with the
    // BandwidthClient.getInstance(userId, apiToken, apiSecret) method.
    //
    // Use the setenv.sh script to set the env variables
      // BANDWIDTH_USER_ID
      // BANDWIDTH_API_TOKEN
      // BANDWIDTH_API_SECRET
    //
    // or uncomment this line and set them here
    // BandwidthClient.getInstance(userId, apiToken, apiSecret);

    // put your numbers in here
    final String toNumber = "+1";// your phone number here
    final String fromNumber = "+1";// this is a number that is allocated on the AppPlatform. You can do this
               // via the dev console or with the SDK (see AllocateNumberExample)

    final Call call = Call.create(toNumber, fromNumber);

    System.out.println("call:" + call);

    //wait a few seconds here. Note that in a real application you'll handle the answer event
    // in your event server. See java-bandwidth-examples for how to do this
    try {
        Thread.sleep(10000);
    } catch(final InterruptedException ex) {
        Thread.currentThread().interrupt();
    }

    final Map<String, Object>params = new HashMap<String, Object>();
    params.put("sentence", "Hey there! Welcome to the App Platform!");
    params.put("voice", "kate"); // she's one of our favorites!
    call.speakSentence(params);


    //wait a few more seconds to let the message play. Again in a real application this would be part
    // of your event handling. See java-bandwidth-examples for how to do this
    try {
        Thread.sleep(4000);
    } catch(final InterruptedException ex) {
        Thread.currentThread().interrupt();
    }

    System.out.println("Updated call:" + call);
    call.hangUp();
  }

}
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in the Setup Guide and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```java
//Incoming callbacks need to be exposed as an incoming request on your server.
//Once a request is recieved it can be delegated to a handler based on the EventType.
//There is a complete example of handling events at: https://github.com/Bandwidth/java-bandwidth-examples/blob/master/src/main/java/com/bandwidth/sdk/examples/HelloFlipperServlet.java

//Example event handler is called upon your server receiving a callback from Bandwidth.
public void processEvent(SmsEvent event) {
    //handle the event here.
}

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

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  There are two options for creating and serving BXML to Bandwidth.  The first option is to use an SDK, such as the Bandwidth Java SDK, to form BXML documents.  The second option is to build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._*

* Using Java SDK

```java
import com.bandwidth.sdk.xml.elements.*;

 Response response = new Response();
        SpeakSentence speakSentence = new SpeakSentence("Hello from Bandwidth.",
                "paul",
                "male",
                "en_US");

        response.add(speakSentence);

        String output = response.toXml();
```

* The above code creates a document that looks like:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence voice="paul" locale="en_US" gender="male">
Hello from Bandwidth.
</SpeakSentence>

</Response>
```

{% sample lang="ruby" %}

*_The examples below use Ruby and Bandwidth's [Ruby SDK](https://dev.bandwidth.com/clientLib/ruby.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left conatins links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Install the Bandwidth Ruby SDK with the following command

```ruby
gem install ruby-bandwidth
```

or add to your Gemfile

```ruby
gem "ruby-bandwidth"
```

* Import the client in your code

```ruby
require 'rubygems'
require 'ruby-bandwidth'
```

* Initialize your desired API clients.  NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.  

```ruby
# Create a single instance of a client object
client = Bandwidth::Client.new(:user_id => "userId", :api_token => "token", :api_secret => "secret")

# Assign values to the default client instance
Bandwidth::Client.global_options = {:user_id => "userId", :api_token => "token", :api_secret => "secret"}
```

### Send and Receive Text Messages using Ruby

* Create a method that instatiates a client object and uses the Bandwidth::Message.create method to send a message.

```ruby
require 'rubygems'
require 'ruby-bandwidth'

Bandwidth::Client.global_options = {:user_id => "userId", :api_token => "token", :api_secret => "secret"}
Bandwidth::Message.create({:from => "+19195551212", :to => "+191955512142", :text => "Hello World"})
#or
client = Bandwidth::Client.new(:user_id => "userId", :api_token => "token", :api_secret => "secret")
Bandwidth::Message.create(client, {:from => "+19195551212", :to => "+191955512142", :text => "Hello World"})
```

* Both methods are equivalent in functionality. Run the program and it should send the "Hello World" message to the number specified.

### Create a Call and Play Some Audio

* To create a voice call, use the code framework we put together for sending a message, but instead we use Bandwidth::Call.create to create a call:

```ruby
Bandwidth::Client.global_options = {:user_id => "userId", :api_token => "token", :api_secret => "secret"}
Bandwidth::Call.create({:from => "+19195551212", :to => "+191955512142"})
#or
client = Bandwidth::Client.new(:user_id => "userId", :api_token => "token", :api_secret => "secret")
Bandwidth::Call.create(client, {:from => "+19195551212", :to => ""+191955512142"})
```

* Now add code to play a message then hangup using the call id and status of the voice call.

```ruby
require 'rubygems'
require 'ruby-bandwidth'

client = Bandwidth::Client.new(:user_id => "userId", :api_token => "token", :api_secret => "secret")
call = Bandwidth::Call.create(client, {:from => "+19195551212", :to => "+191955512142"})
call.play_audio(:sentence => "Hello From Bandwidth. Goodbye.")
sleep(5) # Necessary to make sure the sentence is spoken before hanging up
call.update(:state => "completed")
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in Step 2 above and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback using Flask and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```ruby
=begin
SMS callback looks like this:
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
=end
require 'sinatra'
require 'json'
post '/your_url' do
    puts JSON.parse(request.body.read)
end
```

### Play a Message on an Incoming Call using [BXML](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html)

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  There are two options for creating and serving BXML to Bandwidth.  The first option is to use an SDK, such as the Bandwidth C# SDK, to form BXML documents.  The second option is to build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._* 

* Using Ruby SDK

```ruby
require "rubygems"
require "ruby-bandwidth"

response = Bandwidth::Xml::Response.new([
    Bandwidth::Xml::Verbs::SpeakSentence.new(
        :gender => "female",
        :locale => "en_US",
        :sentence => "Hello from Bandwidth",
        :voice => "susan"
    )
])

puts response.to_xml()
```

* The above code will print the following statement:

```xml
<?xml version="1.0" encoding="UTF-8"?><Response><SpeakSentence voice="susan" locale="en_US" gender="female">Hello from Bandwidth</SpeakSentence></Response>
```

{% sample lang="php" %}
*_The examples below use PHP and Bandwidth's [PHP SDK](https://dev.bandwidth.com/clientLib/php.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left contains links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Get the Bandwidth PHP SDK [here](https://dev.bandwidth.com/clientLib/php.html)).

```php
<?php
require_once('../source/Catapult.php');
?>
```

* Setup authentication.  NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.

```php
$cred = new Catapult\Credentials('BANDWIDTH_USER_ID', 'BANDWITH_API_TOKEN', 'BANDWIDTH_API_SECRET');
```

### Send and Receive Text Messages using PHP

* Create a Message object and call the create method to send a message.

```php
<?php
require_once('../source/Catapult.php');
// Below is a sample text message
// using Bandwidth's SMS feature
// IMPORTANT: edit credentials.json
// with your information
// or comment out below /w your keys
//
$cred = new Catapult\Credentials('BANDWIDTH_USER_ID', 'BANDWITH_API_TOKEN', 'BANDWIDTH_API_SECRET');
// $cred = new Catapult\Credentials;
// dont forget to comment out the implicit version if using assoc array

$client = new Catapult\Client($cred);
if (!(isset($argv[1]) || isset($argv[2]) || isset($argv[3])))
    die ("\nPlease provide command line input like: \n php ./sample-message.php 'from' 'to' 'message'\n\n");
try {
    $message = new Catapult\Message(array(
        "from" => new Catapult\PhoneNumber($argv[1]),
        "to" => new Catapult\PhoneNumber($argv[2]),
        "text" => new Catapult\TextMessage($argv[3])
    ));
    printf("\nWe've messaged number: %s, said, %s!\n", $argv[2], $argv[3]);
} catch (\CatapultApiException $e) {
    echo var_dump($e);
}
?>
```

### Create a Call

* Create a Call object and use its create method to make an outbound call:

```php
<?php
require_once('../source/Catapult.php');
// below is a sample phone call

$cred = new Catapult\Client('BANDWIDTH_USER_ID', 'BANDWIDTH_API_TOKEN', 'BANDWIDTH_API_SECRET');
// comment out if you have
// credentials.json
//$cred = new Catapult\Client;

define("ARGS_NEEDED", 3);
define("ARGS_DESC", "./sample-call.php '+FROMNUMBER' '+TONUMBER'");
try {
  if (sizeof($argv)  == ARGS_NEEDED) {
    $call = new Catapult\Call(array(
      "from" => $argv[1],
      "to" => $argv[2]
    ));
  } else {
    printf("You must supply at least %s arguments like: %s", ARGS_NEEDED, ARGS_DESC);
  }
} catch (CatapultApiException $exception) {
  $result = $exception->getResult();
  // do something with the result
}
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in the Setup Guide and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```php
//Incoming callbacks need to be exposed as an incoming request on your server.

<?php
require_once('../source/Catapult.php');
// below is a sample event
// this will listen for a call event
// and when received output to screen
// IMPORTANT: edit credentials.json
// with your information
// or comment out below /w your keys
// For events, you will need to make sure
// the callback url is set.
//
$cred = new Catapult\Credentials('BANDWIDTH_USER_ID', 'BANDWIDTH_API_TOKEN', 'BANDWIDTH_API_SECRET');
//$cred = new Catapult\Credentials;
// dont forget to comment out the implicit version if using assoc array
$client = new Catapult\Client($cred);
try {
  $event = new Catapult\Event($_REQUEST);
  /**
   * Once we have received an event
   * log the event, in logs (./logs)
         * Arrange event with time event was received:
         * event_{time}.log
   */
   printf("New event, id: %d", $event->id);
   file_put_contents("./" . $event->time . ".log", json_encode($event));
} catch (\CatapultApiException $e) {
  echo var_dump($e);
}
?>

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

### Use the PHP SDK to Generate [BXML](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html)

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  There are two options for creating and serving BXML to Bandwidth.  The first option is to use an SDK, such as the Bandwidth PHP SDK, to form BXML documents.  The second option is to build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._*

* Using PHP SDK

```php
<?php
require_once('../source/Catapult.php');
// below is a sample of Bandwidth BXML (BaML)
// it will execute the provided verb
// IMPORTANT: edit credentials.json
// with your information
// or comment out below /w your keys
//
//$cred = new Catapult\Credentials('BANDWIDTH_USER_ID', 'BANDWIDTH_API_TOKEN', 'BANDWIDTH_API_SECRET');
$cred = new Catapult\Credentials;
// dont forget to comment out the implicit version if using assoc array
// this example is cli based
// use like:
// php ./sample-baml.php "verb" "attribute" "value"
// example
// php ./sample-baml.php "SpeakSentence" "voice" "female"
$client = new Catapult\Client($cred);
if (!(isset($argv[1]) || isset($argv[2]) || isset($argv[3])))
  die ("\nPlease provide command line input like: \n php ./sample-verb.php 'verb' 'attribute' 'value'\n\n");
try {
    $verb = $argv[1];
    $attribute = $argv[2];
    $value = $argv[3];
    $baml = new Catapult\BaML;
    $bverb = Catapult\BaMLVerb::fromString($verb);
    $bverb->create(array(
        new Catapult\BaMLAttribute($attribute, $value)
    ));
    // here we can add other things
    // verbs, attributes or text
    $bverb->addText("example");
    $baml->set($bverb);
    printf("The following BaML was generated: \n\n%s\n\n",$baml);
} catch (\CatapultApiException $e) {
  echo var_dump($e);
}
?>
```

{% sample lang="nodejs"%}
*_The examples below use Node.js and Bandwidth's [Node.js SDK](https://dev.bandwidth.com/clientLib/node.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left conatins links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client: you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Install [Node.js](https://nodejs.org/en/download/)
* Open your favorite code editor.  You can find a free and open-source one for Windows, Mac, and Linux [here](https://code.visualstudio.com/).
* Be sure to initiate a package.json for your npm packages using the code below. For more info go [here](https://docs.npmjs.com/cli/init).

```bash
npm init
```

* Get the Bandwidth Node.js SDK (available via npm or [here](https://dev.bandwidth.com/clientLib/node.html)). Use the npm installation code below or go [here](https://www.npmjs.com/package/node-bandwidth) for more information on the node-bandwidth package.

```bash
npm install --save node-bandwidth
```

* Include necessary packages in your Node.js project.

```javascript
const Bandwidth = require("node-bandwidth");
```

* Set a constant that initiates a Bandwidth authentication using your User ID and authentication token and secret. Your User ID for this authentication is NOT the same as your username used for portal login.
* NOTE: In a production setting, the authentication strings should be stored in a secure location such as environment variables.

```javascript
const client = new Bandwidth({
    userId      : "YOUR_USER_ID",
    apiToken    : "YOUR_API_TOKEN",
    apiSecret   : "YOUR_API_SECRET"
});
```

### Send and Receive Text Messages (V1) using Node.js

* Using your client constant, use the Message.send method to send a message.
* The "from" number must be a Bandwidth number registered to your account and set up to send messages.

```javascript
client.Message.send({
    from    : "+9195551212",
    to      : "+19195551213",
    text:   : "Hello World"
}).then(message => console.log(message));
```

* Run the program and it should send the "Hello World" message to the number specified. Complete code:

```javascript
const Bandwidth = require("node-bandwidth");

const client = new Bandwidth({
    userId      : "YOUR_USER_ID",
    apiToken    : "YOUR_API_TOKEN",
    apiSecret   : "YOUR_API_SECRET"
});

client.Message.send({
    from    : "+19195551212",
    to      : "+19195551213",
    text    : "Hello World"
}).then(message => console.log(message));
```

### Create a Call and Play Some Audio

* To create a voice call, use the client.Call.create method. The "from" number must be a Bandwidth number registered to your account and set up to use voice services.

```javascript
client.Call.create({
    from: "+12345678901",
    to: "+12345678902"
}).then(call => console.log(call));
```

* Now add code to play a message then hang up using the call ID and status of the voice call. The full code will look like this:

```javascript
//require node-bandwidth library
const Bandwidth = require("node-bandwidth");

//instantiate Bandwidth client
const client = new Bandwidth({
    userId      : "YOUR_USER_ID",
    apiToken    : "YOUR_API_TOKEN",
    apiSecret   : "YOUR_API_SECRET"
});

//create a call
client.Call.create({
    from: "+12345678901",
    to: "+12345678902"
}).then(call => {

    //check the call state every two seconds
    //and play a message when the call is answered
    let interval = setInterval(() => {

        //get the call info
        client.Call.get(call.id).then(response => {

            //If call is in hangup or error state, end interval
            if (response.state == "completed" || response.state == "rejected" || response.state == "error") {
                clearInterval(interval);
            }

            //Check call for active state (call answered)
            else if (response.state == "active") {

                //end interval
                clearInterval(interval);

                //play some text-to-speech
                client.Call.playAudioAdvanced(call.id, {
                    sentence: "Hello from Bandwidth. Goodbye."
                }).then(() => {

                    //Pause execution so we don't hang up while speaking
                    setTimeout(() => {

                        //hangup
                        client.Call.hangup(call.id);
                    }, 3000);
                });
            }
        });
    }, 2000);
});
```

### Receive a Text Message (or any other callback)

* When your number receives a text message, Bandwidth will send a callback to the URL specified.  Make sure your messages callback URL is set as described in Step 2 above and make sure your server is listening for incoming HTTP requests.  The code snippet below shows how to fetch a callback using Express on a Node.js server and what the SMS callback structure looks like.  You can learn more about handling callbacks [here](https://dev.bandwidth.com/ap-docs/apiCallbacks/callbacks.html).

```javascript
//requirements
const express = require("express");
const bodyParser = require("body-parser");

//initialize app
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//set up callback route
app.post("/callback", function(req, res) {
    //callback details are stored in req
    //and can be used here
});

//listen
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});
```

```javascript
//SMS callback looks like this:
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

*_BXML is a powerful and easy-to-use markup language that allows you to control voice applications.  Using Node.js, you must build BXML documents from scratch and serve them via a web server.  More information on BXML can be found [here](https://dev.bandwidth.com/ap-docs/bxml/bxml.html).  NOTE: BXML is sent to Bandwidth only when Bandwidth asks for it via the voice callback url or a redirect verb in the BXML itself.  For example, upon an incoming call to a number associated to an application with the autoanswer feature set.  To use BMXL on [outgoing calls](https://dev.bandwidth.com/ap-docs/bxml/bxmlOverview.html), you must create the call first using a REST call or using an SDK to start the callback process._*

* A simple BXML document looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence voice="susan" locale="en_US" gender="female">
Hello from Bandwidth.
</SpeakSentence>

<Hangup></Hangup>

</Response>
```

{% endmethod %}
