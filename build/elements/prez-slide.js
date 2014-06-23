System.register([], function($__0) {
  "use strict";
  return {
    exports: {},
    execute: function() {
      Polymer('prez-slide', {onKeyup: function(e) {
          if (e.target.tagName === 'ACE-ELEMENT') {
            e.preventDefault();
            e.stopPropagation();
          }
        }});
    }
  };
});
