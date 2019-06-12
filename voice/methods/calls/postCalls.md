{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}/calls/`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                        | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from               | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+19195551212`).                                                                                                 | Yes       |
| to                 | The number to call (must be either an E.164 formatted number, like `+19195551212`, or a valid SIP URI, like `sip:someone@somewhere.com`).                                                                          | Yes       |
| answerUrl          | **NOW REQUIRED** The full URL to send the [Answer](../../bxml/callBacks/answer.md) event to when the called party answers. This endpoint should return the first [BXML document](../../bxml/bxml.md) to be executed in the call.                | Yes        |
| answerMethod       | (optional) The HTTP method to use for the request to `answerUrl`. GET or POST. Default value is POST. | No        |
| callCompleteUrl    | (optional) The URL to send the [callComplete](../../bxml/callBacks/callComplete.md) event to when the call ends. This event does not expect a BXML as response.                | No        |
| callCompleteMethod | (optional) The HTTP method to use for the request to `callCompleteUrl`. GET or POST. Default value is POST. | No        |
| tag                | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.                                                                                                                                                 | No        |

{% common %}

### Example: Create an outbound phone call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="bash" %}

```bash
curl -u username:password -v -X POST https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/1234/calls \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "+19195551212",
		"to": "+19195551313",
		"answerUrl": "http://www.myapp.com/hello"
	}'
```

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v2/accounts/{accountId}/calls/{callId}
```

{% endmethod %}
