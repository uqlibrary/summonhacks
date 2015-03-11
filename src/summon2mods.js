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
    window.__wtw_lucky_site_id = 34528;
    var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
    wa.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://cdn') + '.luckyorange.com/w.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
  });
})();