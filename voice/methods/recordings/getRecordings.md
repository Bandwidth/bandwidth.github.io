{% method %}

## Retrieve Account Recordings
Returns a max of 1000 recordings, sorted by startTime from oldest to newest

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/recordings`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter    | Description                                                                                                                    | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:----------|
| from         | Filter results by the `from` field (E.164 format and URL encoded).                                                             | No        |
| to           | Filter results by the `to` field (E.164 format and URL encoded).                                                               | No        |
| minStartTime | Filter results to recordings which have a `startTime` after or including `minStartTime` (in ISO8601 format and URL encoded).   | No        |
| maxStartTime | Filter results to recordings which have a `startTime` before `maxStartTime` (in ISO8601 format and URL encoded).               | No        |

{% common %}

### Example 1 of 1: Retrieve recordings using filters

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/recordings?from={from}&to={to}&minStartTime={minStartTime}&maxStartTime={maxStartTime}" \
    -u '{username}:{password}'
```

```json
[
  {
    "accountId"        : "55555555",
    "callId"           : "c-2a913f94-b6d25421-6fcf-429d-b4b4-fee83151a688",
    "parentCallId"     : null,
    "recordingId"      : "r-357381a2-d189-4404-9aa4-6ac344d21621",
    "to"               : "+15552311778",
    "from"             : "+15552311772",
    "transferCallerId" : null,
    "transferTo"       : null,
    "duration"         : "PT1.415S",
    "direction"        : "inbound",
    "channels"         : 1,
    "startTime"        : "2019-10-21T16:44:40.928Z",
    "endTime"          : "2019-10-21T16:44:42.361Z",
    "fileFormat"       : "wav",
    "status"           : "complete",
    "mediaUrl"         : "https://../{accountId}/calls/{callId-1}/recordings/{recordingId}/media",
    "transcription"    : null
  },
  {
    "accountId"        : "55555555",
    "callId"           : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    "parentCallId"     : "c-2a913f94-72898b21-78da-881a-abd1-9108abf189a0",
    "recordingId"      : "r-d68201ef-d53e-4c6d-a743-1c1283909d41",
    "to"               : "+15552311778",
    "from"             : "+15552311772",
    "transferCallerId" : "+15552311779",
    "transferTo"       : "+15552311780",
    "duration"         : "PT1.64S",
    "direction"        : "inbound",
    "channels"         : 1,
    "startTime"        : "2019-10-21T16:45:11.293Z",
    "endTime"          : "2019-10-21T16:45:12.950Z",
    "fileFormat"       : "wav",
    "status"           : "complete",
    "mediaUrl"         : "https  ://../{accountId}/calls/{callId-2}/recordings/{recordingId}/media",
    "transcription"    : {
        "id"            : "t-1a68a908-544f-48ae-b30d-d1747dca3723",
        "url"           : "https://../{accountId}/calls/{callId-2}/recordings/{recordingId}/transcription",
        "status"        : "available",
        "completedTime" : "2019-10-21T16:45:56.512Z"
    }
  },
  {
    "accountId"        : "55555555",
    "callId"           : "c-2a913f94-c35a4c4f-113b-4112-a27e-4548b87106d1",
    "parentCallId"     : null,
    "recordingId"      : "r-266d4c91-eeb7-40ab-93ff-57149f30f1e3",
    "to"               : "+15552311778",
    "from"             : "+15552311772",
    "transferCallerId" : null,
    "transferTo"       : null,
    "duration"         : "PT1.405S",
    "direction"        : "inbound",
    "channels"         : 1,
    "startTime"        : "2019-10-21T16:45:41.107Z",
    "endTime"          : "2019-10-21T16:45:42.524Z",
    "fileFormat"       : "wav",
    "status"           : "complete",
    "mediaUrl"         : "https  ://../{accountId}/calls/{callId-3}/recordings/{recordingId}/media",
    "transcription"    : null
  }
]
```

{% sample lang="java" %}

```java
try {
    ApiResponse<RecordingMetadataResponse> response = voiceClient.getQueryMetadataForAccount(VOICE_ACCOUNT_ID);
    System.out.println(response.getResult().getMediaUrl());
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetQueryMetadataForAccount(accountId);
Console.WriteLine(response.Data.Duration);
;
```

{% sample lang="ruby" %}

```ruby
response = voice_client.get_query_metadata_for_account(VOICE_ACCOUNT_ID)
puts response.data[0].media_url
```

{% sample lang="python" %}

```python
response = voice_client.get_query_metadata_for_account(VOICE_ACCOUNT_ID)
print(response.body[0].media_url)
```

{% sample lang="js" %}

```js
var response = await voiceController.getQueryMetadataForAccount(accountId);
console.log(response[0].mediaUrl);
```

{% sample lang="php" %}

```php
try {
    $response = $voiceClient->getQueryMetadataForAccount($accountId);
    print_r($response->getResult()[0]->mediaUrl);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% common %}

The resource returned in the "mediaUrl" field can be used to retrieve the recording, see [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md).

{% endmethod %}
