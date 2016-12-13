# Bandwidth Dashboard REST API Documentation API documentation version v1
http://null

---

## /accounts
The account is the root resource for many of the operations in the Bandwidth Dashboard API.  <br>
The account is represented by an account id, which is the resource that represents a Bandwidth customer, providing a root resource for all of the customer's attributes and services <br>
The API calls that are used to manage the details of a customer account, and to manage the resources that a Bandwidth customer has access to or control over, are accessed through the /accounts resource. 

### /accounts/{accountId}
This API retrieves and updates an account's information as specified by the given account ID. Access to information pertaining to a specific account will require credentials that have been assigned to that account, preserving the security of a customer’s information. <br>Note that DELETE is currently unsupported.

* **get** *(secured)*: This API call retrieves information about the account indicated by the Account ID.

### /accounts/{accountId}/availableNumbers
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
            areaCode<br>
            localVanity
        </td>
        <td></td>
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
        <td>Requested vanity number. Valid range is from 4 to 7 alphanumeric characters</td>
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

* **get** *(secured)*: Retrieves the phone numbers according to the input parameters

### /accounts/{accountId}/inserviceNumbers
This API call will find the in-service numbers on the indicated account. <br>
The inservicenumbers query will return all of the in-service numbers on the account, filtered with a wide range of 
search query parameters.  Note that many search combinations will not return a meaningful result because the search 
parameters are mutually exclusive.  Since mutually exclusive search criteria result from data that can't  satisfy all of
the criteria, these are not flagged as errors, and instead simply return an empty result.

* **get** *(secured)*: Retrieves a list of in-service phone numbers associated with the account ID. There are multiple search parameters for searching for in-service numbers:
<ul>
    <li>size and page for pagination</li>
    <li>area code</li>
    <li>Npa-Nxx</li>
    <li>LATA</li>
    <li>state</li>
    <li>rate center</li>
</ul>

### /accounts/{accountId}/inserviceNumbers/totals
A GET on this resource returns the total number of in-service numbers for the given account.

* **get** *(secured)*: Returns the total number of in-service numbers for the given account.

### /accounts/{accountId}/inserviceNumbers/{tn}
This resource acts as a verifier for in-service telephone numbers.

* **get** *(secured)*: A GET on the number desired will return a 200 OK if the number is in service on the account, or a 404 not found.

### /accounts/{accountId}/orders
An attempt to order Telephone Numbers into an account creates an order record that is maintained by the Bandwidth Dashboard to trace the attempt to order the Telephone Numbers, and provide feedback on the success or failure of that attempt. <br>
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

* **get** *(secured)*: GET is used to retrieve order ids and order details for previously attempted Telephone Number orders.
* **post** *(secured)*: <span>A POST creates a request for Telephone Numbers</span>
<br>
A POST on the /orders resource is used to request that the system provide one or more TNs for use by the account.  The post creates a new number order record to preserve the request, as well as the response of the Bandwidth Dashboard to the request.  A well-formed POST on the /orders resource will create an order record, and return an order-id string that can be used to uniquely identify the new number order request.  The details of success and failure of the request for TNs will be preserved and linked to the returned order id.<br><br>
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
        <td>Optional value for Id set by customer</td>
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
The unique components of the payload are described in the table below.  These are combined with the common payload elements in the first table above to create a full order payload.  Some complete payloads are captured in the examples. <br><br>
<table style="text-align: left; width: 100%;" border="1"
 cellpadding="2" cellspacing="0">
  <tbody>
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

### /accounts/{accountId}/orders/{orderid}
The orderid is an explicit link to a single new number order in the Bandwidth Dashboard, and can be used to retrieve information about that new number order including:
<ul>
<li>Order status information</li>
<li>Order outcome</li>
<li>order created and modified dates</li>
<li>The telephone numbers that were successfully ordered</li>
<li>The details of the order request</li>
</ul>

* **get** *(secured)*: GET all of the details associated with an identified order
* **put** *(secured)*: With the introduction of Backorder capabilities, new number orders may stay in backordered state while the order is filled.   While in this state it is possible to update the modifiable fields in the record, as well as to request that backorder processing of the order be ended.
The fields that can be updated are...
<ul>
<li>The order name</li>
<li>The customer order id</li>
<li>The backordered state.</li>
</ul>
Specifying a &lt;CloseOrder&gt; value of true will cancel the backorder request, leaving the currently ordered numbers on the account.  No further numbers will be added to the account as a result of the order.

### /accounts/{accountId}/orders/{orderid}/areaCodes
Retrieves the area codes of the phone numbers from the specified order.

* **get** *(secured)*: Retrieves the area codes of the phone numbers from the specified order.

### /accounts/{accountId}/orders/{orderid}/npaNxx
Retrieves the Npa-Nxx of the phone numbers from the specified order.

* **get** *(secured)*: Retrieves the Npa-Nxx of the phone numbers from the specified order.

### /accounts/{accountId}/orders/{orderid}/totals
Retrieves the total quantity of phone numbers from the specified order.

* **get** *(secured)*: Retrieves the total quantity of phone numbers from the specified order.

### /accounts/{accountId}/orders/{orderid}/tns
The TNs resource accesses the Telephone Numbers associated with the given order ID of the given site ID of the given account.

* **get** *(secured)*: returns a list of phone numbers associated with the ID of a given account.

### /accounts/{accountId}/orders/{orderid}/notes
The /notes resource manages a note or set of notes associated with an order.  Notes can only be appended to the collection, and are not individually addressable or modifiable once added.

* **post** *(secured)*: Updates the Notes resource by adding a note.
* **get** *(secured)*: Retrieve the set of notes associated with an order.

### /accounts/{accountId}/orders/{orderid}/history
History information is available on orders that have gone through multiple transitions, which is possible in the case that telephone numbers are backordered.  In this case the order will have one or more OrderHistory records associated with it, detailing the set of events that have affected the order.

* **get** *(secured)*: Retrieve the history information associated with an order

### /accounts/{accountId}/lnpchecker
The lnpchecker resource performs a portability analysis for a set ot TNs, returning information about the coverage and losing carrier characteristics of the TNs allowing a better assessment of which port requests to submit.

* **post** *(secured)*: Request portability information on a set of TNs 

