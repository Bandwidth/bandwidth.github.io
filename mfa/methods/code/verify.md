{% method %}

## Two-Factor Verify Code
Two-Factor authentication with Bandwidth services

⚠️ Your account must be activated to use the MFA product. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/verify`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter     | Required | Description                |
|:--------------|:---------------------------|
| to            | Yes | The phone number the original message was sent to (must be in E.164 format, like `+19195551212`).  |
| from          | Yes | One of your telephone numbers where the original message was sent from (must be in E.164 format, like `+19195551212`). This number must be associated with the voice or messaging application given by the `applicationId` parameter.  |
| applicationId | Yes | The voice or messaging application id used to make the initial request |
| scope         | Required if the initial request had a `scope` value | scope of the request. This value must match the scope of the initial request |
| code          | Yes | The code received to validate |
| digits | Yes | The number of digits for your 2fa code. The valid number ranges from 4 to 8, inclusively. |
| expirationTimeInMinutes | Yes| The time period, in minutes, to validate the 2fa code. By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid. The valid range for `expirationTimeInMinutes` is between 1 and 15 minutes, inclusively. |

### Response Attributes

| Property | Description        |
|:---------|:-------------------|
| valid    | Boolean value that states if the validation was successful. `true` if the code is valid, `false` otherwise |


{% common %}

### Example 1 of 1: Verify Code

{% sample lang="http" %}

```bash
curl -X POST \
    --url "https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/verify" \
    -u '{username}:{password}' \
    --data-raw '
    {
        "to"                      : "+12345678902",
        "from"                    : "+12345678901",
        "applicationId"           : "93de2206-9669-4e07-948d-329f4b722ee2",
        "scope"                   : "scope",
        "code"                    : "12598",
        "digits"                  : 6,
        "expirationTimeInMinutes" : 3
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

```http
Status: 200
Content-Type: application/json; charset=utf-8

{
  "valid": false
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
    Code = "159193",
    Digits = 6,
    ExpirationTimeInMinutes = 3
});

Console.WriteLine(response.Data.Valid);
```

{% sample lang="java" %}

```java
TwoFactorVerifyRequestSchema request = new TwoFactorVerifyRequestSchema();
request.setApplicationId(applicationId);
request.setFrom(fromNumber);
request.setTo(toNumber);
request.setScope("scope");
request.setCode("212061");
request.setDigits(6);
request.setExpirationTimeInMinutes(3);

ApiResponse<TwoFactorVerifyCodeResponse> response = controller.createVerifyTwoFactor(accountId, request);

System.out.println( response.getResult().getValid() );
```

{% sample lang="ruby" %}

```ruby
code = '123456' #This is the user input to verify

body = TwoFactorVerifyRequestSchema.new
body.from = from_phone
body.to = to_phone
body.application_id = application_id
body.scope = 'scope'
body.code = code
body.digits = 6
body.expiration_time_in_minutes = 3

response = auth_client.create_verify_two_factor(account_id, body)
puts "Auth status: " + response.data.valid.to_s
```

{% sample lang="python" %}

```python
code = '123456' #This is the user input to verify
body = TwoFactorVerifyRequestSchema(
    mfrom = from_phone,
    to = to_phone,
    application_id = application_id,
    scope = 'scope',
    code = code,
    digits = 6,
    expiration_time_in_minutes = 3
)
response = auth_client.create_verify_two_factor(account_id, body)
print("Auth status: " + str(response.body.valid))
```

{% sample lang="js" %}

```js
const verify = new mfa.TwoFactorVerifyRequestSchema();
verify.applicationId = applicationId;
verify.code = '123456';
verify.scope = 'scope24';
verify.digits = 6;
verify.expirationTimeInMinutes = 3;

const response = await controller.createVerifyTwoFactor(accountId, verify);

console.log(JSON.stringify(response, null, 2));
```

{% sample lang="php" %}

```php
$scope = 'scope';
$code = '123456'; //the user input to validate

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorVerifyRequestSchema();
$body->from = $fromPhone;
$body->to = $toPhone;
$body->applicationId = $applicationId;
$body->scope = $scope;
$body->code = $code;
$body->digits = 6;
$body->expirationTimeInMinutes = 3;

$response = $authClient->createVerifyTwoFactor($accountId, $body);
$strn = "Auth status: " . var_export($response->getResult()->valid, true) . "\n";
echo $strn;
```

{% endmethod %}
