{% method %}

## Completely Update Application

<code class="put">PUT</code> update will replace **ALL** existing fields.

### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

### Supported Parameters
| Parameters               | Mandatory | Description                                                                                                                         |
|:-------------------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------|
| `AppName`                | Yes       | Plain text name of the application                                                                                                  |
| `CallbackUrl`            | Yes       | Url to receive either [message events](../messaging/callbacks/messageEvents.md) or [voice events](../voice/bxml/callBacks/about.md) |
| `CallbackCreds`          | No        | Basic auth credentials                                                                                                              |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                                                 |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                                               |


{% common %}

### Example 1 of 1: Remove the CallbackCreds from an application

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
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
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
