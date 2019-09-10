{% method %}

## Remove Subscription

Delete an existing subscription

### Request URL

<code class="delete">DELETE</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`


{% common %}

### Example 1 of 1: Delete an subscription

{% sample lang="http" %}

```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
```

{% endmethod %}