{% method %}

## Add Location

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/addlocation`

### Required Parameters
  * uri.uri
  * uri.callername
  * location.address1
  * location.community
  * location.state
  * location.postalcode  
  * location.type  

You call addLocation to associate the location with a URI. On our side we take the location information and run it through various validation steps to make sure it’s a good address.

You can add multiple locations to a URI. This is configured in your account settings. The default value is three locations, but you can reach out to your Bandwidth Support Team if you need more locations per URI.

Important: Adding a location doesn’t mean that the location is provisioned for emergency service – you still have to make a call to provisionLocation. Furthermore, even when you call provisionLocation, that location may not be immediately available for use in a live 911 call. The provisioning process may take seconds or minutes to propagate to the 911 call processing servers. You should not implement a design where a provisioned location is immediately used in a 911 call. If you don't know the location of the 911 caller before the call is made, Bandwidth has other products to support that call flow. Please contact your Account Manager to discuss it. Not sure who your Account Manager is? Reach out to your Bandwidth Support Team or hit us up at (855) 864-7776!

You should to use the address2 field for information like the suite, floor, apartment and so on. If this information is appended to address1 we may discard this information or give faulty results.

Note: Throws ParseException, LockedException

### Address Line 2

Since PSAPs across the country are generally limited to displaying 60 characters in the Address Line 2 field, Bandwidth enforces a 60-character limit on all addresses being provisioned. If you provision 61 or more characters in the Address Line 2 field, you’ll receive the following error: Some inputs are missing or incorrect, please check your inputs and try again.


If you encounter an error due to Address Line 2 being over 60 characters, please edit the address down.

Address Line 2 can be a free form text, although the typical format is:

```xml
<unit type> <unit num> <unit type> <unit num>...
```

To fit more information into a smaller space, we try to abbreviate it. Here are the example Address Line 2 inputs and corresponding abbreviated outputs:

| Input                     | Abbreviated Output |
|:--------------------------|:-------------------|
| suite AA                  | STE AA             |
| building A floor 3 room 7 | BLDG A FL 3 RM 7   |
| wharf 7 pier A            | WHARF 7 PIER A     |

A full list of unit type abbreviations is below:

| Input Unit Type           | Abbreviated Output |
|:--------------------------|:-------------------|
| APARTMENT | APT |
| BASEMENT | BSMT |
| BUILDING | BLDG |
| DEPARTMENT | DEPT |
| FLOOR | FL |
| FRONT | FRNT |
| HANGAR | HGNR |
| LOBBY | LBBY |
| LOT | LOT |
| LOWER | LOWR |
| OFFICE | OFC |
| PENTHOUSE | PH |
| PIER | PIER |
| REAR | REAR |
| ROOM | RM |
| SIDE | SIDE|
| SLIP | SLIP |
| SPACE | SPC |
| STOP | STOP |
| SUITE | STE |
| TRAILER | TRLR |
| UNIT | UNIT |
| UPPER | UPPR |


{% common %}

{% sample lang='http' %}

```http
POST https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/addlocation HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/xml;charset=UTF-8

<addLocation>
  <uri>
     <uri>13035551236</uri>
     <callername>Bandwidth Test User 3</callername>
  </uri>
  <location>
    <address1>1860 Blake St</address1>
    <address2>Suite 420</address2>
    <community>Denver</community>
    <postalcode>80202</postalcode>
    <plusfour></plusfour>
    <state>CO</state>
    <type>ADDRESS</type>
  </location>
</addLocation>
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:addLocationResponse xmlns:ns0="http://dashcs.com/api/v1/emergency" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Location>
        <activatedtime>2018-03-12T13:24:26.296Z</activatedtime>
        <address1>1860 BLAKE ST</address1>
        <address2>STE 420</address2>
        <callername>Bandwidth Test User 3</callername>
        <comments xsi:nil="true" />
        <community>DENVER</community>
        <customerorderid xsi:nil="true" />
        <latitude>39.753095</latitude>
        <legacydata>
            <housenumber>1860</housenumber>
            <predirectional xsi:nil="true" />
            <streetname>BLAKE ST</streetname>
            <suite>STE 420</suite>
        </legacydata>
        <locationid>67880038</locationid>
        <longitude>-104.995857</longitude>
        <plusfour>1228</plusfour>
        <postalcode>80202</postalcode>
        <state>CO</state>
        <status>
            <code>GEOCODED</code>
            <description>Location is geocoded</description>
        </status>
        <type>ADDRESS</type>
        <updatetime xsi:nil="true" />
    </Location>
</ns0:addLocationResponse>
```

{% endmethod %}
