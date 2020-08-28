# PHP SDK

## Breaking Changes For bandwidth/sdk v4.0.0

Please go to our [PHP bandwidth/sdk v4.0.0 migration guide](php-v4.md) for information on updating to v4.0.0 of the `bandwidth/sdk` package.

## v3.0.0 bandwidth/sdk Docs

Please go to our [PHP bandwidth/sdk v3.0.0 guide](php-v3.md) for information on the older versions of the `bandwidth/sdk` package.

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
| 3.0.0 | Breaking changes for the original sdk. Will probably be minor class name changes |
| 4.0.0 | Breaking changes for the updated sdk. Information can be found on our [PHP bandwidth/sdk v4.0.0 migration guide](php-v4.md) |

## Download & Install

```
composer require bandwidth/sdk
```

## Initialize Bandwidth Client

```php
require "vendor/autoload.php";

$client = new BandwidthLib\BandwidthClient(array(
    'messagingBasicAuthUserName' => 'token',
    'messagingBasicAuthPassword' => 'secret',
    'voiceBasicAuthUserName' => 'username',
    'voiceBasicAuthPassword' => 'password',
    'twoFactorAuthBasicAuthUserName' => 'username',
    'twoFactorAuthBasicAuthPassword' => 'password'
));
```

## Create Phone Call

```php
$voiceClient = $client->getVoice()->getAPIController();

$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest(
    "+15554443333", //from
    "+15554442222", //to
    "https://test.com", //answerUrl
    "9-b-4-b-f" //applicationId
);

try {
    $response = $voiceClient->createCall($voiceAccountId, $body);
    print_r($response->getResult()->getCallId());
} catch (BandwidthLib\Exceptions\ApiException $e) {
    print_r($e->getHttpResponse()->getStatusCode());
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
$messagingClient = $client->getMessaging()->getAPIController();

$body = new BandwidthLib\Messaging\Models\MessageRequest(
    "93de2206-9669-4e07-948d-329f4b722ee2", //applicationId
    array("+12345678902"), //to
    "+12345678901", //from
    "Hey, check this out!" //text
);

try {
    $response = $messagingClient->createMessage($accountId, $body);
    print_r($response->getResult()->getId());
} catch (BandwidthLib\Exceptions\ApiException $e) {
    print_r($e);
}
```

## Perform A 2FA Request

```php
$authClient = $client->getTwoFactorAuth()->getAPIController();
$accountId = '1';

$toPhone = '+17777777777';
$fromPhone = '+18888888888';
$messagingApplicationId = '1-d-b';
$scope = 'scope';
$digits = 6

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorCodeRequestSchema(
    $toPhone,
    $fromPhone,
    $messagingApplicationId,
    "Your temporary {NAME} {SCOPE} code is {CODE}", //message
    5 //digits
);
$body->setScope($scope);

$authClient->createMessagingTwoFactor($accountId, $body);

$code = "123456"; //This is the user input to validate

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorVerifyRequestSchema(
    $toPhone,
    $fromPhone,
    $applicationId,
    5, //digits
    3, //expirationTimeInMinutes
    $code
);

$body->setScope($scope);

$response = $authClient->createVerifyTwoFactor($accountId, $body);
$strn = "Auth status: " . var_export($response->getResult()->getValid(), true) . "\n";
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
