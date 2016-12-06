module.exports = function ($) {
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}
	return $.html();
}
