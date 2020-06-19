{% method %}

## Get participant by ID


### Request URL
<code class="get">GET</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/participants/{participantId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| id                          | Unique id of the participant                                                                      
| callbackUrl                 | Full callback url to use for notifications about this participant                                 
| publishPermissions          | Defines if this participant can publish audio or video                                            
| sessions                    | List of session ids this participant is associated with                                           
| subscriptions               | Subscription information for this participant                                                     
| tag                         | User defined tag to associate with the participant                                                



{% common %}

### Example: Get participant by ID

{% sample lang="http" %}
```bash
curl -X GET 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants/{participantId}' 
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