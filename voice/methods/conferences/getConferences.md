{% method %}

## Retrieve Account's Conferences
Returns a max of 1000 conferences, sorted by `createdTime` from oldest to newest.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter      | Description                                                                                                                      | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| pageSize       | Specifies the max number of conferences that will be returned. Range: integer values between 1 - 1000. Default value is 1000.    | No        |
| name           | Filter results by the `name` field.                                                                                              | No        |
| minCreatedTime | Filter results to conferences which have a `createdTime` after or including `minCreatedTime` (in ISO8601 format).                | No        |
| maxCreatedTime | Filter results to conferences which have a `createdTime` before or including `maxCreatedTime` (in ISO8601 format).               | No        |

### Response Attributes

| Property              | Description                                                                                          |
|:----------------------|:-----------------------------------------------------------------------------------------------------|
| id                    | The conference id.                                                                                   |
| name                  | The conference name.                                                                                 |
| createdTime           | The time the conference was initiated, in ISO 8601 format.                                           |
| completedTime         | (optional) The time the conference was terminated, in ISO 8601 format.                               |
| conferenceEventUrl    | The URL to send the Conference events.                                                               |
| conferenceEventMethod | The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST.  |
| tag                   | A custom string that will be sent with this and all future callbacks.                                |

**NOTE:** If the number of conferences in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel="next"`) will be returned in the response. The {url} can be used to retrieve the next page of conference records.

{% common %}

### Example 1 of 1: Retrieve conferences using filters

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences?name={name}&minCreatedTime={minCreatedTime}&maxCreatedTime={maxCreatedTime}" \
    -u '{username}:{password}'
```

```json
[
    {
        "id": "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8",
        "name": "myConf",
        "createdTime": "2020-07-13T17:29:57.504Z",
        "completedTime": "2020-07-13T17:30:04.357Z",
        "conferenceEventUrl": "http://example.com",
        "conferenceEventMethod": "POST",
        "tag": "myConfTag"
    },
    {
        "id": "conf-95ac8d8d-f8713fd3-fbd5-4e51-a401-b47471997477",
        "name": "myConf",
        "createdTime": "2020-07-13T17:30:31.100Z",
        "completedTime": "2020-07-13T17:30:39.756Z",
        "conferenceEventUrl": "http://example.com",
        "conferenceEventMethod": "POST",
        "tag": null
    },
    {
        "id": "conf-2a91404e-d4c7bc39-6b90-4046-bc6b-cf479f1e6602",
        "name": "myConf",
        "createdTime": "2020-07-13T17:30:32.100Z",
        "completedTime": "2020-07-13T17:30:39.063Z",
        "conferenceEventUrl": "http://example.com",
        "conferenceEventMethod": "POST",
        "tag": "myConf3Tag"
    }
]
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
