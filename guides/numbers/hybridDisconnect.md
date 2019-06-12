# Hybrid - Delete and Disconnect a Phone Number

This guide will take you through the process of deleting and disconnecting a phone number from both your [Voice & Messaging](https://app.bandwidth.com) account **AND** your [Phone Number (dashboard)](https://dashboard.bandwidth.com) account.

It's worth noting that the phone numbers managed in the [voice & messaging dashboard](https://app.bandwidth.com) (API: `api.catapult.inetwork.com`) for your account are to only enable them for use with the programatic API.  You are **billed** for the phone numbers managed in the [phone number dashboard](https://dashboard.bandwidth.com) (API: `https://dashboard.bandwidth.com/api/`).

## Steps

(Assumes phone number has been ordered and imported uccessfully)

1. Find `{number-id}` from standard phone number (`+18283334444`) -> _(app.bandwidth.com)_
2. `DELETE` (un-import) the phone number using the `{number-id}` -> _(app.bandwidth.com)_
3. Create a disconnect order -> _(dashboard.bandwidth.com)_
4. Check disconnect status (or) receive callback -> _(dashboard.bandwidth.com)_

## App.bandwidth.com Phone Number Removal (un-import)

This will remove the phone number from your Voice & Messaging account, so it will no longer be able to be used for programmatic control. But you will still be billed for the phone number unless **also** removed from your Dashboard account.

The phone numbers are managed at the `/phoneNumbers` resource. [Link to documentation](https://dev.bandwidth.com/ap-docs/methods/phoneNumbers/phoneNumbers.html).

To Delete the number, you need to know it's `{number-id}`.  This is different from the actual phone number `+18283334444`.  This was sent as part of the `Location` header when [importing](https://dev.bandwidth.com/ap-docs/methods/phoneNumbers/postImportPhoneNumber.html) the number.

### Find Number-id

```http
GET https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers/+18283334444 HTTP/1.1
Authorization: {apiToken:apiSecret}
```

#### **Responds**

```http
Status: 200 OK
Content-Type: application/json; charset=utf-8

{
  "application"    : "https://api.catapult.inetwork.com/v1/users/{{UserId}}/applications/a-asdf",
  "id"             : "n-alghk4678lkghsdf",
  "applicationId"  : "a-asdf",
  "number"         : "+19192302749",
  "nationalNumber" : "(919) 230-2749",
  "name"           : "+19197258959",
  "createdTime"    : "2018-04-23T18:22:38Z",
  "city"           : "CARY",
  "state"          : "NC",
  "price"          : "0.35",
  "numberState"    : "enabled"
}

```

Note that the **{number-id}** is the `id` value of the returned payload.  In this case: `n-alghk4678lkghsdf`

### Delete number with {number-id}

Following the [docs](https://dev.bandwidth.com/ap-docs/methods/phoneNumbers/deletePhoneNumbersNumberId.html) to delete the phone number, will un-import the number from your account.

```http
DELETE https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers/n-alghk4678lkghsdf HTTP/1.1
Authorization: {apiToken:apiSecret}
```

#### **Responds**

```http
Status: 200 OK
```

## Dashboard.Bandwidth.com (delete completely)

To remove the number from your dashboard account, you will have to create a disconnect request for the desired phone number.  This is a bit more involved as the request is asynchronous versus synchronous for the voice & messaging dashboard.  [Link to doc](disconnectSummary.md#top).

You can verify disconnect/delete status two different ways (this guide only covers the first):

1. Create the request and poll until `status: complete`
2. Setup a [callback request](managingOrders.md#callback-notifications) to be notified in real-time to an API when orders/disconnects complete.

⚠️ Note that the API is different (`https://dashboard.bandwidth.com/api`) and your `Authorization` is now your username and password that you **use to sign in** to dashboard.bandwidth.com and **not** your api-token and api-secret from app.bandwidth.com and instead of `user-id` you need to know your **`accountId`**.  You can learn more about [security](../concepts/security.md).

### Create disconnect request

To create the request, you now need the phone number again `8283334444`(_not the number-id, and without the `+1`_).  The phone number is contained in the `<TelephoneNumber>` as part of the `<TelephoneNumberList>` within the `<DisconnectTelephoneNumberOrderType>`

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<?xml version="1.0"?>
<DisconnectTelephoneNumberOrder>
    <name>Delete Number</name>
    <DisconnectTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>8283334444</TelephoneNumber>
        </TelephoneNumberList>
    </DisconnectTelephoneNumberOrderType>
</DisconnectTelephoneNumberOrder>
```

#### **Responds**

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects/df2gc2e2-653d-466c-945d-8f292f09ce55

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <orderRequest>
        <OrderCreateDate>2018-05-29T16:01:13.014Z</OrderCreateDate>
        <id>62ba44f0-f2fb-4509-9132-bd0507d8671a</id>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>8283334444</TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>normal</DisconnectMode>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
    <OrderStatus>RECEIVED</OrderStatus>
</DisconnectTelephoneNumberOrderResponse>
```

### Check the disconnect to verify status

A GET Request to an existing disconnect will return it's status as well as any information originally used to create the disconnect.

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects/df2gc2e2-653d-466c-945d-8f292f09ce55 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

#### **Responds**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <DisconnectedTelephoneNumberList>
        <TelephoneNumber>8283334444</TelephoneNumber>
    </DisconnectedTelephoneNumberList>
    <orderRequest>
        <OrderCreateDate>2018-05-29T16:01:13.014Z</OrderCreateDate>
        <id>df2gc2e2-653d-466c-945d-8f292f09ce55</id>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>8283334444</TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>normal</DisconnectMode>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
    <OrderStatus>COMPLETE</OrderStatus>
</DisconnectTelephoneNumberOrderResponse>
```
<br>
