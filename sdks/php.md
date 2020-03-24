# PHP SDK

### Download & Install

```
composer require bandwidth/sdk
```

### Initialize Bandwidth Client

```php
require "vendor/autoload.php";

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => 'token',
        'messagingBasicAuthPassword' => 'secret',
        'voiceBasicAuthUserName' => 'username',
        'voiceBasicAuthPassword' => 'password',
    )
);
$client = new BandwidthLib\BandwidthClient($config);
```

### Create Phone Call

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
### Generate BXML

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Hello!");
$speakSentence->voice("susan");
$speakSentence->locale("en_US");
$speakSentence->gender("female");
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
echo $response->toBxml();
```

### Send Text Message

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

### Order Phone Number

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
