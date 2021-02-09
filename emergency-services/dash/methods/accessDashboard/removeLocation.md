{% method %}

## Remove Location

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/removelocation`

Given a location ID, remove the location.

Note: Throws NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
POST https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/removelocation HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/xml;charset=UTF-8

<removeLocation>
 <locationid>77</locationid>
</removeLocation>
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:removeLocationResponse xmlns:ns0="http://dashcs.com/api/v1/emergency">
    <LocationStatus>
        <code>REMOVED</code>
        <description>Location removed from the system</description>
    </LocationStatus>
</ns0:removeLocationResponse>
```

{% endmethod %}
