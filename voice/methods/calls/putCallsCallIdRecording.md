{% method %}
## Pause or resume a recording on an active Call
Pause or resume a recording on an active phone call.

### Request URL
<code class="post">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording`

---

### Supported Parameters
| Parameter       | Description                                                                                                                            | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state           | The recording state. Possible values: <br><br> `paused` to pause an active recording<br>`recording` to resume a paused recording<br>   | Yes       |
{% common %}

### Example: Pause a currently active recording

{% sample lang="bash" %}

```bash
curl -v -X PUT https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording \
     --user {username}:{password}
     --header 'Content-type: application/json' \
     --data '
     {
       "state": "paused"
     }'
```

{% endmethod %}
