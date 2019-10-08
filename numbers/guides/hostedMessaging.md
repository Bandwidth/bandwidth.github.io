{% multimethod %}
{% endmultimethod %}

# Bandwidth Hosted Messaging

<aside class="alert warning small"><p>Your account must be enabled for Hosted Messaging</p></aside>

## Table of contents

* [International A2P Concepts](#concepts)
* [Sending SMS messages](#send-sms)
  * [Create Message API](#create-message)
  * [HTTP Responses (Success & Errors)](#http-response)
* [Delivery Receipts (DLR) via HTTP Callbacks (webhooks)](#dlrs)
  * [DLR Format & Parameters](#http-dlr)
  * [DLR Error Codes](#dlr-errors)

![Description Image](../images/how-to-import-numbers.png)

## Step 1 *Create Import Request* - Using the Dashboard API

<code class="post">POST</code> to `/accounts/{accountId}/externalTns` With a list of phone numbers you would like to use Bandwidth for messaging.

{% extendmethod %}

### Supported Parameters

| Parameter           | Description                                                                        | Mandatory |
|:----------------|:---------------------------------------------------------------------------------------| :-- |
| `CustomerOrderID` | An order ID created by the customer for their tracking purposes                        | Yes |
| `SiteId`          | The ID of the Site that the Telephone Numbers are to be provisioned to.     | Yes |
| `SipPeerId`       | The ID of the SIP Peer that the Telephone Numbers are to be provisioned to. | No |
| `Action`          |  Indentify the action on external TNs. Allowed values... IMPORT or REMOVE.   | Yes |

{% common %}

### Example: XML Request

```http
POST https://dashboard.bandwidth.com/accounts/{accountId}/externalTns HTTP/1.1
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <CustomerOrderID>ICPA123ABC</CustomerOrderID>
    <SiteId>743</SiteId>
    <SipPeerId>303716</SipPeerId>
    <Action>[ IMPORT | REMOVE ]</Action>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</ExternalTnsOrder>
```

#### Example: XML Response

```http
Status: 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrderResponse>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>RECEIVED</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
</ExternalTnsOrderResponse>
```

{% endextendmethod %}


## Step 2 *Get Status* - Using the Dashboard API
Using the the `<OrderId>` returned in step fetch the `<ProcessingStatus>` of the order by:

<code class="get">GET</code> to `/accounts/{accountId}/externalTns/{OrderId}`

The `<ProcessingStatus>` has multiple values:

<aside class="alert general small"><p>Only numbers that are COMPLETED without ERROR can be used.</p></aside>

{% extendmethod %}

### Supported Parameters

| Status     | Description                                                                                     |
|:-----------|:------------------------------------------------------------------------------------------------|
| `RECEIVED`   | Order has yet to be processed, initial status                                                   |
| `PROCESSING` | Order is processing through                                                                     |
| `COMPLETE`   | Every number requested in the number is now available via Dashboard                             |
| `PARTIAL`    | Some numbers were procesed, others failed. <br> Check the `<ERRORS>` field for more information |
| `FAILED`     | Entire order failed. <br> Check the `<ERRORS>` field for more information.                       |

{% common %}

### Example: COMPLETE XML Response

```http
GET https://dashboard.bandwidth.com/accounts/{accountId}/externalTns/{orderId} HTTP/1.1
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>COMPLETE</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
</ExternalTnsOrder>
```

### Example: PARTIAL XML Response

```http
Status: 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>PARTIAL</ProcessingStatus>
    <Order>
        <CustomerOrderID>ICPA123ABC</CustomerOrderID>
        <SiteId>743</SiteId>
        <SipPeerId>303716</SipPeerId>
        <Action>[ IMPORT | REMOVE ]</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </Order>
    <Errors>
        <Error>
            <Code>[int]</Code>
            <Description>[string]</Description>
            <TelephoneNumbers>
                <TelephoneNumber>9199918388</TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </Errors>
</ExternalTnsOrder>
```

{% endextendmethod %}

