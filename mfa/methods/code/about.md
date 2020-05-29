# Two-Factor Authentication
Bandwidth's Two-Factor Authentication service

<aside class="alert general small">
<p>
Read More about Bandwidth's Two-Factor Authentication service <a href="http://dev.bandwidth.com/mfa">FAQ</a>
</p>
</aside>

### Base URL

`https://mfa.bandwidth.com/api/v1/accounts/{accountId}`

### Capabilities

| HTTP Method                    | Path                              | Description                                                 |
|:-------------------------------|:----------------------------------|:------------------------------------------------------------|
| <code class="post">POST</code> | [`/code/voice`](voice.md)         | Two-Factor authentication with Bandwidth Voice services |
| <code class="post">POST</code> | [`/code/messaging`](messaging.md) | Two-Factor authentication with Bandwidth Messaging services |
| <code class="post">POST</code> | [`/code/verify`](verify.md)       | Verify a previously sent two-factor authentication code     |
