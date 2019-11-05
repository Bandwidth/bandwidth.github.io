{% method %}

## Completely Update Subscription

<code class="put">PUT</code> update will replace **ALL** existing fields.

### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Supported Parameters

| Parameters                     | Mandatory                  | Description                                                                                                                                                                                                                                                       |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OrderType`                    | Yes                        | The type of Order (see table below) of the subscription                                                                                                                                                                                                           |
| `OrderId`                      | No                         | A unique `OrderId` of the same `OrderType`.  <br>Use the `OrderId` if you want to get callbacks for a **specific** order. Typically used for porting numbers.                                                                                                     |
| `CallbackSubscription`         | Yes                        | Container for the callback details                                                                                                                                                                                                                                |
| `Expiry`                       | Yes                        | The time **in seconds** to persist the subscription.  <br> Example Times <ul> <li>99 years = `3122064000` seconds</li><li>2 weeks = `1209600` seconds</li><li>1 week = `604800` seconds</li><li>1 day = `86400` seconds</li><li>1 hour = `3600` seconds</li></ul> |
| `URL`                          | Yes                        | Url to receive callbacks for the specified `orderId` or `orderType`                                                                                                                                                                                               |
| `CallbackCredentials`          | No, but highly recommended | Container for the Auth                                                                                                                                                                                                                                            |
| `BasicAuthentication`          | -                          | Basic auth credentials to apply to your message & voice events                                                                                                                                                                                                    |
| `BasicAuthentication.Username` | No, but highly recommended | Basic auth `Username`                                                                                                                                                                                                                                             |
| `BasicAuthentication.Password` | No, but highly recommended | Bassic auth `Password`                                                                                                                                                                                                                                            |
| `PublicKey`                    | No                         | BASE64 encoded public key matching the notification receiving server                                                                                                                                                                                              |

{% common %}

### Example 1 of 1: Remove the CallbackCreds from an subscription

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>[Same URL as before]</URL>
        <Expiry>3122064000</Expiry>
    </CallbackSubscription>
</Subscription>
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
```

{% endmethod %}
