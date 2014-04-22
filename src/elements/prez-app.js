Polymer('prez-app',{

  slide: 0,

  ready() {
    window.addEventListener('hashchange',()=>this.windowHashHandler());
    window.addEventListener('keyup',e=>this.windowKeyUpHandler(e));
    this.windowHashHandler();
  },

  get numSlides() {
    return this.shadowRoot.querySelectorAll('prez-slide').length;
  },

  slideChanged() {
    if(this.slide) {
      // Deactivate current slide
      var activeSlide = this.shadowRoot.querySelector('prez-slide.s-active');
      if(activeSlide) activeSlide.classList.remove('s-active');

      // Activate new slide
      var slideEls = this.shadowRoot.querySelectorAll('prez-slide');
      activeSlide = slideEls[this.slide - 1];
      if(activeSlide) activeSlide.classList.add('s-active');
    }
  },

  setSlide(newSlide){
    this.slide = Math.min(this.numSlides, Math.max(0, newSlide));
    window.location.hash = `#${ this.slide }`;
  },

  windowKeyUpHandler({which}) {
    if(which === 39)      this.setSlide(this.slide+1);
    else if(which === 37) this.setSlide(this.slide-1);
  },

  windowHashHandler() {
    this.setSlide(+window.location.hash.split('#')[1] || 1);
  }
});
