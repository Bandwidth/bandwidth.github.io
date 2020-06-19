{% method %}

## Get participant by ID


### Request URL

<code class="get">GET</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/participants/{participantId}`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### No Request Body Parameters


### Response Attributes
| Property                      | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| id                            | None                                                                                                
| callbackUrl                   | Full callback url to use for notifications about this participant                                   
| publishPermissions            | None                                                                                                
| sessions                      | List of session ids this participant is associated with                                             
| subscriptions                 | None                                                                                                
| tag                           | User defined tag to associate with the participant                                                  




{% common %}

### Example: Get participant by ID



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
{% endmethod %}
