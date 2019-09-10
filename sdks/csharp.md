# C# SDK

### Download & Install

```
nuget install Bandwidth.Sdk -OutputDirectory packages -Version 1.0.0-beta

//This only adds the package to the disk.  
//The packages.config or dependency file needs to be modified to add it to the project.
```

### Initialize Bandwidth Client

```csharp
using BandwidthSdk.Standard.BandwidthVoice;
using BandwidthSdk.Standard.BandwidthVoice.Models;



//create Configuration with credentials
Configuration config = new Configuration.Builder()
			.WithBandwidthVoiceBasicAuthPassword("voice.password")
			.WithBandwidthVoiceBasicAuthUserName("voice.username")
			.WithEnvironment(Configuration.Environments.PRODUCTION)
			.Build();

//Activate the Client with the Configuration
APIController voiceClient = new BandwidthVoiceClient(config).Client;

```

### Create Phone Call

```csharp

//Create the ApiCreateCallRequest object
ApiCreateCallRequest callRequest = new ApiCreateCallRequest();

callRequest.ApplicationId = "3-d-4-b-5";
callRequest.To="+19999999999";
callRequest.AnswerUrl= "https://test.com";
callRequest.From="+17777777777";

//Be aware that the Voice Client can throw exceptions 
try {
	voiceClient.CreateCall("account.id", callRequest);
} catch (APIException e) {
	WriteLine( e.Message );
} catch (IOException e) {
	WriteLine( e.Message );
}


```

### Generate BXML

```csharp
using BandwidthBXML;

//Bandwidth XML (BXML) verb SpeakSenetence plays the sentence audio
SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Hello World";

//Add the verb to a Response object
Response res =  new Response();
res.Add(speakSentence);

//view the BXML 
Console.write( res.ToXml() );

```

### Send Text Message

```csharp
//Coming soon
```

### Order Phone Number

```csharp
//Coming soon
```
