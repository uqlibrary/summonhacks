// Thanks to GVSU https://github.com/gvsulib/Summon-2.0-Scripts) and others for sharing your summon hacks

$(document).ready(function() {

    //Dev
    //  var cssPath = '//bypass.hazchem.library.uq.edu.au/summonhacks/summonhacks/',libDetailPageId, newHref, libCurrentURL, record, recordParts, thisID,libCurrentURL = window.location.hash.substring(1);
    //Staging
    var cssPath = '//www.library.uq.edu.au/summonhacks/',
        libDetailPageId, newHref, libCurrentURL, record, recordParts, thisID = window.location.hash.substring(1);
    // Add custom styles
    $('head').append('<link rel="stylesheet" type="text/css" href="' + cssPath + 'summon2mods.css" />');

    // Accessibility added for advanced search titles
    $('div.searchBox div.queryBox span.caret').parent().attr('title', 'Advanced Search');
    $('div.search div.queryBox span.caret').parent().attr('title', 'Advanced Search');

    // Adds higher resolution logo image:
    // for mobile
    document.getElementsByClassName("col Logo ng-isolate-scope")[0].getElementsByTagName('img')[0].src = 'https://www.library.uq.edu.au/summonhacks/LibraryWhite.png';
    // for tablets and larger
    document.getElementsByClassName("col hidden-phone Logo ng-isolate-scope")[0].getElementsByTagName('img')[0].src = 'https://www.library.uq.edu.au/summonhacks/LibraryWhite.png';
});