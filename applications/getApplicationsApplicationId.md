{% method %}

## Fetch Application info

Get information about an existing Application

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`


{% common %}

### Example 1 of 1: Create a new application

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>Production Server</AppName>
        <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}