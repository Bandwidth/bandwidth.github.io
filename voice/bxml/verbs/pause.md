{% method %}

## XML: `<Pause>`
The Pause verb is used to delay verb execution for a period of time. Silence will be heard.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | (optional) The 'duration' attribute specifies how many seconds Bandwidth will wait silently before continuing on. Default value is 1. Range: decimal values between 0.1 - 86400. |


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
