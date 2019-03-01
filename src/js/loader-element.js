import RedsiftLoader from './loader.js';

export default () => {
  try {

    class RedsiftLoaderWebComponent extends HTMLElement {
      constructor() {
        super();
      }
    
      static get observedAttributes() {
        return ['animate'];
      }
    
      //----------------------------------------------------------------------------
      // Lifecycle:
      //----------------------------------------------------------------------------
    
      connectedCallback() {
        this.rsLoader = new RedsiftLoader(this,{
          hasAnimate: this.hasAnimate
        });
      }
    
    
      attributeChangedCallback(attributeName, oldValue, newValue) {
        if (attributeName !== 'animate' || !this.rsLoader) return;
    
        if (this.hasAnimate) {
          this.rsLoader.start();
        } else {
          this.rsLoader.stop();
        }
      }
    
      get hasAnimate() {
        let a = this.getAttribute('animate');
        return a == '' || a;
      }
    }

    customElements.define('rs-loader', RedsiftLoaderWebComponent);
  } catch (e) {
    console.log('[redsift-ui] Element already exists: ', e);
  }
}
