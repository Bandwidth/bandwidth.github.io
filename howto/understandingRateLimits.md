# Understanding Messaging Rate Limits {#top}

## About {#about}

This guide will walk through the recommended approach to managing queues and rate limits for use with the Messaging API. Over the past years mobile telecom operators have begun to block what is deemed automated traffic (A2P) sent over standard local telephone numbers IE: (919)-430-5555.  The amount of messages sent in this way have increased due to spreading automated traffic (A2P) across multiple local telephone numbers to bypass volumetric filters.  This process is called "snowshoeing" (⚠️ **NOTE TO BANDWIDTH, PLEASE PROVIDE AN OFFICIAL LINK ABOUT SNOWSHOEING**) and as a result, the mobile operators are not only blocking volumetrically, but are also finger-printing content and preemptively blocking messages even from a "fresh" phone number.

## Assumptions
* You have signed up for the [Bandwidth Messaging API](https://app.bandwidth.com/)
* You are familiar with:
  * [2017 CTIA Best Practices](https://api.ctia.org/docs/default-source/default-document-library/170119-ctia-messaging-principles-and-best-practices.pdf)
  * [Your API Credentials](../security.md)
  * [Sending SMS & MMS](sendSMSMMS.md)
  * [Receiving HTTP Callbacks/Webhooks](smsDLR.md)

## Overview

* [How Bandwidth Helps](#how-bandwidth-helps)
    * [A2P Best Practices](#a2p-best-practices)
* [Default Messaging Rate Limits and Queues](#default-rate-limit)
    * [Message queue](#message-queue)
* [Managing Messages](#managing-messages)
    * [Back-off and Retry](#backoff-and-retry)
    * [Throttling](#throttle)
    * [Queue Management](#queue-management)


## How Bandwidth Helps {#how-bandwidth-helps}

In response to the ever changing (& unregulated) landscape of telecommunications and text messaging, Bandwidth has implemented a new rate-limit process and look-ahead Spam filtering service to help our customers ensure deliver-ability of their messages.

We have broken up our messaging classifications into two categories:

| Category                                  | About                                                                                                                                                                                                                       | Attributes                                                                                                                                                                      | Common Use-cases                                                                                              |
|:------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| **P2P** - Conversational Person to Person | Person-to-Person (P2P) generally describes the low-volume exchange of wireless messages between end users... the concept of consistent with typical human operation defines P2P traffic to distinguish P2P from A2P traffic | **Per Number** <br> - 15-60 messages/minute <br> - 1,000-2,000 messages/day <br> - ~200 unique recipients <br> - Close to 1:1 inbound messages to outbound messages             | - Support over SMS <br> - Chat Bots <br> - Over-the-top (OTT) tel-co application <br> - Private Phone Numbers |
| **A2P** - Automated message to Person     | A2P traffic is **all** messaging that falls outside the definition of P2P (i.e., **traffic that is not consistent with typical human operation)**                                                                           | **Per Number** <br> - Bounded only by account permissions <br> - Sent with a [toll-free phone number]() <br> - Typically much higher ratio of outbound messages vs inbound <br> | - Appointment Reminders <br> - Shipping & Order Alerts <br> - Outbound Mass Communications                    |

### Look-ahead Spam filtering

Bandwidth uses the same [Adaptive](https://www.adaptivemobile.com/) network protection technology as the mobile telco operators.  This allows us to screen messages before they're sent to the downstream carrier.  By checking before Bandwidth passes the message along, we're able to work with you to understand and fix any potential issues with the message.  This maintains your telephone number deliverability reputation and helps build predictable traffic patterns.  If the message is marked as Spam we will send a notification to the `callbackUrl` specified in the [create message](smsDLR.md) request.

### Toll-Free A2P Best Practices {#a2p-best-practices}

| Principle                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-----------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Consent** <br> The consumer must give appropriate consent                                                | The single most important practice is ensuring you have accurate, reliable consumer opt-in specific to the type of messages you are sending consumers.  It is expected that opt-out rates are consistently low when you have obtained reliable and clear consumer opt-in consent.  At anytime, Bandwidth or wireless carriers may request from you evidence of written opt-in consent for a particular message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Single Number Use** <br> Utilize single number for identity                                              | Each campaign should use one primary phone number. Using a single number for both text and voice calls is recommended.  Avoid using spreading messages across many source phone numbers, specifically to dilute reputation metrics and evade filters.  This is referred to as “snowshoeing” and can result in your content being blocked.   If your messaging use case requires the use of multiple numbers to distribute “similar” or “like” content, please discuss with your onboarding team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Identify Brand** <br> Identify the brand or business in the body of the message                          | Your application, service or business name should be included in the content of the body. <br><br> For example: “Your Business Name: You have an appointment for Tuesday 3:00PM, reply YES to confirm, NO to reschedule.  Reply STOP to unsubscribe”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Opt-In Confirmation**                                                                                    | Upon successful opt-in by a mobile subscriber, an opt-in confirmation message will immediately be sent to the mobile subscriber number.   Per CTIA guidelines - a single opt-in confirmation message displaying information verifying the customer’s enrollment in the identified program and describing how to opt out.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Support for STOP** <br> Use of Opt-Out language                                                          | The best practice is notifying the consumer of their ability to opt-out from future messages from the message sender. This is especially important when sending informational or promotional messages.<br><br> An example would be to include the sentence, “Reply STOP to unsubscribe” to the end of the initial message sent to the consumer, or “reply STOP to cancel”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Processing STOP Keywords** <br> Ensuring proper functioning of Opt-Out behavior - STOP keywords          | Consumer opt-in and opt-out functionality is enforced at the network level via the STOP and UNSTOP keywords. This functionality cannot be disabled for service providers or message senders. <br> <br> Message senders have obligations to process the opted-out consumer phone number so it is removed from all distribution lists and be logged as “opted out” from SMS communications. This ensures that future messages are not attempted and consumer consent is honored.<br> <br> Examples of valid opt-out messages:  “STOP” “Stop” “stop” “STop”<br> <br> For Toll Free SMS, there is no need to send an acknowledgement to the consumer.  The opt-out confirmation message returned to a consumer is generic and gives instructions on how to opt back into service again with the message sender’s phone number. Opt-out confirmation message:<br> <br> **NETWORK MSG: You replied with the word "STOP" which blocks all texts sent from this number. Text back "UNSTOP" to receive messages again**. |
| **UNSTOP** <br> **[Only for Toll Free A2P]** <br> Processing Opt-In Keywords specific to Toll Free Texting | A consumer can opt back in at any time to receive messages by texting the keyword “UNSTOP” to a message sender’s phone number. The keyword is not case sensitive and triggers an opt-in only when sent as a single word, with no punctuation or leading spaces (any trailing spaces are trimmed). If the consumer uses the opt-in keyword within a sentence an opt-in is not triggered.<br> <br> Examples of valid opt-ins: “UNSTOP”  “Unstop”  “unstop”  “UNStop”<br> <br> The message returned to a consumer is generic and informs the consumer they can start two-way texting with the message sender’s phone number again.<br> <br> **NETWORK MSG: You have replied "unstop" and will begin receiving messages again from this number.**                                                                                                                                                                                                                                                                   |
| **Single Domain** - Associate URL                                                                          | Each campaign should be associated with a single web domain owned by customer. Although a full domain is preferred, a URL shortener may be used to deliver custom links.  Avoid public / shared domain shorteners: <br> - bit.ly <br> - goo.gl <br> - tinyurl.com <br> - Tiny.cc <br> - lc.chat <br> - is.gd <br> - soo.gd <br> - s2r.co <br> - Clicky.me <br> - budurl.com <br> - bc.vc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |



## Default Messaging Rate Limits and Queues {#default-rate-limit}

All Bandwidth messaging products are rate limited in some fashion.  There are various different rate limits within the system:


| Scope          | Rate Limit              | Description                                                                                                                                                                                                  | Default                                                                                                                                                         |
|:---------------|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Account**    | Outbound _dequeue_ rate | The rate that Bandwidth will send your messages to the downstream carriers across your entire account.                                                                                                       | 1 MPS                                                                                                                                                           |
| **Per-Number** | Outbound _dequeue_ rate | The rate that Bandwidth will send your messages from a **single phone number** to the downstream carriers                                                                                                    | P2P - 1 MPS <br> A2P - ∞, up to account limit                                                                                                                   |
| **Account**    | Inbound _API_ rate      | The rate that Bandwidth's API will accept new messages requests.                                                                                                                                             | 1 MPS                                                                                                                                                           |
| **Per-Number** | Inbound _API_ rate      | The rate that Bandwidth's API will accept new messages requests from the same phone number                                                                                                                   | P2P - 1 MPS <br> A2P - ∞, up to account limit                                                                                                                   |
| **Account**    | Burst _API_ rate        | The burst rate that Bandwidht's API will accept new messages.  Essentially how quickly can the queue be filled. <br> <br> ⚠️ If queuing is **not** enabled, this will be same as the  **Inbound _API_ rate** | 1 MPS <br> -or- <br> **Account** Outbound _dequeue_ rate + 10 <br><br> Example: **Account** Outbound _dequeue_ rate is 5 MPS, the **Burst** rate will be 15 MPS |


### Enabling Queuing
By default Bandwidth **does not queue** messages internally to be sent out.  Once contracted, Bandwidth can enable a 15 minute queue across the entire account.  The number of messages in the queue will depend on your **account wide _dequeue_ rate**.  It's important to note that the 15 minute queue is across the entire account, and **not** per phone number.

#### Example: Calculating Queue Depth
An account has an **Outbound _dequeue_ rate** of 5MPS and has enabled the 15 minute queue (900 second).

{% math %} {5\,Messages \over Seconds} \times 900\,Seconds = 4,500\,Messages {% endmath %}

#### Example: Calculating Queue Fill Time
An account has an **Outbound _dequeue_ rate** of 5 MPS, a **Burst _API_ rate** of 15 MPS and has enabled the 15 minute queue (900 second).

{% math %} \frac{\frac{5\,Messages}{Second}\times 900\,Seconds}{\frac{15\,Messages}{Second}-\frac{5\,Messages}{Second}} = 450\,Seconds {% endmath %}

<img src="../images/bucket_fill.png" alt="bucketfill" style="width:50%;height:50%;">


## Managing Messages {#managing-messages}

| Method | Description | Use-cases |
|--|--|--|
| Back-off and Retry | Try to send messages as quickly as possible to Bandwidth. When you hit the rate limit, add a small delay and try again. If it fails, then add some more delay and try again | Works best for use-cases that need to send lots of messages with no priority:<br> - Day before appointment reminders <br> - Receipts <br> - Opted-in Promotions |
| Throttle | Only send messages to Bandwidth as quickly as your dequeue rates | Works best with any use case, but favors pure P2P |
| Queue Management | Utilizing a queue system such as [RabbitMQ](https://www.rabbitmq.com/) or [Mosquitto](https://mosquitto.org/) | Works best for use-cases that intermingle massive campaigns with realtime traffic.  Enables full control over message priority and time-to-live |


### Back-off and Retry {#backoff-and-retry}

Code Examples and more details

### Throttling {#throttle}

Code Examples and more details

### Queue Management {#queue-management}

Code Examples and more details

