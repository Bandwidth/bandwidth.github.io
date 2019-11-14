# C# SDK

### Download & Install

```
nuget install Bandwidth.Sdk -OutputDirectory packages
```

*Note This only adds the package to the disk.  The packages.config or dependency file needs to be modified to add it to the project.

### Initialize Bandwidth Voice & Message Client

```csharp
using Bandwidth.Standard;
using Bandwidth.Standard.Voice.Controllers;
using Bandwidth.Standard.Messaging.Controllers;


//create Configuration with credentials
Configuration config = new Configuration.Builder()
            .WithMessagingBasicAuthPassword("msg.password")
            .WithMessagingBasicAuthUserName("msg.username")
            .WithVoiceBasicAuthPassword("voice.password")
            .WithVoiceBasicAuthUserName("voice.username")
            .WithEnvironment(Configuration.Environments.PRODUCTION)
            .Build();

//Activate the Client with the Configuration
APIController msgController = new BandwidthClient(config).Messaging.Client;
APIController voiceController = new BandwidthClient(config).Voice.Client;


```

### Create Phone Call

```csharp
using Bandwidth.Standard.Voice.Controllers;

callRequest.ApplicationId = "3-d-4-b-5";
callRequest.To="+19999999999";
callRequest.AnswerUrl= "https://test.com";
callRequest.From="+17777777777";

//Be aware that the Voice Client can throw exceptions
try {
    voiceController.CreateCall("account.id", callRequest);
} catch (APIException e) {
    WriteLine( e.Message );
} catch (IOException e) {
    WriteLine( e.Message );
}


```

### Generate BXML

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

### Send Text Message

```csharp
using Bandwidth.Standard.Messaging;
using Bandwidth.Standard.Messaging.Controllers;
using Bandwidth.Standard.Messaging.Models;

MessageRequest msgRequest = new MessageRequest();
msgRequest.ApplicationId = applicationId;
msgRequest.From = "+18888888888";
msgRequest.To = new string[1] {"9199199999"};
msgRequest.Text = "The quick brown fox jumps over a lazy dog.";

msgController.CreateMessage(msgUserId, msgRequest);
```

### Order Phone Number

```csharp
//Coming soon
```
