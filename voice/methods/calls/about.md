# Calls
The Calls resource lets you make and manage phone calls as well as retrieve information about recordings created during calls

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls`

### Capabilities

| HTTP Method                        | Path                                                                                            | Description                                                                  |
|:-----------------------------------|:------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| <code class="post">POST</code>     | [`/calls`](postCalls.md)                                                                        | Create an outbound phone call                                                |
| <code class="get">GET</code>       | [`/calls/{callId}`](getCallsCallId.md)                                                          | Retrieve call information                                                    |
| <code class="post">POST</code>     | [`/calls/{callId}`](postCallsCallId.md)                                                         | Replace an active call's BXML                                                |
| <code class="put">PUT</code>       | [`/calls/{callId}/recording`](../recordings/putCallsCallIdRecording.md)                         | Pause or resume a recording on an active call                                |
