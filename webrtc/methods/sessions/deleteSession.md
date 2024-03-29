<div id="banner">
  <div class="bannerContainer">
    <p>The WebRTC documentation has migrated. Please visit <a href="https://new.dev.bandwidth.com/apis/webrtc#operation/deleteSession">our new API Reference site</a> for the most up-to-date documentation.</p>
    <p id="bannerClose"><i class="fa fa-close"></i></p>
  </div>
</div>
<br/>
<br/>
{% method %}

## Delete session by ID


### Request URL
<code class="delete">DELETE</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---




{% common %}

### Example: Delete session by ID

{% sample lang="http" %}
```bash
curl -X DELETE
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}'
  -u '{username}:{password}'
  -H 'Content-type: application/json'
```

> Responds

```json

```

### Potential Error Responses

```http
HTTP/1.1 400 (Bad Request)
Content-Type: application/json
```

```http
HTTP/1.1 401 (Unauthorized)
Content-Type: application/json
```

```http
HTTP/1.1 403 (Access Denied)
Content-Type: application/json
```

```http
HTTP/1.1 50x (Unexpected Error)
Content-Type: application/json
```

{% endmethod %}
