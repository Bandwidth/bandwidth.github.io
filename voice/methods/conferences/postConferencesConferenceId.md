{% method %}

## Update Conference
Update an active conference.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                     | Mandatory |
|:----------------|:--------------------------------------------------------------------------------|:----------|
| status          | (optional) Setting the conference status to `completed` ends the conference.    | No        |

{% common %}

### Example 1 of 1: End a conference

{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "status" : "completed"
    }'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

```ruby
account_id = "123"
conference_id = "456"

body = CallEngineModifyConferenceRequest.new
body.status = "completed"

voice_client.modify_conference(account_id, conference_id, :body => body)
```

{% sample lang="python" %}

```python
account_id = "123"
conference_id = "456"

body = CallEngineModifyConferenceRequest()
body.status = "completed"

voice_client.modify_conference(account_id, conference_id, body)
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

```php
$accountId = "123";
$conferenceId = "456";

$body = new BandwidthLib\Voice\Models\CallEngineModifyConferenceRequest();
$body->status = "completed";

$voiceClient->modifyConference($accountId, $conferenceId, $body);
```

{% endmethod %}
