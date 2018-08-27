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
