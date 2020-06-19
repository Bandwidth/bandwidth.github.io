{% method %}

## Delete session by ID


### Request URL
<code class="delete">DELETE</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}`

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

```http
HTTP/1.1 204 (No Content)
Content-Type: application/json
```

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