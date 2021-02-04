# Number Events

Bandwidth uses HTTP Callbacks (also known as [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage)) to send these events to any publicly addressable url.

### Order Notification Callbacks

This Callback API will be used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Numbers API on their behalf. In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it.

In order to recieve notifications, you must first create a [subscription](../../account/subscriptions/about.md).

If the customer's endpoint is unavailable, the Bandwidth Dashboard API callback service will not retry the order notification callback.

### Portout Validation Callbacks

This Callback API will be used with select pre-qualified customers to confirm the validity of a port-out request when it is submitted by the winning carrier. The API call will define the end user owner of the Telephone Number in terms of FCC-approved information to aid in assessing the validity of the request

Please contact [support](https://support.bandwidth.com) to enable Portout Validation.

If the customer's endpoint is unavailable, the Bandwidth Dashboard API callback service will retry the portout validation callback to the customer's endpoint 8 times over a period of 40 minutes.

## Callbacks

| Event                                                | Description                                                                                                                                                                                  |
|:-----------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Order Notification Callbacks](orderNotification.md) | Bandwidth sends this event for each **status** update as defined by the [subscription](../../account/subscriptions/about.md)                                                                     |
| [Event Notification Callbacks](eventNotification.md) | Bandwidth sends this event for each **event** update as defined by the [subscription](../../account/subscriptions/about.md)
| [Portout Validation Callbacks](portoutValidation.md) | Bandwidth sends this event when a Portout request is initiated on a Bandwidth number in your account. Please contact [support](https://support.bandwidth.com) to enable Portout Validation. |
