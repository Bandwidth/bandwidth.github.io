{% method %}

## Update a participant's subscriptions

This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no `Subscriptions` object to remove all subscriptions


### Request URL

<code class="put">PUT</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions`

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

### Example: Update a participant's subscriptions



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
HTTP/1.1 404 (Not Found)
Content-Type: application/json
```

```http
HTTP/1.1 50x (Unexpected Error)
Content-Type: application/json
```
{% endmethod %}