### /accounts/{accountId}/portins
The portins endpoint is used to manage requests to port a number into the Bandwidth Dashboard.  Like many other requests, the portins endpoint causes the creation of an <b>order</b> that is used to manage the porting event throughout the lifecycle of the request.
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
                    accountid
                </p>
            </td>
            <td valign="top">
                <p align="center">
                    No
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
                    Internal customer order id for tracking the order
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
                    If not entered, the next available FOC date will be used. It if is entered, order will be rejected if date is earlier than losing carriers
                    minimum number of days to port-out or if date is a weekend or holiday. Format is ISO8601 encoding of ZULU/UTC/GMT such as
                    “2013-05-10T15:14:22Z”.
                </p>
                <p>
                    If the port is capable of on demand activation then the time value in the request considered to be the default activation time of the port.
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
                    Unique customer SPID associated with Bandwidth.
                </p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p>
                    BillingTelephoneNumber
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
                    Subscriber business name.
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
                    Subscriber last name.
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
                    Country.
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
                    siteid
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
                    See section on SIP Peers
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
                    By default all portin orders are classified as full ports. If the attribute PartialPort is specified as true, the order will be submitted
                    as a partial port
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
                    customer will manually activate the port, and that the Bandwidth Dashboard will activate the port at a default activation time if the
                    customer does not manually activate the port. This is not supported for wireless ports, and cannot be changed via a SUPP.
                </p>
            </td>
        </tr>
    </tbody>
</table>

* **get** *(secured)*: Retrieves the port-in requests for the given account ID.
* **post** *(secured)*: Creates a port-in request under the given site ID and sippeer ID as specified in the body.<br>
Upon a successfully-submitted payload, the order will have a status of "PENDING_DOCUMENTS".<br>
In order to have a successful POST, the payload will need to have a specific <strong>site ID</strong> and <strong>sippeer ID</strong>, according to the account.
<br><br>
<strong>TnAttributes</strong> - attributes to be assigned to the telephone number. Optional parameter. Possible values: "Protected"

### /accounts/{accountId}/portins/{orderid}
This resource retrieves information associated with the port-in associated with the ID number specified.

* **get** *(secured)*: Retrieves the information associated with the specified port-in ID number.
* **put** *(secured)*: It is possible to change ("SUPP" in LNP terms) an existing LNP order.  This is done via a PUT on the existing order-id.
Since many of the entries in an LNP Order cannot be changed after the initial order is placed (the list to TNs for example) the PUT on a porting order-id does *not* require that the full order payload is included.<br/>

* **delete** *(secured)*: Cancels the port-in order. This does not remove the order from the system.  It simply places the existing order in a canceled state.
Note that only a pending port-in order can be canceled; if the order was previously canceled or completed, then a DELETE will not be possible. 

### /accounts/{accountId}/portins/{orderid}/notes
The /notes resource manages a note or set of notes associated with an order.  Notes can only be appended to the collection, and are not individually addressable or modifiable once added.

* **post** *(secured)*: Updates the Notes resource by adding a note.
* **get** *(secured)*: Retrieve the set of notes associated with an order.

### /accounts/{accountId}/portins/{orderid}/history
This resource retrieves the history of a port-in order.

* **get** *(secured)*: Retrieves the history of the specified port-in order.

### /accounts/{accountId}/portins/{orderid}/activationStatus

* **get** *(secured)*: Retrieve the currently activated status for customer activated (triggered) portin orders. The payload returns the list of activated TNs associated with the order. It also returns a list of the TNs associated with the order that have not yet been activated <br><br>
At this time all phone numbers associated with a PON will be activated at the same time, but a change to per-TN activation is coming and will use the same basic payload and activation model.

* **put** *(secured)*: Sets the activation time for the portin order.  <br> <br>
This API call is currently used to set the Activation time of the customer activated (triggered) port.
<ul>
<li>If the time is in the past all of the TNs in the portin request will be activated 'immediately'.</li>
<li>If the time is within the three days after the approved FoC date, the auto-activation time for the port will be set to that time</li>
</ul>
Activation of individual telephone numbers will be enabled in a future release, but are not currently modifiable via this API

### /accounts/{accountId}/portins/{orderid}/loas
The LOAS resource allows the uploading and storage of files that are associated with port-in orders.   Port-in uploads use the standard form-data approach for http file upload.  Details of the POST API call that drives the file upload are provided below.
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
<code> curl -H 'Content-Type: <MIME Type>' --data-binary "@<Filename>" –iv <Base URL>/portins/<order-id>/loas<br>
</code>
    <br>
an example for the upload of a pdf file is...<br>
    <br>
<code> curl -H 'Content-Type: application/pdf' --data-binary "@Test_LOA.pdf" -iv <BASE URL>/portins/<order-id>/loas<br>
</code> 

* **get** *(secured)*: Retrieves the list of the loa (and other) files associated with the portin order
* **post** *(secured)*: POSTing to the /loas resource will enable the upload of the file.  The key attribute to the POST is ensuring that the headers are correctly set to support the file upload.<br>
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

### /accounts/{accountId}/portins/{orderid}/loas/{fileid}
A GET on the loas file resource will cause the downloading of the file in a manner consistent with typical browser file downloads.

* **get** *(secured)*: Retrieves the list of the loa (and other) files associated with the portin order
* **put** *(secured)*: A PUT on the filename will update / replace the identified file id.  The format of the PUT is identical to that of the POST.<br>
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

* **delete** *(secured)*: Retrieves the list of the loa (and other) files associated with the portin order

### /accounts/{accountId}/portins/{orderid}/loas/{fileid}/metadata
It is often useful to attach additional data to an order in the form of an attached file, and so the existing LOA capability has been extended to optionally allow different file information to be included with a file, to describe type and purpose information.  The MetaData associated with a file includes a file document name and a document type, which is one of [LOA | INVOICE | CSR | OTHER].<br>
Naming of the existing "loas" API has been preserved to ensure backwards compatibility.

* **get** *(secured)*: Retrieves the metadata associated with the file.
* **put** *(secured)*: Associate metadata with the file named in the resource path.  This will describe the file, and declare the data that is contained in the file, selected from a list of [LOA | INVOICE | CSR | OTHER].

* **delete** *(secured)*: Deletes the metadata previously associated with the identified file.

### /accounts/{accountId}/portins/{orderid}/areaCodes
Retrieves a list of all area codes of the telephone numbers associated with the specified port-in number.

* **get** *(secured)*: Retrieves a list of area codes associated with the specified port-in number and displays them in the payload.

### /accounts/{accountId}/portins/{orderid}/npaNxx
Retrieves a list of all Npa-Nxx of the telephone numbers associated with the specified port-in number.

* **get** *(secured)*: Retrieves a list of Npa-Nxx associated with the specified port-in number and displays them in the payload.

### /accounts/{accountId}/portins/{orderid}/tns
Retrieves a list of all telephone numbers associated with the specified port-in number.

* **get** *(secured)*: Retrieves a list of telephone numbers associated with the specified port-in number and displays them in the payload.

### /accounts/{accountId}/portins/{orderid}/totals
Retrieves a total count of telephone numbers associated with the specified port-in number.

* **get** *(secured)*: Retrieves a total count of telephone numbers associated with the specified port-in number and displays them in the payload.

### /accounts/{accountId}/portins/totals
This resource interacts with the total number of port-ins associated with an account.

