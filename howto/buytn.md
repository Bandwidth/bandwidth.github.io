{% method %}

## Buy Phone Number
<aside class="alert general">
<p>
If you need advanced control over the number ordering process, like managing line features, you can find documentation <a href="http://dev.bandwidth.com/docs/">here.</a>
</p>
</aside>

There are 2 ways to buy a phone number:
1. <code class="get">GET</code> on the [`availableNumbers`](http://dev.bandwidth.com/ap-docs/methods/availableNumbers/getAvailableNumbersLocal.html) resource, followed by a <code class="post">POST</code> to the [`phoneNumbers`](http://dev.bandwidth.com/ap-docs/methods/phoneNumbers/postPhoneNumbers.html) resource
2. <code class="post">POST</code> on the [`availableNumbers`](http://dev.bandwidth.com/ap-docs/methods/phoneNumbers/postPhoneNumbers.html) resource

{% common %}
### Search then Order

{% sample lang="shell" %}

```shell
curl -v -X GET  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&pattern=*2%3F9*&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
// Search available local phone numbers with area code 910

// Promise
client.AvailableNumber.search("local", { areaCode : "910", quantity : 1 })
.then(function (numbers) {
	return client.PhoneNumber.create({
		number: numbers[0].number,
		name: "My 910 Number",
		applicationId: "a-1234"
	});
})
.then(function (number) {
	console.log(number.id);
});
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(new LocalNumberQuery{ AreaCode = "910", Quantity = 1});
var number = await client.PhoneNumber.CreateAsync(new CreatePhoneNumberData {
	Number = results[0].number,
	Name = "My 910 Number",
	ApplicationId = "a-1234"
});
```

{% sample lang="ruby" %}

```ruby
numbers = AvailableNumber.search_local(client, {:area_code => "910", :quantity => 1})
puts("Found numbers: #{(numbers.map {|n| n[:number]}).join(', ')}")
number = PhoneNumber.create(client, {:number => numbers[0][:number]})
puts("Now you are owner of number #{number.number} (id #{number.id})")
```
{% common %}
### Search and Order

{% sample lang="shell" %}
```shell
#coming soon
```

{% sample lang="js" %}

```js
// Search 2 available local phone numbers with area code 910 and order them

// Promise
client.AvailableNumber.searchAndOrder("local", { areaCode : "910", quantity : 2 })
.then(function (numbers) {
	numbers.forEach(function (number) {
		console.log(number.id);
	})
});
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchAndOrderLocalAsync(
  new LocalNumberQueryForOrder{ AreaCode = "910", Quantity = 2});
```

{% sample lang="ruby" %}
```ruby
##
# coming soon
##
```

{% endmethod %}
