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
curl -X GET \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/media' \
    -u '{token}:{secret}'
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

{% sample lang="java" %}

```java
ApiResponse<List<Media>> response = controller.listMedia(MESSAGING_ACCOUNT_ID, "");
List<Media> mediaList = response.getResult();
```

{% sample lang="csharp" %}

```csharp
var response = msgClient.ListMedia(MSG_ACCOUNT_ID);
List<Media> mediaList = response.Data;
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

{% sample lang="js" %}

```js
var response = await messagingController.listMedia(userId, '');
console.log(response[0].mediaName);
```

{% common %}

### Example 2 of 2: List Your Media Files Using A Continuation-Token


{% sample lang="bash" %}

```bash
curl -X GET \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/media' \
    -u '{token}:{secret}' \
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

{% sample lang="java" %}

```java
String continuationToken = null;
try {
    do {
        ApiResponse<List<Media>> response = controller.listMedia("userId", continuationToken);
        continuationToken = response.getHeaders().value("Continuation-Token");
        List<Media> mediaList = response.getResult();
        
        System.out.println(mediaList.size());
        System.out.println(mediaList.get(0).getMediaName());
        
    } while (continuationToken != null);
    
} catch (ApiException | IOException e) {
    e.printStackTrace();
}
```

{% sample lang="csharp" %}

```csharp
bool success;
string continuationToken = null;
do
{
    var response = msgClient.ListMedia(msgAccountId, continuationToken);
    success = response.Headers.TryGetValue("Continuation-Token", out continuationToken);

    List<Media> medias = response.Data;

    Console.WriteLine("medias length:  " + medias.Count);
    Console.WriteLine("Media 1 name:  " + medias[0].MediaName);

} while (success);
```


{% sample lang="ruby" %}

```ruby
continuation_token = nil
loop do
    media = messaging_client.list_media(MESSAGING_ACCOUNT_ID, continuation_token: continuation_token)
    if media.headers.key?('Continuation-Token')
        continuation_token = media.headers['Continuation-Token']
    else
        continuation_token = nil
    end
    puts "Medias length: " + media.data.length.to_s
    puts "Media 1 name: " + media.data[0].media_name
    break if continuation_token == nil
end
```

{% sample lang="python" %}

```python
continuation_token = None
while True:
    media = messaging_client.list_media(MESSAGING_ACCOUNT_ID, continuation_token=continuation_token)
    if 'Continuation-Token' in media.headers.keys():
        continuation_token = media.headers['Continuation-Token']
    else:
        continuation_token = None
    print("Medias length: " + str(len(media.body)))
    print("Media 1 name: " + media.body[0].media_name)
    if continuation_token is None:
        break
```

{% sample lang="js" %}

```js
async function getMediaWithToken(continuationToken) {
    await messagingController.listMedia(userId, continuationToken, function(error, response, context) {
        console.log("Medias length: " + response.length);
        console.log("Media 1 name: " + response[0].mediaName);
        if (context.response.headers.hasOwnProperty('continuation-token')) {
            continuationToken = context.response.headers['continuation-token'];
        } else {
            continuationToken = null;
        }
    });
    return continuationToken;
}

var continuationToken = '';
while (true) {
    continuationToken = await getMediaWithToken(continuationToken);
    if (continuationToken === null) {
        break;
    }
}
```

{% endmethod %}
