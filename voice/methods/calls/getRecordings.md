{% method %}

## Retrieve Account Recordings
Returns a max of 1000 recordings, sorted by startTime from oldest to newest

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/recordings`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter          | Description                                                                                          | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:----------|
| from               | Filter results by the `from` field.                                                                  | No        |
| to                 | Filter results by the `to` field..                                                                   | No        |
| minStartTime       | Filter results to recordings which have a `startTime` after or including `minStartTime` (in ISO8601 format).      | No        |
| maxStartTime       | Filter results to recordings which have a `startTime` before `maxStartTime` (in ISO8601 format).                 | No        |

{% common %}

### Example: Retrieve recordings using filters

{% sample lang="bash" %}

```bash
curl -v "https://voice.bandwidth.com/api/v2/accounts/5552319/recordings?from=+15552311772&to=+15552311778&minStartTime=2019-10-21T16:44:40.928Z&maxStartTime=2019-10-21T16:46:11.325Z" \
     --user {username}:{password}
```

```json
[
    {
        "accountId": "5552319",
        "callId": "c-2a913f94-b6d25421-6fcf-429d-b4b4-fee83151a688",
        "recordingId": "r-357381a2-d189-4404-9aa4-6ac344d21621",
        "to": "+15552311778",
        "from": "+15552311772",
        "duration": "PT1.415S",
        "direction": "inbound",
        "channels": 1,
        "startTime": "2019-10-21T16:44:40.928Z",
        "endTime": "2019-10-21T16:44:42.361Z",
        "fileFormat": "wav",
        "transcriptionStatus": "none",
        "mediaUrl": "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-b6d25421-6fcf-429d-b4b4-fee83151a688/recordings/r-357381a2-d189-4404-9aa4-6ac344d21621/media",
        "transcriptionUrl": null
    },
    {
        "accountId": "5552319",
        "callId": "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
        "recordingId": "r-d68201ef-d53e-4c6d-a743-1c1283909d41",
        "to": "+15552311778",
        "from": "+15552311772",
        "duration": "PT1.64S",
        "direction": "inbound",
        "channels": 1,
        "startTime": "2019-10-21T16:45:11.293Z",
        "endTime": "2019-10-21T16:45:12.950Z",
        "fileFormat": "wav",
        "transcriptionStatus": "none",
        "mediaUrl": "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f/recordings/r-d68201ef-d53e-4c6d-a743-1c1283909d41/media",
        "transcriptionUrl": null
    },
    {
        "accountId": "5552319",
        "callId": "c-2a913f94-c35a4c4f-113b-4112-a27e-4548b87106d1",
        "recordingId": "r-266d4c91-eeb7-40ab-93ff-57149f30f1e3",
        "to": "+15552311778",
        "from": "+15552311772",
        "duration": "PT1.405S",
        "direction": "inbound",
        "channels": 1,
        "startTime": "2019-10-21T16:45:41.107Z",
        "endTime": "2019-10-21T16:45:42.524Z",
        "fileFormat": "wav",
        "transcriptionStatus": "none",
        "mediaUrl": "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-c35a4c4f-113b-4112-a27e-4548b87106d1/recordings/r-266d4c91-eeb7-40ab-93ff-57149f30f1e3/media",
        "transcriptionUrl": null
    }
]
```

The resource returned in the "mediaUrl" field can be used to retrieve the recording, see [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md).

{% endmethod %}
