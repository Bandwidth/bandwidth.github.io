{% method %}
# Domestic - Message Delivered
When sending to Two-Factor Authentication's (2FA) Domestic platform, you will receive a `message-delivered` delivery receipt (DLR) upon successful delivery to the carrier. This does not ensure that a particular SMS message has been received by the end-user, or that the end-user has read the SMS message.

### Parameters
| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Callback type. For message delivered, this is set to `message-delivered`                                                                                                                                                                                                                                                                                                                                                    |
| time                  | `string`  | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                      |
| description           | `string` | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                        |
| platform           | `string` | A field that indicates whether the message DLR was from the 2FA Domestic or International platform. For Domestic, this is set to `NorthAmericaSMS`.                                                                                                                                                                                                                                                                                             |
| message           | `Object` | An object that represents information about the message sent.                                                                                                                                                                                                                                                                                             |
| message.id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                           |

{% common %}

### Example 1 of 1: SMS Message delivered

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8

{
    "type"          : "message-delivered",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "ok",
    "platform"      : "NorthAmericaSMS",
    "message"       : {
        "id"            : "14762070468292kw2fuqty55yp2b2",
    }
}
```

{% endmethod %}
