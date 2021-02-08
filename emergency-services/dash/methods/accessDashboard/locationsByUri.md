{% method %}

## Get Locations by URI

Find all the locations associated with the given URI.

Note: Throws ParseException, NotFoundException, LockedException

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1//locationsbyuri/{uri}`

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1//locationsbyuri/{uri} HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns2:getLocationsByURIResponse xmlns:ns2="http://dashcs.com/api/v1/emergency">
    <Locations>
        <activatedtime>2019-08-03T04:56:09Z</activatedtime>
        <address1>200 STATE RT 17</address1>
        <address2 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></address2>
        <callername>Databit, Inc</callername>
        <comments xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></comments>
        <community>MAHWAH</community>
        <customerorderid xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></customerorderid>
        <latitude>41.096072</latitude>
        <legacydata>
            <housenumber>200</housenumber>
            <predirectional xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></predirectional>
            <streetname>STATE RT 17</streetname>
            <suite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></suite>
        </legacydata>
        <locationid>80258750</locationid>
        <longitude>-74.157524</longitude>
        <plusfour>1203</plusfour>
        <postalcode>07430</postalcode>
        <state>NJ</state>
        <status>
            <code>GEOCODED</code>
            <description>Location is geocoded</description>
        </status>
        <type>ADDRESS</type>
        <updatetime>2020-03-20T18:23:38.426Z</updatetime>
    </Locations>
    <Locations>
        <activatedtime>2020-01-23T13:13:15.431Z</activatedtime>
        <address1>158 ESSEX ST</address1>
        <address2 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></address2>
        <callername>Databit, Inc</callername>
        <comments></comments>
        <community>MELROSE</community>
        <customerorderid xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></customerorderid>
        <latitude>42.457299</latitude>
        <legacydata>
            <housenumber>158</housenumber>
            <predirectional xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></predirectional>
            <streetname>ESSEX ST</streetname>
            <suite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></suite>
        </legacydata>
        <locationid>2527756312559</locationid>
        <longitude>-71.068666</longitude>
        <plusfour>3106</plusfour>
        <postalcode>02176</postalcode>
        <state>MA</state>
        <status>
            <code>GEOCODED</code>
            <description>Location is geocoded</description>
        </status>
        <type>ADDRESS</type>
        <updatetime>2020-03-20T18:23:38.426Z</updatetime>
    </Locations>
</ns2:getLocationsByURIResponse>
```

{% endmethod %}
