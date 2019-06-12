# Testing Port-out Validation in the Interop Sandbox

## Overview
* [About](#about)
* [Setup](#setup)
* [Testing](#testing)
  * [Testing an LSR-initiated port out](#lsr-portout)
  * [Testing a port-in driven port-out](#port-in)

## About {#about}
The Port-out Validation API allows approved and contracted customers to confirm the validity of port-out requests on submission, to ensure that the requests include the required FCC-permitted elements of subscriber data, in an attempt to reduce invalid requests.  This API will cause a synchronous API call to the endpoint configured for the account, and expect a response indicating the validity of the data, or any errors found in the data.

This port out verification API is documented in the `/callbacks` `/portOutValidationCallbackApi` section of the [API Reference](../apiReference.md)

The port-out process is a two-stage process.

1. In the initial stage, a request is made by the prospective winning carrier to remove (port-out) the number from the Bandwidth network so that it can be activated on the winning carrier’s network.  At this stage in the process, we will execute the port out validation call-back API to the URL that you provide us, and use the returned information in determining whether the number should be ported out.  If the port-out appears valid a port-out will be scheduled at a later date, and the prospective winning carrier will be informed
2. As a completely separate action, on the scheduled date, the telephone number will be removed from service in the Bandwidth number, and enabled for activation in the winning carrier’s network.

These two steps are completely independent.  The port out validation happens at the first stage.   A separate independent notification can be sent when the port-out actually happens (if it happens).  That notification can be an email, or via a different callback documented in the /subscriptions and the `/callbacks` `/notificationCallbackApi` sections of the [API Reference](../apiReference.md).  It is important to note that a verification does not mean that a number will port out, or that it will not.  The results of the verification is used to support the process, but the actual decision to remove the number involves other factors, and the number may or may not be removed based on those other factors.  The number is not removed until just before the notification callback API is invoked.

## Setup {#setup}

After you have completed the initial development, and are ready to begin testing your API implementation against a representative system.  The environment for your testing will include a target test system that receives the API calls, a test account in our test environment, and access to an “LSR” test account in our test environment that you can use to instigate port-outs.

![testing port out](../images/testingPortOut.md)

You should take the following steps to ensure that a test environment can be set up, and that you are ready to test.
1. Make sure that your Bandwidth Representative has the REST API URL that the Bandwidth Dashboard will invoke on detecting a request for a port-out.  This URL needs to be configured into the test system
2. Make sure that your Bandwidth Representative provides you access to a “target” test account from which you can port numbers.  This account may be a “loaner’, or a test account dedicated to your use.  This is the account that the numbers will be ported away from.
3. If necessary, make sure that your Bandwidth Representative has loaded that account with numbers that can be “ported out”, and that will cause successes and failures.
4. Also, get some account credentials for our “LSR” test account from Bandwidth.  You can use this account to initiate test port-out activities on the numbers that you want to use to perform tests.  This account is analogous to the accounts used by winning carriers to request port-out of a number.

The interop test system has fictional numbers, and will not result in the port-out of any telephone numbers in real systems.

Bandwidth will use the information above to configure the test account for your use, and notify you once the configuration is complete.  You will be able to log in to both the target account and the LSR account from the portal using the address https://test.dashboard.bandwidth.com/portal/#login .

## Testing {#testing}

There are two events that will result in a port-out validation: 1) entry of an LSR request, or 2) a “circular” port-in, which invokes a port-in activity back to the losing account, triggering a port-out activity to match with the port-out.   This test approach allows testing of both events.

Before you commence testing it is recommended that you log in to the “target” account and verify that the telephone numbers that you need for testing are present on the account.  This can be validated simply by entering the list of target numbers into the “Search Telephone Numbers” text box on the right hand side of the main dashboard page.

### Testing an LSR-initiated port out {#lsr-portout}

An LSR submission by a winning carrier can initiate a port-out.  To test an LSR-initiated port out…
1. Log into the LSR account using the credentials provided.
2. Under the “Orders” menu, select “Submit an LSR”.  This will present you with a form that you can fill out to request the port-out of one of the numbers currently on the “Target” account.  Values in the PIN, Account, ZIP will be passed to the Port-out Validation API call that the Dashboard will make to your system.
3. This will create an “LSR Order”, which is the persistent record of the attempt. The results of the request should be presented back to you as a subsequent update of the LSR order.
4. Various failure conditions can result, come of which are fatal, like an unrecognizable TN.  Others, like an invalid PIN can be corrected and resubmitted.
5. It is recommended that the target FoC date for the LSR port-out request be chosen in the future so that the order can be cancelled, and the Telephone Number preserved for subsequent testing.


### Testing a port-in driven port-out {#port-in}

An API-initiated port-in can also initiate a port-out, resulting in the second approach to testing the port-out validation API implementation.  To test this scenario we use a “circular” internal port-in; essentially porting the telephone number into the same account on which it was already resident.  To perform this test…
1. Log into the “Target” account using the credentials provided
2. Under the Orders menu select “Port Numbers” and fill in the provided form, using one of the telephone numbers already on the Target account.
3. On submission, this should create a port-in order that is tied to the requirement to port-out the number.  This in turn will execute the Port-in Validity check API call, and return the results to the port-in order.
4. As above, some failure conditions will be fatal, and others can be corrected.
5. Again as above it is recommended that the target FoC date be set in the far future, allowing the port-in request to be cancelled.   If this does not happen, the port-in will simply return the telephone number to the account.

You Bandwidth Representative can assist in the setup of the testing, and in the execution of the tests above using the Bandwidth Dashboard portal

Feel free to use any of the provided resources to resolve issues that arise.
<br>
<br>
