# Ruby SDK

## Links

The Ruby SDK(s) are available via [RubyGems](https://rubygems.org/) & Github

| Links                                                                   | Description                                                                     | Github                                                                                               |
|:------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [`bandwidth-sdk`](https://rubygems.org/gems/bandwidth-sdk)              | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/ruby-sdk)                  |
| [`ruby-bandwidth-iris`](https://rubygems.org/gems/ruby-bandwidth-iris)  | Manage phone numbers and account settings                                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/ruby-bandwidth-iris)       |
| [Code Examples](https://github.com/Bandwidth-Samples?language=ruby) | Ruby code examples                                                              | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth-Samples?language=ruby) |

## Release Notes

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 3.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.1.0   | Updated Pause and SendDtmf BXML attributes                                      |
| 3.2.0   | Added MFA functions                                                             |
| 3.3.0   | Added support for multi nested verbs in Gathers                                 |
| 3.4.0   | Added support for Conference BXMl and Conference API Endpoints                  |
| 3.5.0   | Updated MFA schema to include digits and expirationTimeInMinutes                |
| 3.6.0   | Added BXML Bridge verb                                                          |
| 3.7.0   | Added WebRTC                                                                    |
| 3.8.0 | Added get conference endpoint |
| 3.9.0 | Added conference management endpoints |
| 4.0.0 | Renamed `CallEngineModifyConferenceRequest` to `ApiModifyConferenceRequest`, and removed `from` and `digits` from `TwoFactorVerifyRequestSchema` |
| 5.0.0 | Added get messages function, and updated the `body` parameter in the create message function to be required |
| 6.0.0 | Updated the MFA error bodies and added message priority |
| 7.0.0 | Updated voice, messaging, and MFA objects as well as corrected WebRTC `participantId` and `sessionId` parameter ordering in a number of requests. |
| 7.1.0 | Add transfer BXML verb for WebRTC. |
| 8.0.0 | Add voice `voiceCallId` to the transfer BXML verb for WebRTC. |

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
include Bandwidth::MultiFactorAuth

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: 'username',
    voice_basic_auth_password: 'password',
    messaging_basic_auth_user_name: 'token',
    messaging_basic_auth_password: 'secret',
    multi_factor_auth_basic_auth_user_name: 'username',
    multi_factor_auth_basic_auth_password: 'password',
    environment: Environment::CUSTOM, #Optional - Used for custom base URLs
    base_url: "https://test.com" #Optional - Custom base URL set here
)
```

## Create Phone Call

```ruby
voice_client = bandwidth_client.voice_client.client

account_id = '1'
body = CreateCallRequest.new
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
    response = messaging_client.create_message(account_id, body)
    puts response.data.id #1570740275373xbn7mbhsfewasdr
    puts response.status_code #202
rescue Bandwidth::MessagingException => e
    puts e.description #Access is denied
    puts e.response_code #403
end
```

## Perform A 2FA Request

```ruby
auth_client = bandwidth_client.multi_factor_auth_client.client
account_id = "1"

from_phone = "+18888888888"
to_phone = "+17777777777"
messaging_application_id = "1-d-b"
scope = "scope"
digits = 6

body = TwoFactorCodeRequestSchema.new
body.from = from_phone
body.to = to_phone
body.application_id = messaging_application_id
body.scope = scope
body.digits = digits
body.message = "Your temporary {NAME} {SCOPE} code is {CODE}"

auth_client.create_messaging_two_factor(account_id, body)

code = "123456" #This is the user input to validate

body = TwoFactorVerifyRequestSchema.new
body.from = from_phone
body.to = to_phone
body.application_id = application_id
body.scope = scope
body.code = code
body.digits = digits
body.expiration_time_in_minutes = 3

response = auth_client.create_verify_two_factor(account_id, body)
puts "Auth status: " + response.data.valid.to_s
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

## Error Handling

All SDK methods can raise 2 types of exceptions based on the API response received.

The first type of exceptions are expected endpoint responses. The exception throw varies on each method and the corresponding http status code.

The second type of exceptions are unexpected endpoint responses. The exception throw will always be a `Bandwidth::APIException`.

### Error Handling Example: Messaging

```ruby
<require and include statements>

<client initialization code>

begin
    response = messaging_client.create_message(account_id, :body => body)
rescue Bandwidth::MessagingException => e
    puts e.response_code #http status code
    puts e.response.raw_body #raw response from api
rescue Bandwidth::APIException => e
    puts e.response_code #http status code
    puts e.response.raw_body #raw response from api
end
```
