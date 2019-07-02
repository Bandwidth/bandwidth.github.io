{% method %}

## List Associated Sippeers

List all associated Sippeers (_locations_) for an Application

### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{account}}/applications/{{applicationId}}/associatedsippeers`


{% common %}

### Example 1 of 1: Create a new application

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}}/associatedsippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AssociatedSipPeersResponse>
    <AssociatedSipPeers>
        <AssociatedSipPeer>
            <SiteId>13651</SiteId>
            <SiteName>Prod Sub-account</SiteName>
            <PeerId>540341</PeerId>
            <PeerName>Prod</PeerName>
        </AssociatedSipPeer>
        <AssociatedSipPeer>
            <SiteId>13622</SiteId>
            <SiteName>Dev Sub-zccount</SiteName>
            <PeerId>540349</PeerId>
            <PeerName>Dev</PeerName>
        </AssociatedSipPeer>
    </AssociatedSipPeers>
</AssociatedSipPeersResponse>
```

{% endmethod %}