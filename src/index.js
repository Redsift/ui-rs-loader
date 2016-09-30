import registerLoaderElement from './js/loader-element.js';
import RedsiftLoader from './js/loader.js';

(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
    // register the element per default:
    registerLoaderElement();
  } else {
    // polyfill the platform!
    var e = document.createElement('script');
    e.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.js';
    document.body.appendChild(e);

    window.addEventListener('WebComponentsReady', function(e) {
      // register the element per default:
      registerLoaderElement();
    });
  }
})();

export {
  registerLoaderElement,
  RedsiftLoader
}
