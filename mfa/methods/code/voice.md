{% method %}

## Two-Factor Authentication with MFA
Two-Factor authentication with Bandwidth MFA services

⚠️ Your account must be activated to use the MFA product. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

### Request URL

<code class="post">POST</code>`https://mfa.bandwidth.com/api/v1/accounts/{accountId}/code/voice`

#### Basic Authentication

Bandwidth's MFA API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter     | Required | Description |
|:--------------|:----------------------|:--|
| to            | Yes | The phone number the message should be sent to (must be in E.164 format, like `+19195551212`).  |
| from          | Yes | One of your telephone numbers from which the message should come from (must be in E.164 format, like `+19195551212`). This number must be associated with the voice application given by the `applicationId` parameter. |
| applicationId | Yes | The voice application Id.  |
| scope         | No | An optional field to denote what scope or action the 2fa code is addressing. If not supplied, defaults to "2FA". |
| message | Yes | The message format of the 2fa code. There are three values that the system will replace "{CODE}", "{NAME}", "{SCOPE}". The "{SCOPE}" and "{NAME}" template values are optional, while "{CODE}" must be supplied. As the name would suggest, "{CODE}" will be replaced with the actual 2fa code. "{NAME}" is replaced with the application name, configured during provisioning of 2fa. The "{SCOPE}" value is the value of the `scope` parameter. The value of this parameter is limited to 2048 characters. |
| digits | Yes | The number of digits for your 2fa code. The valid number ranges from 4 to 8, inclusively. |

### Response Attributes

| Property | Description |
|:---------|:------------|
| callId   | The Call Id |


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
  "callId": "1256-adf14asd-52dfa"
}
```

{% sample lang="csharp" %}

```csharp
var response = controller.CreateVoiceTwoFactor(accountId, new TwoFactorCodeRequestSchema
{
    ApplicationId = applicationId,
    From = fromNumber,
    To = toNumber,
    Scope = "scope",
    Digits = 5,
    Message = "Your temporary {NAME} {SCOPE} code is {CODE}"
});

Console.WriteLine( response.Data.CallId );
```

{% sample lang="java" %}

```java
TwoFactorCodeRequestSchema request = new TwoFactorCodeRequestSchema();
request.setApplicationId(applicationId);
request.setFrom(fromNumber);
request.setTo(toNumber);
request.setScope("scope");
request.setDigits(5);
request.setMessage("Your temporary {NAME} {SCOPE} code is {CODE}");

ApiResponse<TwoFactorVoiceResponse> response = controller.createVoiceTwoFactor(accountId, request);

System.out.println( response.getResult().getCallId() );
```

{% sample lang="ruby" %}

```ruby
application_id = voice_application_id

body = TwoFactorCodeRequestSchema.new
body.from = from_phone
body.to = to_phone
body.application_id = application_id
body.scope = 'scope'
body.digits = 5
body.message = "Your temporary {NAME} {SCOPE} code is {CODE}"

auth_client.create_voice_two_factor(account_id, body)
```

{% sample lang="python" %}

```python
body = TwoFactorCodeRequestSchema(
    mfrom = from_phone,
    to = to_phone,
    application_id = voice_application_id,
    scope = 'scope',
    digits = 5,
    message = "Your temporary {NAME} {SCOPE} code is {CODE}"
)
response = auth_client.create_voice_two_factor(account_id, body)
call_id = response.body.call_id
```

{% sample lang="js" %}

```js
import { Client, MFAController } from '@bandwidth/mfa';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const BW_VOICE_APPLICATION_ID = process.env["BW_VOICE_APPLICATION_ID"];
const fromNumber = process.env["BW_NUMBER"];
const toNumber = process.env["USER_NUMBER"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new MFAController(client);

const payload = {
  applicationId: BW_VOICE_APPLICATION_ID,
  from: fromNumber,
  to: toNumber,
  scope: 'scope',
  digits: 5,
  message: "Your temporary {NAME} {SCOPE} code is {CODE}"
}

const voiceTwoFactor = async function() {
  try {
    const response = await controller.voiceTwoFactor(BW_ACCOUNT_ID, payload);
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error);
}};

voiceTwoFactor();
```

{% sample lang="php" %}

```php
$scope = 'scope';

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorCodeRequestSchema();
$body->from = $fromPhone;
$body->to = $toPhone;
$body->applicationId = $voiceApplicationId;
$body->scope = $scope;
$body->digits = 5;
$body->message = "Your temporary {NAME} {SCOPE} code is {CODE}";

$authClient->createVoiceTwoFactor($accountId, $body);
```

{% endmethod %}
