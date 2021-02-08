{% raw %}
<section class="emergencyServicesAbout">
{% endraw %}

# 911 Access Dashboard API Reference

## 911 Access Dashboard Emergency Notifications API Base URL
| Environment | URL                                                                        |
|:------------|:---------------------------------------------------------------------------|
| Production  | `https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1`         |
| Staging     | `https://staging-service.dashcs.com/dash-api/xml/emergencyprovisioning/v1` |

## 911 Access Dashboard REST API Methods
| Verb                           | Resource                                                                                    | Description                                                                                               |               
|:-------------------------------|:--------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| <code class="get">GET</code>   | [`/authenticationcheck`](../methods/accessDashboard/authenticationCheck.md)                 | Convenience method that always returns true. You can use this to make sure your authentication is working |
| <code class="get">GET</code>   | [`/uris`](../methods/accessDashboard/getUris.md)                                               | Find all of the URIs belonging to the requesting customer that has active emergency services              |
| <code class="get">GET</code>   | [`/locationsbyuri/{uri}`](../methods/accessDashboard/locationsByUri.md)                     | Find all the locations associated with the given URI                                                      |
| <code class="get">GET</code>   | [`/provisionedlocationbyuri/{uri}`](../methods/accessDashboard/provisionedLocationByUri.md) | Get the provisioned location associated with a URI                                                        |
| <code class="post">POST</code> | [`/provisionedlocationhistorybyuri/{uri}`](../methods/accessDashboard/historyByUri.md)      | Given a URI find the provisioned location and histories                                                   |
| <code class="post">POST</code> | [`/validatelocation`](../methods/accessDashboard/validateLocation.md)                       | Validate and correct the location if necessary                                                            |
| <code class="post">POST</code> | [`/addlocation`](../methods/accessDashboard/addLocation.md)                                 | Associate a Location with a URI                                                                           |
| <code class="post">POST</code> | [`/removelocation`](../methods/accessDashboard/removeLocation.md)                           | Given a location ID, remove the location                                                                  |
| <code class="post">POST</code> | [`/removeuri`](../methods/accessDashboard/removeUri.md)                                     | Remove a given URI                                                                                        |
| <code class="post">POST</code> | [`/provisionlocation`](../methods/accessDashboard/provisionLocation.md)                     | Activates a specific location for emergency service                                                       |
