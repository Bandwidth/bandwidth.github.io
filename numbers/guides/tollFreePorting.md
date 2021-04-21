{% multimethod %}
{% endmultimethod %}

# Toll Free Porting Validation {#top}

# Overview
  * [API Overview](#api-overview)
    * [Create Order](#create-toll-free-validation-order)
    * [Query Orders](#query-toll-free-validation-orders)
    * [Query Order](#query-toll-free-validation-order)
    * [Update Order](#update-toll-free-validation-order)
  * [How to Use](#how-to-use-the-endpoint-in-conjunction-with-porting)


In order to successfully port toll free telephone numbers using Bandwidth’s /portins API, the list of toll free telephone numbers to port must consist of portable numbers that all come from the same controlling RespOrg. If you submit non-portable toll free numbers, or a mix of numbers from different RespOrgs, the port-in request is rejected, wasting everyone’s time and money.

To help eliminate this waste, Bandwidth has implemented an API that allows toll free porting API customers to query a list of toll free telephone numbers for status and RespOrg breakdown.  This will help toll free porting customers avoid submitting port-in orders that might otherwise be rejected.

# API Overview
The new API Operations are as follows:

| Method                           | Endpoint                                                     |
|:---------------------------------|:-------------------------------------------------------------|
| <code class="post">POST</code>   | `/accounts/<accountId>/tollFreePortingValidations`           |
| <code class="get">GET</code>     | `/accounts/<accountId>/tollFreePortingValidations`           |
| <code class="get">GET</code>     | `/accounts/<accountId>/tollFreePortingValidations/<orderId>` |
| <code class="patch">PATCH</code> | `/accounts/<accountId>/tollFreePortingValidations/<orderId>` |

{% extendmethod %}
## Create Toll Free Validation Order
This endpoint allows users to submit a list of toll free numbers to determine if they are portable, and to determine how many separate port-ins will be needed. It creates a /tollFreePortingValidations order and assigns a unique order-id to that order, which is then returned in the HTTP response.

{% common %}
### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tollFreePortingValidations HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<TollFreePortingValidation>
    <!-- The CustomerOrderId is an optional string that may be associated with the order.  -->
    <!-- It will be included in all responses and notifications related to the order, and may be used to correlate with an order in a customer system. -->
    <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
    <!-- The TollFreeNumberList is a list of toll free telephone numbers for which you want information about the status and RespOrg from SOMOS. -->
    <!-- The list may consist of up to 5,000 toll free telephone numbers in one order.  The more numbers in the order, the longer it will take the order to complete. -->
    <TollFreeNumberList>
        <TollFreeNumber>8442948899</TollFreeNumber>
        <TollFreeNumber>8774024485</TollFreeNumber>
    </TollFreeNumberList>
</TollFreePortingValidation>
```

### Response
```xml
<TollFreePortingValidationResponse>
    <TollFreePortingValidation>
        <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
        <ProcessingStatus>PROCESSING</ProcessingStatus>
        <AccountId>9900572</AccountId>
        <CreatedByUser>jgilmore</CreatedByUser>
        <OrderCreateDate>2020-08-20T14:51:58.695Z</OrderCreateDate>
        <OrderId>e2b029cf-1cfa-4285-a875-80e8fd951208</OrderId>
        <TollFreeNumberList>
            <TollFreeNumber>8442948899</TollFreeNumber>
            <TollFreeNumber>8774024485</TollFreeNumber>
        </TollFreeNumberList>
    </TollFreePortingValidation>
</TollFreePortingValidationResponse>
```

{% endextendmethod %}


{% extendmethod %}
## Query Toll Free Validation Orders
This endpoint allows users to fetch a list of all /tollFreePortingValidations orders that exist for the specified accountId. This is useful if you lose track of an order-id.

**Note that /tollFreePortingValidations orders are automatically removed after a few days because the data can become stale as toll free numbers are reserved, freed, etc.**

{% common %}
### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tollFreePortingValidations HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response
```xml
<TollFreePortingValidationResponses>
    <!-- A sample order that is still processing -->
    <TollFreePortingValidationResponse>
        <TollFreePortingValidation>
            <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
            <ProcessingStatus>PROCESSING</ProcessingStatus>
            <AccountId>9900572</AccountId>
            <CreatedByUser>jgilmore</CreatedByUser>
            <OrderCreateDate>2020-08-20T14:51:58.695Z</OrderCreateDate>
            <OrderId>e2b029cf-1cfa-4285-a875-80e8fd951208</OrderId>
            <TollFreeNumberList>
                <TollFreeNumber>8442948899</TollFreeNumber>
                <TollFreeNumber>8774024485</TollFreeNumber>
            </TollFreeNumberList>
        </TollFreePortingValidation>
    </TollFreePortingValidationResponse>
    <!-- A sample order that completed -->
    <TollFreePortingValidationResponse>
        <TollFreePortingValidation>
            <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
            <ProcessingStatus>COMPLETE</ProcessingStatus>
            <AccountId>9900572</AccountId>
            <CreatedByUser>jgilmore</CreatedByUser>
            <OrderCreateDate>2020-08-20T14:51:58.695Z</OrderCreateDate>
            <OrderId>e2b029cf-1cfa-4285-a875-80e8fd951208</OrderId>
            <TollFreeNumberList>
                <TollFreeNumber>8442948899</TollFreeNumber>
                <TollFreeNumber>8774024485</TollFreeNumber>
            </TollFreeNumberList>
            <Breakdown>
                <PortableTollFreeNumberList>
                    <RespOrgList>
                        <RespOrg>
                            <Id>RespOrg1</Id>
                            <RespOrgException>true</RespOrgException>
                            <TollFreeNumberList>
                                <TollFreeNumber>8442948899</TollFreeNumber>
                                <TollFreeNumber>8774024485</TollFreeNumber>
                            </TollFreeNumberList>
                        </RespOrg>
                    </RespOrgList>
                </PortableTollFreeNumberList>
            </Breakdown>
        </TollFreePortingValidation>
    </TollFreePortingValidationResponse>
```

{% endextendmethod %}

{% extendmethod %}
## Query Toll Free Validation Order
This endpoint allows users to fetch the status of a specified /tollFreePortingValidations order. Possible status values are SUBMITTED, PROCESSING, COMPLETE, FAILED, or CANCELLED. See below for more information on what each status represents.

| Status     | Definition |
|:-----------|:-----------|
| SUBMITTED  | The request has been submitted but has not yet been acknowledged. |
| PROCESSING | The request is processing but the order is not yet complete. |
| COMPLETE   | The order is complete.  All toll free numbers in the request are portable, but may belong to more than one RespOrg. |
| FAILED     | One or more toll free numbers included in the request is not portable.  The breakdown shows which toll free numbers are not portable and the reason why. |
| CANCELLED  | The order was cancelled by the user (using the PATCH operation) prior to our receiving a result from the vendor. |

{% common %}
### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tollFreePortingValidations/{orderId} HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response
```xml
<TollFreePortingValidationResponse>
    <TollFreePortingValidation>
        <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
        <ProcessingStatus>PROCESSING</ProcessingStatus>
        <AccountId>9900572</AccountId>
        <CreatedByUser>jgilmore</CreatedByUser>
        <OrderCreateDate>2020-08-20T14:51:58.695Z</OrderCreateDate>
        <OrderId>e2b029cf-1cfa-4285-a875-80e8fd951208</OrderId>
        <TollFreeNumberList>
            <TollFreeNumber>8442948899</TollFreeNumber>
            <TollFreeNumber>8774024485</TollFreeNumber>
        </TollFreeNumberList>
    </TollFreePortingValidation>
</TollFreePortingValidationResponse>
```

{% endextendmethod %}

{% extendmethod %}
## Update Toll Free Validation Order
This endpoint allows users to cancel a /tollFreePortingValidations order if you they longer wish to wait for the results, or if they realize that changes are needed in the list of toll free numbers in the request.

{% common %}
### Request
```http
PATCH https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tollFreePortingValidations HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<TollFreePortingValidation>
    <ProcessingStatus>CANCELLED</ProcessingStatus>
</TollFreePortingValidation>
```

### Response
```xml
<TollFreePortingValidationResponse>
    <TollFreePortingValidation>
        <CustomerOrderId>MyOptionalOrderId</CustomerOrderId>
        <ProcessingStatus>CANCELLED</ProcessingStatus>
        <AccountId>9900572</AccountId>
        <CreatedByUser>jgilmore</CreatedByUser>
        <OrderCreateDate>2020-08-20T14:51:58.695Z</OrderCreateDate>
        <OrderId>e2b029cf-1cfa-4285-a875-80e8fd951208</OrderId>
        <TollFreeNumberList>
            <TollFreeNumber>8442948899</TollFreeNumber>
            <TollFreeNumber>8774024485</TollFreeNumber>
        </TollFreeNumberList>
    </TollFreePortingValidation>
</TollFreePortingValidationResponse>
```

{% endextendmethod %}

<br>
# How to use the Endpoint in Conjunction with Porting
Prior to submitting your `/portins` request, simply <code class="post">POST</code> a `/tollFreePortingValidations` request with the list of toll free numbers you wish to port.  Bandwidth will determine the current status and RespOrg ownership of each toll free number. A report is generated, breaking down the list of toll free telephone numbers into the following categories:
  * **Spare Numbers** - these are toll free telephone numbers that are not currently associated with a particular RespOrg. They are not available for porting, but can be ordered from the industry.  Bandwidth can help you reserve spare toll free numbers using the same process you would use for toll free vanity number requests.
  * **Unavailable Numbers** - these are toll free numbers that are not available for use.  Typically this includes toll free numbers that are reserved for future expansion.
  * **Denied Numbers** - these toll free numbers are not portable due to a problem like, for example, the NXX has not yet been opened for service.
  * **Numbers Belonging to a RespOrg Ending in 99** - it is industry convention that toll free numbers cannot be ported away from a RespOrg ID that ends in 99.
  * **Portable Numbers** - these are toll free numbers that are currently assigned to a RespOrg and are candidates for porting.  Numbers in this category are broken down further by the RespOrg that is currently responsible for the toll free number.

This allows you to separate your numbers by RespOrg without having to worry about the actual RespOrg ID.

For requests with only a few toll free numbers, these requests are generally serviced within 5 to 10 seconds.  But if you submit a request with several hundred toll free numbers, it can take 3 to 5 minutes to get the results. **Please note that these times are not guaranteed and can vary depending on load.**

If you wish to be notified of /tollFreePortingValidations order status changes, you may subscribe to notification via web hook, or via email.  For information on subscribing for order notifications, please see [our documentation regarding subscriptions](./account/subscriptions/about.md).

For detailed information on the /tollFreePortingValidations endpoints and supported operations, please refer to Bandwidth’s [Numbers API reference](./apiReference.md).
<br>
<br>
