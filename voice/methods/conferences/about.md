# Conferences
The Conferences resource lets you retrieve information about conferences and update their settings as well as manage and interact with conference members

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences`

### Capabilities

| HTTP Method                        | Path                                                                                          | Description                                                                  |
|:-----------------------------------|:----------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| <code class="put">GET</code>       | [`/conferences/{conferenceId}`](/conferences/getConference.md)                                | Retrieve conference information                                              |
| <code class="put">GET</code>       | [`/conferences/{conferenceId}/members/{memberId}`](/conferences/getConferenceMember.md)       | Retrieve information about a particular conference member                    |
