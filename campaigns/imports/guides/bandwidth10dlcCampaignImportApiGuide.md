{% multimethod %}
{% endmultimethod %}

# Bandwidth 10DLC Campaigns Import API Guide {#top}

This walks through how to programmatically import and view your campaigns _via APIs_ for use with our [Number Management](../../../numbers/about.md) and [Messaging](../../../messaging/about.md) API's.

## Assumptions

* Familiarity with [Account API Credentials](../../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Your account has Messaging and Campaign Management products enabled
* Your account has 10dlcImportCampaigns product feature enabled
* Your account has your CSP ID associated to it
* Your API User has the Campaign Management role assigned
* You have provisioned campaigns with The Campaign Registry (TCR) through your Campaign Service Provider (CSP)
* You have shared your provisioned campaigns with [Bandwidth DCA](campaignFaqs.md#5-how-do-i-share-my-campaigns-with-bandwidth-dca)

## Important Notes

* We only allow tn assignment for campaigns that have been approved by all carriers participating through TCR. 
While provisioning your campaigns through your CSP, make sure to provision with all participating carriers. 
If you are registering as your own CSP, exclude the 'mnoIds' property on the TCR CSP /campaigns/campaignBuilder endpoint request body. 
If you do not provision to all carriers, you will have to either work with TCR to remedy or create another campaign in which both campaigns will be subject to fees.
* If you get a '403 Unauthorized' error response while making an HTTP Request to any of the Import endpoints,
you will need to reach out to the Implementation team to get the Campaign Management role assigned to your API User.
* TCR currently has rate limits set on their HTTP REST endpoints. During high volume events, it is possible our APIs will be rate limited and respond with '429 Too Many Requests'.

## API Authentication

The Account Management API resources are authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds).

## Getting Started

* [Get imported campaigns](#get-imported-campaigns)
* [Import campaign](#import-campaign)
* [Assign a campaign to a TN](#assign-a-campaign-to-a-tn)
* [Bulk Assign a campaign to multiple TNs](#bulk-assign-a-campaign-to-multiple-tns)

## Get imported campaign

{% extendmethod %}

#### Request URL
<code class="post">GET</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports/{campaignId}`

#### Request Authentication

The [imports](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### GET Imported Campaign by Campaign ID

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports/CA114BN HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports/CA114BN

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LongCodeImportCampaignResponse>
    <ImportedCampaign>
        <CampaignId>CA114BN</CampaignId>
        <Description>Test 1</Description>
        <MessageClass>Campaign-E</MessageClass>
        <CreateDate>2021-03-18T12:50:45Z</CreateDate>
        <Status>ACTIVE</Status>
        <MnoStatusList>
            <MnoStatus>
                <MnoName>ATT</MnoName>
                <MnoId>10017</MnoId>
                <Status>APPROVED</Status>
                <MnoName>TMO</MnoName>
                <MnoId>10035</MnoId>
                <Status>APPROVED</Status>
            </MnoStatus>
        </MnoStatusList>
    </ImportedCampaign>
</LongCodeImportCampaignResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports/CA114BN

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LongCodeImportCampaignResponse>
   <ResponseStatus>
        <ErrorCode>12055</ErrorCode>
        <Description>
            10DLCImportCampaign feature is not enabled on account
         </Description>
   </ResponseStatus>
</LongCodeImportCampaignResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 404 Not Found
```

{% endextendmethod %}

## Get imported campaigns

{% extendmethod %}

#### Request URL
<code class="post">GET</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page={page}&size={size}`

#### Request Authentication

The [imports](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### GET Imports

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page=1&size=2 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page=1&size=2

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LongCodeImportCampaignsResponse>
    <ImportedCampaigns>
        <ImportedCampaign>
            <CampaignId>CCOPVEY</CampaignId>
            <Description>Test 9</Description>
            <MessageClass>Campaign-E</MessageClass>
            <CreateDate>2021-03-18T12:50:45Z</CreateDate>
            <Status>ACTIVE</Status>
            <MnoStatusList>
                <MnoStatus>
                    <MnoName>ATT</MnoName>
                    <MnoId>10017</MnoId>
                    <Status>APPROVED</Status>
                    <MnoName>TMO</MnoName>
                    <MnoId>10035</MnoId>
                    <Status>REVIEW</Status>
                </MnoStatus>
            </MnoStatusList>
        </ImportedCampaign>
        <ImportedCampaign>
            <CampaignId>CCOPRTM</CampaignId>
            <Description>Test 10</Description>
            <MessageClass>Campaign-E</MessageClass>
            <CreateDate>2021-03-19T09:36:18Z</CreateDate>
            <Status>ACTIVE</Status>
            <MnoStatusList>
                <MnoStatus>
                    <MnoName>ATT</MnoName>
                    <MnoId>10017</MnoId>
                    <Status>REJECTED</Status>
                    <MnoName>TMO</MnoName>
                    <MnoId>10035</MnoId>
                    <Status>SUSPENDED</Status>
                </MnoStatus>
            </MnoStatusList>
        </ImportedCampaign>
    </ImportedCampaigns>
</LongCodeImportCampaignsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page=1&size=2

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LongCodeImportCampaignsResponse>
   <ResponseStatus>
        <ErrorCode>1006</ErrorCode>
        <Description>
            size must be between 1 and 25 (bounds are included)
        </Description>
   </ResponseStatus>
</LongCodeImportCampaignsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
```

{% endextendmethod %}

## Import campaign

{% extendmethod %}

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports`

| Request Body               | Mandatory | Description                                                                                                                |
|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `CampaignId`               | Yes       | Campaign ID generated by TCR                                                                                               |

### POST Imports

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<ImportedCampaign>
    <CampaignId>CJEUMDK</CampaignId>
</ImportedCampaign>

```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LongCodeImportCampaignResponse>
    <ImportedCampaign>
        <CampaignId>CJEUMDK</CampaignId>
        <Description>Test 9</Description>
        <MessageClass>Campaign-E</MessageClass>
        <CreateDate>2021-03-18T12:50:45Z</CreateDate>
        <Status>ACTIVE</Status>
            <MnoStatusList>
                <MnoStatus>
                    <MnoName>ATT</MnoName>
                    <MnoId>10017</MnoId>
                    <Status>APPROVED</Status>
                    <MnoName>TMO</MnoName>
                    <MnoId>10035</MnoId>
                    <Status>APPROVED</Status>
                </MnoStatus>
            </MnoStatusList>
    </ImportedCampaign>
</LongCodeImportCampaignResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports

<LongCodeImportCampaignResponse>
   <ResponseStatus>
        <ErrorCode>1011</ErrorCode>
        <Description>
            CampaignId is too long. Max length 12 characters.
         </Description>
   </ResponseStatus>
</LongCodeImportCampaignResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 404 Not Found
```

{% endextendmethod %}

## Assign a campaign to a TN

### Assumption
This endpoint assumes that TN(s) have already been ordered or ported into our system. For more info, please see [our number ordering](../../../numbers/guides/onDemandNumberSearchAndOrder.md) or [number porting](../../../numbers/guides/portingPhoneNumbers.md) guides.

{% extendmethod %}

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/tnoptions`

| Request Body               | Mandatory | Description                                                                                                                  |
|:---------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------|
| `TnOptionGroups`           | Yes       | 	A list of TnOptionGroup.                                                                                                    |
| `CustomerOrderId`          | No        | 	Optional value for Id set by customer. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.|

| TnOptionGroup              | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `Sms`                      | Yes       |  'on' or 'off'. Sms must be turned 'on' to enable A2pSettings  |
| `A2pSettings`              | Yes       | 	An object containing A2pSettings                              |
| `TelephoneNumbers`         | Yes       | 	A list of Telephone Numbers to assign Campaign Id             |

| A2pSettings                | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `CampaignId`               | Yes       |  The Campaign Id provided by The Campaign Registry (TCR)       |
| `Action`                   | Yes       | 	Must be set to 'asSpecified'                                  |

### POST Tn Options

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/tnoptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<TnOptionOrder>
  <TnOptionGroups>
    <TnOptionGroup>
      <Sms>on</Sms>
      <A2pSettings>
        <Action>asSpecified</Action>
        <CampaignId>CJEUMDK</CampaignId>
      </A2pSettings>
      <TelephoneNumbers>
        <TelephoneNumber>9999999999</TelephoneNumber>
        <TelephoneNumber>8888888888</TelephoneNumber>
      </TelephoneNumbers>
    </TnOptionGroup>
  </TnOptionGroups>
</TnOptionOrder>

```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/accounts/{accountId}/tnoptions

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <TnOptionOrderResponse>
        <TnOptionOrder>
            <OrderCreateDate>2021-04-14T18:17:17.791Z</OrderCreateDate>
            <AccountId>000000000</AccountId>
            <CreatedByUser>user</CreatedByUser>
            <OrderId>ac48abbe-2311-4888-ca4a-05eaa336119c</OrderId>
            <LastModifiedDate>2021-04-14T18:17:17.792Z</LastModifiedDate>
            <ProcessingStatus>RECEIVED</ProcessingStatus>
            <TnOptionGroups>
                <TnOptionGroup>
                    <Sms>on</Sms>
                    <A2pSettings>
                        <CampaignId>CAHVRZA</CampaignId>
                        <Action>asSpecified</Action>
                    </A2pSettings>
                    <TelephoneNumbers>
                        <TelephoneNumber>9999999999</TelephoneNumber>
                        <TelephoneNumber>8888888888</TelephoneNumber>
                    </TelephoneNumbers>
                </TnOptionGroup>
            </TnOptionGroups>
            <ErrorList/>
            <Warnings/>
        </TnOptionOrder>
    </TnOptionOrderResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/accounts/{accountId}/tnoptions

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderResponse>
    <ResponseStatus>
        <ErrorCode>5081</ErrorCode>
        <Description>Number Format 'wrong' is invalid.</Description>
    </ResponseStatus>
</TnOptionOrderResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 409 Conflict
```

{% endextendmethod %}

### Next Steps
There are many line options you can add to a TN. This section showed just how to turn SMS on and assign an A2P Campaign ID. For more detailed documentation on other types of TN Option Orders, please - <br/>
1. Go to the [Dashboard REST API Documentation](../../../numbers/apiReference.md)<br/>
2. Click on the /Accounts section<br/>
3. Scroll until you see /accounts/{accountId}/tnoptions<br/>
4. Click and see the POST endpoint with detailed descriptions<br/>

For more info on TNs, please see [Number Management](../../../numbers/about.md).<br/>

## Bulk Assign a campaign to multiple TNs
We do not have a publicly exposed REST endpoint for bulk TN updates. Please see how to import a csv in our [campaign import Dashboard UI guide](bandwidth10dlcCampaignImportUiGuide.md#assign-a-campaign-to-a-tn).<br/>
For more info on TNs, please see [Number Management](../../../numbers/about.md).<br/>
For more info on managing TN Line Features, please see [our managing line features guide](../../../numbers/guides/managingLineFeatures.md).

---
