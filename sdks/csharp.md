# C# SDK

## Release Notes

| Version | Notes |
|--|--|
| 2.0.0 | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.0.0 | Updated Pause and SendDtmf BXML attributes |
| 3.1.0 | Added MFA functions |
| 3.2.0 | Added support for multi nested verbs in Gathers |

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
                .MessagingBasicAuthCredentials( token, secret )
                .Build();


//Select namespaced controller.
Bandwidth.Standard.Voice.Controllers.APIController voiceController = client.Voice.APIController;
Bandwidth.Standard.Messaging.Controllers.APIController msgController = client.Messaging.APIController;


```

## Create Phone Call

```csharp
using Bandwidth.Standard.Voice.Controllers;

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

var response = msgController.CreateMessage(msgUserId, msgRequest);
```

## Order Phone Number

```csharp
//Coming soon
```
