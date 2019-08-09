# Rate Limits

The Bandwidth Voice API is currently rate limited tp 20 CPS and 300 active calls.
 
If a rate limit is hit when creating an outbound call the API will return a [`HTTP-429`](errors.md#http-429).  If a rate limit is hit during a `<Forward>`, the error will be sent in to the `disconnectUrl`.  If a rate limit is hit during a `<Transfer>`, the error will be sent to `transferCompleteUrl`.
