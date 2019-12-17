{% method %}

## Retrieve Call Information
Retrieve the current state of a specific call.

The `state` attribute indicates the current state of the call. Valid values are `created`, `answered` and `disconnected`.

The `answerTime` attribute is populated once the call has been answered.

The `endTime` and `disconnectCause` attributes are populated once the call has ended.

The `errorMessage` and `errorId` attributes are populated only if the call ends with an error.

### Request URL

<code class="get">GET</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter | Description |
|:----------|:------------|
| None      | None        |

{% common %}

### Example 1 of 1: Retrieve information about a specific call

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}" \
    -u '{username}:{password}'
```

```json
{
  "callId"              : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
  "applicationId"       : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
  "accountId"           : "5555555",
  "to"                  : "+15553334444",
  "from"                : "+15551112222",
  "direction"           : "inbound",
  "state"               : "disconnected",
  "startTime"           : "2019-10-21T16:45:11.293Z",
  "answerTime"          : "2019-10-21T16:45:14.352Z",
  "endTime"             : "2019-10-21T16:55:12.950Z",
  "disconnectCause"     : "hangup",
  "errorMessage"        : null,
  "errorId"             : null,
  "lastUpdateTime"      : "2019-10-21T16:55:12.950Z"
}
```

{% sample lang="csharp" %}

```csharp
// coming soon
```

{% sample lang="ruby" %}

```ruby
# coming soon
```

{% sample lang="python" %}

```python
# coming soon
```

{% endmethod %}
