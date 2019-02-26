import registerLoaderElement from './js/loader-element.js';
import RedsiftLoader from './js/loader.js';


function loadScript(src) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.7/custom-elements-es5-adapter.js');
loadScript('https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.7/webcomponents-loader.js');

(function() {

  
  window.addEventListener('WebComponentsReady', function(e) {
    // register the element per default:
    registerLoaderElement();
  });

  
  
  // if (window.WebComponents) {
  //   WebComponents.waitFor(() => {
  //     return loadScript('/js/ui-rs-loader.umd-es2015.js');
  //   });

  //   window.addEventListener('WebComponentsReady', function(e) {
  //     // register the element per default:
  //     registerLoaderElement();
  //   });
  // }
  
  // if (window.WebComponents) {

  // }

  // if ('registerElement' in document
  //     && 'import' in document.createElement('link')
  //     && 'content' in document.createElement('template')) {
  //   // platform is good!
  //   // register the element per default:
  //   registerLoaderElement();
  // } else {
  //   // polyfill the platform!
  //   var e = document.createElement('script');
  //   e.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.js';
  //   document.body.appendChild(e);

  //   window.addEventListener('WebComponentsReady', function(e) {
  //     // register the element per default:
  //     registerLoaderElement();
  //   });
  // }
})();

export {
  registerLoaderElement,
  RedsiftLoader
}

// (function() {
//   class RedsiftLoaderWebComponent extends HTMLElement {
//     constructor() {
//       super();
//     }
  
//     connectedCallback() {
//       this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
//     }
//   }
  
  
//   customElements.define('rs-loader', RedsiftLoaderWebComponent);

//   // window.addEventListener('WebComponentsReady', function(e) {
//   //   console.warn(123);
//   // });
// })();
