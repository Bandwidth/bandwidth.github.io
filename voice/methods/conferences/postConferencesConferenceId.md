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

CallEngineModifyConferenceRequest request = new CallEngineModifyConferenceRequest();
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

var request = new CallEngineModifyConferenceRequest
{
    Status = StatusEnum.Completed
};

controller.ModifyConference(accountId, conferenceId, request);
```

{% sample lang="ruby" %}

```ruby
# TODO
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
var accountId = '123';
var conferenceId = '456';
var body = new CallEngineModifyConferenceRequest({"status":"completed"});

controller.modifyConference(accountId, conferenceId, body, function(error, response, context) {
    // Handle callback
});
```

{% sample lang="php" %}

```php
// TODO
```

{% endmethod %}
