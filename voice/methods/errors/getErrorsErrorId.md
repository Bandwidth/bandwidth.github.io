{% method %}

## Fetch Error Information
Gets information about one error. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/errors/{errorId}`

---

### Error Properties

| Property | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id       | The unique id for the error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| time     | The time the error occurred (UTC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| category | The error category, one of:<br>`authentication` - The requestor could not be authenticated. Incorrect or disabled credentials are common causes of these errors. <br>`authorization` - The requestor does not have sufficient permissions to perform the operation or access the resource, or some other authorization error occurred.<br> `not-found` - The resource could not be found. <br>`bad-request` - The request information sent could not be understood or contained values that are not allowed.<br>`conflict` - The resource could not be modified because it was already modified by a different request.<br>`unavailable` - The resource or service is currently unavailable. It may become available shortly, or the request may have to be modified to succeed.<br>`credit` - The requestor has insufficient credit to perform the operation or access the resource.<br>`limit` - A usage limit or rate limit for a resource or service has been exceeded.<br>`payment` - There was an error processing a payment. |
| code     | A specific error code string that identifies the type of error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| message  | A message that describes the error condition in detail.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| details  | A list of name/value pairs of additional details that may help you debug the error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Error Details Properties
| Property | Description                                                                                                                                                          |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | The detail name; there is no complete list of detail names, but conventional resource ID names like userId are used to refer to resources associated with the error. |
| value    | The detail value; the format and content depends on the name.                                                                                                        |

{% common %}

### Example: Get information about an error
{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/errors/{userErrorId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Error.get(userErrorId).then(function(errorInfo){});

// Callback
client.Error.get(userErrorId, function(err, errorInfo){});
```

{% sample lang="csharp" %}

```csharp
var error = async client.Error.GetAsync("{errorId1}");
Console.WriteLine($"{error.Code} - {error.Message}");
// no-application-for-number - No application is configured for number +19195556666

```

{% sample lang="ruby" %}

```ruby
error = Error.get(client, "{errorId1}")
message = error[:message]
```

{% common %}

> The above command returns JSON structured like this:

```
{
  "id": "{userErrorId}",
  "version": 0,
  "user": {
    "@id": 1,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "companyName": "{companyName}",
    "credentialsNonExpired": true,
    "email": "{email}",
    "enabled": true,
    "firstName": "{firstName}",
    "id": "{userId}",
    "lastName": "{lastName}",
    "password": "{password}",
    "username": "{username}"
  },
  "time": 1391514755496,
  "category": "BAD_REQUEST",
  "code": "missing-property",
  "message": "The 'call' resource property 'transferTo' is required but was not specified",
  "details": [
    {
      "id": "{userErrorDetailId1}",
      "version": 0,
      "name": "requestPath",
      "value": "users/{userId}/calls/{callId}"
    },
    {
      "id": "{userErrorDetailId2}",
      "version": 0,
      "name": "remoteAddress",
      "value": "{remoteAddress}"
    },
    {
      "id": "{userErrorDetailId3}",
      "version": 0,
      "name": "requestMethod",
      "value": "POST"
    }
  ]
}
```
{% endmethod %}
