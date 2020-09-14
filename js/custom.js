module.exports = function ($) {
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}

	$('ul.summary a:contains(FAQ),ul.summary a:contains(GitHub),ul.summary a:contains(Support),ul.summary a:contains(Pricing)').append('&nbsp;<i class="icons8-open-in-window"></i>');
	$('ul.summary a:contains(About)').addClass('hide');
	$('a').has('button, span').css('border-bottom','0px')
	$('.markdown-section').has('.api-method-code').css('padding-top','0px');
	$('.page-inner').has('iframe').contents().find('div, section').css({'height':'100vh','padding':'0px'});
	$('ul.summary a:contains(Voice & Messaging API Reference),ul.summary a:contains(BXML Reference),ul.summary a:contains(Messaging v2 Reference),ul.summary a:contains(Phone Numbers Reference) ').removeAttr('target');
	$('.footerListItem a, a[href*="docs/phone-numbers"]').removeAttr('target');
  var helperPages = [
    'callScreen.html'
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

	return $.html();
}
