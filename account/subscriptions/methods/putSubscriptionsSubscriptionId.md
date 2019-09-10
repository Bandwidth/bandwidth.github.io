{% method %}

## Completely Update Subscription

<code class="put">PUT</code> update will replace **ALL** existing fields.

### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`

### Supported Parameters
| Parameters               | Mandatory | Description                                                                                                                         |
|:-------------------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------|
| `AppName`                | Yes       | Plain text name of the subscription                                                                                                  |
| `CallbackUrl`            | Yes       | Url to receive either [message events](../messaging/callbacks/messageEvents.md) or [voice events](../voice/bxml/callbacks/about.md) |
| `CallbackCreds`          | No        | Basic auth credentials                                                                                                              |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                                                 |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                                               |


{% common %}

### Example 1 of 1: Remove the CallbackCreds from an subscription

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: subscription/xml; charset=utf-8
Authorization: {user:password}

<Subscription>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
</Subscription>
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
    </Subscription>
</SubscriptionProvisioningResponse>
```

{% endmethod %}
