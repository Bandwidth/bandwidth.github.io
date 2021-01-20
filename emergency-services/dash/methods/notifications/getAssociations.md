{% method %}

## List Emergency Notification Recipient Endpoint Associations

Endpoint for listing your emergency notification recipients' endpoint associations

### Request URL

<code class="get">GET</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId}/associations`

### Supported Query Paramaters
| Paramater  | Mandatory | Type    | Description |
|:-----------|:----------|:--------|:------------|
| page       | No        | string  |  |
| size       | No        | integer |  |
| from       | No        | string  |  |

{% common %}

<!--{% sample lang='http' %}-->

```http
GET https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId}/associations HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```
> The above command returns a JSON Response structured like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "endpoints": [
        {
            "id": "14145556570",
            "callback": "14145556570",
            "name": "4035_TEST",
            "lang": "en",
            "primaryLocation": "locationId1",
            "activated": "2020-01-29T20:54:13.878Z",
            "created": "2020-01-29T20:54:13.878Z",
            "updated": "2020-01-29T20:54:13.878Z"
        },
        {
            "id": "14145556335",
            "callback": "14145556335",
            "name": "4035_TEST",
            "lang": "en",
            "primaryLocation": "locationId1",
            "activated": "2020-01-29T20:54:13.878Z",
            "created": "2020-01-29T20:54:13.907Z",
            "updated": "2020-01-29T20:54:13.907Z"
        }
    ]
}
```

{% endmethod %}
