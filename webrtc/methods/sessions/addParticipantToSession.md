{% method %}

## Add a participant to a session

Subscriptions can optionally be provided as part of this call


### Request URL
<code class="put">PUT</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| sessionId                   | Session the subscriptions are associated with.                                                    
| participants                | Subset of participants to subscribe to in the session. Optional.                                  




{% common %}

### Example: Add a participant to a session

{% sample lang="http" %}
```bash
curl -X PUT 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}' 
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
var subscriptions = new Subscriptions
{
    SessionId = "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    Participants = new List<ParticipantSubscription>
    {
        new ParticipantSubscription
        {
            ParticipantId = "568749d5-04d5-483d-adf5-deac7dd3d521"
        },
        new ParticipantSubscription
        {
            ParticipantId = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
        }
    }
};

controller.AddParticipantToSession(accountId, "sessionId", "participantId", subscriptions);
```

{% sample lang="java" %}

```java
Subscriptions subscriptions = new Subscriptions().toBuilder()
        .participants(Arrays.asList(
                new ParticipantSubscription().toBuilder().participantId("568749d5-04d5-483d-adf5-deac7dd3d521").build(),
                new ParticipantSubscription().toBuilder().participantId("0275e47f-dd21-4cf0-a1e1-dfdc719e73a7").build()
                )
        )
        .build();

try {
    ApiResponse<Void> response = controller.addParticipantToSession(accountId, "sessionId", "participantId", subscriptions);
} catch(Exception ex){
    // Handle Exception
}
```

{% sample lang="ruby" %}

```ruby
participant_subscription_1 = ParticipantSubscription.new
participant_subscription_1.participant_id = "568749d5-04d5-483d-adf5-deac7dd3d521"

participant_subscription_2 = ParticipantSubscription.new
participant_subscription_2.participant_id = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"

body = Subscriptions.new
body.session_id = "d8886aad-b956-4e1b-b2f4-d7c9f8162772"
body.participants = [
    participant_subscription_1,
    participant_subscription_2
]

web_rtc_client.add_participant_to_session(account_id, session_id, participant_id, :body => body)
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

web_rtc_client.add_participant_to_session(account_id, session_id, participant_id, body)
```

{% sample lang="js" %}

```js
var participantSubscription1 = new BandwidthWebRtc.ParticipantSubscription({
    "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
});

var participantSubscription2 = new BandwidthWebRtc.ParticipantSubscription({
    "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
});

var body = new BandwidthWebRtc.Subscriptions({
    "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    "participants": [
        participantSubscription1,
        participantSubscription2
    ]
});

await webRtcController.addParticipantToSession(accountId, sessionId, participantId, body);
```

{% sample lang="php" %}

```php
$participantSubscription1 = new BandwidthLib\WebRtc\Models\ParticipantSubscription();
$participantSubscription1->participantId = "568749d5-04d5-483d-adf5-deac7dd3d521";

$participantSubscription2 = new BandwidthLib\WebRtc\Models\ParticipantSubscription();
$participantSubscription2->participantId = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7";

$body = new BandwidthLib\WebRtc\Models\Subscriptions();
$body->sessionId = "d8886aad-b956-4e1b-b2f4-d7c9f8162772";
$body->participants = array(
    $participantSubscription1,
    $participantSubscription2
);

$webRtcClient->addParticipantToSession($accountId, $sessionId, $participantId, $body);
```

{% endmethod %}
