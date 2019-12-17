{% method %}

## Retrieve Call Information
Retrieve the current state of a specific call.

The `answerTime` field will be populated once the call has been answered.

The `endTime` and `disconnectCause` fields will be populated once the call has ended

The `errorMessage` and `errorId` fields will be populated if the call ends with an error. If the call has not ended, or ends for a non-error reason, these fields will never be populated.

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

### Example: Retrieve information about a specific call

{% sample lang="http" %}

```bash
curl -X GET \
    --url "https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}" \
    -u '{username}:{password}'
```

```json
{
  "callId"              : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d",
  "applicationId"       : "60bae05f-1c6d-4ea5-9f53-9ea71c4825aa",
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
