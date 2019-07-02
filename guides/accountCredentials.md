# Account Credentials

This guide will cover the different credentials for interacting with Bandwidth's APIs, and how to authenticate on each API.

## Guides for finding and creating credentials
* [Token and Secret](https://support.bandwidth.com/hc/en-us/articles/360014110974)
* [Application ID](https://support.bandwidth.com/hc/en-us/articles/360013007654)

## Basic Auth

The Bandwidth API methods are accessed through HTTPS to protect sensitive customer data against eavesdropping and man-in-the-middle attacks. Basic HTTP authentication is used with encryption via TLS. Basic HTTP authentication is supported by all browsers commonly in use, and the HTTP clients of most programming languages, and is straightforward to implement.
For examples on client authentication, please review information at: http://hc.apache.org/httpcomponents-client-ga/examples.html

### Base64 Encoding Credentials

You must [base64](https://en.wikipedia.org/wiki/Base64) encode the credentials as part of the `Authorization` HTTP header.
* `apiToken`:`apiSecret`
* `username`:`password`

Contact the Bandwidth Customer Experience Team for new credentials, password resets or access to additional purchased features.
<br>

## Credentials overview

| Credential Name                        | Description                                                                                                                                                                                                                                                                                             | Example                                            |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `username`                             | Your **username** to *log in* to the [Bandwidth Dashboard](https://dashboard.bandwidth.com)                                                                                                                                                                                                             | `jdoe`                                             |
| `password`                             | Your **password** to *log in* to the [Bandwidth Dashboard](https://dashboard.bandwidth.com)                                                                                                                                                                                                             | `correct-horse-battery-staple`                     |
| `accountId`                            | Your unique account **id**.  The `accountId` is used as part of the url to make API requests. <br> Ex: `https://dashboard.bandwidth.com/api/accounts/{accountId}/`                                                                                                                                      | `920012`                                           |
| `subAccountId` <br> -or- <br> `siteId` | Any **id** for any sub-account.  The `subAccountId` is used as part of the url to make some API requests. <br> Ex: `https://dashboard.bandwidth.com/api/accounts/{accountId}/sites/{sideId}` <br><br> ℹ️ *Sub-accounts* are also known as *sites* <br> ℹ️ An *account* can have multiple *sub-accounts* | `13606`                                            |
| `apiToken`                             | Your unique api token.  The `apiToken` is used as the **username** to authenticate to the API as part of the basic auth scheme                                                                                                                                                                          | `f12a9edeed04ecd21b303c6f1f9f0831a1482f7f3c59199e` |
| `apiSecret`                            | Your unique api secret.  The `apiSecret` is used as the **password** to authenticate to the API as part of the basic auth scheme                                                                                                                                                                        | `j54935lddasl837592356aasdf8359hlo3`               |
| `applicationId`                        | The ID of your messaging application                                                                                                                                                                                                                                                                    | `532qd-fk5odk5-dlslka40-l5k3lsdmc`                 |

## Authentication on each API

### Voice

| Credential Name | How it is used                                                                                    |
|:----------------|:--------------------------------------------------------------------------------------------------|
| `accountId`     | Used as a URL parameter for the API endpoint `https://voice.bandwidth.com/v2/account/{accountId}` |
| `username`      | Used as the username for HTTP basic auth                                                          |
| `password`     | Used as the password for HTTP basic auth                                                          |

### Messaging

| Credential Name | How it is used                                                                                                   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------|
| `accountId`     | Used as a URL parameter for the API endpoint `https://messaging.bandwidth.com/api/v2/users/{accountId}/messages` |
| `apiToken`      | Used as the username for HTTP basic auth                                                                         |
| `apiSecret`     | Used as the password for HTTP basic auth                                                                         |
| `applicationId` | Used as a parameter in the request body                                                                          |

### Numbers

| Credential Name | How it is used                                                                                          |
|:----------------|:--------------------------------------------------------------------------------------------------------|
| `accountId`     | Used as a URL parameter for the API endpoint `https://dashboard.bandwidth.com/api/accounts/{accountId}` |
| `username`      | Used as the username for HTTP basic auth                                                                |
| `password`      | Used as the password for HTTP basic auth                                                                |

<br>
