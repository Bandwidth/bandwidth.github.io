{% method %}
  
## Get Messages
 
Note: This endpoint is in limited availability and is still in development. Changes should be expected.

### Request URL

<code class="post">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/messages`

#### Basic Authentication

Authentication on this endpoint is <b>NOT</b> done via API token and secret. Instead, your Dashboard API credentials should be used for basic auth.

### Query Parameters

| Parameter | Type | Description | Examples |
|:--|:--|:--|:--|
| messageId | string | The ID of the message to search for. Special characters need to be encoded using URL encoding | `15874gcjxgggk`, `158748gcj5fe762%2B12345` |
| sourceTn | string | The phone number that sent the message | `+15554443333` |
| destinationTn | string | The phone number that received the message | `+15554443333` |
| messageStatus | string | The status of the message. One of `RECEIVED`, `QUEUED`, `SENDING`, `SENT`, `FAILED`, `DELIVERED` | `RECEIVED` |
| errorCode | integer | The error code of the message | `9902` |
| fromDateTime | string | The start of the date range to search in ISO 8601 format | `2016-09-14T18:20:16.000Z` |
| toDateTime | string | The end of the date range to search in ISO 8601 format | `2016-09-14T18:20:16.000Z` |
| before | integer | The index to start the search | `0` |
| after | integer | The index to end the search | `100` |
| limit | integer | The maximum number of messages to return. Must be betwee `1` and `10000`. Default `100` <br> The sum of limit and after cannot be more than 10000 | `100` |

### Response Parameters

| Parameter | Type | Description |
|:--|:--|
| totalCount | integer | Total number of messages matched by the search |
| messages | array | The messages returned |
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

{% endmethod %}
