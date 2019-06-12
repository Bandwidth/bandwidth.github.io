{% method %}

## Get Recording
Retrieves the metadata for a recording.  The recordingId must be obtained from the RecordComplete or RecordingAvailable events.

### Request URL

<code class="get">GET</code>`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}`

---

### Supported Parameters

### Properties

| Property    | Description                                                                                                                                                               |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| callId      | The unique id of the recordings resource.                                                                                                                                 |
| recordingId      | The unique id for this recording.                                                                                                                       |
| to               | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from             | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| channels         | Number of channels in the recording (1 or 2). |
| startTime        | Time the recording started (in ISO8601 format). |
| endTime          | Time the recording ended (in ISO8601 format). |
| duration         | Length of the recording (in seconds).              |
| fileFormat       | The format that the recording was saved in - `mp3` or `wav`.                                                                                                                                      |
| mediaUrl         | URL to retrieve the contents of the recording. |

{% common %}


### Example: Get metadata for a recording

```bash
curl -u username:password https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/1234/calls/c-0a010203-582d2486-87c8-4a45-a9cc-bdf9797c620f/recordings/9ab694cd-f420-4840-aa79-526950950a03
```

{% endmethod %}
