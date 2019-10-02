# Python SDK

### Download & Install

```
pip install bandwidth-sdk
```

### Initialize Bandwidth Client

```python
from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.api_create_call_request import ApiCreateCallRequest
from bandwidth.messaging.models.message_request import MessageRequest
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import *

##Initialize client
voice_basic_auth_user_name = 'username'
voice_basic_auth_password = 'password'
messaging_basic_auth_user_name = 'token'
messaging_basic_auth_password = 'secret'

client = BandwidthClient(
    voice_basic_auth_user_name=voice_basic_auth_user_name,
    voice_basic_auth_password=voice_basic_auth_password,
    messaging_basic_auth_user_name=messaging_basic_auth_user_name,
    messaging_basic_auth_password=messaging_basic_auth_password)
```

### Create Phone Call

```python
voice_client = client.voice_client.client
account_id = '1'

##Create phone call
body = ApiCreateCallRequest()
body.mfrom = "+17777777777"
body.to = "+16666666666"
body.application_id = "3-d-4-b-5"
body.answer_url = "https://test.com"

result = voice_client.create_call(account_id, body=body)
```

### Generate BXML

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Test",
    voice="susan",
    locale="en_US",
    gender="female"
)

response.add_verb(speak_sentence)
print(response.to_xml())
```

### Send Text Message

```python
messaging_client = client.messaging_client.client

body = MessageRequest()
body.application_id = "1-d-b" 
body.to = ["+17777777777"]
body.mfrom = "+18888888888"
body.text = "Greetings!"
messaging_client.create_message("123", body)
```

### Order Phone Number

Coming soon
