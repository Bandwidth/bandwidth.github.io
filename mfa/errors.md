# Errors

Errors are based on the [Voice API Errors](../voice/errors.md) and the [Messaging API Errors](../messaging/errors/about.md).

## Error Responses

All 4XX errors on the MFA API return a simple JSON object that contains a string with the description of the error. These errors should help users understand why the request made was invalid.

### Example

```
{
    "result": "Invalid request - contact service manager"
}
```
