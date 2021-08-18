<div id="banner">
  <div class="bannerContainer">
    <p>The WebRTC documentation has migrated. Please visit <a href="https://new.dev.bandwidth.com/apis/webrtc#tag/participants">our new API Reference site</a> for the most up-to-date documentation.</p>
    <p id="bannerClose"><i class="fa fa-close"></i></p>
  </div>
</div>
<br/>
<br/>
# Manage participants in a session

### Base URL

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants`

### Capabilities

| HTTP Method                 | Path                                            | Description                                                                                       
|:----------------------------|:------------------------------------------------|:--------------------------------------------------------------------------------------------------
| <code class="post">POST</code>| [`/participants`](createParticipant.md)         | Create a new participant under this account                                                       
| <code class="get">GET</code>| [`/participants/{participantId}`](getParticipant.md)            | Get participant by ID                                                                             
| <code class="delete">DELETE</code>| [`/participants/{participantId}`](deleteParticipant.md)         | Delete participant by ID                                                                          
