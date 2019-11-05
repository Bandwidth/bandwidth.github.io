{% method %}

## Remove Application

Delete an existing application

### Request URL

<code class="delete">DELETE</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

{% common %}

### Example 1 of 1: Delete an application

{% sample lang="http" %}

```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
```

{% endmethod %}