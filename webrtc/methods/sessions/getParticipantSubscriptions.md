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

```json
{
  "sessionId"           : "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
  "participants"        : [
      "568749d5-04d5-483d-adf5-deac7dd3d521",
      "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
 ]
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
