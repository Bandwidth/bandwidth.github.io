# Rate Limits

Rate limits for the Voice API are set by account by your customer account manager.  By default, rate limits are set to 3 CPS and 30 active sessions.
 
If a rate limit is hit when creating an outbound call the API will return a [`HTTP-429`](errors.md#http-429).  If a rate limit is hit during a `<Forward>`, the error will be sent in to the `disconnectUrl`.  If a rate limit is hit during a `<Transfer>`, the error will be sent to `transferCompleteUrl`.  There are no notifications when inbound calls are rejected due to rate limts.
