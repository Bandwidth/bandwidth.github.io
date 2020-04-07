{% method %}
  
## Get Messages

### Request URL

<code class="post">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/messages`

#### Basic Authentication

Authentication on this endpoint is <b>NOT</b> done via API token and secret. Instead, your Dashboard API credentials should be used for basic auth.

### Query Parameters

| Parameter | Type | Description |
|:--|:--|:--|
| messageId | string | The ID of the message to search for |

### Response Parameters

| Parameter | Type | Description |
|:--|:--|
| totalCount | integer | Total number of messages returned in the search |
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
| messages.messageTime | string | The ISO 8601 datetime of the message |

{% common %}

### Example: Search by message ID

{% sample lang='http' %}

```http
GET https://messaging.bandwidth.com/api/v2/users/{accountId}/messages?messageId=qwer1234 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

> The above command returns a JSON Response structured like this:

```http
{
    "totalCount":1,
    "messages":[
        {
            "messageId":"qwer1234",
            "accountId":"12345",
            "sourceTn":"+15554443333",
            "destinationTn":"+15554442222",
            "messageStatus":"DELIVERED",
            "messageDirection":"OUTBOUND",
            "messageType":"sms",
            "segmentCount":1,
            "errorCode":0,
            "messageTime":"2020-04-07T14:03:07.000Z"
        }
    ]
}
```

{% endmethod %}
