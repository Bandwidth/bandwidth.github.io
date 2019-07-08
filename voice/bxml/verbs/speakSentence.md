{% method %}
## XML: `<SpeakSentence>`
The SpeakSentence verb translates text to speech and plays the resulting audio on the call


### Attributes

Attributes of the speaker may be changed using these values. The default speaker is a `female` speaker with locale
`en_US`.

To change the gender or locale of the speaker, change the appropriate attributes and a new
voice will be selected that matches the new `gender` and `locale`.

To choose a specific voice by name, use the `voice` attribute.

| Attribute | Description                                                                                                                                                                      |
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

List of supported SSML tags.

Full details about SSML tags can be found at:
https://www.w3.org/TR/2010/REC-speech-synthesis11-20100907/

#### `<break>`
Adds a pause to the speech. You can specify the duration of the pause by using either the `strength` or the `time` attributes.

Attributes:
 * `strength`: (optional) accepted values are: `none`, `x-weak`, `weak`, `medium` (default), `strong` or `x-strong`
 * `time`: (optional) the duration of the pause in seconds or milliseconds (e.g. `1s` or `1000ms`) with a maximum value of 10 seconds

#### `<emphasis>`
The contained text is spoken with emphasis.

Attributes:
 * `level`: (optional) defines the strength of emphasis to be applied, accepted values are: `strong`, `moderate` or `reduced`

#### `<lang>`
Specifies the natural language of the content.

Attributes:
 * `xml:lang`: specifies the language, accepted values are:
   * `da-DK`: Danish
   * `nl-NL`: Dutch
   * `en-AU`: English, Australian
   * `en-GB`: English, British
   * `en-IN`: English, Indian
   * `en-US`: English, US
   * `fr-FR`: French
   * `fr-CA`: French, Canadian
   * `hi-IN`: Hindi
   * `de-DE`: German
   * `is-IS`: Icelandic
   * `it-IT`: Italian
   * `ja-JP`: Japanese
   * `ko-KR`: Korean
   * `nb-NO`: Norwegian
   * `pl-PL`: Polish
   * `pt-BR`: Portuguese, Brazilian
   * `pt-PT`: Portuguese, European
   * `ro-RO`: Romanian
   * `ru-RU`: Russian
   * `es-ES`: Spanish, European
   * `es-MX`: Spanish, Mexican
   * `es-US`: Spanish, US
   * `sv-SE`: Swedish
   * `tr-TR`: Turkish
   * `cy-GB`: Welsh

#### `<p>`
Adds a pause between paragraphs.

#### `<phoneme>`
Use phonetic pronunciation for specific text.

Attributes:
 * `alphabet`: (optional) specifies the phonemic/phonetic pronunciation alphabet, accepted values: `ipa` (International Phonetic Alphabet, see http://www.internationalphoneticalphabet.org)
 * `ph`: phonetic symbols

#### `<prosody>`
Controls the volume, rate and pitch of the speech.

Attributes:
 * `pitch`: (optional) changes the pitch, accepted values: `x-low`, `low`, `medium`, `high`, `x-high`, `default` or a relative change in `%` (e.g. `-15%` or `20%`)
 * `rate`: (optional) changes the speaking rate, accepted values: `x-slow`, `slow`, `medium`, `fast`, `x-fast` or any positive percentage (e.g. `50%` for a speaking rate of half the default rate or `200%` for a speaking rate twice the default rate)
 * `volume`: (optional) changes the volume, accepted values: `silent`, `x-soft`, `soft`, `medium`, `loud`, `x-loud`, `default` or the volume in dB (e.g. `+1dB` or `-6dB`)
 
#### `<s>`
Adds a pause between lines or sentences.

#### `<say-as>`
Indicates how to interpret the text.<br>
More information at: https://www.w3.org/TR/2005/NOTE-ssml-sayas-20050526/

Attributes:
 * `interpret-as`: accepted values:
   * `date`: the contained text is a Gregorian calendar date, must specify the `format` attribute, see below
   * `time`: the contained text is a time in minutes and seconds (e.g. `1'20"`)
   * `telephone`: the contained text is a 7-digit or 10-digit telephone number (e.g. `2025551212`)
   * `characters`: enclosed text should be spoken as a series of alpha-numeric characters
   * `cardinal`: the enclosed text is an integral or decimal number and should be spoken as a cardinal number
   * `ordinal`: the enclosed text is an integral number and should be spoken as an ordinal number
 * `format`: (optional) used with `interpret-as="date"` to specify the date format, accepted values:
   * `mdy`: Month-day-year
   * `dmy`: Day-month-year
   * `ymd`: Year-month-day
   * `md`: Month-day
   * `dm`: Day-month
   * `ym`: Year-month
   * `my`: Month-year
   * `d`: Day
   * `m`: Month
   * `y`: Year

#### `<sub>`
The text in the `alias` attribute replaces the contained text for pronunciation.

Attributes:
 * `alias` : string to be spoken

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
