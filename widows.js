/**
 * Widows.js
 * Remove widows from blocks of text
 * Regexp help from http://justinhileman.info/article/a-jquery-widont-snippet
 */

var Widows = {
  remove: function(selector) {
    var reg = /\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/,
        replace = '&nbsp;$1',
        elements = document.querySelectorAll(selector),
        length = elements.length;

    for (var i = 0; i < length; ++i) {
      elements[i].innerHTML = elements[i].innerHTML.replace( reg, replace );
    }

  }
};
