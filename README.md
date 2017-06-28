<div id="hero">
  <div class="heroImage"></div>
  <h1 class="remove4mobile">TRY BEFORE YOU BUY: HOW WELL DOES YOUR SOFTWARE COMMUNICATE?</h1>
  <h2 class="mobileShow">TRY BEFORE YOU BUY: HOW WELL DOES YOUR SOFTWARE COMMUNICATE?</h2>
  <p>Take a look at our code samples below. If your app would benefit from text messaging or dependable phone call capability, look no further. We can solve your problem just like we’ve done for everyone from application start-ups and traditional telecom companies to some of the most demanding Internet giants in the business. Have a look around or <a href="http://www.bandwidth.com/resources/tip-sheet-why-bandwidths-apis-are-better/">Learn more.</a></p><br>
  <div class="cardsContainer">
    <div id="smscard" class="devCards sms active">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-messaging.svg" alt="Messaging icon" class="product--icon"> <span class="remove4mobile">Messaging</span></h2>
      <span class="remove4mobile">Communication at its most basic. Adding SMS or MMS is a snap.
      <br><br></span><button class="iconic-button iconic-small" id="smsexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/sendSMSMMS.html" class="aimg"><button class="fulltut" id="smsfulltut" disabled>Full Tutorial</button></a>
    </div><div id="voicecard" class="devCards voice">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-voice.svg" alt="Voice icon" class="product--icon"> <span class="remove4mobile">Voice</span></h2>
      <span class="remove4mobile">“Watson, come here—I need Bandwidth!” You can say stuff like that once you add calling.
      <br><br></span><button class="iconic-button iconic-small" id="voiceexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/outboundCall.html" class="aimg"><button class="fulltut" id="voicefulltut" disabled>Full Tutorial</button></a>
    </div><div id="pncard"class="devCards pn">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-phonenumbers.svg" alt="Phone Numbers icon" class="product--icon"> <span class="remove4mobile">Numbers</span></h2>
      <span class="remove4mobile">We’ve got your number. In fact, we have as many of them as you want.
      <br><br></span><button class="iconic-button iconic-small" id="pnexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/buytn.html" class="aimg"><button class="fulltut" id="pnfulltut" disabled>Full Tutorial</button></a>
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
      </div>
   </div>

<div class="divider"></div>

### Send a message

```js
client.Message.send({
    from : "+19195551212",
    to   : "+19195551213",
    text : "Thank you for subscribing to Unicorn Enterprises!"
})
.then(function(message){
    console.log(message.id);
});
```

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for subscribing to Unicorn Enterprises!"
});
```

```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for subscribing to Unicorn Enterprises!"
})
```

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "text": "Good morning, this is a test message"
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

```bash
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

```bash
curl -v -X POST  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json"
```

```js
// Search available local phone numbers with area code 910
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

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(new LocalNumberQuery{ AreaCode = "910", Quantity = 1});
var number = await client.PhoneNumber.CreateAsync(new CreatePhoneNumberData {
    Number = results[0].number,
    Name = "My 910 Number",
    ApplicationId = "a-1234"
});
```

```ruby
numbers = AvailableNumber.search_local(client, {:area_code => "910", :quantity => 1})
puts("Found numbers: #{(numbers.map {|n| n[:number]}).join(', ')}")
number = PhoneNumber.create(client, {:number => numbers[0][:number]})
puts("Now you are owner of number #{number.number} (id #{number.id})")
```

<!-- <div class="why">
  <h2>Why Bandwidth?</h2>
  <p>Whether you’re looking to create a one-of-a-kind text messaging experience in your app, or simply make a reliable phone call from one phone to another, Bandwidth can get you there – quickly and easily. We’re built to scale, and trusted by everyone from exciting new application start-ups and traditional telecom companies, to some of the most demanding Internet giants in the business.
  </p>
  <a href="http://www.bandwidth.com/resources/tip-sheet-why-bandwidths-apis-are-better/"><button class="medium hover-go right">Learn more</button></a>
  <a href="/pricing.html"><button class="medium hover-go right light secondary">Pricing</button></a>
