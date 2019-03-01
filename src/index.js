import registerLoaderElement from './js/loader-element.js';
import RedsiftLoader from './js/loader.js';

import './index.import.styl';

function loadScript(src, attributes) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;

    if (attributes && Object.keys(attributes).length > 0) {
      Object.keys(attributes).map((key) => {
        const val = attributes[key];
        script[key] = val;
      });
    }

    document.body.appendChild(script);
  });
}

window.addEventListener('WebComponentsReady', function(e) {
  if (WebComponents.ready) {
    // register the element per default:
    registerLoaderElement();
  }
});

(function() {
  if (
    'customElements' in window
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')
  ) {
    // platform is good!
    // register the element per default:
    registerLoaderElement();
  } else {
    // polyfill the platform!
    loadScript('https://unpkg.com/@webcomponents/webcomponentsjs@2.2.7/webcomponents-bundle.js', {
      crossOrigin: 'anonymous',
      integrity: 'sha384-19Ldyf0gDQpl6Esz/GT9AxSEoT8X0gdFdO5j9TMWLnFf+8oMDaECxVjmokWqh9Wm',
    });
  }
})();

export {
  registerLoaderElement,
  RedsiftLoader
}
