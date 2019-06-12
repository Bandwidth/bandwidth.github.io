# Testing Porting in The Bandwidth Interop Environment

## Overview

* [About](#about)
* [TNs that return Supported in the LNPchecker](#supported-tns)
* [TNs that return Unsupported in the LNPChecker](#unsupported-tns)
* [TNs that fail the LNP Order creation synchronously](#failed-tns)
* [TNs that pass the synchronous check and fail the async check](#pass-fail)
* [TNs that succeed all the way through](#success-tns)
* [Ports that are managed at every step of the way](#managed-ports)
  1. [Get a test user](#get-test-user)
  2. [Establish a Manual Offnet port](#establish-offnet)
  3. [Update the `state`](#update-state)
  4. [Update the FOC Date](#update-foc)
  5. [Finally](#end-of-test)
* [NPA NXX pairs for testing Porting](#npa-nxx-pairs)
* [Rate Centers for Manual Porting](#rate-center-manual-porting)
* [Unsupported Rate Centers](#unsupported-rate-centers)

## About {#about}

There are a number of port-in test scenarios that can be exercised in the “Interop” API testbed environment before going live in the production environment.  The scenarios, and how to simulate them, are listed below.
Before we dig into those scenarios however, it is worth understanding something about how numbers are checked, and what numbers will pass and fail checks.
There are a number of checks that are performed in assessing portability:

* Coverage for the number if the port is accepted – there must be a way to connect to the host rate center for processing the calls, so we must have direct or partner connectivity to the rate center that is responsible for routing calls to that number.
* Our ability to work with the losing carrier to execute the port - a condition that very seldom fails.
* The NPAC ownership of the Number, and our ability to work with that carrier to execute the port.
* The nature of the service, and our ability to support porting of that service type.
* The status of a number

We have been investing in supporting more combinations of the above conditions, making it harder to find failure cases.

There are 3 “kinds” of ports that are supported by the Bandwidth API:

* Automated, where the entire port can be handled by API connections to other carriers
* Internal, where the entire port is handled within Bandwidth, because it is between Bandwidth sub-networks or between Bandwidth customers
* Manual, where some manual intervention is required, for example if the target rate center is owned by a partner, or the number is a Toll Free number.

All 3 types are supported by the Bandwidth API, and for the most part are handled transparently from the perspective or our customer.

With that context, here are approaches that can be used to test various behaviors in our interop test environment.


## TNs that return Supported in the LNPchecker {#supported-tns}

For this we need a couple of criteria to pass, including a simulation of an ownership check and a coverage check.  I have included a file of valid NPA NXX pairs [see NPA NXX pairs for testing Porting below] that define numbers that are (for simulation purposes) not owned by Bandwidth.   If a number nas an NPA NXX pair that is on this list then it will cause an Automated External Number port; otherwise, it will create an Internal (Account to Account) port.   For a port to succeed it should also be “covered” from a Bandwidth network perspective.  The `/coveredRateCenters` API call can be used to determine our ability to provide coverage, which should in turn support passage of the coverage check.

The ownership and coverage factors above will govern success of the portability check.

## TNs that return Unsupported in the LNPChecker {#unsupported-tns}

The easiest way to receive an unsupported response from the LNPChecker is to ask to port to an “uncovered” location that we do not support on our network.  There is a list below [see Unsupported Rate Centers below] of unsupported rate centers and the associated NPA and NXX values for the numbers in those Rate Centers.  Attempting to port in a numbers that match that pattern will not be supported because of the impossibility of providing coverage. Numbers in all of these NPA-NXX pairs should fail the check.  Another good way to ensure failure is to request porting for a number that is in “Available” state in our network, namely the number is available for ordering.  Since that number is not owned by any end user it will not be portable.  Finding a number in this state of already “Available” in our inventory can be done with the `/accounts/<id>/availableNumbers` API.  A third way to create a failure is to check the portability of a number that is already being ported.

## TNs that fail the LNP Order creation synchronously {#failed-tns}

Syntactic errors (like TNs with too many digits) will cause a synchronous failure.  The best bet here is to create malformed payload elements.

## TNs that pass the synchronous check and fail the async check {#pass-fail}

This is a fun one, because we attempt to catch all of the things that we can synchronously.  The Async failures happen downstream, and we do not connect to downstream providers in the interop environment.  All is not lost however – we have a mechanism to manage the ports manually, and and can use this capability to simulate downstream asynchronous failures (and successful state transitions).   Managing manual ports can be done by many of the Bandwidth staff, although some preparation and coordination will be required.  If your account is appropriately configured they can also be supported via API calls (see section 1.6).  A support ticket should be opened to facilitate this style of testing, and setup may take a couple of days.  Simply use a number that would fall into one of the rate centers below. [see Rate Centers for Manual Porting below]


## TNs that succeed all the way through {#success-tns}

The best way to observe the entire success path is to order a number into your account, and then port that number back into the same account. That exercises the entire flow including all notifications.  There will still be a minimum porting interval of approximately a day for these ports if the default settings are retained.
To reduce the interval, the port-in can be classified as a `<Triggered>` port.  With the 0 days minimum interval for internal ports that is set in the Interop test environment, you can request a `<Triggered>` or "Customer Activated" port, and a request an activation time in the near future.  That will allow two things:

1. The activation of that port at the requested default time
2. The ability to "trigger" (activate) the port prior to the requested default activation time using the `/accounts/{accountId}/portins/{orderid}/activationStatus` API call.

This will shorten the interval to a shorter time for portins from an account back to the same account.

## Ports that are managed at every step of the way {#managed-ports}

The final step in testing porting is to test the various states that the port may reach, and controlling the state transitions within the allowed state transitions.  This will allow you to test otherwise unreachable states, and although this will not provide the full range of error messages that might be associated with a port and its failure conditions, it will allow you to exercise a broader range of state changes and notifications.

In order to take advantage of this testing step, you will have to contact your Bandwidth representative, and work with them to create a special manual port management user ID.   Please refer them to this document so that they understand what you are attempting to set up.  This user will be able to change the state of Manual Ports, and to set the FOC Date of portin orders in FOC state.  This user will only be created for the interop test environment – these capabilities are not allowed in a production environment, and the specially constrained user will not be set up in that environment.

Once the user has been established you will be able to control the port state and state transitions for Manual Ports.  The sequence of events that you will go through to execute these tests is as follows:

### 1. Get a test user {#get-test-user}

Get a user created and issued to you for testing, as described above

### 2. Establish a Manual Offnet port {#establish-offnet}

Establish a Manual Offnet port, either through the Portal or the API.  A Manual Offnet port is one that would port in a number that is in a Rate Center of one of our partners.  This form of port is usually managed by Bandwidth staff, who take care of moving the port through the various stages of its life-cycle, but in this case you will be acting in that role, and making the (allowed) state transitions via API calls.  To create a Manual Offnet port, attempt to port in a telephone number that has the NPA NXX pattern described in the appendix “Rate Centers for Manual Porting”.  Creation of this order will result in an portin-id that can be used in subsequent steps.

There is some chance the user might select a number that is in a ‘pending’ status that someone else has been working with. The user will receive an appropriate error on an LNPchecker request in that situation.

### 3. Update the `state` {#update-state}

Make changes to the state of the port using a PUT API call on the portin order created in step 2:

```http
PUT https://{{base-url}}/accounts/{{account-id}}/portins/{{portin-id}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<LnpOrderSupp>
    <ProcessingStatus>EXCEPTION</ProcessingStatus>
</LnpOrderSupp>
```

Where the `<ProcessingStatus>` value is the desired next state

> Responds

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<LnpOrderResponse>
    <OrderId>2dd9df95-71fa-4898-8002-a2ed1c50a4da</OrderId>
    <Status>
        <Code>200</Code>
        <Description>
               Supp request received. Please use the order id to check the status of your order later.
        </Description>
    </Status>
    <ProcessingStatus>REQUESTED_SUPP</ProcessingStatus>
</LnpOrderResponse>
```

The `<ProcessingStatus>` in the response can be ignored – it is not representative of the actual next state in this case.

### 4. Update the FOC Date {#update-foc}

Once the order is in FOC state the FOC date can also be changed for that port using a similar APU call.  Note that the payload may contain the state transition and the FOC date change.  This sets or changes the actual FOC date, not the requested FOC date.

```http
PUT https://{{base-url}}/accounts/{{account-id}}/portins/{{portin-id}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}

<LnpOrderSupp>
    <ActualFocDate>2015-08-21</ActualFocDate>
    <ProcessingStatus>FOC</ProcessingStatus>
</LnpOrderSupp>
```

… with a new FOC date.  This is only applicable for orders in or entering FOC state.

### 5. Finally {#end-of-test}

If you are uncertain of the valid next steps for any state in the portin state transition model, the error payload will indicate the acceptable next steps.  The <> payload error will provide the available next states.

```xml
<LnpOrderResponse>
    <OrderId>2dd9df95-71fa-4898-8002-a2ed1c50a4da</OrderId>
    <Status>
        <Code>400</Code>
        <Description>Validation Failed. Please check your input parameters.</Description>
    </Status>
    <Errors>
        <Code>7364</Code>
        <Description>
            Incorrect next porting state. Allowed next states: {REQUESTED_SUPP, FOC, EXCEPTION,
            CANCELLED}
        </Description>
    </Errors>
    <ProcessingStatus>EXCEPTION</ProcessingStatus>
</LnpOrderResponse>
```

##  NPA NXX pairs for testing Porting {#npa-nxx-pairs}

Telephone numbers in the following NPANXXs are viewed by the pseudo ownership check as not owned by Bandwidth from a NPAC telephone number ownership perspective.  All other TNs that are not already in inventory that have NPANXXs in the table below are considered to be not in the Bandwidth network, and thus portable into the Bandwidth network as a normal port.

Non-Bandwidth NPA NXX pairs:
* `303 228`
* `210 696`
* `863 216`
* `913 364`
* `503 224`
* `662 550`
* `718 439`
* `217 410`

## Rate Centers for Manual Porting {#rate-center-manual-porting}

The following Rate Centers can be used to cause a port to be “manual”, which will result in a successful port that can be advanced through the work-flow manually.

The applicable npa nxx pairs are:

* `662 550`
* `520 238`
* `217 410`


## Unsupported Rate Centers {#unsupported-rate-centers}

| rc\_state  | rc\_abbreviation | npa | nxx | rc\_state  | rc\_abbreviation | npa | nxx |
|:-----------|:-----------------|:----|:----|:-----------|:-----------------|:----|:----|
| ABBOTTSBG  | NC               | 910 | 648 | ALBERTCITY | IA               | 712 | 843 |
| ABBYVLPLVN | KS               | 620 | 286 | ALBERTON   | MT               | 406 | 722 |
| ABERCROMBI | ND               | 701 | 553 | ALBIA      | IA               | 641 | 931 |
| ABERNATHY  | TX               | 806 | 298 | ALBIN      | WY               | 307 | 246 |
| ABIQUIU    | NM               | 505 | 210 | ALBORN     | MN               | 218 | 345 |
| ABRAMS     | WI               | 920 | 373 | ALBURG     | VT               | 802 | 796 |
| ABSARAKA   | ND               | 701 | 896 | ALBURNETT  | IA               | 319 | 842 |
| ABSAROKEE  | MT               | 406 | 328 | ALCESTER   | SD               | 605 | 934 |
| ACADEMY    | SD               | 605 | 726 | ALDERSON   | WV               | 304 | 445 |
| ACHILLE    | OK               | 580 | 283 | ALDRICH    | MO               | 417 | 694 |
| ACKERLY    | TX               | 432 | 353 | ALEXANDER  | IA               | 641 | 692 |
| ACKERMAN   | MS               | 662 | 285 | ALEXANDER  | IL               | 217 | 478 |
| ACUFF      | TX               | 806 | 842 | ALEXANDER  | KS               | 785 | 343 |
| ADAIR      | IA               | 641 | 742 | ALEXANDER  | ND               | 701 | 828 |
| ADAIR      | IL               | 309 | 653 | ALEXANDER  | TX               | 254 | 764 |
| ADAIR      | OK               | 918 | 785 | ALEXIS     | IL               | 309 | 482 |
| ADAIRVILLE | KY               | 270 | 539 | ALFALFA    | OK               | 580 | 637 |
| ADDIEVILLE | IL               | 618 | 424 | ALFOVLGNDL | IN               | 812 | 644 |
| ADENA      | OH               | 740 | 546 | ALGER      | MI               | 989 | 520 |
| ADIN       | CA               | 530 | 299 | ALGER      | OH               | 419 | 757 |
| ADJUNTAS   | PR               | 787 | 829 | ALICE      | ND               | 701 | 689 |
| ADKUSNVLST | AK               | 907 | 572 | ALICE      | TX               | 361 | 207 |
| AGANA      | GU               | 671 | 300 | ALICEVILLE | AL               | 205 | 373 |
| AGATE      | CO               | 719 | 764 | ALINE      | OK               | 580 | 463 |
| AGENCY     | IA               | 641 | 937 | ALLAKAKET  | AK               | 907 | 968 |
| AGENCY     | MO               | 816 | 253 | ALLERTON   | IA               | 641 | 873 |
| AGENDA     | KS               | 785 | 732 | ALLIGTORPT | FL               | 850 | 349 |
| AGRA       | KS               | 785 | 638 | ALLUWE     | OK               | 918 | 228 |
| AGRA       | OK               | 918 | 375 | ALMACENTER | WI               | 715 | 964 |
| AGUADA     | PR               | 787 | 252 | ALMO       | ID               | 208 | 824 |
| AGUADILLA  | PR               | 787 | 431 | ALMYRA     | AR               | 870 | 992 |
| AGUASBUNAS | PR               | 787 | 732 | ALPHA      | IA               | 563 | 429 |
| AGUILA     | AZ               | 928 | 258 | ALPHA      | IL               | 309 | 529 |
| AGUIRRE    | PR               | 787 | 853 | ALTA VISTA | IA               | 641 | 364 |
| AIRPORT    | BA               | 242 | 377 | ALTA VISTA | KS               | 785 | 499 |
| AJO        | AZ               | 520 | 387 | ALTHA      | FL               | 850 | 451 |
| AKHIOK     | AK               | 907 | 836 | ALTHEIMER  | AR               | 870 | 717 |
| AKIACHAK   | AK               | 907 | 825 | ALTONA     | IL               | 309 | 484 |
| AKIAK      | AK               | 907 | 765 | ALTOSVIRLL | DR               | 809 | 570 |
| AKUTAN     | AK               | 907 | 381 | ALTURAS    | CA               | 530 | 233 |
| ALAKANUK   | AK               | 907 | 238 | ALUM RIDGE | VA               | 540 | 763 |
| ALAMITO    | TX               | 432 | 358 | ALZADA     | MT               | 406 | 828 |
| ALAMO      | GA               | 912 | 361 | AM SAMOA   | AS               | 684 | 248 |
| ALAMO      | ND               | 701 | 528 | AMANA      | IA               | 319 | 225 |
| ALAMO      | NV               | 775 | 725 | AMAZONIA   | MO               | 816 | 367 |
| ALAMO      | TN               | 731 | 461 | AMBERG     | WI               | 715 | 759 |
| ALANSON    | MI               | 231 | 203 | AMBLE      | MI               | 231 | 762 |
| ALAPAHA    | GA               | 229 | 303 | AMBLER     | AK               | 907 | 445 |
| ALBERT     | KS               | 620 | 452 | AMBROSE    | ND               | 701 | 982 |
|            |                  |     |     | AMELIACTHS | VA               | 804 | 242 |
