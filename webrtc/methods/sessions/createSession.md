{% method %}

## Create a new session

Sessions are idempotent, so relevant parameters must be set in this function if desired


### Request URL
<code class="post">POST</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| tag                         | User defined tag to associate with the session                                                    


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| id                          | Unique id of the session                                                                          
| participants                | The list of participants associated with this session                                             
| tag                         | User defined tag to associate with the session                                                    



{% common %}

### Example: Create a new session

{% sample lang="http" %}
```bash
curl -X POST 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "tag": "session1"
}'
```

> Responds

```json
{
  "id"                  : "75c21163-e110-41bc-bd76-1bb428ec85d5",
  "participants"        : [
      "c0c0dcfd-4ce4-4752-a8d9-b6ddeb72bead",
      "320e2af6-13ec-498d-8b51-daba52c37853"
 ],
  "tag"                 : "session1"
}
```

### Potential Error Responses

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

{% sample lang="csharp" %}

```csharp
var session = new Session
{
    Tag = "session1"
};

var response = controller.CreateSession(accountId, session);
```

{% sample lang="java" %}

```java
Session session = new Session().toBuilder()
        .tag("session1")
        .build();

try {
    ApiResponse<Session> response = controller.createSession(accountId, session);
} catch(Exception ex){
    // Handle Exception
}
```

{% sample lang="ruby" %}

```ruby
body = Session.new
body.tag = "session1"

response = web_rtc_client.create_session(account_id, :body => body)
puts response.data.id
#puts response.data.participants[0].participant_id #todo: fix openapi spec
```

{% sample lang="python" %}

```python
body = Session(
    tag = "session1"
)

response = web_rtc_client.create_session(account_id, body)
print(response.body.id)
#print(response.body.participants[0].participant_id) #todo: fix openapi spec
```

{% sample lang="js" %}

```js
var body = new BandwidthWebRtc.Session({
    "tag": "session1"
});

var response = await webRtcController.createSession(accountId, body);
console.log(response);
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\WebRtc\Models\Session();
$body->tag = "session1";

$response = $webRtcClient->createSession($accountId, $body);
print_r($response->getResult()->id);
echo "\n";
//print_r($response->getResult()->participants[0]->participantId): //todo: fix OpenAPI spec
```

{% endmethod %}
