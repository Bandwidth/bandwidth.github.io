# Bandwidth Callbacks

## Bandwidth Callbacks Overview

Bandwidth's APIs operate on a system of callbacks. Most API requests send callbacks, and notices of incoming events (phone call, text message) are sent via callbacks as well.

## How To Utilize Callbacks
In order to utilize callbacks, you must run a server with a URL that is expecting to receive callbacks from Bandwidth. This URL must be provided to Bandwidth through your Bandwidth application settings, or as part of your API request. For voice callbacks, this endpoint must return valid BXML for Bandwidth to use. More information on Bandwidth applications can be found on our [applications page](../../applications/about.md).

Callback URLs can (and ideally should) be password protected. To allow Bandwidth to access these URLs, applications in the Bandwidth Dashboard can be configured with a username and password used to authenticate on your callback URL.

If you need static IPs for your callbacks, feel free to open up a ticket on our [support site](https://support.bandwidth.com/hc/en-us/requests/new).

## Specific Callback Information For Bandwidth's APIs

### Voice Callbacks

Voice callbacks come in 2 ways. Information on these callback methods can be found by clicking the links below
* [Async callbacks](../../voice/bxml/asyncCallbacks.md)
* [BXML callbacks](../../voice/bxml/bxmlCallbacks.md)

Bandwidth expects to receive valid [BXML](../../voice/bxml/bxml.md) as a response for BXML callbacks. Bandwidth does not expect a response for async callbacks.

### Messaging Callbacks

Specifics for messaging callbacks can be found on our [messaging callbacks page](../../messaging/events/messageEvents.md)

<br>
