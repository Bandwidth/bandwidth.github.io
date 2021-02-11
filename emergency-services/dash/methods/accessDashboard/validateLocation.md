{% method %}

## Validate Location

### Request URL

<code class="post">POST</code>`https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/validatelocation`

We validate and correct the location if necessary. You don’t have to use this method but you can call it before addLocation. When you call addLocation we still have checks in place to make sure that we have a high confidence in the address you sent.
We check with multiple geocode vendors and internal data sources to understand your location and establish a level of confidence. This will give you a good indication on whether or not emergency provisioning will be successful.

The validateLocation might return multiple addresses. Your client code should be prepared to handle this. When this happens it doesn’t mean that your original address is unable to be geocoded. It means that we were able to find similar addresses to the one you provided.

One approach is to present these options to your user and ask them if any of the result addresses look correct. Then you could take that data, send it to addLocation and be confident that it will pass our geocoding checks.

It’s not necessary or advisable to take the results of validateLocation and send them back to the validateLocation method. When we return a result that says GEOCODED that means that if the result is acceptable to you (meaning it still looks like the address you originally sent) then you can now send the results to addLocation.

Note: Throws ParseException
You don’t have to use the validateLocation method at all. Here’s a flow chart that shows provisioning without use of validateLocation.

<img src="../../../../images/dash_validate_location.png" style="max-width:95%">

{% common %}

{% sample lang='http' %}

```http
POST https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/validatelocation HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

<validateLocation>
 <location>
   <address1>2040 Larimer</address1>
   <community>Denver</community>
   <state>CO</state>
   <postalcode>80205</postalcode>
   <type>ADDRESS</type>
 </location>
</validateLocation>
```

```http
Status: 200 OK
Content-Type: text/xml; charset=UTF-8

<ns1:validateLocationResponse xmlns:ns1=”http://dashcs.com/api/v1/emergency”>
  <Location>
    <address1>2040 Larimer St</address1>
    <community>Denver</community>
    <latitude>39.753439</latitude>
    <legacydata>
    <longitude>-104.991949</longitude>
    <plusfour>2015</plusfour>
    <postalcode>80205</postalcode>
    <state>CO</state>
    <status>
      <code>GEOCODED</code>
      <description>Location is geocoded</description>
    </status>
    <type>ADDRESS</type>
 </Location>
</ns1:validateLocationResponse>
```

{% endmethod %}
