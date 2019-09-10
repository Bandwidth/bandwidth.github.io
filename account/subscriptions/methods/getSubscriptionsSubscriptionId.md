{% method %}

## Fetch Subscription info

Get information about an existing Subscription

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`


{% common %}

### Example 1 of 1: Fetch an subscription

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: subscription/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: subscription/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SubscriptionProvisioningResponse>
    <Subscription>
        <SubscriptionId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</SubscriptionId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>Production Server</AppName>
        <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Subscription>
</SubscriptionProvisioningResponse>
```

{% endmethod %}