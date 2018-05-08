# PHP-Bandwidth

Bandwidth’s PHP SDK on [Github](https://github.com/Bandwidth/php-bandwidth) is open source, but somewhat stale. We are planning on refreshing the SDK later this year, but we currently do not have a date for the next version.

The documentation site has curl examples on most (if not all) API calls which have proven to be helpful for most PHP developers to put together the HTTP requests needed. For other users, we have recommend using the [Guzzle PHP HTTP Client](https://github.com/guzzle/guzzle) to manage their HTTP requests to Bandwidth.

If you’re an amazing individual and would like to contribute to the current SDK, please feel free to fork the SDK as it is today and open a [pull-request](https://github.com/Bandwidth/php-bandwidth/pulls) with your changes. We’ll review and merge your changes once we have reviewed.

## Guzzle Example

```php
<?php

require 'vendor/autoload.php';
use GuzzleHttp\Client;

// Bandwidth Creds should be stored as env vars
$user_id    = getenv("BANDWIDTH_USER_ID");
$api_token  = getenv("BANDWIDTH_API_TOKEN");
$api_secret = getenv("BANDWIDTH_API_SECRET");

// Setup new client with uri, auth, and content type
$client = new Client([
  'base_uri' => 'https://api.catapult.inetwork.com/v1/users/' . $user_id . "/",
  'auth'     => [$api_token, $api_secret],
  'headers'  => ['Content-Type' => 'application/json']
]);

// Extract the ID from the Location Header
function extractId($response){
  $location_header = explode("/", $response->getHeaderLine('Location'));
  return end($location_header);
};

//Message contents
$message_body = [
  'to'   => 'to-phone-number',
  'from' => 'your-bandwidth-number',
  'text' => 'Hey friendo!'
];

// Send Message
$response = $client->post('messages', [
  GuzzleHttp\RequestOptions::JSON => $message_body
]);

$message_id = extractId($response);
print("Message sent with id: " . $message_id . "\n");

// Get the message we just sent
$response = $client->get('messages/' . $message_id);
$body = $response->getBody();
print("Message fetched:\n" . json_encode(json_decode($body), JSON_PRETTY_PRINT));

```
