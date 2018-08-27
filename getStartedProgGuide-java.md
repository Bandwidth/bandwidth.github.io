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
