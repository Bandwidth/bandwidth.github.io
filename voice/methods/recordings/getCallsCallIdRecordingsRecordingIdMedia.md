{% method %}

## Download Recording

Retrieve the specified recording's audio file. [⚠️ Be sure to not expose your API Credentials to end-users](./about.md#caution-recordings)

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Download a recording

{% sample lang="http" %}

```bash
curl -v "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media" \
     --user {username}:{password} \
     --output recording.wav
```

```
HTTP/1.1 200
```

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% endmethod %}
