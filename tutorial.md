{% raw %}
<div id="tutorial">
  <h1>tutorial <span class="beta">BETA</span></h1>
  <p class="copy">Create a voice and messaging enabled application using our API. No coding experience required.</p>
  <div class="tutorial-summary"></div>
  <div id="language-picker"></div>
  <div id="tutorial-tabs" class="group-label">
    <div class="group-label-tab active" data-rel="group1">
      <h2 class="active">1. Get Ready</h2>
    </div>
    <div class="group-label-tab" data-rel="group2">
      <h2>2. Create an app</h2>
    </div>
    <div class="group-label-tab" data-rel="group3">
      <h2>3. Communicate</h2>
    </div>
  </div>
  <div id="group1" class="group">
    <div class="step-group-label">
      <p class="step-tab active" data-rel="step1" data-topic="1">Install Node.js</p>
      <p class="step-tab" data-rel="step2" data-topic="2">Install a text editor</p>
      <p class="step-tab" data-rel="step3" data-topic="3">Install ngrok</p>
      <p class="step-tab" data-rel="step4" data-topic="4">Configure ZSH file</p>
      <p class="step-tab" data-rel="step5" data-topic="5">Make a Bandwidth account</p>
    </div>
    <div class="top-level-group">
      <div class="tutorial-step step1 nodejs">
        <ol>
          <li><strong>Open your terminal.</strong> See how <a class="moreAnchor">here.</a><span class="moreInstruction"><br>On the top of your computer click the magnifying glass and type terminal in the search bar. Press enter. This will open your terminal. Your terminal allows you to directly execute commands such as creating a file or starting an application on your mac.</span></li>
          <li><strong>Install Homebrew.</strong> This is a great tool for quickly installing programs on a Mac. Most programs can be installed by writing one line of code in the terminal. Copy and paste this line of code into your terminal and press ENTER. The program will begin installation and may take a few minutes. Learn more about homebrew <a href="https://brew.sh/">here.</a><br>
            <p class="tutorial-code">/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</p>
          </li>
          <li><strong>Install node</strong> using the homebrew program you installed in the previous step. Copy and paste the below line of code and press enter.<br>
            <p class="tutorial-code">brew install node</p>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step2 nodejs">
        <p>There are many to chose from but we will use sublime for this tutorial. Download here: <a href="https://www.sublimetext.com/">https://www.sublimetext.com/</a>.
        </p>
      </div>
      <div class="tutorial-step step3 nodejs">
        <p>This will allow the program to be live on the internet. Bandwidth uses URL’s to make API calls. If your program is not live on the internet, you will not be able to send or receive calls and texts. <a href="https://ngrok.com/">https://ngrok.com/</a></p>
        <ol>
          <li>On ngrok.com, choose download and download the specific file for your computer.</li>
          <li>Open the file by double clicking on it.</li>
          <li>In the terminal copy and paste the following code:<br>
          <p class="tutorial-code">mv ngrok ~/Downloads ~</p><br> This will put ngrok in your home folder for future use.</li>
          <li>Run it by typing<br><p class="tutorial-code">./ngrok http 3000.</p></li>
        </ol>
        <p>You can also follow the instructions on the website download page. To stop ngrok at any time hold down (ctrl+C). You can also open a new tab on the terminal by holding down (command+T).</p>
      </div>
      <div class="tutorial-step step4 nodejs">
        <p>Oh My Zsh is a great link for managing the zsh file. <a href="https://github.com/robbyrussell/oh-my-zsh">https://github.com/robbyrussell/oh-my-zsh</p>
        <ol>
          <li>To download Oh My ZSH, copy the following text and paste in the terminal then press enter:<br>
          <p class="tutorial-code">h -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"</p></li>
          <li>Add the sublime plugin. This is optional but will make working with sublime easier.
            <ol>
              <li>Open your text editor by opening your finder. Go to the applications tab on the left hand side. If you are using sublime, open sublime. </li>
              <li>In sublime, open the file menu at the top of the screen and choose open. Open your home folder.</li>
              <li>If you are using sublime,  scroll all the way down until you see a file called .zshrc</li>
              <li>In the zshrc file, find the plugins line. It should say plugins=(git ). Change that line to be plugins=(git sublime zsh-nvm). One easy way to find the plugins section is to hold down the command and f keys. This will open a search window. In the search window type plugins and press enter. It should find the plugin section. </li>
              <li>Choose file -> save</li>
              <li>Restart your terminal</li>
              <li>This will allow you to use shortcuts. Here are important shortcuts we use throughout this guide:<br>
                <p class="tutorial-code">stt</p> = opens a folder in sublime<br>
                <p class="tutorial-code">st</p> = opens a a single file in sublime
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step5 nodejs">
        <ol>
          <li><strong>Sign up</strong> for a <a href="http://catapult.inetwork.com/portal/signup">free trial account</a>.
          </li>
          <li><strong>Get a phone number.</strong> It is important you have a phone number to send and receive calls and messages through Bandwidth’s server. The bandwidth dashboard makes this very easy to get a number but you can also use code to order phone numbers. Today we will use the dashboard.
            <ol>
              <li>First, login to dev.bandwidth.com</li>
              <li>Select the Numbers tab</li>
              <li>You can fill search by: City and state, zipcode OR area code. But you may only choose one of the three options.</li>
              <li>Press search. You will see a list of numbers appear. If no list appears, search a different region. Some area codes are almost impossible to get due to the limited availability of numbers.</li>
              <li>Choose a number by checking the box next to it.</li>
              <li>Select the blue Get Numbers button.</li>
              <li>If it says ‘Success’ then you successfully received your number.</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div id="group2" class="group">
    <div class="step-group-label">
      <p class="step-tab" data-rel="step6" data-topic="6">Setup environment variables</p>
      <p class="step-tab" data-rel="step7" data-topic="7">Create JSON file</p>
      <p class="step-tab" data-rel="step8" data-topic="8">Create index page</p>
      <p class="step-tab" data-rel="step9" data-topic="9">Install dependencies</p>
      <p class="step-tab" data-rel="step10" data-topic="10">Start your program</p>
      <p class="step-tab" data-rel="step11" data-topic="11">Create new client</p>
    </div>
    <div id="create-app-group" class="top-level-group">
      <div class="tutorial-step step6 nodejs">
        <ol>
          <li>To find the ID, Token, and Secret, login to API Platform <a href="http://catapult.inetwork.com/pages/login.jsf">here</a>. If you are already logged in, go to step 2.</li>
          <li>Select the Account tab and scroll down until API information appears.</li>
          <li>The user ID is displayed in the User ID box. </li>
          <li>Choose the credentials button to retrieve the Token and Secret.</li>
          <li>Open your ZSHRC file by typing the following code. The zshrc file holds credentials and your computer preferences.<br>
            <p class="tutorial-code">st ~/.zshrc</p></li>
          <li>Add the following to the bottom of the zshrc file and fill in each with the appropriate credentials from above. The Catapult and Bandwidth credentials are the same.<br>
