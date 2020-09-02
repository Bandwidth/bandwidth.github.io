{% multimethod %}
{% endmultimethod %}

# Downloading Reports

## Overview

* [About](#about)
* [Request a Report](#request-report)
* [Query Report Status](#status)
* [Download the Report](#download)

## About {#about}
The Bandwidth numbers API allows you to automate the creation and download of certain reports related to account usage. This is handled through various requests to our `/billingReports` endpoint. The available reports are as follows:

| Report Type          | Description                                                                                                                                          |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| BDR                  | Billing Detail Records for Voice Services - per call information, available on day to day basis - may not reflect final invoice                      |
| MDR                  | Message Detail Records - per message information - may not reflect final invoice                                                                     |
| INVOICE              | A copy of the invoice file or files for the specified date range                                                                                     |
| STMTBDR              | BDR records that are aligned with the invoice for Voice Services                                                                                     |
| DIDSNAP              | A list of telephone numbers, aligned with invoice                                                                                                    |
| DIDSNAP_MSG          | A list of telephone numbers that are enabled for messaging, aligned with invoice                                                                     |
| RECORDINGBDR         | Billing Detail Records for Recording Services - per recording information, available on day to day basis                                             |
| RECORDINGSTMTBDR     | BDR records that are aligned with the invoice for Recording Services                                                                                 |
| TRANSCRIPTIONBDR     | Billing Detail Records for Transcription Services - per call transcription information, available on day to day basis                                |
| TRANSCRIPTIONSTMTBDR | BDR records that are aligned with the invoice for Recording Services                                                                                 |
| CNAMBDR              | Record of CNAM Subscribe and Notify queries/dips, available on day to day basis                                                                      |
| CNAMSTMTBDR          | Record of CNAM Subscribe and Notify queries/dips, aligns with invoices                                                                               |
| CONFBDR              | Billing Detail Records for Transcription Services - per conference information, available on day to day basis                                        |
| CONFSTMTBDR          | BDR records that are aligned with the invoice for Conferencing Services                                                                              |

{% extendmethod %}
## Request a Report {#request-report}
Creating a report starts with a <code class="post">POST</code> request to `https://dashboard.bandwidth.com/api/accounts/{accountId}/billingReports`, detailing the date range for the report as well as type of report you wish to download. A successful response will include a body and location header, which contains a URI with the report ID to be used in later requests.

{% common %}
### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/billingReports HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<BillingReport>
    <Type>BDR</Type>
    <DateRange>
        <StartDate>2020-05-21</StartDate>
        <EndDate>2020-05-29</EndDate>
    </DateRange>
</BillingReport>
```
### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ReportStatus>RECEIVED</ReportStatus>
    <Description>The report archive is currently being constructed.</Description>
</BillingReportCreationResponse>
```
{% endextendmethod %}


{% extendmethod %}
## Query Report Status {#status}
Because of the asynchronous nature of the `/billingReports` endpoint, a <code class="post">POST</code> request does not necessarily mean the report is ready to be consumed. A <code class="get">GET</code> request to the URI received in the location header will return the report status, letting us know if it is ready to be downloaded or not. Expected responses in the `<ReportStatus>` element are `PROCESSING` and `COMPLETED`.

{% common %}
### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ReportStatus>COMPLETED</ReportStatus>
    <Description>The report archive is constructed.</Description>
</BillingReportRetrievalResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Download the Report {#download}
Once the report status query returns `COMPLETED`, we are ready to download the requested report. This can be done performed by making a <code class="get">GET</code> request to the URI received in the location header and appending it with `/file` . The 200 response will include a `Content-Disposition` header indicating the filename and a download of the .zip file will begin.

{% common %}
### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2/file HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8
Content-Disposition: attachment; filename=bdrs_2020-05-21_2020-05-29.zip
```
{% endextendmethod %}
