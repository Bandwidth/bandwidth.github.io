# Voice & Messaging Developer Guide
[.Net](../getStartedProgGuide.html) | [PHP](../getStartedProgGuide-php.html) | [Java](../getStartedProgGuide-java.html) | [Ruby](../getStartedProgGuide-ruby.html) | [Node-JS](../getStartedProgGuide-nodejs.html) | [Ruby](../getStartedProgGuide-ruby.html) 


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

*_The examples below use Ruby and Bandwidth's [Ruby SDK](https://dev.bandwidth.com/clientLib/ruby.html), but the basic steps are constistent in most any programming language.  The links above point to examples specific to those programming languages and the menu to the left conatins links to SDKs in various programming languages.  You are not required to use an SDK or specific HTTP client, you can consume Bandwidth's APIs directly using any programming language or tool capable of making HTTPS requests._*

* Install the Bandwidth Ruby SDK with the following command

```
gem install ruby-bandwidth
```

or add to your Gemfile

```
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
