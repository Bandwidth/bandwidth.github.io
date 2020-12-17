# Bandwidth's WebRTC Calling API and Video API

⚠️ Your account must be activated to use WebRTC. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

Our Video API and WebRTC Calling API are both powered by Bandwidth's WebRTC Platform.

## Base API URL

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}`

## WebRTC Browser SDK

[https://github.com/Bandwidth/webrtc-browser](https://github.com/Bandwidth/webrtc-browser)

## WebRTC Guides and Sample Apps

| Guide                                                                                                        | Description                                            |
| :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [WebRTC Concept Overview](guides/overview.md)                                                                | High level introduction to WebRTC                      |
| [Getting started](guides/quickstart.md)                                                                      | Learn how to the WebRTC "Hello World" sample app works |
| [Audio Example](https://github.com/Bandwidth/examples/tree/master/nodejs/webrtc-hello-world)                 | A "Hello World" app in NodeJs and React                |
| [Simpler Audio Example](https://github.com/Bandwidth/examples/tree/master/nodejs/webrtc-hello-again)         | A "Hello World" app in NodeJs with minimal javascript  |
| [React Video Conference App](https://github.com/Bandwidth/webrtc-sample-conference-node)                     | A video conference app built in React and Typescrypt   |
| [Simple Video Conference App](https://github.com/Bandwidth/examples/tree/master/nodejs/webrtc-video-meeting) | A video conference app built basic javascript          |

## REST API Reference Index

| Resource                                         | Description                                                         |
| :----------------------------------------------- | :------------------------------------------------------------------ |
| [`/participants`](methods/participants/about.md) | Manage participants in a session                                    |
| [`/sessions`](methods/sessions/about.md)         | Sessions allow you to create media connections between participants |

## Error Codes

| Type                     | Description                                                           |
| :----------------------- | :-------------------------------------------------------------------- |
| [HTTP Errors](errors.md) | Learn about the different errors that you may encounter using the API |
