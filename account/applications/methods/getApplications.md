{% method %}

## List Applications

List all applications on your account

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications`


{% common %}

### Example 1 of 1: List all applications

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
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
    <ApplicationList>
        <Application>
            <ApplicationId>2b6f1443-2b7e-4649-ac28-9c3a723d12f9</ApplicationId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Production Server</AppName>
            <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds>
                <UserId>Your-User-id</UserId>
                <Password>Your-Password</Password>
            </CallbackCreds>
        </Application>
        <Application>
            <ApplicationId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</ApplicationId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Production Server 2</AppName>
            <CallbackUrl>https://yourUnsecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds/>
        </Application>
        <Application>
            <ApplicationId>2afad54d-8a65-4085-b25b-4c86fd5819d0</ApplicationId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Dev Site</AppName>
            <CallbackUrl>https://dev.yourSecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds>
                <UserId>Your-User-id</UserId>
                <Password>Your-Password</Password>
            </CallbackCreds>
        </Application>
    </ApplicationList>
</ApplicationProvisioningResponse>
```

{% endmethod %}