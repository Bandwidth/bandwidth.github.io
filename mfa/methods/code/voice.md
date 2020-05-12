{% method %}

## Two-Factor Authentication with Voice
Two-Factor authentication with Bandwidth Voice services

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/voice`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

### Response Attributes

| Property | Description          |
|:---------|:---------------------|
| property | property description |


{% common %}

### Example 1 of 1: Authenticate with Voice

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/voice" \
    -u '{username}:{password}'
```

```json
{
  "TODO": "TODO"
}
```

{% sample lang="csharp" %}

```csharp
//Coming Soon
```

{% sample lang="java" %}

```java
//Coming Soon
```

{% sample lang="ruby" %}

```ruby
//Coming Soon
```

{% sample lang="python" %}

```python
//Coming Soon
```

{% sample lang="js" %}

```js
//Coming Soon
```

{% sample lang="php" %}

```php
//Coming Soon
```

{% endmethod %}
