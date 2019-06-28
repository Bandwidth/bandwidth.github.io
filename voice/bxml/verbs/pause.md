{% method %}

## XML: `<Pause>`
The Pause verb is used to delay for a set period of time.  Silence will be heard.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | The 'duration' attribute specifies how many seconds Bandwidth will wait silently before continuing on. |


### Callbacks Received

None

{% common %}
#### Example:  Pause Verb
This shows how to use Bandwidth XML to pause for 2 seconds.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Pause duration="2" />
</Response>
```

{% endmethod %}
