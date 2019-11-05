{% method %}

## Remove Subscription

Delete an existing subscription

### Request URL

<code class="delete">DELETE</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

{% common %}

### Example 1 of 1: Delete an subscription

{% sample lang="http" %}

```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
```

{% endmethod %}