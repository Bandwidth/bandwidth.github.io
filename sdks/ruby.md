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

client = Bandwidth::Client.new(
    voice_basic_auth_user_name: 'username',
    voice_basic_auth_password: 'password',
)
```

### Create Phone Call

```ruby
calls_controller = client.voice_client.calls

account_id = '1'
body = ApiCreateCallRequest.new
body.from = '+16666666666'
body.to = '+17777777777'
body.answer_url = 'https://test.com'
body.application_id = '3-d-4-b-5'

result = calls_controller.create_call(account_id,:body => body)
```

### Generate BXML

```ruby
response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_xml()
```

### Send Text Message

Coming soon

### Order Phone Number

Coming soon