<pre><code class="lang-js">export CATAPULT_USER_ID=<br>
export CATAPULT_API_TOKEN=<br>
export CATAPULT_API_SECRET=<br>
export BANDWIDTH_USER_ID=<br>
export BANDWIDTH_API_TOKEN=<br>
export BANDWIDTH_API_SECRET=<br>
</code></pre>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step7 nodejs">
        <ol>
          <li><strong>Make a directory.</strong> This will make a directory to store all your files and code. A directory is a folder created by the terminal.<br>
            <p class="tutorial-code">mkdir name</p></li>
          <li><strong>Change into that directory.</strong> Your terminal does not automatically open to the new directory once it is made so you must manually open it using the cd name command.<br>
            <p class="tutorial-code">cd name</p><br></li>
          <li><strong>Use npm to create a .json file and follow the instructions:</strong><br><p class="tutorial-code">npm init</p><br>NPM is a package manager for JavaScript. It allows you to easily install, update, and use other programs. Because we are using Bandwidth’s API, this will be extremely helpful. NPM will prompt you with the following questions that will help setup your program:
            <ol>
              <li>Name: name of project </li>
              <li>Version: version (you will usually start with version 1.0)</li>
              <li>Description: description of the app </li>
              <li>Entry point (fills out as index.js) </li>
              <li>Test command : echo ‘no test yet’ </li>
              <li>Keywords: helps npm find your package when people search for the keywords </li>
              <li>Author: your name</li>
              <li>License: MIT</li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step8 nodejs">
        <ol>
          <li><strong>Open the text editor:</strong><br>
          <p class="tutorial-code">stt</p><br> Stt is a command specific to our sublime plugin installed in step 7 of the prerequisite guide that allows you to open the project. You may also use st to open a single file rather than the entire project. If you are not using Sublime, open your text editor with its specific commands.</li>
          <li><strong>Create an index page.</strong> Sublime will open to a blank project. To create the index page, choose file -> save as-> then name the file index.js -> choose save. </li>
          <li>In package.json add start to script: "start": "node index.js". You will see all the files associated with this project on the left hand side in Sublime. Open the package.json file. In the “scripts” section, add a comma after the test command then type "start": "node index.js". This step is not necessary but will make running the application easier. If you choose not to complete this step, you will run your application by typing node index.js in the terminal. If you add the script, your .json file should look like this:</li>
        </ol>
      </div>
      <div class="tutorial-step step9 nodejs">
        <ol>
          <li><strong>Install the dependencies.</strong> Type each of the below lines into the terminal. This step installs all the necessary software for the program to run.<br>
            <p class="tutorial-code">npm install --save node-bandwidth</p><br>
            <p class="tutorial-code">npm install --save express</p><br>
            <p class="tutorial-code">npm install --save body-parser</p>
          </li>
          <li><strong>Add the dependencies to index.js.</strong> In your index.js file, copy the below code and paste it at the top of the index file. These are dependencies. Dependencies are programs that our code will use to run. It allows us to write less code and run more efficiently.<br>
