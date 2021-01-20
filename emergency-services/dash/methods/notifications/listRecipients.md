{% method %}

## List Emergency Notification Recipients

Endpoint for listing your emergency notification recipients

### Request URL

<code class="get">GET</code>`https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients`

### Supported Query Paramaters
| Paramater  | Mandatory | Type    | Description                                                       |
|:-----------|:----------|:--------|:------------------------------------------------------------------|
| page       | No        | integer | Results page. Default value is 1                                  |
| size       | No        | integer | Number of records returned. Default value is 5,000. Max is 10,000 |
| from       | No        | integer | Record number to start results from                               |
| endpointId | No        | string  | Unique EndpointId value to filter Response                        |

{% common %}

<!--{% sample lang='http' %}-->

```http
GET https://evs-api.bandwidth.com/api/v1/notifications/notificationRecipients HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```
> The above command returns a JSON Response structured like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json
X-total-count: 70
Link: <{url}>; rel="prev"
Link: <{url}>; rel="next"

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
              "recipient": "https://example.com",
              "username": "Test",
              "created": "2020-03-27T21:47:32.422Z",
              "updated": "2020-08-05T22:49:04.962Z"
          },
          {
              "recipientId": "1602424319759",
              "type": "VOICE",
              "recipient": "14145342177",
              "created": "2020-09-29T22:16:10.581Z",
              "updated": "2020-09-29T22:16:11.890Z"
          },
          {
              "recipientId": "2514948375583",
              "type": "EMAIL",
              "recipient": "test@example.com",
              "created": "2019-10-22T21:37:14.747Z",
              "updated": "2019-10-22T21:37:14.747Z"
          }
    ]
}
```

{% endmethod %}
