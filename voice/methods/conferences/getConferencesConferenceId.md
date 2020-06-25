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
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

```ruby
# TODO
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

```php
// TODO
```

{% endmethod %}