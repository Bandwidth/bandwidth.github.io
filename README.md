{% raw %}

<div id="hero">
  <h1 class="remove4mobile">Welcome to Bandwidth's Developer Docs</h1>
  <h2 class="mobileShow">Welcome to Bandwidth's Developer Docs</h2>
  <p>Click and play around to learn more about Bandwidth's APIs</p><br>
  <div class="cardsContainer">
    <div id="smscard" class="devCards sms active">
      <h2><img src="images/icon-messaging.svg" alt="Messaging icon" class="product--icon"> <span class="remove4mobile">Messaging</span></h2>
      <span class="remove4mobile">Communication at its most basic. Adding SMS or MMS is a snap.
      <br><br></span><button class="iconic-button iconic-small" id="smsexpand"><i class="icons8-expand-arrow"></i></button><a href="/messaging/about.html" class="aimg"><button class="fulltut" id="smsfulltut" disabled>Learn more</button></a>
    </div><div id="voicecard" class="devCards voice">
      <h2><img src="images/icon-voice.svg" alt="Voice icon" class="product--icon"> <span class="remove4mobile">Voice</span></h2>
      <span class="remove4mobile">Need to make a call? Placing and receiving phone calls is fast and easy with Bandwidth Voice.
      <br><br></span><button class="iconic-button iconic-small" id="voiceexpand"><i class="icons8-expand-arrow"></i></button><a href="/voice/about.html" class="aimg"><button class="fulltut" id="voicefulltut" disabled>Learn more</button></a>
    </div><div id="pncard"class="devCards pn">
      <h2><img src="images/icon-phonenumbers.svg" alt="Phone Numbers icon" class="product--icon"> <span class="remove4mobile">Numbers</span></h2>
      <span class="remove4mobile">We’ve got your number. In fact, we have as many of them as you want.
      <br><br></span><button class="iconic-button iconic-small" id="pnexpand"><i class="icons8-expand-arrow"></i></button><a href="/numbers/about.html" class="aimg"><button class="fulltut" id="pnfulltut" disabled>Learn more</button></a>
    </div>
  </div>
</div>

<div class="languageselector">
      <div class="radio-group clearfix">
          <input type="radio" name="basic-options" value="four" id="radio-four" class="lang-bash trigger" data-rel="lang-bash" checked />
          <label for="radio-four"><span>curl</span></label>
          <input type="radio" name="basic-options" value="one" id="radio-one" class="lang-js trigger" data-rel="lang-js"/>
          <label for="radio-one"><span>js</span></label>
          <input type="radio" name="basic-options" value="two" id="radio-two" class="lang-csharp trigger" data-rel="lang-csharp"/>
          <label for="radio-two"><span>c#</span></label>
          <input type="radio" name="basic-options" value="three" id="radio-three" class="lang-ruby trigger" data-rel="lang-ruby"/>
          <label for="radio-three"><span>ruby</span></label>
          <input type="radio" name="basic-options" value="five" id="radio-five" class="lang-python trigger" data-rel="lang-python"/>
          <label for="radio-five"><span>python</span></label>
          <input type="radio" name="basic-options" value="six" id="radio-six" class="lang-php trigger" data-rel="lang-php"/>
          <label for="radio-six"><span>php</span></label>
      </div>
   </div>

<div class="divider"></div>

{% endraw %}

### Send a message

```js
var body = new BandwidthMessaging.MessageRequest({
    "applicationId": applicationId ,
    "to": ["+19999999999"],
    "from": "+18888888888",
    "text": "The quick brown fox jumps over a lazy dog."
});

var response = await messagingController.createMessage(msgUserId, body);
console.log(response);
```

```csharp
using Bandwidth.Standard.Messaging;
using Bandwidth.Standard.Messaging.Models;
using Bandwidth.Standard.Messaging.Controllers;

MessageRequest msgRequest = new MessageRequest();
msgRequest.ApplicationId = applicationId;
msgRequest.From = "+18888888888";
msgRequest.To = new string[1] {"9199199999"};
msgRequest.Text = "The quick brown fox jumps over a lazy dog.";

msgController.CreateMessage(msgUserId, msgRequest);
```

```ruby
account_id = "1"
body = MessageRequest.new
body.application_id = "1-2-3"
body.to = ["+17777777777"]
body.from = "+18888888888"
body.text = "Hello from Bandwidth"

result = message_controller.create_message(account_id,:body => body)
```

```bash
curl -X POST \
    --url 'https://messaging.bandwidth.com/api/v2/users/{accountId}/messages' \
    -u '{apiToken}:{apiSecret}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "to"            : ["+12345678902"],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "tag"           : "test message"
    }
  '
```

```python
account_id = "123"
body = MessageRequest()
body.application_id = "1-d-b"
body.to = ["+17777777777"]
body.mfrom = "+18888888888"
body.text = "Greetings!"

result = messaging_client.create_message(account_id, body=body)
```

```php
$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->applicationId = "93de2206-9669-4e07-948d-329f4b722ee2";
$body->to = array("+12345678902");
$body->from = "+12345678901";
$body->text = "Hey, check this out!";

$response = $messagingClient->createMessage($messagingAccountId, $body);
```

### Make a call

```js
var body = new BandwidthVoice.ApiCreateCallRequest({
    "from": "+19999999999",
    "to": "+18888888888",
    "applicationId": "123",
    "answerUrl": "https://test.com",
    "answerMethod": "POST",
    "callTimeout": 30
});
var response = await voiceController.createCall(accountId, body);
console.log(response);
```

