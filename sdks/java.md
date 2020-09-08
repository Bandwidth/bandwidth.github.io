# Java SDK

## Links

The Java SDK(s) are available via [Maven](https://mvnrepository.com/) & Github

| Links                                                                                                                       | Description                                                                     | Github                                                                                               |
|:----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [`com.bandwidth.sdk/bandwidth-sdk`](https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk)                     | Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/java-sdk)                  |
| [`com.bandwidth.sdk/bandwidth-java-iris-sdk`](https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-java-iris-sdk) | Manage phone numbers and account settings                                       | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/java-bandwidth-iris)       |
| [Code Examples](https://github.com/Bandwidth/examples/tree/master/java)                                                     | Java code examples                                                              | [<img src="https://github.com/favicon.ico">](https://github.com/Bandwidth/examples/tree/master/java) |

## Release Notes

| Version | Notes                                                                           |
|:--------|:--------------------------------------------------------------------------------|
| 2.0.0   | Removed all messaging exceptions and normalized them under `MessagingException` |
| 3.0.0   | Updated Pause and SendDtmf BXML attributes                                      |
| 3.1.0   | Added MFA functions                                                             |
| 3.2.0   | Added support for multi nested verbs in Gathers                                 |
| 3.3.0   | Added support for Conference BXMl and Conference API Endpoints                  |
| 3.4.0   | Updated MFA schema to include digits and expirationTimeInMinutes                |
| 3.5.0   | Added BXML Bridge verb                                                          |
| 3.6.0 | Added get conference endpoint |
| 3.7.0 | Added WebRTC API |
| 3.8.0 | Added conference management endpoints |

## Download & Install

Maven:

```xml
<!-- https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk -->
<dependency>
    <groupId>com.bandwidth.sdk</groupId>
    <artifactId>bandwidth-sdk</artifactId>
    <version>version</version>
</dependency>
```

## Initialize Bandwidth Client

```java

//Set the voice client configuration with credentials
BandwidthClient client = new BandwidthClient.Builder()
            .messagingBasicAuthCredentials("MESSAGING_API_TOKEN", "MESSAGING_API_SECRET")
            .voiceBasicAuthCredentials("VOICE_API_USERNAME", "VOICE_API_PASSWORD")
            .twoFactorAuthBasicAuthCredentials("username", "password")
            .environment(com.bandwidth.Environment.CUSTOM) // Optional - sets the enviroment to a custom base URL
            .baseUrl("https://test.com") // Optional - sets the base Url
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
