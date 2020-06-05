{% method %}
# Method Name {#top}

Detialed description about the method:

* What you can do
* Why should you do
* Anything you should know before using?

## Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

## API Authentication

The Numbers API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Supported Parameters

| Parameter     | Mandatory | Type     | Description     | Example   |
|:--------------|:----------|:---------|:----------------|:----------|
| from          | Yes       | `string` | { Description } | {example} |
| to            | Yes       | `string` | { Description } | {example} |
| text          | Yes       | `string` | { Description } | {example} |
| applicationId | Yes       | `string` | { Description } | {example} |
| media*        | No        | `array`  | { Description } | {example} |
| tag           | No        | `string` | { Description } | {example} |

## Response Parameters

| Parameter     | Type     | Description     | Example   |
|:--------------|:---------|:----------------|:----------|
| from          | `string` | { Description } | {example} |
| to            | `string` | { Description } | {example} |
| text          | `string` | { Description } | {example} |
| applicationId | `string` | { Description } | {example} |
| media*        | `array`  | { Description } | {example} |
| tag           | `string` | { Description } | {example} |

{% common %}
### Example 1 of n: Do a thing

{% sample lang='http' %}

```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "from"          : "+15555551212",
      "to"            : "+15555551313",
      "answerUrl"     : "http://www.myapp.com/hello",
      "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
    }'
```

```http
POST https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

{
  "from"          : "+15555551212",
  "to"            : "+15555551313",
  "answerUrl"     : "http://www.myapp.com/hello",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

> Responds

```http
HTTP/1.1 201
Content-type: application/json
Location: https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d

{
    "accountId"        : "55555555",
    "from"             : "+19195551212",
    "to"               : "+19195551313",
    "applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
    "callId"           : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "startTime"        : "2019-06-20T15:54:22.234Z",
    "callUrl"          : "https://voice.bandwidth.com/api/v2/accounts/55555555/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
    "callTimeout"      : 30.0,
    "answerUrl"        : "http://www.myapp.com/hello",
    "answerMethod"     : "POST",
    "disconnectUrl"    : null,
    "disconnectMethod" : "POST",
    "username"         : null,
    "password"         : null,
    "tag"              : null
}
```

{% sample lang="php" %}

```php
print_r("hello world");
```

> Output

```
hello world
```

{% sample lang="ruby" %}

```ruby
puts "hello world"
```

> Output

```
hello world
```

{% sample lang="java" %}

```java
System.out.println("hello world");
```

> Output

```
hello world
```

{% sample lang="csharp" %}

```csharp
Console.WriteLine("hello world");
```

> Output

```
hello world
```


{% endmethod %}