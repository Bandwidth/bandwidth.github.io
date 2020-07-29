Errors that may arise when performing tasks like searching for phone numbers or ordering phone numbers have specific error codes associated with them. These error codes and a human readable description are listed on this page.

Below is an example of what the XML response will look like when one of these errors is returned.

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <ErrorList>
        <Error>
            <Code>5070</Code>
            <Description>Telephone number is invalid.</Description>
            <TelephoneNumber>55544433</TelephoneNumber>
        </Error>
    </ErrorList>
    <Order>
        <CustomerOrderId>id</CustomerOrderId>
        <OrderCreateDate>2020-07-29T18:43:56.389Z</OrderCreateDate>
        <BackOrderRequested>false</BackOrderRequested>
        <ExistingTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>5554443333</TelephoneNumber>
                <TelephoneNumber>55544433</TelephoneNumber>
            </TelephoneNumberList>
        </ExistingTelephoneNumberOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>123</SiteId>
    </Order>
</OrderResponse>
```

{% raw %}
<iframe src="live-errors.html" width="100%" height="100%" frameBorder="0" style="height: calc(100vh - 175px)"></iframe>
{% endraw %}
