# Bandwidth Messaging

The Messages resource lets you send both single SMS/MMS messages as well as Group SMS/MMS Messages.

#### Receive Incoming Messages
To receive [events/callbacks](../callbacks/messageEvents.md) for incoming and outgoing text messages (both SMS and MMS), you need to have a [Bandwidth Application](../../applications/about.md) configured to send callbacks to your server.

### Base URL

`https://messaging.bandwidth.com/api/v2`

### Capabilities

| Verb                           | Path                                             | about                                  |
|:-------------------------------|:-------------------------------------------------|:---------------------------------------|
| <code class="post">POST</code> | [`/users/{userId}/messages`](../methods/messages/createMessage.md) | Send a text message to a single number or a group message to multiple numbers |
