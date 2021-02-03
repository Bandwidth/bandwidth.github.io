{% raw %}
<section class="emergencyServicesAbout">
{% endraw %}

# 911 Access Dashboard Notifications API

## 911 Access Dashboard Emergency Notifications API Base URL
`https://evs-api.bandwidth.com/api/v1`

### Notifications REST API Reference Index  
| Verb                               | Resource                                                                    | Description                                                                                                          |               
|:-----------------------------------|:----------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------|
| <code class="get">GET</code>       | [`/notifications/notificationRecipients`](../methods/notifications/listRecipients.md)                                       | Return a list of notification recipients                            |
| <code class="post">POST</code>     | [`/notifications/notificationRecipients`](../methods/notifications/createRecipient.md)                                      | Create a new notification recipient                                 |
| <code class="get">GET</code>       | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/recipientInformation.md)                    | Return a single notification recipient                              |
| <code class="patch">PATCH</code>   | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/updateRecipient.md)                         | Modify a single notification recipient                              |
| <code class="delete">DELETE</code> | [`/notifications/notificationRecipients/{recipientId}`](../methods/notifications/removeRecipient.md)                         | Delete a single notification recipient                              |
| <code class="get">GET</code>       | [`notifications/notificationRecipients/{recipientId}/associations`](../methods/notifications/getAssociations.md)             | Return a list of endpoints associated with a notification recipient |
| <code class="patch">PATCH</code>   | [`notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}`](../methods/notifications/updateAssociation.md) | Associate a notification recipient to an endpoint                   |
| <code class="delete">DELETE</code> | [`notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}`](../methods/notifications/removeAssociation.md) | Remove a notification recipients association to an endpoint         |
