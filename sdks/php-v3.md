# PHP SDK

Note: This page is for older (v3.x.y and below) versions of the `bandwidth/sdk` package. These versions do not include the Iris namespace.

## Links

The PHP SDK(s) are available via [Packagist](https://packagist.org/) & Github

| Module                                                                 | Description                                                                     | Github                                                                                              |
|:-----------------------------------------------------------------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|
| [`bandwidth/sdk`](https://packagist.org/packages/bandwidth/sdk)        | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/php-sdk)                  |
| [`bandwidth/iris`](https://packagist.org/packages/bandwidth/iris)      | Manage phone numbers and account settings                                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/php-bandwidth-iris)       |
| [Code Examples](https://github.com/Bandwidth/examples/tree/master/php) | PHP code examples                                                               | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/examples/tree/master/php) |

## Release Notes

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 2.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |
| 2.1.0   | Updated Pause and SendDtmf BXML attributes                                      |
| 2.2.0   | Added MFA functions and support for multiple nested verbs for a Gather          |
| 2.3.0   | Added support for Conference BXMl, Conference API Endpoints, and WebRTC         |
| 2.4.0   | Updated WebRTC Permissions schema                                               |
| 2.5.0   | Updated MFA schema to include digits and expirationTimeInMinutes                |
| 2.6.0   | Added BXML Bridge verb                                                          |
| 2.7.0   | Updated WebRTC base URL                                                         |
| 2.8.0 | Added get conference endpoint |
| 2.9.0 | Added conference management endpoints |

## Download & Install

```
composer require bandwidth/sdk
```

## Initialize Bandwidth Client

```php
require "vendor/autoload.php";

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => 'token',
        'messagingBasicAuthPassword' => 'secret',
        'voiceBasicAuthUserName' => 'username',
        'voiceBasicAuthPassword' => 'password',
        'twoFactorAuthBasicAuthUserName' => 'username',
        'twoFactorAuthBasicAuthPassword' => 'password'
    )
);
$client = new BandwidthLib\BandwidthClient($config);
```

## Create Phone Call

```php
$voiceClient = $client->getVoice()->getClient();

$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest();
$body->from = "+15554443333";
$body->to = "+15554442222";
$body->answerUrl = "https://test.com";
$body->applicationId = "3-d-4-b-5";

try {
    $response = $voiceClient->createCall($voiceAccountId, $body);
    print_r($response->getResult()->callId);
} catch (Exception $e) {
    print_r($e);
}
```
## Generate BXML

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Hello!");
$speakSentence->voice("susan");
$speakSentence->locale("en_US");
$speakSentence->gender("female");
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
echo $response->toBxml();
```

## Send Text Message

```php
$messagingClient = $client->getMessaging()->getClient();

$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->from = "+12345678901";
$body->to = array("+12345678902");
$body->applicationId = "1234-ce-4567-de";
$body->text = "Greetings!";

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response->getResult()->id);
} catch (Exception $e) {
    print_r($e);
}
```

## Perform A 2FA Request

```php
$authClient = $client->getTwoFactorAuth()->getClient();
$accountId = '1';

$fromPhone = '+18888888888';
$toPhone = '+17777777777';
$messagingApplicationId = '1-d-b';
$scope = 'scope';
$digits = 6

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorCodeRequestSchema();
$body->from = $fromPhone;
$body->to = $toPhone;
$body->applicationId = $messagingApplicationId;
$body->scope = $scope;
$body->digits = $digits;
$body->message = "Your temporary {NAME} {SCOPE} code is {CODE}";

$authClient->createMessagingTwoFactor($accountId, $body);

$code = "123456"; //This is the user input to validate

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorVerifyRequestSchema();
$body->from = $fromPhone;
$body->to = $toPhone;
$body->applicationId = $messagingApplicationId;
$body->scope = $scope;
$body->code = $code;
$body->digits = $digits;
$body->expirationTimeInMinutes = 3;

$response = $authClient->createVerifyTwoFactor($accountId, $body);
$strn = "Auth status: " . var_export($response->getResult()->valid, true) . "\n";
echo $strn;
```

## Order Phone Number

Phone number ordering is done using the [Bandwidth Iris SDK](https://github.com/Bandwidth/php-bandwidth-iris). You can install this package by running the following command

```
composer require bandwidth/iris
```

```php
require "vendor/autoload.php";

$client = new \Iris\Client($username, $password, ['url' => 'https://dashboard.bandwidth.com/api/']);
$account = new \Iris\Account($accountId, $client);
$phoneNumbers = $account->availableNumbers([ "areaCode" => "919", "quantity" => 3 ]);
$order = $account->orders()->create([
    "Name" => "Available Telephone Number order",
    "SiteId" => "12345",
    "CustomerOrderId" => "123456789",
    "ExistingTelephoneNumberOrderType" => [
        "TelephoneNumberList" => [
            "TelephoneNumber" => [$phoneNumbers[0]->TelephoneNumber[0]]
        ]
    ]
]);
$response = $account->orders()->order($order->id, true);
print_r($response);
```
