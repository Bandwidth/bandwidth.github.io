{% method %}

## Get URIs

Find all of the URIs belonging to the requesting customer that has active emergency services.   

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/uris`

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/uris HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns2:getURIsResponse xmlns:ns2="http://dashcs.com/api/v1/emergency">
    <URIs>
        <uris>
            <callername>Caller One</callername>
            <uri>tel:19195551234</uri>
        </uris>
        <uris>
            <callername>Caller Two</callername>
            <uri>tel:19195554321</uri>
        </uris>
        <uris>
            <callername>Caller Three</callername>
            <uri>tel:19195559876</uri>
        </uris>
    </URIs>
</ns2:getURIsResponse>
```

{% endmethod %}
