{% method %}

## Retrieve Call Recordings
Retrieve information about all recordings that occurred during a call.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Retrieve recordings from a call

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings" \
    -u '{username}:{password}'
```

```json
[
  {
    "accountId"     : "55555555",
    "callId"        : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    "recordingId"   : "r-d68201ef-d53e-4c6d-a743-1c1283909d41",
    "to"            : "+15552311778",
    "from"          : "+15552311772",
    "duration"      : "PT11.64S",
    "direction"     : "inbound",
    "channels"      : 1,
    "startTime"     : "2019-10-21T16:45:11.293Z",
    "endTime"       : "2019-10-21T16:55:12.950Z",
    "fileFormat"    : "wav",
    "status"        : "complete",
    "mediaUrl"      : "https://../{accountId}/calls/{callId}/recordings/{recordingId-1}/media",
    "transcription" : null
  },
  {
    "accountId"     : "55555555",
    "callId"        : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    "recordingId"   : "r-115da407-e3d9-4ea7-889f-5f4ad7386a80",
    "to"            : "+15552311778",
    "from"          : "+15552311772",
    "duration"      : "PT5.000S",
    "direction"     : "inbound",
    "channels"      : 2,
    "startTime"     : "2019-10-21T16:55:13.038Z",
    "endTime"       : "2019-10-21T16:55:18.038Z",
    "fileFormat"    : "mp3",
    "status"        : "complete",
    "mediaUrl"      : "https://../{accountId}/calls/{callId}/recordings/{recordingId-2}/media",
    "transcription" : {
        "id"            : "t-1a68a908-544f-48ae-b30d-d1747dca3723",
        "url"           : "https://../{accountId}/calls/{callId}/recordings/{recordingId-2}/transcription",
        "status"        : "available",
        "completedTime" : "2019-10-21T16:55:56.512Z"
    }
  }
]
```

{% sample lang="java" %}

```java
try {
    ApiResponse<List<RecordingMetadataResponse>> response = voiceClient.getQueryMetadataForAccountAndCall(VOICE_ACCOUNT_ID, "callId");
    System.out.println( response.getResult().get(0).getRecordingId() );
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetQueryMetadataForAccountAndCall(accountId, callId);
Console.WriteLine(response.Data.Count);
```

{% sample lang="ruby" %}

```ruby
response = voice_client.get_query_metadata_for_account_and_call(VOICE_ACCOUNT_ID, call_id)
puts response.data[0].media_url
```

{% sample lang="python" %}

```python
response = voice_client.get_query_metadata_for_account_and_call(VOICE_ACCOUNT_ID, call_id)
print(response.body[0].media_url)
```

{% sample lang="js" %}

```js
var response = await voiceController.getQueryMetadataForAccountAndCall(accountId, callId);
console.log(response[0].mediaUrl);
```

{% sample lang="php" %}

```php
try {
    $response = $voiceClient->getQueryMetadataForAccountAndCall($accountId, $callId)
    print_r($response->getResult()[0]->mediaUrl);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% common %}

The resource returned in the "mediaUrl" field can be used to retrieve the recording, see [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md).

{% endmethod %}
