{% method %}

## Delete Conference
Delete an active conference.

### Request URL

<code class="delete">DELETE</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Delete a conference

{% sample lang="http" %}

```bash
curl -X DELETE \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}" \
     -u '{username}:{password}'
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
