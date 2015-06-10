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

      $('#results').prepend(
        '<div style="margin: 1em 5% 0 5%;">' +
        '<p style="font-size: 16px; font-weight: bold; color: red; text-align: left;">' +

        'UQ Library Search is currently experiencing a problem where journal articles appear as books and links do not resolve to the full text article. ' +
        'This problem will be resolved by Thursday afternoon (June 11th) as we work with our vendor. We apologise for the inconvenience.' +

        '</p>' +
        '</div>'
      );

    } catch (e) {}
  });
})();