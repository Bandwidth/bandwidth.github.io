# Bandwidth Messaging Error Handling

The Bandwidth Messaging API will report delivery outbound errors via [HTTP Callbacks](../callbacks/messageFailed.md) and message creation errors via the [HTTP Status Codes](./httpErrors.md)

| Type                           | Next Steps                                                                                                                                                                                    |
|:-------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Delivery Failure](./codes.md) | Look up the `errorCode` in the [table](./codes.md#error-codes) to determine cause of the failed delivery. Contact [support](https://support.bandwidth.com) if necessary or more information is needed |
| [HTTP Error](./httpErrors.md)  | Look up the received error code and adjust the HTTP request to Bandwidth accordingly                                                                                                          |
