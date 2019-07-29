# Bandwidth Voice API

The Voice resource lets you create complex call flows for in and outbound phone calls.

<img src="../../images/create_call.png" style="max-width:95%">

## Base URL
`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

## Conventions
Some of the URLs in this documentation contain placeholders for values that your API client program must provide. These placeholders are shown in curly braces, like `{this}`. When you construct the URL to access these resources, replace those placeholders with the values you want to use.

## REST API Reference Index

| Resource                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`/calls`](calls/postCalls.md)                                            | The Calls resource lets you place phone calls. |
| [`/calls/{callId}`](calls/postCallsCallId.md)                                            | The CallsId resource lets you redirect active calls. |
