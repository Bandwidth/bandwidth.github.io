{% method %}

## Retrieve Call Data by Search
Retrieve data about calls by search. 

Note: Call data is kept for 7 days after the calls are hung up. If no calls meet your search criteria, you will receive a 200 OK response with an empty array as a response body. 

The `disconnectCause` for a call can be:
- `hangup`: one party hung up the call, a [`<Hangup>`](../../bxml/verbs/hangup.md) verb was executed, or there was no more BXML to execute; it indicates that the call ended normally.
- `busy`: the callee was busy.
- `timeout`: the call wasn't answered before the `callTimeout` was reached.
- `cancel`: the call was cancelled by its originator while it was ringing.
- `rejected`: the call was rejected by the callee.
- `callback-error`: a BXML callback couldn't be delivered to your callback server.
- `invalid-bxml`: invalid BXML was returned in response to a callback.
- `application-error`: an unsupported action was tried on the call, e.g. trying to play a .ogg audio.
- `account-limit`: the account rate limits were reached.
- `node-capacity-exceeded`: the system maximum capacity was reached.
- `error`: some error not described in any of the other causes happened on the call.
- `unknown`: some unknown error happened on the call.

Note: this list is not exhaustive and other values can appear in the future.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter        | Description                                                                                                                                                                                                                                                                        |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pageSize         | The amount of calls returned per request. Minimum value is 1. Maximum value is 1000. Default value is 1000.                                                                                                                                                                        |
| minStartTime     | The minimum value for the start time. Must be in ISO 8601 format.                                                                                                                                                                                                                  |
| maxStartTime     | The maximum value for the start time. Must be in ISO 8601 format.                                                                                                                                                                                                                  |
| to               | The number the call is made to. Must be in E.164 format (e.g. +15554445555)                                                                                                                                                                                                        |
| from             | The number the call is made from. Must be in E.164 format (e.g. +15554445555)                                                                                                                                                                                                      |
| state            | The state of the call. Must be one of `disconnected`, `answered`, or `initiated`                                                                                                                                                                                                   |
| disconnectCause  | The disconnect cause of the call. Multiple instances of this parameter are allowed. Value must be one of `busy`, `callback-error`, `cancel`, `error`, `hangup`, `invalid-bxml`, `rejeced`, `timeout`, `account-limit`, `node-capacity-exceeded`, `unknown`, or `application-error` |

### Link Header for Additional Pages

If there are further pages for your request, the API will return a Link header containing the URL for the next page. The Link header will look like:

```$xslt
<https://voice.bandwidth.com/api/v2/accounts/5555555/calls?pageSize=100&cursor=Yy0yYTkxM2Y5NC02YTQ4NmYzYS0zY2FlLTQwMzQtYmNjMy1mMGM5ZmE3NzMyZGU>; rel="next"
```

{% common %}

### Example 1 of 2: Retrieve all calls

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls" \
    -u '{username}:{password}'
```

```json
[
    {
        "callId": "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
        "parentCallId": null,
        "applicationId": "7ce0ef8d-799e-4257-9f00-5bb271781750",
        "accountId": "55555555",
        "to": "+15552311778",
        "from": "+15552311772",
        "direction": "outbound",
        "state": "disconnected",
        "startTime": "2020-07-10T12:15:18.956Z",
        "answerTime": "2020-07-10T12:15:21.675Z",
        "endTime": "2020-07-10T12:15:32.558Z",
        "disconnectCause": "hangup",
        "errorMessage": null,
        "errorId": null,
        "lastUpdate": "2020-07-10T12:15:32.558Z"
    },
    {
        "callId": "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa777ffd",
        "parentCallId": null,
        "applicationId": "7ce0ef8d-799e-4257-9f00-5bb271781750",
        "accountId": "55555555",
        "to": "+15552311778",
        "from": "+15552311772",
        "direction": "outbound",
        "state": "disconnected",
        "startTime": "2020-07-10T13:15:18.956Z",
        "answerTime": "2020-07-10T13:15:21.675Z",
        "endTime": "2020-07-10T12:13:32.558Z",
        "disconnectCause": "hangup",
        "errorMessage": null,
        "errorId": null,
        "lastUpdate": "2020-07-10T12:15:32.558Z"
    }
]
```

{% sample lang="java" %}

```java
//COMING SOON
```

{% sample lang="csharp" %}

```csharp
//COMING SOON
```

{% sample lang="ruby" %}

```ruby
//COMING SOON
```

{% sample lang="python" %}

```python
//COMING SOON
```

{% sample lang="js" %}

```js
//COMING SOON
```

{% sample lang="php" %}

```php
//COMING SOON
```

### Example 2 of 2: Retrieve calls by query

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls?pageSize=10&minStartTime=2020-07-13T12%3A00%3A000Z&maxStartTime=2020-07-13T13%3A00%3A000Z&to=%2B15552311778&from=%2B15552311772&state=disconnected&disconnectCause=hangup&disconnectCause=timeout" \
    -u '{username}:{password}'
```

```json
[
    {
        "callId": "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
        "parentCallId": null,
        "applicationId": "7ce0ef8d-799e-4257-9f00-5bb271781750",
        "accountId": "55555555",
        "to": "+15552311778",
        "from": "+15552311772",
        "direction": "outbound",
        "state": "disconnected",
        "startTime": "2020-07-10T12:15:18.956Z",
        "answerTime": "2020-07-10T12:15:21.675Z",
        "endTime": "2020-07-10T12:15:32.558Z",
        "disconnectCause": "hangup",
        "errorMessage": null,
        "errorId": null,
        "lastUpdate": "2020-07-10T12:15:32.558Z"
    }
]
```

{% sample lang="java" %}

```java
//COMING SOON
```

{% sample lang="csharp" %}

```csharp
//COMING SOON
```

{% sample lang="ruby" %}

```ruby
//COMING SOON
```

{% sample lang="python" %}

```python
//COMING SOON
```

{% sample lang="js" %}

```js
//COMING SOON
```

{% sample lang="php" %}

```php
//COMING SOON
```

{% endmethod %}