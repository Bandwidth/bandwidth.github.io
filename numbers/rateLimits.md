## Rate Limits for Number & Account Management

Bandwidth implements Ratelimits for our number ordering and account management APIs

---

### Sample Rate Limit Response (HTTP-429)

BaseURL: `https://dashboard.bandwidth.com/api/`

When a rate limit is hit for endpoints on the `https://dashboard.bandwidth.com/api/` API Bandwidth will respond with a `HTTP-429` error indicating that the limit has been reached.

The response includes a `X-RateLimit-Reset` header value with the epoch time **in seconds** when the limit will reset. Bandwidth recommends waiting until the reset-time has been reached `wait_in_seconds(resetTime - currentTime);` before sending any new requests to the same endpoint.

```http
HTTP/1.1 429
X-RateLimit-Reset: 1590033530
Date: Thu, 21 May 2020 03:57:36 GMT
Content-Length: 0
Connection: close
```

### List of Ratelimited endpoints

#### ORDER

Endpoints related to creating & updating Orders.

| Method                         | Path                                     |
|:-------------------------------|:-----------------------------------------|
| <code class="post">POST</code> | `/accounts/{accountId}/orders`           |
| <code class="put">PUT</code>   | `/accounts/{accountId}/orders/{orderId}` |

#### SEARCH

Endpoints related to searching and pulling information.

| Method                       | Path                                                     |
|:-----------------------------|:---------------------------------------------------------|
| <code class="get">GET</code> | `/accounts/{accountId}/csrs`                             |
| <code class="get">GET</code> | `/cities`                                                |
| <code class="get">GET</code> | `/rateCenters`                                           |
| <code class="get">GET</code> | `/accounts/{accountId}/availableNumbers`                 |
| <code class="get">GET</code> | `/accounts/{accountId}/emergencyNotificationGroupOrders` |
| <code class="get">GET</code> | `/accounts/{accountId}/bulkPortins`                      |
| <code class="get">GET</code> | `/accounts/{accountId}/bulkPortins/{orderId}`            |

#### MOVE_TNS

Endpoints related to phone number management. Specifically moving a batch of phone numbers from one SIPPEER to another.

| Method                         | Path                                                                |
|:-------------------------------|:--------------------------------------------------------------------|
| <code class="post">POST</code> | `/accounts/{accountId}/sites/{siteId}/sippeers/{sipPeerId}/movetns` |

#### DISCONNECT

Endpoints related to disconnecting a phone number.

| Method                         | Path                                |
|:-------------------------------|:------------------------------------|
| <code class="post">POST</code> | `/accounts/{accountId}/disconnects` |

#### IMPORT_ACCOUNT

Endpoints related to importing phone numbers for use with Hosted Messaging.

| Method                         | Path                                    |
|:-------------------------------|:----------------------------------------|
| <code class="post">POST</code> | `/accounts/{accountid}/importToAccount` |

#### PORT_IN

Endpoints related to creating and managing Portins

| Method                             | Path                                                                |
|:-----------------------------------|:--------------------------------------------------------------------|
| <code class="post">POST</code>     | `/accounts/{accountId}/portins`                                     |
| <code class="put">PUT</code>       | `/accounts/{accountId}/portins/{orderid}`                           |
| <code class="delete">DELETE</code> | `/accounts/{accountId}/portins/{orderid}`                           |
| <code class="get">GET</code>       | `/accounts/{accountId}/portins/availabilityCheck/{telephonenumber}` |
| <code class="post">POST</code>     | `/accounts/{accountId}/lnpchecker`                                  |

#### BULK_PORT_IN

Endpoints related to creating and managing Bulk Port orders.

| Method                             | Path                                                                |
|:-----------------------------------|:--------------------------------------------------------------------|
| <code class="get">GET</code>       | `/bulkPortins/{orderId}`                                            |
| <code class="post">POST</code>     | `/accounts/{accountId}/bulkportins`                                 |
| <code class="put">PUT</code>       | `/accounts/{accountId}/bulkportins/{orderId}`                       |
| <code class="patch">PATCH</code>   | `/accounts/{accountId}/bulkportins/{orderId}`                       |
| <code class="delete">DELETE</code> | `/accounts/{accountId}/bulkportins/{orderId}`                       |
| <code class="get">GET</code>       | `/accounts/{accountId}/bulkportins/{orderId}/portinList`            |
| <code class="put">PUT</code>       | `/accounts/{accountId}/bulkportins/{orderId}/portinList`            |
| <code class="put">PUT</code>       | `/accounts/{accountId}/bulkportins/{orderid}/{tnList}`              |
| <code class="get">GET</code>       | `/accounts/{accountId}/bulkportins/{orderid}/{tnList}`              |

#### PORT_OUT

Endpoints related to creating and managing Portouts

| Method                             | Path                                       |
|:-----------------------------------|:-------------------------------------------|
| <code class="post">POST</code>     | `/accounts/{accountId}/portouts`           |
| <code class="put">PUT</code>       | `/accounts/{accountId}/portouts`           |
| <code class="put">PUT</code>       | `/accounts/{accountId}/portouts/{orderId}` |
| <code class="delete">DELETE</code> | `/accounts/{accountId}/portouts`           |

#### SUBSCRIPTION

Endpoints related to creating and managing Subscriptions.

