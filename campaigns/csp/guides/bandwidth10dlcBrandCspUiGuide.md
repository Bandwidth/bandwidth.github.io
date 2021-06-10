{% raw %}
<section class="campaignManagementCspGuides">
{% endraw %}

# Bandwidth 10DLC CSP Brands UI Guide {#top}

This walks through how to provision, manage and view your brands through the [Bandwidth Dashboard](https://dashboard.bandwidth.com) for use with our [Campaign](../about.md), [Number Management](../../../numbers/about.md) and [Messaging](../../../messaging/about.md) API's.

## Assumptions
* You have been contracted and given access to your Bandwidth Dashboard Account
* Your account has Messaging and Campaign Management products enabled
* Your account has 10dlcCampaigns product feature enabled
* Your user has been assigned the Campaign Management user role

## Steps
1. [Register your brand](#register-your-brand)
    * [Direct Customer](#direct-customer)
    * [Reseller](#reseller)
2. [Brand List](#brand-list)
3. [Register customer brands (reseller only)](#register-customer-brands)
4. [Edit Brand](#edit-brand)
5. [Next steps](#next-steps)
    * [Register Campaigns](#register-campaigns)
    * [Create an API-only user](#create-an-api-only-user)
    * [Start developing to our Messaging APIs](#start-developing-to-our-messaging-apis)

## Register your brand
Once you log into the Bandwidth Dashboard, you should see **Campaigns** in the navigation bar. 
If you select it and you have not yet registered your brand, you will be directed to the landing page.

<img src="../../../images/campaign-landing-page.png" style="max-width:95%"><br/>

Once on the landing page, if you select **REGISTER MY BRAND** you will be prompted with a pop-up modal with a series of forms to register your 1) reseller if necessary and 2) brand.

<img src="../../../images/register-my-brand.png" style="max-width:95%"><br/>

The first section is where you will enter your brand details. Once you enter all the required information, you can hit next to go to the Brand Contact Details section.<br/>

### Direct Customer
If you are a direct customer and will not be managing brands and campaigns for other companies, you can select the Direct Customer option and submit the form to register your brand.

<img src="../../../images/register-my-brand-direct.png" style="max-width:95%"><br/>

### Reseller
If you are a reseller, you can select the Reseller option and enter the required information to submit and register your reseller and brand.

<img src="../../../images/register-my-brand-reseller.png" style="max-width:95%"><br/>

## Brand List
After successful registration of your brand, you will be directed to the Brand List page. If you are a Direct Customer, you will only be able to see your brand. 
If you are a Reseller, you will see your Customer Brand list in addition to your brand.<br/>

<img src="../../../images/brand-list-page.png" style="max-width:95%"><br/>

## Register Customer Brands
If you are a reseller, you can add as many customer brands as you would like. 
From the brand list page if you select the **ADD CUSTOMER BRAND** button, you will be prompted again with the Brand Details form.<br/>

<img src="../../../images/register-customer-brand.png" style="max-width:95%"><br/>

## Edit Brands
You can edit both your brand, and your customer brands by hitting the **EDIT** button next to the brand you would like to update. 
Select Brand fields are editable once they have been registered, and may trigger a re-score of the brand from TCR. <br/>

<img src="../../../images/edit-my-brand.png" style="max-width:95%"><br/>

## Next steps
### Register Campaigns
After registering your brand(s) you can use them to [register campaigns](bandwidth10dlcCampaignCspUiGuide.md).

### Create an API-only user
Create an [API-only user](../../../guides/accountCredentials.md) to validate your API calls. Unlike user accounts that can access the Bandwidth Dashboard User Interface, users restricted to API only access won’t require periodic password resets.

### Start developing to our Messaging APIs
After you've finished importing your campaigns, explore our inventory and order a phone number to your account. Once you have a phone number, you are ready to [send your first text message](../../../messaging/methods/messages/createMessage.md). For help, check out our [SDK’s and Postman Collection](../../../sdks/about.md).
