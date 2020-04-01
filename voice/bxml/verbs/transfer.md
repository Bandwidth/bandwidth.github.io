{% method %}

## XML: `<Transfer>`
The Transfer verb can be used to bridge the current call with another party or a conference.

### Nested Tags
There are two nested tags, only one can be used at a time.

| Verb                                  | Description                                                                                                     |
|:--------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| [PhoneNumber](transferPhoneNumber.md) | Defines up to 8 phone numbers to transfer the call to. The current call is bridged with the first that answers. |
| [Conference](transferConference.md)   | Adds the current call into a conference.                                                                        |

{% common %}

{% endmethod %}
