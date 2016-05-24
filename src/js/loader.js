import loaderTmpl from '../templates/loader.tmpl';

class RedsiftLoader {
  constructor(el){
    this.transitionEvent = whichTransitionEvent();
    this.animating = false;
    // hardcoding this for now
    this.svgId = '#loading-indicator';

    this._setupElement(el, loaderTmpl);
  }
  startAnimation() {
    this.animating = true;
    this._animate(document.querySelector(this.svgId));
  }
  
  stopAnimation() {
    this.animating = false;
  }

  //----------------------------------------------------------
  // Private API:
  //----------------------------------------------------------
  
  _setupElement(el, loaderTmpl) {
    el.innerHTML = loaderTmpl;
  }

  _whichTransitionEvent() {
    let t;
    let el = document.createElement('fakeelement');
    let animations = {
      'animation': 'animationend',
      'OAnimation': 'oAnimationEnd',
      'MozAnimation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd'
    }

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  _animate(parent, cls) {
    if (!transitionEvent || this.animating) return;
    cls = cls || 'fade-';
    let ids = ['loading-t-l', 'loading-t-r', 'loading-b-r', 'loading-b-l'];
    let $segments = parent.getElementsByTagName('path');
    [].slice.call($segments).forEach(function(e, i){
      e.setAttribute('class', [cls + i, ids[i]].join(' '));
      if (i !== $segments.length - 1) return;
      (function(element, cls) {
        element.addEventListener(transitionEvent, function() {
          element.removeEventListener(transitionEvent, arguments.callee);
          _animate(parent, cls === 'build-' ? 'fade-' : 'build-');
        });
      })(e, cls);
    })
  }
}

export default RedsiftLoader;
