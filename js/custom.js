module.exports = function ($) {
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
		"errors.html"
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

	var sdkPages = [
		'csharp',
		'java',
		'node',
		'php'
	];

	sdkPages.forEach(page => {
		$(`li.chapter a[href*="${page}.html"]`).replaceWith(function(){ return $(this).text() });
		$(`li[data-path*="sdks/${page}.html"]`).css({padding: '1px 15px'});
	});

	// Add external link icon to all links in summary
	$('ul.summary a[target=_blank]').each(function () {
		var href = $(this); // retrive href foreach a
		$(this).append('&nbsp;<i class="icons8-open-in-window"></i>');
	});

	// Remove gitbook branding
	$('.gitbook-link').remove()
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	return $.html();
}
