{% raw %}
<section class="emergencyServicesAbout">
{% endraw %}

# 911 Access Dashboard
This documentation pertains to the 911 Access Dashboard REST API. [Click here](soap.md) for the SOAP API overview.

## 911 Access Dashboard Base URLs
| Environment | URL                                                                        |
|:------------|:---------------------------------------------------------------------------|
| Production  | `https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1`         |
| Staging     | `https://staging-service.dashcs.com/dash-api/xml/emergencyprovisioning/v1` |

### 911 Access Dashboard REST API Reference Index
| Verb                           | Resource                                                                                    | Description                                                                                               |               
|:-------------------------------|:--------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| <code class="get">GET</code>   | [`/authenticationcheck`](../methods/accessDashboard/authenticationCheck.md)                 | Convenience method that always returns true. You can use this to make sure your authentication is working |
| <code class="get">GET</code>   | [`/uris`](../methods/accessDashboard/uris.md)                                               | Find all of the URIs belonging to the requesting customer that has active emergency services              |
| <code class="get">GET</code>   | [`/locationsbyuri/{uri}`](../methods/accessDashboard/locationsByUri.md)                     | Find all the locations associated with the given URI                                                      |
| <code class="get">GET</code>   | [`/provisionedlocationbyuri/{uri}`](../methods/accessDashboard/provisionedLocationByUri.md) | Get the provisioned location associated with a URI                                                        |
| <code class="get">GET</code>   | [`/provisionedlocationhistorybyuri/{uri}`](../methods/accessDashboard/historyByUri.md)      | Given a URI find the provisioned location and histories                                                   |
| <code class="post">POST</code> | [`/validatelocation`](../methods/accessDashboard/validateLocation.md)                       | Validate and correct the location if necessary                                                            |
| <code class="post">POST</code> | [`/addlocation`](../methods/accessDashboard/addLocation.md)                                 | Associate a Location with a URI                                                                           |
| <code class="post">POST</code> | [`/removelocation`](../methods/accessDashboard/removeLocation.md)                           | Given a location ID, remove the location                                                                  |
| <code class="post">POST</code> | [`/removeuri`](../methods/accessDashboard/removeUri.md)                                     | Remove a given URI                                                                                        |
| <code class="post">POST</code> | [`/provisionlocation`](../methods/accessDashboard/provisionLocation.md)                     | Activates a specific location for emergency service                                                       |

## 911 Access Dashboard Emergency Notifications API Base URL
| Environment | URL                                     |
|:------------|:----------------------------------------|
| Production  | `https://evs-api.bandwidth.com/api/v1`  |
| Staging     | `https://test.evs.bandwidth.com/api/v1` |

### Notifications REST API Reference Index  
| Verb                               | Resource                                                                                                                     | Description                                                         |               
|:-----------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------|
| <code class="get">GET</code>       | [`/notifications/notificationRecipients`](../methods/notifications/listRecipients.md)                                        | Return a list of notification recipients                            |
| <code class="post">POST</code>     | [`/notifications/notificationRecipients`](../methods/notifications/createRecipient.md)                                       | Create a new notification recipient                                 |
| <code class="get">GET</code>       | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/recipientInformation.md)                    | Return a single notification recipient                              |
| <code class="patch">PATCH</code>   | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/updateRecipient.md)                         | Modify a single notification recipient                              |
| <code class="delete">DELETE</code> | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/removeRecipient.md)                         | Delete a single notification recipient                              |
| <code class="get">GET</code>       | [`notifications/notificationRecipients/{recipientId}/associations`](../methods/notifications/getAssociations.md)             | Return a list of endpoints associated with a notification recipient |
| <code class="patch">PATCH</code>   | [`notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}`](../methods/notifications/updateAssociation.md) | Associate a notification recipient to an endpoint                   |
| <code class="delete">DELETE</code> | [`notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}`](../methods/notifications/removeAssociation.md) | Remove a notification recipients association to an endpoint         |
