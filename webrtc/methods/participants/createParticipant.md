{% method %}

## Create a new participant under this account

Participants are idempotent, so relevant parameters must be set in this function if desired


### Request URL

<code class="post">POST</code>`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/participants`

#### Basic Authentication

WebRtc leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---
### Request Body Parameters
| Parameter                     | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| callbackUrl                   | Full callback url to use for notifications about this participant                                   
| publishPermissions            | None                                                                                                
| subscriptions                 | None                                                                                                
| tag                           | User defined tag to associate with the participant                                                  


### Response Attributes
| Property                      | Description                                                                                         
|:------------------------------|:----------------------------------------------------------------------------------------------------
| participant                   | None                                                                                                
| token                         | Auth token for the returned participant                                                             




{% common %}

### Example: Create a new participant under this account

{% sample lang="http" %}
```bash
curl -X POST \
  --url 'https://api.webrtc.bandwidth.com' \
  -u '{username}:{password}' \
  -H 'Content-type: application/json' \
  --data-raw '
  {
    "callbackUrl": "https://example.com/callback",
    "publishPermissions": ['AUDIO', 'VIDEO'],
    "tag": "Participant Patrick"
  }'

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

