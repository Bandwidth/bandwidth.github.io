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
curl -v -X DELETE https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{mediaName} \
	-u {token}:{secret}
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
# Ruby Example
```

{% sample lang="python" %}

```python
messaging_client.delete_media(MESSAGING_ACCOUNT_ID, "mediaId")
```

{% endmethod %}
