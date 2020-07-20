{% method %}

## Retrieve Conference Information
Retrieve the current state of a specific conference.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

### Response Attributes

| Property              | Description                                                                                          |
|:----------------------|:-----------------------------------------------------------------------------------------------------|
| id                    | The conference id.                                                                                   |
| name                  | The conference name.                                                                                 |
| createdTime           | The time the conference was initiated, in ISO 8601 format.                                           |
| completedTime         | The time the conference was terminated, in ISO 8601 format.                                          |
| conferenceEventUrl    | The URL to send the Conference events.                                                               |
| conferenceEventMethod | The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST.  |
| tag                   | A custom string that will be sent with this and all future callbacks.                                |
| activeMembers         | The list of active members in the conference.                                                        |

{% common %}

### Example 1 of 1: Retrieve information about a specific conference

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}" \
    -u '{username}:{password}'
```

```json
{
    "id"                    : "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964",
    "name"                  : "myconf",
    "createdTime"           : "2020-05-21T18:01:45.133Z",
    "conferenceEventUrl"    : "https://www.example.com",
    "conferenceEventMethod" : "POST",
    "tag"                   : "testag",
    "activeMembers"         : [
        {
            "callId"        : "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf",
            "conferenceId"  : "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964",
            "memberUrl"     : "https://bandwidth.com/api/v2/accounts/111111/conferences/conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964/members/c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf",
            "mute"          : true,
            "hold"          : false,
            "callIdsToCoach": ["c-2a91404e-5d0c965c-b235-4a8f-b33c-9fc4d2644365"]
        },
        {
            "callId"        : "c-2a91404e-5d0c965c-b235-4a8f-b33c-9fc4d2644365",
            "conferenceId"  : "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964",
            "memberUrl"     : "https://bandwidth.com/api/v2/accounts/111111/conferences/conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964/members/c-2a91404e-5d0c965c-b235-4a8f-b33c-9fc4d2644365",
            "mute"          : false,
            "hold"          : false,
            "callIdsToCoach": []
        }
    ]
}
```

```
HTTP/1.1 200
```

{% sample lang="java" %}

```java
ApiResponse<ConferenceDetail> response = null;
try {
    response = controller.getConferenceById(accountId, conferenceId);
    System.out.println(response.getResult().getActiveMembers().get(0).getMemberUrl());
} catch (IOException | ApiException e) {
    // Handle Error
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.GetConferenceById(accountId, conferenceId);

Console.WriteLine(response.Data.ActiveMembers[0].MemberUrl);
```

{% sample lang="ruby" %}

```ruby
account_id = "12345"
conference_id = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964"
response = voice_client.get_conference_by_id(account_id, conference_id)
puts response.data.id
puts response.data.active_members[0].call_id
```

{% sample lang="python" %}

```python
account_id = "12345"
conference_id = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964"
response = voice_client.get_conference_by_id(account_id, conference_id)
print(response.body.id)
print(response.body.active_members[0].call_id)
```

{% sample lang="js" %}

```js
var accountId = "12345";
var conferenceId = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964";

var response = await voiceController.getConferenceById(accountId, conferenceId);
console.log(response.id);
console.log(response.activeMembers[0].callId);
```

{% sample lang="php" %}

```php
$accountId = "12345";
$conferenceId = "conf-04c62a3d-1cd6-4bb9-8c91-27ed04140964";
$response = $voiceClient->getConferenceById($accountId, $conferenceId);
echo $response->getResult()->id . "\n";
echo $response->getResult()->activeMembers[0]->callId . "\n";
```

{% endmethod %}
