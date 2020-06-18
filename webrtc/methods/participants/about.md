# Manage participants in a session

### Base URL

`https://api.webrtc.bandwidth.com/accounts/{accountId}/accounts/{accountId}/participants`

### Capabilities

| HTTP Method                   | Path                                              | Description                                                                                         
|:------------------------------|:--------------------------------------------------|:----------------------------------------------------------------------------------------------------
| <code class="POST">POST</code>| [`/participants`](createParticipant.md)           | Create a new participant under this account                                                         
| <code class="GET">GET</code>  | [`/participants/{participantId}`](getParticipant.md)| Get participant by ID                                                                               
| <code class="DELETE">DELETE</code>| [`/participants/{participantId}`](deleteParticipant.md)| Delete participant by ID                                                                            
