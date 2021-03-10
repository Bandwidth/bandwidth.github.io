{% method %}

## Download Media
Downloads a media file you previously uploaded.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}`

#### Basic Authentication

Bandwidth's media API leverages Basic Authentication with your API user's username and password. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

## ⚠️ Caution on fetching Media ⚠️

You **MUST** use your API username and password to download the media each and every time you want to access the file.  We **DO NOT** recommend using Bandwidth's url to display/stream media files to your end-users.  Providing your account id, username, and password to users' devices is a security risk, as they _could_ use your credentials to access your account.

Instead, we recommend that you create a copy on your local server or a cloud storage service.  Doing so allows you to specify **YOUR** authentication method (if any) to keep your Bandwidth account and users safe.

{% common %}

### Example 1 of 1: Download an MP3 File

{% sample lang="bash" %}

```bash
curl -X GET \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}' \
    -u '{username}:{password}'
```

{% sample lang="java" %}
```java
try {
    ApiResponse<InputStream> response = controller.getMedia(MSG_ACCOUNT_ID, "mediaId");
    byte[] bytes = response.getResult().readAllBytes();
} catch (ApiException | IOException e) {
    e.printStackTrace();
} 
```

{% sample lang="csharp" %}

```csharp
var response = msgClient.GetMedia(MSG_ACCOUNT_ID, mediaId);

Stream data = response.Data;

using (var fileStream = File.Create("C:\\Path\\To\\File"))
{
    data.Seek(0, SeekOrigin.Begin);
    data.CopyTo(fileStream);
}
```


{% sample lang="ruby" %}

```ruby
downloaded_media = messaging_client.get_media(MESSAGING_ACCOUNT_ID, "mediaId")
f = File.open("file_to_write", "wb")
f.puts(downloaded_media.data)
f.close()
```

{% sample lang="python" %}

```python
downloaded_media = messaging_client.get_media(MESSAGING_ACCOUNT_ID, "mediaId")
f = open("file_to_write", "wb")
f.write(downloaded_media.body)
f.close()
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';
import { fs } from 'fs';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';
const mediaId = 'abc12345-6def-abc1-2345-6defabc12345/1/1.mp3';

const response = await controller.getMedia(accountId, mediaId);

fs.writeFileSync('file-to-write', response.result, 'binary');
```

{% sample lang="php" %}

```php
$response = $messagingClient->getMedia($messagingAccountId, "mediaId");
$file = fopen("file_to_write", "wb") or die("Unable to open file");
fwrite($file, $response->getResult());
fclose($file);
```

{% endmethod %}
