# Release Notes - Acceptance Test 2

AT2 is a preview of the new Slingshot voice API.  It is intended to serve as a demonstration of the new API
and design choices we have made.  

## New features since AT1

### Scaling
Multiple FreeSWITCH and API servers can be used for scaling and redundancy.  Over 12,000 active calls and a 100 CPS
rate has been confirmed in the lab.  Switches can be dynamically replaced and discovered.  Each switch can target
multiple SBCs to deliver outgoing calls.

### CallComplete event
A separate event is fired when the call is terminated for any reason.  This event is asynchronously delivered via a
queue.

## Breaking changes from AT1

### HTTPS
The URL is now https://voice.bandwidth.com

### Authentication required
You must use basic auth for all requests.  Use `slinger` for the username.  Check `#slingshot-preview` for the password.

### Must use account ID 1
This is the only account that the aforementioned `slinger` user has access to.  Other account IDs will return an
HTTP 403.

### Numerous property and event renames
Many events have been renamed.  The URL and method properties referencing these events have been renamed to match.

## Missing Features
This release still has number of things are not implemented, including:

### Inbound calls
AT2 only supports outgoing calls.

### SIP calling
AT2 only supports calls to telephone numbers.  All calls are routed through the Bandwidth core network.

### Call Access Control
From addresses are not checked.

### Rate Limiting
Neither API nor phone call rates are limited in this release.

### Error logs
User-visible error logging is not implemented.  If you get stuck, ask the Slingshot team for help.  We can access
system logs in Sumo.

## Feedback
Please provide feedback on any bugs, things you don't like, or things you do via the `#slingshot-preview` Slack channel (preferred) or email to `slingshot@bandwidth.com`.
