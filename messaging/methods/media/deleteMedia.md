{% method %}

## Remove Media File
Deletes a media file from Bandwidth API server. Make sure you don't have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.

### Request URL

<code class="delete">DELETE</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API Token and API Secret. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

{% common %}

### Example 1 of 1: Delete an MP3 File

{% sample lang="bash" %}

```bash
curl -X DELETE \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName}' \
	-u '{token}:{secret}'
```

{% sample lang="csharp" %}

```csharp
msgClient.DeleteMedia(MSG_ACCOUNT_ID, mediaId);
```

{% sample lang="csharp" %}

```java
messagingClient.deleteMedia(MESSAGING_ACCOUNT_ID, "mediaId");
```

{% sample lang="ruby" %}

```ruby
messaging_client.delete_media(MESSAGING_ACCOUNT_ID, "mediaId")
```

{% sample lang="python" %}

```python
messaging_client.delete_media(MESSAGING_ACCOUNT_ID, "mediaId")
```

{% sample lang="js" %}

```js
import { Client, ApiController } from '@bandwidth/messaging';

const client = new Client({
  basicAuthUserName: 'username',
  basicAuthPassword: 'password'
});

const controller = new ApiController(client);

const accountId = '1111111';
const mediaId = 'abc12345-6def-abc1-2345-6defabc12345/0/0.smil';

const response = await controller.deleteMedia(accountId, mediaId);
```

{% sample lang="php" %}

```php
$messagingClient->deleteMedia($messagingAccountId, "mediaId");
```

{% endmethod %}
