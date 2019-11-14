{% method %}

## Retrieve Recording Information
Retrieve information about recordings that occurred during a call.

### Request URL

<code class="post">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter          | Description                                                                                          | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:----------|
| from               | Filter results by the `from` field.                                                                  | No        |
| to                 | Filter results by the `to` field..                                                                   | No        |
| minStartTime       | Filter results which have `startTime` greater than or equal `minStartTime` (in ISO8601 format).      | No        |
| maxStartTime       | Filter results which have `startTime` lower than `maxStartTime` (in ISO8601 format).                 | No        |

{% common %}

### Example: Retrieve recordings from a call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="bash" %}

```bash
curl "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f/recordings?from=+15552311772&to=+15552311778&minStartTime=2019-10-21T16:44:40.928Z&maxStartTime=2019-10-21T16:46:11.325Z" \
    --user {username}:{password} 
```

```json
[
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
]
```

{% endmethod %}
