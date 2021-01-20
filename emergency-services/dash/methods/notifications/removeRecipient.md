{% method %}

## Remove Emergency Notification Recipient

Endpoint to remove an emergency notification recipient

### Request URL

<code class="delete">DELETE</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId}`

{% common %}

<!--{% sample lang='http' %}-->
```http
DELETE https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients/{recipientId} HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```
> The above command returns only an HTTP status code acknowledgement:

```http
Status: 204 No Content
```

{% endmethod %}
