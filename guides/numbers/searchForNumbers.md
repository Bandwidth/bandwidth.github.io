{% multimethod %}
{% endmultimethod %}

# Searching for Phone Numbers {#top}

There are a number of different resource paths for querying available telephone numbers in the Bandwidth Phone Number inventory. These are:

* Area Code or NPA
* AvailableNpaNxx (List of NPA NXX quantities)
* NPA-NXX with Local Calling Area
* NPA-NXX-X with Local Calling Area
* Rate Center
* Toll Free Vanity
* Toll Free Wild Card
* State
* City, State
* Zip code
* Lata (Telecom terminology)

## Search HTTP GET Request Format

Bandwidth dashboard allows the overall Bandwidth number inventory to be searched using a variety of approaches.  Our customers can use these searches to guide attempts to order numbers.  The various types of available searches are:

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
<br>
