{% method %}

## Download Media
Downloads a media file you previously uploaded.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API Token and API Secret. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

## ⚠️ Caution on fetching Media ⚠️

You **MUST** use your API token and secret to download the media each and every time you want to access the file.  We **DO NOT** recommend using Bandwidth's url to display/stream media files to your end-users.  Providing your user-id, token, and secret to users' devices is a security risk, as they _could_ use your credentials to access your account.

Instead, we recommend that you create a copy on your local server or a cloud storage service.  Doing so allows you to specify **YOUR** authentication method (if any) to keep your Bandwidth account and users safe.

{% common %}

### Example 1 of 1: Download an MP3 File

{% sample lang="bash" %}

```bash
curl -v -X GET https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName} \
  -u {token}:{secret}
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
downloaded_media = messaging_client.get_media("12345", "mediaId")
f = File.open("file_to_write", "wb")
f.puts(downloaded_media)
f.close()
```

{% sample lang="python" %}

```python
# Python Example
```

{% endmethod %}
