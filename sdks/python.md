# Python SDK

### Download & Install

```
pip install bandwidth-sdk==4.0.0.dev1
```

### Initialize Bandwidth Client

```python
from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.voice_client import VoiceClient
from bandwidth.voice.models.api_create_call_request import ApiCreateCallRequest

##Initialize client
voice_basic_auth_user_name = 'username'
voice_basic_auth_password = 'password'

client = BandwidthClient(voice_basic_auth_user_name=voice_basic_auth_user_name, voice_basic_auth_password=voice_basic_auth_password)
```

### Create Phone Call

```python
client_controller = client.voice_client.calls
account_id = '1'

##Create phone call
body = ApiCreateCallRequest()
body.mfrom = "+17777777777"
body.to = "+16666666666"
body.application_id = "3-d-4-b-5"
body.answer_url = "https://test.com"

result = client_controller.create_call(account_id, body=body)
```

### Generate BXML

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import SpeakSentence

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

Coming soon

### Order Phone Number

Coming soon
