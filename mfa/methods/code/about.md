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

### Usage

This section discusses at a high level how to use the MFA service

#### Step 1: Create A Request

In order to create a request, you need your user's phone number, your Bandwidth phone number, your scope (which currently is just `scope`), and your voice OR messaging application ID. Your application IDs must be useable with your Bandwidth phone number.

Simply use [voice](voice.md) or [messaging](messaging.md) to make the request.

#### Step 2: Receive Your User Input

After the request is made, your user will receive a text message containing the 6 digit MFA code, or a phone call that speaks the 6 digit MFA code. The user needs to input this code into your system.

#### Step 3: Validate The User Input

Once your system has received the user's code, you can use [verify](verify.md) to verify the code. Note that the `scope` and `applicationId` of the verify request must match the `scope` and ID of the first request. As an example, if you used messaging to send the code to your user, you must use the messaging account ID when verifying the user.

The verify response tells you if the code is correct or incorrect.
