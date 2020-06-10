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
