{% method %}

## List Members in Conference
List all members from a conference. If a member had already hung up or removed from conference it will be displayed as completed.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members`

---

### Conference Member Properties

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

### Example: Listing members from a conference

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Conference.getMembers("conferenceId").then(function(members){});
// Callback
client.Conference.getMembers("conferenceId", function(err, members){});
```

{% sample lang="csharp" %}

```csharp
var members = client.Conference.GetMembers("{conferenceId1}");
var firstMember = members.First().State;
Console.WriteLine($"{firstMember.Id} - {firstMember.State}");
// cm-1234 - Created
```

{% sample lang="ruby" %}

```ruby
members = conference.get_members()
first_member_state = members[0].state
```

{% common %}

> The above command returns JSON structured like this:

```json
[
	{
			"addedTime": "2013-07-12T15:54:47-02",
			"hold": false,
			"id": "{memberId1}",
			"mute": false,
			"state": "active",
			"joinTone": false,
			"leavingTone": false,
			"call": "https://localhost:8444/v1/users/{userId}/calls/{callId1}"
	},
	{
			"addedTime": "2013-07-12T15:55:12-02",
			"hold": false,
			"id": "{memberId2}",
			"mute": false,
			"state": "active",
			"joinTone": false,
			"leavingTone": false,
			"call": "https://localhost:8444/v1/users/{userId}/calls/{callId2}"
	},
	{
			"addedTime": "2013-07-12T15:56:12-02",
			"hold": false,
			"id": "{memberId3}",
			"mute": false,
			"removedTime": "2013-07-12T15:56:59-02",
			"state": "completed",
			"joinTone": false,
			"leavingTone": false,
			"call": "https://localhost:8444/v1/users/{userId}/calls/{callId3}"
	}
]
```
{% endmethod %}
