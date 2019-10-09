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

result = voice_client.create_call(account_id,:body => body)
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
message_controller = bandwidth_client.messaging_client.client

body = MessageRequest.new
body.application_id = "1-2-3"
body.to = ["+17777777777"]
body.from = "+18888888888"
body.text = "Hello from Bandwidth"
message_controller.create_message("123", body)
```

### Order Phone Number

Coming soon
