{% method %}
## Conference Member Exit Event
The Conference Member Exit event is fired whenever a caller exits a conference that specified a callbackUrl.  
### Expected response
```http
HTTP/1.1 204
```

### Properties

| Property     | Description                                                                                                                         |
|:----------   |:------------------------------------------------------------------------------------------------------------------------------------|
| eventType    | The event type, value is `conferenceMemberExit`                                                                                     |
| conferenceId | The id for the conference that was joined                                                                                      |
| friendlyName | The custom name used to reference this conference.                                                                                  |
| callId       | The callId associated with the member that has left.
| tag          | (optional) The `tag`  specified on call creation. If no `tag` was specified or it was previously cleared, null.                     |

{% common %}

#### Example: Member exits the conference

```
POST http://[External server URL]
```

```json
{
    "confernceId"   : "conf-abcd",
    "fiendlyName"   : "thisConfernece",
    "eventType"     : "conferenceMemberExit",                                                                                                                                                                                                                                                    
    "callId"        : "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d"   
}
```

{% endmethod %}
