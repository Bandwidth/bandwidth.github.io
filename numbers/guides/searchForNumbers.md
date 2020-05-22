{% multimethod %}
{% endmultimethod %}

# Searching for Phone Numbers {#top}

Searching for phone numbers can be performed through our Dashboard API. There are many ways to search for phone numbers and this guide covers the various methods and how you perform them.

Specific API information can be found on our [Dashboard API docs](https://dev.bandwidth.com/numbers/apiReference.html)

## Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

## Query Parameters

| Parameter | Description | Example |
|--|--|
| areaCode | The 3 digit area code to search for | 919 |
| npaNxx | The 6 digits following an area code | 123321 |
| npaNxxx | The 7 digits following an area code | 1234321  |
| rateCenter | The rate center to search for | Cary  |
| state | The 2 letter state code to search for | NC |
| city | The city to search for | Raleigh |
| zip | The 5 or 9 digit zip code to search for | 27606, 27606-0007 |
| lata | TODO | 244 |
| localVanity | A 3 to 7 alphanumeric character long string for pattern matching of phone numbers. May also include `*` (to match all) and `_` (to match one) | `81_`, `8*` |
| tollFreeVanity | A 4 to 7 alphanumeric character long string for pattern matching of toll free numbers  | `NEWCARS` |
| tollFreeWildCardPattern | A 3 alphanumeric character long string representing a wild card pattern for toll free numbers | `8**` |
| quantity | Number of phone numbers to return. Can be 1 to 5000. Defaults to 5000 | 5000 |
| enableTNDetail | Boolean value to include TN details. Defaults to false | `true` |
| LCA | Boolean value to include TNs in the local calling area. Defaults to true | `true` |
| endsIn | Boolean value to include only numbers which end in the `localVanity`. Defaults to false | `true` |
| orderBy | The field to order the results by. Can be one of `fullNumber`, `npaNxx`, `npaNxxx`, or `areaCode` | `areaCode` |
| protected | Determines if the search should return only protected numbers (`ONLY`), only not protected numbers (`NONE`), or both protected and not protected numbers (`MIXED`). Can be one of `NONE`, `ONLY`, or `MIXED` | `NONE` |

## Search Types

| Search Type | Required Parameters | Combinational Parameters | Optional Parameters |
|--|--|--|--|
| Area Code | areaCode | rateCenter (state required), city (state required), state, lata, zip | quantity, enableTNDetail, protected |
| NPA-NXX | npaNxx | rateCenter (state required), city (state required), state, lata, zip, orderBy | quantity, enableTNDetail, protected |
| NPA-NXX with Local Calling Area | npaNxx |  | quantity, LCA, enableTNDetail, protected |
| NPA-NXX-X	 | npaNxxx | rateCenter (state required), city (state required), state, lata, zip, orderBy | quantity, enableTNDetail, protected |
| NPA-NXX-X with Local Calling Area | npaNxxx | rateCenter (state required), city (state required), state, lata, zip | quantity, LCA, enableTNDetail, protected |
| RateCenter | rateCenter, state | city, areaCode/npaNxx/npaNxxx, lata, zip, orderBy | quantity, enableTNDetail, protected |
| RateCenter with Local Calling Area | rateCenter, state |  | quantity, LCA, enableTNDetail, protected |
| State | state | rateCenter, city, areaCode/npaNxx/npaNxxx, lata, zip | quantity, enableTNDetail, protected |
| City | state, city | rateCenter, state, areaCode/npaNxx/npaNxxx, lata, zip, orderBy | quantity, enableTNDetail, protected |
| Zip Code	 | zip | rateCenter (state required), city (state required), state, areaCode/npaNxx/npaNxxx, lata, orderBy | quantity, enableTNDetail, protected |
| LATA | lata | rateCenter (state required), city (state required), state, areaCode/npaNxx/npaNxxx, zip | quantity, enableTNDetail, protected |
| Local Vanity	 | localVanity	 | state, areaCode | endsIn, quantity, protected, enableTNdetails |
| TollFree Vanity | tollFreeVanity | orderBy | quantity |
| TollFree WildCard | tollFreeWildCardPattern | orderBy | quantity |

## Response

```xml
<SearchResult>
    <ResultCount>384</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>4354776112</TelephoneNumber>
        <!---- SNIP ---->
        <TelephoneNumber>4357095160</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```
