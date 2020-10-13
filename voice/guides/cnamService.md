# CNAM per DIP API setup instructions

## Overview
Bandwidth’s Caller Name (CNAM) service is a low-cost per-query service that provides the Caller Name on VoIP calls in the US and Canada.
With this service, the CNAM database is queried using a simple HTTPS GET Request.
Once the request is made, the calling name is returned to the customer application or dial plan.
The CNAM data is managed by the phone company who provides the phone numbers to its customers.

## CNAM setup instructions via HTTPS
The simplest method of accessing the CNAM service is via an HTTPS GET request. The query information will be passed in the GET, and the entire response will be the CNAM data. Using an HTTP library that supports keep-alives, as well as HTTP pipelining, can help ensure highest performance service.

Bandwidth’s CNAM service will authenticate based on two factors:
   1. The `CompanyID` passed will be checked to ensure CNAM service is enabled.
   1. A password will be validated.

## Query format
`https://cnam.dashcs.com/?companyId=<companyId>&password=<pass>&number=<phone number>`

Note: Please ensure that the password is URL-encoded.

## Query parameters 
| Query Type                | Required or Optional | Type                     | Value/Notes |
|---------------------------|----------------------|--------------------------|-------------|
| CompanyId                 | Required             | Integer                  | Assigned during implementation/onboarding. |
| Password                  | Optional             | String                   | Assigned during implementation/onboarding. |
| Number                    | Required             | 11-digit TN              | (1+10 digit TN) that's used to query CNAM information. |
| DNIS                      | Optional             | 11-digit TN              | If (1+10 digit TN) is supplied, detailed billing reports per caller number can be provided. |
| Reference                 | Optional             | 20-character max, string | The reference parameter can be used to differentiate queries for billing purposes. For instance, if billing reports were desired on a per-reseller basis, the reseller code could be sent in the reference field. |
| Test (shown on next page) | Optional             | Boolean                  | If a value is supplied for the querystring parameter “test”, the query will be considered a test, and a random name will be returned. These queries aren't billed. |

## Notes
Phone numbers can be supplied as full E.164 numbers (starting with the country code). Only NANPA numbers are supported, so 10-digit numbers will automatically be prefixed with a 1.

For more information follow the links below:
* [Manage through Dashboard](https://support.bandwidth.com/hc/en-us/articles/360025716114-How-to-Identify-and-Manage-Telephone-Numbers-Enabled-with-CNAM-)
* [SIP Subscribe/Notify](https://support.bandwidth.com/hc/en-us/articles/360001519453-CNAM-Subscribe-Notify)
