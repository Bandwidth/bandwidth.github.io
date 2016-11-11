## Ruby Library

A ruby client library for the [Bandwidth Application Platform](http://bandwidth.com/products/application-platform?utm_medium=social&utm_source=github&utm_campaign=dtolb&utm_content=_)

The current version is v1.0.14, released 4 May, 2016.

[![github](../images/github_logo.png)](https://github.com/bandwidthcom/ruby-bandwidth/tree/v1.0.14)

### Installing the SDK

`ruby-bandwidth` is available on rubygem:

	gem install ruby-bandwidth

### Supported Versions
`ruby-bandwidth should work on Ruby 1.9+.

| Version                           | Support Level |
|:----------------------------------|:--------------|
| <1.9                              | Unsupported   |
| 1.9                               | Supported     |
| 2.0                               | Supported     |
| 2.1                               | Supported     |
| 2.2                               | Supported     |
| 2.3                               | Supported     |


### Client initialization

All interaction with the API is done through a class `Client`. The `Client` constructor takes as parameter hash with next keys:

| Argument    | Description           | Default value                       | Required |
|:------------|:----------------------|:------------------------------------|:---------|
| `user_id`    | Your user ID          | none                                | Yes      |
| `api_token`  | Your API token        | none                                | Yes      |
| `api_secret` | Your API secret       | none                                | Yes      |
| `base_url`   | The Bandwidth API URL | `https://api.catapult.inetwork.com` | No       |

To initialize the `Client` instance, provide your API credentials which can be found on your account page in [the portal](https://catapult.inetwork.com/pages/catapult.jsf).

```ruby
client = Bandwidth::Client.new(
	:user_id => "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
	:api_token => "YOUR_API_TOKEN",
	:api_secret => "YOUR_API_SECRET"
)
```

Your `client` object is now ready to use the API.


### Send a SMS

```ruby
message = Bandwidth::Message.create(client, {:from => "+19195551212", :to => "+191955512142", :text => "Test"})
```

### Make a call

```ruby
call = Bandwidth::Call.create(client, {:from => "+19195551212", :to => "+191955512142"})
```
### Providing feedback

For current discussions on 1.0 please see the [1.0 issues section on GitHub](https://github.com/bandwidthcom/ruby-bandwidth/labels/1.0). To start a new topic on 1.0, please open an issue and use the `1.0` tag. Your feedback is greatly appreciated!
