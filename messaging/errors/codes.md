# Bandwidth Messaging V2 API Error Reporting and Codes {#top}

## Resources
* [Message Error Reporting](#error-reporting)
* [Error Code Schema](codes.md#error-code-schema)
* [Error Code Table](codes.md#error-codes)
  * [Bandwidth Detected Client Errors](#client-errors)
  * [Carrier Reported Client Errors](#carrier-client)
  * [Bandwidth Service Failures](#service-errors)
  * [Carrier Reported Service Failures](#carrier-service-errors)
  * [Carrier Errors with Ambiguous Cause](#carrier-ambiguous-errors)

## Error Reporting {#error-reporting}
The Bandwidth V2 messaging API presents errors on the [callback URL](../callbacks/messageEvents.md) using the [`message-failed`](../callbacks/messageFailed.md) type in the payload body along with an errorCode and description.   An example is as follows:

```json
[
  {
    "type"          : "message-failed",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "forbidden to country",
    "errorCode"     : 4432,
    "to"            : "+52345678903",
    "message"       : {
    "id"            : "14762070468292kw2fuqty55yp2b2",
    "time"          : "2016-09-14T18:20:16Z",
    "to"            : [
        "+12345678902",
        "+52345678903"
      ],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
      ],
    "owner"         : "+12345678901",
    "direction"     : "out"
    }
  }
]
```

The description is purely informative and should not be utilized in error handling routines.  Only the [errorCode](#error-codes) should be used.


## Error Code Schema {#error-code-schema}
Bandwidth’s error code schema for messaging V2 is comprised of a 4 digit code.  As shown in the table below, the most significant digit indicates whether the error is client (customer) or server in nature while the second most significant indicates whether the error was reported by Bandwidth or the downstream carrier.  The last 2 are Bandwidth specific codes or bandwidth normalization of carrier specific codes.

<table>
   <tbody>
      <tr>
         <td colspan="2" rowspan="1">
            <p><span>Client / Server</span></p>
            <p><span>Digit</span></p>
         </td>
         <td colspan="2" rowspan="1">
            <p><span>Bandwidth / carrier</span></p>
            <p><span>Digit</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>X</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>X</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="4">
            <p> </p>
            <p><span>4</span></p>
         </td>
         <td colspan="1" rowspan="4">
            <p> </p>
            <p><span>Client error</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>1</span></p>
         </td>
         <td colspan="1" rowspan="3">
            <p> </p>
            <p><span>Bandwidth Rejected</span></p>
         </td>
         <td colspan="2" rowspan="3">
            <p> </p>
            <p><span>Bandwidth Specific</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>3</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>4</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>7</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>Carrier Rejected</span></p>
         </td>
         <td colspan="2" rowspan="1">
            <p><span>Carrier Normalized</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="4">
            <p><span>5</span></p>
         </td>
         <td colspan="1" rowspan="4">
            <p><span>Server Error</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>1</span></p>
         </td>
         <td colspan="1" rowspan="3">
            <p><span>Bandwidth Server Error</span></p>
         </td>
         <td colspan="2" rowspan="3">
            <p><span>Bandwidth Specific</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>2</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>5</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>6</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>Carrier Reported Service Failure</span></p>
         </td>
         <td colspan="2" rowspan="1">
            <p><span>Carrier Normalized</span></p>
         </td>
      </tr>
      <tr>
         <td colspan="1" rowspan="1">
            <p><span>9</span></p>
         </td>
         <td colspan="1" rowspan="1">
            <p><span>Ambiguous Error</span></p>
         </td>
         <td colspan="4" rowspan="1">
            <p><span>The error is related to downstream failures, but the specific reason for failure is unclear. </span></p>
         </td>
      </tr>
   </tbody>
</table>


## Message Delivery Codes Table {#error-codes}

### Bandwidth Detected Client Errors {#client-errors}

A 4xx code indicates that Bandwidth or the downstream carrier has identified some element of the message request unacceptable.  Repeating the request will produce the same result.

| Code | Description                                                                   | Billable                              |
|:-----|:------------------------------------------------------------------------------|:--------------------------------------|
| 4001 | Message was rejected for reasons other than those covered by other 4xxx codes | NO                                    |
| 4121 | Rejected as SPAM                                                              | YES                                   |
| 4301 | Malformed message encoding                                                    | NO                                    |
| 4302 | Malformed From number                                                         | NO                                    |
| 4303 | Malformed To Number                                                           | NO                                    |
| 4350 | Malformed message encoding                                                    | NO                                    |
| 4401 | Message is looping from carrier back to BW                                    | NO                                    |
| 4403 | Messaging forbidden on From number                                            | NO                                    |
| 4404 | Messaging forbidden on To number                                              | NO                                    |
| 4405 | Unallocated from number                                                       | NO                                    |
| 4406 | Unallocated to number                                                         | NO                                    |
| 4410 | Could not download media                                                      | NO                                    |
| 4411 | Combined size of media too large                                              | NO                                    |
| 4420 | No Route to Destination Carrier                                               | NO                                    |
| 4421 | No Route to Destination Carrier                                               | NO                                    |
| 4431 | Messaging on shortcode forbidden                                              | NO                                    |
| 4432 | Messaging to country forbidden                                                | NO                                    |
| 4433 | Messaging on Toll Free Number Forbidden                                       | NO                                    |
| 4434 | Messaging to Toll Free Number Forbidden                                       | NO                                    |
| 4451 | Invalid User Id                                                               | NO                                    |
| 4452 | Invalid Application Id                                                        | NO                                    |
| 4470 | Rejected as SPAM (future)                                                     | YES                                   |
| 4481 | From Number in black list                                                     | NO                                    |
| 4482 | To Number in black list                                                       | NO                                    |
| 4492 | Message to emergency number forbidden                                         | NO                                    |
| 4493 | Unauthorized                                                                  | NO                                    |

### Carrier Reported Client Errors {#carrier-client}

| Code | Description                                                                   | Billable                              |
|:-----|:------------------------------------------------------------------------------|:--------------------------------------|
| 4700 | Carrier Rejected as Invalid Service Type                                      | YES                                   |
| 4720 | Carrier Rejected as Invalid Destination Address                               | YES                                   |
| 4740 | Carrier Rejected as Invalid Source Address                                    | YES                                   |
| 4750 | Carrier Rejected Message                                                      | YES                                   |
| 4751 | Message too long for carrier                                                  | YES                                   |
| 4770 | Carrier Rejected as SPAM                                                      | YES                                   |
| 4775 | Carrier Rejected due to user opt out                                          | YES                                   |

### Bandwidth Service Failures {#service-errors}

A 5xx code indicates that either Bandwidth or the downstream carrier has reported a service failure.   For Bandwidth failures, the customer can retry the request and expect a different result.   For carrier errors a retry may also yield a different result however the customer should limit to a single retry attempt as the error encoding schema and strategy varies greatly by carrier and while Bandwidth endeavors to normalize carrier codes into predictable values there can be exceptions.


| Code | Description                                                                   | Billable                              |
|:-----|:------------------------------------------------------------------------------|:--------------------------------------|
| 5100 | Application Error                                                             | NO                                    |
| 5101 | Application Error                                                             | NO                                    |
| 5111 | Application Error                                                             | NO                                    |
| 5112 | Application Error                                                             | NO                                    |
| 5143 | Application Error                                                             | NO                                    |
| 5144 | Application Error                                                             | NO                                    |
| 5146 | Application Error                                                             | NO                                    |
| 5201 | Application Error                                                             | NO                                    |
| 5211 | Application Error                                                             | NO                                    |
| 5220 | Application Error                                                             | NO                                    |
| 5231 | Application Error                                                             | NO                                    |
| 5500 | General Message Send Failure                                                  | NO                                    |
| 5501 | General Message Send Failure                                                  | NO                                    |
| 5503 | Service Unavailable                                                           | NO                                    |

### Carrier Reported Service Failures {#carrier-service-errors}

| Code | Description                                                                   | Billable                              |
|:-----|:------------------------------------------------------------------------------|:--------------------------------------|
| 5600 | Carrier Service Unavailable                                                   | YES                                   |
| 5610 | Carrier Service Failure                                                       | YES                                   |
| 5620 | Carrier Application Error                                                     | YES                                   |
| 5630 | Carrier Application Error                                                     | YES                                   |
| 5650 | Carrier Service Failure                                                       | YES                                   |
| 5999 | Unknown error from downstream                                                 | YES                                   |

### Carrier Errors with Ambiguous Cause {#carrier-ambiguous-errors}

| Code | Description                                                                                          | Billable                              |
|:-----|:-----------------------------------------------------------------------------------------------------|:--------------------------------------|
| 9902 | Timed out waiting for delivery receipt. The reason a delivery receipt was not received is not known. | YES                                   |
| 9999 | Unknown error from downstream.  Carrier reported a failure code that is unknown to Bandwidth.        | YES                                   |
