'use strict';

(function () {
  // Thanks to GVSU https://github.com/gvsulib/Summon-2.0-Scripts) and others for sharing your summon hacks
  if (typeof jQuery === 'undefined') {
    return;
  }
  $(function () {
    try {
      // Add custom styles
      $('head').append('<link rel="stylesheet" type="text/css" href="//d3nm82zk9ronst.cloudfront.net/summonhacks/summon2mods.css" />');
      // Accessibility added for advanced search titles
      $('div.searchBox div.queryBox span.caret').parent().attr('title', 'Advanced Search');
      $('div.search div.queryBox span.caret').parent().attr('title', 'Advanced Search');
      // Adds a title to the logo img
      $('.customHeader .Logo img').attr('title', 'UQ Library Homepage');
    } catch (e) {}
  });
})();
