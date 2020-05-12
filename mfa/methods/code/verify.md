{% method %}

## Two-Factor Verify Code
Two-Factor authentication with Bandwidth services

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/verify`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter     | Description                |
|:--------------|:---------------------------|
| to            | To telephone number        |
| from          | From telephone number      |
| applicationId | Application Id             |
| scope         | scope                      |
| code          | The code sent to requester |

### Response Attributes

| Property | Description        |
|:---------|:-------------------|
| valid    | Was the code valid |


{% common %}

### Example 1 of 1: Verify Code

{% sample lang="http" %}

```bash
curl -X POST \
    --url "https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/verify" \
    -u '{username}:{password}' \
    --data-raw '
    {
        "to"            : "+12345678902",
        "from"          : "+12345678901",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "scope"         : "scope",
        "code"          : "12598"
    }
  '
```
> The above command returns a JSON Response structured like this:

```http
Status: 200
Content-Type: application/json; charset=utf-8

{
  "valid": true
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.CreateVerifyTwoFactor(accountId, new TwoFactorVerifyRequestSchema
{
    ApplicationId = applicationId,
    From = fromNumber,
    To = toNumber,
    Scope = "scope csharp",
    Code = "159193"
});

Console.WriteLine(response.Data.Valid);
```

{% sample lang="java" %}

```java
//Coming Soon
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
//Coming Soon
```

{% sample lang="php" %}

```php
//Coming Soon
```

{% endmethod %}
