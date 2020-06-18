{% method %}

## Add a participant to a session

Subscriptions can optionally be provided as part of this call


### Request URL

<code class="put">PUT</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### Request Body Parameters
| Parameter                     | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| sessionId                     | Session the subscriptions are associated with.                                                      
| participants                  | Subset of participants to subscribe to in the session. Optional.                                    


### Response Attributes
```http
HTTP/1.1 204 (No Content)
```



{% common %}

### Example: Add a participant to a session



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

