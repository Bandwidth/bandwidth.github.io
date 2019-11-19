{% method %}
## Pause or resume a recording on an active Call
Pause or resume a recording on an active phone call.

### Request URL

<code class="put">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters
| Parameter       | Description                                                                                                                            | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state           | The recording state. Possible values: <br><br> `paused` to pause an active recording<br>`recording` to resume a paused recording<br>   | Yes       |
{% common %}

### Example 1 of 1: Pause a currently active recording

{% sample lang="http" %}

```bash
curl -v -X PUT https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording \
     --user {username}:{password}
     --header 'Content-type: application/json' \
     --data '
     {
       "state": "paused"
     }'
```

{% sample lang="csharp" %}

```csharp

//coming soon
;
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% endmethod %}