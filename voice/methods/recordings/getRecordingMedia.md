{% method %}

## Get Recording
Returns the media for a recording as a WAV or MP3 file.

### Request URL

<code class="get">GET</code>`https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media`

---

### Supported Parameters

{% common %}


### Example: Download a recording to `recording.wav`

```bash
curl -u username:password -o recording.wav https://api.us-east-1.preview.slingshot.dev.app.bandwidth.com/v2/accounts/1234/calls/c-0a010203-582d2486-87c8-4a45-a9cc-bdf9797c620f/recordings/9ab694cd-f420-4840-aa79-526950950a03/media
```

{% endmethod %}
