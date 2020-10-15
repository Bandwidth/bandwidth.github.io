# Bandwidth MFA API

⚠️ Your account must be activated to use the MFA product. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

## Base API URL
`https://mfa.bandwidth.com/api/v1/accounts/{accountId}`

## Sample Applications
| App                                                                                                | Description                                            |
| :------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [2FA Sample](https://github.com/Bandwidth/examples/tree/master/python/2FA)                         | Simple 2FA integration to example login page |
| [2FA Smart Lock](https://www.bandwidth.com/blog/diy-two-factor-authentication-for-your-every-need/)| Integrating 2FA with a door lock |


## REST API Reference Index

| Resource                                     | Description                                                           |
|:---------------------------------------------|:----------------------------------------------------------------------|
| [`/code/voice`](methods/code/voice.md)           | Authenticate via voice |
| [`/code/messaging`](methods/code/messaging.md) | Authenticate via messaging |
| [`/code/verify`](methods/code/verify.md)           | Verify an authentication request |
                                                        |
## Error Codes
| Type                         | Description                                                           |
|:-----------------------------|:----------------------------------------------------------------------|
| [Rate Limits](rateLimits.md) | Every endpoint is rate limited                                        |
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API |

---
