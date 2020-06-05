# Ruby SDK

## Release Notes

| Version | Notes |
|--|--|
| 3.0.0 | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.1.0 | Updated Pause and SendDtmf BXML attributes |
| 3.2.0 | Added MFA |
| 3.3.0 | Added support for multi nested verbs in Gathers |

## Download & Install

```
gem install bandwidth-sdk
```

## Initialize Bandwidth Client

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

## Create Phone Call

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
rescue Bandwidth::ApiErrorResponseException => e
    puts e.description #Invalid to: must be an E164 telephone number
    puts e.response_code #400
end
```

## Generate BXML

```ruby
response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_bxml()
```

## Send Text Message

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
rescue Bandwidth::MessagingException => e
    puts e.description #Access is denied
    puts e.response_code #403
end
```

## Order Phone Number

Phone number ordering is done using the [Bandwidth Iris SDK](https://github.com/Bandwidth/ruby-bandwidth-iris). You can install this package by running the following command

```
gem install ruby-bandwidth-iris
```

```ruby
require 'ruby-bandwidth-iris'

BandwidthIris::Client.global_options = {
    :account_id => "900",
    :username => "username",
    :password => "password",
    :api_endpoint => "https://dashboard.bandwidth.com/api"
}

phone_numbers = BandwidthIris::AvailableNumber.list({:area_code => "919", :quantity => 3})
order_data = {
  :name => "Ruby Order",
  :site_id => 12345,
  :existing_telephone_number_order_type => {
    :telephone_number_list =>
      {
        :telephone_number => [phone_numbers[0]]
      }

  }
}

order_response = BandwidthIris::Order.create(order_data)
order_info = BandwidthIris::Order.get(order_response.id)
puts order_info.name
```
