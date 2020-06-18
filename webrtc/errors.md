# Errors

Errors are based on the [Voice API Errors](../voice/errors.md) and the [Messaging API Errors](../messaging/errors/about.md).

## Error Responses

As of the current version, all responses from MFA will result in a HTTP 200, with a body message stating any errors. This will be changing with the next release, to use the appropriate HTTP response codes.

### Example

```
{
    "result": "Invalid request - contact service manager"
}
```
