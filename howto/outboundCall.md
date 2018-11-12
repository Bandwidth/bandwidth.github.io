{% method %}
## Create outbound call
![Graphic](images/how-to-outbound-call.png)

There is a single HTTP POST required using the `/calls` resource.  See the [`/calls`](https://dev.bandwidth.com/ap-docs/methods/calls/calls.html) resource for a complete reference.

### Using Postman
<a href="https://app.getpostman.com/run-collection/8aec904a67e85cbbede2" class="aimg">![Postman](images/postman.svg)</a>
* Import the example to Postman by clicking the button and access it in “Collections”.
* Make sure to replace the {userId} in the url and the {token} and {secret} in Authorization.  Your credentials can be found in the “Account” tab of the API console.
* Also set the phone numbers and message in Body.

{% common %}
### Example: From your server to Bandwidth

{% sample lang="shell" %}

```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}"
    }'
```

{% sample lang="js" %}

```js
//NodeJS

var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
    userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});

client.Call.create({
    from: "+12525089000",
    to: "+15035555555",
    callbackUrl: "http://requestb.in/10sze251"
})
.then(function (id) {
    console.log(id);
})
```

{% sample lang="csharp" %}
```csharp
//Download the .net sdk from ap.bandwidth.com/docs/helper-libraries/net

using System;
using System.Threading.Tasks;
using Bandwidth.Net;
using Bandwidth.Net.Api;

public class Program
{
  //API credentials which can be found on your account page at https://catapult.inetwork.com/pages/login.jsf
  private const string UserId = "u-YOUR_USER_ID"; //{user_id}
  private const string Token = "t-YOUR_API_TOKEN"; //{token}
  private const string Secret = "YOUR_API_SECRET"; //{secret}

  public static void Main()
  {
    try
    {
      RunAsync().Wait();
    }
    catch (Exception ex)
    {
      Console.Error.WriteLine(ex.Message);
      Environment.ExitCode = 1;
    }
  }

  private static async Task RunAsync()
  {
    var client = new Client(UserId, Token, Secret);

    var call = await client.Call.CreateAsync(new CreateCallData
    {
      From = "+12525089000", // <-- This must be a Bandwidth number on your account
      To = "+15035555555",
      CallbackUrl = "http://requestb.in/10sze251"
    });
    Console.WriteLine($"Call Id is {call.Id}");
  }
}
```

{% sample lang="ruby" %}

```ruby
# install gem from https://github.com/bandwidthcom/ruby-bandwidth
require "ruby-bandwidth"

# find your credentials http://ap.bandwidth.com/docs/security/
Bandwidth::Client.global_options = {
   :user_id => "your_user_id",
   :api_token => "your_api_token",
   :api_secret => "your_api_secret"}

call = Bandwidth::Call.create({
   :from => "+12525089000", # Replace with a Bandwidth Number
   :to => "+15035555555",
   :callbackUrl => "http://requestb.in/10sze251"})  # Replace with your server URL

puts call.id
```

{% endmethod %}