</div> -->
{% raw %}
<div id="tutorial">
  <h1>tutorial</h1>
  <p class="copy">Create a voice and messaging enabled application using our API. No coding experience required.</p>
  <div class="tutorial-summary"></div>
  <div id="language-picker"></div>
  <div class="group-label">
    <div class="group-label-tab active" data-rel="group1">
      <h2 class="active">1. Setup environment</h2>
    </div>
    <div class="group-label-tab" data-rel="group2">
      <h2>2. Create application</h2>
    </div>
    <div class="group-label-tab" data-rel="group3">
      <h2>3. Communicate</h2>
    </div>
  </div>
  <div class="step-label">
    <div id="group1" class="step-group-label active">
      <p class="step1 active">Install Homebrew</p>
      <p>Install Node.js</p>
      <p>Install a text editor</p>
      <p>Install ngrok</p>
      <p>Install Postgres</p>
      <p>Configure the ZSH file</p>
    </div>
    <div id="group2" class="step-group-label">
      <p>Make a Bandwidth account</p>
      <p>Setup environment variables</p>
      <p>Get a phone number</p>
    </div>
    <div id="group3" class="step-group-label">
      <p>Test</p>
      <p>Test</p>
      <p></p>
      <p></p>
      <p></p>
    </div>   
  </div>
  <div id="setup-environment-group" class="top-level-group">
    <div class="tutorial-step step1 nodejs active">
      <p>This is a great tool for quickly installing programs on a Mac. Most programs can be installed by writing one line of code in the terminal.</p>
      <ol>
        <li>First open your terminal</li>
        <li>Copy and paste this line of code into your terminal. Learn more about homebrew here.</li>
      </ol>
      <code>
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      </code>
      <button class="button button--medium button--hover-go button--right">Next</button>
    </div>
    <div class="tutorial-step step2 nodejs"></div>
    <div class="tutorial-step step3 nodejs"></div>
    <div class="tutorial-step step4 nodejs"></div>
    <div class="tutorial-step step5 nodejs"></div>
    <div class="tutorial-step step6 nodejs"></div>
    <div class="tutorial-step step7 nodejs"></div>
  </div>
  <div id="create-app-group" class="top-level-group">
    <div class="tutorial-step step8 nodejs"></div>
    <div class="tutorial-step step9 nodejs"></div>
    <div class="tutorial-step step10 nodejs"></div>
    <div class="tutorial-step step11 nodejs"></div>
    <div class="tutorial-step step12 nodejs"></div>
    <div class="tutorial-step step13 nodejs"></div>
  </div>
  <div id="communicate-group" class="top-level-group">
    <div class="tutorial-step step14 nodejs"></div>
    <div class="tutorial-step step15 nodejs"></div>
    <div class="tutorial-step step16 nodejs"></div>
    <div class="tutorial-step step17 nodejs"></div>
    <div class="tutorial-step step18 nodejs"></div>
    <div class="tutorial-step step19 nodejs"></div>
    <div class="tutorial-step step20 nodejs"></div>
  </div>
</div>
{% endraw %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
$('.group-label-tab').click(function(){
  $('.group-label-tab').removeClass('active');
  $(this).addClass('active');
  $('.step-group-label').hide();
  $('#' + $(this).data('rel')).css('display','flex');
  })
$(document).ready(function landing(){

  if ($(window).width() >= 980) {

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

  // Showing proper code sample or sms, voice and pns
  var tuts = $('.voicetut, .smstut, .pntut');

  tuts.hide();

  // Disable buttons on cards that are inactive
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

    // Showing proper code sample or sms, voice and pns
    var tuts = $('.voicetut, .smstut, .pntut');

    tuts.hide();

    // Disable buttons on cards that are inactive
    $('.devCards.active').find('.fulltut').prop("disabled",false);

    $('#smscard').click(function(){
        $('pre').hide();
        $('.smstut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('#voicecard').click(function(){
        $('pre').hide();
        $('.voicetut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });

    $('#pncard').click(function(){
        $('pre').hide();
        $('.pntut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('.smstut.active').show();
  }
});
</script>