<pre><code class="lang-js">var Bandwidth = require("node-bandwidth");<br>
var express = require("express");<br>
var app = express();<br>
var bodyParser = require("body-parser");<br>
var http = require("http").Server(app);
</code></pre>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step10 nodejs">
        <ol>
          <li><strong>Run the index page.</strong> Your computer may need to download some programs, but the programs will download automatically when you run your code for the first time. This will not happen when you run your code in the future.<br>
          <p class="tutorial-code">npm start</p>
          </li>
          <li><strong>Open back to home directory.</strong> Any time you would like to return to your home directory, you can just use cd without a name afterwards. If you have nested folders and want to go back just one folder, you can also use ../ which will take you back one directory.<br>
          <p class="tutorial-code">cd</p>
          </li>
          <li><strong>Open ngrok.</strong> You must have ngrok running every time you start your program. At any time if the ngrok terminal does not say “connected”, return to your home directory and start the program using the ./ngrok http 3000 command. Note: we are using port 3000. A port is a connection point between a computer and another device. In this case, it is our connection point between our program and the internet. Port 3000 is a common port to run programs from. You can use a different port if it is available. A list of available ports is online and depends on your specific computer.<br>
          <p class="tutorial-code">./ngrok http 3000</p></li>
        </ol>
      </div>
      <div class="tutorial-step step11 nodejs">
        <ol>
          <li><strong>Create a new tab in terminal.</strong> If you are using a standard Mac, you can hold down (command+T) buttons together to open a new tab. Now you will have 2 tabs. One is used to ensure that ngrok is working correctly and the other is to program on. Your applications web address is always available on the ngrok tab under the forwarding line.</li>
          <li><strong>Return to project folder.</strong> This command will return you to the directory, name. You can also type cd - to return to your last used directory. If you followed the above steps, it will return you to the project directory.<br>
          <p class="tutorial-code">cd name</p>
          </li>
          <li><strong>Open index.js file</strong> in your text editor:<br>
          <p class="tutorial-code">stt</p>
          </li>
          <li><strong>Create a new client using Bandwidth interface.</strong> Paste the following code under your dependencies. See step 8 if you need to retrieve your token, client, and secret again.<br>
