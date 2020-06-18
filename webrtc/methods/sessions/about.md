# Sessions allow you to create media connections between participants

### Base URL

`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/sessions`

### Capabilities

| HTTP Method                   | Path                                              | Description                                                                                         
|:------------------------------|:--------------------------------------------------|:----------------------------------------------------------------------------------------------------
| <code class="POST">POST</code>| [`/sessions`](createSession.md)                   | Create a new session                                                                                
| <code class="GET">GET</code>  | [`/sessions/{sessionId}`](getSession.md)          | Get session by ID                                                                                   
| <code class="DELETE">DELETE</code>| [`/sessions/{sessionId}`](deleteSession.md)       | Delete session by ID                                                                                
| <code class="PUT">PUT</code>  | [`/sessions/{sessionId}/participants/{participantId}`](addParticipantToSession.md)| Add a participant to a session                                                                      
| <code class="DELETE">DELETE</code>| [`/sessions/{sessionId}/participants/{participantId}`](removeParticipantFromSession.md)| Remove a participant from a session                                                                 
| <code class="GET">GET</code>  | [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](getParticipantSubscriptions.md)| Get a participant's subscriptions                                                                   
| <code class="PUT">PUT</code>  | [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](updateParticipantSubscriptions.md)| Update a participant's subscriptions                                                                
