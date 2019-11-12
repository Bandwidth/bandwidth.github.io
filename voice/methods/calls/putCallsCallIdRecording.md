{% method %}
## Pause or resume recording on an active Call
Pause or resume recording on an active phone call.

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
curl -u username:password -v -X PUT https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recording \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"paused"
	}'
```

{% endmethod %}
