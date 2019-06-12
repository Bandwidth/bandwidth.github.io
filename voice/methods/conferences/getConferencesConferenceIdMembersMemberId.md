{% method %}

## Fetch Member information
Retrieve a conference member properties.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}`

---

## Conference Member Properties

| Property    | Description                                                                                                                             |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| id          | The unique id of a member.                                                                                                              |
| state       | The state of the member in the conference, values are `active` or `completed`.                                                          |
| mute        | If `true`, the member can’t speak in the conference, but can hear audio. If “false”, the member can speak in the conference.            |
| hold        | If `true`, member can’t hear the conference. If `false`, the member can hear the conference.                                            |
| joinTone    | If `true`, will play a tone when the member joins the conference. If `false`, no tone is played when the member joins the conference.   |
| leavingTone | If `true`, will play a tone when the member leaves the conference. If `false`, no tone is played when the member leaves the conference. |
| addedTime   | Date and time when the member was added to the conference (UTC).                                                                        |
| removedTime | Date and time when the member was removed to the conference (UTC).                                                                      |
| call        | The URL of the call resource for this member.                                                                                           |

{% common %}

### Example: Get conference member information

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Conference.getMember("conferenceId", "memberId").then(function(member){});
// Callback
client.Conference.getMember("conferenceId", "memberId", function(err, member){});
```

{% sample lang="csharp" %}

```csharp
var member = await client.Conference.GetMemberAsync("{conferenceId1}", "{memberId1}");
Console.WriteLine(member.State);
// Created
```

{% sample lang="ruby" %}

```ruby
member = conference.get_member("{memberId1}")
state = member.state
```

{% common %}

> The above command returns JSON structured like this:

```
{
		"addedTime": "2013-07-12T15:47:04-03",
		"hold": false,
		"id": "{memberId}",
		"mute": false,
		"removedTime": "2013-07-12T15:49:11-02",
		"state": "completed",
		"joinTone": false,
		"leavingTone": false,
		"call": "https://.../v1/users/{userId}/calls/{callId}"
}
```
{% endmethod %}
