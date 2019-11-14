{% method %}

## List Media
Gets a list of your media files. No query parameters are supported.

Each request returns a maximum of 1000 media files. Retrieving more than 1000 media files requires use of the `Continuation-Token` header. The `Continuation-Token` is returned in the response header, and can be included in another request in the request header to continue retrieving the subsequent media files. The `Continuation-Token` does not need to be set for the 1st request.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{accountId}/media`

#### Basic Authentication

Bandwidth's messaging API leverages Basic Authentication with your API Token and API Secret. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Parameters
| Property | Description |
|:---|:---|
| Continuation-Token (Request Header) | (Optional) Token used to retrieve subsequent media. |

### Properties
| Property      | Description                                   |
|:--------------|:----------------------------------------------|
| mediaName     | The mediaName is the unique name of the media |
| contentLength | Size of the media in Bytes `B`                |
| content       | URL to use to GET the specific media file.    |
| Continuation-Token (Response Header) | Token used to retrieve subsequent media. |

{% common %}

### Example 1 of 2: List Your Media Files


{% sample lang="bash" %}

```bash
curl -v -X GET https://messaging.bandwidth.com/api/v2/users/{accountId}/media \
  -u {token}:{secret}
```

> The above command returns JSON structured like this:

```json
[
  {
    "contentLength": 561276,
    "mediaName": "{mediaName1}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName1}"
  },
  {
    "contentLength": 2703360,
    "mediaName": "{mediaName2}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName2}"
  },
  {
    "contentLength": 2257901,
    "mediaName": "{mediaName3}",
        "content": "https://messaging.bandwidth.com/.../media/{mediaName3}"
  }
]
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
media = messaging_client.list_media(MESSAGING_ACCOUNT_ID)
puts media.data[0].media_name
```

{% sample lang="python" %}

```python
media = messaging_client.list_media(MESSAGING_ACCOUNT_ID)
print(media.body[0].media_name)
```

{% common %}

### Example 2 of 2: List Your Media Files Using A Continuation-Token


{% sample lang="bash" %}

```bash
curl -v -X GET https://messaging.bandwidth.com/api/v2/users/{accountId}/media \
  -u {token}:{secret} \
  -H "Continuation-Token: 12345"
```

> The above command returns JSON structured like this:

```json
Continuation-Token: 678910

[
  {
    "contentLength": 561276,
    "mediaName": "{mediaName1}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName1}"
  },
  {
    "contentLength": 2703360,
    "mediaName": "{mediaName2}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName2}"
  },
  {
    "contentLength": 2257901,
    "mediaName": "{mediaName3}",
        "content": "https://messaging.bandwidth.com/.../media/{mediaName3}"
  }
]
```

{% sample lang="csharp" %}

```csharp
// Csharp example

var a = b;

```


{% sample lang="ruby" %}

```ruby
media = messaging_client.list_media(MESSAGING_ACCOUNT_ID, continuation_token: "token")
```

{% sample lang="python" %}

```python
media = messaging_client.list_media(MESSAGING_ACCOUNT_ID, continuation_token="token")
```
{% endmethod %}
