# Bandwidth Messaging API

## Messaging Overview

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Messaging API Overview](methods/about.md)   | Learn how to format and send messages                                                                                           |
| [Message Events/Callbacks](callbacks/messageEvents.md) | Learn about the different HTTP Callbacks Bandwidth will send to the URL configured in your [application](../applications/about.md) |
| [Message Error Codes](errors/codes.md)                     | Learn about the different error codes associated with a [message failure event](errors/codes.md)                        |

## Messaging Media Overview

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Messaging Media API Overview](methods/media/about.md)   | Learn how to upload, retrieve, delete and list media

There are a few concepts that are important to understand how Bandwidth's new messaging API functions:

* [Message Storage](#manage-storage)
* [Message Callbacks](#message-callbacks)
* [Message Creation](#message-creation)
* [Segment Counts](#segment-counts)
* [MMS and Group Message Delivery Receipts](#mms-dlr)
* [Group Message Invalid Number Behavior](#group-message-invalid)

## Message Storage IE `GET /messages` {#manage-storage}

Bandwidth Messaging does not keep _any_ records to fetch later.  If you need to keep track of delivered, error-ed, received messages after you receive the corresponding callback event, you **MUST** store the events in the data-store of your choice.

Once we have successfully delivered the callback event and receive an `HTTP 2xx` response, Bandwidth can no longer provide any detail about that message.

## Message Callbacks {#message-callbacks}

As the messaging API **does not** offer message storage or detailed messaging records, Bandwidth will attempt to deliver _every_ callback until your server replies with a `HTTP 2xx` status code.  If the callback request times out, or your server returns a code less than `HTTP 2xx` or greater than `HTTP 3xx` Bandwidth will try to deliver the callback multiple times over the next 24 hours.

After 24 hours, if your server has not returned a `HTTP 2xx` code, Bandwidth will no longer try to send the callback.

## Message Creation/Acceptance (`HTTP 201` vs `HTTP 202`) {#message-creation}

The messaging 2.0 API works off of an internal queuing system.  As such, when you <code class="post">POST</code> to the `v2/.../messages` to create a new message, Bandwidth will reply with an `HTTP 202 - Accepted`.  This indicates that the message has been placed on the queue

As the message progresses through the internal system you will receive a  a [Message Delivered](callbacks/msgDelivered.md) callback when the message has been handed off to the downstream carrier.

If at any-point through the process the message fails, you will receive a detailed [Message Failed](callbacks/messageFailed.md) callback with an error code describing the reason for failure.

## Message Segment Counts {#segment-counts}

This indicates the number of segments the original message from the user is broken into before sending over to carrier networks. Segmentation of messages depends on the size and encoding. Bandwidth will segment the message if the character count is over the below limits:

* 160 for GSM-7
* 70 for UCS-2
* For MMS messages the segment count will always be set to 1.

The value `segmentCount` is returned in the callback events and the response when creating the message.

## MMS and Group Message Delivery Receipts {#mms-dlr}

MMS and Group messages **don’t** currently support delivery receipts. However, you will still receive a message delivered event when the message is sent. For _only MMS and Group Messages_ this means that your message has been handed off to the Bandwidth core network, but has not been confirmed at the downstream carrier. We are actively working to support true delivery receipts for the v2 Messaging API.

## Invalid Phone Numbers and Group Messaging Behavior {#group-message-invalid}

#### Current Behavior

You will receive the `message-failed` event for the invalid number, but then you get the `message-delivered` event for _each_ of the `to` numbers including the ones for which you _already_ got `message-failed` with the `invalid-to-number`] code. So you would get both a failed **and** a success callback for the invalid ones, and just the success one for the success ones.

#### Correct Behavior

You will exactly one callback per `to` number. The ones that are invalid are `message-failed` with an error code that means `invalid-to-number`, and the ones that are valid will receive the `message-delivered` event.
