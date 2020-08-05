{% method %}

## Create Application

Create a new [application](../about.md)

### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Supported Parameters

| Parameters                            | Mandatory                  | Description                                                                                                                                                                                                                        |
|:--------------------------------------|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`                         | Yes                        | The type of service the application will be used for. <br><br>- `Messaging-V2` for [message events](../../../messaging/callbacks/messageEvents.md) <br><br>- `Voice-V2` for [voice events](../../../voice/bxml/callbacks/about.md) |
| `AppName`                             | Yes                        | Plain text name of the application                                                                                                                                                                                                 |
| `MsgCallbackUrl`                      | Yes, for `Messaging-V2`    | Url to receive [message events](../../../messaging/callbacks/messageEvents.md)                                                                                                                                                     |
| `CallInitiatedCallbackUrl`            | Yes, for `Voice-V2`        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md)                                                                                                                                                              |
| `CallInitiatedMethod`                 | No                         | HTTP method for events sent to the `CallInitiatedCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code>                                                     |
| `CallStatusCallbackUrl`               | No                         | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) **NOT** related to Initiated. Such as: rejected or hung up.                                                                                                  |
| `CallStatusMethod`                    | No                         | HTTP method for events sent to the `CallStatusCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code>                                                        |
| `CallbackCreds`                       | No, but highly recommended | Basic auth credentials to apply to your message & voice events                                                                                                                                                                     |
| `CallbackCreds.UserId`                | No, but highly recommended | Basic auth `UserId`                                                                                                                                                                                                                |
| `CallbackCreds.Password`              | No, but highly recommended | Basic auth `Password`                                                                                                                                                                                                              |
| `CallInitiatedFallbackUrl`            | No                         | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) URL is used when voice events fail to process at `CallInitiatedCallbackUrl`                                                                                  |
| `CallInitiatedFallbackMethod`         | No                         | HTTP method for events sent to the `CallInitiatedFallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code>                                                     |
| `CallInitiatedFallbackCreds`          | No                         | Basic auth credentials to apply to voice events sent to the `CallInitiatedFallbackUrl`.                                                                                                                                            |
| `CallInitiatedFallbackCreds.UserId`   | No                         | Basic auth `UserId`                                                                                                                                                                                                                |
| `CallInitiatedFallbackCreds.Password` | No                         | Basic auth `Password`                                                                                                                                                                                                              |


{% common %}

### Example 1 of 2: Create a new messaging application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <MsgCallbackUrl>https://yourSecureSite.com/callbacks/messaging</MsgCallbackUrl>
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
        <MsgCallbackUrl>https://yourSecureSite.com/callbacks/messaging</MsgCallbackUrl>
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
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/voice</CallInitiatedCallbackUrl>
    <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/voice/status</CallStatusCallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
      <Password>Your-Password</Password>
  </CallbackCreds>
  <CallInitiatedFallbackUrl>https://yourSecureSecondarySite.com/callbacks/voice</CallInitiatedCallbackUrl>
  <CallInitiatedFallbackCreds>
      <UserId>Your-Fallback-User-id</UserId>
      <Password>Your-Fallback-Password</Password>
  </CallInitiatedFallbackCreds>
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
        <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/voice</CallInitiatedCallbackUrl>
        <CallInitiatedMethod>POST</CallInitiatedMethod>
        <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/voice/status</CallStatusCallbackUrl>
        <CallStatusMethod>POST</CallStatusMethod>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
        </CallbackCreds>
        <CallInitiatedFallbackUrl>https://yourSecureSecondarySite.com/callbacks/voice</CallInitiatedCallbackUrl>
        <CallInitiatedFallbackMethod>POST</CallInitiatedFallbackMethod>
        <CallInitiatedFallbackCreds>
            <UserId>Your-Fallback-User-id</UserId>
        </CallInitiatedFallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
