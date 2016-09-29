import RedsiftLoader from './loader.js';

class RedsiftLoaderWebComponent extends HTMLElement {

  //----------------------------------------------------------------------------
  // Lifecycle:
  //----------------------------------------------------------------------------

  createdCallback() {
    this.rsLoader = new RedsiftLoader(this,{
      hasAnimate: this.hasAnimate
    });
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName !== 'animate') return;

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

export default () => {
  try {
    document.registerElement('rs-loader', RedsiftLoaderWebComponent);
  } catch (e) {
    console.log('[redsift-ui] Element already exists: ', e);
  }
}
