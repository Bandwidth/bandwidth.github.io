{% method %}

## Update Emergency Notification Recipient

Endpoint to update information pertaining to a single emergency notification recipient

### Request URL

<code class="patch">PATCH</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId}`

### Supported Paramaters
| Paramater   | Mandatory                 | Type    | Description                                                                            |
|:------------|:--------------------------|:--------|:---------------------------------------------------------------------------------------|
| type        | No                        | string  | Type of notification to be sent. Valid values are `EMAIL`, `SMS`, `VOICE`, and `HTTP`. |
| recipient   | Yes - If type is modified | string  | The intended recipient of the emergency notification. Format must match type.          |
| recipientId | No                        | string  | Unique ID of the notification recipient. Will be created for you if not provided.      |

{% common %}

<!--{% sample lang='http' %}-->

```http
PATCH https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId} HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: application/json; charset=utf-8

{
    "recipient": "someones_email@example.com"
}
```
> The above command returns a JSON Response structured like this:

```http
Status: 200 OK
Content-Type: application/json; charset=utf-8

{
    "recipientId": "notificationId",
    "type" : "EMAIL",
    "recipient" : "someones_email@example.com",
    "created" : "2019-05-03T20:55:04.085Z",
    "updated" : "2020-11-24T10:26:42.045Z"
}
```

{% endmethod %}
