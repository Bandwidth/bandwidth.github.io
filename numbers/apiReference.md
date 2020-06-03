# Bandwidth Dashboard REST API Documentation API documentation version v1
http://null

---

## /accounts
The account is the root resource for many of the operations in the Bandwidth Dashboard API.  <br>
The account is represented by an account id, which is the resource that represents a Bandwidth customer, providing a root resource for all of the customer's attributes and services <br>
The API calls that are used to manage the details of a customer account, and to manage the resources that a Bandwidth customer has access to or control over, are accessed through the /accounts resource.

### /accounts/{accountId} {#accountId}
This API retrieves and updates an account's information as specified by the given account ID. Access to information pertaining to a specific account will require credentials that have been assigned to that account, preserving the security of a customer’s information. <br>Note that DELETE is currently unsupported.

#### **get**

This API call retrieves information about the account indicated by the Account ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AccountResponse>
    <Account>
        <AccountId>14</AccountId>
        <AssociatedCatapultAccount>u-ertyhgfd12dcvdhnboklk</AssociatedCatapultAccount>
        <GlobalAccountNumber>globalAccount</GlobalAccountNumber>
        <CompanyName>CWI Hosting</CompanyName>
        <AccountType>Business</AccountType>
        <NenaId></NenaId>
        <CustomerSegment>Trial</CustomerSegment>
        <Tiers>
            <Tier>0</Tier>
        </Tiers>
        <Address>
            <HouseNumber>904</HouseNumber>
            <HouseSuffix>E</HouseSuffix>
            <PreDirectional></PreDirectional>
            <StreetName>Anson</StreetName>
            <StreetSuffix>St</StreetSuffix>
            <PostDirectional></PostDirectional>
            <AddressLine2></AddressLine2>
            <City>Marshalltown</City>
            <StateCode>IA</StateCode>
            <Zip>50158</Zip>
            <PlusFour></PlusFour>
            <County></County>
            <Country>United States</Country>
            <AddressType>Billing</AddressType>
        </Address>
        <Contact>
            <FirstName>Sanjay</FirstName>
            <LastName>Rao</LastName>
            <Phone>9195441234</Phone>
            <Email>srao@bandwidth.com</Email>
        </Contact>
        <AltSpid>X455</AltSpid>
        <SPID>9999</SPID>
        <PortCarrierType>WIRELINE</PortCarrierType>
    </Account>
</AccountResponse>

```

### /accounts/{accountId}/addresses {#addresses}
This resource is used to manage addresses.

#### **get**

GET is used to retrieve all addresses.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AddressesResponse> <TotalCount>1</TotalCount> <Links> <first>Link=&lt;http://admin.localhost:8080/api/accounts/8000259/addresses?type=e911&amp;page=1&amp;size=500&gt;;rel="first";</first> <next>Link=&lt;http://localhost:8080/api/accounts/8000259/addresses?type=E911&amp;page=501&amp;size=500&gt;;rel="next";</next> </Links> <Addresses> <Address> <HouseNumber>207</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>Elmastar</StreetName> <StreetSuffix>AlternateStar</StreetSuffix> <PostDirectional></PostDirectional> <AddressLine2></AddressLine2> <City>Carpinteriaaly</City> <StateCode>NY</StateCode> <Zip>93019</Zip> <PlusFour></PlusFour> <County></County> <Country>United States</Country> <AddressType>E911</AddressType> <EndpointCount>2</EndpointCount> <ValidationStatus>VALID</ValidationStatus> </Address> </Addresses> </AddressesResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AddressesResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </AddressesResponse>
```

### /accounts/{accountId}/aeuis {#aeuis}
This resource is used to manage alternate end user identifiers (AEUIs).

#### **get**

GET is used to retrieve all Alternate end user identifiers.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AlternateEndUserIdentifiersResponse> <TotalCount>2</TotalCount> <Links> <first>Link=&lt;http://localhost:8080/iris/accounts/14/aeuis?page=1&amp;size=500&gt;;rel="first";</first> </Links> <AlternateEndUserIdentifiers> <AlternateEndUserIdentifier> <Identifier>DavidAcid</Identifier> <CallbackNumber>8042105760</CallbackNumber> <EmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <Description>Building 5, 5th Floor.</Description> </EmergencyNotificationGroup> </AlternateEndUserIdentifier> <AlternateEndUserIdentifier> <Identifier>JohnAcid</Identifier> <CallbackNumber>8042105618</CallbackNumber> </AlternateEndUserIdentifier> </AlternateEndUserIdentifiers> </AlternateEndUserIdentifiersResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AlternateEndUserIdentifiersResponse> <ResponseStatus> <ErrorCode>12087</ErrorCode> <Description>Alternate End User Identifiers were not found.</Description> </ResponseStatus> </AlternateEndUserIdentifiersResponse>
```

### /accounts/{accountId}/aeuis/{acid} {#acid}
This resource is used to retrieve detailed alternate end user identifiers (AEUIs).<br>

#### **get**

GET is used to retrieve a detailed information of Alternate end user identifier by acid.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| acid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AlternateEndUserIdentifierResponse> <AlternateEndUserIdentifier> <Identifier>DavidAcid</Identifier> <CallbackNumber>8042105760</CallbackNumber> <E911> <CallerName>David</CallerName> <Address> <HouseNumber>900</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>MAIN CAMPUS</StreetName> <StreetSuffix>DR</StreetSuffix> <AddressLine2></AddressLine2> <City>RALEIGH</City> <StateCode>NC</StateCode> <Zip>27606</Zip> <PlusFour>5214</PlusFour> <Country>United States</Country> <AddressType>Billing</AddressType> </Address> <EmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <Description>Building 5, 5th Floor.</Description> </EmergencyNotificationGroup> </E911> </AlternateEndUserIdentifier> </AlternateEndUserIdentifierResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AlternateEndUserIdentifierResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </AlternateEndUserIdentifierResponse>
```

### /accounts/{accountId}/applications {#applications}
The application is a resource that provides customers with the ability to control messaging (SMS and MMS) and voice using HTTP signaling. This resource identifies the callback information used to notify the customer about voice and messaging events.
The application is represented by an application id.
The API calls that are used to manage the details of a customer-defined application are accessed through the /accounts/{accountId}/applications resource. <br>
<p>For ServiceType of Messaging-V2 <br>
  <ul>
    <li> MsgCallbackUrl (CallbackUrl - is deprecated) is required </li>
  </ul>
</p>
<p>For ServiceType of Voice-V2
  <ul>
    <li> CallInitiatedCallbackUrl - required for voice </li>
    <li> CallInitiatedMethod - optional for voice [POST|GET] default is POST if not specified</li>
    <li> CallStatusCallbackUrl - optional for voice </li>
    <li> CallStatusMethod - optional for voice [POST|GET] default is POST if not specified </li>
  </ul>
</p>
<p>CallbackCreds - can only be specified by External users
 <ul>
    <li> If you want credentials, both UserId and Password must be specified.</li>
    <li> If you do not want passwords, CallbackCreds should be omitted entirely.</li>
    <li> UserId and Password should have length between 6 and 63 symbols.</li>
  </ul>
</p>

#### **post**

Create an Application, CallbackUrl field is deprecated field, use MsgCallbackUrl instead

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?> <!--Messaging-V2 application--> <Application> <ServiceType>Messaging-V2</ServiceType> <AppName>EBVICs</AppName> <MsgCallbackUrl>http://example.com</MsgCallbackUrl> <CallbackCreds> <UserId>15jPWZmXdm</UserId> <Password>xxv3jPsPR2</Password> </CallbackCreds> </Application> <!--Voice-V2 application--> <Application> <ServiceType>Voice-V2</ServiceType> <AppName>v1</AppName> <CallInitiatedCallbackUrl>https://a.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>GET</CallInitiatedMethod> <CallStatusCallbackUrl>https://b.com</CallStatusCallbackUrl> <CallStatusMethod>GET</CallStatusMethod> <CallbackCreds> <UserId>login123</UserId> <Password>password123</Password> </CallbackCreds> </Application>
```

##### Response

**201**

```xml
<!--Messaging-V2 application--> <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ApplicationProvisioningResponse> <Application> <ApplicationId>d4d1b41d-4c05-47d0-838a-34e4f14e4e3e</ApplicationId> <ServiceType>Messaging-V2</ServiceType> <AppName>EBVICs</AppName> <MsgCallbackUrl>http://example.com</MsgCallbackUrl> <CallbackCreds> <UserId>15jPWZmXdm</UserId> </CallbackCreds> </Application> </ApplicationProvisioningResponse> <!--Voice-V2 application--> <ApplicationProvisioningResponse> <Application> <ApplicationId>d3e418e9-1833-49c1-b6c7-ca1700f79586</ApplicationId> <ServiceType>Voice-V2</ServiceType> <AppName>v1</AppName> <CallInitiatedCallbackUrl>https://a.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>GET</CallInitiatedMethod> <CallStatusCallbackUrl>https://b.com</CallStatusCallbackUrl> <CallStatusMethod>GET</CallStatusMethod> <CallbackCreds> <UserId>login123</UserId> </CallbackCreds> </Application> </ApplicationProvisioningResponse>
```

#### **get**

Lists all Applications<br>
<p><br>
  <ul>
    <li> CallbackCreds Password is not returned in response for security reasons </li>
  </ul>
</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<ApplicationProvisioningResponse> <ApplicationList> <Application> <ApplicationId>2cfcb382-161c-46d4-8c67-87ca09a72c85</ApplicationId> <ServiceType>Messaging-V2</ServiceType> <AppName>app1</AppName> <MsgCallbackUrl>http://a.com</MsgCallbackUrl> </Application> <Application> <ApplicationId>0cb0112b-5998-4c81-999a-0d3fb5e3f8e2</ApplicationId> <ServiceType>Voice-V2</ServiceType> <AppName>app2</AppName> <CallInitiatedCallbackUrl>http://b.com</CallInitiatedCallbackUrl> <CallbackCreds> <UserId>15jPWZmXdm</UserId> </CallbackCreds> </Application> </ApplicationList> </ApplicationProvisioningResponse>
```

### /accounts/{accountId}/applications/{applicationId} {#applicationId}

#### **get**

Retrieve an Application

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| applicationId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <!--Messaging-V2 application example--> <ApplicationProvisioningResponse> <Application> <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId> <ServiceType>Messaging-V2</ServiceType> <AppName>qMmmTT</AppName> <MsgCallbackUrl>http://example.com</MsgCallbackUrl> <CallbackCreds> <UserId>15jPWZmXdm</UserId> </CallbackCreds> </Application> </ApplicationProvisioningResponse> <!--Voice-V2 application example--> <ApplicationProvisioningResponse> <Application> <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId> <ServiceType>Voice-V2</ServiceType> <AppName>qMmmTT</AppName> <CallInitiatedCallbackUrl>http://example.com</CallInitiatedCallbackUrl> <CallbackCreds> <UserId>15jPWZmXdm</UserId> </CallbackCreds> </Application> </ApplicationProvisioningResponse>
```

#### **put**

Update an Application. <br>
 <ul>
    <li> ServiceType can have value of Voice-V2 or Messaging-V2 but it can't be changed for existing application </li>
 </ul>
     <p>For ServiceType of Messaging-V2 <br>
       <ul>
         <li> MsgCallbackUrl (CallbackUrl - is deprecated) is required </li>
       </ul>
     </p>
     <p>For ServiceType of Voice-V2
       <ul>
         <li> CallInitiatedCallbackUrl - required for voice </li>
         <li> CallInitiatedMethod - optional for voice [POST|GET] default is POST if not specified</li>
         <li> CallStatusCallbackUrl - optional for voice </li>
         <li> CallStatusMethod - optional for voice [POST|GET] default is POST if not specified </li>
       </ul>
     </p>
     <p>CallbackCreds - can only be specified by External users
       <ul>
          <li> CallbackCreds with same UserId but different Password will change password</li>
          <li> If you want credentials, both UserId and Password must be specified.</li>
          <li> If you do not want passwords, CallbackCreds should be omitted entirely.</li>
          <li> UserId and Password should have length between 6 and 63 symbols.</li>
       </ul>
     </p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| applicationId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?> <!--Messaging-V2 application--> <Application> <ServiceType>Voice-V2</ServiceType> <AppName>EBVICs</AppName> <CallInitiatedCallbackUrl>https://example2.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>[GET|POST]</CallInitiatedMethod> <CallStatusCallbackUrl>https://example3.com</CallStatusCallbackUrl> <CallStatusMethod>[GET|POST]</CallStatusMethod> </Application> <!--Voice-V2 application--> <Application> <ServiceType>Voice-V2</ServiceType> <AppName>v1</AppName> <CallInitiatedCallbackUrl>https://a.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>GET</CallInitiatedMethod> <CallStatusCallbackUrl>https://b.com</CallStatusCallbackUrl> <CallStatusMethod>GET</CallStatusMethod> <CallbackCreds> <UserId>login123</UserId> <Password>password123</Password> </CallbackCreds> </Application>
```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ApplicationProvisioningResponse> <Application> <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId> <ServiceType>Voice-V2</ServiceType> <AppName>EBVICs</AppName> <CallInitiatedCallbackUrl>https://example2.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>[GET|POST]</CallInitiatedMethod> <CallStatusCallbackUrl>https://example3.com</CallStatusCallbackUrl> <CallStatusMethod>[GET|POST]</CallStatusMethod> </Application> </ApplicationProvisioningResponse>
```

#### **patch**

Patch update an Application<br>
 <ul>
  <li> CallStatusCallbackUrl can be removed by settings its value to 'remove'  </li>
 </ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| applicationId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?> <Application> <AppName>XgRIdP</AppName> </Application>
```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ApplicationProvisioningResponse> <Application> <ApplicationId>e5a9e103-097e-4ec4-87a0-50109fb7b4b1</ApplicationId> <ServiceType>Voice-V2</ServiceType> <AppName>EBVICs</AppName> <CallInitiatedCallbackUrl>https://example2.com</CallInitiatedCallbackUrl> <CallInitiatedMethod>[GET|POST]</CallInitiatedMethod> <CallStatusCallbackUrl>https://example3.com</CallStatusCallbackUrl> <CallStatusMethod>[GET|POST]</CallStatusMethod> </Application> </ApplicationProvisioningResponse>
```

#### **delete**

Delete an Application. <br>
An Application cannot be removed from an account if that Application is referenced by any Location associated with the account.<br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| applicationId | string | true |

##### Response

**200**

```xml
None
```

### /accounts/{accountId}/applications/{applicationId}/associatedsippeers {#applicationId-associatedsippeers}

#### **get**

Retrieve a list of sippeers, associated with application

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| applicationId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AssociatedSipPeersResponse> <AssociatedSipPeers> <AssociatedSipPeer> <SiteId>482</SiteId> <SiteName>site_e867f</SiteName> <PeerId>500018</PeerId> <PeerName>sippeer-e867f</PeerName> </AssociatedSipPeer> <AssociatedSipPeer> <SiteId>483</SiteId> <SiteName>site_e867d</SiteName> <PeerId>500019</PeerId> <PeerName>sippeer-e867d</PeerName> </AssociatedSipPeer> </AssociatedSipPeers> </AssociatedSipPeersResponse>
```

**400**

```xml
<AssociatedSipPeersResponse> <ResponseStatus> <ErrorCode>12103</ErrorCode> <Description> Current 1 Account have no Catapult association </Description> </ResponseStatus> </AssociatedSipPeersResponse>
```

**404**

```xml
<AssociatedSipPeersResponse> <ResponseStatus> <ErrorCode>13629</ErrorCode> <Description> Application with id 'non_existing' not found </Description> </ResponseStatus> </AssociatedSipPeersResponse>
```

### /accounts/{accountId}/availableNpaNxx {#availableNpaNxx}
Retrieves the quantity of available phone numbers in the given area code. The numbers are grouped by alike Npa-Nxx.

#### **get**

Retrieves a list of available Npa-Nxx telephone numbers.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<SearchResultForAvailableNpaNxx>
    <AvailableNpaNxxList>
        <AvailableNpaNxx>
            <City>NASHVILLE</City>
            <Npa>252</Npa>
            <Nxx>220</Nxx>
            <Quantity>1</Quantity>
            <State>NC</State>
        </AvailableNpaNxx>
        <AvailableNpaNxx>
            <City>FARMVILLE</City>
            <Npa>252</Npa>
            <Nxx>228</Nxx>
            <Quantity>1</Quantity>
            <State>NC</State>
        </AvailableNpaNxx>
    </AvailableNpaNxxList>
</SearchResultForAvailableNpaNxx>

```

**400**

```xml
<SearchResultForAvailableNpaNxx>
    <Error>
        <Code>4000</Code>
        <Description>The area code specified 433 is not present as a valid entry in our system</Description>
    </Error>
</SearchResultForAvailableNpaNxx>

```

### /accounts/{accountId}/availableNumbers {#availableNumbers}
The /availableNumbers API call searches for available phone numbers based on one or more of the following criteria:<br>
<ul>
    <li>Area Code</li>
    <li>NPA-NXX</li>
    <li>NPA-NXX with Local Area Calling</li>
    <li>NPA-NXX-X</li>
    <li>NPA-NXX-X with Local Area Calling</li>
    <li>RateCenter</li>
    <li>RateCenter with Local Area Calling</li>
    <li>State</li>
    <li>City/State</li>
    <li>Zip Code</li>
    <li>LATA</li>
    <li>Local Vanity</li>
    <li>TollFree Vanity</li>
    <li>TollFree WildCard Pattern</li>
</ul>
<br>
Each choice above has required and optional parameters. Some search parameters can be combined with others.
Allowed search criteria are limited in case of search by Local Calling Area (see restrictions below).<br>
<table>
    <tr>
        <th>Search Criteria</th>
        <th>Required Parameters</th>
        <th>Combinable Parameters</th>
        <th>Optional Parameters</th>
    </tr>
    <tr>
        <td>Area Code</td>
        <td>areaCode</td>
        <td>
            rateCenter (state required)<br>
            city (state required)<br>
            state<br>
            lata<br>
            zip
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>NPA-NXX</td>
        <td>npaNxx</td>
        <td>
            rateCenter (state required)<br>
            city (state required)<br>
            state<br>
            lata<br>
            zip<br>
            orderBy
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>NPA-NXX with Local Calling Area</td>
        <td>npaNxx</td>
        <td></td>
        <td>quantity<br>LCA<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>NPA-NXX-X</td>
        <td>npaNxxx</td>
        <td>
            rateCenter (state required)<br>
            city (state required)<br>
            state<br>
            lata<br>
            zip<br>
            orderBy
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>NPA-NXX-X with Local Calling Area</td>
        <td>npaNxxx</td>
        <td></td>
        <td>quantity<br>LCA<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>RateCenter</td>
        <td>rateCenter<br>state</td>
        <td>
            city<br>
            areaCode/npaNxx/npaNxxx<br>
            lata<br>
            zip<br>
            orderBy
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>RateCenter with Local Calling Area</td>
        <td>rateCenter<br>state</td>
        <td></td>
        <td>quantity<br>LCA<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>State</td>
        <td>state</td>
        <td>
            rateCenter<br>
            city<br>
            areaCode/npaNxx/npaNxxx<br>
            lata<br>
            zip
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>City</td>
        <td>city<br>state</td>
        <td>
            rateCenter<br>
            state<br>
            areaCode/npaNxx/npaNxxx<br>
            lata<br>
            zip<br>
            orderBy
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>Zip Code</td>
        <td>zip</td>
        <td>
            rateCenter (state required)<br>
            city (state required)<br>
            state<br>
            areaCode/npaNxx/npaNxxx<br>
            lata<br>
            orderBy
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>LATA</td>
        <td>lata</td>
        <td>
            rateCenter (state required)<br>
            city (state required)<br>
            state<br>
            areaCode/npaNxx/npaNxxx<br>
            zip
        </td>
        <td>quantity<br>enableTNDetail<br>protected</td>
    </tr>
    <tr>
        <td>Local Vanity</td>
        <td>
            localVanity
        </td>
        <td>
            state<br>
            areaCode
        </td>
        <td>
            endsIn<br>
            quantity<br>
            protected<br>
            enableTNdetails
        </td>
    </tr>
    <tr>
        <td>TollFree Vanity</td>
        <td>tollFreeVanity</td>
        <td>orderBy</td>
        <td>quantity</td>
    </tr>
    <tr>
        <td>TollFree WildCard</td>
        <td>tollFreeWildCardPattern</td>
        <td>orderBy</td>
        <td>quantity</td>
    </tr>
</table>
<br>
<table>
    <tr>
        <th>Parameters</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>areaCode</td>
        <td>The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits.</td>
    </tr>
    <tr>
        <td>npaNxx or npaNxxx</td>
        <td>NPA NXX combination to be searched.<br>Valid npa values:[2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid Nxx values:[2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid x values [0-9].</td>
    </tr>
    <tr>
        <td>rateCenter</td>
        <td>The abbreviation for the Rate Center</td>
    </tr>
    <tr>
        <td>state</td>
        <td>The two-letter abbreviation of the state the RateCenter is in.</td>
    </tr>
    <tr>
        <td>city</td>
        <td>The name of the city.</td>
    </tr>
    <tr>
        <td>zip</td>
        <td>A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) zip-code value.</td>
    </tr>
    <tr>
        <td>lata</td>
        <td>A maximum five digit (XXXXX) numeric format.</td>
    </tr>
    <tr>
        <td>localVanity</td>
        <td>A pattern that can be used to match telephone numbers in the Bandwidth inventory. This value is from 3 to 7 alphanumeric characters including the characters '*' and '_'.  The '_' character matches exactly one arbitrary alphanumeric character, where the '*' matches a string of arbitrary alphanumeric characters.</td>
    </tr>
    <tr>
        <td>tollFreeVanity</td>
        <td>The Toll Free requested vanity number. Valid range is from 4 to 7 alphanumeric characters</td>
    </tr>
    <tr>
        <td>tollFreeWildCardPattern</td>
        <td>The requested Toll Free 3 digit wild card pattern. Examples: 8**, 80*, 87*, etc.</td>
    </tr>
    <tr>
        <td>quantity</td>
        <td>The desired quantity of requested numbers. Values range from 1-5000. If no quantity is specified, the default of 5000 is returned.</td>
    </tr>
    <tr>
        <td>enableTNDetail</td>
        <td>If set to true, a list of details associated with the telephone number (rate center abbreviation, rate center host city, state, and LATA) will be displayed along with the telephone number. This value is set to false by default.</td>
    </tr>
    <tr>
        <td>LCA</td>
        <td>Local Calling Area. If this parameter is specified then Telephone Numbers that are likely in the Local Calling Area of  the stated Rate Center, NPANXX or NPANNXX will be returned, in addition to those that *exactly* match the query will be returned.  Since LCA logic is not always symmetric and not always inclusive of RC and NPANXX search criteria, this result reflects somewhat of an approximation.  The parameter value is true or false. The default is true</td>
    </tr>
    <tr>
        <td>endsIn</td>
        <td>Intended to use with <i>localVanity</i> only. The parameter value is true or false. If set to true, the search will look for only numbers which end in specified <i>localVanity</i>, otherwise <i>localVanity</i> sequence can be met anywhere in last 7 number digits. The default is false.</td>
    </tr>
    <tr>
        <td>orderBy</td>
        <td>The field by which the returned numbers will be sorted. Only supported if at least one of the following search criteria is specified: npaNxx or npaNxxx, rateCenter, city, zip, tollFreeVanity, tollFreeWildCardPattern. Allowed values are <i>fullNumber</i>, <i>npaNxxx</i>, <i>npaNxx</i>,  and <i>areaCode></td>
    </tr>
    <tr>
        <td>protected</td>
        <td>
        A query parameter, that governs, how the Protected status of numbers impacts the search results<br>
        The overall behavior of the protected search values are described in the table below:<br>
        <table>
            <tr>
                <th>Query Parameter</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>NONE</td>
                <td>The numbers returned in the payload will not contain any numbers that are tagged as Protected</td>
            </tr>
            <tr>
                <td>ONLY</td>
                <td>The numbers returned in the payload will all be tagged as Protected. No "unProtected" numbers will be returned</td>
            </tr>
            <tr>
                <td>MIXED</td>
                <td>The protected status of the numbers will be ignored in the search - all types of numbers will be returned</td>
            </tr>
        </table>
        </td>
    </tr>
</table>

#### **get**

Retrieves the phone numbers according to the input parameters

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<SearchResult>
    <ResultCount>384</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>4354776112</TelephoneNumber>
                    <!-- SNIP -->
        <TelephoneNumber>4357095160</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>

```

**400**

```xml
<SearchResult>
    <Error>
        <Code>4010</Code>
        <Description>One of more required search parameters are null or empty, please refer to the api documentation</Description>
    </Error>
</SearchResult>

```

### /accounts/{accountId}/bdrs {#bdrs}
<strong>Note - this API is being replaced with the /billingreports API - we strongly recommend that you use that endpoint</strong><br>
This API allows the retrieval of a ZIP file containing BDR records for a specified date range.  These BDR records are delivered as a ZIP compressed comma separated values (CSV) file.<br>
The general flow of the API calls required to retrieve these records is
<ol>
<li>POST a request to the /bdrs resource, describing the date range for which the BDR records are wished.  This will initiate the construction of the zip file.</li>
<li>Examine the response from the POST.  If the payload is understandable and valid then a 202 accepted HTTP result code will be returned indicating that the response file is being created.</li>
<li>Retrieve the Location Header from the Response to the POST. This location header will contain the resource ID for the collection of BDRs that will be returned once complete.  Note that the fact that the ID has been issued does not mean that the ZIP file is complete.</li>
<li>interrogate the resource ID to check the status of the request.  If a 303 See Other response is received then the Location Header will contain the resource path to the file.  A typical browser response will be to download the file.  If a 200 OK is returned then the request is considered valid, but the file is not ready for distribution.</li>
<li>fetching the file can be done by issuing a GET to the resources path in the Location Header mentioned above.
</ol>

#### **post**

Request a collection of BDRs be aggregated and ZIPped ready for distribution.  The payload for the POST declares the date range for the request.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<Bdr>
    <StartDate>2015-04-01</StartDate>
    <EndDate>2015-04-30</EndDate>
</Bdr>

```

##### Response

**202**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
     <Info>Your BDR archive is currently being constructed</Info>
</BdrCreationResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
    <ResponseStatus>
        <ErrorCode>15501</ErrorCode>
        <Description>Invalid date range. Start date 2015-06-01 must be before end date 2015-04-30</Description>
    </ResponseStatus>
</BdrCreationResponse>

```

### /accounts/{accountId}/bdrs/{bdrid} {#bdrid}
The bdrid resource will query the status of the bdr file that is being generated.  There are essentially two responses...<br>
<ul>
<li>not yet ready</li>
<li>ready, in which case the request is redirected to the URL to actually download the file.</li>
</ul>

#### **get**

A GET on the BDR ID will return a "still processing" indication if the file creation has not completed, or will redirect to the file to be downloaded.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| bdrid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
     <Info>The requested BDR archive is still being constructed, please check back later</Info>
</BdrCreationResponse>

```

**303**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>1008</ErrorCode>
        <Description>'44a90e00-a7b6asdfsdafasdfdasf-6659-9112-e7f5dfa48231' is not a valid UUID</Description>
    </ResponseStatus>
</BdrRetrievalResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>15001</ErrorCode>
        <Description>BDR archive was not found</Description>
    </ResponseStatus>
</BdrRetrievalResponse>

```

### /accounts/{accountId}/bdrs/{bdrid}/file {#file}
The file resource is an explicit reference to the zip file that has been created with the selected BDR records.

#### **get**

A GET on the /file resource subtending a BDR ID will cause the download of the file.  Executing this resource path within a browser will cause the download of the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| bdrid | string | true |

##### Response

**200**

### /accounts/{accountId}/billingreports {#billingreports}
This API allows the retrieval of a zip file containing billing report for a specified date range and type. Billing report data is available for 24-48 hours by API.
This billing report is delivered as a zip compressed comma separated values (CSV) file.<br>
The general flow of the API calls required to retrieve these records is
<ol>
<li>POST a request to the /billingreports resource, describing the report date range and type for which the billing report is wished. This will initiate the construction of the zip file.</li>
<li>Examine the response from the POST. If the payload is understandable and valid then a 201 response will be returned, indicating that the response file is currently being constructed.</li>
<li>Retrieve the Location Header from the response to the POST. This Location response-header field will contain the complete URI-reference to newly created resource. Each report has it's own resource ID.</li>
<li>Interrogate the resource ID to check the status of the report. If a 200 OK is returned then the resource ID is considered valid and corresponding status will describe the readiness of zip file.</li>
<li>Fetching the file can be done by issuing a GET request to the resource path in the Location Header mentioned above.</li>
</ol>

#### **get**

Retrieve billing report instances within the account scope and billing type.
The valid Billing Types are...
<ul>
<li>BDR</li>
<li>MDR</li>
<li>INVOICE</li>
<li>STMTBDR</li>
<li>DIDSNAP</li>
<li>DIDSNAP_MSG</li>
<li>RECORDINGBDR</li>
<li>RECORDINGSTMTBDR</li>
<li>TRANSCRIPTIONBDR</li>
<li>TRANSCRIPTIONSTMTBDR</li>
<li>CNAMBDR</li>
<li>CNAMSTMTBDR</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportsRetrievalResponse>
    <BillingReportList>
        <BillingReport>
            <BillingReportId>5f8734f0-d7c3-445c-b1e2-cdbb620e4ff7</BillingReportId>
            <BillingReportKind>DIDSNAP</BillingReportKind>
            <UserId>jbm</UserId>
            <ReportStatus>PROCESSING</ReportStatus>
            <Description>The requested report archive is still being constructed, please check back later.</Description>
            <CreatedDate>2017-11-01 14:12:16</CreatedDate>
            <DateRange>
                <StartDate>2017-01-01</StartDate>
                <EndDate>2017-09-30</EndDate>
            </DateRange>
        </BillingReport>
        <BillingReport>
            <BillingReportId>7680a54a-b1f1-4d43-8af6-bf3a701ad202</BillingReportId>
            <BillingReportKind>DIDSNAP</BillingReportKind>
            <UserId>jbm</UserId>
            <ReportStatus>COMPLETE</ReportStatus>
            <Description>The requested report archive is failed</Description>
            <CreatedDate>2017-11-06 14:22:21</CreatedDate>
            <DateRange>
                 <StartDate>2017-05-01</StartDate>
                 <EndDate>2017-10-31</EndDate>
            </DateRange>
        </BillingReport>
    </BillingReportList>
</BillingReportsRetrievalResponse>

```

**204**

**400**

#### **post**

The payload for the POST declares the date range and type for the desired reports. The valid Types are... <ul> <li>BDR - Billing Detail Records - per call information</li> <li>MDR - Message Detail Records - per messagin information</li> <li>INVOICE - A copy of the invoice file or files for the specified date range</li> <li>STMTBDR - BDR records that are aligned with the invoice</li> <li>DIDSNAP - a list of telephone numbers aligned as closely as we can with the billing window</li> <li>DIDSNAP_MSG - a list of telephone numbers with active messaging</li> </ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<BillingReport>
    <Type>BDR</Type>
    <DateRange>
       <StartDate>2013-05-21</StartDate>
       <EndDate>2013-05-29</EndDate>
    </DateRange>
</BillingReport>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ReportStatus>RECEIVED</ReportStatus>
    <Description>The report archive is currently being constructed.</Description>
</BillingReportCreationResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ResponseStatus>
        <ErrorCode>15501</ErrorCode>
        <Description>Invalid date range. Start date 2014-05-21 must be before end date 2013-05-29</Description>
    </ResponseStatus>
</BillingReportCreationResponse>

```

### /accounts/{accountId}/billingreports/{reportid} {#reportid}
The resource will query the status of the report that is being generated.

#### **get**

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ReportStatus>COMPLETED</ReportStatus>
     <Description>The report archive is constructed.</Description>
</BillingReportRetrievalResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>1008</ErrorCode>
        <Description>'9b428b4c-159b-465f-9667-' is not a valid UUID</Description>
    </ResponseStatus>
</BillingReportRetrievalResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>15603</ErrorCode>
        <Description>The requested report was not found.</Description>
    </ResponseStatus>
</BillingReportRetrievalResponse>

```

### /accounts/{accountId}/billingreports/{reportid}/file {#file}
The file resource is an explicit reference to the zip file that has been created.

#### **get**

A GET on the /file resource subtending a report ID will cause the download of the file.  Executing this resource path within a browser will cause the download of the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportArchiveRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>1008</ErrorCode>
        <Description>'9b428b4c-159b-465f-9667-' is not a valid UUID</Description>
    </ResponseStatus>
</BillingReportArchiveRetrievalResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportArchiveRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>15603</ErrorCode>
        <Description>The requested report was not found.</Description>
    </ResponseStatus>
</BillingReportArchiveRetrievalResponse>

```

### /accounts/{accountId}/bulkPortins {#bulkPortins}
<p>The bulkPortins endpoint is used to manage requests to port a large diverse collection of Telephone Numbers into the Bandwidth Dashboard. These telephone numbers will be decomposed into a set of individual port-in orders based on the needs of the industry, making all reasonable attempts to treat the individual port-in requests in a uniform manner. Like many other requests, the bulkPortins endpoint causes the creation of a Bulk Portins <b>order</b> that is used to manage the porting event throughout the lifecycle of the request.</p> <p>The various sub-resources and methods are covered in greater detail below.</p> <p>The elements used or supplied in the payloads are described in the following table. These values will act as an initial template for port-in requests that are created by decomposing the collection of Telephone Numbers into individual port-in orders. </p> <p>Bulk port-in order can have one of 3 terminal processing statuses&#58; COMPLETED, CANCELLED, and PARTIAL. Terminal means that an order with such status cannot be transferred to any other processing status (terminal or not). Bulk order goes to terminal status automatically as soon as last of its associated port-ins transfers to terminal status (COMPLETE or CANCELLED). The resulting terminal processing status of the bulk port-in order depends on statuses of associaed port-ins&#58; COMPLETED - when all port-ins are in COMPLTE status, CANCELLED - when all port-ins are in CANCELLED status, PARTIAL - when there is a mix of CANCELLED and COMPLETE port-ins statuses. </p> <p>The following table describes parameters for the bulk port-in API. All parameters except for the URL parameter "accountId" are optional in the bulk port-in, although the rules for individual port-ins described in the /portins API still apply to the port-ins that make up the bulk port-in. Enforcement of required fields in the individual port-ins occurs when the bulk port-in is submitted (i.e. removed from DRAFT status).</p> <table border="1" cellspacing="0" cellpadding="0" width="624"> <tbody> <tr> <td valign="top"> <p> <strong>Parameter</strong> </p> </td> <td width="351" valign="top"> <p> <strong>Description</strong> </p> </td> </tr> <tr> <td valign="top"> <p> accountId (URL Parameter) </p> </td> <td width="351" valign="top"> <p> The account ID for porting the numbers. </p> </td> </tr> <tr> <td valign="top"> <p> CustomerOrderId </p> </td> <td width="351" valign="top"> <p> Internal customer order id for tracking the order. This can be any alphanumeric string. </p> </td> </tr> <tr> <td valign="top"> <p> RequestedFocDate </p> </td> <td width="351" valign="top"> <p> If present this will specify the date and time that the port-in is requested to happen.  The actual time and date is subject to negotiation with the losing carriers. Format is ISO8601 encoding of ZULU/UTC/GMT such as “2013-05-10T15:14:22Z”. </p> </td> </tr> <tr> <td valign="top"> <p> AlternateSpid </p> </td> <td width="351" valign="top"> <p> Unique customer AltSPID to be applied to the port-in requests. Can be changed only for DRAFT bulk port-in. </p> </td> </tr> <tr> <td valign="top"> <p> BillingTelephoneNumber (BTN) </p> </td> <td width="351" valign="top"> <p> Account or Billing telephone number for order. This will be unusual for bulk port-in requests that are expected to decompose into port-in requests from multiple carriers, because the value will be different for each losing carrier. </p> </td> </tr> <tr> <td valign="top"> <p> SubscriberType </p> </td> <td width="351" valign="top"> <p> (BUSINESS, RESIDENTIAL) If residential, order will be rejected if a BusinessName is entered. </p> </td> </tr> <tr> <td valign="top"> <p> BusinessName </p> </td> <td width="351" valign="top"> <p> Subscriber business name. </p> </td> </tr> <tr> <td valign="top"> <p> FirstName </p> </td> <td width="351" valign="top"> <p> Subscriber first name. </p> </td> </tr> <tr> <td valign="top"> <p> MiddleInitial </p> </td> <td width="351" valign="top"> <p> Subscriber middle initial. </p> </td> </tr> <tr> <td valign="top"> <p> LastName </p> </td> <td width="351" valign="top"> <p> Subscriber last name. </p> </td> </tr> <tr> <td valign="top"> <p> HouseNumber </p> </td> <td width="351" valign="top"> <p> Street address number. </p> </td> </tr> <tr> <td valign="top"> <p> HousePrefix </p> </td> <td width="351" valign="top"> <p> Street address number prefix </p> </td> </tr> <tr> <td valign="top"> <p> HouseSuffix </p> </td> <td width="351" valign="top"> <p> Street address number suffix. </p> </td> </tr> <tr> <td valign="top"> <p> PreDirectional </p> </td> <td width="351" valign="top"> <p> Street address pre-directional. </p> </td> </tr> <tr> <td valign="top"> <p> StreetName </p> </td> <td width="351" valign="top"> <p> Street name. </p> </td> </tr> <tr> <td valign="top"> <p> StreetSuffix </p> </td> <td width="351" valign="top"> <p> Street suffix. </p> </td> </tr> <tr> <td valign="top"> <p> PostDirectional </p> </td> <td width="351" valign="top"> <p> Street address post directional. </p> </td> </tr> <tr> <td valign="top"> <p> AddressLine2 </p> </td> <td width="351" valign="top"> <p> Put unit, suite, floor, etc. here. </p> </td> </tr> <tr> <td valign="top"> <p> City </p> </td> <td width="351" valign="top"> <p> City. </p> </td> </tr> <tr> <td valign="top"> <p> StateCode </p> </td> <td width="351" valign="top"> <p> Two letter state code. </p> </td> </tr> <tr> <td valign="top"> <p> Zip </p> </td> <td width="351" valign="top"> <p> Zip code. </p> </td> </tr> <tr> <td valign="top"> <p> PlusFour </p> </td> <td width="351" valign="top"> <p> Zip + 4 value. </p> </td> </tr> <tr> <td valign="top"> <p> Country </p> </td> <td width="351" valign="top"> <p> 3 letter country code. </p> </td> </tr> <tr> <td valign="top"> <p> LoaAuthorizingPerson </p> </td> <td width="351" valign="top"> <p> First and last name of person who authorized LOA. </p> </td> </tr> <tr> <td valign="top"> <p> AccountNumber </p> </td> <td width="351" valign="top"> <p> Account number associated with the account on the losing carrier, often required for wireless ports, or enterprise ports. This will be unusual for bulk port-in requests that are expected to decompose into port-in requests from multiple carriers. </p> </td> </tr> <tr> <td valign="top"> <p> PinNumber </p> </td> <td width="351" valign="top"> <p> PIN Number, often required for wireless ports. </p> </td> </tr> <tr> <td valign="top"> <p> siteid </p> </td> <td width="351" valign="top"> <p> This is the Site / Sub-Account ID made visible in the /accounts/{accountId}/sites API call </p> </td> </tr> <tr> <td valign="top"> <p> PeerId </p> </td> <td width="351" valign="top"> <p> This is the SIP Peer / Location ID made visible in the /accounts/{accountId}/sites/{siteId}/sipPeers API call </p> </td> </tr> <tr> <td valign="top"> <p> TnAttributes </p> </td> <td width="351" valign="top"> <p> Attributes to be assigned to the telephone number. Optional parameter. Possible values - "Protected" </p> </td> </tr> </tbody> </table>

#### **get**

Retrieves the Bulk Port-in requests for the given account ID. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<BulkPortinResponses> <TotalCount>3</TotalCount> <Links> <first>Link=&lt;http://admin.localhost:8080/iris/accounts/1/bulkPortins?page=1&amp;size=3&amp;shortPayload=true&gt;;rel="first";</first> </Links> <BulkPortinResponse> <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate> <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate> <CreatedByUser>jbm</CreatedByUser> <LastModifiedBy>jbm</LastModifiedBy> <ProcessingStatus>[DRAFT|IN_PROGRESS|NEEDS_ATTENTION|CANCELLED|PARTIAL|COMPLETE]</ProcessingStatus> <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate> <CustomerOrderId>SJM00002</CustomerOrderId> <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson> <PortinList> <PortinOrderId>10f48fec-9db0-4f68-8bcb-c8a6a230a2d9</PortinOrderId> <PortinOrderId>059cf2d9-a004-4a88-866c-082c97fb7d5f</PortinOrderId> </PortinList> <Subscriber> <SubscriberType>[RESIDENTIAL|BUSINESS]</SubscriberType> <FirstName>First</FirstName> <LastName>Last</LastName> <!-- or 'BusinessName' --> <ServiceAddress> <HouseNumber>11235</HouseNumber> <StreetName>Back</StreetName> <City>Denver</City> <StateCode>CO</StateCode> <Zip>27541</Zip> <County>Canyon</County> <Country>United States</Country> <AddressType>Service</AddressType> </ServiceAddress> </Subscriber> <AccountNumber>771297665AABC</AccountNumber> <PinNumber>1234</PinNumber> <TnAttributes> <TnAttribute>Protected</TnAttribute> <TnAttribute>External</TnAttribute> <TnAttribute>Imported</TnAttribute> </TnAttributes> <BillingTelephoneNumber>9195551234</BillingTelephoneNumber> <SiteId>2857</SiteId> <PeerId>317771</PeerId> </BulkPortinResponse> <BulkPortinResponse> <!-- SNIP --> </BulkPortinResponse> <BulkPortinResponse> <!-- SNIP --> </BulkPortinResponse> <!-- SNIP --> </BulkPortinResponses>
```

#### **post**

Creates a Bulk Port-in request to be used as a template for a collections of individual port-in orders. This will be applied to port-ins that result from decomposing a collection of Telephone Numbers that span carriers, or have attributes that drive the decomposition into a number of individual port-in orders.
<p>Upon a successfully-submitted payload, the order will have a status of "DRAFT", denoting that further modification to the template is expected.
<p>Releated sub-resources are used to decompose the collection of Telephone Numbers into individual port-in orders.
<p>The only valid value for the <ProcessingStatus> element in a POST is 'DRAFT', which is the default value.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <BulkPortin> <ProcessingStatus>DRAFT</ProcessingStatus> <CustomerOrderId>SJM00002</CustomerOrderId> <RequestedFocDate>2014-12-04T13:00:00.000Z</RequestedFocDate> <BillingTelephoneNumber>8045030092</BillingTelephoneNumber> <AccountNumber>23453245</AccountNumber> <PinNumber>1111</PinNumber> <TnAttributes> <TnAttribute>Protected</TnAttribute> </TnAttributes> <Subscriber> <SubscriberType>RESIDENTIAL</SubscriberType> <FirstName>Steve</FirstName> <LastName>McKinnon</LastName> <ServiceAddress> <HouseNumber>115</HouseNumber> <StreetName>Monarch Way</StreetName> <City>Cary</City> <StateCode>NC</StateCode> <Zip>27518</Zip> </ServiceAddress> </Subscriber> <SiteId>743</SiteId> <PeerId>123456</PeerId> <LoaAuthorizingPerson>Steve McKinnon</LoaAuthorizingPerson> </BulkPortin>
```

##### Response

**201**

```xml
<BulkPortinResponse>
    <BulkPortin>
        <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate>
        <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate>
        <CreatedByUser>jbm</CreatedByUser>
        <LastModifiedBy>jbm</LastModifiedBy>
        <ProcessingStatus>DRAFT</ProcessingStatus>
        <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
        <CustomerOrderId>SJM00002</CustomerOrderId>
        <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
        <Subscriber>
            <SubscriberType>[RESIDENTIAL|BUSINESS]</SubscriberType>
            <FirstName>First</FirstName>
            <LastName>Last</LastName>
            <!-- or 'BusinessName' -->
            <ServiceAddress>
                <HouseNumber>11235</HouseNumber>
                <StreetName>Back</StreetName>
                <City>Denver</City>
                <StateCode>CO</StateCode>
                <Zip>27541</Zip>
                <County>Canyon</County>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </ServiceAddress>
        </Subscriber>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
        <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
        <SiteId>2857</SiteId>
        <PeerId>317771</PeerId>
    </BulkPortin>
</BulkPortinResponse>

```

**400**

```xml
<BulkPortinResponse>
    <ResponseStatus>
        <ErrorCode>7333</ErrorCode>
        <Description>Porting is not enabled on the account.</Description>
    </ResponseStatus>
</BulkPortinResponse>

```

### /accounts/{accountId}/bulkPortins/{orderid} {#orderid}
This resource retrieves information associated with the bulk port-in associated with the ID number specified.

#### **get**

Retrieves the information associated with the specified port-in ID number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<BulkPortinResponse>
    <BulkPortin>
        <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate>
        <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate>
        <CreatedByUser>jbm</CreatedByUser>
        <LastModifiedBy>jbm</LastModifiedBy>
        <ProcessingStatus>DRAFT</ProcessingStatus>
        <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
        <CustomerOrderId>SJM00002</CustomerOrderId>
        <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
        <Subscriber>
            <SubscriberType>[RESIDENTIAL|BUSINESS]</SubscriberType>
            <FirstName>First</FirstName>
            <LastName>Last</LastName>
            <!-- or 'BusinessName' -->
            <ServiceAddress>
                <HouseNumber>11235</HouseNumber>
                <StreetName>Back</StreetName>
                <City>Denver</City>
                <StateCode>CO</StateCode>
                <Zip>27541</Zip>
                <County>Canyon</County>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </ServiceAddress>
        </Subscriber>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
        <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
        <SiteId>2857</SiteId>
        <PeerId>317771</PeerId>
    </BulkPortin>
</BulkPortinResponse>

```

**404**

#### **put**

It is possible to change ("SUPP" in LNP terms) an existing Bulk Port-in order.  This is done via a PUT or PATCH on the existing order-id.
Since the Bulk Portin order resource acts as a template for portin orders in DRAFT status, any record can be changed at any time.
The PUT will completely replace the existing Bulk Portin order with the payload of the PUT.
The only valid value for the <ProcessingStatus> element in a PUT is 'DRAFT' where 'DRAFT' is the default value.
If the portin orders contained within the Bulk Port are in DRAFT state, any field can be modified.  If any portin order in the Bulk Port is in any other state, normal SUPP rules apply, and the list of appropriate fields is smaller.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BulkPortin>
    <ProcessingStatus>DRAFT</ProcessingStatus>
    <CustomerOrderId>SJM00002</CustomerOrderId>
    <RequestedFocDate>2014-12-04T13:00:00.000Z</RequestedFocDate>
    <BillingTelephoneNumber>8045030092</BillingTelephoneNumber>
    <AccountNumber>23453245</AccountNumber>
    <PinNumber>1111</PinNumber>
    <TnAttributes>
        <TnAttribute>Protected</TnAttribute>
    </TnAttributes>
    <Subscriber>
        <SubscriberType>RESIDENTIAL</SubscriberType>
        <FirstName>Steve</FirstName>
        <LastName>McKinnon</LastName>
        <ServiceAddress>
            <HouseNumber>115</HouseNumber>
            <StreetName>Monarch Way</StreetName>
            <City>Cary</City>
            <StateCode>NC</StateCode>
            <Zip>27518</Zip>
        </ServiceAddress>
    </Subscriber>
    <SiteId>743</SiteId>
    <PeerId>123456</PeerId>
    <LoaAuthorizingPerson>Steve McKinnon</LoaAuthorizingPerson>
</BulkPortin>

```

##### Response

**200**

```xml
<BulkPortinResponse>
    <BulkPortin>
        <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate>
        <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate>
        <CreatedByUser>jbm</CreatedByUser>
        <LastModifiedBy>jbm</LastModifiedBy>
        <ProcessingStatus>DRAFT</ProcessingStatus>
        <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
        <CustomerOrderId>SJM00002</CustomerOrderId>
        <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
        <Subscriber>
            <SubscriberType>[RESIDENTIAL|BUSINESS]</SubscriberType>
            <FirstName>First</FirstName>
            <LastName>Last</LastName>
            <!-- or 'BusinessName' -->
            <ServiceAddress>
                <HouseNumber>11235</HouseNumber>
                <StreetName>Back</StreetName>
                <City>Denver</City>
                <StateCode>CO</StateCode>
                <Zip>27541</Zip>
                <County>Canyon</County>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </ServiceAddress>
        </Subscriber>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
        <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
        <SiteId>2857</SiteId>
        <PeerId>317771</PeerId>
    </BulkPortin>
</BulkPortinResponse>

```

**400**

```xml
<BulkPortinResponse>
    <ResponseStatus>
        <Description>Please check your input parameters.</Description>
    </ResponseStatus>
    <PortinListErrors>
        <PortinErrors>
            <PortinOrderId>c358cb90-f1e6-4d72-92be-435411d50609</PortinOrderId>
            <Errors>
                <Error>
                    <Description>The order cannot be modified because the order is awaiting a response from the losing carrier</Description>
                    <ErrorCode>7300</ErrorCode>
                </Error>
            </Errors>
        </PortinErrors>
        <PortinErrors>
            <PortinOrderId>cb57e5a0-c70d-4f24-a450-bab62e908cc6</PortinOrderId>
            <Errors>
                <Error>
                    <Description>Unable to modify processing status for AUTOMATED port type</Description>
                    <ErrorCode>7367</ErrorCode>
                </Error>
            </Errors>
        </PortinErrors>
    </PortinListErrors>
</BulkPortinResponse>

```

**404**

#### **patch**

It is possible to change ("SUPP" in LNP terms) an existing Bulk Port-in order.  This is done via a PUT or PATCH on the existing order-id.
Since the Bulk Portin order resource acts as a template for portin orders in DRAFT status, any record can be changed at any time.
The PATCH will replace elements of the referenced Bulk Portin order, but it will replace *only* the records included in the request payload.  Other elements will remain untouched.
User may include delete attribute to whatever element which causes deletion of that element.
For example: <CustomerOrderId delete="true"/> will cause CustomerOrderId to be removed.
The only valid values for the <ProcessingStatus> element in a PUT or PATCH are 'DRAFT' or 'IN&lowbar;PROGRESS' where 'DRAFT' is the default value.
<b>Changing the &lt;ProcessingStatus&gt; to 'IN&lowbar;PROGRESS' will force all subtending portins to to begin processing</b>. This is only valid if there are subtending portins.
Changing the fields in a Bulk Portin order will cause the system to reapply all changed values to the ports contained in the list of subtending portin orders.
Note that if the portin orders contained within the Bulk Port are in DRAFT state, any field can be modified.  If any portin order in the Bulk Port is in any other state, normal SUPP rules apply, and the list of appropriate fields is smaller.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BulkPortin>
    <ProcessingStatus>DRAFT</ProcessingStatus>
    <CustomerOrderId>SJM00002</CustomerOrderId>
    <RequestedFocDate>2014-12-04T13:00:00.000Z</RequestedFocDate>
    <BillingTelephoneNumber>8045030092</BillingTelephoneNumber>
    <AccountNumber>23453245</AccountNumber>
    <PinNumber>1111</PinNumber>
    <TnAttributes>
        <TnAttribute>Protected</TnAttribute>
    </TnAttributes>
    <Subscriber>
        <SubscriberType>RESIDENTIAL</SubscriberType>
        <FirstName>Steve</FirstName>
        <LastName>McKinnon</LastName>
        <ServiceAddress>
            <HouseNumber>115</HouseNumber>
            <StreetName>Monarch Way</StreetName>
            <City>Cary</City>
            <StateCode>NC</StateCode>
            <Zip>27518</Zip>
        </ServiceAddress>
    </Subscriber>
    <SiteId>743</SiteId>
    <PeerId>123456</PeerId>
    <LoaAuthorizingPerson>Steve McKinnon</LoaAuthorizingPerson>
</BulkPortin>

```

##### Response

**200**

```xml
<BulkPortinResponse>
    <BulkPortin>
        <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate>
        <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate>
        <CreatedByUser>jbm</CreatedByUser>
        <LastModifiedBy>jbm</LastModifiedBy>
        <ProcessingStatus>DRAFT</ProcessingStatus>
        <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
        <CustomerOrderId>SJM00002</CustomerOrderId>
        <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
        <Subscriber>
            <SubscriberType>[RESIDENTIAL|BUSINESS]</SubscriberType>
            <FirstName>First</FirstName>
            <LastName>Last</LastName>
            <!-- or 'BusinessName' -->
            <ServiceAddress>
                <HouseNumber>11235</HouseNumber>
                <StreetName>Back</StreetName>
                <City>Denver</City>
                <StateCode>CO</StateCode>
                <Zip>27541</Zip>
                <County>Canyon</County>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </ServiceAddress>
        </Subscriber>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
        <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
        <SiteId>2857</SiteId>
        <PeerId>317771</PeerId>
    </BulkPortin>
</BulkPortinResponse>

```

**400**

```xml
<BulkPortinResponse>
    <ResponseStatus>
        <Description>Please check your input parameters.</Description>
    </ResponseStatus>
    <PortinListErrors>
        <PortinErrors>
            <PortinOrderId>c358cb90-f1e6-4d72-92be-435411d50609</PortinOrderId>
            <Errors>
                <Error>
                    <Description>The order cannot be modified because the order is awaiting a response from the losing carrier</Description>
                    <ErrorCode>7300</ErrorCode>
                </Error>
            </Errors>
        </PortinErrors>
        <PortinErrors>
            <PortinOrderId>cb57e5a0-c70d-4f24-a450-bab62e908cc6</PortinOrderId>
            <Errors>
                <Error>
                    <Description>Unable to modify processing status for AUTOMATED port type</Description>
                    <ErrorCode>7367</ErrorCode>
                </Error>
            </Errors>
        </PortinErrors>
    </PortinListErrors>
</BulkPortinResponse>

```

**404**

#### **delete**

Delete Bulk Port-in order with subdending port-ins. Deleting a bulk port-in allowed for 'DRAFT' state only.
Deleting a bulk port-in will delete all DRAFT port-ins associated with it.
If a bulk port-in contains a CANCELLED port-in (due to port decomposition finding non-portable TNs),
that port-in will be disassociated with the bulk port-in, but not deleted.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

**400**

```xml
<BulkPortinResponse>
    <BulkPortin>
        <Status>
            <Code>7709</Code>
            <Description>Bulk port-in with id d88763f4-8914-4301-bdca-6f409e4cd811 cannot be deleted since it is not in
                draft status.
            </Description>
        </Status>
    </BulkPortin>
</BulkPortinResponse>

```

**404**

### /accounts/{accountId}/bulkPortins/{orderid}/portinList {#portinList}
The PortinList is a list of Port-in Orders that are all associated with the identified Bulk Port-in.  This endpoint can both retrieve the list as well as restructure the list.

#### **get**

Retrieves a list of Port-in Orders that are all associated with the identified Bulk Port-in.   This response is not paginated due to its inherently limited size

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<PortinListResponse>
    <PortinList>
        <PortinOrderId>[portin order id]</PortinOrderId>
        <PortinOrderId>[portin order id]</PortinOrderId>
        <!-- SNIP -->
        <PortinOrderId>[portin order id]</PortinOrderId>
        <PortinOrderId>[portin order id]</PortinOrderId>
    </PortinList>
    <Errors>
        <Error>
            <ErrorCode>nnnnn</ErrorCode>
            <portinOrderId>[portin order id]</portinOrderId>
            <Description>string</Description>
        </Error>
        <Error>
            <ErrorCode>nnnnn</ErrorCode>
            <portinOrderId>[portin order id]</portinOrderId>
            <Description>string</Description>
        </Error>
    </Errors>
</PortinListResponse>

```

#### **put**

A PUT on a PortinList resource will cause replacement of the list of Port-in orders associated with a Bulk Port-in.
This PUT will *completely replace* the existing list of port-in orders associated with the Bulk Port-in.  If all port-in orders in the list are not valid the PUT request will fail, due to the potential for losing the port-in to Bulk Port-in relationships for a range of port-in orders.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<PortinList>
    <PortinOrderId>[portin order id]</PortinOrderId>
    <PortinOrderId>[portin order id]</PortinOrderId>
    <!-- SNIP -->
    <PortinOrderId>[portin order id]</PortinOrderId>
    <PortinOrderId>[portin order id]</PortinOrderId>
</PortinList>

```

##### Response

**200**

```xml
<PortinListResponse>
    <PortinList>
        <PortinOrderId>[portin order id]</PortinOrderId>
        <PortinOrderId>[portin order id]</PortinOrderId>
        <!-- SNIP -->
        <PortinOrderId>[portin order id]</PortinOrderId>
        <PortinOrderId>[portin order id]</PortinOrderId>
    </PortinList>
    <Errors>
        <Error>
            <ErrorCode>nnnnn</ErrorCode>
            <portinOrderId>[portin order id]</portinOrderId>
            <Description>string</Description>
        </Error>
        <Error>
            <ErrorCode>nnnnn</ErrorCode>
            <portinOrderId>[portin order id]</portinOrderId>
            <Description>string</Description>
        </Error>
    </Errors>
</PortinListResponse>

```

**400**

### /accounts/{accountId}/bulkPortins/{orderid}/notes {#notes}
The /notes resource manages a note or set of notes associated with an order.

#### **post**

Updates the Notes resource by adding a note. Adding a note to a port-in order causes a notification to be sent to Bandwidth Operations, so that they may assist as necessary.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**201**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

#### **get**

Retrieve the set of notes associated with an order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>87037</Id>
        <UserId>jbm</UserId>
        <Description>This is a test note</Description>
        <LastDateModifier>2014-11-16T04:01:10.000Z</LastDateModifier>
    </Note>
    <Note>
        <Id>87039</Id>
        <UserId>smckinnon</UserId>
        <Description>This is a second test note</Description>
        <LastDateModifier>2014-11-16T04:08:46.000Z</LastDateModifier>
    </Note>
</Notes>

```

**204**

### /accounts/{accountId}/bulkPortins/{orderid}/notes/{noteId} {#noteId}
Resource manages a note.

#### **put**

Updates single note by it's id.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| noteId | string | true |

###### Body

**application/xml**

```xml
<Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

### /accounts/{accountId}/bulkPortins/{orderid}/tnList {#tnList}
The TnList is a collection (called a bucket elsewhere) of Telephone Numbers that are destined to be decomposed into a set of port-in orders based on a set of industry based and network based tools.    This API causes the decomposition, as well as provide a way to get a comprehensive list of Telephone Numbers associated with the Bulk Portin.

#### **get**

Retrieves a list of all telephone numbers associated with a Bulk Portin.   This response is not paginated due to its inherently limited size

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TnListResponse>
    <ValidTnList>
        <TN>[telephone number]</TN>
        <TN>[telephone number]</TN>
        <!-- SNIP -->
        <TN>[telephone number]</TN>
        <TN>[telephone number]</TN>
    </ValidTnList>
    <NonPortableTnList>
        <TN>[telephone number]</TN>
        <!-- SNIP -->
        <TN>[telephone number]</TN>
    </NonPortableTnList>
    <InvalidTnList>
        <TN>[not a telephone number]</TN>
        <!-- SNIP -->
        <TN>[not a telephone number]</TN>
    </InvalidTnList>
</TnListResponse>

```

#### **put**

A PUT on a TnList resource causes the decomposition of that list of TNs into individual port-in orders that comply with the rules for atomic ports.
The result is the creation of a set of port-in orders, with TNs associated with each order.  The response payload indicates the TNs that were successfully decomposed, and the TNs that could not be ported.
The response payload contains three optional elements:
<ul><li>the 'ValidTnList' - a collection of telephone numbers that can be ported</li>
<li>the 'NonPortableTnList' - a collection of telephone numbers that cannot be ported, and </li>
<li>the 'InvalidTnList' - a collection of any strings that were submitted as telephone numbers, but that are not syntactically valid</li></ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<TnList>
    <TN>[telephone number]</TN>
    <TN>[telephone number]</TN>
    <!-- SNIP -->
    <TN>[telephone number]</TN>
    <TN>[telephone number]</TN>
</TnList>

```

##### Response

**200**

```xml
<TnListResponse>
    <ValidTnList>
        <TN>[telephone number]</TN>
        <TN>[telephone number]</TN>
        <!-- SNIP -->
        <TN>[telephone number]</TN>
        <TN>[telephone number]</TN>
    </ValidTnList>
    <NonPortableTnList>
        <TN>[telephone number]</TN>
        <!-- SNIP -->
        <TN>[telephone number]</TN>
    </NonPortableTnList>
    <InvalidTnList>
        <TN>[not a telephone number]</TN>
        <!-- SNIP -->
        <TN>[not a telephone number]</TN>
    </InvalidTnList>
</TnListResponse>

```

**400**

### /accounts/{accountId}/bulkPortins/{orderid}/history {#history}
This resource retrieves the history of a bulk port-in order. Obtaining history for a draft bulk port-in is not supported.

#### **get**

Retrieves the history of the specified bulk port-in order. Obtaining history for a draft bulk port-in is not supported.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>2018-06-12T13:44:47.604Z</OrderDate>
        <Note>Draft order has been created/updated</Note>
        <Author>systemUser</Author>
        <Status>DRAFT</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2018-06-12T13:49:02.328Z</OrderDate>
        <Note>Draft order has been created/updated</Note>
        <Author>systemUser</Author>
        <Status>DRAFT</Status>
        <Difference>SiteId : 0 --&gt; 743</Difference>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2018-06-12T13:49:46.350Z</OrderDate>
        <Note>Order has been submitted/updated</Note>
        <Author>systemUser</Author>
        <Status>IN_PROGRESS</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2018-06-12T13:51:13.855Z</OrderDate>
        <Note>Order has been submitted/updated</Note>
        <Author>systemUser</Author>
        <Status>IN_PROGRESS</Status>
        <Difference>SubscriberType : "" --&gt; residential</Difference>
    </OrderHistory>
</OrderHistoryWrapper>
<!--The following response will be returned when the bulk port-in is in DRAFT state-->
<OrderHistoryWrapper>
    <IrisStatus>
        <Code>7710</Code>
        <Description>History is not supported for bulk port-ins or individual port-ins in draft status.</Description>
    </IrisStatus>
</OrderHistoryWrapper>

```

**404**

```xml
<BulkPortInHistoryResponse>
    <ResponseStatus>
        <Description>The resource does not exist</Description>
    </ResponseStatus>
</BulkPortInHistoryResponse>

```

### /accounts/{accountId}/bulkPortins/{orderid}/loas {#loas}
The LOAS resource allows the uploading and storage of files that are associated with orders.   It use the standard form-data approach for http file upload.  Details of the POST API call that drives the file upload are provided below.
    <br>
The following MIME types are supported for the LOA upload file:<br>
<ul>
<li>PDF("application/pdf")</li>
<li>PLAIN("text/plain")</li>
<li>JPG("image/jpeg")</li>
<li>TIFF("image/tiff")</li>
<li>CSV("text/csv")</li>
<li>XML("application/xml")</li>
<li>WAV("audio/x-wav")</li>
<li>ZIP("application/zip")</li>
</ul>
<br>
The file upload is equivalent of the use of CURL to upload a file...<br>
    <br>
<code> curl -H 'Content-Type: {MIME Type}' --data-binary "@{Filename}" –iv {Base URL}/[portins | bulkPortins | importtnorders]/{order-id}/loas<br>
</code>
    <br>
an example for the upload of a pdf file is...<br>
    <br>
<code> curl -H 'Content-Type: application/pdf' --data-binary "@Test_LOA.pdf" -iv {BASE URL}/portins/{order-id}/loas<br>
</code>

#### **get**

Retrieves the list of the loa (and other) files associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<fileListResponse>
    <fileCount>2</fileCount>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1092874634747.pdf</fileNames>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1430814967669.pdf</fileNames>
    <resultCode>0</resultCode>
    <resultMessage>LOA file list successfully returned</resultMessage>
</fileListResponse>
<!-- OR --, for the case where there are no files... -->
<fileListResponse>
    <fileCount>0</fileCount>
    <resultCode>0</resultCode>
    <resultMessage>No LOA files found for order</resultMessage>
</fileListResponse>

```

#### **post**

POSTing to the /loas resource will enable the upload of the file.  The key attribute to the POST is ensuring that the headers are correctly set to support the file upload.<br>
    <br>
Header settings typical of a valid upload are...<br>
    <br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

### /accounts/{accountId}/bulkPortins/{orderid}/loas/{fileid} {#fileid}
A GET on the loas file resource will cause the downloading of the file in a manner consistent with typical browser file downloads.

#### **get**

Retrieves the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

#### **put**

A PUT on the filename will update / replace the identified file id.  The format of the PUT is identical to that of the POST.<br>
Header settings typical of a valid upload are...<br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

**404**

#### **delete**

Deletes the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/bulkPortins/{orderid}/loas/{fileid}/metadata {#metadata}
It is often useful to attach additional data to an order in the form of an attached file, and so the existing LOA capability has been extended to optionally allow different file information to be included with a file, to describe type and purpose information.  The MetaData associated with a file includes a file document name and a document type, which is one of [LOA | INVOICE | CSR | OTHER].<br>
Naming of the existing "loas" API has been preserved to ensure backwards compatibility.

#### **get**

Retrieves the metadata associated with the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

**404**

#### **put**

Associate metadata with the file named in the resource path.  This will describe the file, and declare the data that is contained in the file, selected from a list of [LOA | INVOICE | CSR | OTHER].

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

###### Body

**application/xml**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

##### Response

**200**

**400**

#### **delete**

Deletes the metadata previously associated with the identified file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/csrs {#csrs}

#### **get**

Retrieves the csr orders for the given account ID.<br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<CsrResponses>
    <TotalCount>3</TotalCount>
    <Links>
        <first>Link=&lt;http://admin.localhost:8080/iris/accounts/1/csrs?page=1&amp;size=3&amp;shortPayload=true&gt;;rel="first";</first>
    </Links>
    <CsrResponse>
        <CustomerOrderId>someValue</CustomerOrderId>
        <LastModifiedBy>systemUser</LastModifiedBy>
        <OrderCreateDate>2019-10-25T09:51:17Z</OrderCreateDate>
        <AccountId>1</AccountId>
        <OrderId>a2f55ebe-782a-4242-983b-6ae6cfa97833</OrderId>
        <LastModifiedDate>2019-10-25T12:51:22.139Z</LastModifiedDate>
        <Status>COMPLETE</Status>
        <AccountNumber>987654321</AccountNumber>
        <AccountTelephoneNumber>9196194444</AccountTelephoneNumber>
        <EndUserName>bandwidthGuy</EndUserName>
        <AuthorizingUserName>importantAuthGuy</AuthorizingUserName>
        <CustomerCode>123</CustomerCode>
        <EndUserPIN>12345</EndUserPIN>
        <AddressLine1>900 Main Campus Dr</AddressLine1>
        <City>Raleigh</City>
        <State>NC</State>
        <ZIPCode>27612</ZIPCode>
       <TypeOfService>residential</TypeOfService>
       <CsrData>
        <AccountNumber>123456789</AccountNumber>
        <CustomerName>JOHN SMITH</CustomerName>
        <ServiceAddress>
            <UnparsedAddress>900 MAIN CAMPUS DR</UnparsedAddress>
            <City>RALEIGH</City>
            <State>NC</State>
            <Zip>27616</Zip>
        </ServiceAddress>
        <WorkingTelephoneNumber>9196191211</WorkingTelephoneNumber>
        <WorkingTelephoneNumbersOnAccount>
            <TelephoneNumber>9196191211</TelephoneNumber>
        </WorkingTelephoneNumbersOnAccount>
    </CsrData>
    </CsrResponse>
    <CsrResponse>
        <!-- SNIP -->
    </CsrResponse>
    <CsrResponse>
        <!-- SNIP -->
    </CsrResponse>
    <!-- SNIP -->
</CsrResponses>

```

### /accounts/{accountId}/discnumbers {#discnumbers}
This API call provides information on numbers that have been disconnected from an account.

#### **get**

Retrieves a list of disconnected numbers associated with the account. There are optional search parameters to limit the discNumbers payload

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<TNs> <TotalCount>4</TotalCount> <Links> <first>Link=<http://api.qa.inetwork.com/iris/accounts/12346099/discNumbers?size=500&page=1>;rel="first";</first> </Links> <TelephoneNumbers> <Count>2</Count> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> </TelephoneNumbers> </TNs>
```

### /accounts/{accountId}/discnumbers/totals {#totals}
Retrieves a total number of disconnects for the account within the specified (optional) date range.

#### **get**

Retrieves a total number of disconnects.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<Quantity>
    <Count>4</Count>
</Quantity>

```

### /accounts/{accountId}/disconnects {#disconnects}
Use this method to disconnect telephone numbers from the account. <br>
This call creates a disconnects order that can be used to track the disconnection of the numbers.
<table>
    <tr>
        <th>Parameter</th><th>Description</th>
    </tr>
    <tr>
        <td>accountid</td><td>The numerical Account ID that you will be disconnecting the numbers from.</td>
    </tr>
    <tr>
        <td>Name</td><td>The name of the order. Max length restricted to 50 characters</td>
    </tr>
    <tr>
        <td>TelephoneNumberList</td>
        <td>A list of telephone numbers to disconnect.<br/>
          supported for disconnect orders.</i>
        </td>
    </tr>
    </tr>
    <tr>
        <td>DisconnectMode</td>
        <td>The severity of disconnect order. Optional parameter.  Typically normal.<br/>
        </td>
    </tr>
    <tr>
        <td>Protected</td>
        <td>Change protected status of telephones during disconnection. Optional parameter. Possible values: <b>TRUE</b>, <b>FALSE</b>, <b>UNCHANGED</b>. Typically <b>UNCHANGED</b>.<br/>
        </td>
    </tr>
</table>

#### **get**

retrieve a list of disconnect orders that is associated with an account

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>7</TotalCount>
        <Links>
                           <!-- SNIP -->
        </Links>
        <OrderIdUserIdDate>
            <CountOfTNs>1</CountOfTNs>
            <userId>smckinnon</userId>
            <lastModifiedDate>2014-01-10T17-34-15Z</lastModifiedDate>
            <OrderId>6d7da966-e071-4741-b31c-1d8932f4b8da</OrderId>
            <OrderType>disconnect</OrderType>
            <OrderDate>2014-01-10T17-34-15.797Z</OrderDate>
            <OrderStatus>COMPLETE</OrderStatus>
            <TelephoneNumberDetails>
                            <!-- SNIP -->
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>1</CountOfTNs>
            <userId>jbm</userId>
            <lastModifiedDate>2013-12-04T21-59-32Z</lastModifiedDate>
            <OrderId>4ffe9262-1965-4479-a1d5-b8584440667d</OrderId>
            <OrderType>disconnect</OrderType>
            <OrderDate>2013-12-04T21-59-32.243Z</OrderDate>
            <OrderStatus>COMPLETE</OrderStatus>
            <TelephoneNumberDetails>
                              <!-- SNIP -->
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Links>
    <first>   Link description  </first>
</Links>

```

#### **post**

Create a Disconnect order, and disconnect the numbers listed in the disconnect order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0"?>
<DisconnectTelephoneNumberOrder>
    <name>training run</name>
    <DisconnectTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumberList>
        <Protected>UNCHANGED</Protected>
    </DisconnectTelephoneNumberOrderType>
</DisconnectTelephoneNumberOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <orderRequest>
        <CustomerOrderId></CustomerOrderId>
        <id>ba05e04b-192a-47cb-b182-b1bf6cfef0d7</id>
        <OrderCreateDate>2014-07-03T14-12-57.840Z</OrderCreateDate>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>4158714245</TelephoneNumber>
                <TelephoneNumber>4352154439</TelephoneNumber>
                <TelephoneNumber>4352154466</TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>normal</DisconnectMode>
            <Protected>UNCHANGED</Protected>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
</DisconnectTelephoneNumberOrderResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <ErrorList>
        <Error>
            <Code>54321</Code>
            <Description>Some error description</Description>
        </Error>
    </ErrorList>
    <orderRequest>
        <OrderCreateDate>2019-11-19T14:06:57.254Z</OrderCreateDate>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>4158714245</TelephoneNumber>
            </TelephoneNumberList>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
</DisconnectTelephoneNumberOrderResponse>

```

### /accounts/{accountId}/disconnects/{disconnectid} {#disconnectid}
This method retrieves the information associated with the disconnect order specified.

#### **get**

Retrieves the information associated with the disconnect order specified.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| disconnectid | string | true |

##### Response

**200**

```xml
<DisconnectTelephoneNumberOrderResponse> <DisconnectedTelephoneNumberList> <TelephoneNumber>9199998830</TelephoneNumber> </DisconnectedTelephoneNumberList> <orderRequest> <id>4ffe9262-1965-4479-a1d5-b8584440667d</id> <OrderCreateDate>2013-12-04T21:59:32.243Z</OrderCreateDate> <DisconnectTelephoneNumberOrderType> <TelephoneNumberList> <TelephoneNumber>9199998830</TelephoneNumber> </TelephoneNumberList> <DisconnectMode>normal</DisconnectMode> <Protected>UNCHANGED</Protected> </DisconnectTelephoneNumberOrderType> </orderRequest> <OrderStatus>COMPLETE</OrderStatus> </DisconnectTelephoneNumberOrderResponse>
```

### /accounts/{accountId}/disconnects/{disconnectid}/notes {#notes}
The /notes resource manages a note or set of notes associated with an order.

#### **post**

Updates the Notes resource by adding a note. Adding a note to a port-in order causes a notification to be sent to Bandwidth Operations, so that they may assist as necessary.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| disconnectid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**201**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

#### **get**

Retrieve the set of notes associated with an order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| disconnectid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>87037</Id>
        <UserId>jbm</UserId>
        <Description>This is a test note</Description>
        <LastDateModifier>2014-11-16T04:01:10.000Z</LastDateModifier>
    </Note>
    <Note>
        <Id>87039</Id>
        <UserId>smckinnon</UserId>
        <Description>This is a second test note</Description>
        <LastDateModifier>2014-11-16T04:08:46.000Z</LastDateModifier>
    </Note>
</Notes>

```

**204**

### /accounts/{accountId}/disconnects/{disconnectid}/notes/{noteId} {#noteId}
Resource manages a note.

#### **put**

Updates single note by it's id.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| disconnectid | string | true |
| noteId | string | true |

###### Body

**application/xml**

```xml
<Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

### /accounts/{accountId}/dldas {#dldas}
The DLDAs Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to associate the street address with the telephone number.  This API allows the creation and observation of a <b>"Directory Listing and Directory Assistance"</b> work order that causes an update of a address information in a network Database. <br>
This API call supports <b>GET</b> to retrieve information about outstanding DLDAs orders.

#### **get**

Retrieve a list of the DLDA orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?> <ResponseSelectWrapper> <ListOrderIdUserIdDate> <TotalCount>3</TotalCount> <OrderIdUserIdDate> <accountId>14</accountId> <CountOfTNs>2</CountOfTNs> <userId>team_ua</userId> <lastModifiedDate>2014-07-07T10:06:43.427Z</lastModifiedDate> <OrderType>dlda</OrderType> <OrderDate>2014-07-07T10:06:43.427Z</OrderDate> <orderId>37a6447c-1a0b-4be9-ba89-3f5cb0aea142</orderId> <OrderStatus>FAILED</OrderStatus> </OrderIdUserIdDate> <OrderIdUserIdDate> <accountId>14</accountId> <CountOfTNs>2</CountOfTNs> <userId>team_ua</userId> <lastModifiedDate>2014-07-07T10:05:56.595Z</lastModifiedDate> <OrderType>dlda</OrderType> <OrderDate>2014-07-07T10:05:56.595Z</OrderDate> <orderId>743b0e64-3350-42e4-baa6-406dac7f4a85</orderId> <OrderStatus>RECEIVED</OrderStatus> </OrderIdUserIdDate> <OrderIdUserIdDate> <accountId>14</accountId> <CountOfTNs>2</CountOfTNs> <userId>team_ua</userId> <lastModifiedDate>2014-07-07T09:32:17.234Z</lastModifiedDate> <OrderType>dlda</OrderType> <OrderDate>2014-07-07T09:32:17.234Z</OrderDate> <orderId>f71eb4d2-bfef-4384-957f-45cd6321185e</orderId> <OrderStatus>RECEIVED</OrderStatus> </OrderIdUserIdDate> </ListOrderIdUserIdDate> </ResponseSelectWrapper>
```

**404**

#### **post**

Create DLDA order to associate the street address with the telephone number.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TelephoneNumbers</td>
      <td>A list of telephone numbers you need to bind information from payload.</td>
    </tr>
    <tr>
      <td>SubscriberType</td>
      <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
    </tr>
    <tr>
      <td>ListingType</td>
      <td>Can be LISTED, NON\_LISTED or NON\_PUBLISHED. The element is required</td>
    </tr>
    <tr>
      <td>ListingName</td>
      <td>This field is required. Inner fields: FirstName (this field is required in case RESIDENTIAL SubscriberType is chosen), FirstName2, LastName (this field is required), Designation, TitleOfLineage, TitleOfAddress, TitleOfAddress2, TitleOfLineageName2, TitleOfAddressName2, TitleOfAddress2Name2, and PlaceListingAs are optional<br>Please see the note below on sorting of Business Listings.</td>
    </tr>
    <tr>
      <td>ListAddress</td>
      <td>Can be true or false. The element is required.</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>This field is required. Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour and AddressType=DLDA.<br>City, HouseNumber, StreetName, City, State and Zipcode are required fields.</td>
    </tr>
    <tr>
      <td>CustomerOrderId</td>
      <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order. The element is optional. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
  </tbody>
</table>
<b>Business Listings...</b> <br>Business Listings sort differently than Residential Listings, and must be submitted accordingly.  Since Business Listings sort starting at the beginning of the name, where Residential Listings sort on Last Name, the parts of the business name that will govern the sorting need to be entered in the LastName field.  For example, Joe's Pizza sorts starting with Joe, so the entire business name would be entered in the LastName field, and the Firstname could be left blank.  If there was a portion of the name that was not important from a sorting perspective (perhaps "the best pizza in town"), that portion could be placed in the FirstName field.<br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<DldaOrder>
    <CustomerOrderId>[String]</CustomerOrderId>
    <DldaTnGroups>
        <DldaTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>5202217754</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberType>RESIDENTIAL</SubscriberType>
            <ListingType>LISTED</ListingType>
            <ListingName>
                <FirstName>John</FirstName>
                <FirstName2/>
                <LastName>Smith</LastName>
                <Designation/>
                <TitleOfLineage/>
                <TitleOfAddress/>
                <TitleOfAddress2/>
                <TitleOfLineageName2/>
                <TitleOfAddressName2/>
                <TitleOfAddress2Name2/>
                <PlaceListingAs/>
            </ListingName>
            <ListAddress>true</ListAddress>
            <Address>
                <HousePrefix/>
                <HouseNumber>915</HouseNumber>
                <HouseSuffix/>
                <PreDirectional/>
                <StreetName>Elm</StreetName>
                <StreetSuffix>Ave</StreetSuffix>
                <PostDirectional/>
                <AddressLine2/>
                <City>Carpinteria</City>
                <StateCode>CA</StateCode>
                <Zip>93013</Zip>
                <PlusFour/>
                <County/>
                <AddressType>DLDA</AddressType>
            </Address>
        </DldaTnGroup>
    </DldaTnGroups>
</DldaOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <DldaOrderResponse> <DldaOrder> <CustomerOrderId>[String]</CustomerOrderId> <OrderCreateDate>2014-07-16T07:59:08.065Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>team_ua</CreatedByUser> <OrderId>f2ac3343-5bff-424a-b8ca-975f5e7b159e</OrderId> <LastModifiedDate>2014-07-16T07:59:08.065Z</LastModifiedDate> <ErrorList/> <ProcessingStatus>RECEIVED</ProcessingStatus> <DldaTnGroups> <DldaTnGroup> <TelephoneNumbers> <TelephoneNumber>5202217754</TelephoneNumber> </TelephoneNumbers> <AccountType>RESIDENCE</AccountType> <ListingType>LISTED</ListingType> <ListingName> <FirstName>John</FirstName> <FirstName2></FirstName2> <LastName>Smith</LastName> <Designation></Designation> <TitleOfLineage></TitleOfLineage> <TitleOfAddress></TitleOfAddress> <TitleOfAddress2></TitleOfAddress2> <TitleOfLineageName2></TitleOfLineageName2> <TitleOfAddressName2></TitleOfAddressName2> <TitleOfAddress2Name2></TitleOfAddress2Name2> <PlaceListingAs></PlaceListingAs> </ListingName> <ListAddress>true</ListAddress> <Address> <HousePrefix></HousePrefix> <HouseNumber>915</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional></PostDirectional> <AddressLine2></AddressLine2> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour></PlusFour> <County></County> <Country>United States</Country> <AddressType>Dlda</AddressType> </Address> </DldaTnGroup> </DldaTnGroups> </DldaOrder> </DldaOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <DldaOrderResponse> <ResponseStatus> <ErrorCode>16104</ErrorCode> <Description>No numbers for processing</Description> </ResponseStatus> <DldaOrder> <CustomerOrderId>REST Site</CustomerOrderId> <OrderCreateDate>2014-07-17T10:06:55.204Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>team_ua</CreatedByUser> <LastModifiedDate>2014-07-17T10:06:55.204Z</LastModifiedDate> <ErrorList> <Error> <Code>5070</Code> <Description>Telephone number is invalid.</Description> <TelephoneNumber></TelephoneNumber> </Error> </ErrorList> <ProcessingStatus>FAILED</ProcessingStatus> <DldaTnGroups> <DldaTnGroup> <TelephoneNumbers> <TelephoneNumber></TelephoneNumber> </TelephoneNumbers> <AccountType>RESIDENCE</AccountType> <ListingType>LISTED</ListingType> <ListingName> <FirstName>John</FirstName> <FirstName2></FirstName2> <LastName>Smith</LastName> <Designation></Designation> <TitleOfLineage></TitleOfLineage> <TitleOfAddress></TitleOfAddress> <TitleOfAddress2></TitleOfAddress2> <TitleOfLineageName2></TitleOfLineageName2> <TitleOfAddressName2></TitleOfAddressName2> <TitleOfAddress2Name2></TitleOfAddress2Name2> <PlaceListingAs></PlaceListingAs> </ListingName> <ListAddress>true</ListAddress> <Address> <HousePrefix></HousePrefix> <HouseNumber>915</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional></PostDirectional> <AddressLine2></AddressLine2> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour></PlusFour> <County></County> <Country>United States</Country> <AddressType>DLDA</AddressType> </Address> </DldaTnGroup> </DldaTnGroups> </DldaOrder> </DldaOrderResponse>
```

### /accounts/{accountId}/dldas/{orderid} {#orderid}
This API returns data about the specific DLDAs Order specified as the resource

#### **get**

Retrieve information about a DLDA Order with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?> <DldaOrderResponse> <DldaOrder> <CustomerOrderId>5a88d16d-f8a9-45c5-a5db-137d700c6a22</CustomerOrderId> <OrderCreateDate>2014-07-10T12:38:11.833Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>ea9e90c2-77a4-4f82-ac47-e1c5bb1311f4</OrderId> <LastModifiedDate>2014-07-10T12:38:11.833Z</LastModifiedDate> <ErrorList> <Error> <Code>16103</Code> <Description>DL/DA information cannot be changed because the number is already being processed </Description> <TelephoneNumber>2053778335</TelephoneNumber> </Error> </ErrorList> <ProcessingStatus>RECEIVED</ProcessingStatus> <DldaTnGroups> <DldaTnGroup> <TelephoneNumbers> <TelephoneNumber>2053778335</TelephoneNumber> <TelephoneNumber>2053865784</TelephoneNumber> </TelephoneNumbers> <AccountType>BUSINESS</AccountType> <ListingType>LISTED</ListingType> <ListingName> <FirstName>Joe</FirstName> <LastName>Smith</LastName> </ListingName> <ListAddress>true</ListAddress> <Address> <HouseNumber>12</HouseNumber> <StreetName>ELM</StreetName> <City>New York</City> <StateCode>NY</StateCode> <Zip>10007</Zip> <Country>United States</Country> <AddressType>Dlda</AddressType> </Address> </DldaTnGroup> </DldaTnGroups> </DldaOrder> </DldaOrderResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?> <DldaOrderResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </DldaOrderResponse>
```

#### **put**

Update DLDA order to associate the street address with the telephone number.
The key data elements in the submission are -
     <table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>TelephoneNumbers</td>
          <td>A list of telephone numbers you need to bind information from payload.</td>
        </tr>
        <tr>
          <td>AccountType</td>
          <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
        </tr>
        <tr>
          <td>ListingType</td>
          <td>Can be LISTED, NON\_LISTED or NON\_PUBLISHED. The element is required</td>
        </tr>
        <tr>
          <td>ListingName</td>
          <td>Inner fields: FirstName, FirstName2, LastName, Designation, TitleOfLineage, TitleOfAddress, TitleOfAddress2, TitleOfLineageName2, TitleOfAddressName2, TitleOfAddress2Name2, PlaceListingAs.</td>
        </tr>
        <tr>
          <td>ListAddress</td>
          <td>Can be true or false. The element is required.</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>This field is required. Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour, AddressType</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order. The element is optional. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
        </tr>
      </tbody>
    </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<DldaOrder>
    <CustomerOrderId>[String]</CustomerOrderId>
    <DldaTnGroups>
        <DldaTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>5202217754</TelephoneNumber>
            </TelephoneNumbers>
            <AccountType>RESIDENCE</AccountType>
            <ListingType>LISTED</ListingType>
            <ListingName>
                <FirstName>John</FirstName>
                <FirstName2/>
                <LastName>Smith</LastName>
                <Designation/>
                <TitleOfLineage/>
                <TitleOfAddress/>
                <TitleOfAddress2/>
                <TitleOfLineageName2/>
                <TitleOfAddressName2/>
                <TitleOfAddress2Name2/>
                <PlaceListingAs/>
            </ListingName>
            <ListAddress>true</ListAddress>
            <Address>
                <HousePrefix/>
                <HouseNumber>915</HouseNumber>
                <HouseSuffix/>
                <PreDirectional/>
                <StreetName>Elm</StreetName>
                <StreetSuffix>Ave</StreetSuffix>
                <PostDirectional/>
                <AddressLine2/>
                <City>Carpinteria</City>
                <StateCode>CA</StateCode>
                <Zip>93013</Zip>
                <PlusFour/>
                <County/>
                <AddressType>DLDA</AddressType>
            </Address>
        </DldaTnGroup>
    </DldaTnGroups>
</DldaOrder>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <DldaOrderResponse> <DldaOrder> <CustomerOrderId>[String]</CustomerOrderId> <OrderCreateDate>2014-07-10T12:38:11.833Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>team_ua</CreatedByUser> <OrderId>f179237b-c1cb-449d-9590-aaa9d0bf3ca4</OrderId> <LastModifiedDate>2014-07-17T12:21:02.644Z</LastModifiedDate> <ErrorList/> <ProcessingStatus>RECEIVED</ProcessingStatus> <DldaTnGroups> <DldaTnGroup> <TelephoneNumbers> <TelephoneNumber>2199347436</TelephoneNumber> </TelephoneNumbers> <AccountType>RESIDENCE</AccountType> <ListingType>NON_LISTED</ListingType> <ListingName> <FirstName>John</FirstName> <FirstName2></FirstName2> <LastName>Smith</LastName> <Designation></Designation> <TitleOfLineage></TitleOfLineage> <TitleOfAddress></TitleOfAddress> <TitleOfAddress2></TitleOfAddress2> <TitleOfLineageName2></TitleOfLineageName2> <TitleOfAddressName2></TitleOfAddressName2> <TitleOfAddress2Name2></TitleOfAddress2Name2> <PlaceListingAs></PlaceListingAs> </ListingName> <ListAddress>true</ListAddress> <Address> <HousePrefix></HousePrefix> <HouseNumber>915</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional></PostDirectional> <AddressLine2></AddressLine2> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour></PlusFour> <County></County> <Country>United States</Country> <AddressType>Dlda</AddressType> </Address> </DldaTnGroup> </DldaTnGroups> </DldaOrder> </DldaOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <DldaOrderResponse> <ResponseStatus> <ErrorCode>16105</ErrorCode> <Description>Order cannot be changed or cancelled because it is already being processed</Description> </ResponseStatus> </DldaOrderResponse>
```

### /accounts/{accountId}/dldas/{orderid}/history {#history}
The history API returns the various events that have impacted the specified DLDA order.

#### **get**

Retrieve the history information associated with a named DLDA order.  This indicates the various states that the order has passed through, as well as the current state of the order as the last entry.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>2014-09-04T16:28:11.320Z</OrderDate>
        <Note>The DL/DA request has been received</Note>
        <Author>jbm</Author>
        <Status>RECEIVED</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-09-04T16:28:18.742Z</OrderDate>
        <Note>
            The DL/DA request is being processed by our 3rd party supplier
        </Note>
        <Author>jbm</Author>
        <Status>PROCESSING</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-09-05T19:00:17.968Z</OrderDate>
        <Note>The DL/DA request is complete for all TNs</Note>
        <Author>jbm</Author>
        <Status>COMPLETE</Status>
    </OrderHistory>
</OrderHistoryWrapper>

```

**404**

```xml
<DldaOrderReportResponse>
    <ResponseStatus>
        <Description>The resource does not exist</Description>
    </ResponseStatus>
</DldaOrderReportResponse>

```

### /accounts/{accountId}/e911s {#e911s}
The E911s Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to associate a postal address with an endpoint (a telephone number, ACID (alternate caller identifier), or some other unique identifier. This API allows the creation and observation of a "E911" work order that causes an update of a address information in a network database.<br><br>
The E911 order processing model is consistent with the overall model of creating an order or request with the initial POST, and then checking on the status of that order using callbacks and / or GET while that order progresses through the various steps in the process.<br><br>
The E911 order supports several 911 use cases:
<ol>
  <li><strong>CONVENTIONAL E911: </strong><br>
    Telephone number/address combination. For UC Trunking and most applicable wholesale customers, this method associates a telephone number in the customer’s Bandwidth Dashboard API TN inventory to a postal address. Caller name can also be specified in the request.
    At 911 call time, the address that is associated with the telephone number in the SIP 'from' header will be seen by the Public Safety Answering Point (PSAP).
  </li>
  <li><strong>PIDF-LO (Presence Information Data Format-Location Object or Dynamic Location Routing) Endpoints and Addresses: </strong><br>
    For customers utilizing Bandwidth’s Dynamic Routing capability, addresses are first added to an "address pool", then endpoints are provisioned using one of the addresses as a default for taxation purposes.
    Each endpoint is represented by an Alternate End User Identifier consisting of a unique identifier (could be TN, ACID, or other identifier), callback number and caller name (if not being passed in at 911 call time), and preferred language (French or English, with English as the default).
    At 911 call time, the customer can pass any address in the SIP header of the call and the sip 'from' header will contain the identifier of the endpoint.
    If the address in the call matches an address in the address pool, then the call is routed to the PSAP. Otherwise, the call is routed to an Emergency Call Center.
  </li>
  <li><strong>SIMPLE AEUI: </strong>
    This is similar to telephone number/address combination in that there is a 1 to 1 mapping between endpoint and address. Each endpoint is represented by an Alternate End User Identifier(AEUI) consisting of a unique identifier and callback number.
    At 911 call time, the endpoint identifier is passed in the SIP from header and the address that is associated with that endpoint will be seen by the PSAP.
  </li>
</ol>
The states that the order may reside in are <b>RECEIVED</b>, <b>PROCESSING</b>, <b>COMPLETE</b>, <b>PARTIAL</b>, <b>FAILED</b>, <b>ADJUSTED\_COMPLETE</b>, and <b>ADJUSTED\_PARTIAL</b>.<br>
"ADJUSTED" indicates that the provisioning was successful, but that the street address was subtly changed to reflect a geocodable address.
As with other order types, PARTIAL indicates that there were some errors detected, but that all elements of the order that could be processed were processed.
In this case, the order record will need to be examined to determine the items that failed.

#### **get**

Retrieve a list of the E911 orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <E911Orders> <TotalCount>2</TotalCount> <E911OrderSummary> <accountId>1</accountId> <CountOfTNs>1</CountOfTNs> <userId>admin</userId> <lastModifiedDate>2015-08-03T14:41:01.769Z</lastModifiedDate> <OrderDate>2015-08-03T14:41:00.815Z</OrderDate> <OrderType>e911</OrderType> <OrderStatus>COMPLETE</OrderStatus> <OrderId>6dae2a67-b8f5-4bf2-9bf7-5216277b9be3</OrderId> </E911OrderSummary> <E911OrderSummary> <accountId>1</accountId> <CountOfTNs>1</CountOfTNs> <userId>admin</userId> <lastModifiedDate>2015-08-03T14:40:19.008Z</lastModifiedDate> <OrderDate>2015-08-03T14:40:17.864Z</OrderDate> <OrderType>e911</OrderType> <OrderStatus>ADJUSTED_COMPLETE</OrderStatus> <OrderId>6a97b54f-459e-4683-a79c-0de52acf7c6b</OrderId> </E911OrderSummary> </E911Orders> <!-- OR if orderDetails = true... --> <E911Orders> <TotalCount>2</TotalCount> <E911Order> <OrderCreateDate>2015-08-03T14:41:00.815Z</OrderCreateDate> <AccountId>1</AccountId> <CreatedByUser>admin</CreatedByUser> <OrderId>6dae2a67-b8f5-4bf2-9bf7-5216277b9be3</OrderId> <LastModifiedDate>2015-08-03T14:41:01.769Z</LastModifiedDate> <Address> <HouseNumber>800</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>PENNSYLVANIA AVE</StreetName> <StreetSuffix>NW</StreetSuffix> <AddressLine2></AddressLine2> <City>WASHINGTON</City> <StateCode>DC</StateCode> <Zip>20004</Zip> <PlusFour></PlusFour> <Country>United States</Country> </Address> <CallerName>0931180f-4</CallerName> <ErrorList/> <ProcessingStatus>COMPLETE</ProcessingStatus> <TelephoneNumbers> <TelephoneNumber>9142971000</TelephoneNumber> </TelephoneNumbers> </E911Order> <E911Order> <OrderCreateDate>2015-08-03T14:40:17.864Z</OrderCreateDate> <AccountId>1</AccountId> <CreatedByUser>admin</CreatedByUser> <OrderId>6a97b54f-459e-4683-a79c-0de52acf7c6b</OrderId> <LastModifiedDate>2015-08-03T14:40:19.008Z</LastModifiedDate> <Address> <HouseNumber>1600</HouseNumber> <HouseSuffix></HouseSuffix> <PreDirectional></PreDirectional> <StreetName>PENNSYLVANIA AVE</StreetName> <StreetSuffix>NW</StreetSuffix> <AddressLine2></AddressLine2> <City>WASHINGTON</City> <StateCode>DC</StateCode> <Zip>20500</Zip> <PlusFour>0003</PlusFour> <Country>United States</Country> </Address> <CallerName>0931180f-4</CallerName> <ErrorList/> <ProcessingStatus>ADJUSTED_COMPLETE</ProcessingStatus> <TelephoneNumbers> <TelephoneNumber>9142971000</TelephoneNumber> </TelephoneNumbers> </E911Order> </E911Orders>
```

**404**

#### **post**

Create E911 order to associate the address with the telephone number.
The key data elements in the submission are as follows.
 <table style="text-align: left; width: 80%;"
  border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TelephoneNumbers</td>
      <td>A list of telephone numbers you need link to the street address.</td>
    </tr>
    <tr>
      <td>CallerName</td>
      <td>CallerName that will be linked to TNs. This field is required in the case of a new address assignment.</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>This field is required in the case of a new address assignment.  Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour.  Streetname, City, and State are required.  House Number is currently required, although this enforcement may be relaxed in the future. Depending on the type of E911 service, the Location ID may be updated by the Bandwidth Dashboard API</td>
    </tr>
    <tr>
      <td>DeleteTNSpecificE911Address</td>
      <td>Can be true or false. If value is true then Address and CallerName should not be specified.</td>
    </tr>
    <tr>
      <td>AlternateEndUserIdentifiers</td>
      <td>A list of AEUIs acts as a replacement for the list of telephone numbers. It replaces the TelephoneNumbers and AdditionalAddress payload element. If ACID exists in external system it will be updated with given values.</td>
    </tr>
    <tr>
      <td>AdditionalAddresses</td>
      <td>A list of Address sections. This address information for all potential endpoints which will be provisioned to the Bandwidth 911 system. At call time, the customer will submit this address information within the SIP header and, if a match is determined, the call will be routed to the PSAP nearest to that address. Otherwise, the call will be routed to an ECC. These Address sections will be the same in format to the Address section in the top-level of the E911Order payload. It replaces the TelephoneNumbers and AlternateEndUserIdentifiers payload element. </td>
    </tr>
    <tr>
      <td>CustomerOrderId</td>
      <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order. The element is optional. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
  </tbody>
</table>
<br/>Examples of POST requests:
<table>
  <tbody>
    <tr>
      <th width="20%">Description</th>
      <th width="80%">Example</th>
    </tr>
    <tr>
      <td>
        <strong>CONVENTIONAL E911</strong><br>
        TN/Address-provisioning order.<br>
        <b>TelephoneNumbers</b>, <b>TelephoneNumber</b>, and <b>Address</b> are required.
      </td>
      <td>
        <!-- We have to leave this indent as-is because the <pre> tag is stupid and uses non-relative whitespacing.-->
        <pre>
&lt;E911Order&gt;
  &lt;TelephoneNumbers&gt;
    &lt;TelephoneNumber&gt;9706542332&lt;/TelephoneNumber&gt;
    &lt;TelephoneNumber&gt;9706542333&lt;/TelephoneNumber&gt;
  &lt;/TelephoneNumbers&gt;
  &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
  &lt;Address&gt;
    &lt;HouseNumber&gt;915&lt;/HouseNumber&gt;
    &lt;HouseSuffix/&gt;
    &lt;PreDirectional/&gt;
    &lt;StreetName&gt;Elm&lt;/StreetName&gt;
    &lt;StreetSuffix&gt;Ave&lt;/StreetSuffix&gt;
    &lt;PostDirectional/&gt;
    &lt;AddressLine2/&gt;
    &lt;City&gt;Carpinteria&lt;/City&gt;
    &lt;StateCode&gt;CA&lt;/StateCode&gt;
    &lt;Zip&gt;93013&lt;/Zip&gt;
    &lt;PlusFour/&gt;
    &lt;County/&gt;
    &lt;Country&gt;United States&lt;/Country&gt;
  &lt;/Address&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        <strong>CONVENTIONAL E911</strong><br>
        TN/address-deletion order.<br>
        <b>TelephoneNumbers</b> and <b>TelephoneNumber</b> are required.<br>
        <b>DeleteTNSpecificE911Address</b> is required and must be set to 'true'.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;TelephoneNumbers&gt;
    &lt;TelephoneNumber&gt;9706542332&lt;/TelephoneNumber&gt;
    &lt;TelephoneNumber&gt;9706542333&lt;/TelephoneNumber&gt;
  &lt;/TelephoneNumbers&gt;
  &lt;DeleteTNSpecificE911Address&gt;true&lt;/DeleteTNSpecificE911Address&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        <strong>PIDF-LO</strong><br>
        PIDF-LO AEUI endpoint-provisioning order with additional address provisioning and without pre-defined location id.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, and <b>Identifier</b> are required.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 1 and 30 characters.<br>
        <b>PIDFLOEnabled</b> is required and must be 'true'.<br>
        Default value of <b>PreferredLanguage</b> is 'en'.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;Address&gt;
    &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
    &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
    &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;StateCode&gt;NC&lt;/StateCode&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
    &lt;Country&gt;United States&lt;/Country&gt;
    &lt;AddressType&gt;E911&lt;/AddressType&gt;
  &lt;/Address&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
      &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;blep123&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
      &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        <strong>PIDF-LO</strong><br>
        PIDF-LO AEUI endpoint-provisioning order with additional address provisioning and with pre-defined location id.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, and <b>Identifier</b> are required.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 1 and 30 characters.<br>
        <b>PIDFLOEnabled</b> is required and must be 'true'.<br>
        Default value of <b>PreferredLanguage</b> is 'en'.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;Address&gt;
    &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
    &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
    &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
    &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;StateCode&gt;NC&lt;/StateCode&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
    &lt;Country&gt;United States&lt;/Country&gt;
    &lt;AddressType&gt;E911&lt;/AddressType&gt;
  &lt;/Address&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
      &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;blep123&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
      &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        <strong>PIDF-LO</strong><br>
        PIDF-LO AEUI endpoint-provisioning order with provisioned location id.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>LocationId</b>, and <b>Identifier</b> are required.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 1 and 30 characters.<br>
        <b>PIDFLOEnabled</b> is required and must be 'true'.<br>
        Default value of <b>PreferredLanguage</b> is 'en'.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;blep123&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
      &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>PIDF-LO</strong> and <strong>SIMPLE AEUI</strong><br>
        Mixed PIDF-LO AEUI and Non-PIDF-LO AEUI endpoint-provisioning order.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, and <b>Identifier</b> are required.<br>
        Default value of <b>PreferredLanguage</b> is 'en'.<br>
        <strong>Non-PIDF-LO:</strong><br>
        <b>CallbackNumber</b> is required.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 6 and 30 characters.<br>
        <strong>PIDF-LO:</strong><br>
        <b>PIDFLOEnabled</b> is required and must be 'true'.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 1 and 30 characters.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
  &lt;Address&gt;
    &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
    &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
    &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
    &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;StateCode&gt;NC&lt;/StateCode&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
    &lt;Country&gt;United States&lt;/Country&gt;
    &lt;AddressType&gt;E911&lt;/AddressType&gt;
  &lt;/Address&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;blep123&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
      &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
    &lt;/AlternateEndUserIdentifier&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallbackNumber&gt;9706542334&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;blepblop&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;false&lt;/PIDFLOEnabled&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>PIDF-LO</strong> and <strong>SIMPLE AEUI</strong><br>
        PIDF-LO and Non-PIDF-LO endpoint-deletion order.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, and <b>Identifier</b> are required.<br>
        <b>DeleteTNSpecificE911Address</b> is required and must be 'true'.<br>
        <strong>Non-PIDF-LO:</strong><br>
        <b>CallbackNumber</b> is required.<br>
        <b>Identifier</b> can only contain alphanumeric characters 6 and 30 characters.<br>
        <strong>PIDF-LO:</strong><br>
        <b>PIDFLOEnabled</b> is required and must be 'true'.<br>
        <b>Identifier</b> can only contain alphanumeric characters and must be between 1 and 30 characters.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;Identifier&gt;identifier&lt;/Identifier&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
  &lt;DeleteTNSpecificE911Address&gt;true&lt;/DeleteTNSpecificE911Address&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>PIDF-LO</strong><br>
        PIDF-LO address-provisioning order.<br>
        <b>AdditionalAddresses</b> and <b>Address</b> are required.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;AdditionalAddresses&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
      &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
      &lt;City&gt;RALEIGH&lt;/City&gt;
      &lt;StateCode&gt;NC&lt;/StateCode&gt;
      &lt;Zip&gt;27606&lt;/Zip&gt;
      &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
      &lt;Country&gt;United States&lt;/Country&gt;
      &lt;AddressType&gt;E911&lt;/AddressType&gt;
    &lt;/Address&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;HouseNumber&gt;645&lt;/HouseNumber&gt;
      &lt;PreDirectional&gt;E&lt;/PreDirectional&gt;
      &lt;StreetName&gt;MANCHESTER&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;AVE&lt;/StreetSuffix&gt;
      &lt;City&gt;LOS ANGELES&lt;/City&gt;
      &lt;StateCode&gt;United States&lt;/StateCode&gt;
      &lt;Zip&gt;90001&lt;/Zip&gt;
      &lt;Country&gt;United States&lt;/Country&gt;
    &lt;/Address&gt;
  &lt;/AdditionalAddresses&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>PIDF-LO</strong> <br>
        PIDF-LO address-editing order.<br>
        <b>Address</b> and <b>LocationId</b> are required.<br>
        Allows a user to update all address fields except <b>PlusFour</b> and <b>Country</b>.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;AdditionalAddresses&gt;
    &lt;Address&gt;
      &lt;HouseNumber&gt;645&lt;/HouseNumber&gt;
      &lt;PreDirectional&gt;E&lt;/PreDirectional&gt;
      &lt;HouseSuffix&gt;1/2&lt;/HouseSuffix&gt;
      &lt;PostDirectional&gt;S&lt;/PostDirectional&gt;
      &lt;StreetName&gt;Manchester&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;AVE&lt;/StreetSuffix&gt;
      &lt;AddressLine2&gt;test address line 2&lt;/AddressLine2&gt;
      &lt;City&gt;Los Angeles&lt;/City&gt;
      &lt;StateCode&gt;CA&lt;/StateCode&gt;
      &lt;Zip&gt;90001&lt;/Zip&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
    &lt;/Address&gt;
  &lt;/AdditionalAddresses&gt;
&lt;/E911Order&gt;
          </pre>
      </td>
    </tr>
    <tr>
      <td><strong>PIDF-LO</strong><br>
        PIDF-LO address-deletion order.<br>
        <b>AdditionalAddresses</b>, <b>Address</b>, and <b>LocationId</b> are required.<br>
        <b>DeleteTNSpecificE911Address</b> is required and must be 'true'.
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;AdditionalAddresses&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString1&lt;/LocationId&gt;
    &lt;/Address&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString1&lt;/LocationId&gt;
    &lt;/Address&gt;
  &lt;/AdditionalAddresses&gt;
  &lt;DeleteTNSpecificE911Address&gt;true&lt;/DeleteTNSpecificE911Address&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
    <tr>
      <td><strong>SIMPLE AEUI</strong><br>
        Non-PIDF-LO endpoint-provisioning order.<br>
        <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, <b>CallbackNumber</b>, and <b>Identifier</b> are required<br>
        <b>Identifier</b> can only contain alphanumeric characters, must contain at least one letter, and must be between 6 and 30 characters.<br>
      </td>
      <td>
        <pre>
&lt;E911Order&gt;
  &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
  &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
  &lt;Address&gt;
    &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
    &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
    &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
    &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;StateCode&gt;NC&lt;/StateCode&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
    &lt;Country&gt;United States&lt;/Country&gt;
    &lt;AddressType&gt;E911&lt;/AddressType&gt;
  &lt;/Address&gt;
  &lt;AlternateEndUserIdentifiers&gt;
    &lt;AlternateEndUserIdentifier&gt;
      &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
      &lt;Identifier&gt;abc123&lt;/Identifier&gt;
      &lt;PIDFLOEnabled&gt;false&lt;/PIDFLOEnabled&gt;
    &lt;/AlternateEndUserIdentifier&gt;
  &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
      </td>
    </tr>
  </tbody>
</table>
<br/><b>Error Codes.</b>
<br/>For all possible error codes that can be returned in an E911 order, refer to section 6.4 of the Error Code Reference.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**201**

```xml
<?xml version="1.0"?> <E911OrderResponse> <E911Order> <CustomerOrderId>CustomOrderId1</CustomerOrderId> <orderId>1d863522-c9bf-430c-8e79-cc63cad04a1d</orderId> <ProcessingStatus>RECEIVED</ProcessingStatus> <TelephoneNumbers> <TelephoneNumber>9706542332</TelephoneNumber> <TelephoneNumber>9706542333</TelephoneNumber> </TelephoneNumbers> <CallerName>CustomCallerName</CallerName> <Address> <HouseNumber>915</HouseNumber> <HouseSuffix/> <PreDirectional/> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional/> <AddressLine2/> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour/> <County/> <Country/> </Address> </E911Order> </E911OrderResponse>
```

**400**

```xml
<?xml version="1.0"?> <E911OrderResponse> <ResponseStatus> <ErrorCode>5070</ErrorCode> <Description>Telephone number is invalid.</Description> </ResponseStatus> </E911OrderResponse>
```

### /accounts/{accountId}/e911s/{orderid} {#orderid}
This API returns data about the specific E911s Order specified as the resource

#### **get**

Retrieve information about a E911 Order with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <E911Order> <OrderCreateDate>2015-06-16T14:03:10.199Z</OrderCreateDate> <AccountId>111</AccountId> <CreatedByUser>admin</CreatedByUser> <OrderId>8578086b-f73d-4a0f-bba6-d20399c7de31</OrderId> <LastModifiedDate>2015-06-16T14:03:10.789Z</LastModifiedDate> <Address> <HouseNumber>901</HouseNumber> <StreetName>Main Campus Drive</StreetName> <City>Raleigh</City> <StateCode>NC</StateCode> <Zip>27606</Zip> <Country>United States</Country> </Address> <CallerName>testName111111</CallerName> <CustomerOrderId>test</CustomerOrderId> <ProcessingStatus>PARTIAL</ProcessingStatus> <TelephoneNumbers> <TelephoneNumber>3172000218</TelephoneNumber> <TelephoneNumber>3172000000</TelephoneNumber> </TelephoneNumbers> <ErrorList> <Error> <Code>8003</Code> <Description>Telephone numbers does not belong to this account.</Description> <TelephoneNumbers> <TelephoneNumber>3172000000</TelephoneNumber> </TelephoneNumbers> </Error> <Error> <Code>8009</Code> <Description>Telephone numbers not in 'Inservice'</Description> <TelephoneNumbers> <TelephoneNumber>3172000000</TelephoneNumber> </TelephoneNumbers> </Error> </ErrorList> <!-- or, instead of TelephoneNumbers, a list of Alternative identifiers can be returned --> <AlternateEndUserIdentifiers> <AlternateEndUserIdentifier> <PIDFLOEnabled>true</PIDFLOEnabled> <Identifier>alphanumeric characters only, 1 character minimum, 30 characters maximum </Identifier> <CallbackNumber>9706542332</CallbackNumber> <CallerName>Eli</CallerName> <PreferredLanguage>en</PreferredLanguage> <LocationId>Some32CharacterOrLessString</LocationId> <Address> <LocationId>Some32CharacterOrLessString</LocationId> <HouseNumber>915</HouseNumber> <HouseSuffix/> <PreDirectional/> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional/> <AddressLine2/> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour/> <County/> <Country>United States</Country> </Address> </AlternateEndUserIdentifier> <AlternateEndUserIdentifier> <PIDFLOEnabled>true</PIDFLOEnabled> <Identifier>alphanumeric characters only, 1 character minimum, 30 characters maximum </Identifier> <CallbackNumber>9706542333</CallbackNumber> <CallerName>Ethan</CallerName> <PreferredLanguage>en</PreferredLanguage> </AlternateEndUserIdentifier> </AlternateEndUserIdentifiers> <!-- or, instead of the TelephoneNumbers and Alternative identifiers, a list of Additional Addresses can be returned --> <AdditionalAddresses> <Address> <LocationId>Some32CharacterOrLessString</LocationId> <HouseNumber>915</HouseNumber> <HouseSuffix/> <PreDirectional/> <StreetName>Elm</StreetName> <StreetSuffix>Ave</StreetSuffix> <PostDirectional/> <AddressLine2/> <City>Carpinteria</City> <StateCode>CA</StateCode> <Zip>93013</Zip> <PlusFour/> <County/> <Country>United States</Country> </Address> </AdditionalAddresses> <OrderType>e911</OrderType> </E911Order>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <E911OrderReportResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </E911OrderReportResponse>
```

### /accounts/{accountId}/e911s/{orderid}/history {#history}
The history API returns the various events that have impacted the specified E911 order.

#### **get**

Retrieve the history information associated with an order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/externalTns {#externalTns}
The externalTns order resource represents the requests made to the Bandwidth Dashboard API to add or remove customer owned or managed telephone numbers into or from the Bandwidth Dashboard API.  This API request will create an order record specific to the request that can be used to understand and track the outcome of the request once complete
<br><br>
The information below captures the REST endpoint URL and Payloads that are used to install or remove customer provided external telephone numbers from the Bandwidth Dashboard API.
<br><br>
This API has been developed based on similar existing functionality available in the Bandwidth Dashboard API, but has been refined to focus purely on the task of managing numbers that have been provided to Bandwidth by our customers, allowing the Dashboard business logic to be specific and focused with respect to managing these telephone numbers.
<br><br>
The API follows the Bandwidth Dashboard API order model, where an order-id is created to track the interaction and refer back to it as needed.  This record will also be persisted to enable examination of past events.
<br><br>
This single API controls both the installation and removal of telephone numbers.  The action is controlled by the use of an element in the payload, allowing a simple model for managing both addition and removal of telephone numbers.  Additionally, if the status of an existing telephone number needs to be reset within the Bandwidth Dashboard API, possibly as the result of an ownership change (port) of the telephone number, the API can be called to re-add the number to the Bandwidth Dashboard API, which will perform a reset on that number without removing it from service first.
<br><br>
The externalTns order tracks the orders related to customer-provided numbers into the customer's account.
<br><br>
This Import/Delete request reflects a customer-executed import or removal of numbers that they own and/or control.  The telephone numbers in question cannot be Bandwidth CLEC numbers, and are not subject to the normal telephone number life-cycle.<br><br>

#### **get**

Retrieve a list of the externalTns orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ExternalTnsOrders> <TotalCount>2</TotalCount> <ExternalTnsOrder> <OrderCreateDate>2018-01-09T02:58:04.615Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>sjm</CreatedByUser> <OrderId>bf1305b8-8998-1111-2222-51ba3ce52d4e</OrderId> <LastModifiedDate>2018-01-09T02:58:05.298Z</LastModifiedDate> <SiteId>65487</SiteId> <TelephoneNumbers> <TelephoneNumber>2106078250</TelephoneNumber> <TelephoneNumber>2109678273</TelephoneNumber> <TelephoneNumber>2109678331</TelephoneNumber> <TelephoneNumber>2109678337</TelephoneNumber> <TelephoneNumber>2266401468</TelephoneNumber> </TelephoneNumbers> <Action>IMPORT</Action> <LoaType>SUBSCRIBER</LoaType> <ProcessingStatus>PARTIAL</ProcessingStatus> <Errors> <Error> <Code>13552</Code> <Description>Telephone numbers already exist.</Description> <TelephoneNumbers> <TelephoneNumber>2262665583</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> <SipPeerId>885544</SipPeerId> </ExternalTnsOrder> <ExternalTnsOrder> <OrderCreateDate> 2018-01-09T02:58:04.609Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>sjm</CreatedByUser> <OrderId>b63d342b-9400-4da9-1111-ca7a3889e5ec</OrderId> <LastModifiedDate>2018-01-09T02:58:04.962Z</LastModifiedDate> <SiteId>12345</SiteId> <TelephoneNumbers> <TelephoneNumber>3068035413</TelephoneNumber> <TelephoneNumber>3068035414</TelephoneNumber> <TelephoneNumber>3437003595</TelephoneNumber> <TelephoneNumber>4387977665</TelephoneNumber> </TelephoneNumbers> <Action>IMPORT</Action> <ProcessingStatus>PARTIAL</ProcessingStatus> <Errors> <Error> <Code>13552</Code> <Description>Telephone numbers already exist.</Description> <TelephoneNumbers> <TelephoneNumber>4387977665</TelephoneNumber> <TelephoneNumber>5817036252</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> <SipPeerId>666555</SipPeerId> </ExternalTnsOrder> </ExternalTnsOrders>
```

**404**

#### **post**

Create a externalTns order to add or remove telephone numbers provided by the customer from the Bandwidth network.
Note: the attempt to import a telephone number that is already present in the account will *not* create an error, but will reset all of the  attributes of that telephone number in the Dashboard system as if the telephone number was being imported for the first time
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>CustomerOrderId</td>
      <td>An order ID created by the customer for their tracking purposes. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
    <tr>
      <td>SiteId</td>
      <td>(Required) The ID of the Site that the Telephone Numbers are to be provisioned to.</td>
    </tr>
    <tr>
      <td>SipPeerId</td>
      <td>(Optional) The ID of the SIP Peer that the Telephone Numbers are to be provisioned to.</td>
    </tr>
    <tr>
      <td>Action</td>
      <td>(Required) Indentify the action on external TNs. Allowed values... IMPORT or REMOVE.</td>
    </tr>
    <tr>
      <td>LoaType</td>
      <td>(Optional) Indentify the LoaType on external TNs. Allowed values... CARRIER or  SUBSCRIBER. Default value is CARRIER</td>
    </tr>
  </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExternalTnsOrder>
    <CustomerOrderId>ICPA123ABC</CustomerOrderId>
    <SiteId>743</SiteId>
    <SipPeerId>303716</SipPeerId>
    <Action>[ IMPORT | REMOVE ]</Action>
    <LoaType>[ CARRIER | SUBSCRIBER ]</LoaType>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</ExternalTnsOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ExternalTnsOrderResponse> <ExternalTnsOrder> <CustomerOrderId>SJM000001</CustomerOrderId> <OrderCreateDate>2018-01-20T02:59:54.000Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>smckinnon</CreatedByUser> <OrderId>b05de7e6-0cab-4c83-81bb-9379cba8efd0</OrderId> <LastModifiedDate>2018-01-20T02:59:54.000Z</LastModifiedDate> <SiteId>202</SiteId> <SipPeerId>520565</SipPeerId> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> <Action>IMPORT</Action> <LoaType>CARRIER</LoaType> <ProcessingStatus>RECEIVED</ProcessingStatus> <Errors/> </ExternalTnsOrder> </ExternalTnsOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ExternalTnsOrderResponse> <ResponseStatus> <ErrorCode>5081</ErrorCode> <Description>Action is absent or invalid. Possible values  IMPORT, REMOVE</Description> </ResponseStatus> </ExternalTnsOrderResponse>
```

### /accounts/{accountId}/externalTns/{orderid} {#orderid}
This API returns data about the specific externalTns order specified as the resource

#### **get**

Retrieve information about a externalTns order with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ExternalTnsOrder> <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate> <AccountId>1</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId> <LastModifiedDate>2018-01-10T05:20:47.661Z</LastModifiedDate> <ProcessingStatus>PARTIAL</ProcessingStatus> <CustomerOrderId>ICPA123ABC</CustomerOrderId> <SiteId>743</SiteId> <SipPeerId>303716</SipPeerId> <Action>[ IMPORT | REMOVE ]</Action> <LoaType>[ CARRIER | SUBSCRIBER ]</LoaType> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> <Errors> <Error> <Code>[int]</Code> <Description>[string]</Description> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> </ExternalTnsOrder>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ExternalTnsOrderResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </ExternalTnsOrderResponse>
```

### /accounts/{accountId}/geocodeRequest {#geocodeRequest}
This resource is used to geocode addresses.

#### **post**

POST is used to validate address as geocode-able one. Request payload is the address to geocode. If decomposed elements are provided for AddressLine 1 then AddressLine1 is ignored. At least HouseNumber and StreetName are required to use them as replacement of AddressLine1. If at least HouseNumber or StreetName is absent then AddressLine1 is used. AddressLine1 information is required in either way. City and StateCode fields are required.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <RequestAddress> <AddressLine1>904 E Ansun Str</AddressLine1> <HousePrefix/> <HouseNumber>904</HouseNumber> <HouseSuffix>E</HouseSuffix> <PreDirectional/> <StreetName>Ansun</StreetName> <StreetSuffix>Str</StreetSuffix> <PostDirectional/> <AddressLine2/> <City>Marshalltown</City> <StateCode>IA</StateCode> <Zip>50158</Zip> <PlusFour/> <County/> <Country/> </RequestAddress>
```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <GeocodeRequestResponse> <GeocodedAddress> <AddressLine1>904 E ANSON ST</AddressLine1> <HouseNumber>904</HouseNumber> <PreDirectional>E</PreDirectional> <StreetName>ANSON</StreetName> <StreetSuffix>ST</StreetSuffix> <City>MARSHALLTOWN</City> <StateCode>IA</StateCode> <Zip>50158</Zip> <PlusFour>3522</PlusFour> <Country>US</Country> </GeocodedAddress> <RequestAddress> <HouseNumber>904</HouseNumber> <HouseSuffix>E</HouseSuffix> <StreetName>Anson</StreetName> <StreetSuffix>St</StreetSuffix> <City>Marshalltown</City> <StateCode>IA</StateCode> <Zip>50158</Zip> <Country>US</Country> <AddressLine1>904 E Anson St</AddressLine1> </RequestAddress> </GeocodeRequestResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <GeocodeRequestResponse> <ResponseStatus> <ErrorCode>12110</ErrorCode> <Description>This address could not be validated / geocoded</Description> </ResponseStatus> </GeocodeRequestResponse>
```

**409**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <GeocodeRequestResponse> <ErrorMessage> Some adjustments are required to allow the address to pass geocoding%3A Specified value - Street Name %3A "ANSUN" Valid value - "ANSON" Specified value - Street Suffix %3A "STR" Valid value - "ST" </ErrorMessage> <GeocodedAddress> <AddressLine1>904 E ANSON ST</AddressLine1> <HouseNumber>904</HouseNumber> <PreDirectional>E</PreDirectional> <StreetName>ANSON</StreetName> <StreetSuffix>ST</StreetSuffix> <City>MARSHALLTOWN</City> <StateCode>IA</StateCode> <Zip>50158</Zip> <PlusFour>3522</PlusFour> <Country>US</Country> </GeocodedAddress> <RequestAddress> <HouseNumber>904</HouseNumber> <HouseSuffix>E</HouseSuffix> <StreetName>Ansun</StreetName> <StreetSuffix>Str</StreetSuffix> <City>Marshalltown</City> <StateCode>IA</StateCode> <Zip>50158</Zip> <Country>US</Country> <AddressLine1>904 E Ansun Str</AddressLine1> </RequestAddress> </GeocodeRequestResponse>
```

**500**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <GeocodeRequestResponse> <ResponseStatus> <ErrorCode>12111</ErrorCode> <Description>Error during E911 Geocoding API response handling</Description> </ResponseStatus> </GeocodeRequestResponse>
```

**503**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <GeocodeRequestResponse> <ResponseStatus> <ErrorCode>12109</ErrorCode> <Description>E911 Geocoding Service is temporary unavailable</Description> </ResponseStatus> </GeocodeRequestResponse>
```

### /accounts/{accountId}/hosts {#hosts}

#### **get**

Retrieve information about the hosts of account, as guided by optional search parameters.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteHostsResponse>
    <SiteHosts>
        <SiteHost>
            <SiteId>5</SiteId>
            <SipPeerHosts>
                <SipPeerHost>
                    <SipPeerId>500146</SipPeerId>
                    <SmsHosts/>
                    <VoiceHosts>
                        <Host>
                            <HostName>47.16.211.63</HostName>
                        </Host>
                    </VoiceHosts>
                    <TerminationHosts/>
                </SipPeerHost>
            </SipPeerHosts>
        </SiteHost>
    </SiteHosts>
</SiteHostsResponse>

```

### /accounts/{accountId}/importTnChecker {#importTnChecker}
The import tn checker resource performs a portability analysis for a set ot TNs, returning information about availability to import TNs and list of TNs that cannot be imported grouped by errors.

#### **post**

Request portability information on a set of TNs

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<ImportTnCheckerPayload>
    <TelephoneNumbers>
        <TelephoneNumber>3032281000</TelephoneNumber>
        <TelephoneNumber>4109235436</TelephoneNumber>
        <TelephoneNumber>4104685864</TelephoneNumber>
    </TelephoneNumbers>
</ImportTnCheckerPayload>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ImportTnCheckerResponse>
    <ImportTnCheckerPayload>
        <TelephoneNumbers>
            <TelephoneNumber>3032281000</TelephoneNumber>
        </TelephoneNumbers>
        <ImportTnErrors>
            <ImportTnError>
                <Code>19006</Code>
                <Description>Bandwidth numbers cannot be imported by this account at this time.</Description>
                <TelephoneNumbers>
                    <TelephoneNumber>4109235436</TelephoneNumber>
                    <TelephoneNumber>4104685864</TelephoneNumber>
                </TelephoneNumbers>
            </ImportTnError>
        </ImportTnErrors>
    </ImportTnCheckerPayload>
</ImportTnCheckerResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ImportTnCheckerResponse>
    <Errors>
        <Code>7201</Code>
        <Description>61746052083 is not a valid NANPA telephone number.</Description>
    </Errors>
    <Errors>
        <Code>7201</Code>
        <Description>61746052082 is not a valid NANPA telephone number.</Description>
    </Errors>
</ImportTnCheckerResponse>

```

### /accounts/{accountId}/importTnOrders {#importTnOrders}
The importtnorders endpoint is used to manage requests to import a number into the Bandwidth Dashboard API.  The importtnorders endpoint causes the creation of an <b>order</b> that is used to manage the import tn event throughout the lifecycle of the request.

#### **get**

Retrieves the importtnorders requests for the given account ID. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ImportTnOrders> <TotalCount>2</TotalCount> <ImportTnOrderSummary> <ImportTnOrderSummary> <accountId>14</accountId> <CountOfTNs>1</CountOfTNs> <CustomerOrderId>CustomerOrderId</CustomerOrderId> <userId>systemUser</userId> <lastModifiedDate>2019-01-24T11:08:09.770Z</lastModifiedDate> <OrderDate>2019-01-24T11:08:09.770Z</OrderDate> <OrderType>import_tn_orders</OrderType> <OrderStatus>COMPLETE</OrderStatus> <OrderId>211a103c-5f9c-4117-8833-c574bdc390fd</OrderId> </ImportTnOrderSummary> </ImportTnOrderSummary> <ImportTnOrderSummary> <ImportTnOrderSummary> <accountId>14</accountId> <CountOfTNs>2</CountOfTNs> <CustomerOrderId>CustomerOrderId</CustomerOrderId> <userId>systemUser</userId> <lastModifiedDate>2019-01-24T10:43:16.934Z</lastModifiedDate> <OrderDate>2019-01-24T10:43:16.934Z</OrderDate> <OrderType>import_tn_orders</OrderType> <OrderStatus>PARTIAL</OrderStatus> <OrderId>8dc32f09-2329-4c73-b702-526f46b02712</OrderId> </ImportTnOrderSummary> </ImportTnOrderSummary> </ImportTnOrders>
```

#### **post**

Creates an importTnOrders request to add numbers under the given site ID and sippeer ID as specified in the body.
A successfully submitted order will have a status of "RECEIVED". A successfully completed order will have a status of "COMPLETE" if all of the telephone numbers were successfully imported and  "PARTIAL" if some of the telephone numbers were imported. A failed order with will have a staus of "FAILED" and no telephone numbers would have been imported.
The elements supplied in the payloads are described in the following table:
<table border="1" cellspacing="0" cellpadding="0" width="624">
    <tbody>
        <tr>
            <td valign="top">
                <p>
                    <strong>Parameter</strong>
                </p>
            </td>
            <td valign="top">
                <p>
                    <strong>Required</strong>
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    <strong>Description</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    accountId (URL Parameter)
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    The account ID for porting the numbers.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CustomerOrderId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Internal customer order id for tracking the order.  Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    Name
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Subscriber business / customer name.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    HouseNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address number.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    StreetName
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street name.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    City
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    City.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    StateCode
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Two letter state code.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    Zip
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Zip code.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    LoaAuthorizingPerson
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    First and last name of person who authorized LOA.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    LoaType
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    (Optional) Indentify the LoaType on TNs. Allowed values... CARRIER or  SUBSCRIBER. Default value is SUBSCRIBER.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    TelephoneNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Ten digit phone number with no dots or dashes. One or more is required. Use a PhoneNumber tag for each phone number in the list.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    SiteId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    See section on Sites
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    SipPeerId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    See section on SIP Peers
                </p>
            </td>
        </tr>
    </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<ImportTnOrder>
    <CustomerOrderID>ICPA123ABC</CustomerOrderID>
    <SiteId>743</SiteId>
    <SipPeerId>303716</SipPeerId>
    <Subscriber>
        <Name>ABC Inc.</Name>
        <ServiceAddress>
            <HouseNumber>11235</HouseNumber>
            <StreetName>Back</StreetName>
            <City>Denver</City>
            <StateCode>CO</StateCode>
            <Zip>27541</Zip>
            <County>Canyon</County>
        </ServiceAddress>
    </Subscriber>
    <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
    <LoaType>CARRIER</LoaType>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</ImportTnOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ImportTnOrderResponse> <ImportTnOrder> <CustomerOrderId>SJM000001</CustomerOrderId> <OrderCreateDate>2018-01-20T02:59:54.000Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>smckinnon</CreatedByUser> <OrderId>b05de7e6-0cab-4c83-81bb-9379cba8efd0</OrderId> <LastModifiedDate>2018-01-20T02:59:54.000Z</LastModifiedDate> <SiteId>202</SiteId> <SipPeerId>520565</SipPeerId> <Subscriber> <Name>ABC Inc.</Name> <ServiceAddress> <HouseNumber>11235</HouseNumber> <StreetName>Back</StreetName> <City>Denver</City> <StateCode>CO</StateCode> <Zip>27541</Zip> <County>Canyon</County> </ServiceAddress> </Subscriber> <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson> <LoaType>CARRIER</LoaType> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> <ProcessingStatus>PROCESSING</ProcessingStatus> <Errors/> </ImportTnOrder> </ImportTnOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ImportTnOrderResponse> <ProcessingStatus>FAILED</ProcessingStatus> <Errors> <Code>7309</Code> <Description>The site id was not supplied or is invalid.</Description> </Errors> <Errors> <Code>7312</Code> <Description>The sippeer id is invalid.</Description> </Errors> </ImportTnOrderResponse>
```

### /accounts/{accountId}/importTnOrders/{orderid} {#orderid}
This API returns data about the specific importTnOrder id specified as the resource

#### **get**

Retrieve information about a importTnOrder with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ImportTnOrder> <OrderCreateDate>2018-01-09T02:58:04.615Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>sjm</CreatedByUser> <OrderId>bf1305b8-8998-1111-2222-51ba3ce52d4e</OrderId> <LastModifiedDate>2018-01-09T02:58:05.298Z</LastModifiedDate> <SiteId>65487</SiteId> <SipPeerId>885544</SipPeerId> <Subscriber> <Name>First</Name> <ServiceAddress> <HouseNumber>11235</HouseNumber> <StreetName>Back</StreetName> <City>Denver</City> <StateCode>CO</StateCode> <Zip>27541</Zip> <County>Canyon</County> </ServiceAddress> </Subscriber> <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson> <LoaType>CARRIER</LoaType> <TelephoneNumbers> <TelephoneNumber>2106078250</TelephoneNumber> <TelephoneNumber>2109678273</TelephoneNumber> <TelephoneNumber>2109678331</TelephoneNumber> <TelephoneNumber>2109678337</TelephoneNumber> <TelephoneNumber>2266401468</TelephoneNumber> </TelephoneNumbers> <ProcessingStatus>PARTIAL</ProcessingStatus> <Errors> <Error> <Code>7518</Code> <Description>Telephone Number Not Active.</Description> <TelephoneNumbers> <TelephoneNumber>2262665583</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> </ImportTnOrder>
```

### /accounts/{accountId}/importTnOrders/{orderid}/history {#history}
This resource retrieves the history of a importTnOrder.

#### **get**

Retrieves the history of the specified importTnOrder.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <OrderHistoryWrapper> <OrderHistory> <OrderDate>2015-06-16T14:03:10.225Z</OrderDate> <Note>Import TN order is received.</Note> <Author>admin</Author> <Status>RECEIVED</Status> </OrderHistory> <OrderHistory> <OrderDate>2015-06-16T14:03:10.330Z</OrderDate> <Note>Import TN order is processing.</Note> <Author>admin</Author> <Status>PROCESSING</Status> </OrderHistory> <OrderHistory> <OrderDate>2015-06-16T14:03:10.789Z</OrderDate> <Note>Import TN order is partial.</Note> <Author>admin</Author> <Status>PARTIAL</Status> </OrderHistory> </OrderHistoryWrapper>
```

### /accounts/{accountId}/importTnOrders/{orderid}/loas {#loas}
The LOAS resource allows the uploading and storage of files that are associated with orders.   It use the standard form-data approach for http file upload.  Details of the POST API call that drives the file upload are provided below.
    <br>
The following MIME types are supported for the LOA upload file:<br>
<ul>
<li>PDF("application/pdf")</li>
<li>PLAIN("text/plain")</li>
<li>JPG("image/jpeg")</li>
<li>TIFF("image/tiff")</li>
<li>CSV("text/csv")</li>
<li>XML("application/xml")</li>
<li>WAV("audio/x-wav")</li>
<li>ZIP("application/zip")</li>
</ul>
<br>
The file upload is equivalent of the use of CURL to upload a file...<br>
    <br>
<code> curl -H 'Content-Type: {MIME Type}' --data-binary "@{Filename}" –iv {Base URL}/[portins | bulkPortins | importtnorders]/{order-id}/loas<br>
</code>
    <br>
an example for the upload of a pdf file is...<br>
    <br>
<code> curl -H 'Content-Type: application/pdf' --data-binary "@Test_LOA.pdf" -iv {BASE URL}/portins/{order-id}/loas<br>
</code>

#### **get**

Retrieves the list of the loa (and other) files associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<fileListResponse>
    <fileCount>2</fileCount>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1092874634747.pdf</fileNames>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1430814967669.pdf</fileNames>
    <resultCode>0</resultCode>
    <resultMessage>LOA file list successfully returned</resultMessage>
</fileListResponse>
<!-- OR --, for the case where there are no files... -->
<fileListResponse>
    <fileCount>0</fileCount>
    <resultCode>0</resultCode>
    <resultMessage>No LOA files found for order</resultMessage>
</fileListResponse>

```

#### **post**

POSTing to the /loas resource will enable the upload of the file.  The key attribute to the POST is ensuring that the headers are correctly set to support the file upload.<br>
    <br>
Header settings typical of a valid upload are...<br>
    <br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

### /accounts/{accountId}/importTnOrders/{orderid}/loas/{fileid} {#fileid}
A GET on the loas file resource will cause the downloading of the file in a manner consistent with typical browser file downloads.

#### **get**

Retrieves the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

#### **put**

A PUT on the filename will update / replace the identified file id.  The format of the PUT is identical to that of the POST.<br>
Header settings typical of a valid upload are...<br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

**404**

#### **delete**

Deletes the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/importTnOrders/{orderid}/loas/{fileid}/metadata {#metadata}
It is often useful to attach additional data to an order in the form of an attached file, and so the existing LOA capability has been extended to optionally allow different file information to be included with a file, to describe type and purpose information.  The MetaData associated with a file includes a file document name and a document type, which is one of [LOA | INVOICE | CSR | OTHER].<br>
Naming of the existing "loas" API has been preserved to ensure backwards compatibility.

#### **get**

Retrieves the metadata associated with the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

**404**

#### **put**

Associate metadata with the file named in the resource path.  This will describe the file, and declare the data that is contained in the file, selected from a list of [LOA | INVOICE | CSR | OTHER].

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

###### Body

**application/xml**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

##### Response

**200**

**400**

#### **delete**

Deletes the metadata previously associated with the identified file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/inserviceNumbers {#inserviceNumbers}
This API call will find the in-service numbers on the indicated account. <br>
The inservicenumbers query will return all of the in-service numbers on the account, filtered with a wide range of
search query parameters.  Note that many search combinations will not return a meaningful result because the search
parameters are mutually exclusive.  Since mutually exclusive search criteria result from data that can't  satisfy all of
the criteria, these are not flagged as errors, and instead simply return an empty result.

#### **get**

Retrieves a list of in-service phone numbers associated with the account ID. There are multiple search parameters for searching for in-service numbers:
<ul>
    <li>size and page for pagination</li>
    <li>area code</li>
    <li>Npa-Nxx</li>
    <li>LATA</li>
    <li>state</li>
    <li>rate center</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
<TNs>
    <TotalCount>59</TotalCount>
    <Links>
        <first> ( a link goes here ) </first>
    </Links>
    <TelephoneNumbers>
        <Count>59</Count>
        <TelephoneNumber>8043024183</TelephoneNumber>
        <TelephoneNumber>8042121778</TelephoneNumber>
        <TelephoneNumber>8042146066</TelephoneNumber>
        <TelephoneNumber>8043814903</TelephoneNumber>
        <TelephoneNumber>8043814905</TelephoneNumber>
        <TelephoneNumber>8043814864</TelephoneNumber>
        <TelephoneNumber>8043326094</TelephoneNumber>
        <TelephoneNumber>8042121771</TelephoneNumber>
        <TelephoneNumber>8043024182</TelephoneNumber>
        <!-- SNIP -->
        <TelephoneNumber>8043814900</TelephoneNumber>
        <TelephoneNumber>8047672642</TelephoneNumber>
        <TelephoneNumber>8043024368</TelephoneNumber>
        <TelephoneNumber>8042147950</TelephoneNumber>
        <TelephoneNumber>8043169931</TelephoneNumber>
        <TelephoneNumber>8043325302</TelephoneNumber>
    </TelephoneNumbers>
</TNs>

```

**204**

**404**

### /accounts/{accountId}/inserviceNumbers/totals {#totals}
A GET on this resource returns the total number of in-service numbers for the given account.

#### **get**

Returns the total number of in-service numbers for the given account.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<Quantity>
    <Count>62</Count>
</Quantity>

```

### /accounts/{accountId}/inserviceNumbers/{tn} {#tn}
This resource acts as a verifier for in-service telephone numbers.

#### **get**

A GET on the number desired will return a 200 OK if the number is in service on the account, or a 404 not found.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| tn | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/lidbs {#lidbs}
The LIDBs Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to add Calling Line Information with a telephone number.  This API allows the creation and observation of a <b>"Line Information Data Base (LIDB)"</b> work order that causes an update of a person's calling name identification in a network Database.  The entry of this information in the network database in turn causes the display of their name on the phone of the people that they call. <br>
This API call supports <b>GET</b> to retrieve information about outstanding LIDBs orders, and <b>POST</b> to create those orders.

#### **get**

Retrieve a list of the LIDB orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
 <ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>2122</TotalCount>
        <OrderIdUserIdDate>
            <accountId>9999999</accountId>
            <CountOfTNs>0</CountOfTNs>
            <lastModifiedDate>2014-02-25T16:02:43.195Z</lastModifiedDate>
            <OrderType>lidb</OrderType>
            <OrderDate>2014-02-25T16:02:43.195Z</OrderDate>
            <orderId>abe36738-6929-4c6f-926c-88e534e2d46f</orderId>
            <OrderStatus>FAILED</OrderStatus>
            <TelephoneNumberDetails/>
            <userId>team_ua</userId>
        </OrderIdUserIdDate>
        <!-- ...SNIP... -->
        <OrderIdUserIdDate>
            <accountId>9999999</accountId>
            <CountOfTNs>0</CountOfTNs>
            <lastModifiedDate>2014-02-25T16:02:39.021Z</lastModifiedDate>
            <OrderType>lidb</OrderType>
            <OrderDate>2014-02-25T16:02:39.021Z</OrderDate>
            <orderId>ba5b6297-139b-4430-aab0-9ff02c4362f4</orderId>
            <OrderStatus>FAILED</OrderStatus>
            <userId>team_ua</userId>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>

```

**404**

#### **post**

Create a LIDB order to associate Calling Name Information with a TN or list of CountOfTNs
The key data elements in the submission are -
    <table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>TelephoneNumbers</td>
          <td>A list of telephone numbers that will all assume the SubscriberInformation that is listed in the payload. In an enterprise context it is not uncommon for all of the served telephone numbers to use the same string for the Subscriber Information.</td>
        </tr>
        <tr>
          <td>SubscriberInformation</td>
          <td>This is the field that is displayed to the user receiving the phone call from the Telephone numbers in the TelephoneNumberList</td>
        </tr>
        <tr>
          <td>UseType</td>
          <td>Can be RESIDENTIAL or BUSINESS. The element is required.</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>Can be PRIVATE or PUBLIC. If it is tagged as PRIVATE then the data will be provided, but the display will not be provided on a standard phone call.  The element is required</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order. The element is optional. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
        </tr>
      </tbody>
    </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<LidbOrder>
    <CustomerOrderId>[String]</CustomerOrderId>
    <LidbTnGroups>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>8045030097</TelephoneNumber>
                <TelephoneNumber>8045030098</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>Joes Garage</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
            <Visibility>PUBLIC</Visibility>
        </LidbTnGroup>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>8888595935</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>Joes Storage</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
            <Visibility>PRIVATE</Visibility>
        </LidbTnGroup>
    </LidbTnGroups>
</LidbOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderResponse>
    <LidbOrder>
        <orderId>1d863522-c9bf-430c-8e79-cc63cad04a1d</orderId>
        <CustomerOrderId>[String]</CustomerOrderId>
        <ProcessingStatus>RECEIVED</ProcessingStatus>
        <ErrorList>
          <Error>
            <TelephoneNumber>8888595935</TelephoneNumber>
            <Code>11020</Code>
            <Description>Cannot add LIDB to a telephone number that already has LIDB or is in process</Description>
          </Error>
        </ErrorList>
        <LidbTnGroups>
          <LidbTnGroup>
            <TelephoneNumbers>
              <TelephoneNumber>8045030097</TelephoneNumber>
              <TelephoneNumber>8045030098</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>Joes Garage</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
            <Visibility>PUBLIC</Visibility>
          </LidbTnGroup>
          <LidbTnGroup>
            <TelephoneNumbers>
              <TelephoneNumber>8888595935</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>Joes Storage</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
            <Visibility>PRIVATE</Visibility>
          </LidbTnGroup>
        </LidbTnGroups>
    </LidbOrder>
</LidbOrderResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderResponse>
    <Status>
        <Code>400</Code>
        <Description>Validation Failed. Please check your input parameters.</Description>
    </Status>
    <ErrorList>
        <Error>
            <Code>11007</Code>
            <Description>No visibility supplied. Visibility must be one of the following - PUBLIC, PRIVATE</Description>
        </Error>
    </ErrorList>
    <LidbOrder>
        <LidbTnGroups>
          <LidbTnGroup>
            <TelephoneNumbers>
              <TelephoneNumber>9199998830</TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>Joes Garage</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
          </LidbTnGroup>
        </LidbTnGroups>
    </LidbOrder>
</LidbOrderResponse>

```

### /accounts/{accountId}/lidbs/{lidbid} {#lidbid}
This API returns data about the specific LIDBs Order specified as the resource

#### **get**

Retrieve information about a specific Lidb Order identified as the resource.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| lidbid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrder>
    <CustomerOrderId>testCustomerOrderId</CustomerOrderId>
    <orderId>255bda29-fc57-44e8-a6c2-59b45388c6d0</orderId>
    <OrderCreateDate>2014-05-28T14:46:21.724Z</OrderCreateDate>
    <ProcessingStatus>RECEIVED</ProcessingStatus>
    <CreatedByUser>jbm</CreatedByUser>
    <LastModifiedDate>2014-02-20T19:33:17.600Z</LastModifiedDate>
    <OrderCompleteDate>2014-02-20T19:33:17.600Z</OrderCompleteDate>
    <ErrorList/>
    <LidbTnGroups>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>4082213311</TelephoneNumber>
            </TelephoneNumbers>
            <FullNumber>8042105618</FullNumber>
            <SubscriberInformation>Fred</SubscriberInformation>
            <UseType>BUSINESS</UseType>
            <Visibility>PRIVATE</Visibility>
        </LidbTnGroup>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>4082212850</TelephoneNumber>
                <TelephoneNumber>4082213310</TelephoneNumber>
            </TelephoneNumbers>
            <FullNumber>8042105760</FullNumber>
            <SubscriberInformation>Fred</SubscriberInformation>
            <UseType>RESIDENTIAL</UseType>
            <Visibility>PUBLIC</Visibility>
        </LidbTnGroup>
    </LidbTnGroups>
</LidbOrder>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderReportResponse>
    <ResponseStatus>
        <Description>The resource does not exist</Description>
    </ResponseStatus>
</LidbOrderReportResponse>

```

### /accounts/{accountId}/lnpchecker {#lnpchecker}
Bandwidth supports two APIs for porting numbers to Bandwidth: /portins and /bulkPortins.<br>
The <B>/portins</B> API allows a set of TNs to be ported in, provided that the set of TNs meets the criteria below.<br>
TNs can be ported in a single /portins request if all of the following are true:<br>
<ul>
  <li>They all have the same Port Type</li>
  <li>They all have the same losing carrier</li>
  <li>They are all associated with the same billing TN and Service Address</li>
</ul>
There are also a number of reasons why a TN may not be able to be ported in:<br>
<ul>
  <li>The TN is in a rate center that is not supported by Bandwidth or any of Bandwidth's partners.</li>
  <li>The TN belongs to a losing carrier that Bandwidth does not have a Trading Partner Agreement with.</li>
  <li>The TN is already being processed in another active port-in order.</li>
  <li>The Bandwidth account has not been enabled for porting.</li>
</ul>
Otherwise the user must separate the TNs into individual /portins requests.<br>
The <B>/lnpchecker</B> API is used to determine the Port Type(s) and losing carrier(s) for a set of TNs.<br>
The <B>/bulkPortins</B> API eliminates the need for the /lnpchecker API by sorting the list of TNs (up to 5000 TNs) automatically into a set of port-in requests by Port Type. The set of port-ins associated with the bulk port-in remain in a DRAFT state until you've had a chance to examine the breakdown. From that point, you can decide to submit all of the port-ins together under the umbrella of the bulk port-in, or you can separate out individual port-ins to submit by themselves.<br>
<B>Terminology</B><br>
<ul>
  <li><B>Port Type</B> - A categorization of how the TNs submitted to the /lnpchecker API will be handled by Bandwidth. See the POST operation for more information.</li>
  <li><B>On-Net</B> - TNs that belong to a rate center covered by Bandwidth are referred to as on-net TNs.</li>
  <li><B>Off-Net</B> - TNs that belong to a rate center covered by a Bandwidth partner are refered to as off-net TNs.</li>
  <li><B>Automated</B> - If the TNs are on-net, or off-net and covered by a Bandwidth partner that supports automated ports, then the port-in of these TNs will be handled with no human intervention.</li>
  <li><B>Manual</B> - If the TNs cannot be ported automatically, the Bandwidth LNP team will work with the appropriate porting vendor or losing carrier to ensure completion of the port-in. The /portins API can be used to submit manual port-ins, which will be identified as such, and a Zendesk ticket will be automatically created to notify the Bandwidth LNP team.</li>
  <li><B>Internal</B> - TNs that are being moved from one Bandwidth account to another Bandwidth account are referred to as internal ports. Internal ports are handled automatically.</li>
  <li><B>Losing carrier</B> - The carrier from which the TN(s) is being ported.</li>
</ul>
<br>

#### **post**

Request portability information on a set of TNs

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<NumberPortabilityRequest>
   <TnList>   <!-- the list of the TNs to check for Portability -->
      <Tn>4109255199</Tn>
      <Tn>4109235436</Tn>
      <Tn>4104685864</Tn>
      <Tn>4103431313</Tn>
      <Tn>4103154313</Tn>
      <Tn>4103431561</Tn>
      <Tn>2174101103</Tn>
   </TnList>
</NumberPortabilityRequest>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NumberPortabilityResponse>
    <PortType>AUTOMATED</PortType>
    <SupportedRateCenters />
    <UnsupportedRateCenters>
        <RateCenterGroup>
            <RateCenter>BALTIMORE</RateCenter>
            <City>BALTIMORE</City>
            <State>MD</State>
            <LATA>238</LATA>
            <TnList>
                <Tn>4109255199</Tn>
                <Tn>4104685864</Tn>
            </TnList>
        </RateCenterGroup>
        <RateCenterGroup>
            <RateCenter>SPARKSGLNC</RateCenter>
            <City>SPARKS GLENCOE</City>
            <State>MD</State>
            <LATA>238</LATA>
            <TnList>
                <Tn>4103431313</Tn>
                <Tn>4103431561</Tn>
            </TnList>
        </RateCenterGroup>
    </UnsupportedRateCenters>
    <PartnerSupportedRateCenters>                <!-- Only available for fullCheck=offnetportability -->
        <RateCenterGroup>
            <RateCenter>FT COLLINS</RateCenter>
            <City>FORT COLLINS</City>
            <State>CO</State>
            <LATA>656</LATA>
            <Tiers>
                <Tier>1</Tier>
            </Tiers>
            <TnList>
                <Tn>4109235436</Tn>
            </TnList>
        </RateCenterGroup>
        <RateCenterGroup>
            <Vendor>Level 3</Vendor>
            <AutomatedPort>true</AutomatedPort> <!-- Only available when 'Automated Level 3 port-ins' is enabled -->
            <RateCenter>BEASON</RateCenter>
            <City>BEASON</City>
            <State>IL</State>
            <LATA>366</LATA>
            <Tiers>
                <Tier>3</Tier>
            </Tiers>
            <TnList>
                <Tn>2174101103</Tn>
            </TnList>
        </RateCenterGroup>
    </PartnerSupportedRateCenters>
    <SupportedLosingCarriers>
        <LosingCarrierTnList>
            <LosingCarrierSPID>9998</LosingCarrierSPID>
            <LosingCarrierName>Test Losing Carrier L3</LosingCarrierName>
            <LosingCarrierIsWireless>false</LosingCarrierIsWireless>
            <LosingCarrierAccountNumberRequired>false</LosingCarrierAccountNumberRequired>
            <LosingCarrierMinimumPortingInterval>5</LosingCarrierMinimumPortingInterval>
            <TnList>
                <Tn>4109255199</Tn>
                <Tn>4104685864</Tn>
                <Tn>4103431313</Tn>
                <Tn>4103431561</Tn>
            </TnList>
        </LosingCarrierTnList>
        <LosingCarrierTnList>
            <LosingCarrierSPID>7482</LosingCarrierSPID>
            <LosingCarrierName>IntegraTelecom</LosingCarrierName>
            <LosingCarrierIsWireless>false</LosingCarrierIsWireless>
            <LosingCarrierAccountNumberRequired>false</LosingCarrierAccountNumberRequired>
            <LosingCarrierMinimumPortingInterval>1</LosingCarrierMinimumPortingInterval>
            <TnList>
                <Tn>2174101103</Tn>
            </TnList>
        </LosingCarrierTnList>
    </SupportedLosingCarriers>
    <UnsupportedLosingCarriers />
</NumberPortabilityResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NumberPortabilityResponse>
    <Errors>
        <Code>7201</Code>
        <Description>61746052083 is not a valid NANPA telephone number.</Description>
    </Errors>
    <Errors>
        <Code>7201</Code>
        <Description>61746052082 is not a valid NANPA telephone number.</Description>
    </Errors>
</NumberPortabilityResponse>

```

### /accounts/{accountId}/lsrorders {#lsrorders}
<p>The <b>lsrorders</b> resource is used to create, modify, and monitor API requests to remove telephone numbers from the Bandwidth network.  This API call is intended for use by carriers that want to automate the "Port-out" process with Bandwidth, rather than manually request the removal or "port-out" of each telephone number via a GUI or a Ticket.</p>
<p>This API call uses an asynchronous model that is common in the Bandwidth Dashboard API, where an "order" is created that is then subsequently used to track the progress of the request to completion.  This in somewhat analogous to the "laundry ticket" model, where the initial transaction is the submission of the laundry and the receipt of a ticket, and all other steps in the overall transaction use the identifier on the ticket to monitor and manage the transaction.</p>
<p>In this case a POST is made to the /lsrorders resource that describes the request to port out the number.  If the POST has no syntactic errors, such as a telephone number with less than 10 digits, an ID will be returned that is used to monitor and manage the port-out request.  The POST returns both a descriptive payload that reflects the request and includes the identifier, as well as a Location header that contains a valid GET API call that can be used to retrieve the current state of the LSR / Port-out request.  In general the flow of events is much like...</p>
<pre>
        Carrier   -----&gt;    POST        -----&gt;      Bandwidth - the initial request
                 &lt;-----     200 OK     &lt;-----                 - the response with a payload
                                                                and a Location header
<br>
        -- some subsequent event happens... an error, or the completion of the request --
<br>
        Carrier &lt;----- Notification Callback &lt;----- Bandwidth - if configured, Bandwidth
                                                                notifies the carrier of all
                                                                events that impact the order
                                                              - see the /subscriptions and
                                                                /callbacks API descriptions
        Carrier   -----&gt;    GET(id)     -----&gt;      Bandwidth - the carrier requests the
                                                                complete status of the order
                                                                using the ID
                 &lt;-----     200 OK     &lt;-----                 - the response with a descriptive
                                                                payload
<br>
The above notifications continue until the LSR is complete or cancelled.
</pre>
<p>There is a complete list of elements in payload of the POSTed request below in the documentation of the POST, but in summary the LSR request includes
<ul>
<li> a list of telephone numbers
<li> information about the subscriber
<li> tracking information such as a PON and a Customer Order ID
<li> winning carrier information such as the SPID
<li> date information
</ul></p>
<p>This API supports GET for retrieving order detail and status informantion, POST for creating a new LSR Order, and PUT for changing the details of an LSR in flight.</p>
<h4> Errors </h4>
There are a number of errors that can happen at various stages of the process. These are listed here for convenience, and can be found in the error reference documentation <a href="https://test.dashboard.bandwidth.com/apidocs/iris-error-page.html">here.</a>
<table>
<tr><th>Error code</th><th>Error message</th><th>Appearance</th></tr>
<tr><td>    5008    </td><td>    All telephone numbers specified are invalid    </td><td>    POST    </td></tr>
<tr><td>    7104    </td><td>    Subscriber information is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7105    </td><td>    The subscriber name is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7107    </td><td>    The service address is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7108    </td><td>    The service address house number is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7109    </td><td>    The service address street name is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7110    </td><td>    The service address city is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7111    </td><td>    The service address state code is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7112    </td><td>    The service address zip code is required    </td><td>    POST/PUT    </td></tr>
<tr><td>    7120    </td><td>    The PON is required    </td><td>    POST    </td></tr>
<tr><td>    7203    </td><td>    The billing telephone number (BTN) is invalid    </td><td>    POST/PUT    </td></tr>
<tr><td>    7208    </td><td>    The requested FOC date cannot be in the past    </td><td>    POST/PUT    </td></tr>
<tr><td>    7214    </td><td>    ZIP code is invalid    </td><td>    POST/PUT    </td></tr>
<tr><td>    7318    </td><td>    Customer order ID is invalid. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7324    </td><td>    The business name is too long. The business name should not be longer than 25 characters.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7354    </td><td>    Middle initial is too long. Middle initial should not be longer than 1 character.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7355    </td><td>    First name is too long. First name should not be longer than 25 characters.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7356    </td><td>    Last name is too long. Last name should not be longer than 25 characters.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7395    </td><td>    Unsupported state code %s.    </td><td>    POST/PUT    </td></tr>
<tr><td>    7510    </td><td>    Required Account Code missing    </td><td>    PROCESSING    </td></tr>
<tr><td>    7511    </td><td>    Invalid Account Code    </td><td>    PROCESSING    </td></tr>
<tr><td>    7512    </td><td>    Required PIN missing    </td><td>    PROCESSING    </td></tr>
<tr><td>    7513    </td><td>    PIN Invalid    </td><td>    PROCESSING    </td></tr>
<tr><td>    7514    </td><td>    Required ZIP Code missing    </td><td>    PROCESSING    </td></tr>
<tr><td>    7515    </td><td>    Invalid ZIP Code    </td><td>    PROCESSING    </td></tr>
<tr><td>    7516    </td><td>    Telephone Number not recognized or invalid for this account    </td><td>    PROCESSING    </td></tr>
<tr><td>    7517    </td><td>    Too many Telephone numbers in this request    </td><td>    PROCESSING    </td></tr>
<tr><td>    7518    </td><td>    Telephone Number Not Active    </td><td>    PROCESSING    </td></tr>
<tr><td>    7519    </td><td>    Customer info does not match    </td><td>    PROCESSING    </td></tr>
<tr><td>    7598    </td><td>    Invalid Request    </td><td>    PROCESSING    </td></tr>
<tr><td>    7599    </td><td>    Fatal Error in Processing    </td><td>    PROCESSING    </td></tr>
<tr><td>    7999    </td><td>    An internal error has occurred. Please contact support if this issue is not resolved in 1 business day    </td><td>    PROCESSING    </td></tr>
<tr><td>    13522    </td><td>    The count of telephone numbers in order exceeds the maximum size of %d    </td><td>    POST    </td></tr>
<tr><td>    17000    </td><td>    Lsr submission order payload required.      </td><td>    POST/PUT    </td></tr>
<tr><td>    17002    </td><td>    Order contains invalid tns %s.    </td><td>    POST    </td></tr>
<tr><td>    17003    </td><td>    Order contains empty tn list or its not present.     </td><td>    POST    </td></tr>
<tr><td>    17004    </td><td>    Incorrect pon specified. It must be up to 25 character long and could not contain special characters other than -_#    </td><td>    POST    </td></tr>
<tr><td>    17005    </td><td>    Toll-free telephone numbers can not be present in the LSR order.    </td><td>    POST    </td></tr>
<tr><td>    17006    </td><td>    Account number is incorrect. It should be alphanumeric and no more than 32 characters long.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17007    </td><td>    Pin number is incorrect. It should be alphanumeric and no more than 10 characters long.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17008    </td><td>    An internal error has occurred. Please contact support if this issue is not resolved in 1 business day    </td><td>    PROCESSING    </td></tr>
<tr><td>    17009    </td><td>    Lsr order contain duplicate telephone numbers %s    </td><td>    POST    </td></tr>
<tr><td>    17010    </td><td>    Business name is required for business SubscriberType.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17011    </td><td>    Last name should be empty for business SubscriberType.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17012    </td><td>    Last name is required for residential SubscriberType.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17013    </td><td>    Requested date format incorrect. Date should be in yyyy-mm-dd format. (example 2015-03-24).    </td><td>    POST/PUT    </td></tr>
<tr><td>    17017    </td><td>    Lsr order failed account SPID not configured.    </td><td>    PUT/PROCESSING    </td></tr>
<tr><td>    17018    </td><td>    Lsr order will be cancelled. All other submitted changes are ignored.    </td><td>    PUT/PROCESSING    </td></tr>
<tr><td>    17019    </td><td>    Requested FOC date cannot be on holiday or weekend.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17020    </td><td>    Account SPID [%s] does not match with SPID specified in the Lsr order [%s].    </td><td>    POST/PUT    </td></tr>
<tr><td>    17021    </td><td>    Incorrect SPID [%s] specified in the order. It should be alphanumeric and no more than 4 characters long.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17022    </td><td>    Account %d requires a SPID to be provided with each order.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17023    </td><td>    The authorizing person contact is required for lsr orders.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17024    </td><td>    The authorizing person contact is too long. It should be not longer than %s characters.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17025    </td><td>    %s field%s cannot be modified.    </td><td>    PUT    </td></tr>
<tr><td>    17025    </td><td>    OrderStatus cannot be changed to %s. Only cancelled value allowed.    </td><td>    PUT    </td></tr>
<tr><td>    17027    </td><td>    Account %d has no configured SPID.  Please contact support for further assistance.    </td><td>    POST/PUT    </td></tr>
<tr><td>    17028    </td><td>    Minimum FOC date for a port of greater than %1$d telephone numbers is %2$d days    </td><td>    POST/PUT    </td></tr>
<tr><td>    17029    </td><td>    Can't modify LSR order, because it contains ported numbers.    </td><td>    PROCESSING    </td></tr>
<tr><td>    17030    </td><td>    LSR order completion failed, some numbers are not activated: %s.    </td><td>    PROCESSING    </td></tr>
<tr><td>    17031    </td><td>    Order was failed, because some telephone numbers have empty SPID [%s]    </td><td>    PROCESSING    </td></tr>
<tr><td>  17032 </td><td> The Specified PON is already present in our system. Please provide an alternative. </td><td> POST  </td></tr>
<tr><td>  17033 </td><td> The PON specified in the LSR order overlaps with existing order. Please resubmit the order with another PON. </td><td> POST  </td></tr>
<tr><td>  17034 </td><td> OverrideValidation flag can be supped only in EXCEPTION status. </td><td> PUT  </td></tr>
<tr><td>  17035 </td><td> Supp is not allowed for this LSR. Please contact support if this issue is not resolved in 1 business day. </td><td> PUT  </td></tr>
</table>
<p/>
POST - errors occur during LSR creation.<br>
PUT  - errors occur during LSR supp/cancel.<br>
PROCESSING -  errors occur while LSR processing. These errors are persistent and can be retrieved using GET requests (ex. by LSR ID).
<p/> * Error messages can differ from described depending on context of occurrence.

#### **get**

Retrieves a list of lsrorders.  Various query parameters can be used to filter the list of LSR Orders as documented below. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrders>
    <TotalCount>5</TotalCount>
    <LsrOrderSummary>
        <accountId>9999999</accountId>
        <CountOfTNs>2</CountOfTNs>
        <CustomerOrderId>FineCustomerid</CustomerOrderId>
        <userId>team_ua</userId>
        <lastModifiedDate>2015-03-02T09:10:16.193Z</lastModifiedDate>
        <OrderType>lsr</OrderType>
        <OrderDate>2015-03-25T11:44:42.941Z</OrderDate>
        <OrderStatus>PENDING</OrderStatus>
        <ActualFocDate>2015-03-25</ActualFocDate>
        <BillingTelephoneNumber>2526795000</BillingTelephoneNumber>
        <CreatedByUser>lsrOnlyUser</CreatedByUser>
        <OrderId>7d644c88-ef23-4307-96ab-20253666d0c7</OrderId>
        <Pon>ATT-011515-324234</Pon>
        <PonVersion>0</PonVersion>
        <RequestedFocDate>2015-11-15</RequestedFocDate>
    </LsrOrderSummary>
    <!-- SNIP -->
    <LsrOrderSummary>
        <accountId>9999999</accountId>
        <CountOfTNs>2</CountOfTNs>
        <CustomerOrderId>MyId5</CustomerOrderId>
        <lastModifiedDate>2015-03-03T14:07:19.926Z</lastModifiedDate>
        <OrderType>lsr</OrderType>
        <OrderDate>2015-03-25T11:44:42.941Z</OrderDate>
        <OrderStatus>FAILED</OrderStatus>
        <Errors>
            <Error>
                <Code>17008</Code>
                <Description>
                    FOC date cannot fall on a holiday
                </Description>
            </Error>
        </Errors>
        <ActualFocDate>2015-03-25</ActualFocDate>
        <BillingTelephoneNumber>2526795000</BillingTelephoneNumber>
        <CreatedByUser>lsrOnlyUser</CreatedByUser>
        <OrderId>00cf7e08-cab0-4515-9a77-2d0a7da09415</OrderId>
        <Pon>testpon1002</Pon>
        <PonVersion>0</PonVersion>
        <RequestedFocDate>2015-11-15</RequestedFocDate>
    </LsrOrderSummary>
</LsrOrders>

```

**404**

#### **post**

A POST creates a lsrorder request to initiate a port-out action.<br>
The payload fields are described below...<br>
<table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>Pon</td>
          <td>The Pon is customer specified order indentifier field. Allowed alphanumeric and "#","-","_". Up to 25 characters long. (required).</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The CustomerOrderId is customer specified order indentifier field. Allowed alphanumeric, spaces and dashes. Up to 40 characters long. (optional).</td>
        </tr>
        <tr>
          <td>SPID</td>
          <td>Identifier used in porting process. If account is no multi-SPID option - default with account value, otherwise value is required. Up to 4 characters long. (required)</td>
        </tr>
        <tr>
          <td>BillingTelephoneNumber</td>
          <td>Non-tollfree 10 digit phone number (optional).</td>
        </tr>
        <tr>
          <td>RequestedFocDate</td>
          <td>optional (next day if not specified).</td>
        </tr>
        <tr>
          <td>SubscriberType</td>
          <td>Subscriber type. BUSINESS | RESEDENTIAL (optional) (RESEDENTIAL if not specified).</td>
        </tr>
        <tr>
          <td>BusinessName</td>
          <td>Subscriber business name for BUSINESS SubscriberType. Up to 25 characters long. (required BusinessName or LastName).</td>
        </tr>
        <tr>
          <td>LastName</td>
          <td>Subscriber last name for RESEDENTIAL SubscriberType. Up to 25 characters long. (required BusinessName or LastName).</td>
        </tr>
        <tr>
          <td>FirstName</td>
          <td>Subscriber first name for RESEDENTIAL SubscriberType. Up to 25 characters long. (optional).</td>
        </tr>
        <tr>
          <td>MiddleInitial</td>
          <td>Subscriber middle initial for RESEDENTIAL SubscriberType. 1 character (optional).</td>
        </tr>
        <tr>
          <td>AccountNumber</td>
          <td>AccountNumber.  Alphanumeric, up to 32 characters. (optional).</td>
        </tr>
        <tr>
          <td>PinNumber</td>
          <td>PinNumber. Alphanumeric, up to 10 characters. (optional).</td>
        </tr>
        <tr>
          <td>AuthorizingPerson</td>
          <td>AuthorizingPerson. Alphanumeric, up to 100 characters (required).</td>
        </tr>
        <tr>
          <td>HousePrefix</td>
          <td>HousePrefix. Alphanumeric, up to 6 characters.</td>
        </tr>
        <tr>
          <td>HouseNumber</td>
          <td>HouseNumber. Alphanumeric, up to 45 characters  (required).</td>
        </tr>
        <tr>
          <td>HouseSuffix</td>
          <td>HouseSuffix. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>PreDirectional</td>
          <td>PreDirectional. Alphanumeric, up to 2 characters.</td>
        </tr>
        <tr>
          <td>StreetName</td>
          <td>StreetName. Alphanumeric, up to 200 characters  (required).</td>
        </tr>
        <tr>
          <td>StreetSuffix</td>
          <td>StreetSuffix. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>PostDirectional</td>
          <td>PostDirectional. Alphanumeric, up to 2 characters.</td>
        </tr>
        <tr>
          <td>AddressLine2</td>
          <td>AddressLine2. Alphanumeric, up to 200 characters.</td>
        </tr>
        <tr>
          <td>County</td>
          <td>County. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>City</td>
          <td>City. Alphanumeric, up to 100 characters  (required).</td>
        </tr>
        <tr>
          <td>StateCode</td>
          <td>StateCode. Alphanumeric, 2 characters  (required).</td>
        </tr>
        <tr>
          <td>Zip</td>
          <td>Zip code. Allowed formats: 5 numbers, 5+4 or Canadian  (required).</td>
        </tr>
        <tr>
          <td>ListOfTelephoneNumbers</td>
          <td>List of tns to be processed  (required).</td>
        </tr>
      </tbody>
    </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<LsrOrder>
  <!-- By customer. Alphanumeric and "#","-","_". Up to 25 character long. (required) -->
  <Pon>ATT-011515-324234</Pon>
  <!-- By customer. Alphanumeric and " ","-". Up to 40 character long. (optional) -->
  <CustomerOrderId>FineCustomerid</CustomerOrderId>
  <!-- By customer. Alphanumeric. Up to 4 character long. (required if account value "mult") -->
  <SPID>123C</SPID>
  <!-- Non-toll-free btn (optional) -->
  <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
  <!-- Requested date (not past, optional, default next day) -->
  <RequestedFocDate>2015-11-15</RequestedFocDate>
  <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
  <Subscriber>
      <!--Type of the subscriber. BUSINESS | RESEDENTIAL (optional) (RESEDENTIAL if not specified)-->
      <SubscriberType>BUSINESS</SubscriberType>
      <!-- Up to 25 character long (required) -->
      <BusinessName>BusinessName</BusinessName>
      <ServiceAddress>
          <!-- HouseNumber up to 45 characters (required) -->
          <HouseNumber>11</HouseNumber>
          <!-- StreetName up to 200 characters (required) -->
          <StreetName>Park</StreetName>
          <!-- StreetSuffix  up to 45 characters (optional) -->
          <StreetSuffix>Ave</StreetSuffix>
          <!-- City  up to 100 characters (required) -->
          <City>New York</City>
          <!-- StateCode 2 characters (required) -->
          <StateCode>NY</StateCode>
          <!-- ZipCode 5 num or 5+4 num (required) -->
          <Zip>90025</Zip>
      </ServiceAddress>
      <!-- Alphanumeric up to 32 character long (optional) -->
      <AccountNumber>123463</AccountNumber>
      <!-- Alphanumeric up to 10 character long (optional) -->
      <PinNumber>1231</PinNumber>
  </Subscriber>
  <!-- Toll-free number not allowed -->
  <ListOfTelephoneNumbers>
      <TelephoneNumber>9192381468</TelephoneNumber>
      <TelephoneNumber>9192381467</TelephoneNumber>
  </ListOfTelephoneNumbers>
</LsrOrder>

```

##### Response

**201**

```xml
<LsrOrderResponse>
    <LsrOrder>
        <OrderId>afce454a-4e89-4753-9f58-a442ebc7b142</OrderId>
        <CustomerOrderId>FineCustomerid</CustomerOrderId>
        <LastModifiedBy>team_ua</LastModifiedBy>
        <OrderCreateDate>2015-02-06T12:57:45.607Z</OrderCreateDate>
        <PeerId>0</PeerId>
        <AccountId>9999999</AccountId>
        <SPID>123C</SPID>
        <LastModifiedDate>2015-02-09T13:07:57.286Z</LastModifiedDate>
        <SiteId>0</SiteId>
        <CreatedByUser>team_ua</CreatedByUser>
        <OrderStatus>PENDING</OrderStatus>
        <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
        <Pon>ATT-011515-324234</Pon>
        <PonVersion>8</PonVersion>
        <RequestedFocDate>2015-02-25 00:00:00</RequestedFocDate>
        <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
        <Subscriber>
            <SubscriberType>BUSINESS</SubscriberType>
            <BusinessName>BusinessName</BusinessName>
            <AccountNumber>123463</AccountNumber>
            <PinNumber>1231</PinNumber>
            <ServiceAddress>
                <HouseNumber>11</HouseNumber>
                <StreetName>Park</StreetName>
                <StreetSuffix>Ave</StreetSuffix>
                <City>New York</City>
                <StateCode>NY</StateCode>
                <Zip>90025</Zip>
                <Country>United States</Country>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>9192381468</TelephoneNumber>
            <TelephoneNumber>9192381467</TelephoneNumber>
            <TelephoneNumber>9192381469</TelephoneNumber>
        </ListOfTelephoneNumbers>
    </LsrOrder>
</LsrOrderResponse>

```

**400**

```xml
<LsrOrderResponse>
  <ResponseStatus>
      <ErrorCode>400</ErrorCode>
      <Description>Lsr order doesn't pass validation. Please check your input parameters.</Description>
  </ResponseStatus>
  <LsrOrderErrors>
      <LsrOrderError>
          <Code>7324</Code>
          <Description>The business name is too long. The business name should not be longer than 25 characters.</Description>
      </LsrOrderError>
      <LsrOrderError>
          <Code>7318</Code>
          <Description>Customer order ID is invalid. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</Description>
      </LsrOrderError>
      <LsrOrderError>
          <Code>7203</Code>
          <Description>The billing telephone number (BTN) is invalid</Description>
      </LsrOrderError>
      <LsrOrderError>
          <Code>16005</Code>
          <Description>Toll-free telephone numbers can be present in the lsr order.</Description>
      </LsrOrderError>
      <LsrOrderError>
          <Code>16009</Code>
          <Description>Lsr order contain duplicate telephone numbers: [9192381468, 9192381468]</Description>
      </LsrOrderError>
      <LsrOrderError>
          <Code>16002</Code>
          <Description>Order contains invalid tns: [8882381468].</Description>
      </LsrOrderError>
  </LsrOrderErrors>
  <LsrOrder>
      <CustomerOrderId>WrongCustomerOrderIdLogerThan40AndContains$%SpecSimbols</CustomerOrderId>
      <LastModifiedBy>team_ua</LastModifiedBy>
      <OrderCreateDate>2015-02-06T12:57:45.607Z</OrderCreateDate>
      <AccountId>0</AccountId>
      <CreatedByUser>team_ua</CreatedByUser>
      <OrderStatus>FAILED</OrderStatus>
      <BillingTelephoneNumber>919238466</BillingTelephoneNumber>
      <Pon>ATT-011515-324234%$</Pon>
      <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
      <Subscriber>
          <SubscriberType>BUSINESS</SubscriberType>
          <BusinessName>LongerThan25CharacterBusinessName</BusinessName>
          <AccountNumber>123463</AccountNumber>
          <PinNumber>1231</PinNumber>
          <ServiceAddress>
              <HouseNumber>11</HouseNumber>
              <StreetName>Park</StreetName>
              <StreetSuffix>Ave</StreetSuffix>
              <City>New York</City>
              <StateCode>NY</StateCode>
              <Zip>90025</Zip>
              <Country>United States</Country>
          </ServiceAddress>
      </Subscriber>
      <ListOfTelephoneNumbers>
          <TelephoneNumber>9192381468</TelephoneNumber>
          <TelephoneNumber>9192381468</TelephoneNumber>
          <TelephoneNumber>9192381468</TelephoneNumber>
      </ListOfTelephoneNumbers>
  </LsrOrder>
</LsrOrderResponse>

```

### /accounts/{accountId}/lsrorders/{orderid} {#orderid}
This resource allows retrieval and updating information associated with the lsr by its ID.<br/>
Modifiable lsr order fields:
<ul>
    <li>CustomerOrderId</li>
    <li>SPID</li>
    <li>BillingTelephoneNumber</li>
    <li>AuthorizingPerson</li>
    <li>RequestedFocDate</li>
    <li>SubscriberType</li>
    <li>BusinessName</li>
    <li>LastName</li>
    <li>FirstName</li>
    <li>MiddleInitial</li>
    <li>AccountNumber</li>
    <li>PinNumber</li>
    <li>HousePrefix</li>
    <li>HouseNumber</li>
    <li>HouseSuffix</li>
    <li>PreDirectional</li>
    <li>PostDirectional</li>
    <li>StreetName</li>
    <li>StreetSuffix</li>
    <li>AddressLine2</li>
    <li>County</li>
    <li>City</li>
    <li>StateCode</li>
    <li>OrderStatus*</li>
</ul>
&#42;OrderStatus field can be modified to CANCELLED value only. This will cancel lsr. All another updates will be ignored in this case.<br/>

#### **get**

Retrieves the information associated with the specified lsr ID number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrder>
    <CustomerOrderId>MyId5</CustomerOrderId>
    <LastModifiedBy>System</LastModifiedBy>
    <OrderCreateDate>2015-03-03T13:54:00.450Z</OrderCreateDate>
    <AccountId>9999999</AccountId>
    <OrderId>00cf7e08-cab0-4515-9a77-2d0a7da09415</OrderId>
    <LastModifiedDate>2015-03-03T14:07:19.926Z</LastModifiedDate>
    <OrderStatus>FAILED</OrderStatus>
    <SPID>123C</SPID>
    <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
    <Pon>testpon1002</Pon>
    <PonVersion>0</PonVersion>
    <RequestedFocDate>2015-11-15</RequestedFocDate>
    <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <BusinessName>BusinessName</BusinessName>
        <AccountNumber>123463</AccountNumber>
        <PinNumber>1231</PinNumber>
        <ServiceAddress>
            <HouseNumber>11</HouseNumber>
            <StreetName>Park</StreetName>
            <StreetSuffix>Ave</StreetSuffix>
            <City>New York</City>
            <StateCode>NY</StateCode>
            <Zip>90025</Zip>
        </ServiceAddress>
    </Subscriber>
    <ListOfTelephoneNumbers>
        <TelephoneNumber>9192381467</TelephoneNumber>
        <TelephoneNumber>9192381468</TelephoneNumber>
    </ListOfTelephoneNumbers>
    <LsrOrderErrors>
        <LsrOrderError>
            <Code>17008</Code>
            <Description>
                FOC date cannot fall on a holiday
            </Description>
        </LsrOrderError>
    </LsrOrderErrors>
    <CountOfTNs>2</CountOfTNs>
</LsrOrder>

```

#### **put**

Updates the information associated with the specified LSR.  This is also used to cancel an order, by changing the order status field to cancelled.  This is the only case where the status can be changed, and when this is done, all other fields are left as they were prior to the cancellation.  Please see the example below.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<LsrOrder>
    <CustomerOrderId>FineCustomerid</CustomerOrderId>
    <SPID>123C</SPID>
    <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
    <RequestedFocDate>2015-11-15</RequestedFocDate>
    <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <BusinessName>BusinessName</BusinessName>
        <ServiceAddress>
            <HouseNumber>11</HouseNumber>
            <StreetName>Park</StreetName>
            <StreetSuffix>Ave</StreetSuffix>
            <City>New York</City>
            <StateCode>NY</StateCode>
            <Zip>90025</Zip>
        </ServiceAddress>
        <AccountNumber>123463</AccountNumber>
        <PinNumber>1231</PinNumber>
    </Subscriber>
</LsrOrder>
                <!-- and for cancelling an LSR -->
<LsrOrder>
    <OrderStatus>CANCELLED</OrderStatus>
    <ListOfTelephoneNumbers/>
</LsrOrder>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <LsrOrder>
        <CustomerOrderId>FineCustomerid</CustomerOrderId>
        <LastModifiedBy>team_ua</LastModifiedBy>
        <OrderCreateDate>2015-03-11T10:08:23.961Z</OrderCreateDate>
        <AccountId>9999999</AccountId>
        <OrderId>63fb728d-421b-46ce-8c32-da30b909934d</OrderId>
        <LastModifiedDate>2015-03-11T10:08:59.832Z</LastModifiedDate>
        <OrderStatus>PENDING</OrderStatus>
        <SPID>123C</SPID>
        <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
        <Pon>ATT-011515-324234</Pon>
        <PonVersion>8</PonVersion>
        <RequestedFocDate>2015-11-15</RequestedFocDate>
        <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
        <Subscriber>
            <SubscriberType>BUSINESS</SubscriberType>
            <BusinessName>BusinessName</BusinessName>
            <AccountNumber>123463</AccountNumber>
            <PinNumber>1231</PinNumber>
            <ServiceAddress>
                <HouseNumber>11</HouseNumber>
                <StreetName>Park</StreetName>
                <StreetSuffix>Ave</StreetSuffix>
                <City>New York</City>
                <StateCode>NY</StateCode>
                <Zip>90025</Zip>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>9192381468</TelephoneNumber>
        </ListOfTelephoneNumbers>
        <LsrOrderErrors/>
        <CountOfTNs>1</CountOfTNs>
    </LsrOrder>
</LsrOrderResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <ResponseStatus>
        <ErrorCode>400</ErrorCode>
        <Description>Lsr order doesn't pass validation. Please check your input parameters.</Description>
    </ResponseStatus>
    <LsrOrderErrors>
        <LsrOrderError>
            <Code>17023</Code>
            <Description>The authorizing person contact is required for lsr orders.</Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>17020</Code>
            <Description>Account SPID [1234] does not match with SPID specified in the Lsr order [123C].</Description>
        </LsrOrderError>
    </LsrOrderErrors>
    <LsrOrder>
        <CountOfTNs>1</CountOfTNs>
        <OrderId>63fb728d-421b-46ce-8c32-da30b909934d</OrderId>
        <OrderStatus>FAILED</OrderStatus>
        <AuthorizingPerson>Jim Hopkins</AuthorizingPerson>
        <SPID>123C</SPID>
        <BillingTelephoneNumber>9192381468</BillingTelephoneNumber>
        <Pon>ATT-011515-324234</Pon>
        <PonVersion>8</PonVersion>
        <RequestedFocDate>2015-11-15</RequestedFocDate>
        <Subscriber>
            <SubscriberType>BUSINESS</SubscriberType>
            <BusinessName>BusinessName</BusinessName>
            <AccountNumber>123463</AccountNumber>
            <PinNumber>1231</PinNumber>
            <ServiceAddress>
                <HouseNumber>11</HouseNumber>
                <StreetName>Park</StreetName>
                <StreetSuffix>Ave</StreetSuffix>
                <City>New York</City>
                <StateCode>NY</StateCode>
                <Zip>90025</Zip>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>9192381468</TelephoneNumber>
        </ListOfTelephoneNumbers>
        <LastModifiedBy>team_ua</LastModifiedBy>
        <OrderCreateDate>2015-03-11T10:08:23.961Z</OrderCreateDate>
        <AccountId>9999999</AccountId>
        <CreatedByUser>team_ua</CreatedByUser>
        <CustomerOrderId>FineCustomerid</CustomerOrderId>
        <LastModifiedDate>2015-03-11T10:08:59.832Z</LastModifiedDate>
    </LsrOrder>
</LsrOrderResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <ResponseStatus>
        <ErrorCode>5035</ErrorCode>
        <Description>lsr order 63fb728d-421b-46ce-8c32-da30b909934s not found.</Description>
    </ResponseStatus>
</LsrOrderResponse>

```

### /accounts/{accountId}/lsrorders/{orderid}/history {#history}
This resource retrieves the history of a lsr order.

#### **get**

Retrieves the history of the specified lsr order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>2015-03-02T15:36:31.835Z</OrderDate>
        <Note>LSR has been received by the system and is being processed</Note>
        <Author>lsrOnly</Author>
        <Status>PENDING</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2015-03-02T15:37:33.457Z</OrderDate>
        <Note>Port-out date has been set</Note>
        <Status>FOC</Status>
        <Difference>ActualFocDate : "" --&gt; 2015-06-27</Difference>
    </OrderHistory>
</OrderHistoryWrapper>

```

**404**

```xml
<LsrOrderReportResponse>
    <ResponseStatus>
        <Description>The resource does not exist</Description>
    </ResponseStatus>
</LsrOrderReportResponse>

```

### /accounts/{accountId}/lsrorders/{orderid}/notes {#notes}
The /notes resource manages a note or set of notes associated with an order.

#### **post**

Updates the Notes resource by adding a note. Adding a note to a port-in order causes a notification to be sent to Bandwidth Operations, so that they may assist as necessary.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**201**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

#### **get**

Retrieve the set of notes associated with an order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>87037</Id>
        <UserId>jbm</UserId>
        <Description>This is a test note</Description>
        <LastDateModifier>2014-11-16T04:01:10.000Z</LastDateModifier>
    </Note>
    <Note>
        <Id>87039</Id>
        <UserId>smckinnon</UserId>
        <Description>This is a second test note</Description>
        <LastDateModifier>2014-11-16T04:08:46.000Z</LastDateModifier>
    </Note>
</Notes>

```

**204**

### /accounts/{accountId}/lsrorders/{orderid}/notes/{noteId} {#noteId}
Resource manages a note.

#### **put**

Updates single note by it's id.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| noteId | string | true |

###### Body

**application/xml**

```xml
<Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

### /accounts/{accountId}/numbersAssignment {#numbersAssignment}
The TelephoneNumbersAssignment order resource represents the requests made to the Bandwidth Dashboard API to declare whether telephone numbers associated with the customer's account are assigned to end users or not.  This declaration of assignment is used in preparing NRUF Federal and PUC telephone number utilizatoin filings, and in providing justification for the acquisition and allocation of additional telephone numbers to the overall inventory<br>
<br>
The API follows the Bandwidth Dashboard API “order” model, where an order-id is created to track the interaction and refer back to it as needed.  This record will also be persisted to enable examination of past events.
<br>
This API allows our customers to designate the assignment status of the numbers on their account by providing a list of telephone numbers, and a designated assignment status.
<br>

#### **get**

Retrieve a list of the TelephoneNumbersAssignment orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

**400**

#### **post**

Create a TelephoneNumbersAssignment order to register the assignment status of a list of telephone numbers.  The telephone numbers can be declared to be either ASSIGNED or UNASSIGNED.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;" border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>CustomerOrderID</td>
      <td>An order ID created by the customer for their tracking purposes. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
    <tr>
      <td>Action</td>
      <td>(Required) Declare whether the listed Telephone Numbers are to be ASSIGNED or UNASSIGNED</td>
    </tr>
  </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrder>
    <CustomerOrderId>ICPA123ABC</CustomerOrderId>
    <Action>[ ASSIGN | UNASSIGN ]</Action>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersAssignmentOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TelephoneNumbersAssignmentOrderResponse> <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate> <AccountId>1</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId> <ProcessingStatus>PARTIAL</ProcessingStatus> <TotalQuantity>4</TotalQuantity> <FailedQuantity>1</FailedQuantity> <TelephoneNumbersAssignmentOrder> <CustomerOrderId>ICPA123ABC</CustomerOrderId> <Action>ASSIGN</Action> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> </TelephoneNumbersAssignmentOrder> <Errors> <Error> <Code>5076</Code> <Description>Number does not belong to this account.</Description> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> </TelephoneNumbersAssignmentOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TelephoneNumbersAssignmentOrderResponse> <ResponseStatus> <ErrorCode>13554</ErrorCode> <Description>Assignment action is invalid. Valid values ASSIGN, UNASSIGN</Description> </ResponseStatus> </TelephoneNumbersAssignmentOrderResponse>
```

### /accounts/{accountId}/numbersAssignment/{orderid} {#orderid}
This API returns data about the specific TelephoneNumbersAssignment order specified as the resource

#### **get**

Retrieve information about a TelephoneNumbersAssignment order with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TelephoneNumbersAssignmentOrderResponse> <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate> <AccountId>1</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId> <ProcessingStatus>PARTIAL</ProcessingStatus> <TotalQuantity>4</TotalQuantity> <FailedQuantity>1</FailedQuantity> <TelephoneNumbersAssignmentOrder> <CustomerOrderId>ICPA123ABC</CustomerOrderId> <Action>ASSIGN</Action> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> </TelephoneNumbersAssignmentOrder> <Errors> <Error> <Code>5076</Code> <Description>Number does not belong to this account.</Description> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> </TelephoneNumbersAssignmentOrderResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TelephoneNumbersAssignmentOrderResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </TelephoneNumbersAssignmentOrderResponse>
```

### /accounts/{accountId}/orders {#orders}
An attempt to order Telephone Numbers into an account creates an order record that is maintained by the Bandwidth Dashboard API to trace the attempt to order the Telephone Numbers, and provide feedback on the success or failure of that attempt. <br>
The order is identified by an order-id that can be used to uniquely identify the order attempt, and to access a record of the request and the result.<br>
There are a number of independent kinds of new number order, intended to search for and obtain numbers using different search criteria.  Some of the applicable search criteria are:<br>
<ul>
    <li>NPA / Area Code</li>
    <li>NPA-NXX combination</li>
    <li>State</li>
    <li>Rate Center and State, with or without a Local Calling Center constraint</li>
    <li>City and State</li>
    <li>ZIP Code</li>
    <li>LATA</li>
    <li>Local Vanity</li>
    <li>Peer ID</li>
</ul>
<br>

#### **get**

GET is used to retrieve order ids and order details for previously attempted Telephone Number orders. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>122</TotalCount>
        <Links>
        <first>
            <!-- Link=<https //api.inetwork.com 443/v1.0/accounts/9900012/orders?page=1&size=3>;rel="first"; -->
        </first>
        <next>
            <!-- Link=<https //api.inetwork.com 443/v1.0/accounts/9900012/orders?page=cbdcfc94-81b1-4ce9-8b6d-f8d6b85381ba&size=3>;rel="next"; -->
        </next>
        </Links>
        <OrderIdUserIdDate>
            <CountOfTNs>1</CountOfTNs>
            <lastModifiedDate>2013-12-20T06</lastModifiedDate>
            <OrderDate>2013-12-20T06</OrderDate>
            <orderId>c5d8d076-345c-45d7-87b3-803a35cca89b</orderId>
            <OrderStatus>COMPLETE</OrderStatus>
            <TelephoneNumberDetails>
                <States>
                    <StateWithCount>
                        <State>VA</State>
                        <Count>1</Count>
                    </StateWithCount>
                </States>
                <RateCenters>
                    <RateCenterWithCount>
                        <Count>1</Count>
                        <RateCenter>LADYSMITH</RateCenter>
                    </RateCenterWithCount>
                </RateCenters>
                <Cities>
                    <CityWithCount>
                        <City>LADYSMITH</City>
                        <Count>1</Count>
                    </CityWithCount>
                </Cities>
                <Tiers>
                    <TierWithCount>
                        <Tier>0</Tier>
                        <Count>1</Count>
                    </TierWithCount>
                </Tiers>
                <Vendors>
                    <VendorWithCount>
                        <VendorId>49</VendorId>
                        <VendorName>Bandwidth CLEC</VendorName>
                        <Count>1</Count>
                    </VendorWithCount>
                </Vendors>
            </TelephoneNumberDetails>
            <userId>bwc_user</userId>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>0</CountOfTNs>
            <lastModifiedDate>2013-11-05T17</lastModifiedDate>
            <OrderDate>2013-11-05T17</OrderDate>
            <orderId>27da9f39-81f3-44ed-80ce-05ddf2db612d</orderId>
            <OrderStatus>FAILED</OrderStatus>
            <userId>wandedemo_user</userId>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>1</CountOfTNs>
            <lastModifiedDate>2013-12-11T20</lastModifiedDate>
            <OrderDate>2013-12-11T20</OrderDate>
            <orderId>2bab589e-2cda-453b-9999-8f35441d4a1a</orderId>
            <OrderStatus>COMPLETE</OrderStatus>
            <TelephoneNumberDetails>
                <! ---- SNIP ---->
            </TelephoneNumberDetails>
            <userId>bwc_user</userId>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>

```

**400**

**404**

#### **post**

<span>A POST creates a request for Telephone Numbers</span>
<br>
A POST on the /orders resource is used to request that the system provide one or more TNs for use by the account.  The post creates a new number order record to preserve the request, as well as the response of the Bandwidth Dashboard API to the request.  A well-formed POST on the /orders resource will create an order record, and return an order-id string that can be used to uniquely identify the new number order request.  The details of success and failure of the request for TNs will be preserved and linked to the returned order id.<br><br>
The order-id is returned in the Location Header, allowing the API user immediate access to the order.<br><br>
There are multiple ways that new telephone numbers can be requested.  The various request payloads are documented below. <br><br>
Common values in <b>all</b> request payloads include: <br>
<table>
    <tr>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Quantity</td>
        <td>The desired quantity of requested numbers. values range from 1-5000. If no quantity is specified, the default of 5000 is returned.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>The name of the order. Max length restricted to 50 characters.</td>
    </tr>
    <tr>
        <td>CustomerOrderId</td>
        <td>Optional value for Id set by customer. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
    <tr>
        <td>SiteId</td>
        <td>The ID of the Site that the SIP Peer is to be associated with.</td>
    </tr>
    <tr>
        <td>PeerId</td><td>The ID of the SIP Peer that the telephone numbers are to be assigned to.</td>
    </tr>
    <tr>
        <td>PartialAllowed</td>
        <td>By default all order submissions are fulfilled partially. Setting the PartialAllowed to false would trigger the entire order to be fulfilled (any error ecnountered such as 1 TN not being available would fail all TNs in the order)<br>
            By default, this value is set to false</td>
    </tr>
    <tr>
        <td>BackOrderRequested</td>
        <td>BackOrderRequested will indicate to the system that if the entire quantity of numbers is not available on the first attempt to fill the new number order, the request will be repeated periodically until the request is successful or cancelled. Setting the parameter to true indeicated a desire to backorder numbers if the entire quantity is not available</td>
    </tr>
</table>
<p>
The following POST payload elements are not common to all orders.  They are specific to one or more types of orders:
<br>
<table>
    <tr>
        <th>Parameter</th><th>Description</th>
    </tr>
    <tr>
        <td>TelephoneNumberList</td><td>A list of telephone numbers to order</td>
    </tr>
    <tr>
        <td>AreaCode</td><td>Allowed ranged: [2-9] for the first digit and [0, 9] for both the second and third digits.</td>
    </tr>
    <tr>
        <td>RateCenter</td><td>A text Rate Center name.  Must be combined with State information</td>
    </tr>
    <tr>
        <td>State</td><td>The two-letter abbreviation of the state</td>
    </tr>
    <tr>
        <td>City</td><td>The name of the city that the Ordered telephone numbers should apply to</td>
    </tr>
    <tr>
        <td>Zip</td><td>A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) format value.</td>
    </tr>
    <tr>
        <td>Lata</td><td>A maximum five-digit (XXXXX) numeric format.</td>
    </tr>
    <tr>
        <td>EnableLCA</td><td>If set to true, local calling access numbers will be returned for Rate Center, NPA-NXX and NPANXXX orders if numbers are not available for the given criteria. Default is true.</td>
    </tr>
    <tr>
        <td>Npa-Nxx or Npa-Nxxxx with EnableLCA</td><td>NpaNxx combination to be searched.<br>Valid Npa values:  [2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid Nxx values: [2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid Xxvalues [0-9].<br><br>if set to true, enables the ability to get local calling access numbers if numbers are not available for the given criteria.</td>
    </tr>
    <tr>
        <td>LocalVanity</td><td>A text string used to request a regular vanity number. Valid range is between 4 and 7 alphanumeric characters.</td>
    </tr>
    <tr>
        <td>EndsIn</td><td>Intended to use with LocalVanity only. The parameter value is true or false. If set to true, the search will look for only numbers which end in specified LocalVanity, otherwise LocalVanity sequence can be met anywhere in last 7 number digits. The default is false.</td>
    </tr>
    <tr>
        <td>TollFreeVanity</td><td>A text string used to request a toll free vanity number. Valid range is between 4 and 7 alphanumeric characters.</td>
    </tr>
    <tr>
        <td>TollFreeWildCardPattern</td><td>A 3-digit wild card pattern for specifying toll free prefixes, comprised of 8 followed by two stars, a digit and a star or two digits</td>
    </tr>
    <tr>
        <td>ReservationIdList</td><td>If a telephone number or numbers have been previously reserved, the ReservationIdList provides the IDs necessary to release the numbers.  This only applies to reserved numbers - if no reservation has been placed on the numbers this list is not required.</td>
    </tr>
    <tr>
        <td>TnAttributes</td>
        <td>Attributes to be assigned to the telephone number. Optional parameter. Possible values: "Protected"</td>
    </tr>
</table>
<br><br>
<b>Putting it all together</b>
<br><br>
The request to order numbers is performed via a POST to the /orders resource.  As indicated above, the payload of this POST varies depending on the type of search that is to be performed for the numbers, with a unique payload element used to indicate each different order type. <br><br>
The unique components of the payload are described in the table below.  These are combined with the common payload components in the first table above to create a full order payload.  Some complete payloads are captured in the examples. <br><br>
The generic response payload is also captured below: <br>
<table style="text-align: left; width: 100%;" border="1"
 cellpadding="2" cellspacing="0">
    <tbody>
        <tr><th>The 'wrapper' Request Payload'</th></tr>
        <tr>
            <td>
                <pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Order&gt;
    &lt;CustomerOrderId&gt;SJM00001&lt;/CustomerOrderId&gt;
    &lt;!--
        There are various types of orders, all of which are submitted in the 'xxxOrderType'
        element of the Order Request payload.  The 'Payload Segment' elements described in
        the table below, which describe the encoding for the various order types, replace
        this comment to create a complete payload that includes the order type and the
        common elements.
        Take a look at the example payloads as well.
    --&gt;
    &lt;SiteId&gt;202&lt;/SiteId&gt;
    &lt;PeerId&gt;518824&lt;/PeerId&gt;
    &lt;TnAttributes/&gt;
&lt;/Order&gt;
                </pre>
            </td>
        </tr>
    </tbody>
</table>
<table style="text-align: left; width: 100%;" border="1"
 cellpadding="2" cellspacing="0">
  <tbody>
    <col width="60%">
    <col width="40%">
    <tr>
      <th>Payload segment</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
      <pre>
&lt;ExistingTelephoneNumberOrderType&gt;
    &lt;TelephoneNumberList&gt;
        &lt;TelephoneNumber&gt;9193752369&lt;/TelephoneNumber&gt;
        &lt;TelephoneNumber&gt;9193752720&lt;/TelephoneNumber&gt;
        &lt;TelephoneNumber&gt;9193752648&lt;/TelephoneNumber&gt;
    &lt;/TelephoneNumberList&gt;
    &lt;ReservationIdList&gt;
        &lt;ReservationId&gt;[GUID]&lt;/ReservationId&gt;
        &lt;ReservationId&gt;[GUID]&lt;/ReservationId&gt;
    &lt;/ReservationIdList&gt;
&lt;/ExistingTelephoneNumberOrderType&gt;</pre>
      </td>
      <td>Order a set of numbers known to be available. <br>
      This often results if the numbers have been<br>
      found using a separate <b>availableNumbers</b> search<br>
        If the numbers have previously been reserved, <br>
        a reservation id must be included</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;AreaCodeSearchAndOrderType&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/AreaCodeSearchAndOrderType&gt;</pre>
      </td>
      <td>Allowed ranges ~ <br>
      [2-9] for the first digit and <br>
      [0, 9] for both the second and <br>
      third digits.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;RateCenterSearchAndOrderType&gt;
    &lt;RateCenter&gt;RALEIGH&lt;/RateCenter&gt;
    &lt;State&gt;NC&lt;/State&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/RateCenterSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Rate Center and <br> the State</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;NPANXXSearchAndOrderType&gt;
    &lt;NpaNxx&gt;919439&lt;/NpaNxx&gt;
    &lt;EnableTNDetail&gt;true&lt;/EnableTNDetail&gt;
    &lt;EnableLCA&gt;false&lt;/EnableLCA&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/NPANXXSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the NpaNxx combination to be ordered.<br>
      Valid Npa values ~ [2-9] for the first digit,<br>
      and [0-9] for both the second and third digits.<br>
      Valid Nxx values ~ [2-9] for the first digit, <br>
      and [0-9] for both the second and third digits.<br>
      A similar approach is viable for NPANXXXX.<br>
      The EnableLCA flag turns LCA search on or off.
      </td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;TollFreeVanitySearchAndOrderType&gt;
   &lt;Quantity&gt;1&lt;/Quantity&gt;
   &lt;TollFreeVanity&gt;newcars&lt;/TollFreeVanity&gt;
&lt;/TollFreeVanitySearchAndOrderType&gt;</pre>
      </td>
      <td>
      Specify a Toll Free Vanity search, where the <br>
      numbers ordered match a specific alphanumeric <br>
      pattern between 4 and 7 characters long</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;TollFreeWildCharSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;TollFreeWildCardPattern&gt;8**&lt;/TollFreeWildCardPattern&gt;
&lt;/TollFreeWildCharSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Toll Free wild card pattern.<br>
      to be ordered, comprised of 3 digits beginning with '8'.<br>
      Examples are 8**, 87*, etc.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;StateSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;State&gt;NC&lt;/State&gt;
&lt;/StateSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the State to be searched<br>for telephone numbers</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;CitySearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;State&gt;NC&lt;/State&gt;
&lt;/CitySearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the City and State to be ordered from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;ZIPSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
&lt;/ZIPSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Zip Code to be ordered from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;LATASearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;Lata&gt;224&lt;/Lata&gt;
&lt;/LATASearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the LATA to order <br> telephone numbers from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;CombinedSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;RateCenter&gt;RALEIGH&lt;/RateCenter&gt;
    &lt;State&gt;NC&lt;/State&gt;
    &lt;NpaNxx&gt;919439&lt;/NpaNxx&gt;
    &lt;NpaNxxX&gt;9194391&lt;/NpaNxxX&gt;
    &lt;Lata&gt;224&lt;/Lata&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;EnableLCA&gt;false&lt;/EnableLCA&gt;
&lt;/CombinedSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the any combination of:<br>
      <ul><li>AreaCode</li><li>RateCenter</li><li>State</li><li>NpaNxx</li><li>NpaNxxX</li><li>Lata</li><li>City</li><li>Zip</li></ul>
      <br>
But with following limitations:
<ul>
    <li>Parameters AreaCode, NpaNxx and NpaNxxX<br>are mutually exclusive</li>
    <li>LCA search is supported only for<br>one of the following criteria:<ul><ul><li>NpaNxx</li><li>NpaNxxX</li><li>RateCenter and State</li></ul></li>
    <li>If City or RateCenter is specified<br>then State is required</li>
</ul>
      </td>
<tr><td>
<pre>
&lt;CombinedSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;LocalVanity&gt;newcars&lt;/LocalVanity&gt;
    &lt;EndsIn&gt;false&lt;/EndsIn&gt;
&lt;/CombinedSearchAndOrderType&gt;
</pre>
</td>
<td>
    Specify AreaCode and LocalVanity to order telephone numbers matching a specific alphanumeric pattern between 4 and 7 characters long.<br>
    <br>
    Limitations:
    <ul>
    <li>AreaCode is always required</li>
    <li>No parameter combinations are allowed here</li>
    <li>This order type is unsupported with BackOrderRequested=true</li>
    </ul>
</td>
</tr>
<tr>
<td><pre>
 &lt;TnAttributes&gt;
    &lt;TnAttribute&gt;Protected&lt;/TnAttribute&gt;
    &lt;/TnAttributes&gt;</pre>
        </td>
        <td>Specify TnAttribute to be assigned to the ordered telephone numbers.</td>
      </tr>
    </tr>
  </tbody>
</table>
<br> <br> Some examples of POST payloads for some orders are below...

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<!--
    an example of an area code search and order type
-->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Area Code Order</Name>
    <BackOrderRequested>false</BackOrderRequested>
    <AreaCodeSearchAndOrderType>
        <AreaCode>435</AreaCode>
        <Quantity>1</Quantity>
    </AreaCodeSearchAndOrderType>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>743</SiteId>
</Order>
<!--
    an alternative example of a NPA-NXX search and order type
-->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Area Code Order</Name>
    <BackOrderRequested>false</BackOrderRequested>
    <NPANXXSearchAndOrderType>
        <NpaNxx>919439</NpaNxx>
        <EnableTNDetail>true</EnableTNDetail>
        <EnableLCA>false</EnableLCA>
        <Quantity>1</Quantity>
    </NPANXXSearchAndOrderType>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>743</SiteId>
</Order>
<!--
    an example of combined search and order type
-->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Area Code Order</Name>
    <BackOrderRequested>false</BackOrderRequested>
    <CombinedSearchAndOrderType>
        <NpaNxx>919439</NpaNxx>
        <City>RALEIGH</City>
        <State>NC</State>
        <EnableLCA>false</EnableLCA>
        <Quantity>1</Quantity>
    </CombinedSearchAndOrderType>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>743</SiteId>
</Order>
<!--
    an example of combined search and order type for local vanity
-->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Local Vanity Order</Name>
    <CombinedSearchAndOrderType>
        <AreaCode>617</AreaCode>
        <LocalVanity>newcars</LocalVanity>
        <Quantity>1</Quantity>
    </CombinedSearchAndOrderType>
    <SiteId>743</SiteId>
</Order>
<!--
    a  example of an existing number order type
-->
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Existing Number Order</Name>
    <ExistingTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>9193752369</TelephoneNumber>
            <TelephoneNumber>9193752720</TelephoneNumber>
            <TelephoneNumber>9193752648</TelephoneNumber>
        </TelephoneNumberList>
        <ReservationIdList>
            <ReservationId>[GUID]</ReservationId>
            <ReservationId>[GUID]</ReservationId>
        </ReservationIdList>
    </ExistingTelephoneNumberOrderType>
    <SiteId>743</SiteId>
</Order>
<!-- a final example of an example of combined search with establishing Protected status -->
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>Area Code Order</Name>
    <BackOrderRequested>false</BackOrderRequested>
    <CombinedSearchAndOrderType>
        <NpaNxx>919439</NpaNxx>
        <City>RALEIGH</City>
        <State>NC</State>
        <EnableLCA>false</EnableLCA>
        <Quantity>1</Quantity>
    </CombinedSearchAndOrderType>
    <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <PartialAllowed>true</PartialAllowed>
    <SiteId>743</SiteId>
</Order>

```

##### Response

**201**

```xml
<OrderResponse>
    <Order>
        <CustomerOrderId>123456789</CustomerOrderId>
        <id>34adcd9f-2c4a-4631-9dae-d1f318ed57bc</id>
        <Name>Zip Order</Name>
        <OrderCreateDate>2014-07-11T17:13:57.788Z</OrderCreateDate>
        <BackOrderRequested>false</BackOrderRequested>
        <ZIPSearchAndOrderType>
            <Quantity>1</Quantity>
            <Zip>27606</Zip>
        </ZIPSearchAndOrderType>
        <TnAttributes>
                <TnAttribute>Protected</TnAttribute>
                <TnAttribute>External</TnAttribute>
                <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>3013</SiteId>
    </Order>
</OrderResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <ErrorList>
        <Error>
            <Code>5016</Code>
            <Description>The SiteId submitted is invalid.</Description>
        </Error>
    </ErrorList>
    <Order>
        <CustomerOrderId>123456789</CustomerOrderId>
        <Name>Area Code Order</Name>
        <OrderCreateDate>2014-07-08T14:29:13.174Z</OrderCreateDate>
        <BackOrderRequested>false</BackOrderRequested>
        <AreaCodeSearchAndOrderType>
            <AreaCode>435</AreaCode>
            <Quantity>1</Quantity>
        </AreaCodeSearchAndOrderType>
        <TnAttributes>
                <TnAttribute>Protected</TnAttribute>
                <TnAttribute>External</TnAttribute>
                <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>763</SiteId>
    </Order>
</OrderResponse>

```

### /accounts/{accountId}/orders/{orderid} {#orderid}
The orderid is an explicit link to a single new number order in the Bandwidth Dashboard API, and can be used to retrieve information about that new number order including:
<ul>
<li>Order status information</li>
<li>Order outcome</li>
<li>order created and modified dates</li>
<li>The telephone numbers that were successfully ordered</li>
<li>The details of the order request</li>
</ul>

#### **get**

GET all of the details associated with an identified order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<OrderResponse>
    <CompletedQuantity>1</CompletedQuantity>
    <CreatedByUser>jbm</CreatedByUser>
    <LastModifiedDate>2014-01-06T19:09:44.027Z</LastModifiedDate>
    <OrderCompleteDate>2014-01-06T19:09:44.041Z</OrderCompleteDate>
    <Order>
        <CustomerOrderId>123456789</CustomerOrderId>
        <Name>Area Code Order</Name>
        <OrderCreateDate>2014-01-06T19:09:43.695Z</OrderCreateDate>
        <PeerId>303716</PeerId>
        <BackOrderRequested>false</BackOrderRequested>
        <AreaCodeSearchAndOrderType>
            <AreaCode>804</AreaCode>
            <Quantity>1</Quantity>
        </AreaCodeSearchAndOrderType>
        <TnAttributes>
                <TnAttribute>Protected</TnAttribute>
                <TnAttribute>External</TnAttribute>
                <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>743</SiteId>
    </Order>
    <OrderStatus>COMPLETE</OrderStatus>
    <CompletedNumbers>
        <TelephoneNumber>
            <FullNumber>8042105666</FullNumber>
        </TelephoneNumber>
    </CompletedNumbers>
    <FailedQuantity>0</FailedQuantity>
</OrderResponse>

```

#### **put**

With the introduction of Backorder capabilities, new number orders may stay in backordered state while the order is filled.   While in this state it is possible to update the modifiable fields in the record, as well as to request that backorder processing of the order be ended.
The fields that can be updated are...
<ul>
<li>The order name</li>
<li>The customer order id</li>
<li>The backordered state.</li>
</ul>
Specifying a &lt;CloseOrder&gt; value of true will cancel the backorder request, leaving the currently ordered numbers on the account.  No further numbers will be added to the account as a result of the order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Order>
    <Name>Available Telephone Number order</Name>
    <CustomerOrderId>123456789</CustomerOrderId><!-- Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters. -->
    <CloseOrder>true</CloseOrder>
</Order>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse/>

```

**400**

**404**

### /accounts/{accountId}/orders/{orderid}/areaCodes {#areaCodes}
Retrieves the area codes of the phone numbers from the specified order.

#### **get**

Retrieves the area codes of the phone numbers from the specified order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <AreaCode>888</AreaCode>
        <Count>1</Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>

```

### /accounts/{accountId}/orders/{orderid}/npaNxx {#npaNxx}
Retrieves the Npa-Nxx of the phone numbers from the specified order.

#### **get**

Retrieves the Npa-Nxx of the phone numbers from the specified order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <NPA-NXX>888424</NPA-NXX>
        <Count>1</Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>

```

### /accounts/{accountId}/orders/{orderid}/totals {#totals}
Retrieves the total quantity of phone numbers from the specified order.

#### **get**

Retrieves the total quantity of phone numbers from the specified order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <NPA-NXX>888424</NPA-NXX>
        <Count>1</Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>

```

### /accounts/{accountId}/orders/{orderid}/tns {#tns}
The TNs resource accesses the Telephone Numbers associated with the given order ID of the given site ID of the given account.

#### **get**

returns a list of phone numbers associated with the ID of a given account.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneNumbers>
    <Count>1</Count>
    <TelephoneNumber>8042105666</TelephoneNumber>
</TelephoneNumbers>

```

### /accounts/{accountId}/orders/{orderid}/notes {#notes}
The /notes resource manages a note or set of notes associated with an order.

#### **post**

Updates the Notes resource by adding a note. Adding a note to a port-in order causes a notification to be sent to Bandwidth Operations, so that they may assist as necessary.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**201**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

#### **get**

Retrieve the set of notes associated with an order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>87037</Id>
        <UserId>jbm</UserId>
        <Description>This is a test note</Description>
        <LastDateModifier>2014-11-16T04:01:10.000Z</LastDateModifier>
    </Note>
    <Note>
        <Id>87039</Id>
        <UserId>smckinnon</UserId>
        <Description>This is a second test note</Description>
        <LastDateModifier>2014-11-16T04:08:46.000Z</LastDateModifier>
    </Note>
</Notes>

```

**204**

### /accounts/{accountId}/orders/{orderid}/notes/{noteId} {#noteId}
Resource manages a note.

#### **put**

Updates single note by it's id.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| noteId | string | true |

###### Body

**application/xml**

```xml
<Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

### /accounts/{accountId}/orders/{orderid}/history {#history}
History information is available on orders that have gone through multiple transitions, which is possible in the case that telephone numbers are backordered.  In this case the order will have one or more OrderHistory records associated with it, detailing the set of events that have affected the order.

#### **get**

Retrieve the history information associated with an order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>2014-05-20T14:21:43.937Z</OrderDate>
        <Note>Order backordered - awaiting additional numbers</Note>
        <Author>System</Author>
        <Status>BACKORDERED</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-05-20T14:24:43.428Z</OrderDate>
        <Note>Order backordered - awaiting additional numbers</Note>
        <Author>System</Author>
        <Status>BACKORDERED</Status>
        <Difference>CustomerOrderId : "" --&gt; hello</Difference>
    </OrderHistory>
</OrderHistoryWrapper>

```

**404**

```xml
<ErrorResponse>
    <ResponseStatus>
        <Description>The resource does not exist</Description>
    </ResponseStatus>
</ErrorResponse>

```

### /accounts/{accountId}/portins {#portins}
The portins endpoint is used to manage requests to port a number into the Bandwidth Dashboard API.  Like many other requests, the portins endpoint causes the creation of an <b>order</b> that is used to manage the porting event throughout the lifecycle of the request.
The various sub-resources and methods are covered in greater detail below.
The elements used or supplied in the payloads are described in the following table...
<table border="1" cellspacing="0" cellpadding="0" width="624">
    <tbody>
        <tr>
            <td valign="top">
                <p>
                    <strong>Parameter</strong>
                </p>
            </td>
            <td valign="top">
                <p>
                    <strong>Required</strong>
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    <strong>Description</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    accountId (URL Parameter)
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    The account ID for porting the numbers.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CustomerOrderId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Internal customer order id for tracking the order.  Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    RequestedFocDate
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Format: ISO8601 encoding such as “2013-05-10T15:14:22Z”, or "2019-10-31T17:15:00+04:00".
                    For all ports, if RequestedFocDate is specified, the date portion must be:
                    <ul>
                      <li> in the future </li>
                      <li> after the losing carrier's minimum number of days to port-out </li>
                      <li> not on a weekend or U.S. holiday </li>
                    </ul>
                    If RequestedFocDate is not specified, then the next available FOC date, meeting the criteria above, will be used.
                    For non-Triggered Ports, the Time portion of the RequestedFocDate may be omitted. These ports will be activated at the default activation time of 11:30.
                    For Triggered Ports, the desired activation time should be included in the RequestedFocDate. If the time portion of RequestedFocDate is omitted, time defaults to 00:00:00Z, so please specify a time.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    AlternateSpid
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Unique customer SPID associated with Bandwidth. Would be ignored in provisioning of toll free numbers for RespOrg Exception customer.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    BillingTelephoneNumber (BTN)
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Account or Billing telephone number for order. Porting telephone number for most wireline ports.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    NewBillingTelephoneNumber (NEW BTN)
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    This field is used to specify a new billing telephone number on the losing carrier account.
                    Cannot be the same as BillingTelephoneNumber or be present in the list of ported numbers.
                    Would be ignored in provisioning of toll free numbers for RespOrg Exception customer.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    SubscriberType
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    (BUSINESS, RESIDENTIAL) If residential, order will be rejected if a BusinessName is entered.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    BusinessName
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Subscriber business name. Mandatory if SubscriberType is BUSINESS.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    FirstName
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Subscriber first name.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    MiddleInitial
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Subscriber middle initial.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    LastName
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Subscriber last name. Mandatory if SubscriberType is RESIDENTIAL.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    HouseNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address number.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    HousePrefix
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address number prefix
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    HouseSuffix
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address number suffix.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PreDirectional
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address pre-directional.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    StreetName
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street name.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    StreetSuffix
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street suffix.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PostDirectional
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Street address post directional.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    AddressLine2
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Put unit, suite, floor, etc. here.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    City
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    City.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    StateCode
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Two letter state code.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    Zip
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Zip code.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PlusFour
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Zip + 4.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    Country
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Country. Derived from StateCode if omitted.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    AddressDetail1, AddressValue1, AddressDetail2, AddressValue2, AddressDetail3, AddressValue3
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Additional details can optionally be added to the address to specify address refinements such as Building, Basement, etc.
                    <br/>
                    <br/>
                    See the USPS Postal Address Format - pub28 for detail.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    LoaAuthorizingPerson
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    First and last name of person who authorized LOA.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    AccountNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Account number, typically required for wireless ports.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PinNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    PIN Number, often required for wireless ports.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PhoneNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Ten digit phone number with no dots or dashes. One or more is required. Use a PhoneNumber tag for each phone number in the list.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    SiteId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    This identifier specifies the site, aka sub-account, that the TNs will be
                    ported into. You can find the identifier for a site/sub-account by using GET
                     /accounts/<accountId>/sites, or by clicking on 'Manage sub-account' for the
                      desired sub-account on the main page of the Bandwidth Dashboard UI portal.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PeerId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    This identifier specifies the SIP-peer, aka Location, that the TNs will be
                    ported into. You can find the identifier for a sip-peer/location by using
                    GET /accounts/<accountId>/sites/<siteId>/sippeers, or by clicking on 'Accounts'
                     on the upper right of the Bandwidth Dashboard UI portal, then clicking
                     'Locations' on the navigation bar. The Location identifiers are listed next
                     each location name. If PeerId is omitted, the Location designated as the
                      'default location' for that sub-account will be used.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PartialPort
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    "PartialPort" false means that all TNs associated with the Billing TN are being ported.
                    By default all portin orders are classified as full ports. If the attribute PartialPort is specified as true, the order will be submitted
                    as a partial port. Would be ignored in provisioning of toll free numbers for RespOrg Exception customer.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    Triggered
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    (true|false)
                    <br/>
                    If present and set to true, this port will be treated as one that will be manually activated. If this value is set it is assumed that the
                    customer will manually activate the port, and that the Bandwidth Dashboard API will activate the port at a default activation time if the
                    customer does not manually activate the port. This is not supported for wireless ports, and cannot be changed via a SUPP. Would be ignored
                    in provisioning of toll free numbers for RespOrg Exception customer.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    TnAttributes
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    <br/>
                     Attributes to be assigned to the telephone number. Optional parameter. Possible values - "Protected".
                     Would be ignored in provisioning of toll free numbers for RespOrg Exception customer.
                </p>
            </td>
        </tr>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    ProcessingStatus
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Including ProcessingStatus with a value of "DRAFT" allows you to create a port-in request in the Bandwidth Dashboard, but not processing the request. Omitting ProcessingStatus cause the port-in to be validated and if correct, processed right away. Be aware,
                    however, that validation of the port-in payload occurs when the request is actually submitted by
                    performing a PUT on the order with ProcessingStatus set to SUBMITTED.
                </p>
            </td>
        </tr>
        <tr>
          <td valign="top">
              <p>
                  Immediately
              </p>
          </td>
          <td valign="top">
              <p align="center">
                  No
              </p>
          </td>
          <td width="351" valign="top">
              <p>
                  Including Immediately with a value of true will cause an Internal port-in to
                   complete as soon as possible, without requiring a scheduled activation time.
                    Immediately has no meaning for port types other than Internal.
              </p>
          </td>
        </tr>
    </tbody>
</table>

#### **get**

Retrieves the port-in requests for the given account ID. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<LNPResponseWrapper>
    <TotalCount>3176</TotalCount>
    <Links>
        <first> -- link -- </first>
        <next> -- link -- </next>
    </Links>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>1</CountOfTNs>
        <userId>Neustar</userId>
        <lastModifiedDate>2014-11-21T14:00:33.836Z</lastModifiedDate>
        <OrderDate>2014-11-05T19:34:53.176Z</OrderDate>
        <OrderId>982e3c10-3840-4251-abdd-505cd8610788</OrderId>
        <OrderType>port_out</OrderType>
        <ErrorCode>200</ErrorCode>
        <ErrorMessage>Port out successful.</ErrorMessage>
        <FullNumber>9727717577</FullNumber>
        <ProcessingStatus>COMPLETE</ProcessingStatus>
        <RequestedFOCDate>2014-11-20T00:00:00.000Z</RequestedFOCDate>
        <VendorId>512E</VendorId>
    </lnpPortInfoForGivenStatus>
    <Snip>   ---   </Snip>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>1</CountOfTNs>
        <userId>Neustar</userId>
        <lastModifiedDate>2015-03-30T14:01:59.049Z</lastModifiedDate>
        <OrderDate>2015-03-24T17:47:17.605Z</OrderDate>
        <OrderId>f8f02d0a-d1a4-42eb-8f45-ce8187cd73ff</OrderId>
        <OrderType>port_out</OrderType>
        <ErrorCode>200</ErrorCode>
        <ErrorMessage>Port out successful.</ErrorMessage>
        <FullNumber>2092660315</FullNumber>
        <ProcessingStatus>COMPLETE</ProcessingStatus>
        <RequestedFOCDate>2015-03-27T00:00:00.000Z</RequestedFOCDate>
        <VendorId>512E</VendorId>
    </lnpPortInfoForGivenStatus>
</LNPResponseWrapper>

```

#### **post**

Creates a port-in request for the accountId, SiteId, and PeerId.
 If PeerId is omitted, the default PeerId (Location) for the Site (Sub-Account) will be used.
  Once the payload is successfully submitted, the order will temporarily have a status of
  "PENDING_DOCUMENTS", then "SUBMITTED".
<br><br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<LnpOrder>
    <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
    <AlternateSpid>X455</AlternateSpid>
    <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <SiteId>    SITE ID     </SiteId>
    <PeerId>  SIPPEER ID    </PeerId>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <FirstName>First</FirstName>
        <LastName>Last</LastName>
        <ServiceAddress>
            <HouseNumber>11235</HouseNumber>
            <StreetName>Back</StreetName>
            <City>Denver</City>
            <StateCode>CO</StateCode>
            <Zip>27541</Zip>
            <County>Canyon</County>
        </ServiceAddress>
    </Subscriber>
    <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
    <WirelessInfo>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
    </WirelessInfo>
    <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <ListOfPhoneNumbers>
        <PhoneNumber>9194809871</PhoneNumber>
    </ListOfPhoneNumbers>
    <Triggered>true</Triggered>
</LnpOrder>

```

##### Response

**201**

```xml
<LnpOrderResponse>
    <OrderId>03f194d5-3932-4e9f-8ba1-03ef767985e5</OrderId>
    <Status>
        <Code>201</Code>
        <Description>Order request received. Please use the order id to check the status of your order later.</Description>
    </Status>
    <ProcessingStatus>PENDING_DOCUMENTS</ProcessingStatus>
    <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
    <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <FirstName>First</FirstName>
        <LastName>Last</LastName>
        <ServiceAddress>
            <HouseNumber>11235</HouseNumber>
            <StreetName>Back</StreetName>
            <City>Denver</City>
            <StateCode>CO</StateCode>
            <Zip>27541</Zip>
            <County>Canyon</County>
            <Country>United States</Country>
        </ServiceAddress>
    </Subscriber>
    <WirelessInfo>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
    </WirelessInfo>
    <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <ListOfPhoneNumbers>
        <PhoneNumber>9194809871</PhoneNumber>
    </ListOfPhoneNumbers>
    <Triggered>true</Triggered>
</LnpOrderResponse>

```

**400**

```xml
<LnpOrderResponse>
    <Status>
        <Code>400</Code>
        <Description>Validation Failed. Please check your input parameters.</Description>
    </Status>
    <Errors>
        <Code>7309</Code>
        <Description>The site id was not supplied or is invalid.</Description>
    </Errors>
    <Errors>
        <Code>7312</Code>
        <Description>The sippeer id is invalid.</Description>
    </Errors>
    <Errors>
        <Code>7398</Code>
        <Description>Protected status is not available for numbers in off-net rate centers.</Description>
    </Errors>
    <ProcessingStatus>EXCEPTION</ProcessingStatus>
    <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <FirstName>First</FirstName>
        <LastName>Last</LastName>
        <ServiceAddress>
            <HouseNumber>11235</HouseNumber>
            <StreetName>Back</StreetName>
            <City>Denver</City>
            <StateCode>CO</StateCode>
            <Zip>27541</Zip>
            <County>Canyon</County>
            <Country>United States</Country>
        </ServiceAddress>
    </Subscriber>
    <WirelessInfo>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
    </WirelessInfo>
    <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <ListOfPhoneNumbers>
        <PhoneNumber>9194809871</PhoneNumber>
    </ListOfPhoneNumbers>
    <Triggered>true</Triggered>
</LnpOrderResponse>

```

### /accounts/{accountId}/portins/{orderid} {#orderid}
This resource is used to manage a specific existing port-in order.

#### **get**

Retrieves the information associated with the specified port-in ID number. Note: For users of Enterprise Telephony accounts, AlternateSpid, LosingCarrierSPID, LosingCarrierName, and LosingCarrierIsWireless, are omitted from the success output.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<LnpOrderResponse>
    <Errors>
        <Code>7205</Code>
        <Description>Telephone number is already being processed on another order</Description>
    </Errors>
    <ProcessingStatus>CANCELLED</ProcessingStatus>
    <RequestedFocDate>2016-03-25T21:15:00.000Z</RequestedFocDate>
    <CustomerOrderId>SJM00002</CustomerOrderId>
    <LoaAuthorizingPerson>The Authguy</LoaAuthorizingPerson>
    <Subscriber>
        <SubscriberType>BUSINESS</SubscriberType>
        <FirstName>First</FirstName>
        <LastName>Last</LastName>
        <ServiceAddress>
            <HouseNumber>11235</HouseNumber>
            <StreetName>Back</StreetName>
            <City>Denver</City>
            <StateCode>CO</StateCode>
            <Zip>27541</Zip>
            <County>Canyon</County>
            <Country>United States</Country>
            <AddressType>Service</AddressType>
        </ServiceAddress>
    </Subscriber>
    <WirelessInfo>
        <AccountNumber>771297665AABC</AccountNumber>
        <PinNumber>1234</PinNumber>
    </WirelessInfo>
    <TnAttributes>
        <TnAttribute>Protected</TnAttribute>
        <TnAttribute>External</TnAttribute>
        <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <BillingTelephoneNumber>9195551234</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <ListOfPhoneNumbers>
        <PhoneNumber>9194809871</PhoneNumber>
    </ListOfPhoneNumbers>
    <AlternateSpid>Foo</AlternateSpid>
    <AccountId>20</AccountId>
    <SiteId>2857</SiteId>
    <PeerId>317771</PeerId>
    <LosingCarrierName>Mock Carrier</LosingCarrierName>
    <VendorName>Bandwidth CLEC</VendorName>
    <OrderCreateDate>2014-08-04T13:37:06.323Z</OrderCreateDate>
    <LastModifiedDate>2014-08-04T13:37:08.676Z</LastModifiedDate>
    <userId>jbm</userId>
    <LastModifiedBy>jbm</LastModifiedBy>
    <PartialPort>false</PartialPort>
    <Triggered>false</Triggered>
    <PortType>AUTOMATED</PortType>
</LnpOrderResponse>

```

#### **put**

It is possible to change ("SUPP" in LNP terms) an existing LNP order.  This is done via a PUT on the existing order-id.
Since many of the entries in an LNP Order cannot be changed after the initial order is placed the PUT on a porting order-id does *not* require that the full order payload is included.<br/>
If SUPP is done to <strong>draft</strong> portin no validations will be applied except validation of tn list if at least 1 tn is provided.
Items that can be included in a SUPP request include:
<ul>
<li>CustomerOrderId</li>
<li>RequestedFocDate</li>
<li>BillingTelephoneNumber</li>
<li>NewBillingTelephoneNumber</li>
<li>AccountNumber</li>
<li>PinNumber</li>
<li>TnAttributes elements</li>
<li>Subscriber elements, including the subscriber type, the name elements, and the street address elements.  See the discussion below on ResetAddressFields</li>
<li>SiteId</li>
<li>PeerId</li>
<li>PartialPort, and</li>
<li>LoaAuthorizingPerson</li>
<li>ListOfPhoneNumbers</li>
<li>Triggered</li>
<li>Immediately</li>
</ul>
Note: If the order ProcessingStatus is DRAFT, the rules about what can be changed are much more relaxed. Validation is performed when the ProcessingStatus is changed from DRAFT to SUBMITTED.
<p>The AltSpid element can be modified if it is not configured at the system level.
<p>List of phone numbers can not be modified if order status was/is in FOC or complete state. Doesn't apply for internal port type.
<p><b>ProcessingStatus</b> - you can only provide this field with a value of SUBMITTED and only if the current ProcessingStatus of the port-in is DRAFT.
<p><b>ResetAddressFields -</b> As stated above the general approach to handling <i>this</i> API call is to replace the elements included in the request body, and leave other preexisting elements in an unmodified condition.  This is typical of a PATCH method, but because of our commitment to backwards compatibility we have elected not to "Fix" this behavior.
As a result, providing only a few fields in the street address will result in an update to just those fields. This prevents removal of an element of the address.  The ResetAddressFields element is provided to resolve this issue.  The default setting of 'false' is to consistency with the initial implementation.
The recommendation is to replace the entire street address.  This ensures that you are enforcing the street address content of the port-in order.  As part of this recommendation the ResetAddressFields element should be set to true, which will force the street address to be exactly what you specified in the payload.
<br> <br> When a port-in is being processed by off-net partner Level 3 (you can tell this because /lnpchecker indicates a Port Type of AUTOMATEDOFFNET), the rules for what can be changed in a SUPP operation are more restrictive. If the order has NOT yet received FOC, you may change the following:
<ul>
  <li>RequestedFocDate</li>
  <li>BillingTelephoneNumber</li>
  <li>SubscriberType</li>
  <li>Subscriber name elements or BusinessName, provided that SubscriberType is provided</li>
</ul>
After FOC has been received, only RequestedFocDate may be changed.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LnpOrderSupp>
    <CustomerOrderId>SJM00002</CustomerOrderId>
    <RequestedFocDate>2014-12-04T13:00:00.000Z</RequestedFocDate>
    <BillingTelephoneNumber>8045030092</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <WirelessInfo>
        <AccountNumber>23453245</AccountNumber>
        <PinNumber>1111</PinNumber>
    </WirelessInfo>
    <TnAttributes>
        <TnAttribute>Protected</TnAttribute>
        <TnAttribute>External</TnAttribute>
        <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <Subscriber>
        <SubscriberType>RESIDENTIAL</SubscriberType>
        <FirstName>Steve</FirstName>
        <LastName>McKinnon</LastName>
        <ServiceAddress>
            <!-- If true will overwrite all address fields,
             those which should be required remain required.
             Affect only supp. Default false. -->
            <ResetAddressFields>true</ResetAddressFields>
            <HouseNumber>115</HouseNumber>
            <StreetName>Monarch Way</StreetName>
            <City>Cary</City>
            <StateCode>NC</StateCode>
            <Zip>27518</Zip>
        </ServiceAddress>
    </Subscriber>
    <SiteId>743</SiteId>
    <PartialPort>true</PartialPort>
    <ListOfPhoneNumbers>
        <PhoneNumber>2019721004</PhoneNumber>
        <PhoneNumber>2019721005</PhoneNumber>
    </ListOfPhoneNumbers>
    <LoaAuthorizingPerson>Steve McKinnon</LoaAuthorizingPerson>
    <AlternateSpid>Foo</AlternateSpid>
</LnpOrderSupp>

```

##### Response

**200**

```xml
<LnpOrderResponse>
    <OrderId>b6080e4c-7ddf-4faa-bbd8-328a72de9297</OrderId>
    <Status>
        <Code>200</Code>
        <Description>Supp request received. Please use the order id to check the status of your order later.</Description>
    </Status>
    <ProcessingStatus>REQUESTED_SUPP</ProcessingStatus>
    <RequestedFocDate>2014-12-04T13:00:00Z</RequestedFocDate>
    <BillingTelephoneNumber>8045030092</BillingTelephoneNumber>
    <NewBillingTelephoneNumber>9175131245</NewBillingTelephoneNumber>
    <Triggered>false</Triggered>
</LnpOrderResponse>

```

**400**

```xml
<LnpOrderResponse>
    <OrderId>c58fed09-a3fc-49b8-b461-2286146b73c1</OrderId>
    <Status>
        <Code>400</Code>
        <Description>Validation Failed. Please check your input parameters.</Description>
    </Status>
    <Errors>
        <Code>7331</Code>
        <Description>Rate Center Not Present in Bandwidth Dashboard</Description>
        <TelephoneNumbers>
            <Tn>7138391156</Tn>
        </TelephoneNumbers>
    </Errors>
    <Errors>
        <Code>7495</Code>
        <Description>Unable to change the TNs on this port. Please ensure that the new TNs are from the same losing carrier as the current TNs.</Description>
        <TelephoneNumbers>
            <Tn>2024551000</Tn>
            <Tn>2018391156</Tn>
            <Tn>2018391157</Tn>
        </TelephoneNumbers>
    </Errors>
    <ProcessingStatus>EXCEPTION</ProcessingStatus>
    <BillingTelephoneNumber>4352154438</BillingTelephoneNumber>
</LnpOrderResponse>

```

#### **delete**

If portin is in DRAFT state the order will be deleted. Otherwise the call simply places the existing order in a cancelled state.
Note that only a pending port-in order can be cancelled; if the order was previously cancelled or completed, then a DELETE will not be possible.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

**400**

```xml
<LnpOrderResponse>
    <OrderId>2ffd0af4-7c54-40dc-9bfe-40f08b57e63a</OrderId>
    <Status>
        <Code>400</Code>
        <Description>Validation Failed. Please check your input parameters.</Description>
    </Status>
    <Errors>
        <Code>7304</Code>
        <Description>The order is already complete and cannot be modified or cancelled</Description>
    </Errors>
    <ProcessingStatus>EXCEPTION</ProcessingStatus>
</LnpOrderResponse>

```

### /accounts/{accountId}/portins/{orderid}/notes {#notes}
The /notes resource manages a note or set of notes associated with an order.

#### **post**

Updates the Notes resource by adding a note. Adding a note to a port-in order causes a notification to be sent to Bandwidth Operations, so that they may assist as necessary.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8"?> <Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**201**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

#### **get**

Retrieve the set of notes associated with an order.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>87037</Id>
        <UserId>jbm</UserId>
        <Description>This is a test note</Description>
        <LastDateModifier>2014-11-16T04:01:10.000Z</LastDateModifier>
    </Note>
    <Note>
        <Id>87039</Id>
        <UserId>smckinnon</UserId>
        <Description>This is a second test note</Description>
        <LastDateModifier>2014-11-16T04:08:46.000Z</LastDateModifier>
    </Note>
</Notes>

```

**204**

### /accounts/{accountId}/portins/{orderid}/notes/{noteId} {#noteId}
Resource manages a note.

#### **put**

Updates single note by it's id.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| noteId | string | true |

###### Body

**application/xml**

```xml
<Note> <UserId>userId</UserId> <Description>note text</Description> </Note>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NoteResponse>
    <ResponseStatus>
        <ErrorCode>12501</ErrorCode>
        <Description>Username is required</Description>
    </ResponseStatus>
</NoteResponse>

```

### /accounts/{accountId}/portins/{orderid}/history {#history}
This resource retrieves the history of a port-in order. Obtaining history for a draft port-in is not supported.

#### **get**

Retrieves the history of the specified port-in order. Obtaining history for a draft port-in is not supported.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>2014-07-29T17:12:29.495Z</OrderDate>
        <Note>LOA required</Note>
        <Author>jbm</Author>
        <Status>PENDING_DOCUMENTS</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-07-29T17:12:32.121Z</OrderDate>
        <Note>Order has been created</Note>
        <Author>System</Author>
        <Status>SUBMITTED</Status>
        <Difference>LoaDate : "" --&gt; Tue Jul 29 17:12:29 UTC 2014</Difference>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-07-29T17:15:31.241Z</OrderDate>
        <Note>7999: E37 TN not found in PPS (PPS)</Note>
        <Author>System</Author>
        <Status>EXCEPTION</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-07-29T17:15:40.836Z</OrderDate>
        <Note>Order waiting for activation</Note>
        <Author>System</Author>
        <Status>FOC</Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>2014-07-29T17:16:20.347Z</OrderDate>
        <Note>Order is complete</Note>
        <Author>System</Author>
        <Status>COMPLETE</Status>
    </OrderHistory>
</OrderHistoryWrapper>
<!--The following response will be returned when the port-in is in DRAFT state-->
<OrderHistoryWrapper>
    <IrisStatus>
        <Code>7710</Code>
        <Description>History is not supported for bulk port-ins or individual port-ins in draft status.</Description>
    </IrisStatus>
</OrderHistoryWrapper>

```

**404**

### /accounts/{accountId}/portins/{orderid}/activationStatus {#activationStatus}

#### **get**

Retrieve the status (activated or not activated) of TNs associated with the customer activated (triggered) order. <br><br>
At this time all phone numbers associated with a PON will be activated at the same time.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ActivationStatus>
        <AutoActivationDate>2014-08-29T18:30:00+03:00</AutoActivationDate>
        <ActivatedTelephoneNumbersList>
            <TelephoneNumber>6052609021</TelephoneNumber>
        </ActivatedTelephoneNumbersList>
        <NotYetActivatedTelephoneNumbersList/>
    </ActivationStatus>
</ActivationStatusResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ResponseStatus>
        <ErrorCode>7342</ErrorCode>
        <Description>On demand port-in activation not yet allowed.</Description>
    </ResponseStatus>
</ActivationStatusResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ActivationStatusResponse> <ResponseStatus> <ErrorCode>7348</ErrorCode> <Description>The order is already complete</Description> </ResponseStatus> </ActivationStatusResponse>
```

#### **put**

Sets the activation time for the port-in order.  <br> <br>
This API call is used to set the Activation time of the customer activated (triggered) port.
<ul>
<li>If the time is in the past all of the TNs in the port-in request will be activated 'immediately'.</li>
<li>For automated on-net port-ins, if the time is within three days after the approved FoC date, the auto-activation time for the port will be set to that time.</li>
<li>For automated off-net port-ins, if the date matches the actual FOC date and the time is between 6:00 AM ET and 10:00 PM ET, the auto-activation time for the port will be set to that time.</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatus>
    <AutoActivationDate>2014-08-30T18:30:00+03:00</AutoActivationDate>
</ActivationStatus>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ActivationStatus>
        <AutoActivationDate>2014-08-30T18:30:00+03:00</AutoActivationDate>
    </ActivationStatus>
</ActivationStatusResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ResponseStatus>
        <ErrorCode>7342</ErrorCode>
        <Description>On demand port-in activation not yet allowed.</Description>
    </ResponseStatus>
</ActivationStatusResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ResponseStatus>
        <ErrorCode>7348</ErrorCode>
        <Description>The order is already complete</Description>
    </ResponseStatus>
</ActivationStatusResponse>

```

### /accounts/{accountId}/portins/{orderid}/loas {#loas}
The LOAS resource allows the uploading and storage of files that are associated with orders.   It use the standard form-data approach for http file upload.  Details of the POST API call that drives the file upload are provided below.
    <br>
The following MIME types are supported for the LOA upload file:<br>
<ul>
<li>PDF("application/pdf")</li>
<li>PLAIN("text/plain")</li>
<li>JPG("image/jpeg")</li>
<li>TIFF("image/tiff")</li>
<li>CSV("text/csv")</li>
<li>XML("application/xml")</li>
<li>WAV("audio/x-wav")</li>
<li>ZIP("application/zip")</li>
</ul>
<br>
The file upload is equivalent of the use of CURL to upload a file...<br>
    <br>
<code> curl -H 'Content-Type: {MIME Type}' --data-binary "@{Filename}" –iv {Base URL}/[portins | bulkPortins | importtnorders]/{order-id}/loas<br>
</code>
    <br>
an example for the upload of a pdf file is...<br>
    <br>
<code> curl -H 'Content-Type: application/pdf' --data-binary "@Test_LOA.pdf" -iv {BASE URL}/portins/{order-id}/loas<br>
</code>

#### **get**

Retrieves the list of the loa (and other) files associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<fileListResponse>
    <fileCount>2</fileCount>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1092874634747.pdf</fileNames>
    <fileNames>803f3cc5-beae-469e-bd65-e9891ccdffb9-1430814967669.pdf</fileNames>
    <resultCode>0</resultCode>
    <resultMessage>LOA file list successfully returned</resultMessage>
</fileListResponse>
<!-- OR --, for the case where there are no files... -->
<fileListResponse>
    <fileCount>0</fileCount>
    <resultCode>0</resultCode>
    <resultMessage>No LOA files found for order</resultMessage>
</fileListResponse>

```

#### **post**

POSTing to the /loas resource will enable the upload of the file.  The key attribute to the POST is ensuring that the headers are correctly set to support the file upload.<br>
    <br>
Header settings typical of a valid upload are...<br>
    <br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

### /accounts/{accountId}/portins/{orderid}/loas/{fileid} {#fileid}
A GET on the loas file resource will cause the downloading of the file in a manner consistent with typical browser file downloads.

#### **get**

Retrieves the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

#### **put**

A PUT on the filename will update / replace the identified file id.  The format of the PUT is identical to that of the POST.<br>
Header settings typical of a valid upload are...<br>
<code>
Host: api.inetwork.com <br>
Authorization: Basic xxxxxxxxxxxxxxxxxxxx== <br>
Content-Type: application/pdf <br>
Accept: */* <br>
Accept-Encoding: gzip, deflate <br>
Accept-Language: en-US,en;q=0.8 <br>
Cache-Control: no-cache <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
Content-Disposition: form-data; name="george"; filename="Bandwidth Dashboard.pdf" <br>
Content-Type: application/pdf <br>
    <br>
    <br>
----WebKitFormBoundaryE19zNvXGzXaLvS5C <br>
</code>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>

```

**400**

**404**

#### **delete**

Deletes the file associated with the order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/portins/{orderid}/loas/{fileid}/metadata {#metadata}
It is often useful to attach additional data to an order in the form of an attached file, and so the existing LOA capability has been extended to optionally allow different file information to be included with a file, to describe type and purpose information.  The MetaData associated with a file includes a file document name and a document type, which is one of [LOA | INVOICE | CSR | OTHER].<br>
Naming of the existing "loas" API has been preserved to ensure backwards compatibility.

#### **get**

Retrieves the metadata associated with the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

**404**

#### **put**

Associate metadata with the file named in the resource path.  This will describe the file, and declare the data that is contained in the file, selected from a list of [LOA | INVOICE | CSR | OTHER].

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

###### Body

**application/xml**

```xml
<FileMetaData>
   <DocumentName> [string] </DocumentName>
   <DocumentType> [LOA | INVOICE | CSR | OTHER] </DocumentType>
</FileMetaData>

```

##### Response

**200**

**400**

#### **delete**

Deletes the metadata previously associated with the identified file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |
| fileid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/portins/{orderid}/areaCodes {#areaCodes}
Retrieves a list of all area codes of the telephone numbers associated with the specified port-in number.

#### **get**

Retrieves a list of area codes associated with the specified port-in number and displays them in the payload.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <AreaCode>919</AreaCode>
        <Count>1</Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>

```

### /accounts/{accountId}/portins/{orderid}/npaNxx {#npaNxx}
Retrieves a list of all Npa-Nxx of the telephone numbers associated with the specified port-in number.

#### **get**

Retrieves a list of Npa-Nxx associated with the specified port-in number and displays them in the payload.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <NPA-NXX>919280</NPA-NXX>
        <Count>1</Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>

```

### /accounts/{accountId}/portins/{orderid}/tns {#tns}
Retrieves a list of all telephone numbers associated with the specified port-in number.

#### **get**

Retrieves a list of telephone numbers associated with the specified port-in number and displays them in the payload.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneNumbers>
    <Count>1</Count>
    <TelephoneNumber>9192809870</TelephoneNumber>
</TelephoneNumbers>

```

### /accounts/{accountId}/portins/{orderid}/totals {#totals}
Retrieves a total count of telephone numbers associated with the specified port-in number.

#### **get**

Retrieves a total count of telephone numbers associated with the specified port-in number and displays them in the payload.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<Quantity>
    <Count>1</Count>
</Quantity>

```

### /accounts/{accountId}/portins/totals {#totals}
This resource interacts with the total number of port-ins associated with an account.

#### **get**

Retrieves the total count of port-ins.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<Quantity>
    <Count>1</Count>
</Quantity>

```

### /accounts/{accountId}/portouts {#portouts}
This resource deals with the port-out requests of the account ID; this resource can retrieve a port-out request
.

#### **get**

Retrieves a list of port-out requests for the given account ID. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<LNPResponseWrapper>
    <TotalCount>3</TotalCount>
    <Links />
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>0</CountOfTNs>
        <userId>System</userId>
        <OrderId>4299b1ad-aa08-433e-a316-f9219b3450d2</OrderId>
        <OrderType>port_out</OrderType>
        <lastModifiedDate>2014-07-31T16:34:37.530Z</lastModifiedDate>
        <ErrorCode>201</ErrorCode>
        <ErrorMessage>Order request received. Please use the order id to check the status of your order later.</ErrorMessage>
        <OrderDate>2014-07-31T16:34:37.480Z</OrderDate>
        <ProcessingStatus>NEW</ProcessingStatus>
        <RequestedFOCDate>2014-08-02T12:34:37.000Z</RequestedFOCDate>
        <VendorId>512E</VendorId>
    </lnpPortInfoForGivenStatus>
</LNPResponseWrapper>

```

### /accounts/{accountId}/portouts/{orderid} {#orderid}
This resource retrieves information associated with the port-out ID number specified.

#### **get**

Retrieves the information associated with the specified port-out ID number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<LnpOrderResponse>
    <RequestedFocDate>2014-08-02T12:34:37Z</RequestedFocDate>
    <ActualFocDate>2014-08-02T12:34:37Z</ActualFocDate>
    <PON>8a89dea8-a145-4796-8e73-0d859fc74cad</PON>
    <AccountId>20</AccountId>
    <OrderCreateDate>2014-07-31T16:34:37.480Z</OrderCreateDate>
    <LastModifiedDate>2014-07-31T16:34:37.530Z</LastModifiedDate>
    <userId>System</userId>
    <PortOutStatus>NEW</PortOutStatus>
    <SPID>512E</SPID>
</LnpOrderResponse>

```

### /accounts/{accountId}/products {#products}

#### **get**

discover what is currently enabled on the account

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
<AccountProductsResponse>
    <Products>
        <Product>
            <Name>Termination</Name>
            <Features>
                <Feature>TermHttpVoice</Feature>
            </Features>
        </Product>
        <Product>
            <Name>VirtualInventory</Name>
        </Product>
        <Product>
            <Name>TollFree</Name>
        </Product>
        <Product>
            <Name>Origination</Name>
            <Features>
                <Feature>CallForwarding</Feature>
                <Feature>DlDa</Feature>
                <Feature>CNAM</Feature>
                <Feature>OrigHttpVoice</Feature>
            </Features>
        </Product>
        <Product>
            <Name>MESSAGING</Name>
            <Features>
              <Feature>SMS</Feature>
              <Feature>MMS</Feature>
              <Feature>HTTP</Feature>
              <Feature>HTTPV2</Feature>
              <Feature>TollFree</Feature>
            </Features>
        </Product>
        <Product>
            <Name>NumberManagement</Name>
            <Features>
              <Feature>ORDERING</Feature>
              <Feature>LNP</Feature>
              <Feature>EXTERNAL_TNS</Feature>
              <Feature>PROTECTED_TNS</Feature>
              <Feature>TN_ASSIGNMENT</Feature>
              <Feature>RESERVATION</Feature>
              <Feature>LSR</Feature>
            </Features>
        </Product>
    </Products>
</AccountProductsResponse>

```

### /accounts/{accountId}/removeImportedTnOrders {#removeImportedTnOrders}
The removeImportedTnOrders endpoint is used to manage requests to remove an imported number into the Bandwidth Dashboard API.  The removeImportedTnOrders endpoint causes the creation of an <b>order</b> that is used to manage the remove imported tn event throughout the lifecycle of the request.

#### **get**

Retrieves the removeImportedTnOrders requests for the given account ID. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <RemoveImportedTnOrders> <TotalCount>2</TotalCount> <RemoveImportedTnOrderSummary> <accountId>14</accountId> <CountOfTNs>1</CountOfTNs> <CustomerOrderId>DemoOrder</CustomerOrderId> <userId>systemUser</userId> <lastModifiedDate>2019-01-24T10:40:12.908Z</lastModifiedDate> <OrderDate>2019-01-24T10:40:12.907Z</OrderDate> <OrderType>remove_imported_tn_orders</OrderType> <OrderStatus>COMPLETE</OrderStatus> <OrderId>4f2d090b-ece7-49ab-9c40-06d1425c39c3</OrderId> </RemoveImportedTnOrderSummary> <RemoveImportedTnOrderSummary> <accountId>14</accountId> <CountOfTNs>1</CountOfTNs> <CustomerOrderId>DemoOrder</CustomerOrderId> <userId>systemUser</userId> <lastModifiedDate>2019-01-24T09:38:24.028Z</lastModifiedDate> <OrderDate>2019-01-24T09:38:24.028Z</OrderDate> <OrderType>remove_imported_tn_orders</OrderType> <OrderStatus>PARTIAL</OrderStatus> <OrderId>ca30ea6a-018a-4cae-9d49-3d419fefdbe3</OrderId> </RemoveImportedTnOrderSummary> </RemoveImportedTnOrders>
```

#### **post**

Creates a removeImportedTnOrders request to remove imported telephone numbers from the given site ID and sippeer ID as specified in the body. A successfully submitted order will have a status of "PROCESSING". A successfully completed order will have a status of "COMPLETE" if all of the telephone numbers were successfully removed and  "PARTIAL" if some of the telephone numbers were removed. A failed order with will have a staus of "FAILED" and no telephone numbers would have been removed.
The elements supplied in the payloads are described in the following table:
<table border="1" cellspacing="0" cellpadding="0" width="624">
    <tbody>
        <tr>
            <td valign="top">
                <p>
                    <strong>Parameter</strong>
                </p>
            </td>
            <td valign="top">
                <p>
                    <strong>Required</strong>
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    <strong>Description</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    accountId (URL Parameter)
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    The account ID for porting the numbers.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CustomerOrderId
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Internal customer order id for tracking the order.  Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    TelephoneNumber
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    Yes
                </p>
            </td>
            <td width="351" valign="top">
                <p>
                    Ten digit phone number with no dots or dashes. One or more is required. Use a PhoneNumber tag for each phone number in the list.
                </p>
            </td>
        </tr>
    </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<RemoveImportedTnOrder>
    <CustomerOrderId>ICPA123ABC</CustomerOrderId>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</RemoveImportedTnOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <RemoveImportedTnOrderResponse> <RemoveImportedTnOrder> <CustomerOrderId>SJM000001</CustomerOrderId> <OrderCreateDate>2018-01-20T02:59:54.000Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>smckinnon</CreatedByUser> <OrderId>b05de7e6-0cab-4c83-81bb-9379cba8efd0</OrderId> <LastModifiedDate>2018-01-20T02:59:54.000Z</LastModifiedDate> <TelephoneNumbers> <TelephoneNumber>9199918388</TelephoneNumber> <TelephoneNumber>4158714245</TelephoneNumber> <TelephoneNumber>4352154439</TelephoneNumber> <TelephoneNumber>4352154466</TelephoneNumber> </TelephoneNumbers> <ProcessingStatus>PROCESSING</ProcessingStatus> <Errors/> </RemoveImportedTnOrder> </RemoveImportedTnOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <RemoveImportedTnOrderResponse> <ProcessingStatus>FAILED</ProcessingStatus> <Errors> <Code>1234</Code> <Description>The customer order id is invalid.</Description> </Errors> </RemoveImportedTnOrderResponse>
```

### /accounts/{accountId}/removeImportedTnOrders/{orderid} {#orderid}
This API returns data about the specific removeImportedTnOrder id specified as the resource

#### **get**

Retrieve information about a removeImportedTnOrder with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <RemoveImportedTnOrder> <OrderCreateDate>2018-01-09T02:58:04.615Z</OrderCreateDate> <AccountId>9900012</AccountId> <CreatedByUser>sjm</CreatedByUser> <OrderId>bf1305b8-8998-1111-2222-51ba3ce52d4e</OrderId> <LastModifiedDate>2018-01-09T02:58:05.298Z</LastModifiedDate> <TelephoneNumbers> <TelephoneNumber>2106078250</TelephoneNumber> <TelephoneNumber>2109678273</TelephoneNumber> <TelephoneNumber>2109678331</TelephoneNumber> <TelephoneNumber>2109678337</TelephoneNumber> <TelephoneNumber>2266401468</TelephoneNumber> </TelephoneNumbers> <ProcessingStatus>PARTIAL</ProcessingStatus> <Errors> <Error> <Code>7518</Code> <Description>Telephone Number Not Active.</Description> <TelephoneNumbers> <TelephoneNumber>2262665583</TelephoneNumber> </TelephoneNumbers> </Error> </Errors> </RemoveImportedTnOrder>
```

### /accounts/{accountId}/removeImportedTnOrders/{orderid}/history {#history}
This resource retrieves the history of a removeImportedTnOrder.

#### **get**

Retrieves the history of the specified removeImportedTnOrder.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <OrderHistoryWrapper> <OrderHistory> <OrderDate>2015-06-16T14:03:10.225Z</OrderDate> <Note>Remove Imported TN order is received.</Note> <Author>admin</Author> <Status>RECEIVED</Status> </OrderHistory> <OrderHistory> <OrderDate>2015-06-16T14:03:10.330Z</OrderDate> <Note>Remove Imported TN order is processing.</Note> <Author>admin</Author> <Status>PROCESSING</Status> </OrderHistory> <OrderHistory> <OrderDate>2015-06-16T14:03:10.789Z</OrderDate> <Note>Remove Imported TN order is partial.</Note> <Author>admin</Author> <Status>PARTIAL</Status> </OrderHistory> </OrderHistoryWrapper>
```

### /accounts/{accountId}/reports {#reports}
Bandwidth provides a reporting infrastructure that will allow the creation
of pre-defined reports, and the subsequent API-based exposure of those
reports to our customers to assist them in management of their
business.<br>
<br>
The reports exposed via the reporting API are defined by the Bandwidth
staff, and will grow and adapt over time to meet our customers changing
needs. The basic structure of the resources in the reporting API reflects
three levels of information:
<ol>
    <li>Reports: pre-defined templates for information that include:
        <ul>
            <li>a name</li>
            <li>a description of the report in general terms</li>
            <li>a set of parameters that are used to provide boundaries on
            the information that is provided. &nbsp;These parameters
            contain</li>
            <li style="list-style: none; display: inline">
                <ul>
                    <li>The parameter name,</li>
                    <li>a&nbsp;description of the parameter,</li>
                    <li>a declaration of whether it is required or not,
                    and&nbsp;</li>
                    <li>the type of the parameter.</li>
                    <li>a declaration of whether multi-selection is allowed or not.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Instances: the result of executing a report - a parameterized set
    of data that results from the creation of a report with a set of
    parameters.
        <ul>
            <li>They reflect the meta-data associated with actually
            creating a report from a set of data. &nbsp;The instance is
            used in managing the actual &nbsp;report that is made available
            for download.</li>
            <li>Instances contain:</li>
            <li style="list-style: none; display: inline">
                <ul>
                    <li>An ID</li>
                    <li>The ID of the Report that was used to generate the
                    Instance</li>
                    <li>An output format (currently PDF, XLS, or CSV)</li>
                    <li>Data about the user that requested the report.</li>
                    <li>A list of parameter values that was used to create
                    the report</li>
                    <li>An expiration date of the report.</li>
                    <li>A status, indicating whether the report data is
                    still being assembled, ready for download, or
                    expired.</li>
                </ul>
            </li>
            <li>Instances are specific to a report.</li>
        </ul>
    </li>
    <li>Files: the actual data associated with a Report Instance.
        <ul>
            <li>Files are the items that are actually retrieved from the
            server and delivered to the user on demand. &nbsp;The file is a
            logical resource that reflects the downloadable data that is
            described by the Instance</li>
        </ul>
    </li>
</ol>
The report resource of the API allow the management of reports in the Bandwidth Dashboard API.

#### **get**

GET Retrieves a list of the report templates available for use within the Bandwidth Dashboard API. This list contains the basic description of the reports, including a report ID that can be used to access further details about the report, and thus facilitating the subsequent choice and creation of an instance of the report. Items of this list are sorted by display priority in ascending order and alphabetically by name within priority groups (display priority is displayed only for admin endpoint).

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportsResponse>
    <Reports>
        <Report>
            <Name>Sample Report 1</Name>
            <Id>100020</Id>
            <Description>Sample Report 1 Description</Description>
        </Report>
        <Report>
            <Name>Sample Report 2</Name>
            <Id>100021</Id>
            <Description>Sample Report 2 Description</Description>
        </Report>
        <Report>
            <Name>Sample Report 3</Name>
            <Id>100022</Id>
            <Description>Sample Report 3 Description</Description>
        </Report>
    </Reports>
</ReportsResponse>

```

### /accounts/{accountId}/reports/{reportid} {#reportid}

#### **get**

A GET issued on a specific report (as identified by it's ID) will return all of the details of that report, allowing the API user to create an instance of that report.  Those details include:
    <ul>
        <li>The report name</li>
        <li>a description of the report in general terms</li>
        <li>a set of parameters that are used to provide boundaries on the information that is provided. &nbsp;These parameters contain</li>
        <ul>
            <li>The parameter name,</li>
            <li>a&nbsp;description of the parameter,</li>
            <li>a declaration of whether it is required or not, </li>
            <li>is multiple vales allowed or not, </li>
            <li>the type of the parameter, which can be one of</li>
                <ul>
                    <li>Account ID (autofilled)</li>
                    <li>Site ID</li>
                    <li>SipPeer ID</li>
                    <li>String</li>
                    <li>Integer</li>
                    <li>Boolean</li>
                    <li>Enum, with a list of possible values.</li>
                </ul>
            <li>the help info for describing parameter</li>
            </ul>
        </ul>
    </ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportResponse>
    <Report>
        <Id>123</Id>
        <Name>Sample Report 1</Name>
        <Parameters>
            <Parameter>
                <Name>Report Parameter 1</Name>
                <Type>String</Type>
                <Required>true</Required>
                <Description>Report Parameter 1 Description</Description>
                <MultiSelectAllowed>false</MultiSelectAllowed>
                <HelpInformation>Report Parameter 1 Help Text</HelpInformation>
            </Parameter>
            <Parameter>
                <Name>Report Parameter 2</Name>
                <Type>Enum</Type>
                <Required>false</Required>
                <!--Contains a semicolon separated list of InternalNames-->
                <ValueFilter>Value1;Value2;Value3</ValueFilter>
                <Values>
                    <Value>
                        <!--A InternalName tag value should be used in report instance creation-->
                        <InternalName>Value1</InternalName>
                        <!--A DisplayName tag value is used only for UI purposes-->
                        <DisplayName>Display Value2</DisplayName>
                    </Value>
                    <Value>
                        <InternalName>Value2</InternalName>
                        <DisplayName>Value2</DisplayName>
                    </Value>
                    <Value>
                        <InternalName>Value3</InternalName>
                        <DisplayName>Display Value3</DisplayName>
                    </Value>
                </Values>
                <Description>Report Parameter 2 Description</Description>
                <MultiSelectAllowed>true</MultiSelectAllowed>
                <HelpInformation>Report Parameter 2 Help Text</HelpInformation>
            </Parameter>
        </Parameters>
    </Report>
</ReportsResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <ReportResponse> <ResponseStatus> <ErrorCode>19000</ErrorCode> <Description>No report found with report ID of '123'</Description> </ResponseStatus> </ReportResponse>
```

### /accounts/{accountId}/reports/{reportid}/instances {#instances}
The report instance endpoints of the Bandwidth Dashboard API allow users to view and manage report instances for a specific report.
Report instances capture invocations of a report, including the specific set of parameters provided and any output
generated as a result.

#### **get**

Retrieve report instances associated with a specific report, including the up-to-date report generation status.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstancesResponse>
    <Instances>
        <Instance>
            <Id>100090</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>pdf</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-18 14:03:04</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Expired</Status>
        </Instance>
        <Instance>
            <Id>100098</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>html</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-19 09:18:40</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
                <Parameter>
                    <Name>SiteId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Expired</Status>
        </Instance>
        <Instance>
            <Id>100102</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>pdf</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-19 11:05:12</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Ready</Status>
            <ExpiresAt>2015-06-15</ExpiresAt>
        </Instance>
    </Instances>
</ReportInstancesResponse>

```

#### **post**

POSTing to the instances resource of a specific report will create an instance of that report that pulls from data that is filtered by the supplied parameters.  Those parameter values must match the parameters that are required as defined by the report, as provided by issuing a GET on the report. <br><br>
The sequence of events is essentially to...
<ol>
    <li>issue a GET on the desired report/report-id to retrieve the parameter and other details of the report</li>
    <li>issue a POST on the /report/report-id/instances resource, using the parameter information retrieved in the initial call to define the data that is needed</li>
</ol>
The Location header will provide a link to the created report instance.  Note that the report instance itself contains only the metadata describing the instance.  A subsequent call to /report/report-id/instances/instance-id/file must be made to actually download the file.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |

###### Body

**application/xml**

```xml
<Instance>
    <OutputFormat>pdf</OutputFormat>
    <Parameters>
        <Parameter>
            <Name>Account</Name>
            <Value>1</Value>
        </Parameter>
        <Parameter>
            <Name>Sub-account</Name>
            <Value>1</Value>
        </Parameter>
        <Parameter>
            <Name>MultiValueEnum</Name>
            <Value>value1</Value>
            <Value>value2</Value>
        </Parameter>
    </Parameters>
    <ExpiresAt>2016-11-25</ExpiresAt>  <!-- the date (not longer than 30 days in the future) at the end of which the instance will expire, should be specified in YYYY-MM-DD format-->
</Instance>

```

##### Response

**201**

```xml
None
```

**400**

```xml
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>19032</ErrorCode>
        <Description>Missing one or more required report parameters: AccountId</Description>
    </ResponseStatus>
</ReportInstanceResponse>

```

**503**

```xml
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>19031</ErrorCode>
        <Description>Error encountered processing request via external reporting service.  Please contact Bandwidth support for further assistance.</Description>
    </ResponseStatus>
</ReportInstanceResponse>

```

### /accounts/{accountId}/reports/{reportid}/instances/{instanceId} {#instanceId}
Retrieve information on a specific instance of a specific report.

#### **get**

A GET on the specific instance will retrieve report instance details, including the current report instance status.  All of the information required to understand the nature and limits of the reported data are contained in the payload, including the general description information as well as the list of parameters and the values assigned to those parameters.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |
| instanceId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstanceResponse>
        <Instance>
            <Id>100102</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>pdf</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-19 11:05:12</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Ready</Status>
            <ExpiresAt>2016-06-15</ExpiresAt>
        </Instance>
</ReportInstanceResponse>

```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>19019</ErrorCode>
        <Description>No report instance found for report 100020 with Id of '100103'</Description>
    </ResponseStatus>
</ReportInstanceResponse>

```

### /accounts/{accountId}/reports/{reportid}/instances/{instanceId}/file {#file}
The file resource reflects the actual downloadable information described by the Instance metadata.  Invoking an API call on the file resource will result in a download of the file containing the information, as long as the file is finished preparation and ready for download.

#### **get**

Retrieve report instance output file, if output is available.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reportid | string | true |
| instanceId | string | true |

##### Response

**200**

**202**

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ReportInstanceFileResponse>
    <ResponseStatus>
        <ErrorCode>19048</ErrorCode>
        <Description>
            Report generation in progress; Output not yet available
        </Description>
    </ResponseStatus>
</ReportInstanceFileResponse>

```

**404**

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ReportInstanceFileResponse>
    <ResponseStatus>
        <ErrorCode>19019</ErrorCode>
        <Description>
            No report instance found for report 123 with Id of '456'
        </Description>
    </ResponseStatus>
</ReportInstanceFileResponse>

```

### /accounts/{accountId}/reports/instances {#instances}
The report instance endpoints of the Bandwidth Dashboard API allow users to view and manage report instances for a specific
account.  Report instances capture invocations of a report, including the specific set of parameters provided and
any output generated as a result.

#### **get**

Retrieve report instances within the account scope, regardless of the report of which the instance is an instance of, including the up-to-date report generation status.  This is a convenience API call to make it easier to examine all Instances in scope.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstancesResponse>
    <Instances>
        <Instance>
            <Id>100090</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>pdf</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-18 14:03:04</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Expired</Status>
        </Instance>
        <Instance>
            <Id>100098</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>html</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-19 09:18:40</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
                <Parameter>
                    <Name>SiteId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Expired</Status>
        </Instance>
        <Instance>
            <Id>100102</Id>
            <ReportId>100020</ReportId>
            <ReportName>Sample Report</ReportName>
            <OutputFormat>pdf</OutputFormat>
            <RequestedByUserName>jbm</RequestedByUserName>
            <RequestedAt>2015-05-19 11:05:12</RequestedAt>
            <Parameters>
                <Parameter>
                    <Name>AccountId</Name>
                    <Value>1</Value>
                </Parameter>
            </Parameters>
            <Status>Ready</Status>
            <ExpiresAt>2016-06-15</ExpiresAt>
        </Instance>
    </Instances>
</ReportInstancesResponse>

```

### /accounts/{accountId}/sipcredentials {#sipcredentials}
This resource is used to manage SIP credentials for subscriber provisioning.
SIP Credentials allow for the Authentication of SIP Messages presented to the Bandwidth Network.  These values are provisioned to the Network to allow the endpoints to participate in an Authentication Challenge (RFC 3261).  These values are compared (after processing) with a value received in the Authorization header of the SIP INVITE to determine whether the call will be allowed to proceed.
The user is authenticated for access to the network using a composite-username, which is either a username string or a combination of a username and a domain separated with an '@'.  The other components of the authentication are MD5 hash values that are hashes of the composite username, the password, and either one or two instances of the Realm, to allow the network to recognize the two prevelent mechanisms for generating MD5 hashes.
There are 4 components to the SIP Credentials payload...
<ol>
<li>The UserName (required) - a string identifying the user.</li>
<li>The Domain (optional) - a string refining the identity of the user.  The Domain will be joined to the UserName with an '@' to create a composite username.  For example, the UserName 'bob' could be combined with the domain 'somewhere.com' to create a composite username 'bob@somewhere.com' </li>
<li>Hash1 (required) - a string representing a potential Hash values used to authenticate the client.  It is expected that the value will be computed from an MD5 Hash of 'composite-username:Realm:Password'.  The makeup of this hash is however transparent to the network.  It must align with a hash that the client is capable of creating</li>
<li>Hash1b (optional)- a string representing a potential Hash value used to authenticate the client.  It is anticipated that the value will be computed from an MD5 Hash of 'composite-username@Realm:Realm:Password'.  The makeup of this hash is however transparent to the network.  It must align with a hash that the client is capable of creating.</li>
</ol>

#### **get**

GET is used to retrieve all SIP credentials for the account.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialsResponse> <Links> <first>Link=&lt;http://qa.bandwidth.com/iris/accounts/14/sipcredentials?size=500&amp;page=1&gt;;rel="first"; </first> </Links> <SipCredentials> <SipCredential> <UserName>John</UserName> <Domain>bw.com</Domain> <Hash1>1g32gadgs433dd4</Hash1> <Hash1b>1g32gadgs433d24</Hash1b> </SipCredential> <SipCredential> <UserName>Mathew@bw.com</UserName> <Hash1>43543gggs43g324</Hash1> </SipCredential> </SipCredentials> </SipCredentialsResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialsResponse> <ResponseStatus> <ErrorCode>23008</ErrorCode> <Description>There are no Sip credentials associated with the account with ID = 41</Description> </ResponseStatus> </SipCredentialsResponse>
```

#### **post**

POST is used to create SIP credentials and associate its with the account.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>UserName</td>
      <td>This is subscriber name or aggregated name and domain value(ex: John@bw.com). Field is required. Max length - 32 characters.</td>
    </tr>
    <tr>
      <td>Domain</td>
      <td>This is subscriber domain. Domain is optional and if present will be appended to the UserName with an '@'. Max length - 32 characters.</td>
    </tr>
    <tr>
      <td>Hash1</td>
      <td>This is hash value #1 in MD5 representation. Field is required. Max length - 64 characters.</td>
    </tr>
    <tr>
      <td>Hash1b</td>
      <td>This is hash value #2 in MD5 representation. Field is optional. Max length - 64 characters.</td>
    </tr>
  </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<SipCredentials>
    <SipCredential>
        <UserName>John</UserName>
        <Domain>bw.com</Domain>
        <Hash1>1g32gadgs433dd4</Hash1>
        <Hash1b>1g32gadgs433d24</Hash1b>
    </SipCredential>
    <SipCredential>
        <UserName>Mathew@bw.com</UserName>
        <Hash1>43543gggs43g324</Hash1>
        <Hash1b>1g32gadgs433a34</Hash1b>
    </SipCredential>
</SipCredentials>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialsResponse> <Errors> <Error> <ErrorCode>1003</ErrorCode> <Description>UserName is required</Description> <SipCredential> <Domain>bw.com</Domain> <Hash1>1g32gadgs433dd4</Hash1> <Hash1b>1g32gadgs433d24</Hash1b> </SipCredential> </Error> </Errors> <ValidSipCredentials> <SipCredential> <UserName>Bill</UserName> <Domain>bw.com</Domain> <Hash1>43543gggs43g324</Hash1> <Hash1b>4562gadgs433454</Hash1b> </SipCredential> </ValidSipCredentials> </SipCredentialsResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialsResponse> <ResponseStatus> <Description>Please check your input parameters.</Description> </ResponseStatus> <Errors> <Error> <ErrorCode>1003</ErrorCode> <Description>UserName is required</Description> <SipCredential> <Domain>bw.com</Domain> <Hash1>1g32gadgs433dd4</Hash1> <Hash1b>1g32gadgs433d24</Hash1b> </SipCredential> </Error> <Error> <ErrorCode>23009</ErrorCode> <Description>Sip credential Bill@bw.com does already exist on the account with ID = 41</Description> <SipCredential> <UserName>Bill</UserName> <Domain>bw.com</Domain> <Hash1>43543gggs43g324</Hash1> <Hash1b>4562gadgs433454</Hash1b> </SipCredential> </Error> </Errors> </SipCredentialsResponse>
```

### /accounts/{accountId}/sipcredentials/{compositeUserName} {#compositeUserName}
This resource is used to manage single SIP credential for subscribers provisioning.<br>
The compositeUserName is an identifier comprised of the ```UserName```, and, if there is a ```Domain``` part to the overall ID for the user, an @ followed by the ```Domain``` segment.  This slightly convoluted approach was adopted to allow the Domain component of a user's identifier to be optional.

#### **get**

GET is used to retrieve SIP credential for the account by unique combination of user name and domain.
compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the <Domain>.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| compositeUserName | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <SipCredential> <UserName>John</UserName> <Domain>bw.com</Domain> <Hash1>1g32gadgs433dd4</Hash1> <Hash1b>1g32gadgs433d24</Hash1b> </SipCredential> </SipCredentialResponse> <!-- OR for SipCredentilas with a pre-aggregated aggregated UserName and Domain, where the User and Domain parts are already contained in the UserName --> <SipCredentialResponse> <SipCredential> <UserName>Bill@bw.com</UserName> <Hash1>1g32gadgs433dd4</Hash1> </SipCredential> </SipCredentialResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <ResponseStatus> <ErrorCode>23007</ErrorCode> <Description>Sip credential Jack@bw.com was not found on the account with ID = 41</Description> </ResponseStatus> </SipCredentialResponse>
```

#### **put**

PUT is used to change single SIP credential.<br>
It is not possible to change the UserName or the Domain associated with the Hash Values.  To do so requires deletion of one set of credentials and addition of a new set of credentials.<br>
compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the ```Domain```.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>Hash1</td>
      <td>This is hash value #1 in MD5 representation. Field is required. Max length - 64 characters.</td>
    </tr>
    <tr>
      <td>Hash1b</td>
      <td>This is hash value #2 in MD5 representation. Field is optional. Max length - 64 characters.</td>
    </tr>
  </tbody>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| compositeUserName | string | true |

###### Body

**application/xml**

```xml
<SipCredential>
    <Hash1>1g32gadgs433dd4</Hash1>
    <Hash1b>1g32gadgs433d24</Hash1b>
</SipCredential>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <SipCredential> <UserName>Mathew</UserName> <Domain>bw.com</Domain> <Hash1>43533gggs43g324</Hash1> <Hash1b>4562gadgs423454</Hash1b> </SipCredential> </SipCredentialResponse> <!-- OR for SipCredentilas with aggregated UserName and Domain --> <SipCredentialResponse> <SipCredential> <UserName>Mathew@bw.com</UserName> <Hash1>43533gggs43g324</Hash1> </SipCredential> </SipCredentialResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <ResponseStatus> <ErrorCode>23004</ErrorCode> <Description>Unable to change the UserName or the Domain associated with the Hash Values. To do so requires deletion of one set of credentials and addition of a new set of credentials.</Description> </ResponseStatus> </SipCredentialResponse>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <ResponseStatus> <ErrorCode>23007</ErrorCode> <Description>Sip credential Ross@bw.com was not found on the account with ID = 41</Description> </ResponseStatus> </SipCredentialResponse>
```

#### **delete**

DELETE is used to delete SIP credential.  compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the ```Domain```.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| compositeUserName | string | true |

##### Response

**200**

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SipCredentialResponse> <ResponseStatus> <ErrorCode>23007</ErrorCode> <Description>Sip credential Jim@bw.com was not found on the account with ID = 41</Description> </ResponseStatus> </SipCredentialResponse>
```

### /accounts/{accountId}/sites {#sites}
Use this method to add or update a site to an existing account. <br>
Each site creation or update must have the following input parameters:
<table>
    <tr>
        <th>Parameter</th><th>Description</th>
    </tr>
    <tr>
        <td>accountid</td><td>The numerical Account ID that you will be adding the site to.</td>
    </tr>
    <tr>
        <td>Name</td><td>The name of the site. Max length restricted to 10 characters.</td>
    </tr>
    <tr>
        <td>Description</td><td>Customer provided description of the site.</td>
    </tr>
    <tr>
        <td>Address</td><td>Service Address for the site.</td>
    </tr>
    <tr>
        <td>CustomerProvidedID</td><td>Customer can provide an optional id (max 10 digits). Note that the customer can use the same id across multiple orders.</td>
    </tr>
    <tr>
        <td>CustomerName</td><td>Customer can provide an optional name</td>
    </tr>
    <tr>
        <td>UcTrunkingConfiguration</td><td>For UC Trunking accounts the UcTrunkingConfiguration element describes the kind of UC trunking that is provided.  The <b>Type</b> parameter is one of Seats, Premise, or Cloud, and the <b>UsageCategory</b> parameter is one of UC250, UC500 or UC1000. </td>
    </tr>
</table>

#### **get**

retrieve a list of all the sites associated with the account

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?>
<SitesResponse>
    <Sites>
        <Site>
            <Id>399</Id>
            <Name>Testsite</Name>
            <Description>NewSite</Description>
        </Site>
        <Site>
            <Id>403</Id>
            <Name>GABESITEa</Name>
            <Description>Awesomeness</Description>
        </Site>
    </Sites>
</SitesResponse>

```

#### **post**

Add a site to the account

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Site>
    <Name>Raleigh</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
        <HouseNumber>1600</HouseNumber>
        <StreetName>PENNSYLVANIA</StreetName>
        <StreetSuffix>AVE</StreetSuffix>
        <PostDirectional>NW</PostDirectional>
        <City>WASHINGTON</City>
        <StateCode>DC</StateCode>
        <Zip>20006</Zip>
        <Country>US</Country>
    </Address>
</Site>
<!-- and for a UC account ... -->
<Site>
    <Name>Raleigh</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
        <HouseNumber>1600</HouseNumber>
        <StreetName>PENNSYLVANIA</StreetName>
        <StreetSuffix>AVE</StreetSuffix>
        <PostDirectional>NW</PostDirectional>
        <City>WASHINGTON</City>
        <StateCode>DC</StateCode>
        <Zip>20006</Zip>
        <Country>US</Country>
    </Address>
    <UcTrunkingConfiguration>
        <Type>Seats</Type>
        <UsageCategory>UC500</UsageCategory>
    </UcTrunkingConfiguration>
</Site>

```

##### Response

**201**

**400**

```xml
<SiteResponse>
    <ResponseStatus>
        <ErrorCode>1003</ErrorCode>
        <Description>Address is required</Description>
    </ResponseStatus>
</SiteResponse>

```

**409**

```xml
<SiteResponse>
    <ResponseStatus>
        <ErrorCode>12112</ErrorCode>
        <Description>The verifiable address closest to the submitted access is included below. Please use that street address or another valid street address in your next request</Description>
    </ResponseStatus>
    <AddressErrorDescription>
        <AddressInconsistencies>Some adjustments are required to allow the address to pass geocoding:
Specified value - Street Name : "PENNSYLVANIO" Valid value - "PENNSYLVANIA"</AddressInconsistencies>
        <RecommendedAddress>
            <AddressLine1>1600 PENNSYLVANIA AVE NW</AddressLine1>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIA</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20006</Zip>
            <Country>US</Country>
        </RecommendedAddress>
    </AddressErrorDescription>
    <Site>
        <Name>Raleigh</Name>
        <Description>Test Gateway</Description>
        <CustomerName>BW</CustomerName>
        <Address>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIO</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20006</Zip>
            <Country>US</Country>
        </Address>
        <UcTrunkingConfiguration>
            <Type>Seats</Type>
            <UsageCategory>UC500</UsageCategory>
        </UcTrunkingConfiguration>
    </Site>
</SiteResponse>

```

### /accounts/{accountId}/sites/{siteId} {#siteId}
This method updates or deletes a site based on the id, as well as adds a SIP Peer to the given site.

#### **get**

retrieves the information associated with the site id

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<SiteResponse>
    <Site>
        <Id>3013</Id>
        <Name>Raleigh</Name>
        <Description>Test Gateway</Description>
        <CustomerName>BW</CustomerName>
        <Address>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIA</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20006</Zip>
            <Country>US</Country>
            <AddressType>Service</AddressType>
        </Address>
        <!-- Following appears only for sites on UC Trunking accounts. -->
        <UcTrunkingConfiguration>
            <Type>Seats</Type>
            <UsageCategory>UC500</UsageCategory>
        </UcTrunkingConfiguration>
    </Site>
</SiteResponse>

```

**404**

```xml
<SiteResponse>
    <ResponseStatus>
        <ErrorCode>12016</ErrorCode>
        <Description>Site '3014' does not exist</Description>
    </ResponseStatus>
</SiteResponse>

```

#### **put**

updates the contents of a site id

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <Site> <Name>Raleigh</Name> <Description>SIP gateway</Description> <CustomerName>BW</CustomerName> <CustomerProvidedId>1234567890</CustomerProvidedId> <Address> <HouseNumber>1600</HouseNumber> <StreetName>PENNSYLVANIA</StreetName> <StreetSuffix>AVE</StreetSuffix> <PostDirectional>NW</PostDirectional> <City>WASHINGTON</City> <StateCode>DC</StateCode> <Zip>20006</Zip> <Country>US</Country> <AddressType>Service</AddressType> </Address> <!-- Following applies only to sites on UC Trunking accounts. --> <UcTrunkingConfiguration> <Type>Seats</Type> <UsageCategory>UC500</UsageCategory> </UcTrunkingConfiguration> </Site>
```

##### Response

**200**

**400**

```xml
<?xml version="1.0"?> <SiteResponse> <ResponseStatus> <ErrorCode>1003</ErrorCode> <Description>Address is required</Description> </ResponseStatus> </SiteResponse>
```

**409**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteResponse>
    <ResponseStatus>
        <ErrorCode>12112</ErrorCode>
        <Description>The verifiable address closest to the submitted access is included below. Please use that street address or another valid street address in your next request</Description>
    </ResponseStatus>
    <AddressErrorDescription>
        <AddressInconsistencies>Some adjustments are required to allow the address to pass geocoding:
Specified value - Street Name : "PENNSYLVANIO" Valid value - "PENNSYLVANIA"</AddressInconsistencies>
        <RecommendedAddress>
            <AddressLine1>1600 PENNSYLVANIA AVE NW</AddressLine1>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIA</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20006</Zip>
            <Country>US</Country>
        </RecommendedAddress>
    </AddressErrorDescription>
    <Site>
        <Name>Raleigh</Name>
        <Description>SIP gateway</Description>
        <CustomerName>BW</CustomerName>
        <CustomerProvidedId>1234567890</CustomerProvidedId>
        <Address>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIO</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20006</Zip>
            <Country>US</Country>
            <AddressType>Service</AddressType>
        </Address>
        <!-- Following applies only to sites on UC Trunking accounts. -->
        <UcTrunkingConfiguration>
            <Type>Seats</Type>
            <UsageCategory>UC500</UsageCategory>
        </UcTrunkingConfiguration>
    </Site>
</SiteResponse>

```

#### **delete**

deletes the site - sites can only be deleted if there are no SIP Peers attached to it

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

**400**

```xml
<?xml version="1.0"?> <SiteResponse> <ResponseStatus> <ErrorCode>12054</ErrorCode> <Description> This site is currently locked for contract paperwork. Please contact support for further assistance. </Description> </ResponseStatus> </SiteResponse>
```

### /accounts/{accountId}/sites/{siteId}/sippeers {#sippeers}
The SIP Peer API is used to display and configure SIP Peers
The values for this payload are as follows:
<table border="1">
<tbody>
    <tr>
        <th>Element</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>SiteId</td>
        <td>The internally allocated SIP Peer ID</td>
        <td>12345</td>
    </tr>
    <tr>
        <td>PeerName</td>
        <td>Mandatory name for the SIP Peer (Max 10 chars)</td>
        <td>Downtown Branch</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Optional description for the SIP Peer</td>
        <td></td>
    </tr>
    <tr>
        <td>IsDefaultPeer</td>
        <td>Value is True or False. The Default SIP Peer is the default "destination" for any Telephone Numbers that are ordered for the Site in which the SIP Peer resides.&nbsp; Each site can have only 1 default SIP Peer. You can configure multiple SIP Peers on a Site</td>
        <td></td>
    </tr>
    <tr>
        <td>HostName</td>
        <td>The IP Address or Host Name of the address to be used for the VoiceHosts or VoiceHostGroups addresses.</td>
        <td></td>
    </tr>
    <tr>
        <td>Port</td>
        <td>Optional Port Number for Voice and Termination hosts. This is an optional parameter that has default values that are dependent on the Application.&nbsp;</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHosts</td>
        <td>These addresses, comprised of HostName and optional Port, are used by the Bandwidth network to send calls to for Origination services. The VoiceHosts list of IP addresses used for an active/standby address selection mechanism, where the first address is attempted, followed by the second address and so on.  Except under failure situations the first address in the list is preferred. Maximum of 10 hosts - can be IP address or Fully Qualified Domain Name</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHostGroups</td>
        <td>The VoiceHostGroups element is comprised of a list of up to five VoiceHostGroup elements, each of which is used to randomly distribute traffic amongst up to 10 IP addresses.  One of the VoiceHostGroups elements in the group is chosen at random to receive traffic, and then the calls are placed at random amongst the addresses in the group.  Once a group is chose, failover behavior is retained within the group.</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHostGroup</td>
        <td>A VoiceHostGroup is a list of IP Addresses (the Host element).  This traffic distribution model distributes traffic in a Random manner amongst the addresses in the group.</td>
        <td></td>
    </tr>
    <tr>
        <td>TerminationHosts</td>
        <td>These addresses, comprised of IP or Subnet(CIDR format) and optional Port, are used by the Bandwidth network to send calls to for Termination services. Maximum of 10 hosts - can be IP address or subnets. In case of subnet you should specify NetworkAddress of subnet as IP.</td>
        <td>135.23.78.145 or
        <br>
        12.45.67.48/29
        </td>
    </tr>
    <tr>
        <td>CustomerTrafficAllowed</td>
        <td>A TerminationHost can be configured to allow different customer traffic types.&nbsp; Allowed values are LITE, DOMESTIC and ALL. This is an optional parameter.</td>
        <td></td>
    </tr>
    <tr>
        <td>Address</td>
        <td>Billing or Service Address for the SIP Peer.&nbsp;
            This element is optional for accounts except for accounts with the UC
            Trunking Product.&nbsp; If the address element is provided the
            following fields can be provided, some of which are Mandatory:<br>
            &nbsp;&nbsp;&nbsp; HouseNumber - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; HouseSuffix - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; PreDirectional - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; StreetName - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; StreetSuffix - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; PostDirectional- OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; AddressLine2- OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; City - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; StateCode - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; Zip - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; PlusFour - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; County - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; Country - OPTIONAL (Defaults to 'US')<br>
            &nbsp;&nbsp;&nbsp; AddressType - MANDATORY (Billing or
            Service)</td>
        <td></td>
    </tr>
    <tr>
      <td>CallingName</td>
      <td>Determines whether the Calling Name Display service is applied to the Telephone Numbers associates with the SIP Peer</td>
      <td></td>
    </tr>
    <tr>
      <td>Display</td>
      <td>Controls the Display of Calling Name information. If &lt;true> then the calling name information is displayed by default for all calls,</td>
      <td></td>
    </tr>
    <tr>
      <td>Enforced</td>
      <td>Determines whether the Default Display behavior (Display) is enforced for all TNs associated with the SIP Peer.  If &lt;true> then no TN-level overrde is possible</td>
      <td></td>
    </tr>
    <tr>
      <td>FinalDestinationURI</td>
      <td>Last attempt for routing of calls </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
</table>

#### **get**

Retrieve information about a Sip Peer or set of Sip Peers

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TNSipPeersResponse>
    <SipPeers>
        <SipPeer xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SipPeer">
            <PeerId>304985</PeerId>
            <PeerName>CNAM-TEST-778</PeerName>
            <Description>description</Description>
            <IsDefaultPeer>false</IsDefaultPeer>
            <VoiceHosts/>
            <VoiceHostGroups/>
            <TerminationHosts/>
            <Address>
                <HouseNumber>1600</HouseNumber>
                <HouseSuffix/>
                <PreDirectional/>
                <StreetName>Pennsylvania Avenue Northwest</StreetName>
                <StreetSuffix/>
                <PostDirectional/>
                <AddressLine2/>
                <City>Washington</City>
                <StateCode>DC</StateCode>
                <Zip>20500</Zip>
                <PlusFour/>
                <County/>
                <Country>United States</Country>
                <AddressType>Service</AddressType>
            </Address>
            <CallingName>
                <Display>false</Display>
                <Enforced>false</Enforced>
            </CallingName>
        </SipPeer>
    </SipPeers>
</TNSipPeersResponse>

```

#### **post**

Create a Sip Peer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeer>
    <PeerName>name</PeerName>
    <Description>description</Description>
    <IsDefaultPeer>false</IsDefaultPeer>
    <FinalDestinationUri>uri</FinalDestinationUri>
    <VoiceHosts>
        <Host>
            <HostName>10.10.10.1</HostName>
        </Host>
        <Host>
            <HostName>10.10.10.2</HostName>
        </Host>
    </VoiceHosts>
    <TerminationHosts>
        <TerminationHost>
            <HostName>2.1.1.9</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
        <TerminationHost>
            <HostName>2.1.1.96/30</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
    </TerminationHosts>
      <Address>
          <HouseNumber>1600</HouseNumber>
          <HouseSuffix/>
          <PreDirectional/>
          <StreetName>PENNSYLVANIA AVE NW</StreetName>
          <StreetSuffix/>
          <PostDirectional/>
          <AddressLine2/>
          <City>WASHINGTON</City>
          <StateCode>DC</StateCode>
          <Zip>20500</Zip>
          <PlusFour/>
          <County/>
          <Country>United States</Country>
          <AddressType>Service</AddressType>
      </Address>
    <PremiseTrunks>PremiseTrunks</PremiseTrunks>
    <CallingName>
        <Display>true</Display>
        <Enforced>true</Enforced>
    </CallingName>
</SipPeer>
or alternatively, using VoiceHostGroups instead of VoiceHosts
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeer>
    <PeerName>name</PeerName>
    <Description>description</Description>
    <IsDefaultPeer>false</IsDefaultPeer>
    <FinalDestinationUri>uri</FinalDestinationUri>
    <VoiceHostGroups>
        <VoiceHostGroup>
           <Host>
               <HostName>10.10.10.1</HostName>
           </Host>
           <Host>
               <HostName>10.10.10.2</HostName>
           </Host>
        </VoiceHostGroup>
    </VoiceHostGroups>
    <TerminationHosts>
        <TerminationHost>
            <HostName>2.1.1.9</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
        <TerminationHost>
            <HostName>2.1.1.96/30</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
    </TerminationHosts>
</SipPeer>

```

##### Response

**201**

```xml
None
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>13582</ErrorCode>
        <Description>Enforce option is missing</Description>
    </ResponseStatus>
</SipPeerResponse>

```

**409**

```xml
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>12112</ErrorCode>
        <Description>The verifiable address closest to the submitted access is included below. Please use that street address or another valid street address in your next request</Description>
    </ResponseStatus>
    <AddressErrorDescription>
        <AddressInconsistencies>Some adjustments are required to allow the address to pass geocoding:
Specified value - City : "WASHINGTUN" Valid value - "WASHINGTON"</AddressInconsistencies>
        <RecommendedAddress>
            <AddressLine1>1600 PENNSYLVANIA AVE NW</AddressLine1>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIA</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20500</Zip>
            <Country>US</Country>
        </RecommendedAddress>
    </AddressErrorDescription>
</SipPeerResponse>

```

**503**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>13566</ErrorCode>
        <Description>Our E911 service is unavaliable</Description>
    </ResponseStatus>
</SipPeerResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId} {#sippeerId}
The SIPpeerID Resource deals with retrieving or updating a specific identified SIP Peer, identified by the SIP Peer ID.
The elements of the payload are described in the /sippeers resource.

#### **get**

Retrieve a the data associated with a Sip Peer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <SipPeer>
        <PeerId>304985</PeerId>
        <PeerName>CNAM-TEST-778</PeerName>
        <Description>description</Description>
        <IsDefaultPeer>false</IsDefaultPeer>
        <VoiceHosts/>
        <VoiceHostGroups/>
        <TerminationHosts/>
        <Address>
            <HouseNumber>1600</HouseNumber>
            <HouseSuffix/>
            <PreDirectional/>
            <StreetName>PENNSYLVANIA AVE NW</StreetName>
            <StreetSuffix/>
            <PostDirectional/>
            <AddressLine2/>
            <City>Washington</City>
            <StateCode>DC</StateCode>
            <Zip>20500</Zip>
            <PlusFour/>
            <County/>
            <Country>United States</Country>
            <AddressType>Service</AddressType>
        </Address>
        <CallingName>
            <Display>false</Display>
            <Enforced>false</Enforced>
        </CallingName>
    </SipPeer>
</SipPeerResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>13563</ErrorCode>
        <Description>Sip Peer '316167' account '9999999' and site '45' does not exist</Description>
    </ResponseStatus>
</SipPeerResponse>

```

#### **put**

Update a Sip Peer
There are a few rules used to eliminate IP address collisions.  The primary restriction is on the ability to share Term IP addresses across the Bandwidth Dashboard API structural elements. Essentially...
<ul><li>Term Addresses cannot be shared anywhere</li>
<li>VoiceHost and VoiceHostGroup addresses can be shared between SIP Peers, and can be different than or the same as Term IP Addresses </li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeer>
    <PeerName>name</PeerName>
    <Description>description</Description>
    <IsDefaultPeer>false</IsDefaultPeer>
    <VoiceHosts>
        <Host>
            <HostName>10.10.10.1</HostName>
        </Host>
        <Host>
            <HostName>10.10.10.2</HostName>
        </Host>
    </VoiceHosts>
    <VoiceHostGroups/>
    <TerminationHosts>
        <TerminationHost>
            <HostName>2.1.1.9</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
        <TerminationHost>
            <HostName>2.1.1.96/30</HostName>
            <Port>0</Port>
            <CustomerTrafficAllowed>DOMESTIC</CustomerTrafficAllowed>
        </TerminationHost>
    </TerminationHosts>
    <CallingName>
        <Display>true</Display>
        <Enforced>true</Enforced>
    </CallingName>
</SipPeer>

```

##### Response

**200**

```xml
None

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>13582</ErrorCode>
        <Description>Enforce option is missing</Description>
    </ResponseStatus>
</SipPeerResponse>

```

**409**

```xml
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>12112</ErrorCode>
        <Description>The verifiable address closest to the submitted access is included below. Please use that street address or another valid street address in your next request</Description>
    </ResponseStatus>
    <AddressErrorDescription>
        <AddressInconsistencies>Some adjustments are required to allow the address to pass geocoding:
Specified value - City : "WASHINGTUN" Valid value - "WASHINGTON"</AddressInconsistencies>
        <RecommendedAddress>
            <AddressLine1>1600 PENNSYLVANIA AVE NW</AddressLine1>
            <HouseNumber>1600</HouseNumber>
            <StreetName>PENNSYLVANIA</StreetName>
            <StreetSuffix>AVE</StreetSuffix>
            <PostDirectional>NW</PostDirectional>
            <City>WASHINGTON</City>
            <StateCode>DC</StateCode>
            <Zip>20500</Zip>
            <Country>US</Country>
        </RecommendedAddress>
    </AddressErrorDescription>
</SipPeerResponse>

```

#### **delete**

Delete a Sip Peer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
None

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>13613</ErrorCode>
        <Description>Delete not allowed while a SIP Peer has SMS feature</Description>
    </ResponseStatus>
</SipPeerResponse>

```

**404**

```xml
None

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns {#tns}

#### **get**

Retrieve information about a Telephone number or set of Telephone numbers

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumbersResponse>
    <SipPeerTelephoneNumbers>
        <SipPeerTelephoneNumber>
            <FullNumber>2052160148</FullNumber>
            <CallingNameDisplay>true</CallingNameDisplay>
            <TnAttributes>
                <TnAttribute>Protected</TnAttribute>
                <TnAttribute>External</TnAttribute>
                <TnAttribute>Imported</TnAttribute>
            </TnAttributes>
            <MessagingSettings>
                <SmsEnabled>true</SmsEnabled>
            </MessagingSettings>
        </SipPeerTelephoneNumber>
        <SipPeerTelephoneNumber>
            <FullNumber>2053161118</FullNumber>
            <CallingNameDisplay>false</CallingNameDisplay>
            <MessagingSettings>
                <SmsEnabled>true</SmsEnabled>
            </MessagingSettings>
        </SipPeerTelephoneNumber>
        <SipPeerTelephoneNumber>
            <FullNumber>2053160118</FullNumber>
            <CallForward>2014563025</CallForward>
            <CallingNameDisplay>false</CallingNameDisplay>
        </SipPeerTelephoneNumber>
    </SipPeerTelephoneNumbers>
</SipPeerTelephoneNumbersResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns/{tn} {#tn}

#### **get**

Link for receiving information about telephone number.
CallForward - Does this telephone number have call forwarding or not.
CallingNameDisplay - Calling Name of the caller is available to the user or not on incoming calls.
TnAttributes - Is this telephone number protected or not.
MessagingSettings -  Does this telephone number have any messaging system configured.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |
| tn | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumberResponse>
    <SipPeerTelephoneNumber>
        <FullNumber>5209072451</FullNumber>
        <CallForward>7042661720</CallForward>
        <CallingNameDisplay>true</CallingNameDisplay>
        <TnAttributes>
            <TnAttribute>Protected</TnAttribute>
            <TnAttribute>External</TnAttribute>
            <TnAttribute>Imported</TnAttribute>
        </TnAttributes>
        <MessagingSettings>
            <SmsEnabled>true</SmsEnabled>
        </MessagingSettings>
    </SipPeerTelephoneNumber>
</SipPeerTelephoneNumberResponse>

```

#### **put**

This API can be used by the Bandwidth Dashboard API or general API users to update the settings for TNs allocated to their account.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |
| tn | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumber>
    <FullNumber>2052160156</FullNumber>
    <NumberFormat>10digit</NumberFormat>
    <RPIDFormat>10digit</RPIDFormat>
    <RewriteUser>false</RewriteUser>
    <CallForward>7042661720</CallForward>
    <CallingNameDisplay>true</CallingNameDisplay>
    <TnAttributes>
        <TnAttribute>Protected</TnAttribute>
        <TnAttribute>External</TnAttribute>
        <TnAttribute>Imported</TnAttribute>
    </TnAttributes>
    <MessagingSettings>
        <SmsEnabled>true</SmsEnabled>
    </MessagingSettings>
</SipPeerTelephoneNumber>

```

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumberResponse>
    <ResponseStatus>
        <ErrorCode>13576</ErrorCode>
        <Description>Account '9999999' has no 'CallForwarding' product feature</Description>
    </ResponseStatus>
</SipPeerTelephoneNumberResponse>

```

**409**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/totaltns {#totaltns}

#### **get**

Retrieve count of Telephone numbers for Sip Peer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTelephoneNumbersCountResponse>
    <SipPeerTelephoneNumbersCount>
        <SipPeerTelephoneNumbersCount>4</SipPeerTelephoneNumbersCount>
        <CnamCount>4</CnamCount>
        <LidbCount>0</LidbCount>
    </SipPeerTelephoneNumbersCount>
</SipPeerTelephoneNumbersCountResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/movetns {#movetns}
This method moves desired Telephone Numbers to the given SIP peer.

#### **post**

The POST method moves all telephone numbers specified in the body to the given SIP peer.<br>
The source SIP peer is determined by the Telephone Number, i.e. the PUT method can move multiple numbers from different source SIP peers.<br>
The destination SIP peer is specified in the URL.<br>
NOTE: only a maximum of 5000 Telephone Numbers can be moved in one operation.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<SipPeerTelephoneNumbers>
    <FullNumber>9199921234</FullNumber>
        <!-- SNIP -->
    <FullNumber>9199998550</FullNumber>
</SipPeerTelephoneNumbers>

```

##### Response

**200**

**400**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products {#products}
This API will expose products that are associated directly with the SIP Peer.
The current products that can be associated with a SIP Peer are: <br>
* Termination <br>
* EdgeManagement <br>
* Messaging <br>
* Origination <br>

#### **get**

list the products associated with a SIP Peer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<SipPeerProductResponse>
    <Products>
        <Product>
            <Name>Termination</Name>
        </Product>
        <Product>
            <Name>EdgeManagement</Name>
        </Product>
        <Product>
            <Name>Messaging</Name>
        </Product>
        <Product>
            <Name>Origination</Name>
        </Product>
    </Products>
</SipPeerProductResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/origination/settings {#origination-settings}

#### **get**

Retrieve origination settings for sippeer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--HTTP Voice-->
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
<!--SIP Voice-->
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>SIP</VoiceProtocol>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>

```

#### **post**

Set sippeer origination settings<br>
<ul>
    <li>VoiceProtocol is required with possible values: HTTP, SIP</li>
    <li>HttpSettings and HttpVoiceV2AppId are optional fields and only allowed if VoiceProtocol is HTTP</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<!--HTTP Voice-->
<SipPeerOriginationSettings>
  <VoiceProtocol>HTTP</VoiceProtocol>
  <HttpSettings>
    <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
  </HttpSettings>
</SipPeerOriginationSettings>
<!--SIP Voice-->
<SipPeerOriginationSettings>
  <VoiceProtocol>SIP</VoiceProtocol>
</SipPeerOriginationSettings>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13609</ErrorCode>
        <Description>Can't create sip peer http protocol sms feature without account level http settings.</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

#### **put**

update origination settings<br>
<ul>
   <li>VoiceProtocol is required with possible values: HTTP, SIP</li>
   <li>HttpSettings and HttpVoiceV2AppId are optional fields and only allowed if VoiceProtocol is HTTP</li>
</ul>
<br>Note: Changing the Voice Protocol from SIP to HTTP will remove Voice Hosts or Voice Host Groups and Termination Hosts, which are configured using API /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml

```

##### Response

**200**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/termination/settings {#termination-settings}

#### **get**

Retrieve termination settings for sippeer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--HTTP Voice-->
<SipPeerTerminationSettingsResponse>
  <SipPeerTerminationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerTerminationSettings>
</SipPeerTerminationSettingsResponse>
<!--SIP Voice-->
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>SIP</VoiceProtocol>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>

```

#### **post**

Set sippeer termination settings<br>
<ul>
    <li>VoiceProtocol is required with possible values: HTTP, SIP</li>
    <li>HttpSettings and HttpVoiceV2AppId are optional fields and only allowed if VoiceProtocol is HTTP</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<!--HTTP Voice-->
<SipPeerTerminationSettings>
  <VoiceProtocol>HTTP</VoiceProtocol>
  <HttpSettings>
    <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
  </HttpSettings>
</SipPeerTerminationSettings>
<!--SIP Voice-->
<SipPeerTerminationSettings>
  <VoiceProtocol>SIP</VoiceProtocol>
</SipPeerTerminationSettings>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerTerminationSettingsResponse>
  <SipPeerTerminationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>469ebbac-4459-4d98-bc19-a038960e787f</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerTerminationSettings>
</SipPeerTerminationSettingsResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13609</ErrorCode>
        <Description>Can't create sip peer http protocol sms feature without account level http settings.</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

#### **put**

update termination settings
<br>Note: Changing the Voice Protocol from SIP to HTTP will remove Voice Hosts or Voice Host Groups and Termination Hosts, which are configured using API /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml

```

##### Response

**200**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms {#messaging-features/sms}

#### **get**

Retrieve sms feature settings for sippeer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <SipPeerSmsFeature>
        <SipPeerSmsFeatureSettings>
            <TollFree>true</TollFree>
            <ShortCode>true</ShortCode>
            <A2pLongCode>DefaultOff</A2pLongCode>
            <A2pMessageClass>SomeMessageClass</A2pMessageClass>
            <A2pCampaignId>SomeCampaignId</A2pCampaignId>
            <Protocol>SMPP</Protocol>
            <Zone1>true</Zone1>
            <Zone2>true</Zone2>
            <Zone3>true</Zone3>
            <Zone4>true</Zone4>
            <Zone5>true</Zone5>
        </SipPeerSmsFeatureSettings>
        <SmppHosts>
            <SmppHost>
                <HostName>54.10.88.146</HostName>
                <HostId>18</HostId>
                <Priority>0</Priority>
                <ConnectionType>RECEIVER_ONLY</ConnectionType>
            </SmppHost>
        </SmppHosts>
    </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>

```

#### **post**

Create sms feature settings. <br/>
<b>Warning</b>: settings A2pLongCode as 'ON' or 'OFF' will enforce this value for all tns under target sippeer <br/>
<b>Note</b>: In case of using SMPP protocol, it may be not possible to add or delete hosts with large subnet masks. <br/>
Please refer to the documentation of
accounts/:accountid/sites/:siteid/sippeers/:sippeerid/products/:messaging/features/sms/smpp/hosts
endpoint for information about restrictions and other tips regarding smpp hosts.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SipPeerSmsFeature>
    <SipPeerSmsFeatureSettings>
        <TollFree>true</TollFree>
        <ShortCode>true</ShortCode>
        <A2pLongCode>DefaultOff</A2pLongCode>
        <A2pMessageClass>SomeMessageClass</A2pMessageClass>
        <A2pCampaignId>SomeCampaignId</A2pCampaignId>
        <Protocol>SMPP</Protocol>
        <Zone1>true</Zone1>
        <Zone2>true</Zone2>
        <Zone3>true</Zone3>
        <Zone4>true</Zone4>
        <Zone5>true</Zone5>
    </SipPeerSmsFeatureSettings>
    <SmppHosts>
        <SmppHost>
            <HostName>54.10.88.146</HostName>
            <Priority>0</Priority>
            <ConnectionType>RECEIVER_ONLY</ConnectionType>
        </SmppHost>
        <SmppHost>
            <HostName>47.123.17.16/30</HostName>
            <Priority>0</Priority>
            <ConnectionType>RECEIVER_ONLY</ConnectionType>
        </SmppHost>
    </SmppHosts>
</SipPeerSmsFeature>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <SipPeerSmsFeature>
        <SipPeerSmsFeatureSettings>
            <TollFree>true</TollFree>
            <ShortCode>true</ShortCode>
            <A2pLongCode>DefaultOff</A2pLongCode>
            <A2pMessageClass>SomeMessageClass</A2pMessageClass>
            <A2pCampaignId>SomeCampaignId</A2pCampaignId>
            <Protocol>SMPP</Protocol>
            <Zone1>true</Zone1>
            <Zone2>true</Zone2>
            <Zone3>true</Zone3>
            <Zone4>true</Zone4>
            <Zone5>true</Zone5>
        </SipPeerSmsFeatureSettings>
        <SmppHosts>
            <SmppHost>
                <HostName>54.10.88.146</HostName>
                <HostId>18</HostId>
                <Priority>0</Priority>
                <ConnectionType>RECEIVER_ONLY</ConnectionType>
            </SmppHost>
            <SmppHost>
                <HostName>47.123.17.16/30</HostName>
                <HostId>18</HostId>
                <Priority>0</Priority>
                <ConnectionType>RECEIVER_ONLY</ConnectionType>
            </SmppHost>
        </SmppHosts>
    </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13609</ErrorCode>
        <Description>Can't create sip peer http protocol sms feature without account level http settings.</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

**403**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13674</ErrorCode>
        <Description>Configuring subnet values larger than /20 requires Bandwidth staff intervention</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

#### **put**

Update sms feature settings. <br/>
<b>Warning</b>: settings A2pLongCode as 'ON' or 'OFF' will enforce this value for all tns under target sippeer <br/>
<b>Note</b>: In case of using SMPP protocol, it may be not possible to add or delete hosts with large subnet masks. <br/>
Please refer to the documentation of
accounts/:accountid/sites/:siteid/sippeers/:sippeerid/products/:messaging/features/sms/smpp/hosts
endpoint for information about restrictions and other tips regarding smpp hosts.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SipPeerSmsFeature>
    <SipPeerSmsFeatureSettings>
        <TollFree>false</TollFree>
        <ShortCode>true</ShortCode>
        <A2pLongCode>DefaultOff</A2pLongCode>
        <A2pMessageClass>SomeMessageClass</A2pMessageClass>
        <A2pCampaignId>SomeCampaignId</A2pCampaignId>
        <Protocol>SMPP</Protocol>
        <Zone1>true</Zone1>
        <Zone2>false</Zone2>
        <Zone3>false</Zone3>
        <Zone4>false</Zone4>
        <Zone5>false</Zone5>
    </SipPeerSmsFeatureSettings>
    <SmppHosts>
        <SmppHost>
            <HostName>235.133.23.79</HostName>
            <HostId>6</HostId>
            <Priority>0</Priority>
            <ConnectionType>TRANSCEIVER</ConnectionType>
        </SmppHost>
        <SmppHost>
            <HostName>47.123.17.16/30</HostName>
            <HostId>18</HostId>
            <Priority>0</Priority>
            <ConnectionType>TRANSCEIVER</ConnectionType>
        </SmppHost>
    </SmppHosts>
</SipPeerSmsFeature>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <SipPeerSmsFeature>
        <SipPeerSmsFeatureSettings>
            <TollFree>false</TollFree>
            <ShortCode>true</ShortCode>
            <A2pLongCode>DefaultOff</A2pLongCode>
            <A2pMessageClass>SomeMessageClass</A2pMessageClass>
            <A2pCampaignId>NewCampaignId</A2pCampaignId>
            <Protocol>SMPP</Protocol>
            <Zone1>true</Zone1>
            <Zone2>false</Zone2>
            <Zone3>false</Zone3>
            <Zone4>false</Zone4>
            <Zone5>false</Zone5>
        </SipPeerSmsFeatureSettings>
        <SmppHosts>
            <SmppHost>
                <HostName>235.133.23.79</HostName>
                <HostId>6</HostId>
                <Priority>0</Priority>
                <ConnectionType>TRANSCEIVER</ConnectionType>
            </SmppHost>
            <SmppHost>
                <HostName>47.123.17.16/30</HostName>
                <HostId>18</HostId>
                <Priority>0</Priority>
                <ConnectionType>TRANSCEIVER</ConnectionType>
            </SmppHost>
        </SmppHosts>
    </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13637</ErrorCode>
        <Description>CampaignID shouldn't be present if all of features 'A2pLongCode', 'TollFree' and 'ShortCode' are disabled.</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

**403**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13674</ErrorCode>
        <Description>Configuring subnet values larger than /20 requires Bandwidth staff intervention</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

#### **delete**

delete sms settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>13673</ErrorCode>
        <Description>Can not disable SMS feature on Sip Peer because it has telephone numbers with messaging enabled.</Description>
    </ResponseStatus>
</SipPeerSmsFeatureResponse>

```

**404**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms/smpp/hosts {#smpp-hosts}

#### **get**

Retrieve smpp hosts

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostsResponse>
  <SmsHosts>
    <SmsHost>
      <HostName>36.162.214.238</HostName>
      <HostId>7</HostId>
      <Priority>0</Priority>
      <ConnectionType>RECEIVER_ONLY</ConnectionType>
    </SmsHost>
    <SmsHost>
      <HostName>249.34.239.161</HostName>
      <HostId>8</HostId>
      <Priority>0</Priority>
      <ConnectionType>RECEIVER_ONLY</ConnectionType>
    </SmsHost>
    <SmsHost>
      <HostName>3.196.122.33</HostName>
      <HostId>9</HostId>
      <Priority>0</Priority>
      <ConnectionType>RECEIVER_ONLY</ConnectionType>
    </SmsHost>
  </SmsHosts>
</SmsSmppHostsResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostsResponse>
    <ResponseStatus>
        <ErrorCode>13637</ErrorCode>
        <Description>Termination IP 47.123.17.16/30 overlaps with an address that is already in use</Description>
    </ResponseStatus>
</SmsSmppHostsResponse>

```

**403**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostsResponse>
    <ResponseStatus>
        <ErrorCode>13674</ErrorCode>
        <Description>Configuring subnet values larger than /20 requires Bandwidth staff intervention</Description>
    </ResponseStatus>
</SmsSmppHostsResponse>

```

#### **post**

Add smpp host. Host address may or may not include the subnet mask (/32 is assumed if not specified)
Regular users can only specify subnets not larger then /20. Updating
subnet values larger than /20 requires Bandwidth staff intervention (Bandwidth staff may define subnets up
to /14)
Also, host address should not intersect with addresses used by other services or other accounts,
otherwise a validation error will occur.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<SmsHost>
  <HostName>47.123.17.16/30/HostName>
  <Priority>0</Priority>
  <ConnectionType>RECEIVER_ONLY</ConnectionType>
</SmsHost>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostResponse>
  <SmsHost>
    <HostName>47.123.17.16/30</HostName>
    <HostId>9</HostId>
    <Priority>0</Priority>
    <ConnectionType>RECEIVER_ONLY</ConnectionType>
  </SmsHost>
</SmsSmppHostResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostsResponse>
    <ResponseStatus>
        <ErrorCode>13637</ErrorCode>
        <Description>Termination IP 47.123.17.16/30 overlaps with an address that is already in use</Description>
    </ResponseStatus>
</SmsSmppHostsResponse>

```

**403**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SmsSmppHostsResponse>
    <ResponseStatus>
        <ErrorCode>13674</ErrorCode>
        <Description>Configuring subnet values larger than /20 requires Bandwidth staff intervention</Description>
    </ResponseStatus>
</SmsSmppHostsResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms {#messaging-features/mms}

#### **get**

Retrieve mms feature settings for sippeer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
  <MmsFeature>
    <MmsSettings>
      <protocol>HTTP</protocol>
    </MmsSettings>
    <Protocols>
      <HTTP>
        <HttpSettings>
          <proxyPeerId>500017</proxyPeerId>
        </HttpSettings>
      </HTTP>
    </Protocols>
  </MmsFeature>
</MmsFeatureResponse>

```

#### **post**

Set mms feature settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<MmsFeature>
  <MmsSettings>
    <Protocol>MM4</Protocol>
  </MmsSettings>
  <Protocols>
    <MM4>
    <!--Tls element is optional. If not included default value OFF will be used.-->
    <Tls>OFF</Tls>
      <MmsMM4TermHosts>
        <TermHosts>
          <TermHost>
            <HostName>206.107.248.58</HostName>
          </TermHost>
        </TermHosts>
      </MmsMM4TermHosts>
      <MmsMM4OrigHosts>
        <OrigHosts>
          <OrigHost>
            <!--If Tls is ON you can pass only FQDN as hostname. If Tls is OFF you can send either FQDN or IP address.-->
            <HostName>30.239.72.55</HostName>
            <!--Port element is optional. If not included port will be set based on TLS value (25 for OFF and 587 for ON).-->
            <Port>8726</Port>
            <Priority>0</Priority>
          </OrigHost>
          <OrigHost>
            <HostName>25.231.123.32</HostName>
            <Priority>0</Priority>
          </OrigHost>
        </OrigHosts>
      </MmsMM4OrigHosts>
    </MM4>
  </Protocols>
</MmsFeature>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
  <MmsFeature>
    <MmsSettings>
      <Protocol>MM4</Protocol>
    </MmsSettings>
    <Protocols>
      <MM4>
      <Tls>OFF</Tls>
        <MmsMM4TermHosts>
          <TermHosts>
            <TermHost>
              <HostId>1</HostId>
              <HostName>206.107.248.58</HostName>
            </TermHost>
          </TermHosts>
        </MmsMM4TermHosts>
        <MmsMM4OrigHosts>
          <OrigHosts>
            <OrigHost>
              <HostName>30.239.72.55</HostName>
              <!--If port wasn't set explicitly it will not be included in response payload.-->
              <Port>8726</Port>
              <HostId>1</HostId>
              <Priority>0</Priority>
            </OrigHost>
            <OrigHost>
              <HostName>25.231.123.32</HostName>
              <HostId>2</HostId>
              <Priority>0</Priority>
            </OrigHost>
          </OrigHosts>
        </MmsMM4OrigHosts>
      </MM4>
    </Protocols>
  </MmsFeature>
</MmsFeatureResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
  <ResponseStatus>
    <ErrorCode>13606</ErrorCode>
    <Description>Messaging feature may have only one protocol assigned.</Description>
  </ResponseStatus>
</MmsFeatureResponse>

```

#### **put**

update mms feature settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<MmsFeature>
  <MmsSettings>
    <protocol>HTTP</protocol>
  </MmsSettings>
  <Protocols>
    <HTTP>
      <HttpSettings>
        <proxyPeerId>500017</proxyPeerId>
      </HttpSettings>
    </HTTP>
  </Protocols>
</MmsFeature>

```

##### Response

**200**

#### **delete**

delete mms settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms/settings {#settings}

#### **get**

Retrieve mms feature settings for sippeer

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureMmsSettingsResponse>
  <MmsSettings>
    <Protocol>MM4</Protocol>
  </MmsSettings>
</MmsFeatureMmsSettingsResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/applicationSettings {#messaging-applicationSettings}

#### **get**

Retrieve sipper application settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
  <ApplicationsSettings>
    <HttpMessagingV2AppId>4a4ca6c1-156b-4fca-84e9-34e35e2afc32</HttpMessagingV2AppId>
  </ApplicationsSettings>
</ApplicationsSettingsResponse>

```

#### **put**

Create/update/delete application settings for sippeer
<br>
Set the ApplicationsSettings value to 'REMOVE' to unassign application <br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<!--an  example of updating the applicationId-->
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<ApplicationsSettings>
  <HttpMessagingV2AppId>c3b0f805-06ab-4d36-8bf4-8baff7623398</HttpMessagingV2AppId>
</ApplicationsSettings>
<!--an  example of removing the applicationId-->
<ApplicationsSettings>
  REMOVE
</ApplicationsSettings>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
  <ApplicationsSettings>
    <HttpMessagingV2AppId>c3b0f805-06ab-4d36-8bf4-8baff7623398</HttpMessagingV2AppId>
  </ApplicationsSettings>
</ApplicationsSettingsResponse>

```

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/settings {#messaging-settings}

#### **get**

Retrieve sipper messaging settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerMessagingSettingsResponse>
    <SipPeerMessagingSettings>
        <BreakOutCountries>
            <Country>CAN</Country>
            <Country>GBR</Country>
        </BreakOutCountries>
    </SipPeerMessagingSettings>
</SipPeerMessagingSettingsResponse>

```

#### **put**

create/update/delete messaging settings

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| sippeerId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerMessagingSettings>
    <BreakOutCountries>
        <Country>CAN</Country>
        <Country>GBR</Country>
    </BreakOutCountries>
</SipPeerMessagingSettings>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerMessagingSettingsResponse>
    <SipPeerMessagingSettings>
        <BreakOutCountries>
            <Country>CAN</Country>
            <Country>GBR</Country>
         </BreakOutCountries>
    </SipPeerMessagingSettings>
</SipPeerMessagingSettingsResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerMessagingSettingsResponse>
    <ResponseStatus>
        <ErrorCode>13654</ErrorCode>
        <Description>The country values '[GBR]' do not match a 3-character country code that has been approved for this account.</Description>
    </ResponseStatus>
</SipPeerMessagingSettingsResponse>

```

### /accounts/{accountId}/sites/{siteId}/inserviceNumbers {#inserviceNumbers}
Retrieves all the telephone numbers currently in service for the given site.

#### **get**

Retrieves all the telephone numbers currently in service for the given site.
<br>There are multiple parameters to search and sort the in-service numbers:
<ul>
    <li>LATA</li>
    <li>Tier</li>
    <li>Rate center</li>
    <li>Area code</li>
    <li>Npa-Nxx</li>
    <li>State</li>
    <li>City</li>
    <li>Start Date</li>
    <li>End date</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<TNs>
    <TotalCount>54</TotalCount>
    <Links>
        <first>
            <!---- SNIP ---->
        </first>
        <next>
            <!---- SNIP ---->
        </next>
    </Links>
    <TelephoneNumbers>
        <Count>3</Count>
        <TelephoneNumber>4352154855</TelephoneNumber>
                    <!---- SNIP ---->
        <TelephoneNumber>4352161523</TelephoneNumber>
    </TelephoneNumbers>
</TNs>

```

### /accounts/{accountId}/sites/{siteId}/orders {#orders}
The "orders" resource interacts with the orders assigned to a particular site of a particular account.

#### **get**

The GET method retrieves all the orders associated with the given site.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>47</TotalCount>
        <Links>
            <first>
                Link=<http://api.qa.inetwork.com/iris/accounts/12346099/sites/743/orders?page=1&size=30>;rel="first";
            </first>
            <next>
                Link=<http://api.qa.inetwork.com/iris/accounts/12346099/sites/743/orders?page=fa7bc01a-cb4d-4eae-9621-560020f45105&size=30>;rel="next";
            </next>
        </Links>
        <OrderIdUserIdDate>
            <CountOfTNs>1</CountOfTNs>
            <userId>jbm</userId>
            <lastModifiedDate>2014-01-06T19:09:44.027Z</lastModifiedDate>
            <OrderType>new_number</OrderType>
            <OrderDate>2014-01-06T19:09:43.695Z</OrderDate>
            <orderId>13c97416-9eee-4da3-aff8-ba85d1297ef2</orderId>
            <OrderStatus>COMPLETE</OrderStatus>
            <TelephoneNumberDetails>
                <States>
                    <StateWithCount>
                        <State>VA</State>
                        <Count>1</Count>
                    </StateWithCount>
                </States>
                <RateCenters>
                    <RateCenterWithCount>
                        <Count>1</Count>
                        <RateCenter>GLOUCESTER</RateCenter>
                    </RateCenterWithCount>
                </RateCenters>
                <Cities>
                    <CityWithCount>
                        <City>GLOUCESTER</City>
                        <Count>1</Count>
                    </CityWithCount>
                </Cities>
                <Tiers>
                    <TierWithCount>
                        <Tier>0</Tier>
                        <Count>1</Count>
                    </TierWithCount>
                </Tiers>
                <Vendors>
                    <VendorWithCount>
                        <VendorId>49</VendorId>
                        <VendorName>Bandwidth CLEC</VendorName>
                        <Count>1</Count>
                    </VendorWithCount>
                </Vendors>
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>

```

**404**

```xml
<Links> <first> Link=<http://api.qa.inetwork.com/iris/accounts/12346099/sites/3013/orders?page=1&size=300>;rel="first"; </first> </Links>
```

### /accounts/{accountId}/sites/{siteId}/orders/{orderid} {#orderid}
The "order id" resource interacts with specific orders from an account's site.

#### **get**

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<OrderResponse> <CompletedQuantity>1</CompletedQuantity> <CreatedByUser>jbm</CreatedByUser> <LastModifiedDate>2014-01-06T19:09:44.027Z</LastModifiedDate> <OrderCompleteDate>2014-01-06T19:09:44.041Z</OrderCompleteDate> <Order> <CustomerOrderId>123456789</CustomerOrderId> <Name>Area Code Order</Name> <OrderCreateDate>2014-01-06T19:09:43.695Z</OrderCreateDate> <PeerId>303716</PeerId> <siteId>743</siteId> <BackOrderRequested>false</BackOrderRequested> <AreaCodeSearchAndOrderType> <AreaCode>804</AreaCode> <Quantity>1</Quantity> </AreaCodeSearchAndOrderType> <PartialAllowed>true</PartialAllowed> <SiteId>743</SiteId> </Order> <OrderStatus>COMPLETE</OrderStatus> <CompletedNumbers> <TelephoneNumber> <FullNumber>8042105666</FullNumber> </TelephoneNumber> </CompletedNumbers> <FailedQuantity>0</FailedQuantity> </OrderResponse>
```

### /accounts/{accountId}/sites/{siteId}/orders/{orderid}/tns {#tns}
Retrieves the Telephone Numbers associated by the given order ID

#### **get**

Retrieves the Telephone Numbers associated by the given order ID

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<TelephoneNumbers>
    <Count>1</Count>
    <TelephoneNumber>8042105666</TelephoneNumber>
</TelephoneNumbers>

```

### /accounts/{accountId}/sites/{siteId}/portins {#portins}
Retrieves the port-in requests for the given site ID.

#### **get**

Retrieves the port-in requests for the given site ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<LNPResponseWrapper>
    <TotalCount>7</TotalCount>
    <Links>
        <first>
            <! --- SNIP --- >
        </first>
        <next>
            <! --- SNIP --- >
        </next>
    </Links>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>1</CountOfTNs>
        <userId>jbm</userId>
        <OrderId>ca8065d1-ec1a-43da-af40-1dcee43becb5</OrderId>
        <OrderType>port_in</OrderType>
        <BillingTelephoneNumber>9192803466</BillingTelephoneNumber>
        <lastModifiedDate>2014-05-20T14:43:19.222Z</lastModifiedDate>
        <LNPLosingCarrierId>1537</LNPLosingCarrierId>
        <LNPLosingCarrierName>Mock Carrier</LNPLosingCarrierName>
        <OrderDate>2014-05-20T14:43:32.828Z</OrderDate>
        <ProcessingStatus>CANCELLED</ProcessingStatus>
        <RequestedFOCDate>2015-05-15T20:00:00.000Z</RequestedFOCDate>
        <VendorId>49</VendorId>
        <VendorName>Bandwidth CLEC</VendorName>
    </lnpPortInfoForGivenStatus>
</LNPResponseWrapper>

```

### /accounts/{accountId}/sites/{siteId}/totaltns {#totaltns}

#### **get**

Retrieve count of Telephone numbers for the indicated site

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| siteId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteTNsResponse>
    <SiteTNs>
        <TotalCount>26</TotalCount>
    </SiteTNs>
</SiteTNsResponse>

```

### /accounts/{accountId}/subscriptions {#subscriptions}
The *+subscriptions+* resource is used to create e-mail or callback subscriptions. The subscriptions will notify the user about events
concerning specific orders, orders of a specific type or specific event type.<br>
E-mail subscriptions can be configured to send emails immediately after an event occurred or on daily basis as a digest with all events
of the previous day. Callback notifications will always be sent immediately.
Notified states for order types:
<table style = "width 100%">
              <tr>
                 <td><b>Order type</b></td>
                 <td><b>Notified states</b></td>
              </tr>
              <tr>
                 <td>portins</td>
                 <td>PENDING&#95;DOCUMENTS, SUBMITTED, FOC, REQUESTED&#95;SUPP, COMPLETE, CANCELLED, EXCEPTION, REQUESTED&#95;CANCEL</td>
              </tr>
              <tr>
                 <td>orders</td>
                 <td>COMPLETE, PARTIAL, BACKORDERED, FAILED</td>
              </tr>
              <tr>
                 <td>portouts</td>
                 <td>COMPLETE (NEW, MODIFY, CANCELLED, VALIDATION&#95;FAILED&#95;NEW, VALIDATION&#95;FAILED&#95;SUPP, VALIDATION&#95;FAILED&#95;MODIFY, EXCEPTION, SOA&#95;PENDING, SOA&#95;CONFLICT for admin users)</td>
              </tr>
              <tr>
                 <td>disconnects</td>
                 <td>COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>dldas</td>
                 <td>RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>lsrorders</td>
                 <td>PENDING, FOC, EXCEPTION, COMPLETE, CANCELLED, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>e911s</td>
                 <td>RECEIVED, PROCESSING, COMPLETE, ADJUSTED&#95;COMPLETE, PARTIAL, ADJUSTED&#95;PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>tnoptions</td>
                 <td>RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>externalTns</td>
                 <td>COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>lidb</td>
                 <td>PROCESSING, COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>bulkPortins</td>
                 <td>DRAFT, IN_PROGRESS, NEEDS_ATTENTION, PARTIAL, COMPLETED, CANCELLED</td>
              </tr>
              <tr>
                 <td>importtnorders</td>
                 <td>PROCESSING, COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>removeImportedTnOrders</td>
                 <td>PROCESSING, COMPLETE, PARTIAL, FAILED</td>
              </tr>
              <tr>
                 <td>csrs</td>
                 <td>COMPLETE, FAILED</td>
              </tr>
           </table>
Notified events: MESSAGING_LOST
The event notifications occur when TNs in your account are impacted due to orders outside of your account. For example, a MESSAGING_LOST event is reported on a TN with hosted messaging service in your account when a port in order placed by another account on the same TN is executed. An order placed in your account to remove the TN will NOT report a MESSAGING_LOST event.

#### **get**

GET is used to retrieve all subscriptions for the account (including email and callback subscriptions).
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <Status> element will indicate if an error is being encountered when the Bandwidth Dashboard API attempts to place the callback.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <SubscriptionsResponse>
        <Subscriptions>
            <Subscription>
                <SubscriptionId>0b3aa54d-0ce5-4f5b-bd75-1c30967b197f</SubscriptionId>
                <OrderType>orders</OrderType>
                <EmailSubscription>
                    <Email>bwtest@gmail.com</Email>
                    <DigestRequested>NONE</DigestRequested>
                </EmailSubscription>
            </Subscription>
            <Subscription>
                <SubscriptionId>ddf05927-780f-4f8f-89ab-e581f52f5f20</SubscriptionId>
                <CallbackSubscription>
                    <URL>"https://company.com/iriscallback"</URL>
                    <Expiry>30000</Expiry>
                    <Status>some message containing status code and response body of last callback</Status>
                    <CallbackCredentials>
                        <BasicAuthentication>
                            <Username>iris</Username>
                        </BasicAuthentication>
                    </CallbackCredentials>
                </CallbackSubscription>
            </Subscription>
            <Subscription>
                <SubscriptionId>1b2av54d-0ce5-4f5b-bd75-1c30967b197f</SubscriptionId>
                <EventType>MESSAGING_LOST</EventType>
                <EmailSubscription>
                    <Email>bwtest@gmail.com</Email>
                    <DigestRequested>DAILY</DigestRequested>
                </EmailSubscription>
            </Subscription>
            <Subscription>
                <SubscriptionId>1cf05927-780f-4f8f-89ab-e581f52f5e12</SubscriptionId>
                <EventType>MESSAGING_LOST</EventType>
                <CallbackSubscription>
                    <URL>"https://company.com/iriscallback"</URL>
                    <Expiry>30000</Expiry>
                    <Status>some message containing status code and response body of last callback</Status>
                    <CallbackCredentials>
                        <BasicAuthentication>
                            <Username>iris</Username>
                        </BasicAuthentication>
                    </CallbackCredentials>
                </CallbackSubscription>
            </Subscription>
        </Subscriptions>
    </SubscriptionsResponse>

```

**400**

#### **post**

A POST on the /subscriptions resource is used to request a new subscription for an account.<br>
The POST creates a new e-mail or callback subscription. A well-formed POST will create a subscription resource, and return a
subscription ID as part of the location header. The ID is used to uniquely identify the subscription.
The user should submit the desired e-mail address for notifications and the frequency with which he wants to get the updates:
DAILY (for daily digests) or NONE (immediately after events). OrderId is optional. If OrderId is specified only notifications will
be sent for events related to that order. If OrderId is omitted, notifications will be sent related to events of all orders of the specified type.<br>
For email subscriptions on order status notification use a body like this:<br>
```
<Subscription>
    <OrderType> [ portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns | lidb | bulkPortins| importtnorders | removeImportedTnOrders] </OrderType> <!-- required -->
    <OrderId> [ UUID ] </OrderId> <!-- optional, if provided notifications will only be sent for events regarding this specific order, if omitted notifications regarding events for all orders of the specified type will be sent -->
    <EmailSubscription>
        <Email> [ email address] </Email>
        <DigestRequested> [ NONE | DAILY ] </DigestRequested> <!-- required -->
    </EmailSubscription>
</Subscription>
```
For email subscriptions on event notification use a body like this:<br>
```
<Subscription>
    <EventType> [ MESSAGING_LOST ] </EventType> <!-- required -->
    <EmailSubscription>
        <Email> [ email address] </Email>
        <DigestRequested> [ NONE | DAILY ] </DigestRequested> <!-- required -->
    </EmailSubscription>
</Subscription>
```
For callback subscriptions on order status notification use a body like this:<br>
```
<Subscription>
    <OrderType> [portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns | lidb | importtnorders | removeImportedTnOrders] </OrderType> <!-- same rules and values as above -->
    <OrderId> [UUID]</OrderId> <!-- same rules and value as above -->
    <CallbackSubscription>
        <URL> [valid publically addressable URL] </URL> <!-- the URL that notifications should get POSTed to, HTTPS is highly recommended -->
        <Expiry> [time in seconds] </Expiry> <!-- the number of seconds after which to expire this subscription -->
        <CallbackCredentials> <!-- optional, but recommended; these credentials will be used to when authenticating with the notification receiving server -->
            <BasicAuthentication> <!-- optional, the endpoint may be secured with BASIC auth -->
                <Username> [username] </Username> <!-- max 100 characters -->
                <Password> [password] </Password> <!-- the password will be stored encrypted and never returned via the API -->
            </BasicAuthentication>
            <!-- optional, a BASE64 encoded public key matching the notification receiving server -->
            <PublicKey>LS0tLS1CRUdJTiBDRVJUSUZJ [...] kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```
For callback subscriptions on event notification use a body like this:<br>
```
<Subscription>
    <EventType> [ MESSAGING_LOST ] </EventType> <!-- required -->
    <CallbackSubscription>
        <URL> [valid publically addressable URL] </URL> <!-- the URL that notifications should get POSTed to, HTTPS is highly recommended -->
        <Expiry> [time in seconds] </Expiry> <!-- the number of seconds after which to expire this subscription -->
        <CallbackCredentials> <!-- optional, but recommended; these credentials will be used to when authenticating with the notification receiving server -->
            <BasicAuthentication> <!-- optional, the endpoint may be secured with BASIC auth -->
                <Username> [username] </Username> <!-- max 100 characters -->
                <Password> [password] </Password> <!-- the password will be stored encrypted and never returned via the API -->
            </BasicAuthentication>
            <!-- optional, a BASE64 encoded public key matching the notification receiving server -->
            <PublicKey>LS0tLS1CRUdJTiBDRVJUSUZJ [...] kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```
The credentials used to impose security on the callbacks are defined in the <CallbackCredentials> element.  The Basic authentication is straightforward, but the <PublicKey> requires a little more explanation.  Please see the document to the left on Mutual Authentication for CallBacks.<p>
When status changes on an order that had been subscribed to with a callback subscription (order update, note added to order), the following payload
will be POSTed to the URL of the callback subscription.<br>More detail can be found in the API documentation for the fictitious endpoint /callbacks
```xml
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>portins | portouts | orders | disconnects | dldas | lsrorders | e911s| tnoptions | externalTns | lidb | importtnorders | removeImportedTnOrders </OrderType>
    <OrderId>...</OrderId>
    <!-- for order update events -->
    <Status>COMPLETE | FAILED | PARTIAL | EXCEPTION ... </Status>
    <!-- for order update events -->
    <Message>...</Message>
    <!-- for note events -->
    <Note>...</Note>
    <!-- for portins/portouts/orders/disconnects OrderTypes -->
    <CompletedTelephoneNumbers>
        <TelephoneNumber> ... </TelephoneNumber>
        <!-- ... -->
    </CompletedTelephoneNumbers>
</Notification>
```
When a event happens that had been subscribed to with a callback subscription (messaging lost, messaging gained etc.), the following payload
will be POSTed to the URL of the callback subscription.<br>More detail can be found in the API documentation for the fictitious endpoint /callbacks
```xml
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <EventType>MESSAGING_LOST</EventType>
    <CompletedTelephoneNumbers>
        <TelephoneNumber>9192345678</TelephoneNumber>
        <TelephoneNumber>9192345679</TelephoneNumber>
    </CompletedTelephoneNumbers>
</Notification>
```

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<!-- for an email subscription on order type -->
<?xml version="1.0"?>
<Subscription>
    <OrderType>portins</OrderType>
    <OrderId>e75dc861-95ed-427e-8688-976132a69549</OrderId>
    <EmailSubscription>
        <Email>newtest@gmail.com</Email>
        <DigestRequested>DAILY</DigestRequested>
    </EmailSubscription>
</Subscription>
<!-- for an email subscription on event type -->
<?xml version="1.0"?>
<Subscription>
    <EventType>MESSAGING_LOST</EventType>
    <EmailSubscription>
        <Email>newtest@gmail.com</Email>
        <DigestRequested>DAILY</DigestRequested>
    </EmailSubscription>
</Subscription>
<!-- and for a callback subscription on order type -->
<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>"http://yourhost:8080/path/to/resource"</URL>
        <User>bandwidth-dashboard-user-id</User>
        <Expiry>12000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username>superuser</Username>
                <Password>s3cure</Password>
            </BasicAuthentication>
            <PublicKey>LS0tLS1CRUdJTiBDRVJUSU [...] kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
<!-- and for a callback subscription on event type -->
<Subscription>
    <EventType>MESSAGING_LOST</EventType>
    <CallbackSubscription>
        <URL>"http://yourhost:8080/path/to/resource"</URL>
        <User>bandwidth-dashboard-user-id</User>
        <Expiry>12000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username>superuser</Username>
                <Password>s3cure</Password>
            </BasicAuthentication>
            <PublicKey>LS0tLS1CRUdJTiBDRVJUSU [...] kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>

```

##### Response

**201**

**400**

**404**

**409**

### /accounts/{accountId}/subscriptions/{subscriptionid} {#subscriptionid}
Allows to retrieve information about the specific subscription or delete the subscription.

#### **get**

Retrieves the information associated with the subscription ID.
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <status> element will indicate if an error is being encountered when the Bandwidth Dashboard API attempts to place the callback.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| subscriptionid | string | true |

##### Response

**200**

```xml
<SubscriptionsResponse>
    <Subscriptions>
        <Subscription>
            <SubscriptionId>257f9be6-2e81-47bb-afd9-b8c184e9e246</SubscriptionId>
            <OrderType>portouts</OrderType>
            <EmailSubscription>
                <Email>newtest@gmail.com</Email>
                <DigestRequested>DAILY</DigestRequested>
            </EmailSubscription>
        </Subscription>
    </Subscriptions>
</SubscriptionsResponse>
<!-- *** or *** -->
<SubscriptionsResponse>
    <Subscriptions>
        <Subscription>
            <SubscriptionId>957f9be6-2e81-47bb-afd9-b8c184e9e247</SubscriptionId>
            <EventType>MESSAGING_LOST</EventType>
            <EmailSubscription>
                <Email>newtest@gmail.com</Email>
                <DigestRequested>DAILY</DigestRequested>
            </EmailSubscription>
        </Subscription>
    </Subscriptions>
</SubscriptionsResponse>
<!-- *** or *** -->
<Subscription>
    <SubscriptionId>991a60d7-a612-48a5-a86e-326b51997cac</SubscriptionId>
    <OrderType>portins</OrderType>
    <CallbackSubscription>
        <URL>http://customer.com:8087/path/BandwidthHandler</URL>
        <Expiry>4283455101</Expiry>
        <Status>200 OK</Status>
    </CallbackSubscription>
</Subscription>
<!-- *** or *** -->
<Subscription>
    <SubscriptionId>091a60d7-a612-48a5-a86e-326b51997cad</SubscriptionId>
    <EventType>MESSAGING_LOST</EventType>
    <CallbackSubscription>
        <URL>http://customer.com:8087/path/BandwidthHandler</URL>
        <Expiry>4283455101</Expiry>
        <Status>200 OK</Status>
    </CallbackSubscription>
</Subscription>

```

#### **put**

Updates the subscription. This can be be used to update various values (expiry, email address, url, credentials...).
Note that the initial state changes for an order may happen very quickly, so subscribing to an
order once the system creates it needs to account for the fact that the initial state may be
different based on timing factors. It is recommended that the application creating the
subscription check the order status after the subscription is created to ensure the correct initial
condition. <br>
The same rules around valid or possible values as for POSTs apply.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| subscriptionid | string | true |

###### Body

**application/xml**

```xml
<Subscription> <OrderType> [portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns | importtnorders | removeImportedTnOrders] </OrderType> <OrderId> [UUID] </OrderId> <EventType> [MESSAGING_LOST] </EventType> <CallbackSubscription> <URL> [valid publically addressable URL] </URL> <Expiry> [time in seconds] </Expiry> <CallbackCredentials> <BasicAuthentication> <Username> [username] </Username> <Password> [password] </Password> </BasicAuthentication> <PublicKey> [BASE64 encoded public key] </PublicKey> </CallbackCredentials> </CallbackSubscription> </Subscription>
```

##### Response

**200**

**400**

**404**

#### **delete**

Deletes the specified subscription. Note that deleting subscriptions is only supported on a one-by-one basis.
Deleting all subscriptions associated with an order requires GETting all of those subscriptions, then deleting them one by one.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| subscriptionid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/tnoptions {#tnoptions}
The tnoptions Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to assign line features to the telephone number.This API allows the creation and observation of a <b>"TN Option"</b> work order that causes an update of a address information in a network Database. <br>

#### **get**

Retrieve a list of the TN Option orders that are associated with the account. <p>A maximum of 1,000 orders can be retrieved per request. If no date range or specific query parameter (marked by <b class="required">*</b> below) is provided, the order results will be limited to the last two years.</p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TnOptionOrders> <TotalCount>2</TotalCount> <TnOptionOrderSummary> <accountId>14</accountId> <CountOfTNs>2</CountOfTNs> <userId>jbm</userId> <lastModifiedDate>2016-01-15T12:01:14.363Z</lastModifiedDate> <OrderDate>2016-01-15T12:01:14.324Z</OrderDate> <OrderType>tn_option</OrderType> <OrderStatus>FAILED</OrderStatus> <OrderId>ddbdc72e-dc27-490c-904e-d0c11291b095</OrderId> </TnOptionOrderSummary> <TnOptionOrderSummary> <accountId>14</accountId> <CountOfTNs>3</CountOfTNs> <userId>jbm</userId> <lastModifiedDate>2016-01-15T11:22:58.969Z</lastModifiedDate> <OrderDate>2016-01-15T11:22:58.789Z</OrderDate> <OrderType>tn_option</OrderType> <OrderStatus>COMPLETE</OrderStatus> <OrderId>409033ee-88ec-43e3-85f3-538f30733963</OrderId> </TnOptionOrderSummary> </TnOptionOrders> <!-- OR --> <TnOptionOrders> <TotalCount>2</TotalCount> <TnOptionOrder> <OrderCreateDate>2016-01-15T12:01:14.324Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>ddbdc72e-dc27-490c-904e-d0c11291b095</OrderId> <LastModifiedDate>2016-01-15T12:01:14.363Z</LastModifiedDate> <ProcessingStatus>FAILED</ProcessingStatus> <TnOptionGroups> <TnOptionGroup> <NumberFormat>10digit</NumberFormat> <RPIDFormat>10digit</RPIDFormat> <RewriteUser>testUser1</RewriteUser> <CallForward>6042661720</CallForward> <CallingNameDisplay>on</CallingNameDisplay> <Protected>true</Protected> <Sms>on</Sms> <FinalDestinationURI>sip:+12345678901@1.2.3.4:5060</FinalDestinationURI> <TelephoneNumbers> <TelephoneNumber>2018551020</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>off</CallingNameDisplay> <Protected>false</Protected> <Sms>off</Sms> <TelephoneNumbers> <TelephoneNumber>2018551025</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> </TnOptionGroups> <ErrorList> <Error> <Code>5076</Code> <Description>Telephone number is not available.</Description> <TelephoneNumber>2018551025</TelephoneNumber> </Error> <Error> <Code>5076</Code> <Description>Telephone number is not available.</Description> <TelephoneNumber>2018551020</TelephoneNumber> </Error> </ErrorList> </TnOptionOrder> <TnOptionOrder> <OrderCreateDate>2016-01-15T11:22:58.789Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>409033ee-88ec-43e3-85f3-538f30733963</OrderId> <LastModifiedDate>2016-01-15T11:22:58.969Z</LastModifiedDate> <ProcessingStatus>COMPLETE</ProcessingStatus> <TnOptionGroups> <TnOptionGroup> <CallingNameDisplay>on</CallingNameDisplay> <TelephoneNumbers> <TelephoneNumber>2174101601</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>off</CallingNameDisplay> <TelephoneNumbers> <TelephoneNumber>2174101602</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>systemdefault</CallingNameDisplay> <TelephoneNumbers> <TelephoneNumber>2174101603</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> </TnOptionGroups> <ErrorList/> </TnOptionOrder> </TnOptionOrders>
```

**404**

#### **post**

Create TN Option order to assign line features to the telephone number.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TnOptionGroups</td>
      <td>A list of TnOptionGroups.</td>
    </tr>
    <tr>
      <td>TnOptionGroup</td>
      <td>Contains list of telephone numbers and set of TN options you want to assign to all TNs in the list.</td>
    </tr>
    <tr>
        <td>CustomerOrderId</td>
        <td>Optional value for Id set by customer. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.</td>
    </tr>
  </tbody>
</table>
There are TN Option values:
<ul>
<li> TelephoneNumber - [ 10digit ] </li>
<li> CallingNameDisplay - [ on | off | <i>unchanged</i> | <i>systemDefault</i> ] </li>
<li> NumberFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemDefault</i> ] </li>
<li> RPIDFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemDefault</i> ] </li>
<li> RewriteUser - [ string | <i>unchanged</i> | <i>systemDefault</i>] </li>
<li> CallForward - [ 10digit | <i>unchanged</i> | <i>systemDefault</i>] </li>
<li> Protected - [ true | false | <i>unchanged</i> | <i>systemDefault</i>] </li>
<li> Sms - [ on | off | <i>unchanged</i>] </li>
<li> FinalDestinationURI - [ string | <i>unchanged</i> | <i>systemDefault</i>] </li>
<ul>
  <li>a 10 digit telephone number, or</li>
  <li>a SIP URI ( without the sip: prefix )
    <ul>
      <li>in the form address-string@host IP:port, where </li>
      <li>the host IP is an IPv4 address in the standard numerical n.n.n.n. form, and </li>
      <li>the port is numeric, and optional</li>
      <li>containing [a-z,A-Z,0-9], with ':', '.' and '@' to delimit the components of the overall string, and</li>
      <li>less than 60 characters long.</li>
    </ul>
  </li>
</ul>
<li> NNID [ integer | <i>unchanged</i> | <i>systemDefault</i> ] </li>
<li> ESPID [ string | <i>unchanged</i> | <i>systemDefault</i> ] </li>
<li> A2pSettings </li>
<ul>
  <li>MessageClass - [ string {1,64} ] </li>
  <li>CampaignId - [ string {1,64} ] </li>
  <li>Action - [ <i>asSpecified</i> | <i>off</i> | <i>unchanged</i> | <i>systemDefault</i> ] </li>
</ul>
</ul>
Where:
  <ul>
    <li>for A2pSettings attribute</li>
    <table style="text-align: left; width: 80%;"
           border="1" cellpadding="2" cellspacing="0">
        <tbody>
        <tr>
          <th>Number attribute</th>
          <th>Action value</th>
          <th>Describe of action</th>
        </tr>
        <tr>
          <td>LongCode</td>
          <td><i>systemDefault</i></td>
          <td>Removes the per-TN A2P attributes, and it reverts to the Location/SIP Peer characteristics. Any values for Class or Campaign ID are not valid</td>
        </tr>
        <tr>
          <td>LongCode</td>
          <td><i>asSpecified</i></td>
          <td>Sets the message class and campaign ID - this is the default if unspecified</td>
        </tr>
        <tr>
          <td>LongCode</td>
          <td><i>off</i></td>
          <td>Will set the TN as a 'P' TN. Any values for Class or Campaign ID are not valid</td>
        </tr>
        <tr>
          <td>LongCode</td>
          <td><i>unchanged</i></td>
          <td>Do nothing with respect to A2P</td>
        </tr>
        <tr>
          <td>TollFree</td>
          <td><i>systemDefault</i></td>
          <td>Removes the per-TN A2P attributes, and it reverts to the Location/SIP Peer characteristics. Any values for Class or Campaign ID are not valid</td>
        </tr>
        <tr>
          <td>TollFree</td>
          <td><i>asSpecified</i></td>
          <td>Sets the message class and campaign ID - this is the default if unspecified</td>
        </tr>
        <tr>
          <td>TollFree</td>
          <td><i>off</i></td>
          <td>If the Togglz value is set to 'on' this is invalid for Toll Free telephone numbers. Any values for Class or Campaign ID in the payload are invalid. If the Togglz value is set to off this behaves like and A2P TN, where the characteristics of the TNs is set to 'P'</td>
        </tr>
        <tr>
          <td>TollFree</td>
          <td><i>unchanged</i></td>
          <td>Do nothing with respect to A2P</td>
        </tr>
        </tbody>
    </table>
    <li>for other attribute</li>
    <ul>
      <li type="square"> <i>systemDefault</i> - implies that the element profile value should be removed so that the TN changes back to the default system behavior;</li>
      <li type="square"> <i>unchanged</i> - the value should remain unchanged - implies a read before write model.</li>
      <li type="square"><u>Leaving the element out of the payload is equivalent to <i>unchanged</i>.</u></li>
    </ul>
  </ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<TnOptionOrder>
<CustomerOrderId>TnOptionOrder1</CustomerOrderId>
    <TnOptionGroups>
        <TnOptionGroup>
            <NumberFormat>10digit</NumberFormat>
            <RPIDFormat>10digit</RPIDFormat>
            <RewriteUser>testUser1</RewriteUser>
            <CallForward>6042661720</CallForward>
            <CallingNameDisplay>on</CallingNameDisplay>
            <Protected>true</Protected>
            <Sms>on</Sms>
            <FinalDestinationURI>sip:+12345678901@1.2.3.4:5060</FinalDestinationURI>
            <A2pSettings>
                <MessageClass>M</MessageClass>
                <CampaignId>campaignId010</CampaignId>
                <Action>asSpecified</Action>
            </A2pSettings>
            <TelephoneNumbers>
                <TelephoneNumber>2018551020</TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
        <TnOptionGroup>
            <CallingNameDisplay>off</CallingNameDisplay>
            <Protected>false</Protected>
            <Sms>off</Sms>
            <TelephoneNumbers>
                <TelephoneNumber>2018551025</TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
</TnOptionOrder>

```

##### Response

**201**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TnOptionOrderResponse> <TnOptionOrder> <OrderCreateDate>2016-01-15T12:01:14.324Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>ddbdc72e-dc27-490c-904e-d0c11291b095</OrderId> <LastModifiedDate>2016-01-15T12:01:14.324Z</LastModifiedDate> <ProcessingStatus>RECEIVED</ProcessingStatus> <TnOptionGroups> <TnOptionGroup> <NumberFormat>10digit</NumberFormat> <RPIDFormat>10digit</RPIDFormat> <RewriteUser>testUser1</RewriteUser> <CallForward>6042661720</CallForward> <CallingNameDisplay>on</CallingNameDisplay> <Protected>true</Protected> <Sms>on</Sms> <TelephoneNumbers> <TelephoneNumber>2018551020</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>off</CallingNameDisplay> <Protected>false</Protected> <Sms>off</Sms> <TelephoneNumbers> <TelephoneNumber>2018551025</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> </TnOptionGroups> <ErrorList/> </TnOptionOrder> </TnOptionOrderResponse>
```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TnOptionOrderResponse> <ResponseStatus> <ErrorCode>5081</ErrorCode> <Description>Number Format 'wrong' is invalid.</Description> </ResponseStatus> </TnOptionOrderResponse>
```

### /accounts/{accountId}/tnoptions/{orderid} {#orderid}
This API returns data about the specific TN Option Order specified as the resource

#### **get**

Retrieve information about a TN Option Order with specified ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TnOptionOrder> <OrderCreateDate>2016-01-15T11:22:58.789Z</OrderCreateDate> <AccountId>14</AccountId> <CreatedByUser>jbm</CreatedByUser> <OrderId>409033ee-88ec-43e3-85f3-538f30733963</OrderId> <LastModifiedDate>2016-01-15T11:22:58.969Z</LastModifiedDate> <ProcessingStatus>COMPLETE</ProcessingStatus> <TnOptionGroups> <TnOptionGroup> <CallingNameDisplay>on</CallingNameDisplay> <TelephoneNumbers> <TelephoneNumber>2174101601</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>off</CallingNameDisplay> <TelephoneNumbers> <TelephoneNumber>2174101602</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> <TnOptionGroup> <CallingNameDisplay>systemdefault</CallingNameDisplay> <FinalDestinationURI>sip:+12345678901@1.2.3.4:5060</FinalDestinationURI> <TelephoneNumbers> <TelephoneNumber>2174101603</TelephoneNumber> </TelephoneNumbers> </TnOptionGroup> </TnOptionGroups> <ErrorList/> </TnOptionOrder>
```

**404**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <TnOptionOrderReportResponse> <ResponseStatus> <Description>The resource does not exist</Description> </ResponseStatus> </TnOptionOrderReportResponse>
```

### /accounts/{accountId}/tnoptions/{orderid}/history {#history}
The history API returns the various events that have impacted the specified TN Option order.

#### **get**

Retrieve the history information associated with an order

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderid | string | true |

##### Response

**200**

**404**

### /accounts/{accountId}/tnreservation {#tnreservation}
Reserves a telephone number
.

#### **post**

Reserves a telephone number for a default time of 4 hours. A successful reservation returns a location header that can be used to retrieve the reservation at a later time.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<Reservation>
    <ReservedTn>4354770625</ReservedTn>
</Reservation>

```

##### Response

**201**

**400**

```xml
<ReservationResponse>
    <ResponseStatus>
        <ErrorCode>5041</ErrorCode>
        <Description>Reservation failed: telephone number 4354776010 is not available.</Description>
    </ResponseStatus>
</ReservationResponse>

```

### /accounts/{accountId}/tnreservation/{reservationid} {#reservationid}
Retrieves a TN reservation's information and deletes an existing reservation.

#### **get**

Retrieves a TN reservation's information.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reservationid | string | true |

##### Response

**200**

```xml
<ReservationResponse>
    <Reservation>
        <ReservationId>f342904f-b03a-4499-bac0-e8f43a2664a1</ReservationId>
        <AccountId>12346099</AccountId>
        <ReservationExpires>1492</ReservationExpires>
        <ReservedTn>4354776010</ReservedTn>
    </Reservation>
</ReservationResponse>

```

#### **delete**

Deletes a TN reservation.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| reservationid | string | true |

##### Response

**200**

### /accounts/{accountId}/users {#users}

#### **get**

Retrieves a list of users as specified by the account ID.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<?xml version="1.0"?>
<UsersResponse>
    <Users>
        <User>
            <Username>testcustomer</Username>
            <FirstName>Jane</FirstName>
            <LastName>Doe</LastName>
            <EmailAddress>janedoe@bandwidth.com</EmailAddress>
            <TelephoneNumber>9199999999</TelephoneNumber>
            <Roles>
                <Role>
                    <RoleName>ROLE_API_ORDERING</RoleName>
                    <Permissions>
                        <Permission>
                            <PermissionName>VIEW</PermissionName>
                        </Permission>
                        <Permission>
                            <PermissionName>UPDATE</PermissionName>
                        </Permission>
                    </Permissions>
                </Role>
                            <! --- SNIP --- >
                <Role>
                    <RoleName>ROLE_API_SEARCH</RoleName>
                    <Permissions>
                        <Permission>
                            <PermissionName>VIEW</PermissionName>
                        </Permission>
                    </Permissions>
                </Role>
            </Roles>
        </User>
        <User>
                            <! --- SNIP --- >
        </User>
    </Users>
</UsersResponse>

```

### /accounts/{accountId}/emergencyNotificationRecipients {#emergencyNotificationRecipients}
<p> An emergency notification recipient is someone who is notified when an emergency call is placed.
Use this endpoint to create an emergency notification recipient, or search for existing emergency notification recipients configured in your account.
Emergency notification recipients must be created prior to creation of emergency notification groups.
</p>
<p> An emergency notification recipient is not actually used until
  <ul>
    <li> the emergency notification recipient is included in an emergency notification group, and </li>
    <li> one or more emergency endpoints are associated with the emergency notification group.</li>
  </ul>
</p>

#### **post**

<p> Create a new emergency notification recipient.  <br>
URI Parameters: <b>accountId</b> - the bandwidth Dashboard account that this emergency notification recipient is to belong to </p>
<p><b>Emergency notification recipient request elements</b></p>
<table border="1" cellspacing="0" cellpadding="0" width="624">
        <tbody>
            <tr>
                <td valign="top">
                    <p>
                        <strong>Parameter</strong>
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        <strong>Description</strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Description
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A mandatory 200 character description of the Emergency Notification Recipient.  The contents of this field are freeform, but ideally should describe who is being notified and by what means.  E.g. Voice notification to building 5 front desk.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Type
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A mandatory field indicating the means by which the emergency call notification will be made.  The choices are":" EMAIL, SMS, TTS, and CALLBACK.  EMAIL sends an email to the specified email address.  SMS sends a text message to the specified telephone number.  TTS sends a voice call with a text-to-speech announcement to the specified telephone number.  CALLBACK causes invocation of a specified HTTPS URL.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EmailAddress
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        An email address that must be specified when the Type is set to EMAIL.  The value must be formatted like a valid email address.  E.g. FredJones@gmail.com.  An email address can be up to 254 characters long.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Sms TelephoneNumber
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A telephone number capable of receiving text messages that must be specified when Type is set to SMS.  Format is 10 digits":" NPANXXXXXX.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Tts TelephoneNumber
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A telephone number capable of receiving voice calls that must be specified when Type is set to TTS.  Format is 10 digits":" NPANXXXXXX.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Callback Url
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        An https URL that must be provided when Type is set to CALLBACK.
                        The URL may optionally include one or mory query parameters.  E.g. https://foo.com/bar?param=value.  The URL may be up to 256 characters.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Callback Username
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A username to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK.  The username may be up to 32 characters.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Callback Password
                    </p>
                </td>
                <td width="351" valign="top">
                    <p>
                        A password to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK.  Passwords may be up to 256 characters.  Passwords are not included in GET responses.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<!--Sample request payload for an EMAIL recipient:--> <EmergencyNotificationRecipient> <Description> Email to Bldg. 3 Front Desk </Description> <Type>EMAIL</Type> <EmailAddress>foo@bar.com</EmailAddress> </EmergencyNotificationRecipient> <!--Sample request payload for an SMS recipient:--> <EmergencyNotificationRecipient> <Description> Text message to guard shack </Description> <Type>SMS</Type> <Sms> <TelephoneNumber>2015551212</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> <!--Sample request payload for an TTS recipient:--> <EmergencyNotificationRecipient> <Description> Voice call notification to Susan Jones </Description> <Type>TTS</Type> <Tts> <TelephoneNumber>2015551212</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> <!--Sample request payload for an CALLBACK recipient:--> <EmergencyNotificationRecipient> <Description> Callback to property management system </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <Password>x23388%SLHss</Password> </Credentials> </Callback> </EmergencyNotificationRecipient>
```

##### Response

**201**

```xml
<EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate> <LastModifiedDate>2020-03-18T21:26:47.403Z</LastModifiedDate> <ModifiedByUser>jgilmore</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <!-- CallbackPassword is omitted for security --> </Credentials> </Callback> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse>
```

**400**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**403**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**409**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>An entry with an identical recipient already exists. Identifier xxx., where xxx is replaced with the emergency notification recipient Identifier of the existing entry.</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

#### **get**

<p> Retrieve a list of emergency notification recipients configured for this account. <br>
 Results can be paginated and filtered using the following query parameters. </p>
<p> <b>Query parameters: </b></p>
<p> The GET operation has no request payload, but the accountId must be specified in the URI parameter.
Results are returned by default in the order of newest to oldest modification date of the Emergency Notification Recipient.  This default order is reversed from oldest to newest when the ModifiedAfterDate query parameter is included in the query.</p>
<p>Query parameters act as filters on the data. If more than one query parameter is provided, the results will be the intersection of the results from each query parameter. In other words, the query parameters are logically ANDed.
Query parameters are appended to the end of the endpoint, separated by a '?' and in the format parameter=value.  If you wish to specify more than one query parameter, separate them using an '&' character.  The order of query parameters does not matter.  For example:
GET /accounts/{accountId}/emergencyNotificationRecipients?EnrDescription=front desk&EnrNotificationType=TTS
...will return all Emergency Notification Recipients having a description field including the string "front desk", and having a notification type of TTS.
The following query parameters are supported.  All query parameters are optional. </p>
 <table>
         <tr>
           <th>Parameter Name</th>
           <th>Example</th>
           <th>Default</th>
           <th>Usage</th>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     ModifiedAfterDate
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     ModifiedAfterDate=
                     2020-03-23T17:34:00Z
                     </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td valign="top">
                 <p>
                     Include results only for orders having order last modified date and time after the date and time specified in this parameter. Note that inclusion of this parameter reverses the default sort order of the results to ascending in date/time (i.e. from oldest to newest). If you are looking for the ModifiedBeforeDate query parameter, please see the Page parameter.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     ModifiedByUser
                 </p>
             </td>
             <td valign="top">
                 <p>
                     ModifiedByUser=jgilmore
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td valign="top">
                 <p>
                     Include results only for orders last modified by the user specified in this parameter.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrDescription
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     EnrDescription=front desk
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     A substring that will exist in all Emergency Notification Recipient Descriptions returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrNotificationType
                 </p>
             </td>
             <td valign="top">
                 <p>
                     EnrNotificationType=SMS
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     The type of notification (EMAIL, SMS, TTS, or CALLBACK) specified for Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrSmsTn
                 </p>
             </td>
             <td valign="top">
                 <p>
                     EnrSmsTn=9195551212
                 </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     The Short Message Service telephone number in all SMS type Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrTtsTn
                 </p>
             </td>
             <td valign="top">
                 <p>
                     EnrTtsTn=7045553777
                 </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td valign="top">
                 <p>
                     The Text To Speech telephone number in all TTS type Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrEmailAddress
                 </p>
             </td>
             <td valign="top">
                 <p>
                     EnrEmailAddress=
                     fred9982@gmail.com
                 </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     The email address in all EMAIL type Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrCallbackUrl
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     EnrCallbackUrl=
                     https://not.company.com
                 </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     The callback URL in all CALLBACK type Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     EnrCallbackUsername
                 </p>
             </td>
             <td valign="top">
                 <p>
                     EnrCallbackUsername=
                     jgilmore
                 </p>
             </td>
             <td valign="top">
                 <p>
                     No filter
                 </p>
             </td>
             <td valign="top">
                 <p>
                     The callback username in all CALLBACK type Emergency Notification Recipients returned.
                 </p>
             </td>
         </tr>
         <tr>
             <td valign="top">
                 <p>
                     Page
                 </p>
             </td>
             <td valign="top">
                 <p>
                     Page=
                     2020-03-15T14:00:00.000-04:00
                 </p>
             </td>
             <td valign="top">
                 <p>
                     Now
                 </p>
             </td>
             <td valign="top">
                 <p>
                     This represents the position in the data set from which you want your output to begin.  If this parameter is omitted, results will include Emergency Notification Recipients last modified on or before the current date and time.  If a date and time is provided, results will include Emergency Notification Recipients last modified on or before that date and time.  Date/time format is YYYY-MM-DDTHH:MM:SS.mmmZ, where the Z indicate UTC time, or YYYY-MM-DDTHH:MM:SS.mmm-hh:mm, where "-hh:mm" represents the local time offset, plus or minus, from UTC time.
                 </p>
             </td>
         </tr>
         <tr>
             <td  valign="top">
                 <p>
                     Size
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     Size=20
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     100
                 </p>
             </td>
             <td  valign="top">
                 <p>
                     The maximum number of Emergency Notification Recipient results to include in the response payload.  This value may be between 1 and 500.
                 </p>
             </td>
         </tr>
 </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationRecipientsResponse> <Links> <!-- The 'first' link always gets the most recent results. --> <first> -- link to first page of results -- </first> <!-- If the 'next' link is present, there are more than 'size' results. --> <!-- Use the 'next' link to fetch the next set of results. --> <next> -- link to next page of results -- </next> </Links> <EmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate> <LastModifiedDate>2020-03-18T21:26:47.403Z</LastModifiedDate> <ModifiedByUser>jgilmore</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <!-- CallbackPassword is omitted for security --> </Credentials> </Callback> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-22T12:13:25.782Z</CreatedDate> <LastModifiedDate>2020-03-22T12:13:25.782Z</LastModifiedDate> <ModifiedByUser>gfranklin</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>EMAIL</Type> <EmailAddress>fred@gmail.com</EmailAddress> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-25T17:04:53.042Z</CreatedDate> <LastModifiedDate>2020-03-25T17:04:53.042Z</LastModifiedDate> <ModifiedByUser>msimpson</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>SMS</Type> <Sms> <TelephoneNumber>12015551212</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-29T20:14:01.736Z</CreatedDate> <LastModifiedDate>2020-03-29T20:17:53.294Z</LastModifiedDate> <ModifiedByUser>lsimpson</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>TTS</Type> <Tts> <TelephoneNumber>12015551212</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> </EmergencyNotificationRecipients> </EmergencyNotificationRecipientsResponse>
```

**400**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**403**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

### /accounts/{accountId}/emergencyNotificationRecipients/{enrId} {#enrId}

#### **get**

The GET operation is used to fetch the emergency notification recipient specified by its identifier. <br>
URI parameters:
<ul>
  <li>
  <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs
  </li>
  <li>
  <b>enrId</b> - the identifier assigned to the emergency notification recipient when it was created
  </li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| enrId | string | true |

##### Response

**200**

```xml
<!--For a CALLBACK type emergency notification recipient...--> <EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate> <LastModifiedDate>2020-04-01T18:32:22.316Z</LastModifiedDate> <ModifiedByUser>jgilmore</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <!-- CallbackPassword is omitted for security --> </Credentials> </Callback> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse> <!--For an EMAIL type emergency notification recipient...--> <EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-20T14:04:28.778Z</CreatedDate> <LastModifiedDate>2020-03-20T14:04:28.778Z</LastModifiedDate> <ModifiedByUser>wchurchill</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>EMAIL</Type> <EmailAddress>fred@gmail.com</EmailAddress> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse> <!--*For an SMS type emergency notification recipient...--> <EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-28T15:45:01.371Z</CreatedDate> <LastModifiedDate>2020-03-29T18:59:42.220Z</LastModifiedDate> <ModifiedByUser>deisenhower</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>SMS</Type> <Sms> <TelephoneNumber>12015551212</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse> <!--*For a TTS type emergency notification recipient...--> <EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-30T22:14:30.443Z</CreatedDate> <LastModifiedDate>2020-03-30T22:14:30.443Z</LastModifiedDate> <ModifiedByUser>frooseveldt</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>TTS</Type> <Tts> <TelephoneNumber>12015551212</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse>
```

**403**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**404**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>The resource does not exist</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

#### **put**

<p>The PUT operation is used to replace an emergency notification recipient without changing its identifier value.  All emergency notification recipient fields must be specified, even if they are not changing.
URI parameters: The account id of the account to which the emergency notification recipient belongs.  The identifier assigned to the emergency notification recipient when it was created. </p>
<p>Emergency notification recipient request elements:</p>
<b>Description</b> - A mandatory 200 character description of the Emergency Notification Recipient.  The contents of this field are freeform, but ideally should describe who is being notified and by what means.  E.g. Voice notification to building 5 front desk.<br><br>
<b>Type</b> - A mandatory field indicating the means by which the emergency call notification will be made.  The choices are: EMAIL, SMS, TTS, and CALLBACK.  EMAIL sends an email to the specified email address.  SMS sends a text message to the specified telephone number.  TTS sends a voice call with a text-to-speech announcement to the specified telephone number.  CALLBACK causes invocation of a specified HTTPS URL.<br><br>
<b>EmailAddress</b> - An email address that must be specified when the Type is set to EMAIL.  The value must be formatted like a valid email address.  E.g. FredJones@gmail.com.  An email address can be up to 254 characters long.<br><br>
<b>Sms TelephoneNumber</b> - A telephone number capable of receiving text messages that must be specified when Type is set to SMS.  Format is 10 digits: NPANXXXXXX.<br><br>
<b>Tts TelephoneNumber</b> - A telephone number capable of receiving voice calls that must be specified when Type is set to TTS.  Format is 10 digits: NPANXXXXXX.<br><br>
<b>Callback Url</b> - An https URL that must be provided when Type is set to CALLBACK.  The URL may optionally include one or mory query parameters.  E.g. https://foo.com/bar?param=value.  The URL may be up to 256 characters.<br><br>
<b>Callback Username</b> - A username to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK.  The username may be up to 32 characters.<br><br>
<b>Callback Password</b> - A password to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK.  Passwords may be up to 256 characters.  Passwords are not included in GET responses.<br><br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| enrId | string | true |

###### Body

**application/xml**

```xml
<!--Sample request payload for an EMAIL recipient:--> <EmergencyNotificationRecipient> <Description> Email to Bldg. 3 Front Desk </Description> <Type>EMAIL</Type> <EmailAddress>foo@bar.com</EmailAddress> </EmergencyNotificationRecipient> <!--Sample request payload for an SMS recipient:--> <EmergencyNotificationRecipient> <Description> Text message to guard shack </Description> <Type>SMS</Type> <Sms> <TelephoneNumber>2015551212</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> <!--Sample request payload for an TTS recipient:--> <EmergencyNotificationRecipient> <Description> Voice call notification to Susan Jones </Description> <Type>TTS</Type> <Tts> <TelephoneNumber>2015551212</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> <!--Sample request payload for an CALLBACK recipient:--> <EmergencyNotificationRecipient> <Description> Callback to property management system </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <Password>x23388%SLHss</Password> </Credentials> </Callback> </EmergencyNotificationRecipient>
```

##### Response

**200**

```xml
<EmergencyNotificationRecipientsResponse> <EmergencyNotificationRecipient> <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier> <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate> <LastModifiedDate>2020-04-01T18:32:22.316Z</LastModifiedDate> <ModifiedByUser>jgilmore</ModifiedByUser> <Description> This is a description of the emergency notification recipient. </Description> <Type>CALLBACK</Type> <Callback> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> <!-- CallbackPassword is omitted for security --> </Credentials> </Callback> </EmergencyNotificationRecipient> </EmergencyNotificationRecipientsResponse>
```

**400**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**403**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**404**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>The resource does not exist</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**409**

#### **delete**

The DELETE operation is used to remove the emergency notification recipient specified by its identifier. <br><br>
An emergency notification recipient cannot be removed if it is still used by an emergency notification group.
 If you wish to remove an emergency notification recipient that is associated with an emergency notificaiton group, use the /account/{accountId}/emergencyNotificationGroupOrders endpoint to remove the group or modify the group to no longer use this emergency notification recipient.
URI parameters:
    <ul>
      <li>
      <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs
      </li>
      <li>
      <b>enrId</b> - the identifier assigned to the emergency notification recipient when it was created
      </li>
    </ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| enrId | string | true |

##### Response

**200**

```xml
None
```

**403**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**404**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>The resource does not exist</Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

**409**

```xml
<EmergencyNotificationRecipientsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>Emergency notification recipient with identifier xxx is being used by emergency notification group with identifier yyy. Please remove the recipient reference from the group prior to removing the recipient., where xxx is replaced by the emergency notification recipient ID and yyy is replaced by the emergency notification group ID. </Description> </ResponseStatus> </EmergencyNotificationRecipientsResponse>
```

### /accounts/{accountId}/emergencyNotificationGroupOrders {#emergencyNotificationGroupOrders}
<p> This endpoint is used to create, update, and delete emergency notification groups.
These operations are performed by submitting an order requesting that the operation be performed.
The use of an order accomplishes two things: 1) some operations on emergency notification groups can take
several minutes to complete, and the order is handled asynchronously, and 2) order history is recorded for
all changes to an emergency notification group, allowing for later querying in the event that information
about who changed what, and when, should become necessary.
</p>
<p> An emergency notification group order is used to accomplish any of the following:
  <ul>
    <li> Create a new emergency notification group and associate it with one to three emergency notification recipients </li>
    <li> Add or remove emergency notification recipients from an existing emergency notification group </li>
    <li> Remove an emergency notification group </li>
  </ul>
</p>
<p> An order to create, delete, or update an emergency notification group may only specify one emergency notification group per order. <br>
The GET operation can be used to query order history for troubleshooting purposes. <br>
Note that GET /accounts/{accountId}/emergencyNotificationGroups is used to fetch the -current- configuration of an emergency notification group. <br>
</p>

#### **post**

<p> The POST operation is used to create an order to create, update, or delete an emergency notification group. <br>
URI Parameters: <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs </p>
<p><b>Emergency notification group order request elements</b></p>
<table border="1" cellspacing="0" cellpadding="0" width="724">
        <tbody>
            <tr>
                <td valign="top">
                    <p>
                        <strong>Parameter</strong>
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        <strong>Description</strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        CustomerOrderId
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        An optional customer-defined order identifier that is stored with the Bandwidth order.  This value is opaque to Bandwidth.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        (emergency notification group) Identifier
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A mandatory identifier of the Emergency Notification Group to be deleted or updated.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        AddedEmergencyNotificationGroup
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Indicates that the order is to add an emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        DeletedEmergencyNotificationGroup
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Indicates that the order is to delete an emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        UpdatedEmergencyNotificationGroup
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Indicates that the order is to modify an emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Description
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A mandatory 200 character description of the Emergency Notification Group.
                        The contents of this field are freeform, but ideally should describe the set of endpoints
                        that are being grouped together for the purpose of having the same emergency notification recipients.  E.g. Occupants of building 5 main campus.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        AddedEmergencyNotificationRecipients
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Indicates that emergency notification recipients are being added to the emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        DeletedEmergencyNotificationRecipients
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Indicates that emergency notification recipients are being removed from the emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EmergencyNotificationRecipients
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A list of one to three emergency notification recipients being associated with this emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EmergencyNotificationRecipient
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        One of up to three emergency notification recipients belonging to this emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        (emergency notification recipient) Identifier
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        The identifier that uniquely identifies an emergency notification recipient.  This identifier was assigned when the emergency notification recipient was created.  A given emergency notification recipient may be associated with only one emergency notification group.
                    </p>
                </td>
            </tr>
        </tbody>
    </table><br><br>
    <p><b>Creating a new emergency notification group</b> <br>
    An emergency notification group must have one to three emergency notification recipients.  This means that the emergency notification recipients must be created before the emergency notification group.
    </p>
    <p><b>Deleting an emergency notification group</b> <br>
    An emergency notification group may be deleted if there are no emergency endpoints associated with the group.  Deleting an emergency notification group that is configured with emergency notification recipients will successfully delete the group, but will not delete the emergency notification recipients.
    </p>
    <p><b>Updating an emergency notification group</b> <br>
    You may remove emergency notification recipients from the emergency notification group, provided the total number remaining is at least one.
    </p>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<EmergencyNotificationGroupOrder> <CustomerOrderId>UbOxhMnp</CustomerOrderId> <AddedEmergencyNotificationGroup> <Description>JgHzUzIchD</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>c7f74671edd8410d9a4c0f8e985e0a</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>74ac30535b414d29bc36d50572f553</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>b910df3245ce4192aee052f583259f</Identifier> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </AddedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <!--Deleting an emergency notification group--> <EmergencyNotificationGroupOrder> <CustomerOrderId>JvvEOKOP</CustomerOrderId> <DeletedEmergencyNotificationGroup> <Identifier>52897b97-3592-43fe-aa3f-857cf96671ee</Identifier> </DeletedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <!--Updating an emergency notification group by changing its description--> <EmergencyNotificationGroupOrder> <ModifiedEmergencyNotificationGroup> <Identifier>38ba2379-b4e6-452b-a350-1fa524b6f75a</Identifier> <Description>new Desc</Description> </ModifiedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <!--Updating an emergency notification group by adding emergency notification recipients--> <EmergencyNotificationGroupOrder> <ModifiedEmergencyNotificationGroup> <Identifier>a6d00a2d-94ee-4ecb-9bd8-7c2dde258863</Identifier> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>d81dcc9526d54cad9dbf076c4e6461</Identifier> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </ModifiedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <!--Updating an emergency notification group by removing emergency notification recipients--> <EmergencyNotificationGroupOrder> <ModifiedEmergencyNotificationGroup> <Identifier>a97149dc-586c-419d-a054-6b3d352ea8af</Identifier> <DeletedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>ebce6adfb6e94a8a80bc16841b4697</Identifier> </EmergencyNotificationRecipient> </DeletedEmergencyNotificationRecipients> </ModifiedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder>
```

##### Response

**201**

```xml
<EmergencyNotificationGroupOrderResponse> <OrderId>900b3646-18df-4626-b237-3a8de648ebf6</OrderId> <OrderCreatedDate>2020-04-29T15:27:16.151</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <CustomerOrderId>UbOxhMnp</CustomerOrderId> <AddedEmergencyNotificationGroup> <Identifier>52897b97-3592-43fe-aa3f-857cf96671ee</Identifier> <Description>JgHzUzIchD</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>c7f74671edd8410d9a4c0f8e985e0a</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>74ac30535b414d29bc36d50572f553</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>b910df3245ce4192aee052f583259f</Identifier> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </AddedEmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse> <!--A sample 201 response to an order payload for deleting an emergency notification group looks like the following:--> <EmergencyNotificationGroupOrderResponse> <OrderId>7d424c13-f9b1-4fb5-b7c1-f9a9de5847ed</OrderId> <OrderCreatedDate>2020-04-29T15:27:16.358</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <CustomerOrderId>JvvEOKOP</CustomerOrderId> <DeletedEmergencyNotificationGroup> <Identifier>52897b97-3592-43fe-aa3f-857cf96671ee</Identifier> </DeletedEmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse> <!--A sample 201 response to an order payload for updating an emergency notification group description looks like the following:--> <EmergencyNotificationGroupOrderResponse> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <UpdatedEmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <Description> This is an updated description of the emergency notification Group. </Description> </UpdatedEmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse> <!--A sample 201 response to an order payload for updating an emergency notification group by adding emergency notification recipients looks like the following:--> <EmergencyNotificationGroupOrderResponse> <OrderId>31e4be80-e816-432e-a554-1219ed4fc5e9</OrderId> <OrderCreatedDate>2020-04-29T15:34:32.799</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <ModifiedEmergencyNotificationGroup> <Identifier>5da0859b-2af8-42a3-85dd-dad4ba5f7503</Identifier> <Description>oXHGGVKwmd</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>f2eaa7be771241af9b031584875a60</Identifier>> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </ModifiedEmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse> <!--A sample 201 response to an order payload for updating an emergency notification group by removing emergency notification recipients looks like the following:--> <EmergencyNotificationGroupOrderResponse> <OrderId>31e4be80-e816-432e-a554-1219ed4fc5e9</OrderId> <OrderCreatedDate>2020-04-29T15:34:32.799</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <ModifiedEmergencyNotificationGroup> <Identifier>5da0859b-2af8-42a3-85dd-dad4ba5f7503</Identifier> <Description>oXHGGVKwmd</Description> <DeletedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>f2eaa7be771241af9b031584875a60</Identifier>> </EmergencyNotificationRecipient> </DeletedEmergencyNotificationRecipients> </ModifiedEmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse>
```

**400**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

**403**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

**409**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

#### **get**

<p> The GET operation provides a means of fetching all of the emergency notification group order history for an account. <br>
A number of query parameters are provided to filter the results. <br>
URI Parameters: <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs </p>
<p>The GET operation has no payload, although the accountId URI parameter is mandatory and a number of optional query parameters may be added.
Results are returned by default in the order of newest to oldest creation date of the Emergency Notification Group Order. This default order is reversed from oldest to newest when the CreatedAfterDate query parameter is included in the query.
Query parameters are appended to the end of the endpoint, separated by a '?' and in the format parameter=value. If you wish to specify more than one query parameter, separate them using an '&' character. The order of query parameters does not matter. For example: <br>
GET /accounts/{accountId}/emergencyNotificationGroupOrders?EnrDescription=front desk&EnrType=SMS <br>
...will return all Emergency Notification Group Orders associated with Emergency Notification Recipients having a description field including the string "front desk" and a notification type of SMS. The results will be sorted from newest order to oldest order. <br>
This endpoint supports the following query parameters. All query parameters are optional.
<table>
        <tr>
          <th>Parameter Name</th>
          <th>Example</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CreatedAfterDate
                </p>
            </td>
            <td  valign="top">
                <p>
                    CreatedAfterDate=
                    2020-04-03T00:00:00.000-04:00
                </p>
            </td>
            <td valign="top">
                <p>
                    Results are returned in order from newest to oldest order creation date
                </p>
            </td>
            <td valign="top">
                <p>
                  Include results only for orders having order creation date and time after the date and time specified in this parameter.  Note that inclusion of this parameter reverses the default sort order of the results to ascending in date/time (i.e. from oldest to newest).  If you are looking for the CreatedBeforeDate query parameter, please see the Page parameter.  Date/time format is YYYY-MM-DDTHH:MM:SS.mmmZ, where the Z indicate UTC time, or YYYY-MM-DDTHH:MM:SS.mmm-hh:mm, where "-hh:mm" represents the local time offset, plus or minus, from UTC time.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CreatedByUser
                </p>
            </td>
            <td valign="top">
                <p>
                     CreatedByUser=catlee
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    Include results only for orders created by the user specified in this parameter.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrOperation
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrOperation=AddedEnr
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders requesting one of the following emergency notification recipient operations: AddedEnr or DeletedEnr.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    ProcessingStatus
                </p>
            </td>
            <td valign="top">
                <p>
                    ProcessingStatus=FAILED
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders having one of the following processing status values: FAILED or COMPLETED.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CustomerOrderId
                </p>
            </td>
            <td valign="top">
                <p>
                    CustomerOrderId=j3jljkd8
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders having the specified customer order id value.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EngId
                </p>
            </td>
            <td valign="top">
                <p>
                    EngId=
                    63865500-0904-46b1-9b4f-7bd237a26363
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    The Identifier of an Emergency Notification Group that was altered by an order.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EngDescription
                </p>
            </td>
            <td valign="top">
                <p>
                    EngDesription=3rd floor
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    A substring that will exist in the emergency notification group Description for all returned Emergency Notification Group Orders.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrId
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrId=
                    63865500-0904-46b1-9b4f-7bd237a26363
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Identifier of an Emergency Notification Recipient that is associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrDescription
                </p>
            </td>
            <td valign="top">
                <p>
                    EnrDescription=front desk
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    A substring that will exist in all Emergency Notification Recipient Descriptions associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrNotificationType
                </p>
            </td>
            <td valign="top">
                <p>
                    EnrNotificationType=TTS
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    The type of notification (EMAIL, SMS, TTS, or CALLBACK) specified for Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrSmsTn
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrSmsTn=3037458827
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Short Message Service telephone number in all SMS type Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrTtsTn
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrTtsTn=402288875
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Text To Speech telephone number in all TTS type Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrEmailAddress
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrEmailAddress=fred@aol.com
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The email address in all EMAIL type Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrCallbackUrl
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrCallbackUrl=
                    https://e911.callback.mycompany.com
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The callback URL in all CALLBACK type Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrCallbackUsername
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrCallbackUsername=ljames
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The callback username in all CALLBACK type Emergency Notification Recipients associated with the Emergency Notification Groups in all orders returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Page
                </p>
            </td>
            <td  valign="top">
                <p>
                    Page=2019-08-01Z
                </p>
            </td>
            <td  valign="top">
                <p>
                    Now
                </p>
            </td>
            <td  valign="top">
                <p>
                  This represents the position in the data set from which you want your output to begin.  If this parameter is omitted, results will include Emergency Notification Group Orders created on or before the current date and time.  If a date and time is provided, results will include Emergency Notification Group Orders created on or before that date and time.  Date/time format is YYYY-MM-DDTHH:MM:SS.mmmZ, where the Z indicate UTC time, or YYYY-MM-DDTHH:MM:SS.mmm-hh:mm, where "-hh:mm" represents the local time offset, plus or minus, from UTC time.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Size
                </p>
            </td>
            <td  valign="top">
                <p>
                    Size=200
                </p>
            </td>
            <td  valign="top">
                <p>
                    100
                </p>
            </td>
            <td  valign="top">
                <p>
                  The maximum number of Emergency Notification Group Order results to include in the response payload.  This value may be between 1 and 500.
                </p>
            </td>
        </tr>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationGroupOrderResponse> <Links> <first>Link=&lt;http://localhost:8080/v1.0/accounts/12346371/emergencyNotificationGroupOrders&gt;;rel="first";</first> </Links> <EmergencyNotificationGroupOrders> <EmergencyNotificationGroupOrder> <OrderId>092815dc-9ced-4d67-a070-a80eb243b914</OrderId> <OrderCreatedDate>2020-04-29T15:40:01.449Z</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>QTWeKMys</CustomerOrderId> <AddedEmergencyNotificationGroup> <Identifier>6daa55e1-e499-4cf0-9f3d-9524215f1bee</Identifier> <Description>enr test description 3</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>44f203915ca249b7b69bbc084af09a</Identifier> <Description>TestDesc SEHsbDMM</Description> <Type>SMS</Type> <Sms> <TelephoneNumber>15638765448</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </AddedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <EmergencyNotificationGroupOrder> <OrderId>89b4e0a1-2789-43fb-b948-38d368159142</OrderId> <OrderCreatedDate>2020-04-29T15:39:59.325Z</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>SDWupQpf</CustomerOrderId> <AddedEmergencyNotificationGroup> <Identifier>b49fa543-5bb3-4b9d-9213-96c8b63e77f5</Identifier> <Description>enr test description 2</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>c719e060a6ba4212a2c0642b87a784</Identifier> <Description>TestDesc zscxcAGG</Description> <Type>SMS</Type> <Sms> <TelephoneNumber>15678765448</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>93ad72dfe59c4992be6f8aa625466d</Identifier> <Description>TestDesc RTflsKBz</Description> <Type>TTS</Type> <Tts> <TelephoneNumber>17678765449</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </AddedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> <EmergencyNotificationGroupOrder> <OrderId>247d1425-4247-4b27-99d8-83ce30038b14</OrderId> <OrderCreatedDate>2020-04-29T15:39:57.058Z</OrderCreatedDate> <CreatedBy>systemUser</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>vgshuNMB</CustomerOrderId> <AddedEmergencyNotificationGroup> <Identifier>69a3d588-f314-42ca-8726-faa824bdf4be</Identifier> <Description>eng test description</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>aab78f87074940f1aaaf1c9658be4b</Identifier> <Description>enr test description</Description> <Type>EMAIL</Type> <EmailAddress>testEmail@gmail.com</EmailAddress> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>852e9eee161b4da6823c91173b05c4</Identifier> <Description>TestDesc WkHqpnNH</Description> <Type>TTS</Type> <Tts> <TelephoneNumber>15678765449</TelephoneNumber> </Tts> </EmergencyNotificationRecipient> </AddedEmergencyNotificationRecipients> </AddedEmergencyNotificationGroup> </EmergencyNotificationGroupOrder> </EmergencyNotificationGroupOrders> </EmergencyNotificationGroupOrderResponse>
```

**400**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

**403**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

### /accounts/{accountId}/emergencyNotificationGroupOrders/{orderId} {#orderId}

#### **get**

This endpoint is used to query the status of a specified emergency notification group order, using the order-id that was assigned in the 201 response to the order creation. <br>
When you query an order-id, look for the "ProcessingStatus" element in the 200 response.  Values may be: PROCESSING, COMPLETED, or FAILED.  PROCESSING means that the system is still processing the order.  Please wait a couple of minutes and fetch the order results again.  COMPLETED means that the order has been successfully completed.  FAILED means that errors occurred while processing the order, and that the order did not make any changes to the system.  Look for the "ErrorList" element to see what type of error occurred. <br>
URI parameters:
<ul>
  <li>
  <b>accountId</b> - the account id of the account to which the emergency notification group order belongs.
  </li>
  <li>
  <b>orderId</b> - the order identifier assigned to the emergency notification group order when it was created.
  </li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationGroupOrderResponse> <EmergencyNotificationGroup> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <AddedEmergencyNotificationGroup> <EmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <Description>Building 5, 5th Floor.</Description> <AddedEmergencyNotificationRecipients> <EmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <Description>Building 5 front desk email</Description> <Type>EMAIL</Type> <EmailAddress>Bldg5Reception@company.com</EmailAddress> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>ef47eb61-e3b1-449d-834b-0fbc5a11da30</Identifier> <Description>Building 5 5th floor responder text</Description> <Type>SMS</Type> <Sms> <TelephoneNumber>12124487782</TelephoneNumber> </Sms> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>c9a2f068-e1b0-4454-9c0b-74c4113f6141</Identifier> <Description>Callback for MyCompany</Description> <Type>CALLBACK</Type> <Url>https://foo.bar/baz</Url> <Credentials> <Username>jgilmore</Username> </Credentials> </EmergencyNotificationRecipient> </EmergencyNotificationRecipients> <AddedEmergencyNotificationRecipients> <ErrorList /> <EmergencyNotificationGroup> <AddedEmergencyNotificationGroup> </EmergencyNotificationGroup> </EmergencyNotificationGroupOrderResponse>
```

**403**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

**404**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

### /accounts/{accountId}/emergencyNotificationGroups {#emergencyNotificationGroups}
<p> This endpoint provides a way to fetch current emergency notification groups configured on
the account, including various ways to filter the results.  This endpoint examines the current configuration.  If you are interested in emergency notification group order history, use the /accounts/{accountId}/emergencyNotificationGroupOrders endpoint.
</p>

#### **get**

<p> Fetch emergency notification groups that are currently configured on the account.  Use the provided query parameters to filter the results. <br>
URI Parameters: <b>accountId</b> - the account id of the account to which the emergency notification group belongs </p>
<p><b>Query parameters:</b><br>
The GET operation has no request payload, but the accountId must be specified in the URI parameter.
Results are returned by default in the order of newest to oldest modification date of the Emergency Notification Group.  This default order is reversed from oldest to newest when the ModifiedAfterDate query parameter is included in the query.
Query parameters act as filters on the data. If more than one query parameter is provided, the results will be the intersection of the results from each query parameter. In other words, the query parameters are logically ANDed.
Query parameters are appended to the end of the endpoint, separated by a '?' and in the format parameter=value.  If you wish to specify more than one query parameter, separate them using an '&' character.
  The order of query parameters does not matter.  For example: <br>
GET /accounts/{accountId}/emergencyNotificationGroups?EngDescription=Bldg 200&EnrEmailAddress=gateSecurity@mycompany.com <br>
...will return all Emergency Notification Groups having a description field including the string "Bldg 200", and having an emergency notification recipient with the specified email address. <br>
The following query parameters are supported.  All query parameters are optional.
</p>
<table>
        <tr>
          <th>Parameter Name</th>
          <th>Example</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EngDescription
                </p>
            </td>
            <td  valign="top">
                <p>
                    EngDescription=Building 4
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                  A substring that will exist in the Description for all returned Emergency Notification Groups.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrId
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrId=
                    63865500-0904-46b1-9b4f-7bd237a26363
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Identifier of an Emergency Notification Recipient that is associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrDescription
                </p>
            </td>
            <td valign="top">
                <p>
                    EnrDescription=front desk
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    A substring that will exist in all Emergency Notification Recipient Descriptions associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EnrNotificationType
                </p>
            </td>
            <td valign="top">
                <p>
                    EnrNotificationType=TTS
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    The type of notification (EMAIL, SMS, TTS, or CALLBACK) specified for Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrSmsTn
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrSmsTn=3037458827
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Short Message Service telephone number in all SMS type Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrTtsTn
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrTtsTn=402288875
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The Text To Speech telephone number in all TTS type Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrEmailAddress
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrEmailAddress=fred@aol.com
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The email address in all EMAIL type Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrCallbackUrl
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrCallbackUrl=
                    https://e911.callback.mycompany.com
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The callback URL in all CALLBACK type Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrCallbackUsername
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrCallbackUsername=ljames
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    The callback username in all CALLBACK type Emergency Notification Recipients associated with the Emergency Notification Groups returned.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    EnrDetails
                </p>
            </td>
            <td  valign="top">
                <p>
                    EnrDetails=true
                </p>
            </td>
            <td  valign="top">
                <p>
                    false
                </p>
            </td>
            <td  valign="top">
                <p>
                    If set to true, the results will include full details about each Emergency Notification Recipient associated with the Emergency Notification Groups satisfying the query.  Otherwise, only Emergency Notification Recipient identifiers are included.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Page
                </p>
            </td>
            <td  valign="top">
                <p>
                    Page=2020-04-07T00:00:00Z
                </p>
            </td>
            <td  valign="top">
                <p>
                    Now
                </p>
            </td>
            <td  valign="top">
                <p>
                  This represents the position in the data set from which you want your output to begin.  If this parameter is omitted, results will include Emergency Notification Groups last modified on or before the current date and time.  If a date and time is provided, results will include Emergency Notification Groups last modified on or before that date and time.  Date/time format is YYYY-MM-DDTHH:MM:SS.mmmZ, where the Z indicate UTC time, or YYYY-MM-DDTHH:MM:SS.mmm-hh:mm, where "-hh:mm" represents the local time offset, plus or minus, from UTC time.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Size
                </p>
            </td>
            <td  valign="top">
                <p>
                    Size=10
                </p>
            </td>
            <td  valign="top">
                <p>
                    100
                </p>
            </td>
            <td  valign="top">
                <p>
                  The maximum number of Emergency Notification Group results to include in the response payload.  This value may be between 1 and 500.
                </p>
            </td>
        </tr>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationGroupsResponse> <Links> <!-- The 'first' link always gets the most recent results. --> <first> -- link to first page of results -- </first> <!-- If the 'next' link is present, there are more than 'size' results. --> <!-- Use the 'next' link to fetch the next set of results. --> <next> -- link to next page of results -- </next> </Links> <EmergencyNotificationGroups> <EmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <CreatedDate>2020-01-23T18:34:17.284Z</CreatedDate> <ModifiedBy>jgilmore</ModifiedBy> <ModifiedDate>2020-01-23T18:34:17.284Z</ModifiedDate> <Description>This is a description of the emergency notification group.</Description> <EmergencyNotificationRecipients> <!-- Specify the 'EnrDetails' query parameter to see full details for the emergency notification recipients --> <EmergencyNotificationRecipient> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>ef47eb61-e3b1-449d-834b-0fbc5a11da30</Identifier> </EmergencyNotificationRecipient> </EmergencyNotificationRecipients> </EmergencyNotificationGroup> <EmergencyNotificationGroup> <Identifier>29477382-23947-23c-2349-aa8238b22743</Identifier> <CreatedDate>2020-01-23T18:36:51.987Z</CreatedDate> <ModifiedBy>jgilmore</ModifiedBy> <ModifiedDate>2020-01-23T18:36:51.987Z</ModifiedDate> <Description>This is a description of the emergency notification group.</Description> <EmergencyNotificationRecipients> <!-- Specify the 'EnrDetails' query parameter to see full details for the emergency notification recipients --> <EmergencyNotificationRecipient> <Identifier>37742335-8722-3abc-8722-e2434f123a4d</Identifier> </EmergencyNotificationRecipient> </EmergencyNotificationRecipients> </EmergencyNotificationGroup> </EmergencyNotificationGroups> </EmergencyNotificationGroupsResponse>
```

**400**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

**403**

```xml
<EmergencyNotificationGroupOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationGroupOrderResponse>
```

### /accounts/{accountId}/emergencyNotificationGroups/{engId} {#engId}

#### **get**

This endpoint allows you to fetch the configuration of a current emergency notification group by identifier.
URI parameters:
<ul>
  <li>
  <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs.
  </li>
  <li>
  <b>engId</b> - the emergency notification group identifier assigned to the emergency notification group when it was created.
  </li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| engId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationGroupsResponse> <EmergencyNotificationGroup> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> <CreatedDate>2020-01-23T18:34:17.284Z</CreatedDate> <ModifiedBy>jgilmore</ModifiedBy> <ModifiedDate>2020-01-23T18:34:17.284Z</ModifiedDate> <Description>This is a description of the emergency notification group.</Description> <EmergencyNotificationRecipients> <EmergencyNotificationRecipient> <Identifier>63865500-0904-46b1-9b4f-7bd237a26363</Identifier> </EmergencyNotificationRecipient> <EmergencyNotificationRecipient> <Identifier>ef47eb61-e3b1-449d-834b-0fbc5a11da30</Identifier> </EmergencyNotificationRecipient> </EmergencyNotificationRecipients> </EmergencyNotificationGroup> </EmergencyNotificationGroupsResponse>
```

**403**

```xml
<EmergencyNotificationGroupsResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationGroupsResponse>
```

**404**

```xml
<EmergencyNotificationGroupsResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>The resource does not exist</Description> </ResponseStatus> </EmergencyNotificationGroupsResponse>
```

### /accounts/{accountId}/emergencyNotificationEndpointOrders {#emergencyNotificationEndpointOrders}
<p> This endpoint allows you to create an order to associate or dissociate emergency endpoints and an emergency notification group.  This is the last step in setting up your emergency notifications.  The first step was creating emergency notification recipients.  The seconds step was creating emergency notification groups and associating them with emergency notification recipients.  The third and final step is associating emergency endpoints with emergency notification groups. <br><br>
    This endpoint is used to add and delete emergency endpoints to/from an emergency notification group.  These operations are performed by submitting an order requesting that the operation be performed.  The use of an order accomplishes two things: 1) some operations on emergency notification groups can take several minutes to complete, and the order is handled asynchronously, and 2) order history is recorded for all changes to an emergency notification group, allowing for later querying in the event that information about who changed what, and when, should become necessary.
</p>
<p> An emergency notification endpoint order is used to accomplish either of the following::
  <ul>
    <li> Add one or more existing emergency endpoints (either TN or AEUI) to an existing emergency notification group </li>
    <li> Remove one or more existing emergency endpoints (either TN or AEUI) from an existing emergency notification group </li>
  </ul>
</p>
<p> An order to associate or dissociate emergency endpoints to/from an emergency notification group may only specify one emergency notification group per order. <br>
    The GET operation can be used to query order history for troubleshooting purposes.<br>
    Note that GET /accounts/{accountId}/emergencyNotificationGroups is used to fetch the -current- configuration of an emergency notification group.  You may also query TNs or AEUIs to see if they are associated with an emergency notification group.
</p>

#### **post**

<p> The POST operation creates a new order to request that an emergency endpoint be added to or removed from an emergency notification group.  A given order may either add or remove associations, not both in one order.<br>
    If the order is successfully created, a 201 response is returned, including an order-id that is used to query for completion of the order. <br>
    The order's ProcessingStatus is set to PROCESSING when the request is successfully created.  When processing of all emergency endpoint to emergency notification group associations has been attempted, the software
    will update the order's processing status to either COMPLETED or FAILED. <br>
URI Parameters: <b>accountId</b> - the account id of the account to which the emergency endpoints and emergency notification groups are configured. </p>
<p><b>The emergency notification endpoint order includes the following payload elements:</b></p>
<table border="1" cellspacing="0" cellpadding="0" width="724">
        <tbody>
            <tr>
                <td valign="top">
                    <p>
                        <strong>Parameter</strong>
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        <strong>Description</strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        CustomerOrderId
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        An optional customer-defined order identifier that is stored with the Bandwidth order.  This value is opaque to Bandwidth.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EmergencyNotificationGroup Identifier
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        The mandatory identifier that uniquely identifies the emergency notification group to which emergency endpoints are being associated.  This value is assigned by the system when the emergency notification group is created.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        AddedAssociations
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Included when emergency endpoint to emergency notification group associations are to be created.  Only AddedAssociations or Deleted Associations may be included in a given order.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        DeletedAssociations
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Included when emergency endpoint to emergency notification group associations are to be removed.  Only AddedAssociations or Deleted Associations may be included in a given order.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EepToEngAssociations
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        Mandatory container for the list of TNs and AEUI identifiers to be associated or dissociated with the emergency notification group.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EepTns
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A container of emergency endpoints that are of type TN.  This element may be omitted if none of the emergency endpoints to be associated or dissociated are telephone numbers.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        TelephoneNumber
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A 10-digit telephone number representing an emergency endpoint in the ListOfEepTns.  The list may consist of a single TN if desired.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        EepAeuiIds
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A container of emergency endpoints that are of type AEUI.  This element may be omitted if none of the emergency endpoints to be associated or dissociated are Alternate End User Identities.
                    </p>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p>
                        Identifier
                    </p>
                </td>
                <td width="451" valign="top">
                    <p>
                        A unique identifier for the AEUI representing an emergency endpoint in the ListOfEepAeuiIds.  The list may consist of a single AEUI ID if desired.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

###### Body

**application/xml**

```xml
<EmergencyNotificationEndpointOrder> <CustomerOrderId>ALG-31233884</CustomerOrderId> <EmergencyNotificationEndpointAssociations> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <AddedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>2248838829</TelephoneNumber> <TelephoneNumber>4052397735</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Fred992834</Identifier> <Identifier>Bob00359</Identifier> </EepAeuiIds> </EepToEngAssociations> </AddedAssociations> </EmergencyNotificationEndpointAssociations> </EmergencyNotificationEndpointOrder> <!--The payload for creating an order to remove emergency endpoint associations from an emergency notification group looks like the following:--> <EmergencyNotificationEndpointAssociation> <CustomerOrderId>ALG-31233885</CustomerOrderId> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <DeletedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>2248838829</TelephoneNumber> <TelephoneNumber>4052397735</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Fred992834</Identifier> <Identifier>Bob00359</Identifier> </EepAeuiIds> </EepToEngAssociations> </DeletedAssociations> </EmergencyNotificationEndpointAssociation>
```

##### Response

**201**

```xml
<!--The 201 response payload for creating an order to add emergency endpoint associations to an emergency notification group--> <EmergencyNotificationEndpointOrderResponse> <EmergencyNotificationEndpointOrder> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <EmergencyNotificationEndpointAssociations> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <!-- If the order created emergency endpoint to emergency notification group associations --> <AddedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>2248838829</TelephoneNumber> <TelephoneNumber>4052397735</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Fred992834</Identifier> <Identifier>Bob00359</Identifier> </EepAeuiIds> </EepToEngAssociations> <ErrorList /> </AddedAssociations> </EmergencyNotificationEndpointAssociations> </EmergencyNotificationEndpointOrder> </EmergencyNotificationEndpointOrderResponse> <!--The 201 response payload for creating an order to remove emergency endpoint associations from an emergency notification group--> <EmergencyNotificationEndpointOrderResponse> <EmergencyNotificationEndpointAssociation> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>PROCESSING</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <!-- If the order removed emergency endpoint to emergency notification group associations --> <DeletedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>9152877649</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Sally88744</Identifier> </EepAeuiIds> </EepToEngAssociations> <ErrorList /> </DeletedAssociations> </EmergencyNotificationEndpointAssociation> </EmergencyNotificationEndpointOrderResponse>
```

**400**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

**403**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

**409**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

#### **get**

<p> The GET operation provides a means to query any Emergency Notification Endpoint Order associated with the account. This endpoint is for querying "orders", not the emergency endpoint to emergency notification group associations themselves. <br>
URI Parameters: <b>accountId</b> - the account id of the account to which the emergency notification recipient belongs. </p>
<p>The GET operation has no payload, although the accountId URI parameter is mandatory and a number of optional query parameters may be added. The query parameters are described in this section.
   Results are returned by default in the order of newest to oldest creation date of the Emergency Notification Endpoint Order. This default order is reversed from oldest to newest when the CreatedAfterDate query parameter is included in the query.
   Query parameters act as filters on the data. If more than one query parameter is provided, the results will be the intersection of the results from each query parameter. In other words, the query parameters are logically ANDed.
   Query parameters are appended to the end of the endpoint, separated by a '?' and in the format parameter=value. If you wish to specify more than one query parameter, separate them using an '&' character. The order of query parameters does not matter. For example:<br>
   GET /accounts/{accountId}/emergencyNotificationEndpointOrders?EngDescription=3rd Floor&EndpointOperation=Dissociated <br>
   ...will return all Emergency Notification Endpoint Orders associated with Emergency Notification Groups having a description field including the string "3rd Floor" and where endpoints were dissociated from emergency notification groups. The results will be sorted from newest order to oldest order.<br>
    This endpoint supports the following query parameters. All query parameters are optional.
</p>
<table>
        <tr>
          <th>Parameter Name</th>
          <th>Example</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CreatedAfterDate
                </p>
            </td>
            <td  valign="top">
                <p>
                    CreatedAfterDate=
                    2020-03-30T14:00:00Z
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                  Include results only for orders having order creation date and time after the date and time specified in this parameter.  Note that inclusion of this parameter reverses the default sort order of the results to ascending in date/time (i.e. from oldest to newest).  If you are looking for the CreatedBeforeDate query parameter, please see the Page parameter.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CreatedByUser
                </p>
            </td>
            <td valign="top">
                <p>
                     CreatedByUser=catlee
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    Include results only for orders created by the user specified in this parameter.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    ProcessingStatus
                </p>
            </td>
            <td valign="top">
                <p>
                    ProcessingStatus=FAILED
                </p>
            </td>
            <td  valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders having one of the following processing status values: FAILED or COMPLETED.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    CustomerOrderId
                </p>
            </td>
            <td valign="top">
                <p>
                    CustomerOrderId=j3jljkd8
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders having the specified customer order id value.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EngId
                </p>
            </td>
            <td valign="top">
                <p>
                    EngId=
                    63865500-0904-46b1-9b4f-7bd237a26363
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    The Identifier of an Emergency Notification Group that was altered by an order.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EngDescription
                </p>
            </td>
            <td valign="top">
                <p>
                    EngDesription=3rd floor
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    A substring that will exist in the emergency notification group Description for all returned Emergency Notification Endpoint Orders.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EepTns
                </p>
            </td>
            <td  valign="top">
                <p>
                    EepTns=404
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td  valign="top">
                <p>
                    Include results only for orders having EepTns that start with the specified digit string.  The digit string may be from 1 to 10 digits.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    EepAeuiIds
                </p>
            </td>
            <td valign="top">
                <p>
                    EepAeuiIds=Joe
                </p>
            </td>
            <td valign="top">
                <p>
                    No filter
                </p>
            </td>
            <td valign="top">
                <p>
                    Include results only for orders having EepAeuiIds that start with the specified character string.  The string may be from 1 to 30 characters.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Page
                </p>
            </td>
            <td  valign="top">
                <p>
                    Page=2019-08-01Z
                </p>
            </td>
            <td  valign="top">
                <p>
                    Now
                </p>
            </td>
            <td  valign="top">
                <p>
                  This represents the position in the data set from which you want your output to begin.  If this parameter is omitted, results will include Emergency Notification Endpoint Orders created on or before the current date and time.  If a date and time is provided, results will include Emergency Notification Endpoint Orders created on or before that date and time.  Date/time format is YYYY-MM-DDTHH:MM:SS.mmmZ, where the Z indicate UTC time, or YYYY-MM-DDTHH:MM:SS.mmm-hh:mm, where "-hh:mm" represents the local time offset, plus or minus, from UTC time.
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    Size
                </p>
            </td>
            <td  valign="top">
                <p>
                    Size=5
                </p>
            </td>
            <td  valign="top">
                <p>
                    100
                </p>
            </td>
            <td  valign="top">
                <p>
                  The maximum number of Emergency Notification Endpoint Order results to include in the response payload.  This value may be between 1 and 500.
                </p>
            </td>
        </tr>
</table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationEndpointOrderResponse> <Links> <!-- The 'first' link always gets the first set of matching results. --> <first> -- link to first page of results -- </first> <!-- If the 'next' link is present, there are more than 'size' results. --> <!-- Use the 'next' link to fetch the next set of results. --> <next> -- link to next page of results -- </next> </Links> <EmergencyNotificationEndpointOrders> <EmergencyNotificationEndpointOrder> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <EmergencyNotificationEndpointAssociations> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <!-- If the order created emergency endpoint to emergency notification group associations --> <AddedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>2248838829</TelephoneNumber> <TelephoneNumber>4052397735</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Fred992834</Identifier> <Identifier>Bob00359</Identifier> </EepAeuiIds> </EepToEngAssociations> <ErrorList /> </AddedAssociations> </EmergencyNotificationEndpointAssociations> </EmergencyNotificationEndpointOrder> <EmergencyNotificationEndpointOrder> <!-- Snip --> </EmergencyNotificationEndpointOrder> <EmergencyNotificationEndpointOrder> <!-- Snip --> </EmergencyNotificationEndpointOrder> </EmergencyNotificationEndpointOrders> </EmergencyNotificationEndpointOrderResponse>
```

**400**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>A description of what went wrong.</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

**403**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

### /accounts/{accountId}/emergencyNotificationEndpointOrders/{orderId} {#orderId}

#### **get**

This endpoint is used to fetch the status of an emergency notification endpoint order, using the order-id assigned when the order was created. <br>
If the order is still being processed, the ProcessingStatus will be PROCESSING.  If the order has completed successfully, the ProcessingStatus will be COMPLETED.  Otherwise the ProcessingStatus will be FAILED.  If the ProcessingStatus is FAILED, look for the ErrorList in the payload to see reasons for the failure.
URI parameters:
<ul>
  <li>
  <b>accountId</b> - the account id of the account to which the emergency notification endpoint order belongs.
  </li>
  <li>
  <b>orderId</b> - the order-id assigned to the emergency notification endpoint order when it was created.
  </li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| accountId | string | true |
| orderId | string | true |

##### Response

**200**

```xml
<EmergencyNotificationEndpointOrderResponse> <EmergencyNotificationEndpointOrder> <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId> <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate> <CreatedBy>jgilmore</CreatedBy> <ProcessingStatus>COMPLETED</ProcessingStatus> <CustomerOrderId>ALG-31233884</CustomerOrderId> <EmergencyNotificationEndpointAssociations> <EmergencyNotificationGroup> <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier> </EmergencyNotificationGroup> <AddedAssociations> <EepToEngAssociations> <EepTns> <TelephoneNumber>2248838829</TelephoneNumber> <TelephoneNumber>4052397735</TelephoneNumber> </EepTns> <EepAeuiIds> <Identifier>Fred992834</Identifier> <Identifier>Bob00359</Identifier> </EepAeuiIds> </EepToEngAssociations> <ErrorList /> </AddedAssociations> </EmergencyNotificationEndpointAssociations> </EmergencyNotificationEndpointOrder> </EmergencyNotificationEndpointOrderResponse>
```

**403**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>1001</ErrorCode> <Description>Access Denied </Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

**404**

```xml
<EmergencyNotificationEndpointOrderResponse> <ResponseStatus> <ErrorCode>nnnn</ErrorCode> <Description>The resource does not exist</Description> </ResponseStatus> </EmergencyNotificationEndpointOrderResponse>
```

## /tns
Telephone Numbers (TNs) are similarly central to Bandwidth Dashboard API provisioning.  TNs can be queried on a system-wide basis, returning information based on a wide range of search parameters.<br> The results will be restricted to the account(s) that the requesting user has access to.

### /tns {#tns}

#### **get**

Retrieve information about one or more Telephone Numbers (TNs), where the TNs are chosen based on the search parameters provided in the API Call.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

##### Response

**200**

```xml
<?xml version="1.0"?>
<TelephoneNumbersResponse>
    <TelephoneNumberCount>5</TelephoneNumberCount>
    <Links>
        <first>Link=&lt;https://dashboard.bandwidth.com:443/v1.0/tns?account=9500012&amp;page=1&amp;size=500&gt;;rel="first";</first>
        <next>Link=&lt;https://dashboard.bandwidth.com:443/v1.0/tns?account=9500012&amp;page=2012082912&amp;size=500&gt;;rel="next";</next>
    </Links>
    <TelephoneNumbers>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381138</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900008</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381139</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900000</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381141</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900000</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381142</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900000</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381144</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Aging</Status>
            <AccountId>753</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersResponse>
    <ResponseStatus>
        <ErrorCode>15511</ErrorCode>
        <Description>The NPA_NXX '9192384' is invalid</Description>
    </ResponseStatus>
</TelephoneNumbersResponse>

```

#### **post**

Retrieve information about one or more Telephone Numbers (TNs), where the TNs are specified in POST body.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

###### Body

**application/xml**

```xml
<TnList>
    <Tn>3172000285</Tn>
    <Tn>3172000207</Tn>
    <Tn>3172000000</Tn>
    <Tn>3172000100</Tn>
    <Tn>3172110285</Tn>
    <Tn>3172100285</Tn>
    <Tn>99999999999</Tn>
    <Tn>111111111111</Tn>
</TnList>

```

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersResponse>
    <TelephoneNumberCount>4</TelephoneNumberCount>
    <Links>
        <first>Link=&lt;http://localhost:8080/v1.0/tns&gt;;rel="first";</first>
    </Links>
    <TelephoneNumbers>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000000</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Available</Status>
            <AccountId>753</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000500</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Aging</Status>
            <AccountId>14</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000100</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Available</Status>
            <AccountId>753</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000207</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Available</Status>
            <AccountId>753</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000285</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Available</Status>
            <AccountId>753</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
    </TelephoneNumbers>
    <ErrorList>
        <Error>
            <Code>15608</Code>
            <Description>Input contains invalid Telephone Numbers</Description>
            <TelephoneNumbers>
                <TelephoneNumber>111111111111</TelephoneNumber>
                <TelephoneNumber>99999999999</TelephoneNumber>
            </TelephoneNumbers>
        </Error>
        <Error>
            <Code>15610</Code>
            <Description>Telephone Numbers cannot be found on accounts</Description>
            <TelephoneNumbers>
                <TelephoneNumber>3172110285</TelephoneNumber>
                <TelephoneNumber>3172100285</TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </ErrorList>
</TelephoneNumbersResponse>

```

**400**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersResponse>
    <ResponseStatus>
        <ErrorCode>15607</ErrorCode>
        <Description>The count of Telephone numbers in POST body exceeds the maximum size of 2500</Description>
    </ResponseStatus>
</TelephoneNumbersResponse>

```

### /tns/{tn} {#tn}
Retrieves information about the specified telephone number.  The information returned provides status and historic information about the Telephone Number, including the status, the order id and date assocated with the last modification, and the account and site information associated with the TN. <br> The request for more information can be made by requesting a number of specific derived sub-resources.

#### **get**

Retrieves the telephone number's information.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<TelephoneNumberResponse> <TelephoneNumber>2012035013</TelephoneNumber> <Status>Inservice</Status> <LastModifiedDate>2014-03-25 12:55:11.0</LastModifiedDate> <OrderCreateDate>2014-03-25T12:55:11.810Z</OrderCreateDate> <OrderId>cf79d3c3-21b7-4db7-9867-273a1867f934</OrderId> <OrderType>NEW_NUMBER_ORDER</OrderType> <InServiceDate>2014-03-25T12:55:11.810Z</InServiceDate> <SiteId>2409</SiteId> <AccountId>8000273</AccountId> </TelephoneNumberResponse>
```

### /tns/{tn}/tndetails {#tndetails}
The get method retrieves detailed information about the phone number.

#### **get**

Retrieves detailed information about the phone number.
TnAttributes - Does this telephone number is protected or not.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<TelephoneNumberResponse> <TelephoneNumberDetails> <City>JERSEY CITY</City> <Lata>224</Lata> <State>NJ</State> <FullNumber>2018981023</FullNumber> <Tier>0</Tier> <VendorId>49</VendorId> <VendorName>Bandwidth CLEC</VendorName> <OnNetVendor>true</OnNetVendor> <RateCenter>JERSEYCITY</RateCenter> <Status>Inservice</Status> <AccountId>14</AccountId> <Site> <Id>479</Id> <Name>site_9b08f</Name> </Site> <SipPeer> <PeerId>500014</PeerId> <PeerName>a2750fad-3</PeerName> </SipPeer> <ServiceTypes> <ServiceType>Voice</ServiceType> <ServiceType>Messaging</ServiceType> </ServiceTypes> <LastModified>2014-07-30T11:29:37.000Z</LastModified> <InServiceDate>2014-07-30T11:29:37.000Z</InServiceDate> <Features> <E911> <LastE911OrderOutcome>SUCCESS</LastE911OrderOutcome> <SipPeerAddress>false</SipPeerAddress> <CallerName>Test CallerName</CallerName> <Address> <HouseNumber>901</HouseNumber> <StreetName>MAIN CAMPUS</StreetName> <StreetSuffix>DR</StreetSuffix> <City>RALEIGH</City> <StateCode>NC</StateCode> <Zip>27606</Zip> <PlusFour>5244</PlusFour> <Country>United States</Country> </Address> <EmergencyNotificationGroup> <Identifier>625e3ad9-c95e-4148-b2f7-d47a8dbdd0d9</Identifier> <Description>Building A</Description> </EmergencyNotificationGroup> </E911> <Lidb> <Status>Pending</Status> <SubscriberInformation>Fred</SubscriberInformation> <UseType>BUSINESS</UseType> <Visibility>PUBLIC</Visibility> </Lidb> <Dlda> <Status>Success</Status> <SubscriberType>BUSINESS</SubscriberType> <ListingType>LISTED</ListingType> <ListingName> <FirstName>Joe</FirstName> <LastName>Smith</LastName> </ListingName> <ListAddress>true</ListAddress> <Address> <HouseNumber>12</HouseNumber> <StreetName>ELM</StreetName> <City>New York</City> <StateCode>NY</StateCode> <Zip>10007</Zip> <Country>United States</Country> <AddressType>Dlda</AddressType> </Address> </Dlda> </Features> <MessagingSettings> <SmsEnabled>true</SmsEnabled> <AssignedNNRoute> <Nnid>101601</Nnid>> <Name>USA Mobility</Name> </AssignedNNRoute> </MessagingSettings> <TnAttributes> <TnAttribute>Protected</TnAttribute> <TnAttribute>External</TnAttribute> </TnAttributes> </TelephoneNumberDetails> </TelephoneNumberResponse> <!--Shared tn details--> <TelephoneNumberResponse> <TelephoneNumberDetails> <City>JERSEY CITY</City> <Lata>224</Lata> <State>NJ</State> <FullNumber>2018981023</FullNumber> <Tier>0</Tier> <VendorId>49</VendorId> <VendorName>Bandwidth CLEC</VendorName> <RateCenter>JERSEYCITY</RateCenter> <Status>Inservice</Status> <AccountId>14</AccountId> <Site> <Id>479</Id> <Name>site_9b08f</Name> </Site> <SipPeer> <PeerId>500014</PeerId> <PeerName>a2750fad-3</PeerName> </SipPeer> <ServiceTypes> <ServiceType>Voice</ServiceType> </ServiceTypes> <LastModified>2014-07-30T11:29:37.000Z</LastModified> <InServiceDate>2014-07-30T11:29:37.000Z</InServiceDate> <Features> <E911> <LastE911OrderOutcome>SUCCESS</LastE911OrderOutcome> <SipPeerAddress>false</SipPeerAddress> <CallerName>Test CallerName</CallerName> <Address> <HouseNumber>901</HouseNumber> <StreetName>MAIN CAMPUS</StreetName> <StreetSuffix>DR</StreetSuffix> <City>RALEIGH</City> <StateCode>NC</StateCode> <Zip>27606</Zip> <PlusFour>5244</PlusFour> <Country>United States</Country> </Address> <EmergencyNotificationGroup> <Identifier>625e3ad9-c95e-4148-b2f7-d47a8dbdd0d9</Identifier> <Description>Building A</Description> </EmergencyNotificationGroup> </E911> <Lidb> <Status>Pending</Status> <SubscriberInformation>Fred</SubscriberInformation> <UseType>BUSINESS</UseType> <Visibility>PUBLIC</Visibility> </Lidb> <Dlda> <Status>Success</Status> <SubscriberType>BUSINESS</SubscriberType> <ListingType>LISTED</ListingType> <ListingName> <FirstName>Joe</FirstName> <LastName>Smith</LastName> </ListingName> <ListAddress>true</ListAddress> <Address> <HouseNumber>12</HouseNumber> <StreetName>ELM</StreetName> <City>New York</City> <StateCode>NY</StateCode> <Zip>10007</Zip> <Country>United States</Country> <AddressType>Dlda</AddressType> </Address> </Dlda> </Features> <TnAttributes> <TnAttribute>Hosted</TnAttribute> </TnAttributes> <HostedTelephoneNumberDetails> <HostedTelephoneNumberDetail> <AccountId>12346160</AccountId> <Site> <Id>487</Id> <Name>site_Mw4FX</Name> </Site> <SipPeer> <PeerId>500026</PeerId> <PeerName>sippeeremhlO</PeerName> <IsDefaultPeer>true</IsDefaultPeer> </SipPeer> <ServiceTypes> <ServiceType>Hosted Messaging</ServiceType> </ServiceTypes> <MessagingSettings> <SmsEnabled>true</SmsEnabled> <CampaignId>fYtaiwCESO7Z7sgnc3smfMOg1JgMZ16FCQ1FtFosjHRUSkJVNWYW5p70gdVWGTGe</CampaignId> <MessageClass>V4578Qab0yppj6E4xumcMbmE5d6IPY9FWT37xI9gHt6AGoiEihurpYLNuV5EfbTn </MessageClass> <A2pState>overridden</A2pState> <AssignedNnRoute> <Nnid>2183991</Nnid> <Name>7ae5LXMn</Name> </AssignedNnRoute> </MessagingSettings> <TnAttributes> <TnAttribute>Hosted</TnAttribute> </TnAttributes> </HostedTelephoneNumberDetail> </HostedTelephoneNumberDetails> </TelephoneNumberDetails> </TelephoneNumberResponse> <!-- Non-NAMP details --> <TelephoneNumberResponse> <TelephoneNumberDetails> <FullNumber>+33140289562</FullNumber> <Country>FR</Country> <TnType>geographic</TnType> <VendorId>49</VendorId> <VendorName>Bandwidth CLEC</VendorName> <OnNetVendor>true</OnNetVendor> <Status>Inservice</Status> <AccountId>12345678</AccountId> <Site> <Id>123</Id> <Name>site</Name> </Site> <SipPeer> <PeerId>500001</PeerId> <PeerName>sippeer</PeerName> <IsDefaultPeer>false</IsDefaultPeer> </SipPeer> <ServiceTypes> <ServiceType>Voice</ServiceType> </ServiceTypes> <LastModified>2020-03-03T15:30:07.000Z</LastModified> <InServiceDate>2020-03-03T15:30:07.518Z</InServiceDate> </TelephoneNumberDetails> </TelephoneNumberResponse>
```

**400**

```xml
<TelephoneNumberResponse> <ResponseStatus> <ErrorCode>12512</ErrorCode> <Description>Telephone number '123456789' is not valid</Description> </ResponseStatus> </TelephoneNumberResponse>
```

### /tns/{tn}/sites {#sites}
The get method retrieves the sites associated with that telephone number.

#### **get**

Retrieves the sites associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<Site> <Id>2409</Id> <Name>siteName</Name> </Site>
```

### /tns/{tn}/sippeers {#sippeers}
The get method retrieves the sippeers associated with that telephone number.

#### **get**

Retrieves the sippeers associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<SipPeer> <Id>305643</Id> <Name>PeerOneSiteThree</Name> </SipPeer>
```

### /tns/{tn}/ratecenter {#ratecenter}
The get method retrieves the rate centers associated with that telephone number.

#### **get**

Retrieves the rate centers associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<TelephoneNumberResponse> <TelephoneNumberDetails> <State>NJ</State> <RateCenter>HACKENSACK</RateCenter> </TelephoneNumberDetails> </TelephoneNumberResponse>
```

### /tns/{tn}/lca {#lca}
Retrieves the LCA information associated with that telephone number.<br>
This call will return the NPA-NXX pairs and the Rate Centers that are in the Local Calling Area of the Telephone Number in the API call. <br>
Due to the fact that not all LCA relationships are symmetrical, the telephone number may not be part of the LCAs centered on the provided NPA-NXX or Rate Center values.

#### **get**

Retrieves the LCAs associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<SearchResult> <ListofNPANXX> <NPANXX>201202</NPANXX> <NPANXX>201203</NPANXX> <NPANXX>201206</NPANXX> <!--- SNIP ---> <NPANXX>973930</NPANXX> <NPANXX>973931</NPANXX> <NPANXX>973955</NPANXX> </ListofNPANXX> <Location> <RateCenters> <State>NJ</State> <RCs> <RC>CLIFFSIDE</RC> <RC>DUMONT</RC> <!--- SNIP ---> <RC>UNION CITY</RC> <RC>WESTWOOD</RC> </RCs> </RateCenters> </Location> </SearchResult>
```

### /tns/{tn}/lata {#lata}
Retrieves the lata that contains the telephone number.

#### **get**

Retrieves the lata associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<TelephoneNumberResponse> <TelephoneNumberDetails> <Lata>224</Lata> </TelephoneNumberDetails> </TelephoneNumberResponse>
```

### /tns/{tn}/history {#history}
The history call returns a number of payload elements, each representing an event in the lifecycle of the Telephone Number. <br>
Information returned includes the Order details that prompted the change in the TN status, including dates, order IDs and order types.

#### **get**

Retrieves the history associated with that telephone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<TelephoneNumberResponse> <TelephoneNumberStatuses> <TelephoneNumberStatus> <AccountId>753</AccountId> <LastModifiedDate>2014-07-29T13:42:49.789Z</LastModifiedDate> <OrderCreateDate>2014-07-29T13:42:33.000Z</OrderCreateDate> <OrderId>58ee5da9-6357-4626-86fd-6faf4bf819b3</OrderId> <Status>Available</Status> <UserId>jbm</UserId> <OrderType>IMPORT_AVAILABLE_ORDER</OrderType> </TelephoneNumberStatus> <TelephoneNumberStatus> <AccountId>14</AccountId> <LastModifiedDate>2014-07-30T11:07:10.585Z</LastModifiedDate> <OrderCreateDate>2014-07-30T11:07:10.537Z</OrderCreateDate> <OrderId>90d7f38d-03fc-43f4-85f6-ed2608411775</OrderId> <Status>Inservice</Status> <UserId>jbm</UserId> <OrderType>NEW_NUMBER_ORDER</OrderType> </TelephoneNumberStatus> <TelephoneNumberStatus> <AccountId>14</AccountId> <LastModifiedDate>2014-07-30T11:24:17.834Z</LastModifiedDate> <OrderCreateDate>2014-07-30T11:24:17.834Z</OrderCreateDate> <OrderId>9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c</OrderId> <Status>Inservice</Status> <UserId>jbm</UserId> <OrderType>DLDA_ORDER</OrderType> <OrderStatus>RECEIVED</OrderStatus> </TelephoneNumberStatus> <TelephoneNumberStatus> <AccountId>14</AccountId> <LastModifiedDate>2014-07-30T11:24:18.842Z</LastModifiedDate> <OrderCreateDate>2014-07-30T11:24:17.834Z</OrderCreateDate> <OrderId>9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c</OrderId> <Status>Inservice</Status> <UserId>jbm</UserId> <OrderType>DLDA_ORDER</OrderType> <OrderStatus>PROCESSING</OrderStatus> </TelephoneNumberStatus> <TelephoneNumberStatus> <AccountId>14</AccountId> <LastModifiedDate>2014-07-30T11:24:22.224Z</LastModifiedDate> <OrderCreateDate>2014-07-30T11:24:17.834Z</OrderCreateDate> <OrderId>9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c</OrderId> <Status>Inservice</Status> <UserId>jbm</UserId> <OrderType>DLDA_ORDER</OrderType> <OrderStatus>PARTIAL</OrderStatus> </TelephoneNumberStatus> </TelephoneNumberStatuses> <TelephoneNumber>2018981023</TelephoneNumber> </TelephoneNumberResponse>
```

**400**

**404**

```xml
<ErrorResponse> <irisStatus> <Code>404</Code> <Description>Results were not found.</Description> </irisStatus> </ErrorResponse>
```

### /tns/{tn}/tnreservation {#tnreservation}
This API call retrieves any current reservation information associated with the Telephone Number, if a reservation is currently active on the indicated Telephone Number.
The query is restricted to calls that do not exceed the account privileges of the calling user.

#### **get**

Retrieves reservation information associated with the Telephone Number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<?xml version="1.0"?> <TNReservation> <ReservationID>d28529e6-23dc-408e-b7ad-f2015a6975d5</ReservationID> <Account>12346099</Account> <ReservationExpires>14346</ReservationExpires> <ReservedTN>6136211234</ReservedTN> </TNReservation>
```

### /tns/{tn}/availableNnRoutes {#availableNnRoutes}
The get method retrieves information about available NnRoutes for the phone number.

#### **get**

Retrieves information about available NnRoutes for the phone number.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| tn | string | true |

##### Response

**200**

```xml
<AvailableNNRoutes> <NNRoute> <Nnid>101601</Nnid>> <Name>USA Mobility</Name> </NNRoute> <NNRoute> <Nnid>102787</Nnid> <Name>Globe Wireless - Bandwidth.com - SVR</Name> </NNRoute> </AvailableNNRoutes>
```

**400**

```xml
<AvailableNNRoutes> <ResponseStatus> <ErrorCode>12512</ErrorCode> <Description>Telephone number '123456789' is not valid</Description> </ResponseStatus> </AvailableNNRoutes>
```

## /users
The /users API also enables resetting but not retrieving credential information

### /users/{userid} {#userid}
reference a specific user in the Bandwidth Dashboard API

#### **get**

Retrieve the information (except the password) for a specific user id

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| userid | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<UserResponse>
    <User>
        <Username>testcustomer</Username>
        <FirstName>Jane</FirstName>
        <LastName>Doe</LastName>
        <EmailAddress>janedoe@bandwidth.com</EmailAddress>
        <TelephoneNumber>9199999999</TelephoneNumber>
        <Roles>
            <Role>
                <RoleName>ROLE_BDR</RoleName>
                <Permissions>
                    <Permission>
                        <PermissionName>VIEW</PermissionName>
                    </Permission>
                </Permissions>
            </Role>
        </Roles>
        <Accounts>
            <Account>
                <AccountId>12346095</AccountId>
                <CompanyName>ABC Corp</CompanyName>
            </Account>
        </Accounts>
    </User>
</UserResponse>

```

### /users/{userid}/password {#password}
Allows the manipulation of a user's password.

#### **put**

Update a user's password.   Security is maintained by requiring the user's existing password as part of the authentication for the API call.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| userid | string | true |

###### Body

**application/xml**

```xml
<Password>$uper$ecure</Password> <!-- required, min length: 6, max length: 20 -->

```

##### Response

**200**

```xml
empty response
```

**400**

```xml
<UserResponse>
    <ResponseStatus>
    <ErrorCode>12504</ErrorCode>
    <Description>Password must be at least 6 characters long</Description>
    </ResponseStatus>
</UserResponse>

```

## /cities
The *+cities+* resource returns all of the Cities in the indicated State that are supported from a coverage perspective, and, if requested, that contain orderable inventory.  The values returned indicate the names of the Cities and, if <b>available</b> is specified, returns the available inventory by City.  Note that the mapping between Rate Center and City is not completely predictable because multiple cities can be served by a single Rate Center and it may take multiple Rate Centers to serve a city.  The Rate Centers results are more predictable because they are defined strictly in telecommunication terms.

### /cities {#cities}

#### **get**

The Rate Centers and Cities API Calls return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false, then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

##### Response

**200**

```xml
<?xml version="1.0"?>
<CityResponse>
    <ResultCount>449</ResultCount>
    <Cities>
        <City>
            <RcAbbreviation>DOUGLAS</RcAbbreviation>
            <Name>ADAMS</Name>
        </City>
        <City>
            <RcAbbreviation>FILLEY</RcAbbreviation>
            <Name>ADAMS</Name>
        </City>
        <City>
            <RcAbbreviation>AINSWORTH</RcAbbreviation>
            <Name>AINSWORTH</Name>
        </City>
        <!-- ... SNIP ... -->
        <City>
            <RcAbbreviation>LONG PINE</RcAbbreviation>
            <Name>AINSWORTH</Name>
        </City>
        <City>
            <RcAbbreviation>ODELL</RcAbbreviation>
            <Name>WYMORE</Name>
        </City>
        <City>
            <RcAbbreviation>BRADSHAW</RcAbbreviation>
            <Name>YORK</Name>
        </City>
        <City>
            <RcAbbreviation>YORK</RcAbbreviation>
            <Name>YORK</Name>
        </City>
        <City>
            <RcAbbreviation>WACO</RcAbbreviation>
            <Name>YORK</Name>
        </City>
    </Cities>
</CityResponse>
OR.....
<?xml version="1.0"?>
<CityResponse>
    <ResultCount>129</ResultCount>
    <Cities>
        <City>
            <RcAbbreviation>FILLEY</RcAbbreviation>
            <AvailableTelephoneNumberCount>266</AvailableTelephoneNumberCount>
            <Name>ADAMS</Name>
        </City>
        <City>
            <RcAbbreviation>DOUGLAS</RcAbbreviation>
            <AvailableTelephoneNumberCount>378</AvailableTelephoneNumberCount>
            <Name>ADAMS</Name>
        </City>
        <City>
            <RcAbbreviation>WAKEFIELD</RcAbbreviation>
            <AvailableTelephoneNumberCount>272</AvailableTelephoneNumberCount>
            <Name>ALLEN</Name>
        </City>
        <City>
            <RcAbbreviation>ASHLAND</RcAbbreviation>
            <AvailableTelephoneNumberCount>129</AvailableTelephoneNumberCount>
            <Name>ASHLAND</Name>
        </City>
        <!-- ... SNIP ... -->
        </City>
        <City>
            <RcAbbreviation>WEST POINT</RcAbbreviation>
            <AvailableTelephoneNumberCount>85</AvailableTelephoneNumberCount>
            <Name>WEST POINT</Name>
        </City>
        <City>
            <RcAbbreviation>OAKLAND</RcAbbreviation>
            <AvailableTelephoneNumberCount>290</AvailableTelephoneNumberCount>
            <Name>WEST POINT</Name>
        </City>
        <City>
            <RcAbbreviation>WESTERN</RcAbbreviation>
            <AvailableTelephoneNumberCount>134</AvailableTelephoneNumberCount>
            <Name>WESTERN</Name>
        </City>
        <City>
            <RcAbbreviation>WAYNE</RcAbbreviation>
            <AvailableTelephoneNumberCount>434</AvailableTelephoneNumberCount>
            <Name>WINSIDE</Name>
        </City>
        <City>
            <RcAbbreviation>BRADSHAW</RcAbbreviation>
            <AvailableTelephoneNumberCount>274</AvailableTelephoneNumberCount>
            <Name>YORK</Name>
        </City>
    </Cities>
</CityResponse>

```

## /rateCenters
The rateCenters resource returns all of the Rate Centers in the indicated State that are supported from a coverage perspective, and, if requested, that contain orderable inventory.  The values returned indicate the names of the Rate Centers and, if the query parameter <b>available</b> is specified, the available inventory by Rate Center.

### /rateCenters {#rateCenters}

#### **get**

The Rate Centers API Call returns information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported=true is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

##### Response

**200**

```xml
<?xml version="1.0"?>
<RateCenterResponse>
    <ResultCount>450</ResultCount>
    <RateCenters>
        <RateCenter>
            <Abbreviation>ADAMS</Abbreviation>
            <Name>ADAMS</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>AINSWORTH</Abbreviation>
            <Name>AINSWORTH</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>ALBION</Abbreviation>
            <Name>ALBION</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>ALEXANDRIA</Abbreviation>
            <Name>ALEXANDRIA</Name>
        </RateCenter>
        <!-- ... SNIP ... -->
        <RateCenter>
            <Abbreviation>WOOD RIVER</Abbreviation>
            <Name>WOOD RIVER</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>WYMORE</Abbreviation>
            <Name>WYMORE</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>WYFRYCSTHL</Abbreviation>
            <Name>WYNOT FORDYCE SAINT HELENA</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>YORK</Abbreviation>
            <Name>YORK</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>YUTAN</Abbreviation>
            <Name>YUTAN</Name>
        </RateCenter>
    </RateCenters>
</RateCenterResponse>
<!-- .....OR.....
In the case that the query parameter available is set to true ,
we will include the quantity of numbers that are available
in the indicated Rate Center
 -->
<?xml version="1.0"?>
<RateCenterResponse>
    <ResultCount>131</ResultCount>
    <RateCenters>
        <RateCenter>
            <Abbreviation>ADAMS</Abbreviation>
            <AvailableTelephoneNumberCount>108</AvailableTelephoneNumberCount>
            <Name>ADAMS</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>ALEXANDRIA</Abbreviation>
            <AvailableTelephoneNumberCount>230</AvailableTelephoneNumberCount>
            <Name>ALEXANDRIA</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>ASHLAND</Abbreviation>
            <AvailableTelephoneNumberCount>129</AvailableTelephoneNumberCount>
            <Name>ASHLAND</Name>
        </RateCenter>
        <!-- ... SNIP ... -->
        <RateCenter>
            <Abbreviation>WEST POINT</Abbreviation>
            <AvailableTelephoneNumberCount>85</AvailableTelephoneNumberCount>
            <Name>WEST POINT</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>WESTERN</Abbreviation>
            <AvailableTelephoneNumberCount>134</AvailableTelephoneNumberCount>
            <Name>WESTERN</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>WILBER</Abbreviation>
            <AvailableTelephoneNumberCount>135</AvailableTelephoneNumberCount>
            <Name>WILBER</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>WYMORE</Abbreviation>
            <AvailableTelephoneNumberCount>132</AvailableTelephoneNumberCount>
            <Name>WYMORE</Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>YUTAN</Abbreviation>
            <AvailableTelephoneNumberCount>588</AvailableTelephoneNumberCount>
            <Name>YUTAN</Name>
        </RateCenter>
    </RateCenters>
</RateCenterResponse>

```

## /coveredRateCenters
The coveredRateCenters resource returns all of the Covered Rate Centers.
Each rate center resource contains state, abbreviation, name, LATA, list of tiers, number of available TNs and optional zip codes, cities, vendors, NPA-NXX-Xs information.

### /coveredRateCenters {#coveredRateCenters}

#### **get**

The Covered Rate Centers API Call return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability. The various query parameters are summarized in the following table ... <table border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" width="114"> <p><strong>Query Parameter</strong> </p> </td> <td valign="top"> <p><strong>Description</strong> </p> </td> </tr> <tr> <td valign="top" width="114"> <p>page </p> </td> <td valign="top"> <p>The starting value for a paginated response. The default is ‘1’ indicating the first page of results. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>size </p> </td> <td valign="top"> <p>The number of rate centers to include in a paginated result payload. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>state </p> </td> <td valign="top"> <p>A 2 character State code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>abbreviation </p> </td> <td valign="top"> <p>A rate center abbreviation </p> </td> </tr> <tr> <td valign="top" width="114"> <p>name </p> </td> <td valign="top"> <p>A rate center name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>zip </p> </td> <td valign="top"> <p>A 5 digit zip code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>city </p> </td> <td valign="top"> <p>A City name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>lata </p> </td> <td valign="top"> <p>A 3 or 5 digit LATA </p> </td> </tr> <tr> <td valign="top" width="114"> <p>tier </p> </td> <td valign="top"> <p>A bandwidth coverage tier; a value from 0 to 5. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npa </p> </td> <td valign="top"> <p>A 3 digit NPA or Area Code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxx </p> </td> <td valign="top"> <p>6 digits NPA and NXX values </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxxX </p> </td> <td valign="top"> <p>7 digits of NPA, NXX and thousands block values. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>embed </p> </td> <td valign="top"> <p>One of the values [ZipCodes, Cities, NpaNxxX, AvailableNumberCount, LimitedAvailableNumberCount, LocalRateCenters]. <br> This repeatable query parameter will force a list (or multiple lists) of the indicated data to be provided in the response. For example if the payload should contain a list of the Cities covered by the Rate Centers then embed=cities would be included as a query parameter.<br> No filter parameters are supported if <q>LocalRateCenters</q> is specified. In this case only <q>size</q>, <q>page</q> and any other <q>embed</q> parameters are supported. </p> </td> </tr> </tbody> </table>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <CoveredRateCenters> <TotalCount>18</TotalCount> <Links> <first>Link=&lt;https://api.inetwork.com:443/v1.0/coveredRateCenters?npa=310&amp;size=10&amp;embed=Cities&amp;embed=ZipCodes&amp;embed=NpaNxxX&amp;embed=Vendors&amp;page=1&gt;;rel="first";</first> <next>Link=&lt;https://api.inetwork.com:443/v1.0/coveredRateCenters?npa=310&amp;size=10&amp;embed=Cities&amp;embed=ZipCodes&amp;embed=NpaNxxX&amp;embed=Vendors&amp;page=5&gt;;rel="next";</next> </Links> <CoveredRateCenter> <Name>AVALON</Name> <Abbreviation>AVALON</Abbreviation> <State>CA</State> <Lata>730</Lata> <AvailableNumberCount>1</AvailableNumberCount> <LimitedAvailableNumberCount>1</LimitedAvailableNumberCount> <ZipCodes> <ZipCode>90731</ZipCode> </ZipCodes> <Cities> <City>SAN PEDRO</City> </Cities> </Vendors> <Tiers> <Tier>0</Tier> </Tiers> <NpaNxxXs> <NpaNxxX>3105100</NpaNxxX> <NpaNxxX>3105101</NpaNxxX> <NpaNxxX>3109498</NpaNxxX> <NpaNxxX>3109499</NpaNxxX> <NpaNxxX>4242260</NpaNxxX> </NpaNxxXs> <Id>3151</Id> <LocalRateCenters> <RateCenterId>369</RateCenterId> <RateCenterId>7843</RateCenterId> <RateCenterId>7945</RateCenterId> <RateCenterId>2461</RateCenterId> <RateCenterId>10741</RateCenterId> <RateCenterId>7059</RateCenterId> </LocalRateCenters> </CoveredRateCenter> <CoveredRateCenter> <Name>BEVERLY HILLS</Name> <Abbreviation>BEVERLYHLS</Abbreviation> <State>CA</State> <Lata>730</Lata> <AvailableNumberCount>25</AvailableNumberCount> <LimitedAvailableNumberCount>20</LimitedAvailableNumberCount> <ZipCodes> <ZipCode>90013</ZipCode> <ZipCode>90014</ZipCode> <ZipCode>90015</ZipCode> <ZipCode>90017</ZipCode> <ZipCode>90044</ZipCode> <ZipCode>90048</ZipCode> <ZipCode>90059</ZipCode> <ZipCode>90061</ZipCode> <ZipCode>90071</ZipCode> <ZipCode>90079</ZipCode> <ZipCode>90210</ZipCode> <ZipCode>90211</ZipCode> <ZipCode>90212</ZipCode> <ZipCode>90247</ZipCode> <ZipCode>90248</ZipCode> <ZipCode>90249</ZipCode> <ZipCode>91352</ZipCode> <ZipCode>91403</ZipCode> <ZipCode>91411</ZipCode> <ZipCode>91423</ZipCode> <ZipCode>91504</ZipCode> <ZipCode>91505</ZipCode> </ZipCodes> <Cities> <City>BEVERLY HILLS</City> <City>BURBANK</City> <City>GARDENA</City> <City>LOS ANGELES</City> <City>SHERMAN OAKS</City> <City>SUN VALLEY</City> <City>VAN NUYS</City> </Cities> </Vendors> <Tiers> <Tier>0</Tier> </Tiers> <NpaNxxXs> <NpaNxxX>3102010</NpaNxxX> <NpaNxxX>3102011</NpaNxxX> <NpaNxxX>3102012</NpaNxxX> <NpaNxxX>3102013</NpaNxxX> <NpaNxxX>3102014</NpaNxxX> <NpaNxxX>3102015</NpaNxxX> <NpaNxxX>3102016</NpaNxxX> <NpaNxxX>3102017</NpaNxxX> <NpaNxxX>3102018</NpaNxxX> <NpaNxxX>3102019</NpaNxxX> <NpaNxxX>4246669</NpaNxxX> <NpaNxxX>4247770</NpaNxxX> <NpaNxxX>4247771</NpaNxxX> <NpaNxxX>4247772</NpaNxxX> <NpaNxxX>4247773</NpaNxxX> <NpaNxxX>4247774</NpaNxxX> <NpaNxxX>4247775</NpaNxxX> <NpaNxxX>4247776</NpaNxxX> <NpaNxxX>4247777</NpaNxxX> <NpaNxxX>4247778</NpaNxxX> <NpaNxxX>4247779</NpaNxxX> </NpaNxxXs> <Id>3538</Id> <LocalRateCenters> <RateCenterId>4421</RateCenterId> <RateCenterId>14259</RateCenterId> </LocalRateCenters> </CoveredRateCenter> </CoveredRateCenters>
```

**303**

**400**

```xml
<CoveredRateCenters>
    <ResponseStatus>
        <ErrorCode>4002</ErrorCode>
        <Description>Please verify that your NPA, NPA-NXX, or NPA-NXX-X search input parameters are correct.</Description>
    </ResponseStatus>
</CoveredRateCenters>

```

### /coveredRateCenters/{rateCenterId} {#rateCenterId}
The "rateCenterId" resource refers to a specific element of the covered rate centers collection. A lists of zip codes, cities, NPA-NXX-Xs, local rate center IDs and vendors (for admin users only) are included into response.

#### **get**

Retrieve information about a specific covered rate center identified as the resource.

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|
| rateCenterId | string | true |

##### Response

**200**

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <CoveredRateCenter> <Name>LOMITA</Name> <Abbreviation>LOMITA</Abbreviation> <State>CA</State> <Lata>730</Lata> <AvailableNumberCount>5536</AvailableNumberCount> <LimitedAvailableNumberCount>5236</LimitedAvailableNumberCount> <ZipCodes> <ZipCode>90044</ZipCode> <ZipCode>90059</ZipCode> <ZipCode>90061</ZipCode> <ZipCode>90247</ZipCode> <ZipCode>90248</ZipCode> <ZipCode>90249</ZipCode> <ZipCode>90717</ZipCode> <ZipCode>90802</ZipCode> <ZipCode>90813</ZipCode> <ZipCode>90822</ZipCode> <ZipCode>90831</ZipCode> <ZipCode>90834</ZipCode> </ZipCodes> <Cities> <City>GARDENA</City> <City>LOMITA</City> <City>LONG BEACH</City> <City>LOS ANGELES</City> </Cities> </Vendors> <Tiers> <Tier>0</Tier> </Tiers> <NpaNxxXs> <NpaNxxX>3102570</NpaNxxX> <NpaNxxX>3102571</NpaNxxX> </NpaNxxXs> <Id>6854</Id> <LocalRateCenters> <RateCenterId>369</RateCenterId> <RateCenterId>7843</RateCenterId> <RateCenterId>7945</RateCenterId> </LocalRateCenters> </CoveredRateCenter>
```

**404**

## /callbacks
The callbacks group of API calls does not reflect API Call signatures of the Bandwidth Dashboard API. <br>The API documentation captured in this group is intended to capture payload and response expectation of callback endpoints provided by our customers.<br><br>
The API endpoints (like https://customer.com/the\_resource\_that\_bandwidth\_calls\_to\_notify\_my\_app\_of\_something) will be provided by our customers (you), and we will invoke those endpoints with the described payloads, and respond appropriately to the described responses. <br>
The URLs are provided by you; we call them with the payloads, and process the responses. <br>
<table style="text-align: left; width: 100%; background-color: rgb(255, 255, 200);" border="1" cellpadding="5" cellspacing="0">
    <tbody>
        <tr>
            <td>
                Don't plan on placing a call to "/callbacks /portOutValidationCallbackApi" or
                "/callbacks /notificationCallbackApi", these are simply here to provide
                some structure to the documentation. &nbsp; We will place a call to
                the URL that you provide us, and we will expect a response to that API
                call as described below.
            </td>
        </tr>
    </tbody>
</table>
<br>
The Callback APIs documented in this group of API signatures includes...
<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Port-Out Validation</td>
        <td>This Callback API will be used with select pre-qualified customers to confirm the validity of a port-out request when it is submitted by the winning carrier.  The API call will define the end user owner of the Telephone Number in terms of FCC-approved information to aid in assessing the validity of the request</td>
    </tr>
    <tr>
        <td>Order state change notification Callback API</td>
        <td>This Callback API will be used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Dashboard API on their behalf.  In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it.</td>
    </tr>
</table>
<br> <br>
If the customer's endpoint is unavailable, the Bandwidth Dashboard API callback service will retry the customer's endpoint 8 times over a period of 40 minutes.
<br><br>
The API payloads are described below...

### /callbacks/portOutValidationCallbackApi {#portOutValidationCallbackApi}
The port out validation API is used for portout management purposes and gives the losing side customer the possibility to validate the portout process.
<h4>Summary</h4>
<p>Validation of a Port-out request will begin with a submission from Bandwidth to our customer including information used to validate the correctness of the port-out request. The included information<span>&nbsp;</span><em>may</em><span>&nbsp;</span>include:</p>
<ul>
  <li>a list of telephone numbers to be ported out</li>
  <li>a subscriber name for information purposes</li>
  <li>a zip code associated with the subscriber, presumably relating to a billing or service address</li>
  <li>an account code, presumably related to an account used to reflect&nbsp; the commercial or billing relationship with the subscriber</li>
  <li>a PIN established by the end user that helps to identify that end user / subscriber</li>
</ul>
<p>One of two responses are valid:</p>
<ol>
  <li>a positive validation of the port-out request. In this case no additional information is required</li>
  <li>a negative response indicating that the port-out request is considered to be invalid, based on the information received.
    <ul>
      <li>the response<span>&nbsp;</span><em><b>must</b></em><span>&nbsp;</span>contain error response codes that will support updating of the request with valid data.<br> </li>
      <ul>
        <li>this information will be passed back to the requesting party to allow them to attempt to improve the request.</li>
      </ul>
      <li>In this case the response<span>&nbsp;</span><em><b>should</b></em><span>&nbsp;</span>contain data that would have allowed to port-out to be considered valid,
        <ul>
          <li>this data is intended for dispute resolution, and for review by Bandwidth to see if the port appears to be valid based on the available data.</li>
          <li>all fields are considered optional.</li>
          <li>failure to return any data<span>&nbsp;</span><em>may</em>
          <span>&nbsp;</span>be considered to be equivalent to approving the port-out request.</li>
          <li>subsequent submission of the data provided in the response should cause acceptance of the port-out request.</li>
          <li>this information will not be passed directly on to the requesting party</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<p>The above exchange of information is intended to support best faith resolution of port-requests within the constraints imposed by the FCC. The objective is consistent achievement of the middle ground between slamming and unjustified blocking of valid requests. &nbsp;Information returned to Bandwidth is to aid in dispute resolution, and is considered to be covered by CPNI limitations and thereby not intended for distribution to any third parties. Note that failure of the winning carrier to match the values exchanged by the API may not prevent porting-out of the number. FCC guidelines must still be followed in dispute resolution.</p>
<p>This exchange of information is synchronous in nature, and will not permit extensive delays in response, and will not create a series of linked transactions for resolving a dispute, or in attempting the port-out with different information. Updated submissions will be treated as new requests.  Responses to the API call are expected within 30 seconds.</p>
<div>
The error codes and error explanation payloads below are the ones that we expect to see in response to the port-out validation callback.  This uniform set of responses allows a consistent and clear dialog with the prospective winning carrier about the nature of the validation failure.<br/>
<table style="text-align: left; width: 60%;" border="1" cellpadding="2" cellspacing="2">
      <thead>
          <tr>
              <th>Code</th>
              <th>Meaning</th>
              <th>Disposition</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>7510</td>
              <td>Required Account Code missing</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7511</td>
              <td>Invalid Account Code</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7512</td>
              <td>Required PIN missing</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7513</td>
              <td>PIN Invalid</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7514</td>
              <td>Required ZIP Code missing</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7515</td>
              <td>Invalid ZIP Code</td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7516</td>
              <td>Telephone Number not recognized or invalid for this account <TN></td>
              <td>Request Cancelled</td>
          </tr>
          <tr>
              <td>7517</td>
              <td>Too many Telephone numbers in this request</td>
              <td>Request Cancelled</td>
          </tr>
          <tr>
              <td>7518</td>
              <td>Telephone Number Not Active <TN></td>
              <td>Request Cancelled</td>
          </tr>
          <tr>
              <td>7519</td>
              <td>Customer info does not match <Explanation></td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7522</td>
              <td>Customer does migration from one portout validation endpoint to another<Explanation></td>
              <td>Request is not affected</td>
          </tr>
          <tr>
              <td>7598</td>
              <td>Invalid Request - <explanatory text></td>
              <td>Request placed in Exception</td>
          </tr>
          <tr>
              <td>7599</td>
              <td>Fatal Error in Processing</td>
              <td>Request succeeds</td>
          </tr>
          <tr>
              <td>nnnn</td>
              <td>Anything Else</td>
              <td>Request succeeds</td>
          </tr>
      </tbody>
      </table>
</div>
<h4>Configuration</h4>
<p>The configuration of the call-back API used for port-out validation is done by Bandwidth development staff. &nbsp;Configuration of this service is performed on the submission of a Ticket, and on completion of the required contract extensions.</p>
<ul>
  <li>the configured URL provided by the customer that will be invoked by Bandwidth in order to validate a port-out request.</li>
  <li>the suecurity of the exchange can be protected within an https exchange, and can be authenticated with userid / password credentials, or with certificates. The setup of the callback will be covered in the ticketing process.</li>
</ul>
<br>
<h4>Responsibilities</h4>
Accounts using the Poprt-out verification API will likely be required to extend the contractual relationship with Bandwidth to ensure clarity around the responsibilities of our customers in the use of the API, and the rights of Bandwidth to withhold this capability if we believe that the capability is being used in contravention of FCC best practices, guidelines and recommendations. Please review these requirements with your Bandwidth representative.<br>

#### **post**

The initial request for validation is a post to the pre-configured URL defined by the customer.
This request contains optional elements for:
<ul>
  <li>PIN (optional) ( 10 digits )</li>
  <li>Account Number (optional) ( 25 digits )</li>
  <li>zipcode (optional) ( 15 characters )</li>
  <li>a list of one or more telephone numbers (at least one telephone number must be provided) ( 10 digits )</li>
  <li>Subscriber name for information purposes. (optional)( 93 characters )</li>
  <li>PON for information and correlation purposes. (optional)( 25 characters )</li>
</ul>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

###### Body

**application/xml**

```xml
<?xml version="1.0"?>
<PortOutValidationRequest>
    <PON>some_pon</PON>
    <Pin>1111</Pin>
    <AccountNumber>777</AccountNumber>
    <ZipCode>62025</ZipCode>
    <SubscriberName>Subscriber Name</SubscriberName>
    <TelephoneNumbers>
        <TelephoneNumber>2223331000</TelephoneNumber>
        <TelephoneNumber>2223331001</TelephoneNumber>
    </TelephoneNumbers>
</PortOutValidationRequest>

```

##### Response

**200**

**400**

**500**

### /callbacks/notificationCallbackApi {#notificationCallbackApi}
The notification callback API is used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Dashboard API on their behalf.  In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it. Alternatively, notification callback will be called whenever a subscribed event occurs <br><br>
When an order changes OR when numbers in customer account are impacted due to orders placed outside of their account the Bandwidth Dashboard API will POST a pre-defined payload to our customer at the URL that they have defined by use of the /accounts/<account-id>/subscriptions API call.  Please see the documentation on that API call to understand how to register the notification callback API with the Bandwidth Dashboard API.<br><br>
Notified states for order types:
    <table style = "width 100%">
                  <tr>
                     <td><b>Order type</b></td>
                     <td><b>Notified states</b></td>
                  </tr>
                  <tr>
                     <td>portins</td>
                     <td>PENDING&#95;DOCUMENTS, SUBMITTED, FOC, REQUESTED&#95;SUPP, COMPLETE, CANCELLED, EXCEPTION, REQUESTED&#95;CANCEL</td>
                  </tr>
                  <tr>
                     <td>orders</td>
                     <td>COMPLETE, PARTIAL, BACKORDERED, FAILED</td>
                  </tr>
                  <tr>
                     <td>portouts</td>
                     <td>COMPLETE (NEW, MODIFY, CANCELLED, VALIDATION&#95;FAILED&#95;NEW, VALIDATION&#95;FAILED&#95;SUPP, VALIDATION&#95;FAILED&#95;MODIFY, EXCEPTION, SOA&#95;PENDING, SOA&#95;CONFLICT for admin users)</td>
                  </tr>
                  <tr>
                     <td>disconnects</td>
                     <td>COMPLETE, PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>dldas</td>
                     <td>RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>lsrorders</td>
                     <td>PENDING, FOC, EXCEPTION, COMPLETE, CANCELLED, PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>e911s</td>
                     <td>RECEIVED, PROCESSING, COMPLETE, ADJUSTED&#95;COMPLETE, PARTIAL, ADJUSTED&#95;PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>tnoptions</td>
                     <td>RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>externalTns</td>
                     <td>COMPLETE, PARTIAL, FAILED</td>
                  </tr>
                  <tr>
                     <td>lidb</td>
                     <td>PROCESSING, COMPLETE, PARTIAL, FAILED</td>
                  </tr>
               </table>
Notified events: MESSAGING_LOST
The event notifications occur when TNs in your account are impacted due to orders outside of your account. For example, a MESSAGING_LOST event is reported on a TN with hosted messaging service in your account when a port in order placed by another account on the same TN is executed. An order placed in your account to remove the TN will NOT report a MESSAGING_LOST event.

#### **post**

The POST to the callback API contains a summary of the order that is independent of the type of the order or event that caused the notification callback.  This requires that the customer's end system place an API call to the Bandwidth Dashboard API to gather additional details on the change to the order or change to the TN due to the event, if that is important.  <br><br>
The payload of the POST for order notifications contains:
<ul>
<li> the Subscription ID that the notification is in response to.</li>
<li> the type of order that the notification applies to.</li>
<li> the order ID of the order that has changed </li>
<li> the customer order ID of the order that has changed (the element is considered optional, and will only be provided if the related order has a Customer Order Id)</li>
<li> the new state of the order </li>
<li> a message if one was attached as part of the state change.  This will often be present in error cases.</li>
<li> the body of any note that was attached to the order, if applicable</li>
<li> list of the completed telephone numbers for Port-in/Port-out/New Number/Disconnect orders in terminal state</li>
</ul><br><br>
The payload of the POST for event notifications contains:
<ul>
<li> the Subscription ID that the notification is in response to.</li>
<li> the type of event that the notification applies to.</li>
<li> list of the impacted telephone numbers for event notifications </li>
</ul><br><br>

##### Request

| URI Parameter | type | required |
|:--------------|:-----|:---------|

###### Body

**application/xml**

```xml
<?xml version="1.0"?>
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <!-- for order updates -->
    <OrderType>portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions</OrderType>
    <OrderId>...</OrderId>
    <CustomerOrderId>...</CustomerOrderId>
    <Status>COMPLETE | FAILED | PARTIAL | EXCEPTION ... </Status> <!-- for order state updates -->
    <Message>...</Message> <!-- for order state updates -->
    <Note>...</Note> <!-- for note events -->
    <CompletedTelephoneNumbers> <!-- for portins/portouts/orders/disconnects OrderTypes -->
        <TelephoneNumber> ... </TelephoneNumber>
        <!-- ... -->
    </CompletedTelephoneNumbers>
    <!-- for event updates -->
    <EventType> [MESSAGING_LOST] </EventType>
    <ImpactedTelephoneNumbers>
        <TelephoneNumber> ... </TelephoneNumber>
        <!-- ... -->
    </ImpactedTelephoneNumbers>
</Notification>

```

##### Response

**200**

**400**

