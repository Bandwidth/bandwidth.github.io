{% method %}
## Update active Conference Member
Update properties of an active conference member.

### Request URL

<code class="put">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                                                          | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------------------------------------|:----------|
| mute            | (optional) If true, member can't speak in the conference. If omitted, the parameter will not be modified.            | No        |
| hold            | (optional) If true, member can't speak or hear in the conference. If omitted, the parameter will not be modified.    | No        |

{% common %}

### Example 1 of 1 : Put an active conference member on mute

{% sample lang="http" %}

```bash
curl -X PUT \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "mute"       : true
    }'
```

```
HTTP/1.1 204
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