* **get** *(secured)*: Retrieves the total count of port-ins.

### /accounts/{accountId}/disconnects
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
        <td>TelephoneNumberList</td><td>A list of telephone numbers to disconnect.</td>
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

* **get** *(secured)*: retrieve a list of disconnect orders that is associated with an account
* **post** *(secured)*: Create a Disconnect order, and disconnect the numbers listed in the disconnect order.

### /accounts/{accountId}/disconnects/{disconnectid}
This method retrieves the information associated with the disconnect order specified.

* **get** *(secured)*: Retrieves the information associated with the disconnect order specified.

### /accounts/{accountId}/disconnects/{disconnectid}/notes
The /notes resource manages a note or set of notes associated with an order.  Notes can only be appended to the collection, and are not individually addressable or modifiable once added.

* **post** *(secured)*: Updates the Notes resource by adding a note.
* **get** *(secured)*: Retrieve the set of notes associated with an order.

### /accounts/{accountId}/discnumbers
This API call provides information on numbers that have been disconnected from an account.

* **get** *(secured)*: Retrieves a list of disconnected numbers associated with the account. There are optional search parameters to limit the discNumbers payload

### /accounts/{accountId}/discnumbers/totals
Retrieves a total number of disconnects for the account within the specified (optional) date range.

* **get** *(secured)*: Retrieves a total number of disconnects.

### /accounts/{accountId}/hosts

* **get** *(secured)*: Retrieve information about the hosts of account, as guided by optional search parameters.

### /accounts/{accountId}/portouts
This resource deals with the port-out requests of the account ID; this resource can retrieve a port-out request
.

* **get** *(secured)*: Retrieves a list of port-out requests for the given account ID.

### /accounts/{accountId}/portouts/{orderid}
This resource retrieves information associated with the port-out ID number specified.

* **get** *(secured)*: Retrieves the information associated with the specified port-out ID number.

### /accounts/{accountId}/lsrorders
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

* **get** *(secured)*: Retrieves a list of lsrorders.  Various query parameters can be used to filter the list of LSR Orders as documented below.

* **post** *(secured)*: A POST creates a lsrorder request to initiate a port-out action.<br>
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

### /accounts/{accountId}/lsrorders/{orderid}
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

* **get** *(secured)*: Retrieves the information associated with the specified lsr ID number.
* **put** *(secured)*: Updates the information associated with the specified LSR.  This is also used to cancel an order, by changing the order status field to canceled.  This is the only case where the status can be changed, and when this is done, all other fields are left as they were prior to the cancellation.  Please see the example below.

### /accounts/{accountId}/lsrorders/{orderid}/history
This resource retrieves the history of a lsr order.

* **get** *(secured)*: Retrieves the history of the specified lsr order.

### /accounts/{accountId}/lsrorders/{orderid}/notes
The /notes resource manages a note or set of notes associated with an order.  Notes can only be appended to the collection, and are not individually addressable or modifiable once added.

* **post** *(secured)*: Updates the Notes resource by adding a note.
* **get** *(secured)*: Retrieve the set of notes associated with an order.

### /accounts/{accountId}/lidbs
The LIDBs Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to add Calling Line Information with a telephone number.  This API allows the creation and observation of a <b>"Line Information Data Base (LIDB)"</b> work order that causes an update of a person's calling name identification in a network Database.  The entry of this information in the network database in turn causes the display of their name on the phone of the people that they call. <br>
This API call supports <b>GET</b> to retrieve information about outstanding LIDBs orders, and <b>POST</b> to create those orders.

* **get** *(secured)*: Retrieve a list of the LIDB orders that are associated with the account.

* **post** *(secured)*: Create a LIDB order to associate Calling Name Information with a TN or list of CountOfTNs
The key data elements in the submission are -
    <table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>TelephoneNumbers</td>
          <td>A list of telephone numbers that will all assume the SubscriberInformation that is listed in the payload.  In an enterprise context it is not uncommon for all of the served telephone numbers to use the same string for the Subscriber Information.</td>
        </tr>
        <tr>
          <td>SubscriberInformation</td>
          <td>This is the field that is displayed to the user receiving the phone call from the Telephone numbers in the TelephoneNumberList</td>
        </tr>
        <tr>
          <td>UseType</td>
          <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>Can be PRIVATE or PUBLIC.   If it is tagged as PRIVATE then the data will be provided, but the display will not be provided on a standard phone call.  The element is required</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order.  The element is optional.</td>
        </tr>
      </tbody>
    </table>

### /accounts/{accountId}/lidbs/{lidbid}
This API returns data about the specific LIDBs Order specified as the resource

* **get** *(secured)*: Retrieve information about a specific Lidb Order identified as the resource.

### /accounts/{accountId}/dldas
The DLDAs Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to associate the street address with the telephone number.  This API allows the creation and observation of a <b>"Directory Listing and Directory Assistance"</b> work order that causes an update of a address information in a network Database. <br>
This API call supports <b>GET</b> to retrieve information about outstanding DLDAs orders.

* **get** *(secured)*: Retrieve a list of the DLDA orders that are associated with the account.

* **post** *(secured)*: Create DLDA order to associate the street address with the telephone number.
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
      <td>Can be LISTED, NON_LISTED or NON_PUBLISHED. The element is required</td>
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
  </tbody>
</table>
<b>Business Listings...</b> <br>Business Listings sort differently than Residential Listings, and must be submitted accordingly.  Since Business Listings sort starting at the beginning of the name, where Residential Listings sort on Last Name, the parts of the business name that will govern the sorting need to be entered in the LastName field.  For example, Joe's Pizza sorts starting with Joe, so the entire business name would be entered in the LastName field, and the Firstname could be left blank.  If there was a portion of the name that was not important from a sorting perspective (perhaps "the best pizza in town"), that portion could be placed in the FirstName field.<br>

### /accounts/{accountId}/dldas/{orderid}
This API returns data about the specific DLDAs Order specified as the resource

* **get** *(secured)*: Retrieve information about a DLDA Order with specified ID.

* **put** *(secured)*: Update DLDA order to associate the street address with the telephone number.
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
          <td>Can be LISTED, NON_LISTED or NON_PUBLISHED. The element is required</td>
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
      </tbody>
    </table>

### /accounts/{accountId}/dldas/{orderid}/history
The history API returns the various events that have impacted the specified DLDA order. 

* **get** *(secured)*: Retrieve the history information associated with a named DLDA order.  This indicates the various states that the order has passed through, as well as the current state of the order as the last entry.

