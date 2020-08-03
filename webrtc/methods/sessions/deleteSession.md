{% method %}

## Delete session by ID


### Request URL
<code class="delete">DELETE</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---




{% common %}

### Example: Delete session by ID

{% sample lang="http" %}
```bash
curl -X DELETE 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
```

> Responds

```json

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
web_rtc_client.delete_session(account_id, session_id)
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
