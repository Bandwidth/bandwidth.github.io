{% method %}

## Create Emergency Notification Recipient

Endpoint for creating a new emergency notification recipients

### Request URL

<code class="post">POST</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients`

### Supported Paramaters
| Paramater   | Mandatory | Type    | Description                                                                            |
|:------------|:----------|:--------|:---------------------------------------------------------------------------------------|
| type        | Yes       | string  | Type of notification to be sent. Valid values are `EMAIL`, `SMS`, `VOICE`, and `HTTP`. |
| recipient   | Yes       | string  | The intended recipient of the emergency notification. Format must match type.          |
| recipientId | No        | string  | Unique ID of the notification recipient. Will be created for you if not provided.      |


{% common %}

<!--{% sample lang='http' %}-->

```http
POST https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: application/json; charset=utf-8

{
    "type" : "EMAIL",
    "recipient": "test@bandwidth.com"
}
```
> The above command returns a JSON Response structured like this:

```http
Status: 201 Created
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
