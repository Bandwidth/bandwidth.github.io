# C# SDK

## Links

The C# SDK(s) are available via [NuGet](https://www.nuget.org/) & Github

| Links                                                                     | Description                                                                     | Github                                                                                                 |
|:--------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|
| [`Bandwidth.Sdk`](https://www.nuget.org/packages/Bandwidth.Sdk/)          | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/csharp-sdk)                  |
| [`Bandwidth.Iris`](https://www.nuget.org/packages/Bandwidth.Iris/)        | Manage phone numbers and account settings                                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/csharp-bandwidth-iris)       |
| [Code Examples](https://github.com/Bandwidth/examples/tree/master/csharp) | C# Code Examples                                                                | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/examples/tree/master/csharp) |

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
                .Environment(Bandwidth.Standard.Environment.Production)
                .VoiceBasicAuthCredentials( username, password )
                .MessagingBasicAuthCredentials( username, password )
                .WebRtcBasicAuthCredentials( username, password )
                .TwoFactorAuthBasicAuthCredentials( token, secret )
                .Build();


//Select namespaced controller.
Bandwidth.Standard.Voice.Controllers.APIController voiceController = client.Voice.APIController;
Bandwidth.Standard.Messaging.Controllers.APIController msgController = client.Messaging.APIController;
Bandwidth.Standard.WebRtc.Controllers.APIController webRtcController = client.WebRtc.APIController;
Bandwidth.Standard.TwoFactorAuth.Controllers.APIController twoFactorAuthController = client.TwoFactorAuth.APIController;

```

## Create Phone Call

```csharp
using Bandwidth.Standard.Voice.Controllers;

ApiCreateCallRequest callRequest = new ApiCreateCallRequest {
    From = "+17049092002",
    To = "+1918214697",
    ApplicationId = "6987a4d0-f925-4e5a-8f2e-d2029a30766c",
    AnswerUrl = "https://example.com/"
};

//Be aware that the Voice Client can throw exceptions
try {
    var response = voiceController.CreateCall("accountId", callRequest);
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

MessageRequest msgRequest = new MessageRequest{
    ApplicationId = applicationId,
    From = "+18888888888",
    To = new string[1] {"9199199999"},
    Text = "The quick brown fox jumps over a lazy dog."
}

var response = msgController.CreateMessage(accountId, msgRequest);
```

## Order Phone Number

```csharp
//Coming soon
```

## Create A WebRtc Participant

```csharp
var participant = new Participant
{
    Tag = "participant1",
    CallbackUrl = "https://example.com/callback",
    PublishPermissions = new List<PublishPermissionEnum>
    {
        PublishPermissionEnum.AUDIO,
        PublishPermissionEnum.VIDEO
    },
    Subscriptions = new Subscriptions
    {
        SessionId = "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
        Participants = new List<ParticipantSubscription>
        {
            new ParticipantSubscription
            {
                ParticipantId = "568749d5-04d5-483d-adf5-deac7dd3d521"
            },
            new ParticipantSubscription
            {
                ParticipantId = "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
            }
        }
    }
};

var response = controller.CreateParticipant(accountId, participant);
```