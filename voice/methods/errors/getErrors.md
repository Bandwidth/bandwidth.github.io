{% method %}

## List Errors
Gets the most recent user errors for the user. Since this operation uses HTTP GET, all the properties are specified as HTTP request parameters.

### Request URL
<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/errors`

---

### Supported Parameters
| Parameter | Description                                                                                                                                                                | Mandatory |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page      | Used for pagination to indicate the page requested for querying a list of user errors. If no value is specified the default is 0.                                          | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list of user errors. If no value is specified the default value is 25. (Maximum value 1000) | No        |

## Error Properties

| Property | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id       | The unique id for the error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| time     | The time the error occurred (UTC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| category | The error category, one of:<br>`authentication` - The requestor could not be authenticated. Incorrect or disabled credentials are common causes of these errors. <br>`authorization` - The requestor does not have sufficient permissions to perform the operation or access the resource, or some other authorization error occurred.<br> `not-found` - The resource could not be found. <br>`bad-request` - The request information sent could not be understood or contained values that are not allowed.<br>`conflict` - The resource could not be modified because it was already modified by a different request.<br>`unavailable` - The resource or service is currently unavailable. It may become available shortly, or the request may have to be modified to succeed.<br>`credit` - The requestor has insufficient credit to perform the operation or access the resource.<br>`limit` - A usage limit or rate limit for a resource or service has been exceeded.<br>`payment` - There was an error processing a payment. |
| code     | A specific error code string that identifies the type of error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| message  | A message that describes the error condition in detail.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| details  | A list of name/value pairs of additional details that may help you debug the error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Error Details Properties
| Property | Description                                                                                                                                                          |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | The detail name; there is no complete list of detail names, but conventional resource ID names like userId are used to refer to resources associated with the error. |
| value    | The detail value; the format and content depends on the name.                                                                                                        |

{% common %}

### Example: Get errors

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/errors \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Error.list({size: 1000}).then(function(errorResponse){});

// Callback
client.Error.list({size: 1000}, function(err, errorResponse){});
```

{% sample lang="csharp" %}

```csharp
var errors = client.Error.List(new ErrorQuery{Size = 1000});
var firstError = errors.First();
Console.WriteLine($"{firstError.Code} - {firstError.Message}");
// no-application-for-number - No application is configured for number +19195556666
```

{% sample lang="ruby" %}

```ruby
errors = Error.list(client)
first_error = errors.next
first_error_message = first_error[:message]
```

{% common %}


> The above command returns JSON structured like this:

```json
[
   {
      "time" : "2012-11-15T01:30:16.208Z",
      "category" : "unavailable",
      "id" : "{userErrorId1}",
      "details" : [
         {
            "id" : "{userErrorDetailId1}"
            "name" : "applicationId",
            "value" : "{applicationId}",
         },
         {
            "id" : "{userErrorDetailId2}",
            "name" : "number",
            "value" : "{number}",
         },
         {
            "id" : "{userErrorDetailId3}",
            "name" : "callId",
            "value" : "{callId}",
         }
      ],
      "message" : "Application {applicationId} (\"Dial a Tune\") for number
                   {number} does not specify a URL for call events",
      "code" : "no-callback-for-call"
   },
   {
      "time" : "2012-11-15T01:29:24.512Z",
      "category" : "unavailable",
      "id" : "{userErrorId2}",
      "message" : "No application is configured for number +19195556666",
      "code" : "no-application-for-number"
   },
]
```
{% endmethod %}
