{% method %}

## Retrieve Conference Member Information
Retrieve the current state of a specific conference member.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

### Response Attributes

| Property          | Description                                                                           |
|:------------------|:--------------------------------------------------------------------------------------|
| callId            | The conference member id.                                                             |
| conferenceId      | The conference id from the conference this member belongs to.                         |
| memberUrl         | The URL to to interact with this member.                                              |
| mute              | If true, the member is on mute and cannot speak in the conference.                    |
| hold              | If true, the member is on hold and cannot speak or hear anything in the conference.   |
| callIdsToCoach    | The list of call ids to coach.                                                        |

{% common %}

### Example 1 of 1: Retrieve information about a specific conference member

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}" \
    -u '{username}:{password}'
```

```json
{
    "callId"            : "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf",
    "conferenceId"      : "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964",
    "memberUrl"         : "https://bandwidth.com/api/v2/accounts/1111111/conferences/conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964/members/c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf",
    "mute"              : true,
    "hold"              : false,
    "callIdsToCoach"    : ["c-2a91404e-5d0c965c-b235-4a8f-b33c-9fc4d2644365"]
}
```

```
HTTP/1.1 200
```

{% sample lang="java" %}

```java
ApiResponse<ConferenceMemberDetail> response = null;
try {
    response = controller.getConferenceMember(accountId, conferenceId, memberId);
    System.out.println(response.getResult().getMemberUrl());
} catch (IOException | ApiException e) {
    // Handle Error
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetConferenceMember(accountId, conferenceId, memberId);

Console.WriteLine(response.Data.MemberUrl);
```

{% sample lang="ruby" %}

```ruby
account_id = "12345"
conference_id = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964"
member_id = "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf"
response = voice_client.get_conference_member(account_id, conference_id, member_id)
puts response.data.call_id
puts response.data.call_ids_to_coach[0]
```

{% sample lang="python" %}

```python
account_id = "12345"
conference_id = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964"
member_id = "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf"
response = voice_client.get_conference_member(account_id, conference_id, member_id)
print(response.body.call_id)
print(response.body.call_ids_to_coach[0])
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthUserName: username,
    basicAuthPassword: password
});

const controller = new ApiController(client);

const accountId = '1111111';
const conferenceId = 'conf-abc12345-6def-abc1-2345-6defabc12345';
const memberId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';

const response = await controller.getConferenceMember(accountId, conferenceId, memberId);
```

{% sample lang="php" %}

```php
$accountId = "12345";
$conferenceId = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964";
$memberId = "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf";
$response = $voiceClient->getConferenceMember($accountId, $conferenceId, $memberId);
echo $response->getResult()->callId . "\n";
echo $response->getResult()->callIdsToCoach[0] . "\n";
```

{% endmethod %}
