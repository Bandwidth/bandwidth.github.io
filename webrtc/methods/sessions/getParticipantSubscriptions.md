{% method %}

## Get a participant's subscriptions


### Request URL
<code class="get">GET</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| sessionId                   | Session the subscriptions are associated with.                                                    
| participants                | Subset of participants to subscribe to in the session. Optional.                                  



{% common %}

### Example: Get a participant's subscriptions

{% sample lang="http" %}
```bash
curl -X GET 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
```

> Responds

```http
HTTP/1.1 200 (Success)
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