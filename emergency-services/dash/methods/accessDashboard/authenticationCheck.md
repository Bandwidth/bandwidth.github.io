{% method %}

## Authentication Check

### Request URL

<code class="get">GET</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/authenticationcheck`

A convenience method that always returns true. You can use this to make sure your authentication is working.  

{% common %}

{% sample lang='http' %}

```http
GET https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/authenticationcheck HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns2:getAuthenticationCheckResponse xmlns:ns2="http://dashcs.com/api/v1/emergency">
    <AuthValid>true</AuthValid>
</ns2:getAuthenticationCheckResponse>
```

{% endmethod %}
