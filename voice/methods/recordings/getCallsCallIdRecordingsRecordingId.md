{% method %}

## Retrieve Recording Metadata
Retrieve information about a specific recording.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example: Retrieve information about a specific recording

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}" \
    -u '{username}:{password}'
```

```json
{
  "accountId"        : "55555555",
  "callId"           : "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
  "applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
  "recordingId"      : "r-d68201ef-d53e-4c6d-a743-1c1283909d41",
  "to"               : "+15552311778",
  "from"             : "+15552311772",
  "transferCallerId" : null,
  "transferTo"       : null,
  "duration"         : "PT11.64S",
  "direction"        : "inbound",
  "channels"         : 1,
  "startTime"        : "2019-10-21T16:45:11.293Z",
  "endTime"          : "2019-10-21T16:55:12.950Z",
  "fileFormat"       : "wav",
  "status"           : "complete",
  "mediaUrl"         : "https://../{accountId}/calls/{callId}/recordings/{recordingId}/media",
  "transcription"    : {
    "id"            : "t-1a68a908-544f-48ae-b30d-d1747dca3723",
    "status"        : "available",
    "completedTime" : "2019-10-21T16:55:56.512Z",
    "url"           : "https://../{accountId}/calls/{callId}/recordings/{recordingId}/transcription"
  }
}
```

<aside class="alert general small">
<p>
The `applicationId` attribute was added recently and it will be null for old recordings.
</p>
</aside>

{% sample lang="java" %}

```java
 try {
    ApiResponse<RecordingMetadataResponse> response = voiceClient.getMetadataForRecording(VOICE_ACCOUNT_ID, "callId", "recordingId");
    System.out.println(response.getResult().getMediaUrl());
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetMetadataForRecording(accountId, callId, recordingId);
Console.WriteLine(response.Data.Duration);
```

{% sample lang="ruby" %}

```ruby
response = voice_client.get_metadata_for_recording(VOICE_ACCOUNT_ID, call_id, recording_id)
puts response.data.media_url
```

{% sample lang="python" %}

```python
response = voice_client.get_metadata_for_recording(VOICE_ACCOUNT_ID, call_id, recording_id)
print(response.body.media_url)
```

{% sample lang="js" %}

```js
var response = await voiceController.getMetadataForRecording(accountId, callId, recordingId);
console.log(response.mediaUrl);
```

{% sample lang="php" %}

```php
try {
    $response = $voiceClient->getMetadataForRecording($accountId, $callId, $recordingId);
    print_r($response->getResult()->mediaUrl);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% common %}

The resource returned in the "mediaUrl" field can be used to retrieve the recording, see [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md).

{% endmethod %}
