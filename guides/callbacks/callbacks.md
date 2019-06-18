# Bandwidth Callbacks

## Bandwidth Callbacks Overview

Bandwidth's APIs operate on a system of callbacks. Most API requests send callbacks, and notices of incoming events (phone call, text message) are sent via callbacks as well.

In order to utilize callbacks, you must run a server with a URL that is expecting to receive callbacks from Bandwidth. This URL must be provided to Bandwidth through your Bandwidth application settings, or as part of your API request. For voice callbacks, this endpoint must return valid BXML for Bandwidth to use.

Callback URLs can (and ideally should) be password protected. To allow Bandwidth to access these URLs, the callback URL must be defined to follow the format `https://{username}:{password}@yourdomain.com/`.

If you need static IPs for your callbacks, feel free to open up a ticket [here](https://support.bandwidth.com/hc/en-us/requests/new).

Information on callback specifics can be found below

## Voice Callbacks

Specifics for voice callbacks can be found [here](../../voice/bxml/bxmlCallbacks.md)

## Messaging Callbacks

Specifics for messaging callbacks can be found [here](../../messaging/events/messageEvents.md)
