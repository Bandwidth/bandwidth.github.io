# Calls
The Calls resource lets you make phone calls.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}/calls/`

### Capabilities

| VERB                           | Path                                                                                      | Description                                                                                                                     |
|:-------------------------------|:------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| <code class="post">POST</code> | [`/v2/accounts/{accountId}/calls`](postCalls.md)                                                | Create an outbound phone call                                                                                                   |
| <code class="post">POST</code> | [`/v2/accounts/{accountId}/calls/{callId}`](postCallsCallId.md)                                 | Redirect or hangup an active call  |

