# C# SDK

## Links

The C# SDK(s) are available via [NuGet](https://www.nuget.org/) & Github

| Links                                                                     | Description                                                                     | Github                                                                                                 |
|:--------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [`Bandwidth.Sdk`](https://www.nuget.org/packages/Bandwidth.Sdk/)          | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/csharp-sdk)                  |
| [`Bandwidth.Iris`](https://www.nuget.org/packages/Bandwidth.Iris/)        | Manage phone numbers and account settings                                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/csharp-bandwidth-iris)       |
| [Code Examples](https://github.com/Bandwidth-Samples?language=c%23) | C# Code Examples                                                                | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth-Samples?language=c%23) |

## Release Notes

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 2.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.0.0   | Updated Pause and SendDtmf BXML attributes                                      |
| 3.1.0   | Added MFA functions                                                             |
| 3.2.0   | Added support for multi nested verbs in Gathers                                 |
| 3.3.0   | Added support for Conference BXMl, Conference API Endpoints, and WebRTC         |
| 3.4.0   | Updated WebRTC Permissions schema                                               |
| 3.5.0   | Updated MFA schema to include digits and expirationTimeInMinutes                |
| 3.6.0   | Added BXML Bridge verb                                                          |
| 3.7.0   | Updated WebRTC base URL                                                         |
| 3.8.0 | Added get conference endpoint |
| 3.9.0 | Added conference management endpoints |
| 4.0.0 | Renamed `CallEngineModifyConferenceRequest` to `ApiModifyConferenceRequest`, and removed `from` and `digits` from `TwoFactorVerifyRequestSchema` |
| 5.0.0 | Added get messages function, and updated the `body` parameter in the create message function to be required. Updated the MFA error bodies and added message priority |
| 6.0.0 | Updated voice, messaging, and MFA objects as well as corrected WebRTC `participantId` and `sessionId` parameter ordering in a number of requests. |

## Download & Install

```
nuget install Bandwidth.Sdk -OutputDirectory packages
```

*Note:  This only adds the package to the disk.  The packages.config or dependency file needs to be modified to add it to the project.


## Initialize Bandwidth Voice & Message Client

*__Note__:  If you see this error `System.Net.WebException: The underlying connection was closed: An unexpected error occurred on a send.`  This code may be needed `System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;`

```csharp
using Bandwidth.Standard;

//create Configuration with credentials
BandwidthClient client = new BandwidthClient.Builder()
                .VoiceBasicAuthCredentials( username, password )
                .MessagingBasicAuthCredentials( token, secret )
                .MultiFactorAuthBasicAuthCredentials( username, password)
                .Environment(Bandwidth.Standard.Environment.Custom) // Optional - sets the base URL to Custom
                .BaseUrl("https://test.com") // Optional - sets the base URL
                .Build();


//Select namespaced controller.
Bandwidth.Standard.Voice.Controllers.APIController voiceController = client.Voice.APIController;
Bandwidth.Standard.Messaging.Controllers.APIController msgController = client.Messaging.APIController;


```

## Create Phone Call

```csharp
using Bandwidth.Standard.Voice.Controllers;

CreateCallRequest callRequest = new CreateCallRequest();

callRequest.ApplicationId = "3-d-4-b-5";
callRequest.To="+19999999999";
callRequest.AnswerUrl= "https://test.com";
callRequest.From="+17777777777";

//Be aware that the Voice Client can throw exceptions
try {
    var response = voiceController.CreateCall("account.id", callRequest);
} catch (APIException e) {
    WriteLine( e.Message );
} catch (IOException e) {
    WriteLine( e.Message );
}


```

## Generate BXML

```csharp
using Bandwidth.Standard.Voice.Bxml;

//Bandwidth XML (BXML) verb SpeakSenetence plays the sentence audio
SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Hello World";

//Add the verb to a Response object
Response res =  new Response();
res.Add(speakSentence);

//view the BXML
Console.write( res.ToBXML() );

```

## Send Text Message

```csharp
using Bandwidth.Standard.Messaging;
using Bandwidth.Standard.Messaging.Controllers;
using Bandwidth.Standard.Messaging.Models;

MessageRequest msgRequest = new MessageRequest();
msgRequest.ApplicationId = applicationId;
msgRequest.From = "+18888888888";
msgRequest.To = new string[1] {"9199199999"};
msgRequest.Text = "The quick brown fox jumps over a lazy dog.";

var response = msgController.CreateMessage(accountId, msgRequest);
```

## Order Phone Number

```csharp
//Coming soon
```

## Error Handling

All SDK methods can raise 2 types of exceptions based on the API response received.

The first type of exceptions are expected endpoint responses. The exception throw varies on each method and the corresponding http status code.

The second type of exceptions are unexpected endpoint responses. The exception throw will always be a `ApiException`.

### Error Handling Example: Messaging

```csharp
<using statements>

<client initialization code>

ApiResponse<BandwidthMessage> response = null;
try
{
    response = controller.CreateMessage(accountId, messageRequest);
}
catch (MessagingException ex)
{
    Console.WriteLine(ex.Type);
    Console.WriteLine(ex.Description);
}
catch (ApiException ex)
{
    Console.WriteLine(ex.ResponseCode);
    Console.WriteLine(ex.Message);
}
```
