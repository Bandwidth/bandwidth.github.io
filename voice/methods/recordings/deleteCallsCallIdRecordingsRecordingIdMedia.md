{% method %}

## Delete Recording Media

Delete the media of the specified recording.

### Request URL

<code class="delete">DELETE</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Delete recording

{% sample lang="http" %}

```bash
curl -X DELETE \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media" \
     -u '{username}:{password}'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
// coming soon
```

{% sample lang="csharp" %}

```csharp
// coming soon
```

{% sample lang="ruby" %}

```ruby
# coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% sample lang="js" %}

```js
// coming soon
```

{% sample lang="php" %}

```php
// coming soon
```

{% endmethod %}
