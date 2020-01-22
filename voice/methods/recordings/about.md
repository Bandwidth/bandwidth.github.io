# Recordings

The Recordings resource lets retrieve information about recordings created during calls as well as manage recordings on a live call.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL for `CallId` Specific Recordings

`https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls/{callId}/recordings`

### Base URL for all Recordings

`https://voice.bandwidth.com/api/v2/accounts/{accountId}/recordings`

## Recording & Voice Media Storage

Bandwidth will keep recordings for up to 30 days. After 30 days the recordings will be deleted from Bandwidth's servers.

### ⚠️ Caution on fetching Recordings ⚠️ {#caution-recordings}

You **MUST** use your API Credentials to download the recording each and every time you want to access the file.  We **DO NOT** recommend using Bandwidth's url to display/stream media files to your end-users.  Providing your accountID, & API Credentials to users' devices is a security risk, as they _could_ use your credentials to access your account.

Instead, we recommend that you create a copy on your local server or a cloud storage service.  Doing so allows you to specify **YOUR** authentication method (if any) to keep your Bandwidth account and users safe.


### Capabilities

| HTTP Method                        | Path                                                                                            | Description                                                                  |
|:-----------------------------------|:------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| <code class="get">GET</code>       | [`/recordings`](getRecordings.md)                                                               | Returns a max of 1000 recordings, sorted by startTime from oldest to newest  |
| <code class="put">PUT</code>       | [`/calls/{callId}/recording`](putCallsCallIdRecording.md)                                       | Pause or resume a recording on an active call                                |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings`](getCallsCallIdRecordings.md)                                     | Retrieve information about all of the recordings that occurred during a call |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}`](getCallsCallIdRecordingsRecordingId.md)            | Retrieve information about a recording                                       |
| <code class="delete">DELETE</code> | [`/calls/{callId}/recordings/{recordingId}`](deleteCallsCallIdRecordingsRecordingId.md)         | Delete a recording                                                           |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}/media`](getCallsCallIdRecordingsRecordingIdMedia.md) | Retrieve a recording                                                         |
| <code class="get">GET</code>       | [`/calls/{callId}/recordings/{recordingId}/transcription`](getCallsCallIdRecordingsRecordingIdMedia.md) | Retrieve a recording transcription                                   |
