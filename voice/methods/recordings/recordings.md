# Recordings
The Recordings resource lets you access recordings for a phone call.

### Base URL

`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}/calls/{callId}/recordings`

### Capabilities

| VERB                           | Path                                                                                      | Description                                                                                                                     |
|:-------------------------------|:------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| <code class="get">GET</code> | [`/v2/accounts/{accountId}/calls/{callId}/recording/{recordingId}`](getRecording.md)             | Retrieve metadata for a recording.   |
| <code class="get">GET</code> | [`/v2/accounts/{accountId}/calls/{callId}/recording/{recordingId}/media`](getRecordingMedia.md)  | Retrieve the media of a recording. |

