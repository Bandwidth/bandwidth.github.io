<div id="hero">
  <h1>Add phone calling and text messaging to your app.</h1>
  <p>Ready to bring your ideas to life? It's pretty easy. See how it's done using the examples below,<br> or jump right in to the full <a href="http://dev.bandwidth.com/ap-docs/methods/restApi.html">API reference.</a></p><br>
  <div id="smscard" class="devCards sms active">
    <h2><i class="icons8-sms" style="font-size: 20px"></i> Messaging</h2>
    Send a text. It is really simple! SMS or MMS, send it now.
    <br><br><button class="iconic-button iconic-small" id="smsexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/sendSMSMMS.html" class="aimg"><button class="fulltut medium" id="smsfulltut" disabled>Full Tutorial</button></a>
  </div><div id="voicecard" class="devCards voice">
    <h2><i class="icons8-phone" style="font-size: 20px"></i> Voice</h2>
    Wondering how to make a call? Put that number to use!
    <br><br><button class="iconic-button iconic-small" id="voiceexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/outboundCall.html" class="aimg"><button class="fulltut medium" id="voicefulltut" disabled>Full Tutorial</button></a>
  </div><div id="pncard"class="devCards pn">
    <h2><i class="icons8-hashtag" style="font-size: 20px"></i> Phone Numbers</h2>
    Learn how to get a telephone number. You will need to do this first. Go for it!
    <br><br><button class="iconic-button iconic-small" id="pnexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/buytn.html" class="aimg"><button class="fulltut medium" id="pnfulltut" disabled>Full Tutorial</button></a>
  </div>
</div>

<div class="languageselector">
      <div class="radio-group clearfix">
          <input type="radio" name="basic-options" value="one" id="radio-one" class="lang-js trigger" data-rel="lang-js" checked />
          <label for="radio-one"><span>js</span></label>
          <input type="radio" name="basic-options" value="two" id="radio-two" class="lang-csharp trigger" data-rel="lang-csharp"/>
          <label for="radio-two"><span>c#</span></label>
          <input type="radio" name="basic-options" value="three" id="radio-three" class="lang-ruby trigger" data-rel="lang-ruby"/>
          <label for="radio-three"><span>ruby</span></label>
          <input type="radio" name="basic-options" value="four" id="radio-four" class="lang-curl trigger" data-rel="lang-curl"/>
          <label for="radio-four"><span>curl</span></label>
      </div>
   </div>

<div class="divider"></div>

### Send a message

```js
client.Message.send({
    from : "+19195551212",
    to   : "+19195551213",
    text : "Thank you for susbcribing to Unicorn Enterprises!"
})
.then(function(message){
    console.log(message.id);
});
```

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for susbcribing to Unicorn Enterprises!"
});
```

```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for susbcribing to Unicorn Enterprises!"
})
```

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
        -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "text": "Good morning, this is a test message",
        "callbackUrl": "http://my.callback.url"
    }'
```

### Make a call

```js
client.Call.create({
    from: "{fromNumber}",
    to: "{toNumber}"
})
.then(function (call) {
    console.log(call.id);
})
```

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}"
});
```

```ruby
call = Call.create(client, {:from => "{fromNumber}", :to => "{toNumber}"})
```

```curl
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}"
    }'
```

### Buy a telephone number

```shell
#coming soon
```

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

```csharp
var results = await client.AvailableNumber.SearchAndOrderLocalAsync(
  new LocalNumberQueryForOrder{ AreaCode = "910", Quantity = 2}
);
```

```ruby
##
# coming soon
##
```

### More content
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script>
  $('#send-a-message').nextUntil('h3').addClass('smstut');
  $('#send-a-message').addClass('smstut');
  $('#make-a-call').nextUntil('h3').addClass('voicetut');
  $('#make-a-call').addClass('voicetut');
  $('#buy-a-telephone-number').nextUntil('h3').addClass('pntut');
  $('#buy-a-telephone-number').addClass('pntut');

  $('#hero').parent().addClass('landingpage');

  $('.lang-js').parent().addClass('active');

  $('code').not('.lang-js').parent().hide();
  $('.trigger').click(function() {
      $('code').parent().removeClass('active');
      $('.' + $(this).data('rel')).parent().addClass('active');

      if ($('#voicecard').hasClass('active')){
        $('pre').hide();
        $('.voicetut.active').show();
      }
      if ($('#smscard').hasClass('active')){
        $('pre').hide();
        $('.smstut.active').show();
      } else if ($('#pncard').hasClass('active')){
        $('pre').hide();
        $('.pntut.active').show();
      }
  });

  var tuts = $('.voicetut, .smstut, .pntut');

  tuts.hide();
  $('.devCards.active').find('.fulltut').prop("disabled",false);

  $('#smsexpand').click(function(){
      $('pre').hide();
      $('.smstut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('#voiceexpand').click(function(){
      $('pre').hide();
      $('.voicetut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });

  $('#pnexpand').click(function(){
      $('pre').hide();
      $('.pntut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('.smstut.active').show();
  </script>
