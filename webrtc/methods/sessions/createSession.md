{% method %}

## Create a new session

Sessions are idempotent, so relevant parameters must be set in this function if desired


### Request URL

<code class="post">POST</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### Request Body Parameters
| Parameter                     | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| tag                           | User defined tag to associate with the session                                                      


### Response Attributes
| Property                      | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| id                            | None                                                                                                
| participants                  | The list of participants associated with this session                                               
| tag                           | User defined tag to associate with the session                                                      




{% common %}

### Example: Create a new session



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
