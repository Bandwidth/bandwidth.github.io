# PHP bandwidth/sdk v4.0.0 Migration Guide

## Breaking Changes

* Support for PHP version 7.1 and below has been dropped
* Parameters for method calls are now strictly typed
* Client parameters (username/password) are now passed directly to the `BandwidthLib\BandwidthClient` class, instead of being wrapped by a `BandwidthLib\Configuration` object
* Model objects now have private fields with getters and setters for these fields, instead of public fields
* Model objects now have constructors for required fields
  * NOTE: Just because a field is not included in the constructor does not mean it may not be required for a specific use case. For example, a single recipient MMS would need the `media` field to be set via the model's setter method.
* API client methods now reflect the client name instead of using a generic client method. For example, `$client->getVoice()->getClient()` is now `$client->getVoice()->getAPIController()`
* Several class names have been changed. The table below shows these changes

| Old Class Name | New Class Name |
|--|--|
| APIHelper | ApiHelper |
| APIException | ApiException |
| Servers | Server |
| Environments | Environment |

* In addition to its new name, `ApiException` now sits in the `BandwidthLib\Exceptions` namespace

## Example Of Code Changes

v3.0.0 code

```php
require "vendor/autoload.php";

//client init
$config = new BandwidthLib\Configuration(
    array(
        'voiceBasicAuthUserName' => 'user',
        'voiceBasicAuthPassword' => 'pass',
    )
);
$client = new BandwidthLib\BandwidthClient($config);
//

$accountId = "1234";

//grab voice client
$voiceClient = $client->getVoice()->getAPIController();
//

//create request body
$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest();
$body->from = "+15554443333";
$body->to = "+15554442222";
$body->answerUrl = "https://test.com";
$body->applicationId = "9-b-4-b-f";
$body->tag = "tag";
//

try {
    $response = $voiceClient->createCall($accountId, $body);
    //grab result field
    print_r($response->getResult()->callId);
    //
//catch exception
} catch (BandwidthLib\APIException $e) {
//
    print_r($e);
}
```

v4.0.0 equivalent code

```php
require "vendor/autoload.php";

//client init
$client = new BandwidthLib\BandwidthClient(array(
    'voiceBasicAuthUserName' => "user",
    'voiceBasicAuthPassword' => "pass",
));
//

$accountId = "1234";

//grab voice client
$voiceClient = $client->getVoice()->getAPIController();
//

//create request body
$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest(
    "+15554443333", //from
    "+15554442222", //to
    "https://test.com",
    "9-b-4-b-f"
);
$body->setTag("tag"); //tag is an optional parameter
//

try {
    $response = $voiceClient->createCall($accountId, $body);
    //grab result field
    print_r($response->getResult()->getCallId());
    //
//catch exception
} catch (BandwidthLib\Exceptions\ApiException $e) {
//
    print_r($e);
}
```
