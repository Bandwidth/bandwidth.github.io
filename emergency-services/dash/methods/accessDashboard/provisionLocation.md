{% method %}

## Provision Location

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionlocation`

This method activates a specific location for emergency service. The location must be something you have already added and associated with a URI (phone number).

If you have multiple locations associated with a URI and you want to switch provisioned locations, calling provisionLocation will automatically unprovision any currently provisioned location and then immediately provision the new location you requested.

Note: Throws ParseException, NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
POST https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/provisionlocation HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/xml;charset=UTF-8

<provisionLocation>
   <locationid>67880038</locationid>
</provisionLocation>
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:provisionLocationResponse xmlns:ns0="http://dashcs.com/api/v1/emergency">
    <LocationStatus>
        <code>PROVISIONED</code>
        <description>Location is currently provisioned for URI</description>
    </LocationStatus>
</ns0:provisionLocationResponse>
```

{% endmethod %}
