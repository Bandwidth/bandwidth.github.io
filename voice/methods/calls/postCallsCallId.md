{% method %}
## Update active Call
Update properties of an active phone call.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                                                                                                                                                                                                         | Mandatory |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state           | (optional) The call state. Possible values: <br><br> `active` to redirect the call (default)<br>`completed` to hangup the call<br>                                                                                                                                  | No        |
| redirectUrl     | (optional) The URL to send the [Redirect](../../bxml/callbacks/redirect.md) event to which will provide new BXML<br><br>Required if `state` is `active`<br><br>Not allowed if `state` is `completed`                                                                | No        |
| redirectMethod  | (optional) The HTTP method to use for the request to `redirectUrl`. GET or POST. Default value is POST.<br><br>Not allowed if `state` is `completed`                                                                                                                | No        |
| username        | (optional) The username to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                                                             | No        |
| password        | (optional) The password to send in the HTTP request to `answerUrl` and `disconnectUrl`.                                                                                                                                                                             | No        |
| tag             | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.<br><br>Not allowed if `state` is `completed` | No        |

{% common %}
### Example 1 of 2 : Redirect an existing phone call to a new URL
{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "state"       : "active",
      "redirectUrl" : "http://www.myapp.com/new"
    }'
```

{% sample lang="csharp" %}

```csharp
ApiModifyCallRequest apiModifyCallRequest = new ApiModifyCallRequest();
apiModifyCallRequest.RedirectUrl = "http://www.myapp.com/new";
apiModifyCallRequest.State = StateEnum.ACTIVE;

voiceClient.ModifyCall(VOICE_ACCOUNT_ID, callId, apiModifyCallRequest);
```


{% sample lang="ruby" %}

```ruby
body = ApiModifyCallRequest.new
body.redirect_url = "http://www.myapp.com/new"
body.state = "active"

begin
    voice_client.modify_call("55555", "callId", body: body)
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = ApiModifyCallRequest()
body.redirect_url = "http://www.myapp.com/new"
body.state = "active"

try:
    voice_client.modify_call("55555", "callId", body)
except Exception as e:
    print(e)
```

{% common %}

### Example 2 of 2: Hang Up a Phone Call

{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "state": "completed"
    }'
```

{% sample lang="csharp" %}

```csharp
ApiModifyCallRequest apiModifyCallRequest = new ApiModifyCallRequest();
apiModifyCallRequest.State = StateEnum.COMPLETED;

voiceClient.ModifyCall(VOICE_ACCOUNT_ID, callId, apiModifyCallRequest);
```


{% sample lang="ruby" %}

```ruby
body = ApiModifyCallRequest.new
body.state = "completed"

begin
    voice_client.modify_call("55555", "callId", body: body)
rescue Exception => e
    puts e
end
```

{% sample lang="python" %}

```python
body = ApiModifyCallRequest()
body.state = "completed"

try:
    voice_client.modify_call("55555", "callId", body)
except Exception as e:
    print(e)
```

{% endmethod %}
