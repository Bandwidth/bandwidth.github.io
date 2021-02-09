{% method %}

## Get Provisioned Location History by URI

### Request URL

<code class="get">GET</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionedlocationhistorybyuri/{uri}`

Given a URI find the provisioned location and histories.

Note: Throws ParseException, NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionedlocationhistorybyuri/13035551234 HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns2:getProvisionedLocationHistoryByURIResponse xmlns:ns2="http://dashcs.com/api/v1/emergency">
    <ProvisionedLocations>
        <activatedtime>2010-11-18T23:19:40Z</activatedtime>
        <address1>1002 BYRD LN</address1>
        <address2 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></address2>
        <callername>Larry Reeder</callername>
        <comments xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></comments>
        <community>PLEASANTON</community>
        <customerorderid xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></customerorderid>
        <latitude>37.63894</latitude>
        <legacydata>
            <housenumber>1002</housenumber>
            <predirectional xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></predirectional>
            <streetname>BYRD LN</streetname>
            <suite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></suite>
        </legacydata>
        <locationid xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></locationid>
        <longitude>-121.871018</longitude>
        <plusfour>9706</plusfour>
        <postalcode>94566</postalcode>
        <state>CA</state>
        <status xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></status>
        <type>ADDRESS</type>
        <updatetime>2010-04-20T15:06:16Z</updatetime>
    </ProvisionedLocations>
</ns2:getProvisionedLocationHistoryByURIResponse>
```

{% endmethod %}
