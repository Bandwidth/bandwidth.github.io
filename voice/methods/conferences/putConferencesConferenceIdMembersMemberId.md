{% method %}
## Update active Conference Member
Update properties of an active conference member.

### Request URL

<code class="post">PUT</code>`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}`

#### Basic Authentication

Bandwidth's Voice API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Supported Parameters

| Parameter       | Description                                                                  | Mandatory |
|:----------------|:-----------------------------------------------------------------------------|:----------|
| mute            | (optional) If true, member can't speak in the conference                     | No        |
| hold            | (optional) If true, member can't speak or hear in the conference             | No        |
| callIdsToCoach  | (optional) If not null, updates the list of calls to be coached by this member.<br><aside class="alert general small">If an empty list is sent, then the member will no longer be the coach and can be heard by everyone.</aside><br>Note that a conference may only have one coach, so trying to set `callIdsToCoach` on a conference that already has a coach results in an error. | No        | 

{% common %}

### Example 1 of 2 : Put an active conference member on mute

{% sample lang="http" %}

```bash
curl -X PUT \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "mute"       : "true"
    }'
```

```json
{
    "mute" : true
}
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

```ruby
# TODO
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

```php
// TODO
```

{% common %}

### Example 2 of 2 : Unmute a conference member and set it as coach

{% sample lang="http" %}

```bash
curl -X PUT \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "mute"           : false,
      "callIdsToCoach" : ["c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d", "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"]
    }'
```

```json
{
    "mute" : true
}
```

```
HTTP/1.1 204
```

{% sample lang="java" %}

```java
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

```ruby
# TODO
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

```php
// TODO
```

{% common %}

{% endmethod %}
