'use strict';

(function () {
  // Thanks to GVSU https://github.com/gvsulib/Summon-2.0-Scripts) and others for sharing your summon hacks
  if (typeof jQuery === 'undefined') {
    return;
  }
  $(function () {
    try {
      var base = 'https://d3nm82zk9ronst.cloudfront.net/summonhacks';
      // Add custom styles
      $('head').append('<link rel="stylesheet" type="text/css" href="' + base + '/summon2mods.css" />');
    } catch (e) {}
  });
})();

$(document).ready(function() {
  setTimeout(function() {
    $('#results').prepend(
      '<div style="margin: 1em 5% 0 5%;  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);padding: 4px 16px; background-color: #F5F5F5; border-radius: 2px;">' +
      '<p style="font-size: 16px; font-weight: bold; color: black; text-align: left;">' +

      'We are experiencing problems with some links to full text. If your search is affected ' +
      '<a href="https://www.library.uq.edu.au/blog/2015/06/10/problems-links-to-full-text-uq-library-search">' +
      'please see more information and workarounds' +
      '</a>' +
      '</p>' +
      '</div>'
    );
  }, 4000);
});