| Method                             | Path                                                   |
|:-----------------------------------|:-------------------------------------------------------|
| <code class="post">POST</code>     | `/accounts/{accountId}/subscriptions`                  |
| <code class="patch">PATCH</code>     | `/accounts/{accountId}/subscriptions/{subscriptionId}` |
| <code class="delete">DELETE</code> | `/accounts/{accountId}/subscriptions/{subscriptionId}` |
| <code class="get">GET</code>       | `/accounts/{accountId}/subscriptions`                  |
| <code class="get">GET</code>       | `/accounts/{accountId}/subscriptions/{subscriptionId}` |

#### COVERED_RATECENTERS

Endpoints related to getting information about Rate Centers.

| Method                       | Path                                        |
|:-----------------------------|:--------------------------------------------|
| <code class="get">GET</code> | `/coveredRateCenters`                       |
| <code class="get">GET</code> | `/coveredRateCenters/{coveredRateCenterId}` |

#### REPORTS

Endpoints related to generating reports.

| Method                         | Path                                                 |
|:-------------------------------|:-----------------------------------------------------|
| <code class="post">POST</code> | `/reports/{reportId}/instances`                      |
| <code class="post">POST</code> | `/accounts/{accountId}/reports/{reportid}/instances` |


#### AVAILABLE_NPANXX

Endpoints related to searching for rate centers and phone numbers.

| Method                       | Path                                    |
|:-----------------------------|:----------------------------------------|
| <code class="get">GET</code> | `/availableNumbers`                     |
| <code class="get">GET</code> | `/availableNumbers/totals`              |
| <code class="get">GET</code> | `/accounts/{accountId}/availableNpaNxx` |

#### INSERVICE_NPANXX

Endpoints related to pulling information about active phone numbers on an account.

| Method                       | Path                                                       |
|:-----------------------------|:-----------------------------------------------------------|
| <code class="get">GET</code> | `/accounts/{accountId}/inserviceNumbers`                   |
| <code class="get">GET</code> | `/accounts/{accountId}/sites/{siteId}/inserviceNumbers`    |
| <code class="get">GET</code> | `/accounts/{accountId}/inserviceNumbers/totals`            |
| <code class="get">GET</code> | `/accounts/{accountId}/inserviceNumbers/{telephoneNumber}` |

#### EVS_GEOCODING

Endpoints related to creating a geoCoded response for the e911 services.

| Method                         | Path                                   |
|:-------------------------------|:---------------------------------------|
| <code class="post">POST</code> | `/accounts/{accountId}/geocodeRequest` |

#### E911_ORDER

Endpoints related to creating an e911 Order.

| Method                         | Path                          |
|:-------------------------------|:------------------------------|
| <code class="post">POST</code> | `/accounts/{accountId}/e911s` |

#### SEARCH_TYPEAHEAD

| Method                       | Path         |
|:-----------------------------|:-------------|
| <code class="get">GET</code> | `/typeahead` |

#### HISTORY

Endpoints related to pulling historical information.

| Method                       | Path                                                        |
|:-----------------------------|:------------------------------------------------------------|
| <code class="get">GET</code> | `/portins`                                                  |
| <code class="get">GET</code> | `/portins/{orderId}`                                        |
| <code class="get">GET</code> | `/portins/{orderId}/history`                                |
| <code class="get">GET</code> | `/accounts/{accountId}/orders`                              |
| <code class="get">GET</code> | `/accounts/{accountId}/sites/{siteId}/orders`               |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/totals`                       |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}`                    |
| <code class="get">GET</code> | `/accounts/{accountId}/sites/{siteId}/orders/{orderId}`     |
| <code class="get">GET</code> | `/accounts/{accountId}/sites/{siteId}/orders/{orderId}/tns` |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}/history`            |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}/totals`             |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}/tns`                |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}/areaCodes`          |
| <code class="get">GET</code> | `/accounts/{accountId}/orders/{orderId}/npaNxx`             |
| <code class="get">GET</code> | `tns/{fullnumber}`                                          |
| <code class="get">GET</code> | `tns/{fullnumber}/ratecenter`                               |
| <code class="get">GET</code> | `tns/{fullnumber}/lata`                                     |
| <code class="get">GET</code> | `/accounts/{accountId}/disconnects`                         |
| <code class="get">GET</code> | `/accounts/{accountId}/disconnects/{orderId}`               |
| <code class="get">GET</code> | `/accounts/{accountId}/importToAccount/{orderid}`           |
| <code class="get">GET</code> | `/accounts/{accountId}/importToAccount/batches`             |
| <code class="get">GET</code> | `/accounts/{accountId}/importToAccount/batches/{batchId}`   |
| <code class="get">GET</code> | `/accounts/{accountId}/importToAccount`                     |
| <code class="get">GET</code> | `/accounts/{accountId}/portins`                             |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}`                   |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/totals`                      |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/status`                      |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}/totals`            |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}/areaCodes`         |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}/npaNxx`            |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}/tns`               |
| <code class="get">GET</code> | `/accounts/{accountId}/portins/{orderid}/history`           |
| <code class="get">GET</code> | `/accounts/{accountId}/portouts`                            |
| <code class="get">GET</code> | `/accounts/{accountId}/portouts/{orderid}`                  |
| <code class="get">GET</code> | `/accounts/{accountId}/portouts/totals`                     |
| <code class="get">GET</code> | `/accounts/{accountId}/portouts/status`                     |
| <code class="get">GET</code> | `/accounts/{accountId}/sites/{siteId}/portins`              |
| <code class="get">GET</code> | `/bulkPortins`                                              |
| <code class="get">GET</code> | `/accounts/{accountId}/bulkPortins/{orderId}/{history`      |
