{% raw %}
<section class="emergencyServicesAbout">
{% endraw %}

# 911 Access Dashboard

<img src="../../images/e911_city.svg" style="max-width:95%">

The [911 Access Dashboard](https://dashboard.dashcs.com/) allows you to easily provision phone numbers and pair them with a verified address. Use the 911 Access Dashboard or our APIs to quickly update or add user endpoints and get real-time error correction for more precise call routing and improved emergency response.

## 911 Access Dashboard Overview
| Guide                                   | Description                                                                                                                     |
|:----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [REST API Methods](methods/about.md)    | The available 911 Access Dashboard API methods |
| [SOAP Overview](methods/soap.md)        | The SOAP reference for the 911 Access Dashboard |

Bandwidth’s API is a set of programming instructions and standards for accessing Bandwidth’s web-based application – the [911 Access Dashboard](http://dashboard.dashcs.com/). The API provides a quick and efficient way to manage endpoint configuration.

## Getting Started
To get things moving quickly, perform the following steps:

  1. Log into the staging environment to make sure your login and password work properly. If you don't have a login, please open a ticket with your Bandwidth Support Team.
  1. If you aren’t familiar with web services, be sure to get the tooling or libraries you need for your platform. Not sure where to start? Download SOAPUI to begin working with our API right away.
  1. Develop your client code against our staging environment.
  1. Please reach out to your Bandwidth Support Team to enable API access on our production environments.

## Environments
Bandwidth maintains a staging environment for customers to integrate with before moving on to production. In each section where URLs are shown, one will be for staging and the other for production. The staging environment has a possible daily outage window between 11 a.m. and 1 p.m. MT.

Staging doesn't maintain the same service levels as production. Bandwidth makes no assurances that data entered into staging is permanently saved; therefore, there should be no dependence on the staging environment from an operational perspective. Your ongoing development efforts (including integration testing and continuous integration) should not depend on the uptime of our staging server. Staging is primarily meant for initial integration and connectivity testing.

## Security
Bandwidth API services are encrypted with TLS. Authentication is handled via HTTP Basic authentication. Basic authentication has popular support among frameworks and since the transport is encrypted by TLS the username and password are encrypted for all exchanges.

Too many failed login attempts will cause your account to be disabled. Your account can be re-enabled by your administrator using the 911 Access Dashboard or by contacting your Bandwidth Support Team. Our system will send out a warning to the email address associated with the user account, so you will need to make sure a valid email address is in the 911 Access Dashboard for the API user.

### Validating Your Credentials
To check if your credentials work for emergency provisioning click [this link](https://service.dashcs.com/dash-api/xml/emergencyprovisioning/v1/authenticationcheck) in a browser and enter your username and password.

__Note__: You must have the “API Emergency Access” role to use the Emergency API. You should see XML returned that looks like this:

```xml
<ns1:getAuthenticationCheckResponse xmlns:ns1=”http://dashcs.com/api/v1/emergency”>
 <AuthValid>true</AuthValid>
</ns1:getAuthenticationCheckResponse>
```
