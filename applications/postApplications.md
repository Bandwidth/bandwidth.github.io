{% method %}

## Create Application

Create a new [application](about.md)

### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications`

### Supported Parameters

| Parameters               | Mandatory | Description                                                                                                                                                                                              |
|:-------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`            | Yes       | The type of service the application will be used for. <br><br> * `Messaging-V2` for [message events](../messaging/callbacks/messageEvents.md) <br><br> * `Voice-V2` for [voice events](../voice/bxml/callbacks/about.md) |
| `AppName`                | Yes       | Plain text name of the application                                                                                                                                                                       |
| `CallbackUrl`            | Yes       | Url to receive either [message events](../messaging/callbacks/messageEvents.md) or [voice events](../voice/bxml/callbacks/about.md)                                                                      |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your message events                                                                                                                                                   |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                                                                                                                      |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                                                                                                                    |


{% common %}

### Example 1 of 2: Create a new messaging application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks/messaging</CallbackUrl>
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
        <CallbackUrl>https://yourSecureSite.com/callbacks/messaging</CallbackUrl>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

### Example 2 of 2: Create a new voice application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<Application>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks/voice</CallbackUrl>
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
        <ServiceType>Voice-V2</ServiceType>
        <AppName>Production Server</AppName>
        <CallbackUrl>https://yourSecureSite.com/callbacks/voice</CallbackUrl>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
