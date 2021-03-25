{% multimethod %}
{% endmultimethod %}

# Bandwidth 10DLC Campaigns Import API Guide {#top}

This walks through how to programmatically import and view your campaigns _via APIs_ for use with our [Number Management](../../numbers/about.md) and [Messaging](../../messaging/about.md) API's.

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Your account has Messaging and Campaign Management products enabled
* Your account has 10dlcImportCampaigns product feature enabled
* Your account has your CSP ID associated to it
* You have provisioned campaigns with The Campaign Registry (TCR) through your Campaign Service Provider (CSP) 

## API Authentication

The Account Management API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Getting Started

* [Get imported campaigns](#get-imported-campaigns)
* [Import campaign](#import-campaign)

## Get imported campaigns

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/campaignManagement/10dlc/campaigns/imports?page={page}&size={size}`

#### Request Authentication

The [imports](../applications/about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

{% common %}

### GET Imports

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/campaignManagement/10dlc/campaigns/imports?page=1&size=2 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<LongCodeImportCampaignsResponse>
    <ImportedCampaigns>
        <ImportedCampaign>
            <CampaignId>CCOPVEY</CampaignId>
            <Description>Test 9</Description>
            <MessageClass>Campaign-E</MessageClass>
            <CreateDate>2021-03-18T12:50:45Z</CreateDate>
            <Status>ACTIVE</Status>
        </ImportedCampaign>
        <ImportedCampaign>
            <CampaignId>CCOPRTM</CampaignId>
            <Description>Test 10</Description>
            <MessageClass>Campaign-E</MessageClass>
            <CreateDate>2021-03-19T09:36:18Z</CreateDate>
            <Status>ACTIVE</Status>
        </ImportedCampaign>
    </ImportedCampaigns>
</LongCodeImportCampaignsResponse>
```

{% sample lang="csharp" %}

```csharp
var messageApplication = await Application.Create(client, new Application
{
    AppName = "BandwidthMsgApplication",
    ServiceType = "Messaging-V2",
    MsgCallbackUrl = "https://yourcallback.com"
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :app_name => "BandwidthMsgApplication",
  :service_type => "Messaging-V2",
  :msg_callback_url => "https://yourcallback.com"
}
application = BandwidthIris::Applications.create_application(data)
puts application
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{applicationID}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{messaging-applicationId}}</ApplicationId>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
    <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
    </CallbackCreds>
  </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---

## Import campaign

<aside class="alert general small">
<p>
Save the <code>Application Id</code> after creating the application.
</p>
</aside>

The [Application](../applications/about.md) contains the HTTP URL you want to use for inbound calls.

Learn more about [applications in the documentation](../applications/about.md).

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`


| Parameters                 | Mandatory | Description                                                                                                                |
|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`              | Yes       | Set to `Voice-V2`                                                                                                          |
| `AppName`                  | Yes       | Plain text name of the application                                                                                         |
| `CallInitiatedCallbackUrl` | Yes       | Url to receive **actionable** [voice events](../../voice/bxml/callbacks/about.md)                                          |
| `CallStatusCallbackUrl`    | No        | Url to receive [voice events](../../voice/bxml/callbacks/about.md) NOT related to Initiated. Such as: rejected or hung up. |
| `CallbackCreds`            | No        | Basic auth credentials to apply to your [voice events](../../voice/bxml/callbacks/about.md)                                |
| `CallbackCreds.UserId`     | No        | Basic auth `UserId`                                                                                                        |
| `CallbackCreds.Password`   | No        | Basic auth `Password`                                                                                                      |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
  <ServiceType>Voice-V2</ServiceType>
  <AppName>Production Server2</AppName>
  <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
  <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
  <CallbackCreds>
    <UserId>Your-User-id</UserId>
    <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% sample lang="csharp" %}

```csharp
var voiceApplication = await Application.Create(client, new Application
{
    AppName = "BandwidthVoiceApplication",
    ServiceType = "Voice-V2",
    CallInitiatedCallbackUrl = "https://yourcallback.com"
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :app_name => "BandwidthVoiceApplication",
  :service_type => "Voice-V2",
  :call_initiated_callback_url => "https://yourcallback.com"
}
application = BandwidthIris::Applications.create_application(data)
puts application
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{voice-applicationId}}

<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{voice-applicationId}}</ApplicationId>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server2</AppName>
    <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
    <CallInitiatedMethod>POST</CallInitiatedMethod>
    <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
    <CallStatusMethod>POST</CallStatusMethod>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
    </CallbackCreds>
  </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---
