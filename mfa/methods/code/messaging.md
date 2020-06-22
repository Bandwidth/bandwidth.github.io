{% method %}

## Two-Factor Authentication with Messaging
Two-Factor authentication with Bandwidth Messaging services

⚠️ Your account must be activated to use the MFA product. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/messaging`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter     | Description           |
|:--------------|:----------------------|
| to            | To telephone number   |
| from          | From telephone number |
| applicationId | The messaging application id |
| scope         | An optional field to denote what scope or action the 2fa code is addressing. If not supplied, defaults to "2FA". |
| message | The message format of the 2fa code. There are three values that the system will replace "{CODE}", "{NAME}", "{SCOPE}". The "{SCOPE}" and "{NAME} value template are optional, while "{CODE}" must be supplied. As the name would suggest, code will be replace with the actual 2fa code. Name is replaced with the application name, configured during provisioning of 2fa. The scope value is the same value sent during the call and partitioned by the server. |
| digits | The number of digits for your 2fa code. The valid number ranges from 2 to 8, inclusively. |

### Response Attributes

| Property  | Description    |
|:----------|:---------------|
| MessageId | The Message Id |


{% common %}

### Example 1 of 1: Authenticate with Messaging

{% sample lang="http" %}

```bash
curl -X POST \
    --url "https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/messaging" \
    -u '{username}:{password}' \
    --data-raw '
    {
        "to"            : "+12345678902",
        "from"          : "+12345678901",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "scope"         : "scope",
        "digits"        : 5,
        "message"       : "Your temporary {NAME} {SCOPE} code is {CODE}"
    }
  '
```
> The above command returns a JSON Response structured like this:

```http
Status: 200
Content-Type: application/json; charset=utf-8

{
  "MessageId": "1256-adf14asd-52dfa"
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.CreateMessagingTwoFactor(accountId, new TwoFactorCodeRequestSchema
{
    ApplicationId = applicationId,
    From = fromNumber,
    To = toNumber,
    Scope = "scope"
});

Console.WriteLine( response.Data.MessageId );
```

{% sample lang="java" %}

```java
TwoFactorCodeRequestSchema request = new TwoFactorCodeRequestSchema();
request.setApplicationId(applicationId);
request.setFrom(fromNumber);
request.setTo(toNumber);
request.setScope("scope");

ApiResponse<TwoFactorMessagingResponse> response = controller.createMessagingTwoFactor(accountId, request);

System.out.println( response.getResult().getMessageId() );
```

{% sample lang="ruby" %}

```ruby
application_id = messaging_application_id

body = TwoFactorCodeRequestSchema.new
body.from = from_phone
body.to = to_phone
body.application_id = application_id
body.scope = 'scope'

auth_client.create_messaging_two_factor(account_id, body)
```

{% sample lang="python" %}

```python
application_id = messaging_application_id
body = TwoFactorCodeRequestSchema(
    mfrom = from_phone,
    to = to_phone,
    application_id = messaging_application_id,
    scope = 'scope'
)
response = auth_client.create_messaging_two_factor(account_id, body)
message_id = response.body.message_id
```

{% sample lang="js" %}

```js
const payload = new mfa.TwoFactorCodeRequestSchema();
payload.applicationId = applicationId;
payload.from = fromNumber;
payload.to = toNumber;
payload.scope = 'scope';

const response = await controller.createMessagingTwoFactor(accountId, payload);

console.log(JSON.stringify(response, null, 2));
```

{% sample lang="php" %}

```php
$scope = 'scope';

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorCodeRequestSchema();
$body->from = $fromPhone;
$body->to = $toPhone;
$body->applicationId = $messagingApplicationId;
$body->scope = $scope;

$authClient->createMessagingTwoFactor($accountId, $body);
```

{% endmethod %}
