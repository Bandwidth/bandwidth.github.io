# Calls
The Calls resource lets you make and manage phone calls.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

### Capabilities

| VERB                             | Path                                                                                                  | Description                                                        |
|:---------------------------------|:------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|
| <code class="post">POST</code>   | [`/calls`](postCalls.md)                                                                              | Create an outbound phone call                                      |
| <code class="post">POST</code>   | [`/calls/{callId}`](postCallsCallId.md)                                                               | Redirect or hangup an active call                                  |
| <code class="post">PUT</code>    | [`/calls/{callId}/recording`](putCallsCallIdRecording.md)                                             | Pause or resume recording on an active call                        |
| <code class="post">GET</code>    | [`/calls/{callId}/recordings`](getCallsCallIdRecordings.md)                                     | Retrieve information about recordings that occurred during a call. |
| <code class="post">GET</code>    | [`/calls/{callId}/recordings/{recordingId}`](getCallsCallIdRecordingsRecordingId.md)            | Retrieve information about a specific recording.                   |
| <code class="post">DELETE</code> | [`/calls/{callId}/recordings/{recordingId}`](deleteCallsCallIdRecordingsRecordingId.md)         | Delete a specific recording.                                       |
| <code class="post">GET</code>    | [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md) | Retrieve a specific recording.                                     |
| <code class="post">GET</code>    | [`/recordings`](getRecordings.md)                                                               | Retrieve information about your 1000 least recent recordings.      |
