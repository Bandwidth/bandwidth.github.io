{% method %}
## Conference Created Event
The Conference Created event is fired whenever a new conference that specified a callbackUrl is created.  
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description                                                                                                                         |
|:----------   |:------------------------------------------------------------------------------------------------------------------------------------|
| eventType    | The event type, value is `conferenceCreated`                                                                                        |
| conferenceId | The id for the new conference that was created                                                                                      |
| friendlyName | The custom name used to reference this conference.                                                                                  |
| tag          | (optional) The `tag`  specified on conference creation. If no `tag` was specified or it was previously cleared, null.               |

{% common %}

#### Example: Conference created 

```
POST http://[External server URL]
```

```json
{
    "confernceId"   : "conf-abcd",
    "fiendlyName"   : "thisConfernece",
    "eventType"     : "conferenceCreated"
    
}
```

{% endmethod %}