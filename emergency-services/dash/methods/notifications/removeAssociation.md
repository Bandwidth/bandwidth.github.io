{% method %}

## Remove Emergency Notification Recipient Endpoint Association

Endpoint to remove an emergency notification recipient associated with an endpoint (telephone number). There is no request body for this operation, the association modifications are determined by the ID's passed into the URL string. The response body shows all currently associated recipients after the operation is completed.

### Request URL

<code class="delete">DELETE</code>`https://evs-api.bandwidth.com/api/v1/notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}`

{% common %}

{% sample lang='http' %}

```http
DELETE https://evs-api.bandwidth.com/api/v1/notifications/endpoints/{endpointId}/notificationRecipients/{recipientId} HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```
> The above command returns a JSON Response structured like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "notificationRecipients": [
        {
            "recipientId": "13091",
            "type": "SMS",
            "recipient": "13033333094",
            "created": "2020-12-09T21:04:10.403Z",
            "updated": "2020-12-09T21:04:10.403Z"
        },
        {
            "recipientId": "123456",
            "type": "HTTP",
            "recipient": "https://example",
            "username": "Test",
            "created": "2020-03-27T21:47:32.422Z",
            "updated": "2020-08-05T22:49:04.962Z"
        }
    ]
}
```

{% endmethod %}
