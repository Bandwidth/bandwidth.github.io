{% method %}

## Partial Update Application

<code class="patch">PATCH</code> update will only update the specified field

### Request URL

<code class="patch">PATCH</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

### Supported Parameters
| Parameters               | Mandatory | Description                                                                          |
|:-------------------------|:----------|:-------------------------------------------------------------------------------------|
| `AppName`                | No        | Plain text name of the application                                                   |
| `CallbackUrl`            | No        | Url to receive _all_ [message events](../../../messaging/callbacks/messageEvents.md) or [voice events](../../../voice/bxml/callbacks/about.md)                    |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your [message events](../../../messaging/callbacks/messageEvents.md) or [voice events](../../../voice/bxml/callbacks/about.md) |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                  |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                |


{% common %}

### Example 1 of 1: Update _only_ the UserId field

{% sample lang="http" %}

```http
PATCH https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <CallbackCreds>
        <UserId>Your-NEW-User-id</UserId>
    </CallbackCreds>
</Application>
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
            <UserId>Your-NEW-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
