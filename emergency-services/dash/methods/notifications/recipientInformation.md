{% method %}

## Retrieve Emergency Notification Recipient

Endpoint to retrieve information pertaining to a single emergency notification recipient

### Request URL

<code class="get">GET</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId}`

{% common %}

{% sample lang='http' %}

```http
GET https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId} HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```
> The above command returns a JSON Response structured like this:

```http
Status: 200 OK
Content-Type: application/json; charset=utf-8

{
    "recipientId": "notificationId",
    "type" : "EMAIL",
    "recipient" : "test@bandwidth.com",
    "created" : "2019-05-03T20:55:04.085Z",
    "updated" : "2019-05-03T20:55:04.085Z"
}
```

{% endmethod %}
