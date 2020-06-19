{% method %}

## Create a new participant under this account

Participants are idempotent, so relevant parameters must be set in this function if desired


### Request URL
<code class="post">POST</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/participants`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| callbackUrl                 | Full callback url to use for notifications about this participant                                 
| publishPermissions          | Defines if this participant can publish audio or video                                            
| subscriptions               | Subscription information for this participant                                                     
| tag                         | User defined tag to associate with the participant                                                


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| participant                 | A participant object                                                                              
| token                       | Auth token for the returned participant                                                           



{% common %}

### Example: Create a new participant under this account

{% sample lang="http" %}
```bash
curl -X POST 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "callbackUrl": "https://example.com/callback",
  "publishPermissions": [
    "VIDEO",
    "AUDIO"
  ],
  "subscriptions": null,
  "tag": "participant1"
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

{% endmethod %}