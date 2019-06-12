{% method %}

## Remove Media File
Deletes a media file from Bandwidth API server. Make sure you don't have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.

### Request URL

<code class="delete">DELETE</code>`https://messaging.bandwidth.com/api/v2/users/{userId}/media/{mediaName}`

{% common %}

### Example 1 of 1: Delete an MP3 File

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://messaging.bandwidth.com/api/v2/users/{userId}/media/{mediaName} \
	-u {token}:{secret} \
```
{% endmethod %}
