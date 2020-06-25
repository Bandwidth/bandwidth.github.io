# Sessions allow you to create media connections between participants

### Base URL

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions`

### Capabilities

| HTTP Method                 | Path                                            | Description                                                                                       
|:----------------------------|:------------------------------------------------|:--------------------------------------------------------------------------------------------------
| <code class="post">POST</code>| [`/sessions`](createSession.md)                 | Create a new session                                                                              
| <code class="get">GET</code>| [`/sessions`](getSession.md)                    | Get session by ID                                                                                 
| <code class="delete">DELETE</code>| [`/sessions`](deleteSession.md)                 | Delete session by ID                                                                              
| <code class="put">PUT</code>| [`/sessions`](addParticipantToSession.md)       | Add a participant to a session                                                                    
| <code class="delete">DELETE</code>| [`/sessions`](removeParticipantFromSession.md)  | Remove a participant from a session                                                               
| <code class="get">GET</code>| [`/sessions`](getParticipantSubscriptions.md)   | Get a participant's subscriptions                                                                 
| <code class="put">PUT</code>| [`/sessions`](updateParticipantSubscriptions.md)| Update a participant's subscriptions                                                              