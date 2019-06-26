# Reserving Phone Numbers

Reserves a telephone number for a default time of 4 hours. A successful reservation returns a location header that can be used to retrieve the reservation at a later time.

This API permits a TN wanted by an end user to be placed in a _“Reserved”_ state for a limited period of time.  While in the _“Reserved”_ state the TN will not show up in searches, and cannot be ordered by any other party than the one that placed the TN into the _“Reserved”_ state.  This allows an End User to find a TN that they want to purchase, and be assured that the TN will still be available once the rest of the commercial transaction is complete.  If the TN is not ordered within a timeout period, the _“Reserved”_ state is removed and the TN can once again be ordered.

In addition to the normal work-flow, the API permits the cancellation of a reservation, reporting on outstanding reservations, and provides the mechanism to control access to the capability at the account level.

There is a small gap in the work-flow that will prevent two parties to compete for a TN.  If two searches are run that find the same number, only the first one to place a reservation on that number will be able to order it.  The alternative to this approach, essentially auto-reserving numbers that are searched, would cause too large an impact to the TN inventory.

The following API calls are used to manage the Reservation of TNs as part of the Ordering process.  Reservation is not enabled on all accounts.   If reservation is allowed for an account, the customer can reserve an available TN using a POST that will return a reservation ID that can be used to manage the reservation.

An API user can cancel a Reservation that is no longer required the <code class="delete">DEL </code> method.

User without Admin privileges can retrieve reservations only by using the `ReservationID`:

* Ordering a TN that has been reserved is done using the `<ExistingTelephoneNumberOrderType>` order type, and requires that the order contains the ReservationID for any numbers that have been previously reserved.   If the Reservation ID is not included with the order, a Reserved TN will not be successfully ordered.
* It is also possible to discover reservations pending against a specific TN by interrogating the `TNReservation` resource associated with a TN.  This query is restricted to providing information that does not cross account boundaries.
<br>
<br>
