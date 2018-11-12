# Setup Guide - Voice & Messaging (Communications APIs)
### Prerequisites

* A Bandwidth Voice & Messaging account.  Sign up or sign in [here](https://app.bandwidth.com).
* A web server where Bandwidth can send callbacks or request BXML documents.
    * A tunnel service like [Ngrok](https://ngrok.com) can be used as well.

### Step 1. Get a Bandwidth Telephone Number 

* Sign in to your Bandwidth Voice & Messaging account [here](https://app.bandwidth.com).
* Select "Numbers" from the main menu.
* Select "Buy" from the sub menu.
* Search by Area Code, Zip Code, or City.
* Select a number from the list and click the Get Numbers button.

*_You should now have a Bandwidth number that can be used for Voice & Messaging applications._*

### Step 2. Create a Bandwidth Application and Associate Your Number.

* Select Applications from the main menu.
* Click the "Create New" button and give your application a name.
* Set the Application's Callback Request Method to "GET or "POST" and set the Application Type to "Both".
    * If you are using BXML, you will need to use "GET" as the Callback Request Method.
* Set the Messaging Callback URL to the URL where your messaging scripts will be hosted.
* Set the Voice Callback URL to the URL where your voice scripts or BXML will be hosted.
* If you are using BXML for voice callbacks, turn the Automatically Answer Incoming switch on. If you are not using BXML for voice callbacks, you can set this switch to whichever setting is appropriate for your application.
* Click the Create button.
* Click the "+" in the Associated Numbers box (below the Application info).
* Select your Bandwidth number.  

*_Your number is now associated with this Application.  When you call or text to your number, the application will send the appropriate callback to the URLs you specified._*

### Step 3. Get Your Bandwidth API User ID, Token, and Secret

*_Bandwidth APIs use BASIC HTTP Authentication.  You will need to have your user id, token and secret to make API calls.  Additional help with security can be found [here](https://dev.bandwidth.com/security.html) or by clicking the Security link in the navigation menu to the left._

* Select Account from the main menu.
* Click the "copy" link to copy your user id to the clipboard.  Paste into a secure location on your computer.
* Click the "Show Token and Secret" button.
* Copy the token and secret to the clipboard and paste to a secure location on your computer.

*_You are now ready to use the Bandwidth Voice & Messaging APIs._*

