# Termination Network Bridge Provisioning
<br>
##Setting SIP Credentials

With these edge settings, a new menu item will appear on the Bandwidth Dashboard portal, ‘SIP Credentials’. This allows searching, managing, and importing SIP credentials via the Dashboard portal. 

###Bandwidth Dashboard SIP Credentials

![sipCredentials](images/tnbp/sipCredentials.png)

###Important Information For You

* You must be able to create hash values via MD5
* Bandwidth will provide the domain: custxx.auth.bandwidth.com


###SIP Credentials Menu Item

![sipCredentialsMenuItem](images/tnbp/sipCredentialsMenuItem.png)

* SIP Credentials can also be managed via the Dashboard API (see [here](https://dev.bandwidth.com/docs/phone-numbers/) for a full description of the API). The resource, sipcredentials, is used for CRUD operations; create, update and delete

###Bandwidth uses the following format to pass calls (will require username and password):

```
sip:+15555551212@custxx.dev.sipauth.bandwidth.com:(insert port number)
```
