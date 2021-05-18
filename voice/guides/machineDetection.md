# Machine detection

## About

This guide will show you how to do machine detection, using the `machineDetection` parameter in a [call creation request](../methods/calls/postCalls.md).

You can use either a sync or an async mode for this operation.

## Async mode

When using the async mode, once the machine detection operation is completed, you will receive a [machineDetectionComplete](../bxml/callbacks/machineDetectionComplete.md) callback.

If async mode is selected, the `callbackUrl` needs to be specified. Also, you need to return proper BXML on the `answer` callback in order for the call to not be hung up until the operation is complete.

The only required parameter for async mode is the callback url:

```json
{
  "from"             : "+15555551212",
  "to"               : "+15555551313",
  "answerUrl"        : "http://www.myapp.com/hello",
  "applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
  "machineDetection" : {
    "callbackUrl": "http://www.myapp.com/machineDetectionComplete"
  }
}
```

[Other parameters](../methods/calls/postCalls.md#machine-detection-request) can be configured as well, but are optional.

## Sync mode

When using the sync mode, the [answer](../bxml/callbacks/answer.md) callback is delayed until the machine detection operation is completed. Also, you will not receive a [machineDetectionComplete](../bxml/callbacks/machineDetectionComplete.md) callback in this case.

The only thing needed to use the sync mode is to set the mode itself, since the default is async:

```json
{
  "from"             : "+15555551212",
  "to"               : "+15555551313",
  "answerUrl"        : "http://www.myapp.com/hello",
  "applicationId"    : "7fc9698a-b04a-468b-9e8f-91238c0d0086",
  "machineDetection" : {
    "mode": "sync"
  }
}
```