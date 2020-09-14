{% multimethod %}
{% endmultimethod %}

# Guide Name {#top}

Detailed description about guide and why it might be relevant

* What you can do
* Why should you do
* Anything you should know before using?

## Assumptions

Describe the assumptions/pre-reqs that this guide expects with links on where to get more info.

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for {guide-name}

## API Authentication

Describe which API creds are needed and how to get them if needed

## Table of Contents

Using the `{#section-name}` link to them like `[Text](#section-name)`

* [Section Name 1](#section-name-1)
* [Section Name 2](#section-name-2)
* [Section Name 3](#section-name-3)
* [Section Name 4](#section-name-4)

## Info! Delete this section

Text and information contained within the `extendmethod` & `endextendmethod` tags will be in triple column layout.

Text **OUTSIDE** the tags will be in double column and text will take up the entire width of the page:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


## Section Name {#section-name-1}

Describe what this step/section accomplishes. Add links where needed.

{% extendmethod %}


### Supported Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/.../`

#### Request Authentication

The [Request-Name](..) resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

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

{% sample lang="js" %}

```js
console.log("hello world");
```

> Output

```
hello world
```

{% sample lang="python" %}

```csharp
print("hello world");
```

> Output

```
hello world
```

{% endextendmethod %}

## Section Name 2 {#section-name-2}

Describe what this step/section accomplishes. Add links where needed.

The text here will fill the full width of the page.

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



{% extendmethod %}

### Supported Parameters

Using the `extendmethod` keyword will put the text in triple column view until the `endextendmethod` is used

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/.../`

#### Request Authentication

The [Request-Name](..) resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

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

{% sample lang="js" %}

```js
console.log("hello world");
```

> Output

```
hello world
```

{% sample lang="python" %}

```csharp
print("hello world");
```

> Output

```
hello world
```

{% endextendmethod %}
