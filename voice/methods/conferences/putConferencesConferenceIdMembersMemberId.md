{% method %}
## Update active Conference Member
Update properties of an active conference member.

### Request URL

<code class="post">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                  | Mandatory |
|:----------------|:-----------------------------------------------------------------------------|:----------|
| mute            | (optional) If true, member can't speak in the conference                     | No        |
| hold            | (optional) If true, member can't speak or hear in the conference             | No        |
| callIdsToCoach  | (optional) The list of call ids to coach                                     | No        |

{% common %}
### Example 1 of 1 : Put an active conference member on mute
{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "mute"       : "true"
    }'
```

{% sample lang="java" %}

```java
try {
    ApiModifyMemberRequest modifyMemberRequest = new ApiModifyMemberRequest();
    modifyMemberRequest.setMute(true);

    ApiResponse<Void> response = voiceClient.modifyMember(VOICE_ACCOUNT_ID, "conferenceId", "memberId", modifyMemberRequest);
    
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
ApiModifyMemberRequest modifyMemberRequest = new ApiModifyMemberRequest();
modifyMemberRequest.Mute = "true";

voiceClient.modifyMember(VOICE_ACCOUNT_ID, "conferenceId", "memberId", modifyMemberRequest);
```


{% sample lang="ruby" %}

```ruby
body = ApiModifyMemberRequest.new
body.mute = true

begin
    voice_client.modify_member(account_id, conference_id, member_id, :body => body)
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = ApiModifyMemberRequest()
body.mute = true

try:
    voice_client.modify_member(account_id, conference_id, member_id, body)
except Exception as e:
    print(e)
```

{% sample lang="js" %}

```js
var body = new BandwidthVoice.ApiModifyMemberRequest({
    "mute": true
});

try {
    await voiceController.modifyMember(accountId, conferenecId, memberId, body);
} catch (error) {
    console.error(error);
}
```

{% sample lang="php" %}

```php
$body = new BandwidthLib\Voice\Models\ApiModifyMemberRequest();
$body->mute = true;

try {
    $response = $voiceClient->modifyMember($accountId, $conferenceId, $memberId, $body);
    print_r($response);
} catch (BandwidthLib\APIException $e) {
    print_r($e);
}
```

{% common %}

{% endmethod %}
