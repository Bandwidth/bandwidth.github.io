{% multimethod %}
{% endmultimethod %}

# Searching for Phone Numbers {#top}

There are a number of different resource paths for querying available telephone numbers in the Bandwidth Phone Number inventory. These are:

## Table of parameters

| Search Criteria                    | Required Parameters     | Combinable Parameters                                                                                       | Optional Parameters                                |
|:-----------------------------------|:------------------------|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| Area Code                          | areaCode                | rateCenter (state required)<br>city (state required)<br>state<br>lata<br>zip                                | quantity<br>LCA<br>enableTNDetail<br>protected     |
| NPA-NXX                            | npaNxx                  | rateCenter (state required)<br>city (state required)<br>state<br>lata<br>zip<br>orderBy                     | quantity<br>LCA<br>enableTNDetail<br>protected     |
| NPA-NXX with Local Calling Area    | npaNxx                  |                                                                                                             | quantity<br>LCA<br>enableTNDetail<br>protected     |
| NPA-NXX-X                          | npaNxxx                 | rateCenter (state required)<br>city (state required)<br>state<br>lata<br>zip<br>orderBy                     | quantity<br>LCA<br>enableTNDetail<br>protected     |
| NPA-NXX-X with Local Calling Area  | npaNxxx                 |                                                                                                             | quantity<br>LCA<br>enableTNDetail<br>protected     |
| RateCenter                         | rateCenter<br>state     | city<br>areaCode/npaNxx/npaNxxx<br>lata<br>zip<br>orderBy                                                   | quantity<br>LCA<br>enableTNDetail<br>protected     |
| RateCenter with Local Calling Area | rateCenter<br>state     |                                                                                                             | quantity<br>LCA<br>enableTNDetail<br>protected     |
| State                              | state                   | rateCenter<br>city<br>areaCode/npaNxx/npaNxxx<br>lata<br>zip                                                | quantity<br>LCA<br>enableTNDetail<br>protected     |
| City                               | city<br>state           | rateCenter<br>state<br>areaCode/npaNxx/npaNxxx<br>lata<br>zip<br>orderBy                                    | quantity<br>enableTNDetail<br>protected            |
| Zip Code                           | zip                     | rateCenter (state required)<br>city (state required)<br>state<br>areaCode/npaNxx/npaNxxx<br>lata<br>orderBy | quantity<br>LCA<br>enableTNDetail<br>protected     |
| LATA                               | lata                    | rateCenter (state required)<br>city (state required)<br>state<br>areaCode/npaNxx/npaNxxx<br>zip             | quantity<br>LCA<br>enableTNDetail<br>protected     |
| Local Vanity                       | localVanity             | state<br>areaCode                                                                                           | endsIn<br>quantity<br>protected<br>enableTNdetails |
| TollFree Vanity                    | tollFreeVanity          | orderBy                                                                                                     | quantity                                           |
| TollFree WildCard                  | tollFreeWildCardPattern | orderBy                                                                                                     | quantity                                           |


## Search HTTP GET Request Format

The Bandwidth Phone Number API allows the overall Bandwidth number inventory to be searched using a variety of approaches.  Our customers can use these searches to guide attempts to order numbers.  The various types of available searches are:

* Area Code / NPA searches
* NPA-XXX, and NPA-NXX-X searches
* Rate Center searches
* State, and City/State searches
* ZIP Code searches
* LATA searches
* Toll free number searches

These different search types have different query parameters that guide the required searches. The search requests are communicated via a <code class="get">GET</code>  API call where the type of search, the search filters, and controlling parameters such as limits on quantity and payload detail are specified as query parameters in the URL.

The response to the search request provides a list of available numbers, and if requested some details such as Rate Center and Lata, about the numbers that have been returned.

### Search by Area Code

```http
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>2101</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>9192415735</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```
