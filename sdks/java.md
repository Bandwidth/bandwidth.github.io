# Java SDK

### Download & Install

Coming Soon

### Initialize Bandwidth Client

```java
import com.bandwidth.BandwidthClient;
import com.bandwidth.Environment;


//Set the voice client configuration with credentials
BandwidthClient client = new BandwidthClient.Builder()
            .messagingBasicAuthCredentials( "MSG_API_TOKEN", "MSG_API_SECRET")
            .environment(Environment.PRODUCTION)
            .build();

//create the voice client with the configuration
com.bandwidth.voice.controllers.APIController voiceClient = client.getVoiceClient().getAPIController();
com.bandwidth.messaging.controllers.APIController msgClient = client.getMessagingClient().getAPIController();


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
{% sample lang="java" %}

```java
import com.bandwidth.messaging.models.MessageRequest;

MessageRequest messageRequest = new MessageRequest();

List<String> toNumbers = new ArrayList<>();

toNumbers.add("+12345678902");

messageRequest.setApplicationId(MSG_APPLICATION_ID);
messageRequest.setText("Hey, check this out!");
messageRequest.setFrom("+12345678901");
messageRequest.setTo( toNumbers );
messageRequest.setTag("test tag");

ApiResponse<BandwidthMessage> response = messagingClient.createMessage(accountId, messageRequest);
System.out.println(response.getResult().getId());
``````

### Order Phone Number

```java
//Coming soon
```