```csharp

callRequest.ApplicationId = "3-d-4-b-5";
callRequest.To="+19999999999";
callRequest.AnswerUrl= "https://test.com";
callRequest.From="+17777777777";

//Be aware that the Voice Client can throw exceptions
voiceController.CreateCall(accountId, callRequest);
```

```ruby
account_id = '1'
body = ApiCreateCallRequest.new
body.from = '+16666666666'
body.to = '+17777777777'
body.answer_url = 'https://test.com'
body.application_id = '3-d-4-b-5'

result = voice_client.create_call(account_id,:body => body)
```


```bash
curl -X POST \
    --url 'https://voice.bandwidth.com/api/v2/accounts/{accountId}/calls' \
    -u '{username}:{password}' \
    -H 'Content-type: application/json' \
    --data-raw '
    {
      "from"          : "+19195551212",
      "to"            : "+19195551313",
      "answerUrl"     : "http://www.myapp.com/hello",
      "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
    }'
```

```python
account_id = "123"
body = ApiCreateCallRequest()
body.mfrom = "+17777777777"
body.to = "+16666666666"
body.application_id = "3-d-4-b-5"
body.answer_url = "https://test.com"

result = voice_client.create_call(account_id, body=body)
```

### Buy a telephone number

```bash
curl -X POST \
    --url 'https://dashboard.bandwidth.com/api/accounts/{accountId}/orders' \
    -u '{username}:{password}' \
    -H 'Content-type: application/xml; charset=utf-8' \
    --data-raw '
    <Order>
        <AreaCodeSearchAndOrderType>
            <AreaCode>910</AreaCode>
            <Quantity>1</Quantity>
        </AreaCodeSearchAndOrderType>
        <SiteId>{Site-ID}</SiteId>
    </Order>
  '
```

```js
// Coming Soon
```

```csharp
// Coming Soon
```

```ruby
## Coming Soon
```

```python
## Coming Soon
```

```php
// Coming soon
```

{% raw %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
$(document).ready(function setup() {

	/* Removed 
	if(gitbook){
		gitbook.events.bind('page.change', function() { landing(); } );
	}
	*/

	landing();
});


	
function landing(){
  if (window.innerWidth >= 980) {

  // Adding classes for sms, voice and pns
  $('#send-a-message').nextUntil('h3').addClass('smstut');
  $('#send-a-message').addClass('smstut');
  $('#make-a-call').nextUntil('h3').addClass('voicetut');
  $('#make-a-call').addClass('voicetut');
  $('#buy-a-telephone-number').nextUntil('div').addClass('pntut');
  $('#buy-a-telephone-number').addClass('pntut');

  // Access to parent div on this page only
  $('#hero').parent().addClass('landingpage');

  // Setting default language
  $('.lang-bash').parent().addClass('active');

  // Toggle between languages
  $('code').not('.lang-bash').parent().hide();
  $('li pre').show();
  $('.trigger').click(function() {
      $('code').parent().removeClass('active');
      $('.' + $(this).data('rel')).parent().addClass('active');

      if ($('#voicecard').hasClass('active')){
        tuts.hide();
        $('.voicetut.active').show();
      }
      if ($('#smscard').hasClass('active')){
        tuts.hide();
        $('.smstut.active').show();
      } else if ($('#pncard').hasClass('active')){
        tuts.hide();
        $('.pntut.active').show();
      }
  });

  // Showing proper code sample or sms, voice and pns
  var tuts = $('.voicetut, .smstut, .pntut');

  tuts.hide();

  // Disable buttons on cards that are inactive
  $('.devCards.active').find('.fulltut').prop("disabled",false);

  $('#smsexpand').click(function(){
      tuts.hide();
      $('.smstut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('#voiceexpand').click(function(){
      tuts.hide();
      $('.voicetut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });

  $('#pnexpand').click(function(){
      tuts.hide();
      $('.pntut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('.smstut.active').show();

  // Mobile
  } else {
    // Adding classes for sms, voice and pns
    <!-- $('.book-summary, .book-body').addClass('mobile'); -->
    $('#send-a-message').nextUntil('h3').addClass('smstut');
    $('#send-a-message').addClass('smstut');
    $('#make-a-call').nextUntil('h3').addClass('voicetut');
    $('#make-a-call').addClass('voicetut');
    $('#buy-a-telephone-number').nextUntil('div').addClass('pntut');
    $('#buy-a-telephone-number').addClass('pntut');

    // Access to parent div on this page only
    $('#hero').parent().addClass('landingpage');

    // Setting default language
    $('.lang-bash').parent().addClass('active');

    // Toggle between languages
    $('code').not('.lang-bash').parent().hide();
    $('li pre').show();
    $('.trigger').click(function() {
        $('code').parent().removeClass('active');
        $('.' + $(this).data('rel')).parent().addClass('active');

        if ($('#voicecard').hasClass('active')){
          tuts.hide();
          $('.voicetut.active').show();
        }
        if ($('#smscard').hasClass('active')){
          tuts.hide();
          $('.smstut.active').show();
        } else if ($('#pncard').hasClass('active')){
          tuts.hide();
          $('.pntut.active').show();
        }
    });

    // Showing proper code sample or sms, voice and pns
    var tuts = $('.voicetut, .smstut, .pntut');

    tuts.hide();

    // Disable buttons on cards that are inactive
    $('.devCards.active').find('.fulltut').prop("disabled",false);

    $('#smscard').click(function(){
        tuts.hide();
        $('.smstut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('#voicecard').click(function(){
        tuts.hide();
        $('.voicetut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });

    $('#pncard').click(function(){
        tuts.hide();
        $('.pntut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('.smstut.active').show();
  }
}
</script>

{% endraw %}
