## Setting Up Basic Auth for Callbacks
You can password protect your web server for Bandwidth Callbacks for example:

`https://username:password@yoursecurehost.com/yoursecureapp`

Modify the callback URL for your application. This can be done through the API ([see documentation](#applications)) or through the web portal on the “My Apps” tab. Select the Application you want to modify, and then click the “Edit” button.

![api](images/basic-auth.png)

Scroll down and edit either the “Call URL” or the “Messaging URL” (or both). The URL should be structured as follows:

`https://{username}:{password}@yourdomain.com/`

You must use HTTPS in order to use basic auth with App Platform callbacks, and your callback server should present a valid, trusted certificate. Your username and password should also be [URL Encoded](http://www.w3schools.com/tags/ref_urlencode.asp) to prevent special characters from being lost.

![api2](images/basic-auth2.png)

Basic Auth also works for Call and Messaging fallback URLs as well. In addition, you can also use Basic Auth in your callbacks for specific messages and calls that you create. For instance, if you want callback events for a specific outgoing message, when you create the message with a `POST` to the API and set the callback URL, you can add credentials to this URL as well. The same requirements (HTTPS, and URL Encoded) apply here as well.

When your application receives a callback from the App Platform, the “Authorization” header will now be set. The “Authorization” header will tell your application what type of authorization is being sent – in this case “Basic” – followed by a [Base64 Encoded](https://en.wikipedia.org/wiki/Base64) string containing the username and password, separated by a colon, that you configured in your callback URL.

![api3](images/basic-auth3.png)

Your application can now be written to only accept a request if it contains the expected credentials in the “Authorization” header, because only you will ever know the credentials. When you set the callback URL on the API (or on the web portal) the credentials are encrypted in transit, and they are also encrypted when they are stored in the database. They are also encrypted in transit between your application and the App Platform, so other parties cannot extract your credentials by inspecting your network traffic. This is why it is important to use a valid, trusted certificate on your application server, to ensure the security of your callbacks.
