# Reporting {#top}

## Overview

* [Fetching Information](#fetch-info)
* [Pagination](#pagination)
* [Available Inventory: Rate Centers and Cities](#ratecenters)
* [Cities](#cities)
* [Available Inventory: NPA NXX combinations](#npa)
* [Billing Data Records REST APIs for Retrieving zipped files](#billing-apis)
* [<code class="post">POST</code> a BDR zipped file request](#post-bdr)
* [<code class="get">GET</code> a BDR zipped file record](#get-bdr)

## Fetching Information {#fetch-info}

Retrieving information from the Bandwidth Phone Number Dashboard is typically achieved by issuing an HTTP <code class="get">GET</code>  against an identifiable resource.  Rather than repeat all of the resource names in this section, simply suffice it to say that with a few exceptions, a <code class="get">GET</code>  on a resource will yield the available information about that resource.

Query parameters are used to filter or restrict the information returned to the caller.

## Pagination {#pagination}

Since an account may have a very large number of orders or TNs, the system uses the pagination mechanism to control the number of results that are returned.

When a query is issued and no pagination parameters are specified, the system returns the http status code of 404 (Not found) with a link in the body of the message that indicates how to specify the pagination parameters.

## Available Inventory: Rate Centers and Cities {#ratecenters}

The Rate Centers and Cities API Calls return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective.

The rules are as follows:

* If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only.
* If supported=true is omitted, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners
* If available=true is applied, then only Rate Centers in which we have available numbers are reported.
* If available is omitted, then all Rate Centers within the scope defined by supported will be returned.

These rules apply for both the `/rateCenters` and `/cities` API calls.


<table>
<tr>
<th align="left"></th>
<th align="left">Supported = true</th>
<th align="left">Supported is missing</th>
</tr>
<tr>
<td align="left">available = true</td>
<td align="left">Available numbers within the Bandwidth CLEC network</td>
<td align="left">Available numbers within the Bandwidth CLEC network combined with our partner networks</td>
</tr>
<tr>
<td align="left">available is missing</td>
<td align="left">Coverage in the Bandwidth CLEC</td>
<td align="left">Coverage of the combined Bandwidth CLEC + Partner networks</td>
</tr>
</table>

## Cities {#cities}

The `supported` and `available` query parameters used above in the `/rateCenters` API call operate in an identical manner for the `/cities` API.

## Available Inventory: NPA NXX combinations {#npa}

The API supports discovering available inventory per NPA-NXX for a user supplied area code and state.

## Billing Data Records REST APIs for Retrieving zipped files {#billing-apis}

This API call allows the user to retrieve Billing Data Records (BDRs) for an account from the network for all billing records created during a specified date range.

### <code class="post">POST</code> a BDR zipped file request {#post-bdr}

The <code class="post">POST</code> to request the retrieval is formatted to indicate the start and end date of the range.  Both dates are required for a valid request.

A successful response to the <code class="post">POST</code> also returns a link containing a BDR ID, included in the Location header.  This is the Identifier of the successful request, not the identifier of the file containing the BDRs. This link will be used to fetch the zipped file of billing records once the file is ready.

### <code class="get">GET</code> a BDR zipped file record {#get-bdr}

To retrieve the zipped file with the BDR records, a <code class="get">GET</code> is issued on the path returned in the location header.

If the zip file containing the BDR data is ready, this request will return `303 See Other` with a Location Header redirecting the request to the BDR zip file content.
<br>
<br>
