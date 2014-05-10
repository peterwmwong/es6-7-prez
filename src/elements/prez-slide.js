Polymer('prez-slide',{
  // Prevent keystrokes the code editor from bubbling out.
  // These keystrokes could accidentally trigger a slide change.
  // TODO(pwong): Is there a better way?
  onKeyup(e){
    if(e.target.tagName === 'ACE-ELEMENT'){
      e.preventDefault();
      e.stopPropagation();
    }
  }
});
