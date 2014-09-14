// Thanks to GVSU https://github.com/gvsulib/Summon-2.0-Scripts) and others for sharing your summon hacks

$(document).ready(function() {
    var cssPath = '//www.library.uq.edu.au/summonhacks/',
        libDetailPageId, newHref, libCurrentURL, record, recordParts, thisID = window.location.hash.substring(1);
    try {
      // Add custom styles
      $('head').append( '<link rel="stylesheet" type="text/css" href="' + cssPath + 'summon2mods.css" />');
      // Accessibility added for advanced search titles
      $('div.searchBox div.queryBox span.caret').parent().attr('title', 'Advanced Search');
      $('div.search div.queryBox span.caret').parent().attr('title', 'Advanced Search');
      // Adds a title to the logo img
      $( ".customHeader .Logo img" ).attr( "title", "UQ Library Homepage" );
    } catch (e) {}
});