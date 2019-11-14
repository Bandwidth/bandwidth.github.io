{% method %}

## Retrieve Recording Information
Retrieve information about a specific recording.

### Request URL

<code class="post">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example: Retrieve recordings from a call

{% sample lang="bash" %}

```bash
curl "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f/recordings/r-d68201ef-d53e-4c6d-a743-1c1283909d41" \
    --user {username}:{password} 
```

```json
{
    "accountId": "5552319",
    "callId": "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    "recordingId": "r-d68201ef-d53e-4c6d-a743-1c1283909d41",
    "to": "+15552311778",
    "from": "+15552311772",
    "duration": "PT11.64S",
    "direction": "inbound",
    "channels": 1,
    "startTime": "2019-10-21T16:45:11.293Z",
    "endTime": "2019-10-21T16:55:12.950Z",
    "fileFormat": "wav",
    "transcriptionStatus": "none",
    "mediaUrl": "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f/recordings/r-d68201ef-d53e-4c6d-a743-1c1283909d41/media",
    "transcriptionUrl": null
}
```

The resource returned in the "mediaUrl" field can be used to retrieve the recording, see [`/calls/{callId}/recordings/{recordingId}/media`](calls/getCallsCallIdRecordingsRecordingIdMedia.md).

{% endmethod %}
