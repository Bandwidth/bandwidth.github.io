{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/accounts/{accountId}/calls/`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                             | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------     |:----------|
| from               | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+19195551212`).                                                                                                      | Yes       |
| to                 | The number to call (must be an E.164 formatted number, like `+19195551212`                                                                                                                                              | Yes       |
| applicationId      | The id of the application to associate this call with, for billing purposes.                                                                                                                                            | Yes       |
| answerUrl          | The full URL to send the [Answer](../../bxml/callBacks/answer.md) event to when the called party answers. This endpoint should return the first [BXML document](../../bxml/about.md) to be executed in the call.         | Yes       |
| answerMethod       | (optional) The HTTP method to use for the request to `answerUrl`. GET or POST. Default value is POST.                                                                                                                   | No        |
| disconnectUrl      | (optional) The URL to send the [Disconnect](../../bxml/callBacks/disconnect.md) event to when the call ends. This event does not expect a BXML as response.                                                             | No        |
| disconnectMethod   | (optional) The HTTP method to use for the request to `disconnectUrl`. GET or POST. Default value is POST.                                                                                                               | No        |
| username           | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| password           | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| callTimeout        | (optional) This is the timeout (in seconds) for the callee to answer the call.  Can be any numeric value (including decimals) between 1 and 120.  Default: 30                                                           | No        |
| tag                | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.  | No        |

{% common %}

### Example: Create an outbound phone call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="bash" %}

```bash
curl -u username:password -v -X POST https://voice.bandwidth.com/accounts/1234/calls \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "+19195551212",
		"to": "+19195551313",
		"answerUrl": "http://www.myapp.com/hello",
		"applicationId":"testApp"
	}'
```

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: https://voice.bandwidth.com/accounts/{accountId}/calls/{callId}
```

{% endmethod %}
