import loaderTmpl from '../templates/loader.tmpl';

class RedsiftLoader {
  constructor(el, opts) {
    this.transitionEvent = this._whichTransitionEvent();
    this.animating = false;

    this._setupElement(el, loaderTmpl, opts);
  }

  start() {
    this.animating = true;
    this._animate(this.svgEl);
  }

  stop() {
    this.animating = false;
  }

  //----------------------------------------------------------
  // Private API:
  //----------------------------------------------------------

  _setupElement(el, loaderTmpl, opts) {
    el.innerHTML = loaderTmpl;

    // hardcoding this for now
    this.segments = document.querySelector('#loading-indicator').getElementsByTagName('path');

    if (opts.hasAnimate) {
      this.animating = true;
    }

    this._animate(null);
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

  _animate(cls) {
    if (!this.transitionEvent || !this.animating) return;
    cls = cls || 'fade-';
    let ids = ['loading-t-l', 'loading-t-r', 'loading-b-r', 'loading-b-l'];

    [].slice.call(this.segments).forEach((e, i) => {
      e.setAttribute('class', [cls + i, ids[i]].join(' '));
      if (i !== this.segments.length - 1) return;

      let animationWrapper = function() {
        e.removeEventListener(this.transitionEvent, animationWrapper);
        this._animate(cls === 'build-' ? 'fade-' : 'build-');
      }.bind(this);

      e.addEventListener(this.transitionEvent, animationWrapper);
    });
  }
}

export default RedsiftLoader;
