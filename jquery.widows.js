/**
 * Widows.js
 * Remove widows from blocks of text
 * Regexp help from http://justinhileman.info/article/a-jquery-widont-snippet
 */

// Plugin template - http://jqueryboilerplate.com
;(function ( $, window, document, undefined ) {

  var pluginName = "widows",
      defaults = {};

  function Plugin( element, options ) {
    this.element = element;
    this.$element = $(this.element);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var reg = /\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/,
          replace = '&nbsp;$1';

      this.$element.html( this.$element.html().replace( reg, replace ));
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
