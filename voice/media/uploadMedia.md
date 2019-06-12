{% method %}

## Upload or Replace Media
Uploads a file the normal HTTP way. You may add headers to the request in order to provide some control to your media-file.

Bandwidth retains uploaded media for up to 48 hours.

### Request URL
<code class="put">PUT</code>`https://messaging.bandwidth.com/api/v2/users/{userId}/media/{mediaName}`

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
curl -v -X PUT https://messaging.bandwidth.com/api/v2/users/{your_user_id}/media/{file.mp3} -H "Content-Type: audio/mpeg" -u {{token}}:{{secret}} --data-binary "@{/filepath/file.mp3}"
```
{% endmethod %}
