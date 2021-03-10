{% method %}

## Get Messages

Note: Message Search is in limited availability.  We will continue to make improvements so you may see changes.

### URL Encoding For Query Parameters

Most of the query parameters for this endpoint require URL encoding (exception being `messageId`s that include hyphens). Examples shown are the post encoded values, which is what this endpoint expects to receive.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/messages`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API user's username and password. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Query Parameters

| Parameter | Type | Description | Examples |
|:--|:--|:--|:--|
| messageId | string | The ID of the message to search for. Special characters need to be encoded using URL encoding | `9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6`, `1589228074636lm4k2je7j7jklbn2` |
| sourceTn | string | The phone number that sent the message | `%2B15554443333` |
| destinationTn | string | The phone number that received the message | `%2B15554443333` |
| messageStatus | string | The status of the message. One of `RECEIVED`, `QUEUED`, `SENDING`, `SENT`, `FAILED`, `DELIVERED`, `ACCEPTED`, `UNDELIVERED` | `RECEIVED` |
| errorCode | integer | The error code of the message | `9902` |
| fromDateTime | string | The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | `2016-09-14T18:20:16.000Z` |
| toDateTime | string | The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | `2016-09-14T18:20:16.000Z` |
| pageToken | string | A base64 encoded value used for pagination of results | gdEewhcJLQRB5 |
| limit | integer | The maximum records requested in search result . Default `100`. <br> The sum of limit and after cannot be more than 10000 | `limit=100` |

### Message Statuses

| Status | Description |
|:--|:--|
| RECEIVED | Bandwidth has received your request to send a message. This is the initial status when sending a message. |
| QUEUED |Bandwidth has successfully received the message and queued the message prior to being sent downstream. |
| SENDING | Bandwidth is in the process of sending your messages to the downstream carrier. |
| SENT | Bandwidth has sent the message. The downstream carrier has accepted the message. |
| DELIVERED | Bandwidth has received a delivery receipt from the downstream carrier confirming successful delivery to the carrier or handset (when available). |
| FAILED | The message could not be sent or the delivery receipt received from the downstream carrier indicated the message was not deliverable. Review error codes for more information. |
| ACCEPTED | Message was accepted by the customer. |
| UNDELIVERED | Message was not capable of being delivered. Delivery receipt indicates the message was failed or rejected by the upstream provider. |

### Response Parameters

| Parameter | Type | Description |
|:--|:--|
| totalCount | integer | Total number of messages matched by the search |
| messages | array | The most recent messages are returned sorted by receive time |
| messages.messageId | string | The message id |
| messages.accountId | string | The account id of the message |
| messages.destinationTn | string | The recipient phone number of the message |
| messages.sourceTn | string | The source phone number of the message |
| messages.messageStatus | string | The status of the message |
| messages.messageDirection | string | The direction of the message relative to Bandwidth  |
| messages.messageType | string | The type of message  |
| messages.segmentCount | integer | The number of segments the message was sent as |
| messages.errorCode | integer | The numeric error code of the message |
| messages.receiveTime | string | The ISO 8601 datetime of the message |
| messages.carrierName | string | The name of the carrier. Not currently supported for MMS, coming soon |
| pageInfo.prevPage | string | The link to the previous page for pagination |
| pageInfo.nextPage | string | The link to the next page for pagination |

{% common %}

### Example: Search by message ID

{% sample lang='http' %}

```http
GET https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageId=1589228074636lm4k2je7j7jklbn2 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

HTTP/1.1 200 OK
Content-Type: application/json
```

> The above command returns a JSON Response structured like this:

```http
{
    "totalCount":1,
    "pageInfo": {},
    "messages":[
        {
            "messageId":"1589228074636lm4k2je7j7jklbn2",
            "accountId":"12345",
            "sourceTn":"+15554443333",
            "destinationTn":"+15554442222",
            "messageStatus":"DELIVERED",
            "messageDirection":"OUTBOUND",
            "messageType":"sms",
            "segmentCount":1,
            "errorCode":0,
            "receiveTime":"2020-04-07T14:03:07.000Z",
            "carrierName":"other"
        }
    ]
}
```


### Example: Search with pagination parameters

{% sample lang='http' %}

```http
GET https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

HTTP/1.1 200 OK
Content-Type: application/json
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&prevPage=GL83PD3C>; rel="next"
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&nextPage=DLAPE902>; rel="prev"
```

> The above command returns records in this format:

```http
{
    "totalCount":100,
    "pageInfo": {
        "prevPage": "https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&nextPage=DLAPE902",
        "nextPage": "https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&prevPage=GL83PD3C"
    },
    "messages":[
        {
            "messageId":"1589228074636lm4k2je7j7jklbn2",
            "accountId":"12345",
            "sourceTn":"+15554443333",
            "destinationTn":"+15554442222",
            "messageStatus":"DLR_EXPIRED",
            "messageDirection":"OUTBOUND",
            "messageType":"sms",
            "segmentCount":1,
            "errorCode":9902,
            "receiveTime":"2020-04-07T14:03:07.000Z",
            "carrierName":"other"
        },
        {
            ...
        },
        {
            ...
        },

        :    
        :

        {
            ...
        }
    ]
}
```

{% endmethod %}
