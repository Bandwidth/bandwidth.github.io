require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function(e) {
      if (gitbook.state.config.pluginsConfig.gtm.virtualPageViews) {
        var dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event':'virtualPageView',
          'page':{
            'title': gitbook.state.page.title,
            'url': window.location.pathname,
          }
        });
      }
    });
});
