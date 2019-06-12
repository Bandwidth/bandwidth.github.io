{% method %}
## XML: `<SpeakSentence>`
The SpeakSentence verb is used to convert any text into speech for the caller.


### Attributes
Attributes of the speaker may be changed using these values. The default speaker is a `female` speaker with locale
`en_US`.

To change the gender or locale of the speaker, change the appropriate attributes and a new
voice will be selected that matches the new `gender` and `locale`.

To choose a specific voice by name, use the `voice` attribute.

| ATTRIBUTE | DESCRIPTION                                                                                                           |
|:----------|:----------------------------------------------------------------------------------------------------------------------|
| voice     | Select the voice of the speaker. Consult the `voice` column in the below table for valid values.<br><br>If the `voice` attribute is present, `gender` and `locale` are ignored.                                                           |
| gender    | Select the gender of the speaker. Valid values are `"male"` or `"female"`.<br><br>Default `"female"`                                   |
| locale    | Select the locale of the speaker. Consult `locale` column in the below table for valid values.<br><br>Default `"en_US"` |

| **locale** | **gender** | **voice** |
|:-----------|:-----------|:----------|
|de	|female	|Mila
|en_UK	|female	|Jane
|en_US	|female	|Elaine
|en_US	|female	|Emily
|en_US	|female	|Ella
|es	|female	|Mariana
|fr	|female	|Chloe
|it	|female	|Sophia
|de	|male	|Max
|en_US|	male	|Ethan
|en_UK|	male	|James
|es	|male	|Mateo
|it	|male	|Stefano
|fr	|male	|Christophe

### Callbacks Received

None

{% common %}

#### Example:  SpeakSentence Verb
This shows how to use Bandwidth XML to use text to speech to speak a sentence into a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence voice="Sophia">
      Questo è un test
   </SpeakSentence>
</Response>
```


{% endmethod %}
