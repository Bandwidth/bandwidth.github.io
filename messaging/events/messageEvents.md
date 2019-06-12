# Message Events

These events are specific to Bandwidth Messaging 2.0. Bandwidth uses HTTP Callbacks (also known as [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage)) to send these events to any publicly addressable url.

## Message Callbacks Concepts
* You **MUST** Reply with a `HTTP 2xx` status code for _every_ callback/delivery receipt.  Bandwidth will retry _every_ callback over the next 24 hours until a `HTTP 2xx` code is received for the callback.  After 24 hours, Bandwidth will no longer try to send the callback
* Because we guarantee "at least once delivery" of events, it is possible (but not common) to receive duplicate message events. Your server should be able to handle duplicates.

## Incoming Message Concepts
* For incoming messages sent to your numbers, a callback will also be received, notifying your [Application](../applications/about.md) of the incoming message. For group messages where you own multiple recipient phone numbers, you will receive a distinct event and `messageId` for each individual recipient.

## Outgoing Message Callbacks and Delivery Receipts Concepts
* Callbacks will be sent via an HTTP POST request to the Callback URL for the [Application](../applications/about.md) associated with the `applicationId` field sent with the [send message](../methods/sendMessages.md) payload
* You will get a callback for any event related to that message.
  * For example, you will get an HTTP callback when your message is delivered, or blocked. In addition, you will get an event for any kind of Delivery Receipt that the destination carrier sends back, regarding the delivery of your message.
* For each message sent, you **will** receive either (but not both) a [Message Delivered](msgDelivered.md) or [Message Failed](messageFailed.md) event.
* ⚠️ Important note about MMS and Group Messages. MMS and Group messages **don’t** currently support delivery receipts. However, you will still receive a message delivered event when the message is sent. For _only MMS and Group Messages_ this means that your message has been handed off to the Bandwidth core network, but has not been confirmed at the downstream carrier. We are actively working to support true delivery receipts for the v2 Messaging API.

| Event                                      | Direction | Description                                                                      |
|:-------------------------------------------|:----------|:---------------------------------------------------------------------------------|
| [Incoming Group Message](incomingGroup.md) | `in`      | Bandwidth sends this event for each incoming group message                       |
| [Incoming Text Message](incomingSingle.md) | `in`      | Bandwidth sends this event for each incoming text message                        |
| [Message Delivered](msgDelivered.md)       | `out`     | Bandwidth sends this event when the text is delivered to the downstream carrier. |
| [Message Failed](messageFailed.md)         | `out`     | Bandwidth sends this event when the message contains was unable to be delivered  |
