{% method %}
# Security
All communication with Bandwidth APIs are done through secure channels that use HTTP with SSL, HTTPS.

## Finding Your API Account Credentials: UserId, Token, Secret
You can find the API credentials under the Account tab.

![creds](images/creds.png)

## Basic Authentication for REST Services
HTTP Basic authentication with your API token and API secret is required for access to Bandwidth API’s web services. To view your API tokens and secrets, log into the web site with your username and password, then view your profile page in the dashboard. Once you know your API token and secret, you’re ready to make web service requests. Basic authentication takes a username and password to send to the server, but don’t use your Bandwidth API web site username and password. Instead, use your API token in place of your username, and your API secret in place of your password. If you have the curl program installed, you can make a test call to the web service from the command-line. Substitute your API token and secret in the this command to view your user’s details. Almost all HTTP client libraries make basic authentication easy to use. Check your library’s documentation for details. If your HTTP library does not do basic authentication for you, consult the HTTP specification for the basic authentication scheme for implementation details. If you have the curl program installed, you can make a test call to the web service from the command-line. Substitute your API token and secret in the this command to view your user’s details.

## Permissions
Bandwidth API users are only allowed to read, modify, and delete resources they own. Attempts to access resources owned by other users through the API will result in an HTTP 403 “Forbidden” status.

{% common %}
### Examples

{% sample lang="shell" %}
```shell
curl -u {token}:{secret} https://api.catapult.inetwork.com/v1/users/{user_id}
```
{% sample lang="js" %}
```javascript
var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
    userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});

// Promise
client.Account.get().then(function(info){});

// Callback
client.Account.get(function(err, info){});
```
{% endmethod %}