<pre><code class="lang-js">var client = new Bandwidth({
  userId    : "u-",  // note, this is not the same as the username you used to login to the portal
  apiToken  : "t-",
  apiSecret : "u"
});
</code></pre>
          </li>
          <li><strong>Add necessary apps.</strong> Paste the following 2 lines of code under the client. These are apps that our program will use.<br>
<pre><code class="lang-js">app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
</code></pre>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div id="group3" class="group">
    <div class="step-group-label">
      <p class="step-tab" data-rel="step12" data-topic="12">Send a message</p>
      <p class="step-tab" data-rel="step13" data-topic="13">Create outbound call</p>
    </div>
    <div id="communicate-group" class="top-level-group">
      <div class="tutorial-step step12 nodejs">
        <ol>
          <li><strong>Create methods.</strong> Copy and paste the below code into your index.js file.<br>
            <ol>
              <li><strong>Method 1:</strong> sendMessage sends a message:
<pre><code class="lang-js">var sendMessage = function(params){
  client.Message.send({
    //returns a promise
    from : params.from, //your bandwidth number
    to   : params.to, //number to send to
    text : "",
    media: "https://s3.amazonaws.com/bwdemos/logo.png"
  })
  //calls back the message id number and catches any errors
  //is this important?
  .then(function(message){
    messagePrinter(message);
    return client.Message.get(message.id)
    //access ID from json can also get to and from
  })
  // prints message to console
  .then(function(){
    console.log(message);
  });
  // catches any errors     
  .catch(function(err){
    console.log(err)
  });
}
</code></pre>
            </li>
            <li><strong>Method 2:</strong>  messagePrinter prints the message to console in order to see what was sent (helper method):
<pre><code class="lang-js">var messagePrinter= function (message){
  console.log('Using the message printer');
  console.log(message);
}
</code></pre>
          </li>
            </ol>
          </li>
          <li><strong>Create a number variable with the to and from numbers.</strong> Sending a message takes at 3 parameters: 1. The to number, 2. The from number, and 3. The message. By setting the numbers in the number method, we can send multiple messages to the same number more easily. It will also allow us to store numbers in a database to create a contact list. Change the numbers below so the from number is the Bandwidth number associated with this application and the to number is the number you would like to text.<br>
<pre><code class="lang-js">var numbers = {
  to: "+1##########",	//number to send to
  from: "+1##########" //Bandwidth number
};
</code></pre>
          </li>
          <li><strong>Send message using the numbers:</strong><br>
<pre><code class="lang-js">sendMessage(numbers);
</code></pre>
          </li>
        </ol>
      </div>
      <div class="tutorial-step step13 nodejs">
        <ol>
          <li>Follow the setup instructions</li>
          <li><strong>Create a call method.</strong> The following code is the basis for making an outbound call. Copy and paste it into the index file. The callbackHttpMethod and callbackUrl is used to speak a sentence into the call. The sentence is in an xml file created by Bandwidth. Feel free to create your own xml file.<br>
<pre><code class="lang-js">var createCall = function(params){
  console.log("to: " + params.to);
  console.log("from: " + params.from);
  return client.Call.create({
    from: params.from,
    to  : params.to,
    callbackHttpMethod: "GET",
    callbackUrl: "https://s3.amazonaws.com/bwdemos/helloFromBandwidth.xml"
  })
};
</code></pre>
          </li>
          <li><strong>Create a number variable with the to and from numbers.</strong> Sending a message takes at 3 parameters: 1. The to number, 2. The from number, and 3. The message. By setting the numbers in the number method, we can send multiple messages to the same number more easily. It will also allow us to store numbers in a database to create a contact list. Change the numbers below so the from number is the Bandwidth number associated with this application and the to number is the number you would like to text.<br>
<pre><code class="lang-js">var numbers = {
  to: "+1##########", //number to send to
  from: "+1##########" //Bandwidth number
};
</code></pre>
          </li>
          <li><strong>Create the call:</strong> <br>
<pre><code class="lang-js">createCall(numbers)
</code></pre>
          </li>
          <li><strong>Run the code.</strong> This will begin the code and start the call:<br>
          <p class="tutorial-code">npm start</p></li>
        </ol>
      </div>
    </div>
  </div>  
  <a href="#tutorial" class="noAnchor"><button id="tutorial-prev" class="disabled tutorial-controls medium secondary light hover-back left">Back</button></a>
  <a href="#tutorial" class="noAnchor"><button id="tutorial-next" class="tutorial-controls medium hover-go right">Next</button></a>
