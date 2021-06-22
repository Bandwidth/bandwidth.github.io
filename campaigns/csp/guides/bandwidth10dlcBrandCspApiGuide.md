{% multimethod %}
{% endmultimethod %}

# Bandwidth 10DLC Campaigns Import API Guide {#top}

This walks through how to programmatically provision, manage and view your brands _via APIs_ for use with our [Campaign](../about.md), [Number Management](../../../numbers/about.md) and [Messaging](../../../messaging/about.md) API's.

## Assumptions

* Familiarity with [Account API Credentials](../../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Your account has Messaging and Campaign Management products enabled
* Your account has 10dlcCampaigns product feature enabled
* Your user has been assigned the Campaign Management user role

## Important Notes

* If you get a '403 Unauthorized' error response while making an HTTP Request to any of the Import endpoints, 
you will need to reach out to the Implementation team to get the Campaign Management role assigned to your API User.
* TCR currently has rate limits set on their HTTP REST endpoints. During high volume events, it is possible our APIs will be rate limited and respond with '429 Too Many Requests'.

## API Authentication

The Account Management API resources are authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds).

## Getting Started

1. [Create Campaign Settings](#create-campaign-settings)
    * [Direct Customer](#direct-customer)
    * [Reseller](#reseller)
2. [Update Campaign Settings](#update-campaign-settings)
    * [Direct Customer](#update-direct-customer)
    * [Reseller](#update-reseller)
3. [Fetch Campaign Settings](#fetch-campaign-settings)
4. [Create Brand](#create-brand)
    * [My Brand](#my-brand)
    * [Customer Brand](#customer-brand)
5. [Update Brand](#update-brand)
6. [Get Brand](#get-brand)
7. [Get Detailed Brands List](#get-detailed-brands-list)
8. [Get Abbreviated Brands List](#get-abbreviated-brands-list)


## Create campaign settings

{% extendmethod %}

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc`

| Request Body               | Mandatory | Description                                                                                                                  |
|:---------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------|
| `BusinessIdentity`         | Yes       | 	The type of customer you are, 'DirectCustomer' or 'Reseller'                                                                |
| `Reseller`                 | No        | 	Value required for 'Reseller' BusinessIdentity only. An object containing reseller information                              |

| Reseller                   | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `CompanyName`              | Yes       |  Display or company name of the reseller. Max 100 characters   |
| `Phone`                    | Yes       | 	Valid phone number in e.164 international format '+18009999999'|
| `Email`                    | Yes       | 	Valid email address of reseller contact. Max 100 characters   |

#### Request Authentication

The [10dlc](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### POST campaign settings
#### Direct Customer

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>DirectCustomer</BusinessIdentity>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>DirectCustomer</BusinessIdentity>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 429 Too Many Requests
```

#### Reseller

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>Reseller</BusinessIdentity>
      <Reseller>
        <CompanyName>Test Bandwidth Company</CompanyName>      
        <Phone>+18009999999</Phone>
        <Email>Test1@bandwidth.com</Email>
    </Reseller>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>Reseller</BusinessIdentity>
        <Reseller>
            <CompanyName>Test 1</CompanyName>
            <Phone>+18002837273</Phone>
            <Email>Test1@bandwidth.com</Email>
        </Reseller>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 429 Too Many Requests
```

{% endextendmethod %}

## Update campaign settings

{% extendmethod %}

#### Request URL
<code class="post">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc`

| Request Body               | Mandatory | Description                                                                                                                  |
|:---------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------|
| `BusinessIdentity`         | Yes       | 	The type of customer you are, 'DirectCustomer' or 'Reseller'                                                                |
| `Reseller`                 | No        | 	Value required for 'Reseller' BusinessIdentity only. An object containing reseller information                              |

| Reseller                   | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `CompanyName`              | Yes       |  Display or company name of the reseller. Max 100 characters   |
| `Phone`                    | Yes       | 	Valid phone number in e.164 international format '+18009999999'|
| `Email`                    | Yes       | 	Valid email address of reseller contact. Max 100 characters   |

#### Request Authentication

The [10dlc](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### PUT campaign settings 
#### Update Direct Customer

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>DirectCustomer</BusinessIdentity>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>DirectCustomer</BusinessIdentity>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 429 Too Many Requests
```

#### Reseller

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>Reseller</BusinessIdentity>
      <Reseller>
        <CompanyName>Test Bandwidth Company</CompanyName>      
        <Phone>+18009999999</Phone>
        <Email>Test1@bandwidth.com</Email>
    </Reseller>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>Reseller</BusinessIdentity>
        <Reseller>
            <CompanyName>Test 1</CompanyName>
            <Phone>+18002837273</Phone>
            <Email>Test1@bandwidth.com</Email>
        </Reseller>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
```

{% endextendmethod %}

## Fetch campaign settings

{% extendmethod %}

#### Request URL
<code class="post">GET</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page={page}&size={size}`

#### Request Authentication

The [imports](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### GET campaign settings

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>Reseller</BusinessIdentity>
        <Reseller>
            <CompanyName>Test Company 1</CompanyName>
            <Phone>+18009999999</Phone>
            <Email>Test1@bandwidth.com</Email>
        </Reseller>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 404 Not Found
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>4022</ErrorCode>
        <Description>Account '1111111' does not exist or is locked</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 403 Unauthorized
HTTP/1.1 404 Not Found
HTTP/1.1 429 Too Many Requests
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
HTTP/1.1 403 Unauthorized
HTTP/1.1 409 Conflict
HTTP/1.1 429 Too Many Requests
```

{% endextendmethod %}

## Create brand

{% extendmethod %}

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands`

| Request Body               | Mandatory | Description                                                                                                                  |
|:---------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------|
| `Brand`                    | Yes       | 	An object containing brand information                                                                                      |

| Brand                      | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `EntityType`               | Yes       |  Entity type behind the brand. THis is the form of business establishment. 'PRIVATE_PROFIT', 'PUBLIC_PROFIT', 'NON_PROFIT'   |
| `AltBusinessId`            | No        | 	Alternate business identifier such as DUNS, LEI, GIIN |
| `AltBusinessIdType`        | No        | 	Enum value describing AltBussinessId. 'NONE', 'DUNS', 'LEI', 'GIIN'   |
| `City`                     | No        | 	City name. Max Length 100 characters  |
| `CompanyName`              | Yes       | 	Legal Company Name. Max Length 100 characters   |
| `Country`                  | Yes       | 	ISO2 2 characters country code. Example: US - United States   |
| `DisplayName`              | Yes       | 	Display or marketing name of the brand. Max 100 characters   |
| `Ein`                      | No (Required for non-profit)  | 	Government assigned corporate tax ID. EIN is 9-digits in U.S   |
| `Email`                    | Yes      | 	Valid email address of brand support contact. Max 100 characters   |
| `Phone`                    | No       | 	Valid phone number in e.164 international format '+18009999999' |
| `PostalCode`               | No       | 	Postal codes. Use 5 digit zipcode for United States  |
| `State`                    | No       | 	State name. Must be 2 letters code for United States  |
| `StockExchange`            | No (Required for public)       | 	Stock exchange. 'NONE', NASDAQ', 'NYSE', etc.   |
| `StockSymbol`             | No (Required for public)      | 	Stock symbol  |
| `Vertical`                 | Yes      | 	Enum value describing vertical or industry segment of the brand   |
| `Website`                  | No       | 	Brand website URL. Max Length 100 characters  |
| `IsMain`                   | Yes      | 	true or false. True if creating 'My Brand', false if creating 'Customer Brand'  |


#### Request Authentication

The [10dlc](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### POST brand
#### My Brand
_Note_: Regardless of if you are a DirectCustomer or Reseller, you will need to create a 'My Brand'. You can only create one of these. 
On the Request Body you can indicate a 'My Brand' by setting the IsMain flag to true.

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<Brand>
  <EntityType>NON_PROFIT</EntityType>
  <AltBusinessId>111111111</AltBusinessId>
  <AltBusinessIdType>DUNS</AltBusinessIdType>
  <City>Raleigh</City>
  <CompanyName>Bandwidth</CompanyName>
  <Country>US</Country>
  <DisplayName>Bandwidth</DisplayName>
  <Ein>111111111</Ein>
  <Email>Test1@bandwidth.com</Email>
  <Phone>+18009999999</Phone>
  <PostalCode>27606</PostalCode>
  <State>NC</State>
  <StockExchange>NASDAQ</StockExchange>
  <StockSymbol>BAND</StockSymbol>
  <Vertical>COMMUNICATION</Vertical>
  <Website>https://www.bandwidth.com</Website>
  <IsMain>true</IsMain>
</Brand>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BrandResponse>
    <Brand>
      <BrandId>BJDHM3</BrandId>
      <CspId>CMHSJ9</CspId>
      <EntityType>NON_PROFIT</EntityType>
      <AltBusinessId>111111111</AltBusinessId>
      <AltBusinessIdType>DUNS</AltBusinessIdType>
      <City>Raleigh</City>
      <CompanyName>Bandwidth</CompanyName>
      <Country>US</Country>
      <DisplayName>Bandwidth</DisplayName>
      <Ein>111111111</Ein>
      <UniversalEin>111111111</UniversalEin>
      <Email>Test1@bandwidth.com</Email>
      <Phone>+18009999999</Phone>
      <PostalCode>27606</PostalCode>
      <State>NC</State>
      <StockExchange>NASDAQ</StockExchange>
      <StockSymbol>BAND</StockSymbol>
      <Vertical>COMMUNICATION</Vertical>
      <Website>https://www.bandwidth.com</Website>
      <IsMain>true</IsMain>
    </Brand>
</BrandResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>CompanyName is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 429 Too Many Requests
```

#### Customer Brand
_Note_: You will only be allowed to create Customer Brands as a Reseller. 
On the Request Body you can indicate a 'Customer Brand' by setting the IsMain flag to false.

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<Brand>
  <EntityType>NON_PROFIT</EntityType>
  <AltBusinessId>111111110</AltBusinessId>
  <AltBusinessIdType>DUNS</AltBusinessIdType>
  <City>Raleigh</City>
  <CompanyName>Bandwidth Customer</CompanyName>
  <Country>US</Country>
  <DisplayName>Bandwidth Customer</DisplayName>
  <Ein>111111110</Ein>
  <Email>Test1@bandwidthcustomer.com</Email>
  <Phone>+18009999999</Phone>
  <PostalCode>27606</PostalCode>
  <State>NC</State>
  <StockExchange>NASDAQ</StockExchange>
  <StockSymbol>TEST</StockSymbol>
  <Vertical>COMMUNICATION</Vertical>
  <Website>https://www.bandwidthcustomer.com</Website>
  <IsMain>false</IsMain>
</Brand>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BrandResponse>
    <Brand>
      <BrandId>BJDHM3</BrandId>
      <CspId>CMHSJ9</CspId>
      <EntityType>NON_PROFIT</EntityType>
      <AltBusinessId>111111110</AltBusinessId>
      <AltBusinessIdType>DUNS</AltBusinessIdType>
      <City>Raleigh</City>
      <CompanyName>Bandwidth Customer</CompanyName>
      <Country>US</Country>
      <DisplayName>Bandwidth Customer</DisplayName>
      <Ein>111111110</Ein>
      <Email>Test1@bandwidthcustomer.com</Email>
      <Phone>+18009999999</Phone>
      <PostalCode>27606</PostalCode>
      <State>NC</State>
      <StockExchange>NASDAQ</StockExchange>
      <StockSymbol>TEST</StockSymbol>
      <Vertical>COMMUNICATION</Vertical>
      <Website>https://www.bandwidthcustomer.com</Website>
      <IsMain>false</IsMain>
    </Brand>
</BrandResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>CompanyName is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
HTTP/1.1 429 Too Many Requests
```

{% endextendmethod %}

## Update campaign settings

{% extendmethod %}

#### Request URL
<code class="post">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/brands`

| Request Body               | Mandatory | Description                                                                                                                  |
|:---------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------|
| `BusinessIdentity`         | Yes       | 	The type of customer you are, 'DirectCustomer' or 'Reseller'                                                                |
| `Reseller`                 | No        | 	Value required for 'Reseller' BusinessIdentity only. An object containing reseller information                              |

| Reseller                   | Mandatory | Description                                                    |
|:---------------------------|:----------|:---------------------------------------------------------------|
| `CompanyName`              | Yes       |  Display or company name of the reseller. Max 100 characters   |
| `Phone`                    | Yes       | 	Valid phone number in e.164 international format '+18009999999'|
| `Email`                    | Yes       | 	Valid email address of reseller contact. Max 100 characters   |

#### Request Authentication

The [10dlc](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### PUT campaign settings 
#### Update Direct Customer

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>DirectCustomer</BusinessIdentity>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>DirectCustomer</BusinessIdentity>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
```

#### Reseller

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<CampaignSettings>
  <BusinessIdentity>Reseller</BusinessIdentity>
      <Reseller>
        <CompanyName>Test Bandwidth Company</CompanyName>      
        <Phone>+18009999999</Phone>
        <Email>Test1@bandwidth.com</Email>
    </Reseller>
</CampaignSettings>
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>Reseller</BusinessIdentity>
        <Reseller>
            <CompanyName>Test 1</CompanyName>
            <Phone>+18002837273</Phone>
            <Email>Test1@bandwidth.com</Email>
        </Reseller>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 400 Bad Request
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Phone is required</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 400 Bad Request
HTTP/1.1 403 Unauthorized
```

{% endextendmethod %}

## Fetch campaign settings

{% extendmethod %}

#### Request URL
<code class="post">GET</code>`https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc/campaigns/imports?page={page}&size={size}`

#### Request Authentication

The [imports](../about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../../guides/accountCredentials.md#number-account-creds)

### GET campaign settings

{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <CampaignSettings>
        <BusinessIdentity>Reseller</BusinessIdentity>
        <Reseller>
            <CompanyName>Test Company 1</CompanyName>
            <Phone>+18009999999</Phone>
            <Email>Test1@bandwidth.com</Email>
        </Reseller>
    </CampaignSettings>
</CampaignSettingsResponse>
```

### Error Response

```http
HTTP/1.1 404 Not Found
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/campaignManagement/10dlc

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CampaignSettingsResponse>
    <ResponseStatus>
        <ErrorCode>4022</ErrorCode>
        <Description>Account '1111111' does not exist or is locked</Description>
    </ResponseStatus>
</CampaignSettingsResponse>
```

### Error Codes
```http
HTTP/1.1 403 Unauthorized
HTTP/1.1 404 Not Found
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
We do not have a publicly exposed REST endpoint for bulk TN updates. Please see how to import a csv in our [campaign import Dashboard UI guide](bandwidth10dlcCampaignCspUiGuide.md#assign-a-campaign-to-a-tn).<br/>
For more info on TNs, please see [Number Management](../../../numbers/about.md).<br/>
For more info on managing TN Line Features, please see [our managing line features guide](../../../numbers/guides/managingLineFeatures.md).

---