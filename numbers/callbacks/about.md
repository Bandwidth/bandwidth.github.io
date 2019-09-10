# Number Events

Bandwidth uses HTTP Callbacks (also known as [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage)) to send these events to any publicly addressable url.

### Order Notification Callbacks

The Bandwidth numbers API can send order notifications as the phone number order, portin, import progresses through its lifecycle.  In order to recieve notifications, you must first create a [subscription](../../account/subscriptions/about.md).

### Portout Validation Callbacks

The port out validation API is used for portout management purposes and gives the losing side customer the possibility to validate the portout process. Please contact [support](https://support.bandwidth.com) to enable Portout Validation.

## Callbacks

| Event                                                | Description                                                                                                                                                                                  |
|:-----------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Order Notification Callbacks](orderNotification.md) | Bandwidth sends this event for each status update as defined by the [subscription](../../account/subscriptions/about.md)                                                                     |
| [Portout Validation Callbacks](portoutValidation.md) | Bandwidth sends this event when a Portout request is initiated on a Bandwidth number in your account. Please contact [support](https://support.bandwidth.com) to enable Portout Validation. |