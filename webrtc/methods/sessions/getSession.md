{% method %}

## Get session by ID


### Request URL
<code class="get">GET</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| id                          | Unique id of the session                                                                          
| participants                | The list of participants associated with this session                                             
| tag                         | User defined tag to associate with the session                                                    



{% common %}

### Example: Get session by ID

{% sample lang="http" %}
```bash
curl -X GET 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
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
//coming soon
```

{% sample lang="java" %}

```java
//coming soon
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

{% sample lang="python" %}

```python
#coming soon
```

{% sample lang="js" %}

```js
//coming soon
```

{% sample lang="php" %}

```php
//coming soon
```

{% endmethod %}
