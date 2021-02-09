{% method %}

## Get Locations by URI

### Request URL

<code class="get">GET</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/locationsbyuri/{uri}`

Find all the locations associated with the given URI.

Note: Throws ParseException, NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/locationsbyuri/13035551234 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:getLocationsByURIResponse xmlns:ns0="http://dashcs.com/api/v1/emergency" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Locations>
        <activatedtime>2014-10-08T16:57:48Z</activatedtime>
        <address1>1855 BLAKE ST</address1>
        <address2 xsi:nil="true" />
        <callername>Bandwidth Test User 1</callername>
        <comments xsi:nil="true" />
        <community>DENVER</community>
        <customerorderid xsi:nil="true" />
        <latitude>39.75302</latitude>
        <legacydata>
            <housenumber>1855</housenumber>
            <predirectional xsi:nil="true" />
            <streetname>BLAKE ST</streetname>
            <suite xsi:nil="true" />
        </legacydata>
        <locationid>20914831</locationid>
        <longitude>-104.996203</longitude>
        <plusfour>1288</plusfour>
        <postalcode>80202</postalcode>
        <state>CO</state>
        <status>
            <code>PROVISIONED</code>
            <description>Location is currently provisioned for URI</description>
        </status>
        <type>ADDRESS</type>
        <updatetime>2014-10-08T17:23:49Z</updatetime>
    </Locations>
    <Locations>
        <activatedtime>2014-10-08T16:57:48Z</activatedtime>
        <address1>2850 ST LAWERENCE AVE</address1>
        <address2 xsi:nil="true" />
        <callername>Bandwidth Test User 1</callername>
        <comments xsi:nil="true" />
        <community>READING</community>
        <customerorderid xsi:nil="true" />
        <latitude>40.331245</latitude>
        <legacydata>
            <housenumber>2850</housenumber>
            <predirectional xsi:nil="true" />
            <streetname>ST LAWERENCE AVE</streetname>
            <suite xsi:nil="true" />
        </legacydata>
        <locationid>21018169</locationid>
        <longitude>-75.849602</longitude>
        <plusfour xsi:nil="true" />
        <postalcode>19606</postalcode>
        <state>PA</state>
        <status>
            <code>GEOCODED</code>
            <description>Location is geocoded</description>
        </status>
        <type>ADDRESS</type>
        <updatetime>2015-04-08T23:45:07Z</updatetime>
    </Locations>
</ns0:getLocationsByURIResponse>
```

{% endmethod %}
