# Calls
The Calls resource lets you make phone calls.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

### Capabilities

| VERB                           | Path                                                        | Description                                   |
|:-------------------------------|:------------------------------------------------------------|:----------------------------------------------|
| <code class="post">POST</code> | [`/calls`](postCalls.md)                                    | Create an outbound phone call                 |
| <code class="post">POST</code> | [`/calls/{callId}`](postCallsCallId.md)                     | Redirect or hangup an active call             |
| <code class="post">PUT</code>  | [`/calls/{callId}/recording`](putCallsCallIdRecording.md)   | Pause or resume recording on an active call   |
