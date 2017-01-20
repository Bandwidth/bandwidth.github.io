module.exports = function ($) {
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	$('ul.summary a:contains(reference), ul.summary a:contains(FAQ)').append('&nbsp;<i class="icons8-open-in-window" style="float:right;"></i>');

	$('a').has('button, span').css('border-bottom','0px');

	$('.markdown-section').has('.api-method-code').css('padding-top','0px');

	$('.page-inner').has('iframe').contents().find('div, section').css({'height':'100vh','padding':'0px'});

	return $.html();
}
