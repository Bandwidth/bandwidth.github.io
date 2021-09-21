{% method %}

## Update Conference
Update an active conference.

### Request URL

<code class="post">POST</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                     | Mandatory |
|:----------------|:--------------------------------------------------------------------------------|:----------|
| status          | (optional) Setting the conference status to `completed` ends the conference.    | No        |
| redirectUrl     | (optional) The URL to send the [conferenceRedirect](../../bxml/callbacks/conferenceRedirect.md) event which will provide new BXML. Not allowed if `state` is `completed`, but required if `state` is `active`    | No        |
| redirectMethod  | (optional) The HTTP method to use for the request to `redirectUrl` Not allowed if `state` is `completed`    | No        |
| username        | (optional) The username to send in the HTTP request to `redirectUrl`    | No        |
| password        | (optional) The password to send in the HTTP request to `redirectUrl`    | No        |

{% common %}

### Example 1 of 1: End a conference

{% sample lang="http" %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "status" : "completed"
    }'
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
String accountId = "123";
String conferenceId = "456";

ModifyConferenceRequest request = new ModifyConferenceRequest();
request.setStatus(StatusEnum.COMPLETED);

ApiResponse<Void> response = null;
try {
    response = controller.modifyConference(accountId, conferenceId, request);
} catch (IOException | ApiException e) {
    // Handle error
}
```

{% sample lang="csharp" %}

```csharp
var accountId = "123";
var conferenceId = "456";

var request = new ModifyConferenceRequest
{
    Status = StatusEnum.Completed
};

controller.ModifyConference(accountId, conferenceId, request);
```

{% sample lang="ruby" %}

```ruby
account_id = "123"
conference_id = "456"

body = ModifyConferenceRequest.new
body.status = "completed"

voice_client.modify_conference(account_id, conference_id, :body => body)
```

{% sample lang="python" %}

```python
account_id = "123"
conference_id = "456"

body = ModifyConferenceRequest()
body.status = "completed"

voice_client.modify_conference(account_id, conference_id, body)
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/voice';

const client = new Client({
    basicAuthUserName: 'username',
    basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';
const conferenceId = 'conf-abc12345-6def-abc1-2345-6defabc12345';

const response = await controller.modifyConference(accountId, conferenceId, {
    status: 'completed'
});
```

{% sample lang="php" %}

```php
$accountId = "123";
$conferenceId = "456";

$body = new BandwidthLib\Voice\Models\ModifyConferenceRequest();
$body->status = "completed";

$voiceClient->modifyConference($accountId, $conferenceId, $body);
```

{% endmethod %}
