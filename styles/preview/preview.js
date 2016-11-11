$(document).ready(function() {

  var $page = $('.js-page');
  var $grid = $('.js-grid');
  var $icons = $('.js-icon');
  var $searchInput = $('.js-search-input');
  var $sectionTabs = $('.js-section-tabs');
  var $sizeTabs = $('.js-size-tabs');
  var $togglePreviewChars = $('.js-toggle-preview-chars');
  var $popupWrapper = $('.js-popup-wrapper');
  var $popup = $('.js-popup');
  var $dimmer = $('.js-dimmer');
  var $popupClose = $('.js-popup-close');

  $('.js-tabs').each(function () { initTabs(this); });
  $searchInput.on('keyup', onSearch);
  $sizeTabs.on('tabClick', onSizeTabClick);
  $sectionTabs.on('tabClick', onSectionTabClick);
  $togglePreviewChars.on('click', onTogglePreviewCharsClick);
  $grid.on('click', '.js-icon', onIconClick);
  $popupClose.on('click', onPopupClose);
  $dimmer.on('click', onPopupClose);
  $page.on('click', '.js-usage-example-link', onUsageExampleClick);

  function onSearch(e) {
    var term = e.target.value.trim();

    if (!term.length) {
      $icons.show();
      return;
    }

    var nameRegex = new RegExp(term, 'i');

    $icons
      .hide()
      .filter(function () { return nameRegex.test(this.getAttribute('data-name')) })
      .show()
    ;
  }

  function initTabs(el) {
    var $tabs = $(el);
    var $tab;
    $tabs.on('click', function (e) {
      if (e.target.parentElement !== el || $tabs.hasClass('m-inactive')) return;
      $tab = $(e.target);
      $tab.addClass('m-active').siblings('.m-active').removeClass('m-active');
      $tabs.trigger('tabClick', $tab.data('value'));
    });
  }

  function onSizeTabClick(e, size) {
    $grid.attr('data-size', size);
  }

  function onSectionTabClick(e, mode) {
    $sizeTabs.toggleClass('m-inactive', mode !== 'grid');
    $grid.attr('data-mode', mode);
  }

  function onTogglePreviewCharsClick() {
    $togglePreviewChars.toggleClass('m-active');
    $page.toggleClass('m-preview-characters');
  }

  function onIconClick(e) {
    var $icon = $(e.currentTarget);
    var gridMode = $icon.parents('.js-grid').data('mode');
    if ('grid' == gridMode || 'cheatsheet' == gridMode)
      openPopup($icon[0].outerHTML);
  }

  function openPopup(html) {
    $popupWrapper.addClass('m-active');
    setTimeout(function () { $popup.html(html); });
  }

  function onPopupClose() {
    $popupWrapper.removeClass('m-active');
    $popup.html('');
  }

  function onUsageExampleClick(e) {
    var example = $(e.currentTarget).data('example');
    openPopup($('.js-usage-example[data-example="' + example + '"]').html());
  }
});
