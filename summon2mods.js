// Thanks to GVSU https://github.com/gvsulib/Summon-2.0-Scripts) and others for sharing your summon hacks

$(document).ready(function() {

  //Dev
//  var cssPath = '//bypass.hazchem.library.uq.edu.au/summonhacks/summonhacks/',libDetailPageId, newHref, libCurrentURL, record, recordParts, thisID,libCurrentURL = window.location.hash.substring(1);
  //Staging
  var cssPath = '//www.library.uq.edu.au/summonhacks/',libDetailPageId, newHref, libCurrentURL, record, recordParts, thisID,libCurrentURL = window.location.hash.substring(1);
  // Add custom styles
  $('head').append('<link rel="stylesheet" type="text/css" href="' + cssPath + 'summon2mods.css" />');

  // Accessibility added for advanced search titles
  $('div.searchBox div.queryBox span.caret').parent().attr('title','advanced search');
  $('div.search div.queryBox span.caret').parent().attr('title','advanced search');

  //Add text to the advanced search button to clearly indicate what it is
  $('div.buttons span.caret').parent().prepend('Advanced');

  //Add the filter group class to the clearRefinements section to give it a divider
  $('div.ng-binding.clearRefinements').addClass('FilterGroup');

});
