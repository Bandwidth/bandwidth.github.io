# Java SDK

### Download & Install

Coming Soon

### Initialize Bandwidth Client

```java
import com.bandwidth.voice.controllers.APIController;
import com.bandwidth.voice.Configuration;
import com.bandwidth.voice.Environments;


//Set the voice client configuration with credentials
Configuration voiceConfig = new Configuration().newBuilder()
            .basicAuthPassword( "voice.password" )
            .basicAuthUserName( "voice.username" )
            .environment(Environments.PRODUCTION)
            .build();

//create the voice client with the configuration
APIController voiceClient = new BandwidthV2VoiceClient(voiceConfig).getClient();


```

### Create Phone Call

```java
import com.bandwidth.voice.models.ApiCreateCallRequest;

//Create the ApiCreateCallRequst object and populate.
ApiCreateCallRequest callRequest = new ApiCreateCallRequest();

callRequest.setApplicationId("application.Id");
callRequest.setTo("+19999999999");
callRequest.setAnswerUrl("https://test.com");
callRequest.setFrom("+17777777777");

//The voice client createCall can throw these exceptions.
try {
	voiceClient.createCall("account.id", callRequest);
} catch (APIException e) {
	e.printStackTrace();
} catch (IOException e) {
	e.printStackTrace();
}
		
```

### Generate BXML

```java
import com.bandwidth.sdk.voice.models.verbs.*;

//Create a Bandwidth XML (BXML) SpeakSentence Verb.  Supply the sentence to be spoken.
SpeakSentence speakSentence = SpeakSentence.builder()
	.text("Hello World")
	.build();

//Create the response object and add the speakSentence verb to the response.
Response response = Response.builder().build().add(speakSentence);

//view the BXML
System.out.println( response.toXml() )

```

### Send Text Message

```java
//Coming soon
```

### Order Phone Number

```java
//Coming soon
```
