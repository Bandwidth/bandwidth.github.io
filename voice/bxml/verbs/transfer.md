{% method %}

## XML: `<Transfer>`
The Transfer verb can be used to bridge the current call with one or more calls.

### Nested Tags
There are two nested tags, only one can be used at a time.

| Verb        | Description                                                                                                                             |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| PhoneNumber | A collection of phone numbers to transfer the call to. The first to answer will be transferred. <br> [see more](transferPhoneNumber.md) |
| Conference  | The conference the call will join into. <br> [see more](transferConference.md) |

{% common %}

{% endmethod %}
