{% method %}
## Update active Call
Update properties of an active phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/v2/accounts/{accountId}/calls/{callId}`

---

### Supported Parameters

| Parameter       | Description                                                                                                                                                                                                                                                         | Mandatory |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state           | (optional) The call state. Possible values: <br><br> `active` to redirect the call (default)<br>`completed` to hangup the call<br>                                                                                                                                  | No        |
| redirectUrl     | (optional) The URL to send the [Redirect](../../bxml/callBacks/redirect.md) event to which will provide new BXML<br><br>Required if `state` is `active`<br><br>Not allowed if `state` is `completed`                                                                | No        |
| redirectMethod  | (optional) The HTTP method to use for the request to `redirectUrl`. GET or POST. Default value is POST.<br><br>Not allowed if `state` is `completed`                                                                                                                | No        |
| username        | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                                                             | No        |
| password        | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                                                             | No        |
| tag             | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.<br><br>Not allowed if `state` is `completed` | No        |

{% common %}
### Example: Redirect an existing phone call to a new URL
{% sample lang="bash" %}

```bash
curl -u username:password -v -X POST https://voice.bandwidth.com/v2/accounts/{accountId}/calls/{callId}\
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"active",
		"redirectUrl":"http://www.myapp.com/new"
	}'
```

{% common %}
### Example: Hang Up a Phone Call

{% sample lang="bash" %}

```bash
curl -v -X POST https://voice.bandwidth.com/v2/accounts/{accountId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"completed"
	}'
```

{% endmethod %}