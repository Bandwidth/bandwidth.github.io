{% multimethod %}
{% endmultimethod %}

# Phone Number Lookup API {#top}

A Bandwidth API to provide carrier information for a telephone number or batch of telephone numbers. Currently supports lookups of telephone numbers in the mainland United States, Alaska, Hawaii, District of Columbia, and the provinces of Canada. Telephone numbers submitted must be in E.164 format to be processed.

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* User assigned the TN Lookup Role (please contact [support](https://support.bandwidth.com))
* Account enabled for Phone Number Lookup (please contact [support](https://support.bandwidth.com))

## API Authentication

The Phone Number Lookup API is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Table of Contents

* [Create a Phone Number Lookup Request](#create-tnlookup-request)
* [Fetch Status of a Request](#fetch-tnlookup-request-status)

## Create a Phone Number Lookup Request{#create-tnlookup-request}

Creates a request for a given TN, or batch of TNs. The limit to the amount of TNs per batch is 100.

{% extendmethod %}

### Supported Parameters

#### Request URL

<code class="post">POST</code>`https://numbers.bandwidth.com/api/v1/tnlookup`

#### Request Authentication

This resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

| Parameter                             | Mandatory | Description                                                                                                                                                  |
|:--------------------------------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-accountId (HTTP Header)          | Yes       | The ID of the Bandwidth account that the user belongs to. |
| tns                                | Yes       |An array of strings representing E.164 formatted telephone numbers. |

#### HTTP Response Codes

| Code                              |  Description  |
|:----------------------------------|:--------------|
|202|The request has been accepted for processing but not yet finished and in a terminal state (COMPLETE, PARTIAL_COMPLETE, or FAILED)|
|400|Bad Request. Ensure that your request payload is properly formatted and that the telephone numbers used are valid.|
|401|Unauthorized. Ensure that you are using the proper credentials for the environment you are accessing, your user has the proper role assigned to it, and that your Bandwidth account is enabled for TN Lookup access.|
|415|Invalid content-type. Ensure that your content-type header is set to application/json.|
|429|Too many requests. Reduce the amount of requests that you are sending in order to avoid receiving this status code.|
|5XX|Unexpected error. Please contact Bandwidth Support if your requests are receiving this status code for an extended period of time.|

{% common %}

### Example: Create a Phone Number Lookup Request

{% sample lang="http" %}

#### Request

```http
POST https://numbers.bandwidth.com/api/v1/tnlookup HTTP/1.1
Content-Type: application/json
X-accountId: 9999999
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

Example: One TN Request Payload

{
  "tns": [
    "19196104423"
  ]
}

Example: Multiple TNs Request Payload

{
  "tns": [
    "19196104423",
    "+19196104424"
  ]
}
```

#### Response

```http
HTTP/1.1 202 Accepted
Content-Type: application/json
Location: https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "IN_PROGRESS"
}
```


{% endextendmethod %}

---


## Fetch Status of a Request {#fetch-tnlookup-request-status}

Returns the result of a request by id.

If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive. Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it. Any other Response Code will indicate no information was available for the TN.

{% extendmethod %}

### Supported Parameters

#### Request URL

<code class="get">GET</code>`https://numbers.bandwidth.com/api/v1/tnlookup/{requestId}`

#### Request Authentication

This resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)


| Parameters           | Description |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestId (URL path parameter) | The id of the request that was returned from the POST method. |                                                 

#### Response Parameters

| Parameter     | Type     | Description     | Example   |
|:--------------|:---------|:----------------|:----------|
| requestId          | `string` |  The requestId. | 004223a0-8b17-41b1-bf81-20732adf5590 |
| status           | `string` | The status of the request | IN_PROGRESS, COMPLETE, PARTIAL_COMPLETE, or FAILED |
| result          | array of `object` |   The carrier information results for the specified telephone number.  | See examples to the right. |
| Response Code | `integer` |  Our vendor's response code.  | 0, 1, 2, 3, ... |
| Message       | `string`  | Message associated with the response code. | NOERROR |
| E.164 Format           | `string` | The telephone number in E.164 format.| 19196104424 |
| Formatted       | `string`  | The formatted version of the telephone number. | (919) 610-4424 |
| Country       | `string`  | The country of the telephone number in ISO 3166-1 alpha-2 format. | US or CA |
| Line Type     | `string`  | The line type of the telephone number. | Mobile |
| Line Provider     | `string`  | The service provider of the telephone number. | T-Mobile USA |
| Mobile Country Code     | `string`  | The first half of the Home Network Identity (HNI).| 310 |
| Mobile Network Code     | `string`  | The second half of the HNI.| 160 |
| failedTelephoneNumbers  | array of `string`| The telephone numbers whose lookup failed. | 18096105012 |

#### HTTP Response Codes

| Code                              |  Description  |
|:----------------------------------|:-----------|
|200|If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive. Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it. Any other Response Code will indicate no information was available for the TN.|
|400|Bad Request.  Ensure that you have set the requestId as a URL path parameter.|
|401|Unauthorized. Ensure that you are using the proper credentials for the environment you are accessing, your user has the proper role assigned to it, and that your Bandwidth account is enabled for TN Lookup access.|
|404|RequestId not found. Ensure that the requestId used in the URL path is valid and maps to a previous request that was submitted.|
|429|Too many requests. Reduce the amount of requests that you are sending in order to avoid receiving this status code.|
|5XX|Unexpected error. Please contact Bandwidth Support if your requests are receiving this status code for an extended period of time. |

{% common %}

### Example 1 of 6: IN_PROGRESS Status

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "IN_PROGRESS"
}
```

{% common %}

### Example 2 of 6: One TN - COMPLETE Status

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "COMPLETE",
  "result": [
    {
      "Response Code": 0,
      "Message": "NOERROR",
      "E.164 Format": "19196104424",
      "Formatted": "(919) 610-4424",
      "Country": "US",
      "Line Type": "Mobile",
      "Line Provider": "T-Mobile USA",
      "Mobile Country Code": "310",
      "Mobile Network Code": "160"
    }
  ]
}
```

{% common %}

### Example 3 of 6: Multiple TNs - COMPLETE Status

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "COMPLETE",
  "result": [
    {
      "Response Code": 0,
      "Message": "NOERROR",
      "E.164 Format": "+19196104424",
      "Formatted": "(919) 610-4424",
      "Country": "US",
      "Line Type": "Mobile",
      "Line Provider": "T-Mobile USA",
      "Mobile Country Code": "310",
      "Mobile Network Code": "160"
    },
    {
      "Response Code": 0,
      "Message": "NOERROR",
      "E.164 Format": "19196104423",
      "Formatted": "(919) 610-4423",
      "Country": "US",
      "Line Type": "Mobile",
      "Line Provider": "Verizon Wireless",
      "Mobile Country Code": "310",
      "Mobile Network Code": "010"
    }
  ]
}
```

{% common %}

### Example 4 of 6: Multiple TNs - PARTIAL_COMPLETE Status

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "PARTIAL_COMPLETE",
  "result": [
    {
      "Response Code": 0,
      "Message": "NOERROR",
      "E.164 Format": "+19196104424",
      "Formatted": "(919) 610-4424",
      "Country": "US",
      "Line Type": "Mobile",
      "Line Provider": "T-Mobile USA",
      "Mobile Country Code": "310",
      "Mobile Network Code": "160"
    }
  ],
  "failedTelephoneNumbers": [
    "+13992077164"
  ]
}
```

{% common %}

### Example 5 of 6: COMPLETE Status But No Information on a TN

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "COMPLETE",
  "result": [
    {
      "Response Code": 3,
      "Message": "NXDOMAIN",
      "E.164 Format": "19196104425",
      "Formatted": "(919) 610-4425",
      "Country": "US"
    }
  ]
}
```

{% common %}

### Example 6 of 6: FAILED Status

{% sample lang="http" %}

#### Request

```http
GET https://numbers.bandwidth.com/api/v1/tnlookup/004223a0-8b17-41b1-bf81-20732adf5590 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "requestId": "004223a0-8b17-41b1-bf81-20732adf5590",
  "status": "FAILED",
  "failedTelephoneNumbers": [
    "+13992077164"
  ]
}
```

{% endextendmethod %}
