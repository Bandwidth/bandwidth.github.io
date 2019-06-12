{% method %}

## Create Application

Create a new [application](about.md)

### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications`

### Supported Parameters

| Parameters               | Mandatory | Description                                                                                                                |
|:-------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`            | Yes       | The type of service the application will be used for. `Messaging-V2` is the only valid service type as of February 15, 2018 |
| `AppName`                | Yes       | Plain text name of the application                                                                                         |
| `CallbackUrl`            | Yes       | Url to receive _all_ [message events](../events/messageEvents.md)                                                          |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your [message events](../events/messageEvents.md)                                       |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                                        |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                                      |


{% common %}

### Example 1 of 1: Create a new application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
      <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
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
