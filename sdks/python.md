# Python SDK

## Links

The Python SDK(s) are available via [PyPi](https://pypi.org/) & Github

| Links                                                                     | Description                                                                     | Github                                                                                                 |
|:--------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [`bandwidth-sdk`](https://pypi.org/project/bandwidth-sdk/)                | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/python-sdk)                  |
| [Code Examples](https://github.com/Bandwidth-Samples?language=python) | Python code examples                                                            | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth-Samples?language=python) |

## Release Notes

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 6.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |
| 6.1.0   | Updated Pause and SendDtmf BXML attributes                                      |
| 6.2.0   | Added MFA functions                                                             |
| 6.3.0   | Added support for multi nested verbs in Gathers                                 |
| 6.4.0   | Added support for Conference BXMl, Conference API Endpoints, and WebRTC         |
| 6.5.0   | Updated WebRTC Permissions schema                                               |
| 6.6.0   | Updated MFA schema to include digits and expirationTimeInMinutes                |
| 6.7.0   | Added BXML Bridge verb                                                          |
| 6.8.0   | Updated WebRTC base URL                                                         |
| 6.9.0 | Added get conference endpoint |
| 6.10.0 | Added conference management endpoints |
| 7.0.0 | Renamed `CallEngineModifyConferenceRequest` to `ApiModifyConferenceRequest`, and removed `from` and `digits` from `TwoFactorVerifyRequestSchema` |
| 8.0.0 | Added get messages function, and updated the `body` parameter in the create message function to be required |
| 9.0.0 | Updated the MFA error bodies and added message priority |
| 10.0.0 | Updated voice, messaging, and MFA objects as well as corrected WebRTC `participantId` and `sessionId` parameter ordering in a number of requests. |
| 10.1.0 | Add transfer BXML verb for WebRTC. |
| 11.0.0 | Add voice `voiceCallId` to the transfer BXML verb for WebRTC. |


## Download & Install

ℹ️ Note that bandwidth-sdk [`v5.x.x`](https://pypi.org/project/bandwidth-sdk/) and greater will only support Bandwidth's v2 APIs. Please contact [support](https://support.bandwidth.com) to learn how to migrate to v2. For v1 installation instructions, please see [v1.dev.bandwidth.com](https://v1.dev.bandwidth.com/clientLib/python.html).

```
pip install bandwidth-sdk
```

## Initialize Bandwidth Client

```python
from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.configuration import Environment #Optional - Used for custom base URLs

from bandwidth.messaging.models.message_request import MessageRequest
from bandwidth.messaging.exceptions.messaging_exception import MessagingException

from bandwidth.voice.models.create_call_request import CreateCallRequest
from bandwidth.voice.models.modify_call_recording_state import ModifyCallRecordingState
from bandwidth.voice.exceptions.api_error_response_exception import ApiErrorResponseException
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import *

from bandwidth.multifactorauth.models.two_factor_code_request_schema import TwoFactorCodeRequestSchema
from bandwidth.multifactorauth.models.two_factor_verify_request_schema import TwoFactorVerifyRequestSchema

##Initialize client
voice_basic_auth_user_name = 'username'
voice_basic_auth_password = 'password'
messaging_basic_auth_user_name = 'token'
messaging_basic_auth_password = 'secret'
multi_factor_auth_basic_auth_user_name = 'username'
multi_factor_auth_basic_auth_password = 'password'

bandwidth_client = BandwidthClient(
    voice_basic_auth_user_name=voice_basic_auth_user_name,
    voice_basic_auth_password=voice_basic_auth_password,
    messaging_basic_auth_user_name=messaging_basic_auth_user_name,
    messaging_basic_auth_password=messaging_basic_auth_password,
    multi_factor_auth_basic_auth_user_name=two_factor_auth_basic_auth_user_name,
    multi_factor_auth_basic_auth_password=two_factor_auth_basic_auth_password,
    environment=Environment.CUSTOM, #Optional - Used for custom base URLs
    base_url="https://test.com" #Optional - Custom base URL set here
)
```

## Create Phone Call

```python
voice_client = bandwidth_client.voice_client.client
account_id = "1"

##Create phone call
body = CreateCallRequest()
body.mfrom = "+17777777777"
body.to = "+16666666666"
body.application_id = "3-d-4-b-5"
body.answer_url = "https://test.com"

try:
    response = voice_client.create_call(account_id, body=body)
    print(response.body.call_id) #c-3f758f24-a59bb21e-4f23-4d62-afe9-53o2ls3o4saio4l
    print(response.status_code) #201
except ApiErrorResponseException as e:
    print(e.description) #Invalid from: must be an E164 telephone number
    print(e.response_code) #400
```

## Generate BXML

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Test",
    voice="susan",
    locale="en_US",
    gender="female"
)

response.add_verb(speak_sentence)
print(response.to_bxml())
```

## Send Text Message

```python
messaging_client = bandwidth_client.messaging_client.client
account_id = "1"

body = MessageRequest()
body.application_id = "1-d-b"
body.to = ["+17777777777"]
body.mfrom = "+18888888888"
body.text = "Greetings!"

try:
    response = messaging_client.create_message(account_id, body)
    print(response.body.id) #1570819529611mexbyfr7ugrouuxy
    print(response.status_code) #202
except MessagingException as e:
    print(e.description) #Your request could not be accepted.
    print(e.response_code) #400
```

## Order Phone Number

Coming soon

## Perform A MFA Request

```python
auth_client = bandwidth_client.multi_factor_auth_client.mfa
account_id = "1"

from_phone = "+18888888888"
to_phone = "+17777777777"
messaging_application_id = "1-d-b"
scope = "scope"
digits = 6

body = TwoFactorCodeRequestSchema(
    mfrom = from_phone,
    to = to_phone,
    application_id = messaging_application_id,
    scope = scope,
    digits = digits,
    message = "Your temporary {NAME} {SCOPE} code is {CODE}"
)
auth_client.create_messaging_two_factor(account_id, body)

code = "123456" #This is the user input to validate

body = TwoFactorVerifyRequestSchema(
    mfrom = from_phone,
    to = to_phone,
    application_id = application_id,
    scope = scope,
    code = code,
    digits = digits,
    expiration_time_in_minutes = 3
)
response = auth_client.create_verify_two_factor(account_id, body)
print("Auth status: " + str(response.body.valid))
```

## Error Handling

All SDK methods can raise 2 types of exceptions based on the API response received.

The first type of exceptions are expected endpoint responses. The exception throw varies on each method and the corresponding http status code.

The second type of exceptions are unexpected endpoint responses. The exception throw will always be an `APIException`.

### Error Handling Example: Messaging

```python
<Other SDK import statements>
from bandwidth.messaging.exceptions.messaging_exception import MessagingException
from bandwidth.exceptions.api_exception import APIException

<client initialization code>

try:
    response = messaging_client.create_message(account_id, body)
except MessagingException as e:
    print(e.response_code) #http status code
    print(e.response.text) #raw response from api
except APIException as e:
    print(e.response_code) #http status code
    print(e.response.text) #raw response from api
```
