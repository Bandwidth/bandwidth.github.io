<div id="banner">
  <div class="bannerContainer">
    <p>The WebRTC documentation has migrated. Please visit <a href="https://new.dev.bandwidth.com/apis/webrtc#tag/sessions">our new API Reference site</a> for the most up-to-date documentation.</p>
    <p id="bannerClose"><i class="fa fa-close"></i></p>
  </div>
</div>
<br/>
<br/>

# Sessions allow you to create media connections between participants

### Base URL

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions`

### Capabilities

| HTTP Method                 | Path                                            | Description                                                                                       
|:----------------------------|:------------------------------------------------|:--------------------------------------------------------------------------------------------------
| <code class="post">POST</code>| [`/sessions`](createSession.md)                 | Create a new session                                                                              
| <code class="get">GET</code>| [`/sessions/{sessionId}`](getSession.md)                    | Get session by ID                                                                                 
| <code class="delete">DELETE</code>| [`/sessions/{sessionId}`](deleteSession.md)                 | Delete session by ID                                                                              
| <code class="put">PUT</code>| [`/sessions/{sessionId}/participants/{participantId}`](addParticipantToSession.md)       | Add a participant to a session                                                                    
| <code class="delete">DELETE</code>| [`/sessions/{sessionId}/participants/{participantId}`](removeParticipantFromSession.md)  | Remove a participant from a session                                                               
| <code class="get">GET</code>| [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](getParticipantSubscriptions.md)   | Get a participant's subscriptions                                                                 
| <code class="put">PUT</code>| [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](updateParticipantSubscriptions.md)| Update a participant's subscriptions                                                              
