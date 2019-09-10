{% method %}

## List Subscriptions

List all subscriptions on your account

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions`


{% common %}

### Example 1 of 1: List all subscriptions

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
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
    <SubscriptionList>
        <Subscription>
            <SubscriptionId>2b6f1443-2b7e-4649-ac28-9c3a723d12f9</SubscriptionId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Production Server</AppName>
            <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds>
                <UserId>Your-User-id</UserId>
                <Password>Your-Password</Password>
            </CallbackCreds>
        </Subscription>
        <Subscription>
            <SubscriptionId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</SubscriptionId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Production Server 2</AppName>
            <CallbackUrl>https://yourUnsecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds/>
        </Subscription>
        <Subscription>
            <SubscriptionId>2afad54d-8a65-4085-b25b-4c86fd5819d0</SubscriptionId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>Dev Site</AppName>
            <CallbackUrl>https://dev.yourSecureSite.com/callbacks</CallbackUrl>
            <CallbackCreds>
                <UserId>Your-User-id</UserId>
                <Password>Your-Password</Password>
            </CallbackCreds>
        </Subscription>
    </SubscriptionList>
</SubscriptionProvisioningResponse>
```

{% endmethod %}