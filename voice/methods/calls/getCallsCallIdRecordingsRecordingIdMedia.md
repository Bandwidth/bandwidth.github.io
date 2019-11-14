{% method %}

## Retrieve a Recording
Retrieve a specific recording.

### Request URL

<code class="post">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example: Retrieve a specific recording

{% sample lang="bash" %}

```bash
curl -v "https://voice.bandwidth.com/api/v2/accounts/5552319/calls/c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f/recordings/r-d68201ef-d53e-4c6d-a743-1c1283909d41/media" \
     --user {username}:{password} \
     --output recording.wav
```

```
HTTP/1.1 200 
```

{% endmethod %}
