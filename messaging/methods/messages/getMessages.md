{% method %}
  
## Get Messages
 
Note: This endpoint is in limited availability and is still in development. Changes should be expected.

### URL Encoding For Query Parameters

Most of the query parameters for this endpoint require URL encoding (exception being `messageId`s that include hyphens). Examples shown are the post encoded values, which is what this endpoint expects to receive.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/messages`

#### Basic Authentication

Authentication on this endpoint is <b>NOT</b> done via API token and secret. Instead, your Dashboard API credentials should be used for basic auth.

### Query Parameters

| Parameter | Type | Description | Examples |
|:--|:--|:--|:--|
| messageId | string | The ID of the message to search for. Special characters need to be encoded using URL encoding | `9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6`, `1589228074636lm4k2je7j7jklbn2` |
| sourceTn | string | The phone number that sent the message | `%2B15554443333` |
| destinationTn | string | The phone number that received the message | `%2B15554443333` |
| messageStatus | string | The status of the message. One of `RECEIVED`, `QUEUED`, `SENDING`, `SENT`, `FAILED`, `DELIVERED`, `DLR_EXPIRED` | `RECEIVED` |
| errorCode | integer | The error code of the message | `9902` |
| fromDateTime | string | The start of the date range to search in ISO 8601 format. Uses the message receive time | `2016-09-14T18:20:16.000Z` |
| toDateTime | string | The end of the date range to search in ISO 8601 format. Uses the message receive time | `2016-09-14T18:20:16.000Z^` |
| before | integer | The record number indicates that search result returned have records before the given position number in a order of sorted received timestamp | `before=10 indicates that search result will have the records from 1 - 10 postion in sorted received timestamp` |
| after | integer | The record number indicates that search result will have records after the given position number in a order of sorted received timestamp | `after=10 indicates that search result will have the records after 10th postion in a order of sorted received timestamp` |
| limit | integer | The maximum records requested in search result . Default `100`. <br> The sum of limit and after cannot be more than 10000 | `limit=100` |

### Message Statuses

| Status | Description |
|:--|:--|
| RECEIVED | Message has been received by bandwidth. |
| QUEUED | Message has been queued prior to sending. |
| SENDING | Message is in the process of being sent. This is a temporary status. |
| SENT | Message has been sent. |
| DLR_TIMEOUT | Message was forwarded and then did not receive any DLR within a certain amount of time that it would have expected to get one. |
| FAILED | Message was rejected by a downstream provider. Please review error code for more information about why. |

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
| pageInfo.before | integer | The index of the start of the search |
| pageInfo.hasBefore | boolean | True if there's more items before the `before` index, false otherwise |
| pageInfo.after | integer | The index of the end of the search |
| pageInfo.hasAfter | boolean | True if there's more items after the `after` index, false otherwise |
| pageInfo.limit | integer | Number of items returned |

{% common %}

### Example: Search by message ID

{% sample lang='http' %}

```http
GET https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageId=1589228074636lm4k2je7j7jklbn2 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

HTTP/1.1 200 OK
Content-Type: application/json
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?fromErrorCode=1&after=after&limit=int>; rel="next"
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?fromErrorCode=1&before=before&limit=int>; rel="prev"
```

> The above command returns a JSON Response structured like this:

```http
{
    "totalCount":1,
    "pageInfo": {
        "before": 0,
        "hasBefore": false,
        "after": 100,
        "hasAfter": false,
        "limit": 100
    },
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
            "receiveTime":"2020-04-07T14:03:07.000Z"
        }
    ]
}
```


### Example: Search with pagination parameters

{% sample lang='http' %}

```http
GET https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&after=50&limit=10 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

HTTP/1.1 200 OK
Content-Type: application/json
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&after=60&limit=10>; rel="next"
Link: <https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageStatus=DLR_EXPIRED&before=50&limit=10>; rel="prev"
```

> The above command returns a records from 50 - 60 position in a order of sorted received timestamp :

```http
{
    "totalCount":100,
    "pageInfo": {
        "before": 50,
        "hasBefore": true,
        "after": 60,
        "hasAfter": true,
        "limit": 10
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
            "receiveTime":"2020-04-07T14:03:07.000Z"
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
