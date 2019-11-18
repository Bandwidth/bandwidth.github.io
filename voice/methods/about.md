# Bandwidth Voice API

The Voice resource lets you orchestrate complex call flows and retrieve recording metadata

<img src="../../images/create_call.png" style="max-width:95%">

## Base URL
`https://voice.bandwidth.com/api/v2/accounts/{accountId}`

## Conventions
Some of the URLs in this documentation contain placeholders for values that your API client program must provide. These placeholders are shown in curly braces, like `{this}`. When you construct the URL to access these resources, replace those placeholders with the values you want to use.

## REST API Reference Index

| VERB                               | Resource                                                                                              | Description                                                                  |
|:-----------------------------------|:------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| <code class="post">POST</code>     | [`/calls`](calls/postCalls.md)                                                                        | Place phone calls                                                            |
| <code class="post">POST</code>     | [`/calls/{callId}`](calls/postCallsCallId.md)                                                         | Replace an active call's BXML                                                |
| <code class="put">PUT</code>       | [`/calls/{callId}/recording`](calls/putCallsCallIdRecording.md)                                       | Pause or resume a recording on an active call                                |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings`](calls/getCallsCallIdRecordings.md)                                     | Retrieve information about all of the recordings that occurred during a call |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}`](calls/getCallsCallIdRecordingsRecordingId.md)            | Retrieve information about a recording                                       |
| <code class="delete">DELETE</code> | [`/calls/{callId}/recordings/{recordingId}`](calls/deleteCallsCallIdRecordingsRecordingId.md)         | Delete a recording                                                           |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}/media`](calls/getCallsCallIdRecordingsRecordingIdMedia.md) | Download a recording                                                         |
| <code class="get">GET</code>       | [`/recordings`](calls/getRecordings.md)                                                               | Retrieve information about your 1000 least recent recordings                 |
