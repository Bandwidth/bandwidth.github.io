# Bandwidth's WebRTC API
⚠️ Your account must be activated to use WebRTC. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!


## Base API URL
`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}`


## WebRTC Browser SDK
`https://github.com/Bandwidth/webrtc-browser`
```javascript
import BandwidthRtc from "@bandwidth/webrtc-browser";
const bandwidthRtc = new BandwidthRtc();
````

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Getting started](guides/quickstart.md)             | Learn how to the WebRTC "Hello World" sample app works


## REST API Reference Index
| Resource                                        | Description                                                                                       
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------
| [`/participants`](methods/participants/about.md)| Manage participants in a session                                                                  
| [`/sessions`](methods/sessions/about.md)        | Sessions allow you to create media connections between participants                               


## Error Codes
| Type                         | Description                                                           |
|:-----------------------------|:----------------------------------------------------------------------|
| [HTTP Errors](errors.md)     | Learn about the different errors that you may encounter using the API |