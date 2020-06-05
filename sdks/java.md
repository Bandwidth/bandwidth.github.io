# Java SDK

## Release Notes

| Version | Notes |
|--|--|
| 2.0.0 | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.0.0 | Updated Pause and SendDtmf BXML attributes |
| 3.1.0 | Added MFA |
| 3.2.0 | Added support for multi nested verbs in Gathers |

## Download & Install

Maven:

```xml
<!-- https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk -->
<dependency>
    <groupId>com.bandwidth.sdk</groupId>
    <artifactId>bandwidth-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

## Initialize Bandwidth Client

```java

//Set the voice client configuration with credentials
BandwidthClient client = new BandwidthClient.Builder()
            .messagingBasicAuthCredentials("MESSAGING_API_TOKEN", "MESSAGING_API_SECRET")
            .voiceBasicAuthCredentials("VOICE_API_USERNAME", "VOICE_API_PASSWORD")
            .environment(Environment.PRODUCTION)
            .build();

//Fully qualified name to remove confilicts
com.bandwidth.messaging.controllers.APIController messagingController = client.getMessagingClient().getAPIController();
com.bandwidth.voice.controllers.APIController voiceController = client.getVoiceClient().getAPIController();

```

## Create Phone Call

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
    ApiResponse<ApiCallResponse> response = voiceController.createCall("account.id", callRequest);
    System.out.println(response.getResult().getCallId());
} catch (IOException | ApiException e) {
    //Handle
}

```

## Generate BXML

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

## Send Text Message

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

try {
    ApiResponse<BandwidthMessage> response = messagingController.createMessage(accountId, messageRequest);
    System.out.println(response.getResult().getId());
} catch (ApiException  | IOException e){
    //Handle
}
```

## Order Phone Number

```java
//Coming soon
```
