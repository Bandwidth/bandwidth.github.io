# Bandwidth DASH API

Bandwidth DASH API

## DASH Base URL
| Environment | URL                                                                        |
|:------------|:---------------------------------------------------------------------------|
| Production  | `https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1`         |
| Staging     | `https://staging-service.dashcs.com/dash-api/xml/emergencyprovisioning/v1` |

### REST API Reference Index
<!--| Verb                                            | Resource               | Description |               
|:------------------------------------------------|:-----------------------|:------------|-->
The full API Reference for the DASH API can be found [here](https://support.bandwidth.com/hc/en-us/articles/115006226067-911-Dashboard-API-Guide).         

## DASH Emergency Notifications API Base URL
`https://evs-api.bandwidth.com/api/v1`

### Notifications REST API Reference Index  
| Verb                               | Resource                                                                    | Description                                                         |               
|:-----------------------------------|:----------------------------------------------------------------------------|:--------------------------------------------------------------------|
| <code class="get">GET</code>       | `/notifications/notificationRecipients/`                                    | Return a list of notification recipients                            |
| <code class="post">POST</code>     | `/notifications/notificationRecipients/`                                    | Create a new notification recipient                                 |
| <code class="get">GET</code>       | `/notifications/notificationRecipients/{recipientId}`                       | Return a single notification recipient                              |
| <code class="patch">PATCH</code>   | `/notifications/notificationRecipients/{recipientId}`                       | Modify a single notification recipient                              |
| <code class="delete">DELETE</code> | `/notifications/notificationRecipients/{recipientId}`                       | Delete a single notification recipient                              |
| <code class="get">GET</code>       | `notifications/notificationRecipients/{recipientId}/associations`           | Return a list of endpoints associated with a notification recipient |
| <code class="patch">PATCH</code>   | `notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}` | Associate a notification recipient to an endpoint                   |
| <code class="delete">DELETE</code> | `notifications/endpoints/{endpointId}/notificationRecipients/{recipientId}` | Remove a notification recipients association to an endpoint         |
