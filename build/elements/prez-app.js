System.register([], function($__0) {
  "use strict";
  return {
    exports: {},
    execute: function() {
      Polymer('prez-app', {
        slide: 0,
        ready: function() {
          var $__1 = this;
          window.addEventListener('hashchange', (function() {
            return $__1.windowHashHandler();
          }));
          window.addEventListener('keyup', (function(e) {
            return $__1.windowKeyUpHandler(e);
          }));
          this.windowHashHandler();
        },
        get numSlides() {
          return this.shadowRoot.querySelectorAll('prez-slide').length;
        },
        slideChanged: function() {
          if (this.slide) {
            var activeSlide = this.shadowRoot.querySelector('prez-slide.s-active');
            if (activeSlide)
              activeSlide.classList.remove('s-active');
            var slideEls = this.shadowRoot.querySelectorAll('prez-slide');
            activeSlide = slideEls[this.slide - 1];
            if (activeSlide)
              activeSlide.classList.add('s-active');
          }
        },
        setSlide: function(newSlide) {
          this.slide = Math.min(this.numSlides, Math.max(0, newSlide));
          window.location.hash = ("#" + this.slide);
        },
        windowKeyUpHandler: function($__2) {
          var which = $__2.which;
          if (which === 39)
            this.setSlide(this.slide + 1);
          else if (which === 37)
            this.setSlide(this.slide - 1);
        },
        windowHashHandler: function() {
          this.setSlide(+window.location.hash.split('#')[1] || 1);
        }
      });
    }
  };
});
