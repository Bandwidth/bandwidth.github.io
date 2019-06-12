{% method %}

## Remove Application

Delete an existing application

### Request URL

<code class="delete">DELETE</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`


{% common %}

### Example 1 of 1: Delete an application

{% sample lang="http" %}

```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
```

{% endmethod %}