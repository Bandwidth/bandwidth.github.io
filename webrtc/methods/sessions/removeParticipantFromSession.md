{% method %}

## Remove a participant from a session

This will automatically remove any subscriptions the participant has associated with this session


### Request URL

<code class="delete">DELETE</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### No Request Body Parameters


### Response Attributes
```http
HTTP/1.1 204 (No Content)
```



{% common %}

### Example: Remove a participant from a session



> Responds

```http
HTTP/1.1 204 (No Content)
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
HTTP/1.1 404 (Not Found)
Content-Type: application/json
```

```http
HTTP/1.1 50x (Unexpected Error)
Content-Type: application/json
```

