# Two-Factor Authentication Callbacks
Two-Factor Authentication (2FA) Callbacks rely on DLRs (Delivery Receipts) sent to the Two-Factor Authentication platform by Bandwidth's Messaging platform. The Two-Factor Authentication platform then takes these DLRs and sends them to the specified URL that was set in the `callbackUrl` field in the [initial request](./methods/code/messaging.md).

Please read additional information regarding Bandwidth's Messaging Callbacks [here](../messaging/callbacks/messageEvents.md).

## Two-Factor Authentication Provisioning
When Two-Factor Authentication is enabled on your account, the Two-Factor Authentication platform generates a separate Application in the Bandwidth Dashboard specifically for 2FA. As part of this application, there is a field present called `Callback URL` that is auto-populated with the default Callback URL for 2FA. Having this default endpoint ensures proper logging of requests to the platform for better serviceability, as well as simplifies the sending of different types of DLRs from messaging. The Two-Factor Authentication platform proxies all callbacks to the destination of your choice using the value in the `callbackUrl` field.

See the below image as an example of the Callback URL from the Bandwidth Dashboard.<br>
<br>
![Callback URL example image](../images/mfa-callbackUrlExample.png)
<br>
*Note: The path parameter `yourAccountId` is replaced with your overall Bandwidth Account ID during provisioning.*

If you change the value in the Bandwidth Dashboard in the `Callback URL` field to something other than the default 2FA Callback URL, you will be responsible for all handling of callbacks from Messaging.