### /accounts/{accountId}/e911s
The E911s Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to associate the street address with the telephone number.This API allows the creation and observation of a <b>"E911"</b> work order that causes an update of a address information in a network Database. <br><br>
The E911 order processing model is consistent with the overall model of creating an order or request with the initial POST, and then checking on the status of that order using callbacks and / or GET while that order progresses through the various steps in the process. <br><br>
In the case of an E911s order, the states that the order may reside in are...<br>
RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED, ADJUSTED\_COMPLETE, and ADJUSTED\_PARTIAL<br>
where the "ADJUSTED" indicates that the provisioning was successful, but that the street address was subtly changed to reflect a geocodable address.  As in other order-types, PARTIAL indicates that there were some errors detected, but that all elements of the order that could be processed were processed.  In this case the order record will need to be examined to determine the items that failed. <br><br>

* **get** *(secured)*: Retrieve a list of the E911 orders that are associated with the account.

* **post** *(secured)*: Create E911 order to associate the address with the telephone number.
The key data elements in the submission are -
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
      <td>This field is required in the case of a new address assignment.  Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour.  Streetname, City, and State are required.  House Number is currently required, although this enforcement may be relaxed in the future.</td>
    </tr>
    <tr>
      <td>DeleteTNSpecificE911Address</td>
      <td>Can be true or false. If value is true then Address and CallerName should not be specified.</td>
    </tr>
  </tbody>
</table>

### /accounts/{accountId}/e911s/{orderid}
This API returns data about the specific E911s Order specified as the resource

* **get** *(secured)*: Retrieve information about a E911 Order with specified ID.

### /accounts/{accountId}/e911s/{orderid}/history
The history API returns the various events that have impacted the specified E911 order.

* **get** *(secured)*: Retrieve the history information associated with an order

### /accounts/{accountId}/tnoptions
The tnoptions Resource represents the requests made to the Bandwidth Dashboard API to add or otherwise manage a request to assign line features to the telephone number.This API allows the creation and observation of a <b>"TN Option"</b> work order that causes an update of a address information in a network Database. <br>

* **get** *(secured)*: Retrieve a list of the TN Option orders that are associated with the account.

* **post** *(secured)*: Create TN Option order to assign line features to the telephone number.
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
  </tbody>
