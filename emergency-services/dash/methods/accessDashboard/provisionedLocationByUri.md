{% method %}

## Get Provisioned Location by URI

### Request URL

<code class="get">GET</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionedlocationbyuri/{uri}`

Get the provisioned location associated with a URI. You can have multiple locations associated with a URI but only one can be provisioned at a time.

Note: Throws ParseException, NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionedlocationbyuri/13035551234 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:getLocationsByURIResponse xmlns:ns0="http://dashcs.com/api/v1/emergency" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Location>
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
    </Location>
</ns0:getLocationsByURIResponse>
```

{% endmethod %}
