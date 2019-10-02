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
			'advancedOrdering.html',
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
			"messaging.html"
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

	function makeSummaryLinksUnClickable () {
		var sdkPages = [
			'java',
			'node',
			'php'
		];

		sdkPages.forEach(page => {
			//Removes the ability to click the chapter
			$(`li.chapter a[href*="${page}.html"]`).replaceWith(function(){ return $(this).text() });
			//Fix the CSS
			$(`li[data-path*="${page}.html"]`).css({padding: '1px 15px'});
		});
	}

	function hideForcedRedirects () {
		var redirects = [
			'tmp_messaging',
			'tmp_howto',
			'tmp_numbers',
			'tmp_numbers2',
			'tmp_applications'
		];

		redirects.forEach(page => {
			const selector = `li.chapter a:contains('${page}')`;
			$(selector).remove();
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

	fixHTTPMethodStyling();
	addTopToSummaryPages();
	makeSummaryLinksUnClickable();
	addExternalIconForNewTabLinks();
	removeGitbookBranding();
	hideForcedRedirects();


	return $.html();
}
