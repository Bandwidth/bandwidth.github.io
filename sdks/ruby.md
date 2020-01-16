# Ruby SDK

### Download & Install

```
gem install bandwidth-sdk
```

### Initialize Bandwidth Client

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: 'username',
    voice_basic_auth_password: 'password',
    messaging_basic_auth_user_name: 'token',
    messaging_basic_auth_password: 'secret',
)
```

### Create Phone Call

```ruby
voice_client = bandwidth_client.voice_client.client

account_id = '1'
body = ApiCreateCallRequest.new
body.from = '+16666666666'
body.to = '+17777777777'
body.answer_url = 'https://test.com'
body.application_id = '3-d-4-b-5'

begin
    response = voice_client.create_call(account_id,:body => body)
    puts response.data.call_id #c-d45a41e5-bcb12581-b18e-4bdc-9874-6r3235dfweao
    puts response.status_code #201
rescue Bandwidth::ErrorResponseException => e
    puts e.description #Invalid to: must be an E164 telephone number
    puts e.response_code #400
end
```

### Generate BXML

```ruby
response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_bxml()
```

### Send Text Message

```ruby
messaging_client = bandwidth_client.messaging_client.client

account_id = '1'
body = MessageRequest.new
body.application_id = '1-2-3'
body.to = ['+17777777777']
body.from = '+18888888888'
body.text = 'Hello from Bandwidth'

begin
    response = messaging_client.create_message(account_id, :body => body)
    puts response.data.id #1570740275373xbn7mbhsfewasdr
    puts response.status_code #202
rescue Bandwidth::GenericClientException => e
    puts e.description #Access is denied
    puts e.response_code #403
rescue Bandwidth::PathClientException => e
    puts e.message #Your request could not be accepted.
    puts e.response_code #400
end
```

### Order Phone Number

Coming soon
