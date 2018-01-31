require(["gitbook", "jQuery"], function(gitbook, $) {

  function expand(chapter) {
    chapter.show();
    if (chapter.parent().attr('class') != 'summary'
        && chapter.parent().attr('class') != 'book-summary'
      && chapter.length != 0
       ) {
         expand(chapter.parent());
       }
  }

  gitbook.events.bind("page.change", function() {
    $chapter = $('li.chapter.active');
    $children = $chapter.children('ul.articles');
    $parent = $chapter.parent();
    $siblings = $chapter.siblings().children('ul.articles');
    $('li.chapter').children('ul.articles').hide();
    $('li.chapter').hover(function(){
      $(this).children('.expand').css('visibility','visible')
    }, function(){
      $(this).children('.expand').css('visibility','');
    });
    $('.expand').click(function(){
      $(this).toggleClass('fa-eye-slash');
      if ($(this).hasClass('fa-eye-slash')){
        $(this).next('.articles').show();
      } else {
        $(this).next('.articles').hide();
      };
    });
    expand($chapter);
    $('li.chapter.active').children('.expand').addClass('fa-eye-slash');

    if ($children.length > 0) {
      $children.show();
    }
  });

});