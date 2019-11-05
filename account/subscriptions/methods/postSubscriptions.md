{% method %}

## Create Subscription

Create a new [subscription](../about.md)

### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions`

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

### Order Types

| Order type       | Notified states                                                                                                     |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------|
| `portins`        | `PENDING_DOCUMENTS`, `SUBMITTED`, `FOC`, `REQUESTED_SUPP`, `COMPLETE`, `CANCELLED`, `EXCEPTION`, `REQUESTED_CANCEL` |
| `orders`         | `COMPLETE`, `PARTIAL`, `BACKORDERED`, `FAILED`                                                                      |
| `portouts`       | `COMPLETE`                                                                                                          |
| `disconnects`    | `COMPLETE`, `PARTIAL`, `FAILED`                                                                                     |
| `dldas`          | `RECEIVED`, `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                           |
| `lsrorders`      | `PENDING`, `FOC`, `EXCEPTION`, `COMPLETE`, `CANCELLED`, `PARTIAL`, `FAILED`                                         |
| `e911s`          | `RECEIVED`, `PROCESSING`, `COMPLETE`, `ADJUSTED_COMPLETE`, `PARTIAL`, `ADJUSTED_PARTIAL`, `FAILED`                  |
| `tnoptions`      | `RECEIVED`, `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                           |
| `externalTns`    | `COMPLETE`, `PARTIAL`, `FAILED`                                                                                     |
| `importtnorders` | `COMPLETE`, `PARTIAL`, `FAILED`, `EXCEPTION`                                                                        |
| `lidb`           | `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                                       |
| `bulkPortins`    | `DRAFT`, `IN_PROGRESS`, `NEEDS_ATTENTION`, `PARTIAL`, `COMPLETED`, `CANCELLED`                                      |


{% common %}

### Example 1 of 2: Create subscription for OrderType Orders

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>[valid publically addressable URL]</URL>
        <Expiry>3122064000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username> [username] </Username>
                <Password> [password] </Password>
            </BasicAuthentication>
            <PublicKey>kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: subscription/xml
Location: https://.../accounts/{{accountId}}/subscriptions/{{subscriptionId}}
```

### Example 2 of 2: Create a subscription for a specific portins order Id

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>portins</OrderType>
    <OrderId>ee456cfb-d237-4adc-b3f8-9db03d2e62a2<OrderId>
    <CallbackSubscription>
        <URL>[valid publically addressable URL]</URL>
        <Expiry>3122064000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username> [username] </Username>
                <Password> [password] </Password>
            </BasicAuthentication>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: subscription/xml
Location: https://.../accounts/{{accountId}}/subscriptions/{{subscriptionId}}
```


{% endmethod %}
