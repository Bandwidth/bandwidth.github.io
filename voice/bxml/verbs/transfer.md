{% method %}

## XML: `<Transfer>`
The Transfer verb is used to bridge another party onto the current call.

### Attributes
| Attribute              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| transferCallerId       | (optional) The caller ID to use when the call is transferred, if different.<br><br> Note: Leave blank to pass along the number of the remote party                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| callTimeout            | (optional) This is the timeout (in seconds) for the callee to answer the call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| transferCompleteUrl    | (optional) URL to send the [Transfer Complete](../callBacks/transferComplete.md) event to and request new BXML.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transferCompleteMethod | (optional) The HTTP method to use for the request to `transferCompleteUrl`. GET or POST. Default value is POST.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| username               | (optional) The username to send in the HTTP request to `transferCompleteUrl`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| password               | (optional) The password to send in the HTTP request to `transferCompleteUrl`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| tag                    | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| diversionTreatment     | (optional) Can be any of the following: <br> `none`: No diversion headers are sent on the outbound leg of the transferred call. <br>`propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg. <br>`stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br>Defaults to `none`.  If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. |
| diversionReason        | (optional) Can be any of the following values: <br>`unknown`<br>`user-busy`<br>`no-answer`<br>`unavailable`<br>`unconditional`<br>`time-of-day`<br>`do-not-disturb`<br>`deflection`<br>`follow-me`<br>`out-of-service`<br>`away` <br><br>This parameter is considered only when `diversionTreatment` is set to `stack`.  Defaults to `unknown`.                                                                                                                                                                                                                                                                                               |

When the called party hangs up, if the `transferCompleteUrl` attribute is specified, the [TransferComplete](../callBacks/transferComplete.md) callback is sent to the `transferCompleteUrl` and
the BXML returned by that callback are executed. Verbs following the `<Transfer>` will be ignored when the `transferCompleteUrl` attribute is specified.

If no `transferCompleteUrl` is specified, no event will be sent, and execution of verbs following the `<Transfer>` tag continues when the called party hangs up.

### Nested Tags
Between 1 and 8 `<PhoneNumber>` tags must be nested within the `<Transfer>` tag to define the called parties.  If more than
one `<PhoneNumber>` is specified, called parties will ring simultaneously and the first to answer will be bridged
to the original call:

| Verb        | Description                                                                                     |
|:------------|:------------------------------------------------------------------------------------------------|
| PhoneNumber | A collection of phone numbers to transfer the call to. The first to answer will be transferred. |

#### PhoneNumber attributes
| Attribute            | Description                                                                                                                                                                                                            |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| transferAnswerUrl    | (optional) URL, if any, to send the [Transfer Answer](../callBacks/transferAnswer.md) event to and request BXML to be executed for the called party before the call is bridged                                         |
| transferAnswerMethod | (optional) The HTTP method to use for the request to `transferAnswerUrl`. GET or POST. Default value is POST.                                                                                                          |
| username             | (optional) The username to send in the HTTP request to `transferAnswerUrl`.                                                                                                                                            |
| password             | (optional) The password to send in the HTTP request to `transferAnswerUrl`.                                                                                                                                            |
| tag                  | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

When the called party answers, if the `transferAnswerUrl` is specified, the [Transfer Answer](../callBacks/transferAnswer.md) callback is sent to the `transferAnswerUrl` and
the BXML returned by that callback is executed. That BXML is executed only for the called party.  At the conclusion
of that BXML, the calls are bridged.

<aside class="alert general small"><p>There can be a maximum of 8 phone numbers to transfer to. </p></aside>

### Callbacks Received

| Callbacks                                             | Can reply with more BXML |
|:------------------------------------------------------|:-------------------------|
| [Transfer Answer](../callBacks/transferAnswer.md)     | Yes                      |
| [Transfer Complete](../callBacks/transferComplete.md) | Yes                      |

{% common %}
#### Example: Simple Transfer
This shows how to use Bandwidth XML to transfer a phone call.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Transferring your call, please wait.</SpeakSentence>
    <Transfer transferCallerId="+11234567891">
        <PhoneNumber>+11234567892</PhoneNumber>
    </Transfer>
</Response>
```

#### Example: Single Transfer with Announcement
This shows how to use Bandwidth XML to transfer a phone call with a pre-bridge announcement.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="paul">Transferring your call, please wait.</SpeakSentence>
    <Transfer transferCallerId="+11234567891">
        <PhoneNumber transferAnswerUrl="http://myapp.com/announcement">+11234567892</PhoneNumber>
    </Transfer>
</Response>
```
The announcement BXML is:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="paul">A customer would like to speak to you.</SpeakSentence>
</Response>
```

#### Example: Multi transfer
This example shows how to use Bandwidth XML in a multi transfer scenario.  All numbers ring simultaneously and the first
to answer is bridged to the original call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Transfer transferCallerId="+15552221235">
        <PhoneNumber>+15552221234</PhoneNumber>
        <PhoneNumber>+15552221233</PhoneNumber>
    </Transfer>
</Response>

```

{% endmethod %}
