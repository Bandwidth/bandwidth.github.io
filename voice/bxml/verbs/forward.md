{% method %}
## XML: `<Forward>`
Forwards an unanswered incoming call to another number.

### Attributes

| ATTRIBUTE          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| to                 | Number to forward the call to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| from               | (optional) Number to use for caller ID on the outgoing leg.  If omitted, assumes the "to" number of the original leg.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| callTimeout        | (optional) Number of seconds to wait for an answer before abandoning the call. Default: 30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| diversionTreatment | (optional) Can be any of the following: <br> `none`: No diversion headers are sent on the outbound leg of the transferred call. <br>`propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg. <br>`stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br>Defaults to `none`.  If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. |
| diversionReason    | (optional) Can be any of the following values: <br>`unknown`<br>`user-busy`<br>`no-answer`<br>`unavailable`<br>`unconditional`<br>`time-of-day`<br>`do-not-disturb`<br>`deflection`<br>`follow-me`<br>`out-of-service`<br>`away` <br><br>This parameter is considered only when `diversionTreatment` is set to `stack`.  Defaults to `unknown`.                                                                                                                                                                                                                                                                                               |

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