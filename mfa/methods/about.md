# Bandwidth Two-Factor Authentication API

Bandwidth's Two-Factor Authentication service

## Base URL
`https://mfa.bandwidth.com/api/v1/accounts/{accountId}`

## Conventions
Some of the URLs in this documentation contain placeholders for values that your API client program must provide. These placeholders are shown in curly braces, like `{this}`. When you construct the URL to access these resources, replace those placeholders with the values you want to use.

## REST API Reference Index

| VERB                           | Resource                               | Description                                                 |
|:-------------------------------|:---------------------------------------|:------------------------------------------------------------|
| <code class="post">POST</code> | [`/code/voice`](code/voice.md)         | Two-Factor authentication with Bandwidth Voice services     |
| <code class="post">POST</code> | [`/code/messaging`](code/messaging.md) | Two-Factor authentication with Bandwidth messaging services |
| <code class="post">POST</code> | [`/code/verify`](code/verify.md)       | Verify a previously sent two-factor authentication code     |
