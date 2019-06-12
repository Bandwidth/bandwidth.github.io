{% method %}

## Fetch Conference information
Retrieve current properties for a conference.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}`

---

## Conference Properties

| Property           | Description                                                                                                                                                                                     |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | The unique id of a conference.                                                                                                                                                                  |
| state              | Conference state. Possible state values are described below.                                                                                                                                    |
| from               | The phone number that will host the conference.                                                                                                                                                 |
| createdTime        | The time that the Conference was created (UTC).                                                                                                                                                 |
| completedTime      | The time that the Conference was completed (UTC).                                                                                                                                               |
| activeMembers      | The number of active conference members.                                                                                                                                                        |
| hold               | If `true`, all member can’t hear or speak in the conference. If `false”, all members can hear and speak in the conference (unless set at the member level).                                     |
| mute               | If `true`, all member can’t speak in the conference. If `false`, all members can speak in the conference (unless set at the member level).                                                      |
| callbackUrl        | The complete URL where the events related to the Conference will be sent to.                                                                                                                    |
| callbackHttpMethod | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are <code class="get">GET</code> or <code class="get">POST</code>, default: <code class="get">POST</code>. |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds.                                                                                       |
| fallbackUrl        | The URL used to send the callback event if the request to callbackUrl fails.                                                                                                                    |
| tag                | A string that will be included in the callback events of the conference.                                                                                                                        |

## Conference States

| State     | Description                                                                                                                                      |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| created   | Conference was created and has no members.                                                                                                       |
| active    | Conference was created and has one or more ACTIVE members. As soon as the first member is added to a conference, the state is changed to active. |
| completed | The conference was completed. Once the conference is completed, It can not be used anymore.                                                      |

{% common %}

### Example: Get conference

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Conference.get("conferenceId").then(function(conference){});
// Callback
client.Conference.get("conferenceId", function(err, conference){});
```

{% sample lang="csharp" %}

```csharp
var conference = await client.Conference.GetAsync("{conferenceId1}");
Console.WriteLine($"{conference.From} - {conference.State}");
// +1234567890 - Created
```

{% sample lang="ruby" %}

```ruby
conference = Conference.get(client, "{conferenceId1}")
owner = conference.from
```

{% common %}

> The above command returns JSON structured like this:

```
{
		"activeMembers": 0,
		"createdTime": "2013-07-12T15:22:47-02",
		"from": "+19703255647",
		"id": "{conferenceId}",
		"state": "created"
}
```

{% endmethod %}