</table>
There are TN Option values:
<ul>
<li> TelephoneNumber - [ 10digit ] </li>
<li> CallingNameDisplay - [ on | off | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> NumberFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RPIDFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RewriteUser - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> CallForward - [ 10digit | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Protected - [ true | false | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Sms - [ on | off | <i>unchanged</i>] </li>
<li> FinalDestinationURI - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
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
</ul>
Where:
<ul>
<li type="square"> <i>systemdefault</i> - implies that the element profile value should be removed so that the TN changes back to the default system behavior;</li>
<li type="square"> <i>unchanged</i> - the value should remain unchanged - implies a read before write model.</li>
<li type="square"><u>Leaving the element out of the payload is equivalent to <i>unchanged</i>.</u></li>
</ul>

### /accounts/{accountId}/tnoptions/{orderid}
This API returns data about the specific TN Option Order specified as the resource

* **get** *(secured)*: Retrieve information about a TN Option Order with specified ID.

### /accounts/{accountId}/tnoptions/{orderid}/history
The history API returns the various events that have impacted the specified TN Option order.

* **get** *(secured)*: Retrieve the history information associated with an order

### /accounts/{accountId}/lineOptionOrders
<strong>The LineOptionsOrder endpoint will be deprecated Dec. 31 2016.  It has been replaced with the tnOptions order which provides the same functionality, with an improved level of tracking and management.</strong>

* **post** *(secured)*: This link is used for configuring multiple telephone numbers with specific attributes:<br/>
CNAM, NumberFormat, RPIDFormat, RewriteUser, CallForward, Protected and Sms.<br/>
There are some possible attribute values:
<ul>
<li> TelephoneNumber - [ 10digit ] </li>
<li> CallingNameDisplay - [ on | off | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> NumberFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RPIDFormat - [ 10digit | 11digit | e164 | <i>unchanged</i> | <i>systemdefault</i> ] </li>
<li> RewriteUser - [ string | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> CallForward - [ 10digit | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Protected - [ true | false | <i>unchanged</i> | <i>systemdefault</i>] </li>
<li> Sms - [ on | off | <i>unchanged</i>] </li>
</ul>
Where:
<ul>
<li type="square"> <i>systemdefault</i> - implies that the element profile value should be removed so that the TN changes back to the default system behavior;</li>
<li type="square"> <i>unchanged</i> - the value should remain unchanged - implies a read before write model.</li>
<li type="square"><u>Leaving the element out of the payload is equivalent to <i>unchanged</i>.</u></li>
</ul>

### /accounts/{accountId}/subscriptions
The *+subscriptions+* resource is used to create e-mail or callback subscriptions. The subscriptions will notify the user about events
concerning specific orders or orders of a specific type.<br>
E-mail subscriptions can be configured to sent emails immediately after an event occurred or on daily basis as a digest with all events
of the previous day. Callback notifications will always be send immediately.

* **get** *(secured)*: GET is used to retrieve all subscriptions for the account (including email and callback subscriptions).
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <Status> element will indicate if an error is being encountered when the Bandwidth Dashboard attempts to place the callback.

* **post** *(secured)*: A POST on the /subscriptions resource is used to request a new subscription for an account.<br>
The POST creates a new e-mail or callback subscription. A well-formed POST will create a subscription resource, and return a
subscription ID as part of the location header. The ID is used to uniquely identify the subscription.
The user should submit the desired e-mail address for notifications and the frequency with which he wants to get the updates:
DAILY (for daily digests) or NONE (immediately after events). OrderId is optional. If OrderId is specified only notifications will
be sent for events related to that order. If OrderId is omitted, notifications will be sent related to events of all orders of the specified type.<br>
For email subscriptions use a body like this:<br>
```
<Subscription>
    <OrderType> [ portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns] </OrderType> <!-- required -->
    <OrderId> [ UUID ] </OrderId> <!-- optional, if provided notifications will only be sent for events regarding this specific order, if omitted notifications regarding events for all orders of the specified type will be sent -->
    <EmailSubscription>
        <Email> [ email address] </Email>
        <DigestRequested> [ NONE | DAILY ] </DigestRequested> <!-- required -->
    </EmailSubscription>
</Subscription>
```
For callback subscriptions use a body like this:<br>
```
<Subscription>
    <OrderType> [portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns] </OrderType> <!-- same rules and values as above -->
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
The credentials used to impose security on the callbacks are defined in the <CallbackCredentials> element.  The Basic authentication is straightforward, but the <PublicKey> requires a little more explanation.  Please see the document to the left on Mutual Authentication for CallBacks.<p>
When an event happens that had been subscribed to with a callback subscription (order update, note added to order), the following payload
will be POSTed to the URL of the callback subscription.<br>More detail can be found in the API documentation for the fictitious endpoint /callbacks
```xml
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>portins | portouts | orders | disconnects | dldas | lsrorders | e911s| tnoptions | externalTns</OrderType>
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

### /accounts/{accountId}/subscriptions/{subscriptionid}
Allows to retrieve information about the specific subscription or delete the subscription.

* **get** *(secured)*: Retrieves the information associated with the subscription ID.
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <status> element will indicate if an error is being encountered when the Bandwidth Dashboard attempts to place the callback.

* **put** *(secured)*: Updates the subscription. This can be be used to update various values (expiry, email address, url, credentials...).
Note that the initial state changes for an order may happen very quickly, so subscribing to an
order once the system creates it needs to account for the fact that the initial state may be
different based on timing factors. It is recommended that the application creating the
subscription check the order status after the subscription is created to ensure the correct initial
condition. <br>
The same rules around valid or possible values as for POSTs apply.

* **delete** *(secured)*: Deletes the specified subscription. Note that deleting subscriptions is only supported on a one-by-one basis.
Deleting all subscriptions associated with an order requires GETting all of those subscriptions, then deleting them one by one.

### /accounts/{accountId}/availableNpaNxx
Retrieves the quantity of available phone numbers in the given area code. The numbers are grouped by alike Npa-Nxx.

* **get** *(secured)*: Retrieves a list of available Npa-Nxx telephone numbers.

### /accounts/{accountId}/reports
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
The report resource of the API allow the management of reports in the Bandwidth Dashboard.

* **get** *(secured)*: GET Retrieves a list of the report templates available for use within the Iris application.  This list contains the basic description of the reports, including a report ID that can be used to access further details about the report, and thus facilitating the subsequent choice and creation of an instance of the report.

### /accounts/{accountId}/reports/{reportid}

* **get** *(secured)*: A GET issued on a specific report (as identified by it's ID) will return all of the details of that report, allowing the API user to create an instance of that report.  Those details include:
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
            </ul>
        </ul>
    </ul>

### /accounts/{accountId}/reports/{reportid}/instances
The report instance endpoints of the Iris API allow users to view and manage report instances for a specific report.
Report instances capture invocations of a report, including the specific set of parameters provided and any output
generated as a result.

* **get** *(secured)*: Retrieve report instances associated with a specific report, including the up-to-date report generation status.

* **post** *(secured)*: POSTing to the instances resource of a specific report will create an instance of that report that pulls from data that is filtered by the supplied parameters.  Those parameter values must match the parameters that are required as defined by the report, as provided by issuing a GET on the report. <br><br>
The sequence of events is essentially to...
<ol>
    <li>issue a GET on the desired report/report-id to retrieve the parameter and other details of the report</li>
    <li>issue a POST on the /report/report-id/instances resource, using the parameter information retrieved in the initial call to define the data that is needed</li>
</ol>
The Location header will provide a link to the created report instance.  Note that the report instance itself contains only the metadata describing the instance.  A subsequent call to /report/report-id/instances/instance-id/file must be made to actually download the file.

### /accounts/{accountId}/reports/{reportid}/instances/{instanceId}
Retrieve information on a specific instance of a specific report.

* **get** *(secured)*: A GET on the specific instance will retrieve report instance details, including the current report instance status.  All of the information required to understand the nature and limits of the reported data are contained in the payload, including the general description information as well as the list of parameters and the values assigned to those parameters.

### /accounts/{accountId}/reports/{reportid}/instances/{instanceId}/file
The file resource reflects the actual downloadable information described by the Instance metadata.  Invoking an API call on the file resource will result in a download of the file containing the information, as long as the file is finished preparation and ready for download.

* **get** *(secured)*: Retrieve report instance output file, if output is available.

### /accounts/{accountId}/reports/instances
The report instance endpoints of the Iris API allow users to view and manage report instances for a specific
account.  Report instances capture invocations of a report, including the specific set of parameters provided and
any output generated as a result.

* **get** *(secured)*: Retrieve report instances within the account scope, regardless of the report of which the instance is an instance of, including the up-to-date report generation status.  This is a convenience API call to make it easier to examine all Instances in scope.

### /accounts/{accountId}/tnreservation
Reserves a telephone number
.

* **post** *(secured)*: Reserves a telephone number or a set of telephone numbers for a default time of 4 hours. A successful reservation returns a location header that can be used to retrieve the reservation at a later time.

### /accounts/{accountId}/tnreservation/{reservationid}
Retrieves a TN reservation's information and deletes an existing reservation.

* **get** *(secured)*: Retrieves a TN reservation's information.
* **delete** *(secured)*: Deletes a TN reservation.

### /accounts/{accountId}/billingreports
This API allows the retrieval of a zip file containing billing report for a specified date range and type.
This billing report is delivered as a zip compressed comma separated values (CSV) file.<br>
The general flow of the API calls required to retrieve these records is
<ol>
<li>POST a request to the /billingreports resource, describing the report date range and type for which the billing report is wished. This will initiate the construction of the zip file.</li>
<li>Examine the response from the POST. If the payload is understandable and valid then a 201 response will be returned, indicating that the response file is currently being constructed.</li>
<li>Retrieve the Location Header from the response to the POST. This Location response-header field will contain the complete URI-reference to newly created resource. Each report has it's own resource ID.</li>
<li>Interrogate the resource ID to check the status of the report. If a 200 OK is returned then the resource ID is considered valid and corresponding status will describe the readiness of zip file.</li>
<li>Fetching the file can be done by issuing a GET request to the resource path in the Location Header mentioned above.</li>
</ol>

* **post** *(secured)*: The payload for the POST declares the date range and type for the desired reports. The valid Types are... <ul> <li>BDR - Billing Detail Records - per call information</li> <li>MDR - Message Detail Records - per messagin information</li> <li>INVOICE - A copy of the invoice file or files for the specified date range</li> <li>STATEMENT&#95;BDR - BDR records that are aligned with the invoice</li> <li>DID&#95;SNAPSHOT - a list of telephone numbers aligned as closely as we can with the billing window</li> </ul>

### /accounts/{accountId}/billingreports/{reportid}
The resource will query the status of the report that is being generated.

* **get** *(secured)*: 

### /accounts/{accountId}/billingreports/{reportid}/file
The file resource is an explicit reference to the zip file that has been created.

* **get** *(secured)*: A GET on the /file resource subtending a report ID will cause the download of the file.  Executing this resource path within a browser will cause the download of the file.

### /accounts/{accountId}/bdrs
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

* **post** *(secured)*: Request a collection of BDRs be aggregated and ZIPped ready for distribution.  The payload for the POST declares the date range for the request.

### /accounts/{accountId}/bdrs/{bdrid}
The bdrid resource will query the status of the bdr file that is being generated.  There are essentially two responses...<br>
<ul>
<li>not yet ready</li>
<li>ready, in which case the request is redirected to the URL to actually download the file.</li>
</ul>

* **get** *(secured)*: A GET on the BDR ID will return a "still processing" indication if the file creation has not completed, or will redirect to the file to be downloaded.

### /accounts/{accountId}/bdrs/{bdrid}/file
The file resource is an explicit reference to the zip file that has been created with the selected BDR records. 

* **get** *(secured)*: A GET on the /file resource subtending a BDR ID will cause the download of the file.  Executing this resource path within a browser will cause the download of the file.

### /accounts/{accountId}/users

* **get** *(secured)*: Retrieves a list of users as specified by the account ID.

### /accounts/{accountId}/sites
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

* **get** *(secured)*: retrieve a list of all the sites associated with the account
* **post** *(secured)*: Add a site to the account

### /accounts/{accountId}/sites/{siteId}
This method updates or deletes a site based on the id, as well as adds a SIP Peer to the given site.

* **get** *(secured)*: retrieves the information associated with the site id
* **put** *(secured)*: updates the contents of a site id
* **delete** *(secured)*: deletes the site - sites can only be deleted if there are no SIP Peers attached to it

### /accounts/{accountId}/sites/{siteId}/sippeers
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
        <td>ShortMessagingProtocol</td>
        <td>Used to specify the protocol used by the endpoints for exchanging SMS messages: allowed values are SIP and SMPP.&nbsp; The element is optional, with a default of SMPP.&nbsp; This element can be updated if SMS is enabled on the Account and SIP Peer.</td>
        <td></td>
    </tr>
    <tr>
        <td>HostName</td>
        <td>The IP Address or Host Name of the address to be used for the SmsHosts, VoiceHosts or VoiceHostGroups addresses.</td>
        <td></td>
    </tr>
    <tr>
        <td>Port</td>
        <td>Optional Port Number for Voice and Termination hosts. This is an optional parameter that has default values that are dependent on the Application.&nbsp; It is not valid for SMS.</td>
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
        <td>SmsHosts</td>
        <td>Used for SMS traffic only – can be IP address of Fully Qualified Domain Name</td>
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
        <td>DataAllowed</td>
        <td>True or False (Enables or Disables SMS messaging for a TerminationHost). Optional parameter.</td>
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
      <td>Determines whether the Calling Name Displayl service is applied to the Telephone Numbers associates with the SIP Peer</td>
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

* **get** *(secured)*: Retrieve information about a Sip Peer or set of Sip Peers
* **post** *(secured)*: Create a Sip Peer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}
The SIPpeerID Resource deals with retrieving or updating a specific identified SIP Peer, identified by the SIP Peer ID.
The elements of the payload are described in the /sippeers resource.

* **get** *(secured)*: Retrieve a the data associated with a Sip Peer

* **put** *(secured)*: Update a Sip Peer
There are a few rules used to eliminate IP address collisions.  The primary restriction is on the ability to share Term IP addresses across IRIS structural elements. Essentially...
<ul><li>Term Addresses cannot be shared anywhere</li>
<li>SMS addresses can be shared, and can be different than Term IP Addresses </li>
<li>VoiceHost and VoiceHostGroup addresses can be shared between SIP Peers, and can be different than or the same as Term IP Addresses </li>
</ul>

* **delete** *(secured)*: Delete a Sip Peer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns

* **get** *(secured)*: Retrieve information about a Telephone number or set of Telephone numbers

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/tns/{tn}

* **get** *(secured)*: Link for receiving information about telephone number.
CallForward - Does this telephone number have call forwarding or not.
CallingNameDisplay - Calling Name of the caller is available to the user or not on incoming calls.
TnAttributes - Is this telephone number protected or not.
MessagingSettings -  Does this telephone number have any messaging system configured.

* **put** *(secured)*: This API can be used by the Bandwidth Dashboard or general API users to update the settings for TNs allocated to their account.

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/totaltns

* **get** *(secured)*: Retrieve count of Telephone numbers for Sip Peer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/movetns
This method moves desired Telephone Numbers to the given SIP peer.

* **post** *(secured)*: The POST method moves all telephone numbers specified in the body to the given SIP peer.<br>
The source SIP peer is determined by the Telephone Number, i.e. the PUT method can move multiple numbers from different source SIP peers.<br>
The destination SIP peer is specified in the URL.<br>
NOTE: only a maximum of 5000 Telephone Numbers can be moved in one operation.

### /accounts/{accountId}/sites/{siteId}/inserviceNumbers
Retrieves all the telephone numbers currently in service for the given site.

* **get** *(secured)*: Retrieves all the telephone numbers currently in service for the given site.
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

### /accounts/{accountId}/sites/{siteId}/orders
The "orders" resource interacts with the orders assigned to a particular site of a particular account.

* **get** *(secured)*: The GET method retrieves all the orders associated with the given site.

### /accounts/{accountId}/sites/{siteId}/orders/{orderid}
The "order id" resource interacts with specific orders from an account's site.

* **get** *(secured)*: 

### /accounts/{accountId}/sites/{siteId}/orders/{orderid}/tns
Retrieves the Telephone Numbers associated by the given order ID

* **get** *(secured)*: Retrieves the Telephone Numbers associated by the given order ID

### /accounts/{accountId}/sites/{siteId}/portins
Retrieves the port-in requests for the given site ID.

* **get** *(secured)*: Retrieves the port-in requests for the given site ID.

### /accounts/{accountId}/sites/{siteId}/totaltns

* **get** *(secured)*: Retrieve count of Telephone numbers for the indicated site

### /accounts/{accountId}/products

* **get** *(secured)*: discover what is currently enabled on the account

### /accounts/{accountId}/sipcredentials
This resource is used to manage SIP credentials for subscriber provisioning.
SIP Credentials allow for the Authentication of SIP Messages presented to the Bandwidth Network.  These values are provisioned to the Network to allow the endpoints to participate in an Authentication Challenge (RFC 3261).  These values are compared (after processing) with a value received in the Authorization header of the SIP INVITE to determine whether the call will be allowed to proceed.
The user is authenticated for access to the network using a composite-username, which is either a username string or a combination of a username and a domain separated with an '@'.  The other components of the authentication are MD5 hash values that are hashes of the composite username, the password, and either one or two instances of the Realm, to allow the network to recognize the two prevelent mechanisms for generating MD5 hashes.
There are 4 components to the SIP Credentials payload...
<ol>
<li>The UserName (required) - a string identifying the user.</li>
<li>The Domain (optional) - a string refining the identity of the user.  The Domain will be joined to the UserName with an '@' to create a composite username.  For example, the UserName 'bob' could be combined with the domain 'somewhere.com' to create a composite username 'bob@somewhere.com' </li> 
<li>Hash1 (required) - a string representing a potential Hash values used to authenticate the client.  It is anticipated that the value will be computed from an MD5 Hash of 'composite-username:Realm:Password'.  The makeup of this hash is however transparent to the network.  It must align with a hash that the client is capable of creating</li>
<li>Hash1 (optional)- a string representing a potential Hash value used to authenticate the client.  It is anticipated that the value will be computed from an MD5 Hash of 'composite-username:Realm:Realm:Password'.  The makeup of this hash is however transparent to the network.  It must align with a hash that the client is capable of creating.</li>
</ol>
If the Domain is not specified the Hash1b is not required.

* **get** *(secured)*: GET is used to retrieve all SIP credentials for the account.

* **post** *(secured)*: POST is used to create SIP credentials and associate its with the account.
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

### /accounts/{accountId}/sipcredentials/{userName}
This resource is used to manage single SIP credential for subscribers provisioning.<br>

* **get** *(secured)*: GET is used to retrieve SIP credential for the account by unique combination of user name and domain.

* **put** *(secured)*: PUT is used to change single SIP credential.<br>
It is not possible to change the UserName or the Domain associated with the Hash Values.  To do so requires deletion of one set of credentials and addition of a new set of credentials.<br>
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

* **delete** *(secured)*: DELETE is used to delete SIP credential.

### /accounts/{accountId}/externalTns
The externalTns order resource represents the requests made to the Bandwidth Dashboard API to add or remove customer owned or managed telephone numbers into or from the Bandwidth Dashboard.  This API request will create an order record specific to the request that can be used to understand and track the outcome of the request once complete 
<br><br>
The information below captures the REST endpoint URL and Payloads that are used to install or remove customer provided external telephone numbers from the Bandwidth Dashboard.
<br><br>
This API has been developed based on similar existing functionality available in the Bandwidth Dashboard, but has been refined to focus purely on the task of managing numbers that have been provided to Bandwidth by our customers, allowing the Dashboard business logic to be specific and focused with respect to managing these telephone numbers.
<br><br>
The API follows the Bandwidth Dashboard order model, where an order-id is created to track the interaction and refer back to it as needed.  This record will also be persisted to enable examination of past events.  
<br><br>
This single API controls both the installation and removal of telephone numbers.  The action is controlled by the use of an element in the payload, allowing a simple model for managing both addition and removal of telephone numbers.  Additionally, if the status of an existing telephone number needs to be reset within the Bandwidth Dashboard, possibly as the result of an ownership change (port) of the telephone number, the API can be called to re-add the number to the Bandwidth Dashboard, which will perform a reset on that number without removing it from service first.
<br><br>
The externalTns order tracks the orders related to customer-provided numbers into the customer's account. 
<br><br>
This Import/Delete request reflects a customer-executed import or removal of numbers that they own and/or control.  The telephone numbers in question cannot be Bandwidth CLEC numbers, and are not subject to the normal telephone number life-cycle.<br><br>

* **get** *(secured)*: Retrieve a list of the externalTns orders that are associated with the account.

* **post** *(secured)*: Create a externalTns order to add or remove telephone numbers provided by the customer from the Bandwidth network.
Note: the attempt to import a telephone number that is already present in the account will *not* create an error, but will reset all of the  attributes of that telephone number in the Dashboard system as if the telephone number was being imported for the first time
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>CustomerOrderID</td>
      <td>An order ID created by the customer for their tracking purposes</td>
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
  </tbody>
</table>

### /accounts/{accountId}/externalTns/{orderid}
This API returns data about the specific externalTns order specified as the resource

* **get** *(secured)*: Retrieve information about a externalTns order with specified ID.

## /tns
Telephone Numbers (TNs) are similarly central to Bandwidth Dashboard provisioning.  TNs can be queried on a system-wide basis, returning information based on a wide range of search parameters.<br> The results will be restricted to the account(s) that the requesting user has access to.

### /tns

* **get** *(secured)*: Retrieve information about one or more Telephone Numbers (TNs), where the TNs are chosen based on the search parameters provided in the API Call. 

### /tns/{tn}
Retrieves information about the specified telephone number.  The information returned provides status and historic information about the Telephone Number, including the status, the order id and date assocated with the last modification, and the account and site information associated with the TN. <br> The request for more information can be made by requesting a number of specific derived sub-resources.

* **get** *(secured)*: Retrieves the telephone number's information.

### /tns/{tn}/tndetails
The get method retrieves detailed information about the phone number.

* **get** *(secured)*: Retrieves detailed information about the phone number.
TnAttributes - Does this telephone number is protected or not.

### /tns/{tn}/sites
The get method retrieves the sites associated with that telephone number.

* **get** *(secured)*: Retrieves the sites associated with that telephone number.

### /tns/{tn}/sippeers
The get method retrieves the sippeers associated with that telephone number.

* **get** *(secured)*: Retrieves the sippeers associated with that telephone number.

### /tns/{tn}/ratecenter
The get method retrieves the rate centers associated with that telephone number.

* **get** *(secured)*: Retrieves the rate centers associated with that telephone number.

### /tns/{tn}/lca
Retrieves the LCA information associated with that telephone number.<br>
This call will return the NPA-NXX pairs and the Rate Centers that are in the Local Calling Area of the Telephone Number in the API call. <br>
Due to the fact that not all LCA relationships are symmetrical, the telephone number may not be part of the LCAs centered on the provided NPA-NXX or Rate Center values.

* **get** *(secured)*: Retrieves the LCAs associated with that telephone number.

### /tns/{tn}/lata
Retrieves the lata that contains the telephone number.

* **get** *(secured)*: Retrieves the lata associated with that telephone number.

### /tns/{tn}/history
The history call returns a number of payload elements, each representing an event in the lifecycle of the Telephone Number. <br>
Information returned includes the Order details that prompted the change in the TN status, including dates, order IDs and order types.

* **get** *(secured)*: Retrieves the history associated with that telephone number.

### /tns/{tn}/tnreservation
This API call retrieves any current reservation information associated with the Telephone Number, if a reservation is currently active on the indicated Telephone Number.
The query is restricted to calls that do not exceed the account privileges of the calling user.

* **get** *(secured)*: Retrieves reservation information associated with the Telephone Number.

## /users
The /users API also enables resetting but not retrieving credential information 

### /users/{userid}
reference a specific user in the Bandwidth Dashboard

* **get** *(secured)*: Retrieve the information (except the password) for a specific user id

### /users/{userid}/password
Allows the manipulation of a user's password.

* **put** *(secured)*: Update a user's password.   Security is maintained by requiring the user's existing password as part of the authentication for the API call.

## /cities
The *+cities+* resource returns all of the Cities in the indicated State that are supported from a coverage perspective, and, if requested, that contain orderable inventory.  The values returned indicate the names of the Cities and, if <b>available</b> is specified, returns the available inventory by City.  Note that the mapping between Rate Center and City is not completely predictable because multiple cities can be served by a single Rate Center and it may take multiple Rate Centers to serve a city.  The Rate Centers results are more predictable because they are defined strictly in telecommunication terms.

### /cities

* **get** *(secured)*: The Rate Centers and Cities API Calls return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false, then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>

## /rateCenters
The rateCenters resource returns all of the Rate Centers in the indicated State that are supported from a coverage perspective, and, if requested, that contain orderable inventory.  The values returned indicate the names of the Rate Centers and, if the query parameter <b>available</b> is specified, the available inventory by Rate Center.

### /rateCenters

* **get** *(secured)*: The Rate Centers API Call returns information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported=true is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>

## /coveredRateCenters
The coveredRateCenters resource returns all of the Covered Rate Centers. 
Each rate center resource contains state, abbreviation, name, LATA, list of tiers, number of available TNs and optional zip codes, cities, vendors, NPA-NXX-Xs information. 

### /coveredRateCenters

* **get** *(secured)*: The Covered Rate Centers API Call return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability. The various query parameters are summarized in the following table ... <table border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" width="114"> <p><strong>Query Parameter</strong> </p> </td> <td valign="top"> <p><strong>Description</strong> </p> </td> </tr> <tr> <td valign="top" width="114"> <p>page </p> </td> <td valign="top"> <p>The starting value for a paginated response. The default is ‘1’ indicating the first page of results. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>size </p> </td> <td valign="top"> <p>The number of rate centers to include in a paginated result payload. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>state </p> </td> <td valign="top"> <p>A 2 character State code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>abbreviation </p> </td> <td valign="top"> <p>A rate center abbreviation </p> </td> </tr> <tr> <td valign="top" width="114"> <p>name </p> </td> <td valign="top"> <p>A rate center name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>zip </p> </td> <td valign="top"> <p>A 5 digit zip code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>city </p> </td> <td valign="top"> <p>A City name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>lata </p> </td> <td valign="top"> <p>A 3 or 5 digit LATA </p> </td> </tr> <tr> <td valign="top" width="114"> <p>tier </p> </td> <td valign="top"> <p>A bandwidth coverage tier; a value from 0 to 5. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npa </p> </td> <td valign="top"> <p>A 3 digit NPA or Area Code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxx </p> </td> <td valign="top"> <p>6 digits NPA and NXX values </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxxX </p> </td> <td valign="top"> <p>7 digits of NPA, NXX and thousands block values. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>embed </p> </td> <td valign="top"> <p>One of the values [ZipCodes, Cities, NpaNxxX, AvailableNumberCount, LocalRateCenters]. <br> This repeatable query parameter will force a list (or multiple lists) of the indicated data to be provided in the response. For example if the payload should contain a list of the Cities covered by the Rate Centers then embed=cities would be included as a query parameter.<br> No filter parameters are supported if <q>LocalRateCenters</q> is specified. In this case only <q>size</q>, <q>page</q> and any other <q>embed</q> parameters are supported. </p> </td> </tr> </tbody> </table>

### /coveredRateCenters/{rateCenterId}
The "rateCenterId" resource refers to a specific element of the covered rate centers collection. A lists of zip codes, cities, NPA-NXX-Xs, local rate center IDs and vendors (for admin users only) are included into response.

* **get** *(secured)*: Retrieve information about a specific covered rate center identified as the resource.

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
        <td>This Callback API will be used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Dashboard on their behalf.  In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it.</td>
    </tr>
</table>
<br> <br>
If the customer's endpoint is unavailable, the Bandwidth Dashboard callback service will retry the customer's endpoint 8 times over a period of 40 minutes.
<br><br>
The API payloads are described below...

### /callbacks/portOutValidationCallbackApi
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
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>7510</td>
            <td>Required Account Code missing</td>
        </tr>
        <tr>
            <td>7511</td>
            <td>Invalid Account Code</td>
        </tr>
        <tr>
            <td>7512</td>
            <td>Required PIN missing</td>
        </tr>
        <tr>
            <td>7513</td>
            <td>PIN Invalid</td>
        </tr>
        <tr>
            <td>7514</td>
            <td>Required ZIP Code missing</td>
        </tr>
        <tr>
            <td>7515</td>
            <td>Invalid ZIP Code</td>
        </tr>
        <tr>
            <td>7516</td>
            <td>Telephone Number not recognized or invalid for this account <TN></td>
        </tr>
        <tr>
            <td>7517</td>
            <td>Too many Telephone numbers in this request</td>
        </tr>
        <tr>
            <td>7518</td>
            <td>Telephone Number Not Active <TN></td>
        </tr>
        <tr>
            <td>7519</td>
            <td>Customer info does not match <Explanation></td>
        </tr>
        <tr>
            <td>7598</td>
            <td>Invalid Request - <explanatory text></td>
        </tr>
        <tr>
            <td>7599</td>
            <td>Fatal Error in Processing</td>
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

* **post** *(secured)*: The initial request for validation is a post to the pre-configured URL defined by the customer.
This request contains optional elements for:
<ul>
  <li>PIN (optional) ( 10 digits )</li> 
  <li>Account Number (optional) ( 25 digits )</li> 
  <li>zipcode (optional) ( 15 characters )</li>  
  <li>a list of one or more telephone numbers (at least one telephone number must be provided) ( 10 digits )</li> 
  <li>Subscriber name for information purposes. (optional)( 93 characters )</li>
  <li>PON for information and correlation purposes. (optional)( 25 characters )</li>
</ul>

### /callbacks/notificationCallbackApi
The notification callback API is used notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Dashboard on their behalf.  In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it.<br><br>
When an order changes the Bandwidth Dashboard will POST a pre-defined payload to our customer at the URL that they have defined by use of the /accounts/<account-id>/subscriptions API call.  Please see the documentation on that API call to understand how to register the notification callback API with the Bandwidth Dashboard.<br><br>

* **post** *(secured)*: The POST to the callback API contains a summary of the order that is independent of the type of the order that caused the event that in turn caused the notification callback.  This requires that the customer's end system place an API call to the Bandwidth Dashboard to gather additional details on the change to the order if that is important.  <br><br>
This approach was taken for two reasons:
<ul>
<li>some (or many) of the notifications might not require action.</li>
<li>since orders contain different information, providing order-specific information would cause an undesirable tight linkage between notifications and every type of order, mandating API changes whenever the data associated with an order changed. </li>
</ul><br><br>
The payload of the POST contains:
<ul>
<li> the Subscription ID that the notification is in response to.</li>
<li> the type of order that the notification applies to.</li>
<li> the order ID of the order that has changed </li>
<li> the new state of the order </li>
<li> a message if one was attached as part of the state change.  This will often be present in error cases.</li>
<li> the body of any note that was attached to the order, if applicable</li>
<li> list of the completed telephone numbers for Port-in/Port-out/New Number/Disconnect orders in terminal state</li>
</ul><br><br>
The Payload follows

