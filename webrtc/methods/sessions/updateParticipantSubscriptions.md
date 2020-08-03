{% method %}

## Update a participant's subscriptions

This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no `Subscriptions` object to remove all subscriptions


### Request URL
<code class="put">PUT</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| sessionId                   | Session the subscriptions are associated with.                                                    
| participants                | Subset of participants to subscribe to in the session. Optional.                                  




{% common %}

### Example: Update a participant's subscriptions

{% sample lang="http" %}
```bash
curl -X PUT 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
  "participants": [
    "568749d5-04d5-483d-adf5-deac7dd3d521",
    "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
  ]
}'
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
participant_subscription_1 = ParticipantSubscription(
    participant_id = "568749d5-04d5-483d-adf5-deac7dd3d521"
)
participant_subscription_2 = ParticipantSubscription(
    participant_id = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
)
body = Subscriptions(
    session_id = "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    participants = [
        participant_subscription_1,
        participant_subscription_2,
    ]
)

web_rtc_client.update_participant_subscriptions(account_id, participant_id, session_id, body)
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
