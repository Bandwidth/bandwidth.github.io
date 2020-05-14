{% method %}

## Two-Factor Authentication with MFA
Two-Factor authentication with Bandwidth MFA services

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/MFA`

#### Basic Authentication

Bandwidth's MFA API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter     | Description           |
|:--------------|:----------------------|
| to            | To telephone number   |
| from          | From telephone number |
| applicationId | Application Id        |
| scope         | scope                 |

### Response Attributes

| Property | Description |
|:---------|:------------|
| CallId   | The Call Id |


{% common %}

### Example 1 of 1: Authenticate with Voice

{% sample lang="http" %}

```bash
curl -X POST \
    --url "https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/voice" \
    -u '{username}:{password}' \
    --data-raw '
    {
        "to"            : "+12345678902",
        "from"          : "+12345678901",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "scope"         : "scope"
    }
  '
```
> The above command returns a JSON Response structured like this:

```http
Status: 200
Content-Type: application/json; charset=utf-8

{
  "CallId": "1256-adf14asd-52dfa"
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.CreateVoiceTwoFactor(accountId, new TwoFactorCodeRequestSchema
{
    ApplicationId = applicationId,
    From = fromNumber,
    To = toNumber,
    Scope = "scope csharp"
});

Console.WriteLine( response.Data.CallId[0] );
```

{% sample lang="java" %}

```java
TwoFactorCodeRequestSchema request = new TwoFactorCodeRequestSchema();
request.setApplicationId(applicationId);
request.setFrom(fromNumber);
request.setTo(toNumber);
request.setScope("scope");

ApiResponse<TwoFactorVoiceResponse> response = controller.createVoiceTwoFactor(accountId, request);

System.out.println( response.getResult().getCallId().get(0) );
```

{% sample lang="ruby" %}

```ruby
//Coming Soon
```

{% sample lang="python" %}

```python
//Coming Soon
```

{% sample lang="js" %}

```js
const payload = new mfa.TwoFactorCodeRequestSchema();
payload.applicationId = applicationId;
payload.from = fromNumber;
payload.to = toNumber;
payload.scope = 'scope';

const response = await controller.createVoiceTwoFactor(accountId, payload);

console.log(JSON.stringify(response, null, 2));
```

{% sample lang="php" %}

```php
//Coming Soon
```

{% endmethod %}
