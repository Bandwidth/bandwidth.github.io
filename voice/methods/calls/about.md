# Calls
The Calls resource lets you make and manage phone calls as well as retrieve information about recordings created during calls

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

### Capabilities

| HTTP Method                        | Path                                                                                            | Description                                                                  |
|:-----------------------------------|:------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| <code class="post">post</code>     | [`/calls`](postCalls.md)                                                                        | Create an outbound phone call                                                |
| <code class="post">POST</code>     | [`/calls/{callId}`](postCallsCallId.md)                                                         | Replace an active call's BXML                                                |
| <code class="put">PUT</code>       | [`/calls/{callId}/recording`](putCallsCallIdRecording.md)                                       | Pause or resume a recording on an active call                                |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings`](getCallsCallIdRecordings.md)                                     | Retrieve information about all of the recordings that occurred during a call |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}`](getCallsCallIdRecordingsRecordingId.md)            | Retrieve information about a recording                                       |
| <code class="delete">DELETE</code> | [`/calls/{callId}/recordings/{recordingId}`](deleteCallsCallIdRecordingsRecordingId.md)         | Delete a recording                                                           |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md) | Retrieve a recording                                                         |
| <code class="get">GET</code>       | [`/recordings`](getRecordings.md)                                                               | Retrieve information about your 1000 least recent recordings                 |
