{% method %}

## Upload or Replace Media
Uploads a file the normal HTTP way. You may add headers to the request in order to provide some control to your media-file.

Bandwidth retains uploaded media for up to 48 hours.

### Request URL
<code class="put">PUT</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API Token and API Secret. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

<aside class="alert general small">
<p>
You can upload files up to <code>3.75MB</code> and file storage is free for an unlimited number of files within a 48 hour retention policy.
</p>
</aside>

### Properties
| Header         | Description                                                                                                                        | Mandatory |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------|:----------|
| Content-Length | Indicates the size of the entity-body.                                                                                             | Yes       |
| Cache-Control  | General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain. | No        |
| Content-Type   | The media type of the entity-body.                                                                                                 | Yes        |

{% common %}

### Example 1 of 1: Upload an MP3 File

{% sample lang="bash" %}

```bash
curl -X PUT \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{file.mp3}' \
    -H "Content-Type: audio/mpeg" \
    -u '{token}:{secret}' \
    --data-raw "@{/filepath/file.mp3}"
```

{% sample lang="java" %}

```java
File file = new File("C:\\Path\\To\\File");
controller.uploadMedia(MSG_ACCOUNT_ID, mediaId, file.length(), file, "audio/wav", false);
```

{% sample lang="csharp" %}

```csharp
using ( FileStream fs = File.OpenRead("C:\\Path\\To\\File") )
{
    msgClient.UploadMedia(MSG_ACCOUNT_ID, mediaId, fs.Length, fs, "audio/wav");
}
```


{% sample lang="ruby" %}

```ruby
f = File.open("some file", "rb")
file_content = f.read
messaging_client.upload_media(MESSAGING_ACCOUNT_ID, "mediaId", file_content.length.to_s, file_content, :content_type => "application/octet-stream", :cache_control => "no-cache")
f.close()
```

{% sample lang="python" %}

```python
f = open("some_file", "rb")
file_content = f.read()
messaging_client.upload_media(MESSAGING_ACCOUNT_ID, "mediaId", str(len(file_content)), body=file_content)
f.close()
```

{% sample lang="js" %}

```js
var contentLength;
var contentType = 'application/octet-stream';
var cacheControl = 'no-cache';

var contents = fs.readFileSync("some_file", "binary");
contentLength = contents.length;
await messagingController.uploadMedia(messagingAccountId, "mediaId", contentLength, contents, contentType, cacheControl);
```

{% sample lang="php" %}

```php
$filename = "some_file";
$file = fopen($filename, "rb") or die("Unable to open file");
$contents = fread($file, filesize($filename));
$messagingClient->uploadMedia($messagingAccountId, "mediaId", strlen($contents), $contents);
fclose($file);
```

{% endmethod %}
