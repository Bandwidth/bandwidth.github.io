{% method %}

## Remove URI

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/removeuri`

You send the URI you would like removed. We remove that URI from the system. We also remove all locations that were associated with the URI. Any provisioned locations are also unprovisioned.

Note: Throws NotFoundException, LockedException

{% common %}

{% sample lang='http' %}

```http
POST https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/removeuri HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/xml;charset=UTF-8

<removeUri>
   <uri>13035551236</uri>
</removeUri>
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns0:removeURIResponse xmlns:ns0="http://dashcs.com/api/v1/emergency">
    <URIStatus>
        <code>REMOVED</code>
        <description>URI removed from system</description>
    </URIStatus>
</ns0:removeURIResponse>
```

{% endmethod %}
