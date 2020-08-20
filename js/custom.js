module.exports = function ($) {

	function fixHTTPMethodStyling () {
		$('li.chapter').each(function (i, elem) {
			var li = $(elem);
			if (li.text().indexOf('GET') > 0) {
				var newTxt = li.children().first().html().replace("GET", "<code class=\"get\">GET </code>");
				li.children().first().html(newTxt);
			}
			else if (li.text().indexOf('POST') > 0) {
				var newTxt = li.children().first().html().replace("POST", "<code class=\"post\">POST</code>");
				li.children().first().html(newTxt);
			}
			else if (li.text().indexOf('DELETE') > 0) {
				var newTxt = li.children().first().html().replace("DELETE", "<code class=\"delete\">DEL </code>");
				li.children().first().html(newTxt);
			}
			else if (li.text().indexOf('PUT') > 0) {
				var newTxt = li.children().first().html().replace("PUT", "<code class=\"put\">PUT </code>");
				li.children().first().html(newTxt);
			}
			else if (li.text().indexOf('PATCH') > 0) {
				var newTxt = li.children().first().html().replace("PATCH", "<code class=\"patch\">PAT </code>");
				li.children().first().html(newTxt);
			}
		});
	}

	function addTopToSummaryPages () {

		var helperPages = [
			'onDemandNumberSearchAndOrder.html',
			'numberOrderingSummary.html',
			'disconnectSummary.html',
			'managingLineFeatures.html',
			'managingOrders.html',
			'reporting.html',
			'portingPhoneNumbers.html',
			'ratelimits.html',
			'codes.html',
			"errors.html",
			"httpErrors.html",
			"portoutValidation.html",
			"messaging.html",
			"accountCredentials.html",
			"hostedMessaging.html",
			"programmaticApplicationSetup.html",
			"csrLookup.html",
			"searchForNumbers.html",
			"configEmergencyNotifications.html",
			"emergencyNotifications.html"
		];

		$('li.chapter a').each(function(i, elem) {
			var a = $(elem);
			var link = a.attr("href");
			helperPages.forEach(page => {
				if(link.endsWith(page)) {
					a.attr("href", link+'#top');
				}
			});
		});
	}

	function hidePagesFromNav () {
		var redirects = [
			'International Overview',
            'PHP V3',
            'PHP V4'
		];

		redirects.forEach(page => {
			const selector = `li.chapter a:contains('${page}')`;
			//for international, allow the page itself to have a link
			if ($('head > title').text() === page) {
				//console.log('Skipping hide nav for international page');
			}
			else {
				$(selector).remove();
			}
		});
	}

	function addExternalIconForNewTabLinks () {
		// Add external link icon to all links in summary
		$('ul.summary a[target=_blank]').each(function () {
			var href = $(this); // retrive href foreach a
			$(this).append('&nbsp;<i class="icons8-open-in-window"></i>');
		});
	}

	function removeGitbookBranding () {
		// Remove gitbook branding from summary
		$('.gitbook-link').remove()
		var title = $('title').text();

		// Remove gitbook branding from title
		if(title.indexOf(' · GitBook')  > 0) {
			var newTitle = title.replace(' · GitBook', '');
			$('title').text(newTitle);
		}
	}

    function addSeo() {
        /*
         * This function is to add our SEO tags to the docsite. Unfortunately this was not as
         * straight forward as we hoped. The raw tags in the markdown files don't add the meta
         * tags to the head tag, but you can use the raw tags to add unused section tags, and
         * then use the section tag identifier to add the seo tag to the head in this script.
         *
         * For some reason looping did not work. If someone knows how to get looping to work
         * that would be great.
         */

        $('meta[name="description"]').remove();

        $('section.homePage').each(function(i, elem) {
            $('head').append('<meta name="description" content="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth.">');
            $('title').remove();
            $('head').append('<title>Bandwidth APIs - Developer Docs & API Reference</title>');
        });

        $('section.getStarted').each(function(i, elem) {
            $('head').append('<meta name="description" content="Get started with Bandwidth APIs. Setup account credentials, understand the basics, and jump into overviews of the Voice, Messaging, and Phone Numbers APIs.">');
            $('title').remove();
            $('head').append('<title>Bandwidth APIs - Getting Started Guide</title>');
        });

        $('section.accountCredentials').each(function(i, elem) {
            $('head').append('<meta name="description" content="Understand the different credentials for interacting with Bandwidth\'s APIs, and how to authenticate on each API.">');
            $('title').remove();
            $('head').append('<title>Bandwidth API Credentials and Security</title>');
        });

        $('section.callbacksOverview').each(function(i, elem) {
            $('head').append('<meta name="description" content="Bandwidth\'s APIs operate on a system of callbacks. Most API requests send callbacks, and notices of incoming events (phone call, text message) are sent via callbacks as well.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Callbacks Overview</title>');
        });

        $('section.sdksAbout').each(function(i, elem) {
            $('head').append('<meta name="description" content="Access Bandwidth SDKs for Node.JS, C#, Ruby, Python, PHP, and Java, plus example applications and demos.">');
            $('title').remove();
            $('head').append('<title>Bandwidth SDKs & Developer Tools</title>');
        });

        $('section.accountManagementGuides').each(function(i, elem) {
            $('head').append('<meta name="description" content="Learn how to configure your account with Bandwidth\'s account management APIs. Setup subaccounts, locations and applications via API.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Account Management Guides</title>');
        });

        $('section.applicationsConfigurationGuide').each(function(i, elem) {
            $('head').append('<meta name="description" content="Learn how to configure an Application for Bandwidth\'s Voice API and Messaging AP to send and receive messages and phone calls.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Applications Configuration Guide</title>');
        });

        $('section.subscriptionsConfigurationGuide').each(function(i, elem) {
            $('head').append('<meta name="description" content="Learn how to configure a Subscription to get started with Bandwidth\'s Number Ordering and Porting APIs.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Subscriptions Configuration Guide</title>');
        });

        $('section.messagingAbout').each(function(i, elem) {
            $('head').append('<meta name="description" content="Get everything you need to send and receive SMS, MMS, and group messages with Bandwidth. API Reference, SDKs, guides, examples and more.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Messaging API</title>');
        });

        $('section.voiceAbout').each(function(i, elem) {
            $('head').append('<meta name="description" content="Get everything you need to send and receive phone calls with Bandwidth. API Reference, SDKs, guides, examples and more.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Voice API</title>');
        });

        $('section.emergencyServicesAbout').each(function(i, elem) {
            $('head').append('<meta name="description" content="Learn about how to configure Emergency Notifications with the Bandwidth Emergency Services API.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Emergency Services API</title>');
        });

        $('section.numbersAbout').each(function(i, elem) {
            $('head').append('<meta name="description" content="Get everything you need to manage, order, and port phone numbers with Bandwidth. API Reference, SDKs, guides, examples and more.">');
            $('title').remove();
            $('head').append('<title>Bandwidth Phone Numbers API</title>');
        });
    }

	fixHTTPMethodStyling();
	addTopToSummaryPages();
	addExternalIconForNewTabLinks();
	removeGitbookBranding();
	hidePagesFromNav();
    addSeo();

	return $.html();
}
