# Two-Factor Authentication Callbacks
Two-Factor Authentication (2FA) Callbacks (also known as [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage)) rely on DLRs (Delivery Receipts) sent to the Two-Factor Authentication (2FA) platform by both Bandwidth's North America and International platform. Since these two platforms send different DLR formats, the 2FA platform standardizes them into a singular format for simplicity and ease of consumption. The 2FA platform then takes these standardized DLRs and sends them via an HTTP POST to the specified URL that was set in the `callbackUrl` field in the [initial request](../methods/code/messaging.md). The `callbackUrl` field can be any publicly addressable url.

## Message Callbacks Concepts
- Both North America and International callbacks have the same fields and have the same format. However, some of these fields differ in values to denote between the two systems.
- North America callbacks are retried for 24 hours if the 2FA platform is unable to deliver it to you.
- International callbacks are not retried if the 2FA platform is unable to deliver it to you after the initial delivery attempt.

## North America Callbacks
- The 2FA platform considers any message that is sent to a phone number with the country code `+1` to be North America.
- The type of North America callbacks are as follows:
  - [message-delivered](./northAmerica/messageDelivered.md) - Message has been delivered to the carrier.
  - [message-failed](./northAmerica/messageFailed.md) - Message failed to deliver.

## International Callbacks
- The 2FA platform considers any message that is sent to a phone number that does not have the country code `+1` to be international.
- The type of international callbacks are as follows:
  - [message-delivered](./international/messageDelivered.md) - Message has been delivered to the carrier.
  - [message-failed](./international/messageFailed.md) - Message failed to deliver.

## Two-Factor Authentication Provisioning
When Two-Factor Authentication is enabled on your account, the 2FA platform generates a separate Application in the Bandwidth Dashboard specifically for 2FA. As part of this application, there is a field present called `Callback URL` that is auto-populated with the default Callback URL for 2FA. Having this default endpoint ensures proper logging of requests to the platform for better serviceability, as well as simplifies the sending of different types of DLRs from messaging. The 2FA platform proxies all callbacks to the destination of your choice using the value in the `callbackUrl` field.

See the below image as an example of the Callback URL from the Bandwidth Dashboard.<br>
<br>
![Callback URL example image](../../images/mfa-callbackUrlExample.png)
<br>
*Note: The path parameter `yourAccountId` is replaced with your overall Bandwidth Account ID during provisioning.*
<br>
<br>
If you change the value in the Bandwidth Dashboard in the `Callback URL` field to something other than the default 2FA Callback URL, you will not get the standardized messages for North America callbacks nor get logging/monitoring support from the 2FA platform. International callbacks will also stop forwarding to your platform but will still log to the 2FA platform.
<br>