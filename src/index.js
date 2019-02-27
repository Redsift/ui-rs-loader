import registerLoaderElement from './js/loader-element.js';
import RedsiftLoader from './js/loader.js';

import './index.import.styl';

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.7/webcomponents-loader.js');

(function() {
  window.addEventListener('WebComponentsReady', function(e) {
    // register the element per default:
    registerLoaderElement();
  });
})();

export {
  registerLoaderElement,
  RedsiftLoader
}
