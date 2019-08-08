{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                             | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------     |:----------|
| from               | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+19195551212`).                                                                                                      | Yes       |
| to                 | The number to call (must be an E.164 formatted number, like `+19195551212`                                                                                                                                              | Yes       |
| applicationId      | The id of the application to associate this call with, for billing purposes.                                                                                                                                            | Yes       |
| answerUrl          | The full URL to send the [Answer](../../bxml/callBacks/answer.md) event to when the called party answers. This endpoint should return the first [BXML document](../../bxml/about.md) to be executed in the call.        | Yes       |
| answerMethod       | (optional) The HTTP method to use for the request to `answerUrl`. GET or POST. Default value is POST.                                                                                                                   | No        |
| disconnectUrl      | (optional) The URL to send the [Disconnect](../../bxml/callBacks/disconnect.md) event to when the call ends. This event does not expect a BXML as response.                                                             | No        |
| disconnectMethod   | (optional) The HTTP method to use for the request to `disconnectUrl`. GET or POST. Default value is POST.                                                                                                               | No        |
| username           | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| password           | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                 | No        |
| callTimeout        | (optional) This is the timeout (in seconds) for the callee to answer the call.  Can be any numeric value (including decimals) between 1 and 300.  Default: 30                                                           | No        |
| tag                | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.  | No        |

**NOTE:** Any error that causes the call to be hung up (for example invalid BXML or rate limiting) will be delivered to the `disconnectUrl` via a [Disconnect](../../bxml/callBacks/disconnect.md) event.  This is currently the only way to receive user errors, so while `disconnectUrl` is not mandatory, we highly recommend providing it so that user errors can be delivered.

{% common %} 

### Example: Create an outbound phone call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="bash" %}

```bash
curl -v --request POST \
    --url https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls \
    --user {username}:{password} \
    --header 'Content-type: application/json' \
    --data '
    {
      "from"          : "+19195551212", 
      "to"            : "+19195551313", 
      "answerUrl"     : "http://www.myapp.com/hello",
      "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
    }'
```

```bash
HTTP/1.1 201 
Location: https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d
{
    "from": "+19195551212",
    "to": "+19195551313",
    "applicationId": "7fc9698a-b04a-468b-9e8f-91238c0d0086",
    "callId": "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "callUrl": "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "callTimeout": 30,
    "answerUrl": "http://www.myapp.com/hello",
    "answerMethod": "POST",
    "disconnectUrl": null,
    "disconnectMethod": "POST",
    "username": null,
    "password": null,
    "tag": null
}
```

{% endmethod %}
