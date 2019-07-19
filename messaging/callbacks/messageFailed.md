{% method %}
# Message Failed Event
In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

### Parameters
| Parameter             | Type      | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string`  | The Event type                                                                                                                                                                                                                                                                                                                                                      |
| time                  | `array`   | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                      |
| errorCode             | `integer` | The error code (if any). See the [error docs](../errors/codes.md) for a detailed list                                                                                                                                                                                                                                                                                      |
| description           | `string`  | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                        |
| to                    | `string`   | The destination number for an outbound message receipt                                                                                                                                                                                                                                                                                                        |
| message               | `string`  | Any string, it will be included in the callback events of the message.                                                                                                                                                                                                                                                                                              |
| message.id            | `string`  | The unique ID of this message                                                                                                                                                                                                                                                                                                                                       |
| message.owner         | `string`  | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to. |
| message.time          | `string`  | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                          |
| message.direction     | `string`  | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                      |
| message.to            | `array`   | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                  |
| message.from          | `string`  | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| message.text          | `string`  | The text content of the message                                                                                                                                                                                                                                                                                                                                     |
| message.applicationId | `string`  | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| message.media         | `array`   | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| message.tag           | `string`  | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| message.segmentCount  | `int`     | This indicates the number of segments the original message from the user is broken into before sending over to career networks                                                                                                                                                                                                                                      |

{% common %}
### Example Error (4432 - forbidden to country)

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-failed",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "forbidden to country",
    "to"            : "+52345678903",
    "errorCode"     : 4432,
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+52345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
        ],
      "owner"         : "+12345678901",
      "direction"     : "out",
      "segmentCount"  : 1
    }
  }
]
```

{% endmethod %}
