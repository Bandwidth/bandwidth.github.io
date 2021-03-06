{% method %}

## Fetch Application info

Get information about an existing Application

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

{% common %}

### Example 1 of 1: Fetch an application

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--Messaging-V2 application example-->
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>qMmmTT</AppName>
        <InboundCallbackUrl>https://example.com</InboundCallbackUrl>
        <OutboundCallbackUrl>https://example2.com</OutboundCallbackUrl>
        <InboundCallbackCreds>
            <UserId>15jPWZmXdm</UserId>
        </InboundCallbackCreds>
        <OutboundCallbackCreds>
            <UserId>15jPWZmXdm</UserId>
        </OutboundCallbackCreds>
        <RequestedCallbackTypes>
            <CallbackType>message-delivered</CallbackType>
            <CallbackType>message-failed</CallbackType>
            <CallbackType>message-sending</CallbackType>
        </RequestedCallbackTypes>
    </Application>
</ApplicationProvisioningResponse>
<!--Voice-V2 application example-->
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId>
        <ServiceType>Voice-V2</ServiceType>
        <AppName>qMmmTT</AppName>
        <CallInitiatedCallbackUrl>http://example.com</CallInitiatedCallbackUrl>
        <CallbackCreds>
            <UserId>15jPWZmXdm</UserId>
        </CallbackCreds>
        <CallInitiatedFallbackUrl>https://fallback.com</CallInitiatedFallbackUrl>
        <CallInitiatedFallbackMethod>POST</CallInitiatedFallbackMethod>
        <CallInitiatedFallbackCreds>
            <UserId>login2</UserId>
        </CallInitiatedFallbackCreds>
        <CallbackTimeout>20</CallbackTimeout>
    </Application>
</ApplicationProvisioningResponse>
```

{% endmethod %}
