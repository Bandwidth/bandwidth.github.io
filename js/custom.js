module.exports = function ($) {
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	$('ul.summary a:contains(FAQ),ul.summary a:contains(GitHub),ul.summary a:contains(Support)').append('&nbsp;<i class="icons8-open-in-window"></i>');
	$('a').has('button, span').css('border-bottom','0px')
	$('.markdown-section').has('.api-method-code').css('padding-top','0px');
	$('.page-inner').has('iframe').contents().find('div, section').css({'height':'100vh','padding':'0px'});
	$('ul.summary a:contains(Full API Reference),ul.summary a:contains(BXML Reference),ul.summary a:contains(Messaging 2.0 Reference) ').removeAttr('target');
	$('.footerListItem a').removeAttr('target');
	return $.html();
}
