{% method %}

# How to create a conference call

In order to establish a conference call between three or more calls, a sequence of API calls needs to be made in a specific order. Calls with less than three callers should be [bridged](https://dev.bandwidth.com/ap-docs/methods/bridges/bridges.html). 

Note: 20 caller maximum on conference calls.

### Step 1. Create A Conference Call

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{number}"
    }'
```

### Callback Response

```http
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/{conferenceId}
```

### Step 2. Create A Call With the Conference ID

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "conferenceId: "{conferenceId}"
    }'
```

### Callback Response

```http
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/calls/{callId}
```

### Step 3. Add Call to Conference as a Member Using the Call ID

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "callId": "{callId}"
    }'
```

### Callback Response

```http
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/members/{memberId}
```

Repeat steps 2-3 to add additional calls.


{% sample lang="js" %}

### Create a conference call
```js
client.Conference.create({from: "+1234567890"}).then(function(conference){});
```

{% sample lang="csharp" %}

### Create a conference call
```csharp
var conference = await client.Conference.CreateAsync(new CreateConferenceData {From = "+1234567890"});
```

{% sample lang="ruby" %}

### Create a conference call
```ruby
conference = Conference.create(client,  {:from => "+1234567890"})
```

{% sample lang="python" %}

### Create a conference call
```python
conference_id = Conference.create_conference('+12018994444')
```

{% endmethod %}



