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
  "subscriptions": {
    "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    "participants": [
      {
        "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
      },
      {
        "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
      }
    ]
  },
  "tag": "participant1"
}'
```

> Responds

```json
{
  "participant"         : {
      "id"                  : "320e2af6-13ec-498d-8b51-daba52c37853",
      "callbackUrl"         : "https://example.com/callback",
      "publishPermissions"  : [
          "VIDEO",
          "AUDIO"
     ],
      "sessions"            : [
          "75c21163-e110-41bc-bd76-1bb428ec85d5"
     ],
      "subscriptions"       : {
          "sessionId"           : "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
          "participants"        : [
              {
                  "participantId"       : "568749d5-04d5-483d-adf5-deac7dd3d521"
              },
              {
                  "participantId"       : "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
              } 
         ]
     },
      "tag"                 : "participant1"
 },
  "token"               : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc"
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
participant_subscription_1 = ParticipantSubscription.new
participant_subscription_1.participant_id = "568749d5-04d5-483d-adf5-deac7dd3d521"

participant_subscription_2 = ParticipantSubscription.new
participant_subscription_2.participant_id = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"

subscriptions = Subscriptions.new
subscriptions.session_id = "d8886aad-b956-4e1b-b2f4-d7c9f8162772"
subscriptions.participants = [
    participant_subscription_1,
    participant_subscription_2
]

body = Participant.new
body.callback_url = "https://example.com/callback"
body.publish_permissions = [
    PublishPermissionEnum::AUDIO,
    PublishPermissionEnum::VIDEO
]
body.subscriptions = subscriptions
body.tag = "participant1"

response = web_rtc_client.create_participant(account_id, :body => body)
puts response.data.participant.id
puts response.data.token
```

{% sample lang="python" %}

```python
participant_subscription_1 = ParticipantSubscription(
    participant_id = "568749d5-04d5-483d-adf5-deac7dd3d521"
)
participant_subscription_2 = ParticipantSubscription(
    participant_id = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
)
subscriptions = Subscriptions(
    session_id = "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    participants = [
        participant_subscription_1,
        participant_subscription_2,
    ]
)

body = Participant(
    callback_url = "https://example.com/callback",
    publish_permissions = [
        PublishPermissionEnum.AUDIO,
        PublishPermissionEnum.VIDEO
    ],
    subscriptions = subscriptions,
    tag = "participant1"
)

response = web_rtc_client.create_participant(account_id, body)
print(response.body.participant.id)
print(response.body.token)
```

{% sample lang="js" %}

```js
//coming soon
```

{% sample lang="php" %}

```php
$participantSubscription1 = new BandwidthLib\WebRtc\Models\ParticipantSubscription();
$participantSubscription1->participantId = "568749d5-04d5-483d-adf5-deac7dd3d521";

$participantSubscription2 = new BandwidthLib\WebRtc\Models\ParticipantSubscription();
$participantSubscription2->participantId = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7";

$subscriptions = new BandwidthLib\WebRtc\Models\Subscriptions();
$subscriptions->sessionId = "d8886aad-b956-4e1b-b2f4-d7c9f8162772";
$subscriptions->participants = array(
    $participantSubscription1,
    $participantSubscription2
);

$body = new BandwidthLib\WebRtc\Models\Participant();
$body->callbacUrl = "https://example.com/callback";
$body->publishPermissions = array(
    BandwidthLib\WebRtc\Models\PublishPermissionEnum::AUDIO,
    BandwidthLib\WebRtc\Models\PublishPermissionEnum::VIDEO
);
$body->subscriptions = $subscriptions;
$body->tag = "participant1";

$response = $webRtcClient->createParticipant($accountId, $body);
print_r($response->getResult()->participant->id);
echo "\n";
print_r($response->getResult()->token);
```

{% endmethod %}
