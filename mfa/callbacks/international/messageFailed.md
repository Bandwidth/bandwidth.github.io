{% method %}
# International - Message Failed
When sending to Two-Factor Authentication's (2FA) International platform, you will receive a `message-failed` delivery receipt (DLR) upon unsuccessful delivery to the carrier.

### Parameters
| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Callback type. For message failed, this is set to `message-failed`.                                                                                                                                                                                                                                                                                                                                                    |
| time                  | `string`  | The time of the event described in the receipt.                                                                                                                                                                                                                                                                                                                      |
| description           | `string` | A detailed description of the event described by the receipt. Descriptions for failed messages are not always guaranteed, and can sometimes be populated with values such as `No error` even though a message has failed to send.                                                                                                                                                                                                                                                                                                        |
| platform           | `string` | A field that indicates whether the message DLR was from the 2FA North America or International platform. For International, this is set to `GlobalSMS`.                                                                                                                                                                                                                                                                                             |
| message           | `Object` | An object that represents information about the message sent.                                                                                                                                                                                                                                                                                             |
| message.id            | `string` | The unique ID of this message.                                                                                                                                                                                                                                                                                           |
| errorCode           | `integer` | The error code associated with the failure. For any questions regarding error codes in response to International Messaging, contact support.                                                                                                                                                                                                                                     |

{% common %}

### Example 1 of 1: SMS Message failed

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "type"          : "message-failed",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Undeliverable",
    "platform"      : "GlobalSMS",
    "message"       : {
        "id"            : "14762070468292kw2fuqty55yp2b2",
    },
    "errorCode": 995
}
```

{% endmethod %}
