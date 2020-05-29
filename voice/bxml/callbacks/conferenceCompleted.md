{% method %}
## Conference Completed Event
The Conference Completed event is fired when the last member leaves the conference.  
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description                                                                                                                         |
|:----------   |:------------------------------------------------------------------------------------------------------------------------------------|
| eventType    | The event type, value is `conferenceCompleted`                                                                                     |
| conferenceId | The id for the conference that was joined                                                                                           |
| friendlyName | The custom name used to reference this conference.                                                                                  |
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                     |

{% common %}

#### Example: Member joins the conference

```
POST http://[External server URL]
```

```json
{
    "confernceId"   : "conf-abcd",
    "fiendlyName"   : "thisConfernece",
    "eventType"     : "conferenceCompleted",   
}
```

{% endmethod %}
