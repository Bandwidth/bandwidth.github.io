{% method %}

## Partial Update Application

<code class="patch">PATCH</code> update will only update the specified field

### Request URL

<code class="patch">PATCH</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Supported Parameters
| Parameters                 | Mandatory | Description                                                                                                                                                                    |
|:---------------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AppName`                  | No        | Plain text name of the application                                                                                                                                             |
| `MsgCallbackUrl`           | No        | Url to receive [message events](../../../messaging/callbacks/messageEvents.md)                                                                                                 |
| `CallInitiatedCallbackUrl` | No        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md)                                                                                                          |
| `CallInitiatedMethod`      | No        | HTTP method for events sent to the `CallInitiatedCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code> |
| `CallStatusCallbackUrl`    | No        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) **NOT** related to Initiated. Such as: rejected or hung up.                                              |
| `CallStatusMethod`         | No        | HTTP method for events sent to the `CallStatusCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code>    |


{% common %}

### Example 1 of 1: Update _only_ the UserId field

{% sample lang="http" %}

```http
PATCH https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

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
        <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
        <CallbackCreds>
            <UserId>Your-NEW-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
