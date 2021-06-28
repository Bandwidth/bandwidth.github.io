{% raw %}
<section class="campaignManagementImportGuides">
{% endraw %}

# Managing Multiple CSP IDs Guide {#top}

This walks through how to manage campaigns from multiple CSP IDs on a single CSP ID.

## Assumptions

* You have contracted with The Campaign Registry (TCR) and have received a CSP ID <br/>
* You have campaigns from multiple CSP IDs you need to manage on our platform

## Important Notes

* We only allow for one CSP ID to be associated to your Bandwidth Dashboard Account.

## Steps

1. [Dashboard account configuration](#dashboard-account-configuration)
2. [Sharing campaigns to your CSP ID via TCR CSP API](#sharing-campaigns-to-your-csp-id-via-tcr-csp-api)

## Dashboard account configuration
Once you contract for 10DLC Campaigns, you will need to provide your account manager with your CSP ID provided by TCR. They will add the CSP ID to your Dashboard Account. <br/> <br/>

If you need to manage campaigns provisioned by multiple CSP IDs, you will need to have those CSPs share the campaigns with the CSP ID on your Dashboard Account.

## Sharing campaigns to your CSP ID via TCR CSP API
A CSP can share a campaign with an upstream CSP ID by using the TCR CSP PUT https://csp-api.campaignregistry.com/v1/restAPI/campaign/{campaignId}/sharing/{upstreamCnpId} with their API credentials. <br/><br/>

As an example say you have a customer with CSP ID XYZ123 and Campaign ID C12345. You can have them share the campaign with the CSP ID on your dashboard account HSR542 as follows - PUT https://csp-api.campaignregistry.com/v1/restAPI/campaign/C12345/sharing/HSR542 <br/><br/>

After successfully sharing, you will be able to import campaign C12345 onto your Dashboard account.

### Next Steps
Now that your partners have successfully shared their campaigns with your CSP ID, you can import to your account via [Dashboard UI](bandwidth10dlcCampaignImportUiGuide.md) or [REST API](bandwidth10dlcCampaignImportUiGuide.md)

---
