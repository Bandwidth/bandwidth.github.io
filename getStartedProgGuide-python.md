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