</div>
{% endraw %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
$('#group1').show();
$('.tutorial-step').not('.step1').hide();
var one = $('#group1 .step-group-label .step-tab:last').data('topic');
var two = $('#group2 .step-group-label .step-tab:last').data('topic');
var totalSteps = $('.step-tab').length;
console.log(totalSteps);
$('.group-label-tab').click(function(){
  var current = $('.step-tab.active').data('topic');
  var total = $('.step-tab').length;
  tabs(this);
  startGroup();
  $('#tutorial-prev').removeClass('disabled');
  $('#tutorial-next').removeClass('disabled');
});
$('.group-label-tab[data-rel="group1"]').click(function(){
  $('#tutorial-prev').addClass('disabled');
  $('#tutorial-next').removeClass('disabled');
});
$('.step-tab').click(function(){
  $('.step-tab').removeClass('active');
  $(this).addClass('active');
  $('.tutorial-step').hide();
  $('.' + $(this).data('rel')).show();
  $('#tutorial-prev').removeClass('disabled');
  $('#tutorial-next').removeClass('disabled');
});
$('.step-tab[data-topic="1"]').click(function(){
  $('#tutorial-prev').addClass('disabled');
  $('#tutorial-next').removeClass('disabled');
});
$('.step-tab[data-topic="' + totalSteps + '"]').click(function(){
  $('#tutorial-prev').removeClass('disabled');
  $('#tutorial-next').addClass('disabled');
  console.log('worling');
});
$('#tutorial-next').click(function(){
  var current = $('.step-tab.active').data('topic');
  var total = $('.step-tab').length;
  console.log(current, total);
  nextTut(current);
  properTab(current);
  if (current == total - 1){
    $(this).addClass('disabled');
  } else {
    $(this).removeClass('disabled');
  }
  $('#tutorial-prev').removeClass('disabled');
});
$('#tutorial-prev').click(function(){
  var current = $('.step-tab.active').data('topic');
  prevTut(current);
  properTab((current - 2));
  if (current == 2){
    $(this).addClass('disabled');
  } else {
    $(this).removeClass('disabled');
  }
  $('#tutorial-next').removeClass('disabled');
});
function tabs(a){
  $('.group-label-tab').removeClass('active');
  $(a).addClass('active');
  $('.group').hide();
  $('#' + $(a).data('rel')).show();
};
function startGroup(){
  $('.step-tab').removeClass('active');
  $('#' + $('.group-label-tab.active').data('rel')).children('.step-group-label').children('p:first-child').addClass('active');
  $('.tutorial-step').hide();
  $('#' + $('.group-label-tab.active').data('rel')).children('.top-level-group').children('div:first-child').show();
};
function properTab(a){
  if (a >= one && a < two){
    tabs($('.group-label-tab[data-rel="group2"]'));
  } else if (a >= two){
    tabs($('.group-label-tab[data-rel="group3"]'));
  } else {
    tabs($('.group-label-tab[data-rel="group1"]'));
  }
};
function nextTut(a){
  var next = a + 1;
  if (next !== ($('.step-tab').length + 1)){
    $('.step-tab').removeClass('active');
    $('.step-tab[data-topic="'+next+'"]').addClass('active');
    $('.tutorial-step').hide();
    $('.step' + next).show();
  } else {
    return false;
  }
};
function prevTut(a){
  var prev = a - 1;
  if (prev !== 0){
    $('.step-tab').removeClass('active');
    $('.step-tab[data-topic="'+prev+'"]').addClass('active');
    $('.tutorial-step').hide();
    $('.step' + prev).show();
  } else {
    return false;
  }
};
$('li pre').css({"display":"block", "margin-top":"5px", "padding":"0", "border-radius":"5px"});
$('li pre code').css({"display":"inline-block", "padding":"7px 15px"});
$('.moreAnchor').click(function(){
      $(this).next('.moreInstruction').show();
});
</script>
