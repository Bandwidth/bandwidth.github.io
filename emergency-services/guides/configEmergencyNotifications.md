{% multimethod %}
{% endmultimethod %}

# Configuring Emergency Notifications {#top}

This guide will walk through creating and associating Emergency Recipients & Groups with HTTP & SDK Examples

## Assumptions

* Read through the [About Emergency Notifications](./emergencyNotifications.md) guide
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for Emergency Notifications (contact [support](https://support.bandwidth.com) for more information)

## API Authentication

The Emergency Notifications API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Table of Contents

In order to configure emergency notifications in the Bandwidth Dashboard, the following steps must be performed:

* [Create "emergency notification recipients"](#create-enr)
* [Create "emergency notification groups"](#create-eng)
* [Associate "emergency endpoints" with "emergency notification groups"](#associate-eng-enr)
* [Updating Configuration](#updating-eng)
* [Removing Configuration](#removing)

## Create "emergency notification recipients" {#create-enr}

This defines the details of a specific notification.

An emergency notification recipient has a:
* Description
* Type (EMAIL, SMS, TTS, or CALLBACK)
* Target data for delivery of the notification.

| Type       | Target                     |
|:-----------|:---------------------------|
| EMAIL      | email address              |
| SMS or TTS | telephone number           |
| CALLBACK   | HTTPS URL and credentials. |

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

## Create "emergency notification groups" {#create-eng}

This allows you to create groups that should use the same set of emergency notification recipients.

For example, if you want to notify the front desk and the security gate for everyone in a building, you can create a group to represent everyone in the building, and associate the group with the two emergency notification recipients.

A group has a:
* Description
* one to three notification recipients.

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

## Associate "emergency endpoints" with "emergency notification groups". {#associate-eng-enr}

This step allows you to assign emergency endpoints (either telephone numbers or alternate end-user identifiers - AEUIs) to a group.

For example, if you want everyone in a given building to trigger the same set of notifications in the event that they place an emergency call, just add those callers to the group that has the desired notification recipients.

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

## Updating Configuration {#updating-eng}

* Emergency notification groups may be updated by adding or removing recipients, provided that the group always has from one to three recipients.
* Emergency notification recipients may be updated at any time.
* Emergency endpoints may be added to or removed from an emergency notification group at any time.

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

## Removing Configuration {#removing}

Removal of configuration is essentially the reverse of the above:

* An emergency notification group cannot be removed if at least one emergency endpoint is still associated with that group.
* An emergency notification recipient cannot be removed if that recipient belongs to a group.

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