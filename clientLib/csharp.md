# Bandwidth.Net

A .Net client library for the [Bandwidth Application Platform](http://bandwidth.com/products/application-platform?utm_medium=social&utm_source=github&utm_campaign=dtolb&utm_content=_)

The current version is v3.0, released 1 February, 2017. Version 2.15 is available  [here](https://github.com/bandwidthcom/csharp-bandwidth/tree/v2.15).


[![Build on .Net 4.5 (Windows)](https://ci.appveyor.com/api/projects/status/bhv8hs3fx9k6c33i?svg=true)](https://ci.appveyor.com/project/Bandwidth/csharp-bandwidth)
[![Build on .Net Core (Linux)](https://travis-ci.org/Bandwidth/csharp-bandwidth.svg)](https://travis-ci.org/Bandwidth/csharp-bandwidth)
[![Coverage Status](https://coveralls.io/repos/github/Bandwidth/csharp-bandwidth/badge.svg)](https://coveralls.io/github/Bandwidth/csharp-bandwidth)


## Installing the SDK

`Bandwidth.Net` is available on Nuget (Nuget 3.0+ is required):

    Install-Package Bandwidth.Net -Pre

## Supported Versions
`Bandwidth.Net` should work on all levels of .Net Framework 4.5+.

| Version | Support Level |
|---------|---------------|
| <4.5 | Unsupported |
| 4.5 | Supported |
| netstandard1.6 (.net 4.6+, .net core 1.0+, etc)  | Supported |
| netstandard2.0 (.net core 2.0+, etc)  | Supported |

## Client initialization

All interaction with the API is done through a class `Client`. The `Client` constructor takes an next options:

| Argument  | Description           | Default value                       | Required |
|-------------|-----------------------|-------------------------------------|----------|
| `userId`    | Your user ID | none                         | Yes      |
| `apiToken`  | Your API token        | none                         | Yes      |
| `apiSecret` | Your API secret       | none                         | Yes      |
| `baseUrl`   | The Bandwidth API URL  | `https://api.catapult.inetwork.com` | No       |

To initialize the `Client` instance, provide your API credentials which can be found on your account page in [the portal](https://catapult.inetwork.com/pages/catapult.jsf).

```csharp
using Bandwidth.Net;

var client = new Client(
    "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    "YOUR_API_TOKEN",
    "YOUR_API_SECRET"
);
```

Your `client` object is now ready to use the API.

### Lazy evalutions

This library uses lazy evalutions in next cases:

- Object creation,

- Get list of objects

#### Object Creation

When you create a bridge, call, message, etc. you will receive instance of `ILazyInstance<>` as result. It allow you to get `Id` of created object and created object on demand via property `Instance`.

```csharp
var application = await client.Application.CreateAsync(new CreateApplicationData {Name = "MyFirstApp"});

Console.WriteLine(application.Id); //will return Id of created application

Console.WriteLine(application.Instance.Name); //will make request to Catapult API to get application data

Console.WriteLine(application.Instance.Name); //will use cached application's data

```

#### Get list of objects

Executing of methods which returns collections of objects will not execute Catapult API request immediately. THis request will be executed only when you try enumerate items of the collection.

```csharp
var calls = client.Call.List(); // will not execute any requests to Catapult API here

foreach(var call in calls) // a request to Catapult API will be executed here
{
    Console.WriteLine(call.From);
}

// or

var list = calls.ToList(); // a request to Catapult API will be executed here

```

####


### Examples

Send a SMS

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+12345678901", // This must be a Bandwidth number on your account
    To   = "+12345678902",
    Text = "Hello world."
});
Console.WriteLine($"Message Id is {message.Id}");
```

Make a call

```csharp
var call = await client.Call.CreateAsync(new CreateCallData {
    From = "+12345678901", // This must be a Bandwidth number on your account
    To   = "+12345678902"
});
Console.WriteLine($"Call Id is {call.Id}");
```

Extracting callback event data from string

```csharp
var callbackEvent = CallbackEvent.CreateFromJson("{\"eventType\": \"sms\"}");
```

Extracting callback event data from http content (useful for ASP.Net and other web applications)

```csharp
// In ASP.Net action
var callbackEvent = await Request.Content.ReadAsCallbackEventAsync();

// anywhere
var callbackEvent = await content.ReadAsCallbackEventAsync(); // content is instance of HttpContent

```

Using BXMLv2

```csharp
using Bandwidth.Net.XmlV2.Verbs;
using Bandwidth.Net.Xml;

var response = new Response(new SpeakSentence{
	Gender = "female",
	Locale = "en_UK",
	Sentence = "Hello",
	Voice = "kate"
});

var xml = response.ToXml(); // will build string <?xml version="1.0" encoding="utf-8"?><Response><SpeakSentence gender="female" locale="en_UK" voice="kate">Hello</SpeakSentence></Response>
```

## Providing feedback

For current discussions on 3.0 please see the [3.0 issues section on GitHub](https://github.com/Bandwidth/csharp-bandwidth/labels/3.0). To start a new topic on 3.0, please open an issue and use the `3.0` tag. Your feedback is greatly appreciated!
