
# Media
The Media resource lets you upload your media files to Bandwidth API servers so they can be used in applications without requiring a separate hosting provider. You can upload files up to `3.75MB` and file storage is free for an unlimited number of files. Files are stored for up to 48 hours. Files you upload can only be accessed by you when you supply your API access `token` and `secret`. They are not available to anonymous users. Bandwidth API supports the `Cache-Control` header when you upload files.

{% raw %}
<aside class="alert general small">
<p>
You can upload files up to <code>3.75MB</code> and file storage is free for an unlimited number of files stored up to 48 hours.
</p>
</aside>
{% endraw %}
### Base URL

`https://messaging.bandwidth.com/api/v2/users/{accountId}/media`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API user's username and password. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### Capabilities

| Verb                               | Path                                                         | about                                                                          |
|:-----------------------------------|:-------------------------------------------------------------|:-------------------------------------------------------------------------------|
| <code class="get">GET</code>       | [`/api/v2/users/{accountId}/media`](listMedia.md)               | Get a list of your media files                                                 |
| <code class="get">GET</code>       | [`/api/v2/users/{accountId}/media/{mediaName}`](getMedia.md)    | Downloads an incoming MMS media attachment or an uploaded media file           |
| <code class="put">PUT</code>       | [`/api/v2/users/{accountId}/media/{mediaName}`](uploadMedia.md) | Uploads a media file                                                           |
| <code class="delete">DELETE</code> | [`/api/v2/users/{accountId}/media/{mediaName}`](deleteMedia.md) | Permanently deletes an incoming MMS media attachment or an uploaded media file |
