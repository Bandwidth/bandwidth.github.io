{% method %}
## XML: `<SpeakSentence>`
The SpeakSentence verb translates text to speech and plays the resulting audio on the call


### Attributes

Attributes of the speaker may be changed using these values. The default speaker is a `female` speaker with locale
`en_US`.

To change the gender or locale of the speaker, change the appropriate attributes and a new
voice will be selected that matches the new `gender` and `locale`.

To choose a specific voice by name, use the `voice` attribute.

| ATTRIBUTE | DESCRIPTION                                                                                                                                                                      |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| voice     | Selects the voice of the speaker. Consult the `voice` column in the below table for valid values.<br><br>If the `voice` attribute is present, `gender` and `locale` are ignored. |
| gender    | Selects the gender of the speaker. Valid values are `"male"` or `"female"`.<br><br>Default `"female"`                                                                            |
| locale    | Selects the locale of the speaker. Consult `locale` column in the below table for valid values.<br><br>Default `"en_US"`                                                         |

| **voice** | **locale** | **gender** |
|:----------|:-----------|:-----------|
| julie     | en_us      | female     |
| kate      | en_us      | female     |
| susan     | en_us      | female     |
| dave      | en_us      | male       |
| paul      | en_us      | male       |
| bridget   | en_uk      | female     |
| simon     | en_uk      | male       |
| katrin    | de         | female     |
| stefan    | de         | male       |
| esperanza | es         | female     |
| violeta   | es         | female     |
| jorge     | es         | male       |
| jolie     | fr         | female     |
| bernard   | fr         | male       |
| paola     | it         | female     |
| luca      | it         | male       |

### SSML Tags Supported:

The table below lists the SSML tags that Bandwidth supports.  Full details about the tags can be found at https://www.w3.org/TR/2010/REC-speech-synthesis11-20100907/
TODO: put descriptions here?

| **tag**      | **description** |
|:-------------|:----------------|
| `<break>`    |                 |
| `<emphasis>` |                 |
| `<lang>`     |                 |
| `<mark>`     |                 |
| `<p>`        |                 |
| `<phoneme>`  |                 |
| `<prosody>`  |                 |
| `<s>`        |                 |
| `<say-as>`   |                 |
| `<sub>`      |                 |
| `<w>`        |                 |

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

This shows how to use Bandwidth XML with SSML tags to modify the way the text sounds.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence locale="en_US">
        Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.
        Please leave a message.
    </SpeakSentence>
</Response>
```


{% endmethod %}
