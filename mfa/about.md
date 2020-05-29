# Bandwidth MFA API

## Base API URL
`https://mfa.bandwidth.com/api/v1/accounts/{accountId}`

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
