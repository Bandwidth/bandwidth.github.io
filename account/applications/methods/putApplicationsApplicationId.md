{% method %}

## Completely Update Application

<code class="put">PUT</code> update will replace **ALL** existing fields.

### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Supported Parameters
| Parameters                 | Mandatory | Description                                                                                                                                                                    |
|:---------------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AppName`                  | Yes       | Plain text name of the application                                                                                                                                             |
| `MsgCallbackUrl`           | No        | Url to receive [message events](../../../messaging/callbacks/messageEvents.md)                                                                                                 |
| `CallInitiatedCallbackUrl` | No        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md)                                                                                                          |
| `CallInitiatedMethod`      | No        | HTTP method for events sent to the `CallInitiatedCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code> |
| `CallStatusCallbackUrl`    | No        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) **NOT** related to Initiated. Such as: rejected or hung up.                                              |
| `CallStatusMethod`         | No        | HTTP method for events sent to the `CallStatusCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code>    |
| `CallbackCreds`            | No        | Basic auth credentials                                                                                                                                                         |
| `CallbackCreds.UserId`     | No        | Basic auth `UserId`                                                                                                                                                            |
| `CallbackCreds.Password`   | No        | Basic auth `Password`                                                                                                                                                          |


{% common %}

### Example 1 of 1: Remove the CallbackCreds from an application

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <AppName>Production Server</AppName>
    <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
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
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
