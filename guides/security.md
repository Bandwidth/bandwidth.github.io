# Security

This guide will cover how to find your credentials for use with  Bandwidth's [Phone Number API](https://dashboard.bandwidth.com)

## Assumptions

* You have a [Phone Number Dashboard](https://dashboard.bandwidth.com) account

## Overview

* [Credential Overview](#creds-overview)
  * [Account Id](#account-id)
  * [Sub-account Id](#sub-account-id)
* [Basic Auth](#basic-auth)

## Credential overview {#creds-overview}

| Credential Name                        | Description                                                                                                                                                                                                                                                                                             | Example                        |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
| `username`                             | Your **username** to *log in* to the [Phone Number Dashboard](https://dashboard.bandwidth.com)                                                                                                                                                                                                          | `jdoe`                         |
| `password`                             | Your **password** to *log in* to the [Phone Number Dashboard](https://dashboard.bandwidth.com)                                                                                                                                                                                                          | `correct-horse-battery-staple` |
| `accountId`                            | Your unique account **id**.  The `accountId` is used as part of the url to make API requests. <br> Ex: `https://dashboard.bandwidth.com/api/accounts/{accountId}/`                                                                                                                                      | `920012`                       |
| `subAccountId` <br> -or- <br> `siteId` | Any **id** for any sub-account.  The `subAccountId` is used as part of the url to make some API requests. <br> Ex: `https://dashboard.bandwidth.com/api/accounts/{accountId}/sites/{sideId}` <br><br> ℹ️ *Sub-accounts* are also known as *sites* <br> ℹ️ An *account* can have multiple *sub-accounts* | `13606`                        |

### Account Id {#account-id}

1. Log into the [Bandwidth Phone Number Dashboard](https://dashboard.bandwidth.com)
2. Click the Account tab in the menu section to go to your [Account Overview](https://dashboard.bandwidth.com/portal/report/#account:)
3. Under the Account overview section you will see your account ID.

![account_id](../images/account_id.png)

### Sub-account (or site) Id {#sub-account-id}

Sub-accounts and sites refer to the same resource within the Phone Number Dashboard.  Typically the UI (or Dashboard) refers to the resource as a **sub-account** while the API refers to the resource as a **site**.  These are 100% interchangable.

1. Navigate to the [Sub-account page](https://dashboard.bandwidth.com/portal/report/#subaccounts:)
  * Account > Configuration > Sub-accounts
3. To add a sub account, click the 'Add a sub-account' Button
4. Once you have at least one sub-account, click the manage button to get the Id.

![sub-account_id](../images/subaccount_id.png)

## Basic Auth {#basic-auth}

The Bandwidth API methods are accessed through HTTPS to protect sensitive customer data against eavesdropping and man-in-the-middle attacks. Basic HTTP authentication is used with encryption via TLS. Basic HTTP authentication is supported by all browsers commonly in use, and the HTTP clients of most programming languages, and is straightforward to implement.
For examples on client authentication, please review information at: http://hc.apache.org/httpcomponents-client-ga/examples.html

Contact the Bandwidth Customer Experience Team for new credentials, password resets or access to additional purchased features.
The bandwidth dashboard requires the use of one of the versions of TLS: as of the appearance of the POODLE SSL vulnerability the support for SSL has been discontinued.
<br><br>