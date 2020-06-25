# Errors

# HTTP Error Codes
Categorized error codes generated by the application.

## Overview

* [401 - Unauthorized](#http-401)
* [403 - Access Denied](#http-403)
* [404 - Not Found](#http-404)
* [500 - Internal Server Error](#http-500)


## 401 – Unauthorized {#http-400}

Bandwidth will return a `HTTP-401` Error when the specified user does not have access to the account. Ensure the username and password are correct along with the correct account number.


## 403 – FORBIDDEN {#http-403}

Bandwidth returns a `HTTP-403` error when the user does not have access to WebRTC APIs.


## 404 – NOT_FOUND {#http-404}

Bandwidth returns a `HTTP-404` when a resource is not found or no longer active. This can include sessions and participants.


## 500 – Internal Server Error {#http-500}

Bandwidth will return a `HTTP-500` Error when an unknown error occurs. If you receive a `HTTP-500` error, please open a [support ticket](https://support.bandwidth.com) with the original request and the response returned. Please be sure to remove any passwords or sensitive information from the support ticket!
