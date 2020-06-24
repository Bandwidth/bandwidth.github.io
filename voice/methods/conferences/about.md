# Conferences
The Conferences resource lets you retrieve information and modify conferences.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://voice.bandwidth.com/api/v2/accounts/{accountId}/conferences`

### Capabilities

| HTTP Method                      | Path                                                                                             | Description                                           |
|:---------------------------------|:-------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| <code class="post">POST</code>   |[`/conferences/{conferenceId}`](postConferencesConferenceId.md)                                   | Update an active conference.                          |
| <code class="put">PUT</code>     |[`/conferences/{conferenceId}/members/{memberId}`](putConferencesConferenceIdMembersMemberId.md)  | Updates settings for a particular conference member   |
