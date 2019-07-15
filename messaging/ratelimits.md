# V2 Messaging Billing and MPS Guidelines {#top}

## About {#about}

This guide will walk through the recommended approach to managing queues and rate limits for use with the Messaging API. Over the past years mobile telecom operators have begun to block what is deemed automated traffic (**A2P**) sent over standard local telephone numbers IE: (919)-430-5555. The amount of messages sent in this way have increased due to spreading automated traffic (A2P) across multiple local telephone numbers to bypass volumetric filters. This process is called "snowshoeing" and as a result, the mobile operators are not only blocking volumetrically, but are also finger-printing content and preemptively blocking messages even from a "fresh" phone number.

## Overview

* [Billing information](#billing)
* [How Bandwidth Helps](#how-bandwidth-helps)
    * [A2P Best Practices](#a2p-best-practices)
* [Default Rate Limits](#default-rate-limit)
* [Managing Messages](#managing-messages)
    * [Back-off and Retry](#backoff-and-retry)
    * [Throttling](#throttle)
    * [Queue Management](#queue-management)


## Billing {#billing}
Sending SMS and single recipient MMS are billed and added to your MPS (message per second) limit. Sending group MMS is billed and added to your MPS limit **per recipient of the group MMS**.

Billing/pricing information can be found at [Bandwidth's home page](https://www.bandwidth.com/pricing/).

---

## How Bandwidth Helps {#how-bandwidth-helps}

In response to the ever changing (& unregulated) landscape of telecommunications and text messaging, Bandwidth has implemented a new rate-limit process and look-ahead Spam filtering service to help our customers ensure deliver-ability of their messages.

We have broken up our messaging classifications into two categories:

| Category                                  | About                                                                                                                                                                                                                       | Attributes                                                                                                                                                                      | Common Use-cases                                                                                              |
|:------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| **P2P** - Conversational Person to Person | Person-to-Person (P2P) generally describes the low-volume exchange of wireless messages between end users... the concept of consistent with typical human operation defines P2P traffic to distinguish P2P from A2P traffic | **Per Number** <br> - 15-60 messages/minute <br> - 1,000-2,000 messages/day <br> - ~200 unique recipients <br> - Close to 1:1 inbound messages to outbound messages             | - Support over SMS <br> - Chat Bots <br> - Over-the-top (OTT) tel-co application <br> - Private Phone Numbers |
| **A2P** - Automated message to Person     | A2P traffic is **all** messaging that falls outside the definition of P2P (i.e., **traffic that is not consistent with typical human operation)**                                                                           | **Per Number** <br> - Bounded only by account permissions <br> - Sent with a **toll-free phone number** <br> - Typically much higher ratio of outbound messages vs inbound <br> | - Appointment Reminders <br> - Shipping & Order Alerts <br> - Outbound Mass Communications                    |

### Look-ahead Spam filtering

Bandwidth uses the same [Adaptive](https://www.adaptivemobile.com/) network protection technology as the mobile telco operators. This allows us to screen messages before they're sent to the downstream carrier. By checking before Bandwidth passes the message along, we're able to work with you to understand and fix any potential issues with the message. This maintains your telephone number deliverability reputation and helps build predictable traffic patterns. If the message is marked as Spam we will send a notification to the `application` specified in the [create message](./methods/messages/createMessage.md) request.

### Toll-Free A2P Best Practices {#a2p-best-practices}

| Principle                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-----------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Consent** <br> The consumer must give appropriate consent                                                | The single most important practice is ensuring you have accurate, reliable consumer opt-in specific to the type of messages you are sending consumers.  It is expected that opt-out rates are consistently low when you have obtained reliable and clear consumer opt-in consent.  At anytime, Bandwidth or wireless carriers may request from you evidence of written opt-in consent for a particular message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Single Number Use** <br> Utilize single number for identity                                              | Each campaign should use one primary phone number. Using a single number for both text and voice calls is recommended.  Avoid using spreading messages across many source phone numbers, specifically to dilute reputation metrics and evade filters.  This is referred to as “snowshoeing” and can result in your content being blocked.   If your messaging use case requires the use of multiple numbers to distribute “similar” or “like” content, please discuss with your onboarding team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Identify Brand** <br> Identify the brand or business in the body of the message                          | Your application, service or business name should be included in the content of the body. <br><br> For example: “Your Business Name: You have an appointment for Tuesday 3:00PM, reply YES to confirm, NO to reschedule.  Reply STOP to unsubscribe”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Opt-In Confirmation**                                                                                    | Upon successful opt-in by a mobile subscriber, an opt-in confirmation message will immediately be sent to the mobile subscriber number.   Per CTIA guidelines - a single opt-in confirmation message displaying information verifying the customer’s enrollment in the identified program and describing how to opt out.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Support for STOP** <br> Use of Opt-Out language                                                          | The best practice is notifying the consumer of their ability to opt-out from future messages from the message sender. This is especially important when sending informational or promotional messages.<br><br> An example would be to include the sentence, “Reply STOP to unsubscribe” to the end of the initial message sent to the consumer, or “reply STOP to cancel”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Processing STOP Keywords** <br> Ensuring proper functioning of Opt-Out behavior - STOP keywords          | Consumer opt-in and opt-out functionality is enforced at the network level via the STOP and UNSTOP keywords. This functionality cannot be disabled for service providers or message senders. <br> <br> Message senders have obligations to process the opted-out consumer phone number so it is removed from all distribution lists and be logged as “opted out” from SMS communications. This ensures that future messages are not attempted and consumer consent is honored.<br> <br> Examples of valid opt-out messages:  “STOP” “Stop” “stop” “STop”<br> <br> For Toll Free SMS, there is no need to send an acknowledgment to the consumer.  The opt-out confirmation message returned to a consumer is generic and gives instructions on how to opt back into service again with the message sender’s phone number. Opt-out confirmation message:<br> <br> **NETWORK MSG: You replied with the word "STOP" which blocks all texts sent from this number. Text back "UNSTOP" to receive messages again**. |
| **UNSTOP** <br> **[Only for Toll Free A2P]** <br> Processing Opt-In Keywords specific to Toll Free Texting | A consumer can opt back in at any time to receive messages by texting the keyword “UNSTOP” to a message sender’s phone number. The keyword is not case sensitive and triggers an opt-in only when sent as a single word, with no punctuation or leading spaces (any trailing spaces are trimmed). If the consumer uses the opt-in keyword within a sentence an opt-in is not triggered.<br> <br> Examples of valid opt-ins: “UNSTOP”  “Unstop”  “unstop”  “UNStop”<br> <br> The message returned to a consumer is generic and informs the consumer they can start two-way texting with the message sender’s phone number again.<br> <br> **NETWORK MSG: You have replied "unstop" and will begin receiving messages again from this number.**                                                                                                                                                                                                                                                                   |
| **Single Domain** - Associate URL                                                                          | Each campaign should be associated with a single web domain owned by customer. Although a full domain is preferred, a URL shortener may be used to deliver custom links.  Avoid public / shared domain shorteners: <br> - bit.ly <br> - goo.gl <br> - tinyurl.com <br> - Tiny.cc <br> - lc.chat <br> - is.gd <br> - soo.gd <br> - s2r.co <br> - Clicky.me <br> - budurl.com <br> - bc.vc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


---

## Default Messaging Rate Limits and Queues {#default-rate-limit}

All Bandwidth messaging products are rate limited in some fashion. The default rate limit is the same for SMS and MMS. There are two different rate limits within the system:


| Scope          | Rate Limit              | Description                                                                                                                                                                                                 | Default                                                                                                                                                         |
|:---------------|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Account**    | Outbound _dequeue_ rate | The rate that Bandwidth will send your messages to the downstream carriers across your entire account.                                                                                                      | 1 MPS                                                                                                                                                           |
| **Per-Number** | Outbound _dequeue_ rate | The rate that Bandwidth will send your messages from a **single phone number** to the downstream carriers                                                                                                   | P2P - 1 MPS <br> A2P - ∞, up to account limit                                                                                                                   |

### Queuing

By default Bandwidth queues messages internally to be sent out. Once contracted, Bandwidth will enable a 15 minute queue across the entire account. The number of messages in the queue will depend on your **account wide _dequeue_ rate**. It's important to note that the 15 minute queue (900 seconds) is across the entire account, and **not** per phone number.

#### Example: Calculating Queue Depth

An account has an **Outbound _dequeue_ rate** of 5MPS.

![Queue Math](./images/queuemath.png)

### 429 – Too Many Requests

When your queue size has been exceeded you will receive a [429 - Too Many Requests error.](errors/tooManyReq.md)

### Sample Message Rate Limit Response

You will receive this error response if:

* Your **per account** queue is full

```http
Status: 429 Too Many Requests
Content-Type: application/json; charset=utf-8
```

```json
{
  "type": "max-message-queue-size-exceeded",
  "description": "The SMS queue for your account is full and cannot accept more messages right now. Your allowed rate is 60 messages per minute. The capacity of this queue is 900 messages (15 minutes). Reduce your message sending rate, or contact support to increase your allowed rate."
}
```

## Managing Messages {#managing-messages}

| Method             | Description                                                                                                                                                                 | Use-cases                                                                                                                                                       |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Back-off and Retry | Try to send messages as quickly as possible to Bandwidth. When you hit the rate limit, add a small delay and try again. If it fails, then add some more delay and try again | Works best for use-cases that need to send lots of messages with no priority:<br> - Day before appointment reminders <br> - Receipts <br> - Opted-in Promotions |
| Throttle           | Only send messages to Bandwidth as quickly as your dequeue rates                                                                                                            | Works best with any use case, but favors pure P2P                                                                                                               |
| Queue Management   | Utilizing a queue system such as [RabbitMQ](https://www.rabbitmq.com/) or [Mosquitto](https://mosquitto.org/)                                                               | Works best for use-cases that intermingle massive campaigns with realtime traffic. Enables full control over message priority and time-to-live                  |


### Back-off and Retry {#backoff-and-retry}

Back-off and Retry adaptively increases delay to attempt to find the quickest possible call pacing without hitting rate limits. The pseudocode below shows a simple example using a linear coefficient to adjust delay. Introducing randomness or "jitter" into the delay can help reduce successive collisions.

```python
retries = 0
coefficient = 2 // coefficient to increase delay
delay = some milliseconds (small amount)
DO
status = Get the result of the asynchronous operation.
IF status = SUCCESS
    retry = false
ELSE IF status = TIMEOUT
    retry = true
    retries = retries + 1
    WAIT delay
    delay = coefficient * delay
END IF
WHILE (retry AND (retries < MAX_RETRIES))
```

### Throttling {#throttle}

Throttling paces the asynchronous operations based on a specified time duration. Using a duration just longer than the rate limit will help ensure calls are completed as they are sent without having to resend due to rate limiting.

```python
retries = 0
DO
status = Get the result of the asynchronous operation.
IF status = SUCCESS
    retry = false
ELSE IF status = TIMEOUT
    retry = true
    retries = retries + 1
    WAIT some milliseconds
END IF
WHILE (retry AND (retries < MAX_RETRIES))
```

### Queue Management {#queue-management}

Queue Management requires configuring and maintaining a queue of asynchronous operations, http API calls for example, facilitating linear control over when the operation is executed. The pseudocode below shows a simple queuing solution. For complex queuing tasks, consider using a queue system such as [RabbitMQ](https://www.rabbitmq.com/) or [Mosquitto](https://mosquitto.org/).

```python
1. CONFIGURE_QUEUE size, storage, etc
2. PUSH_TO_QUEUE add async operation data to queue
3. SUBSCRIBE_TO_QUEUE get async operation from queue

 BEGIN_HANDLER
 DO
   message = extracted from queue of async operations
   status = execute async operation with message
   IF status = SUCCESS
      retry = false
   ELSE IF status = TIMEOUT
      retry = true
      retries = retries + 1
      WAIT delay
   END IF
 WHILE (retry AND (retries < MAX_RETRIES))
 END_HANDLER
```
