{% method %}

## Get a participant's subscriptions


### Request URL

<code class="get">GET</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### No Request Body Parameters


### Response Attributes
| Property                      | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| sessionId                     | Session the subscriptions are associated with.                                                      
| participants                  | Subset of participants to subscribe to in the session. Optional.                                    




{% common %}

### Example: Get a participant's subscriptions



> Responds

```http
HTTP/1.1 200 (Success)
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

