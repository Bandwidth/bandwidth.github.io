# Bandwidth Callbacks

## Bandwidth Callbacks Overview

Bandwidth's APIs operate on a system of callbacks. Most API requests send callbacks, and notices of incoming events (phone call, text message) are sent via callbacks as well.

## How To Utilize Callbacks
In order to utilize callbacks, you must run a server with a URL that is expecting to receive callbacks from Bandwidth. This URL must be provided to Bandwidth through your Bandwidth application settings, or as part of your API request. For voice callbacks, this endpoint must return valid BXML for Bandwidth to use. More information on Bandwidth applications can be found [on our applications page](../../applications/about.md).

Callback URLs can (and ideally should) be password protected. To allow Bandwidth to access these URLs, the callback URL must be defined to follow the format `https://{username}:{password}@yourdomain.com/`.

If you need static IPs for your callbacks, feel free to open up a ticket [on our support site](https://support.bandwidth.com/hc/en-us/requests/new).

## Specific Callback Information For Bandwidth's APIs

### Voice Callbacks

Specifics for voice callbacks can be found [on our BXML callbacks page](../../voice/bxml/bxmlCallbacks.md)

### Messaging Callbacks

Specifics for messaging callbacks can be found [on our messaging callbacks page](../../messaging/events/messageEvents.md)
