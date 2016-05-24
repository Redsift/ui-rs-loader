'use strict'

import RedsiftLoader from './loader.js';

class RedsiftLoaderWebComponent extends HTMLElement {

  //----------------------------------------------------------------------------
  // Lifecycle:
  //----------------------------------------------------------------------------

  createdCallback() {
    this.rsHero = new RedsiftHero(this, {
      hasStickyHeader: this.hasStickyHeader,
      stickyHeaderTrigger: stickyHeaderTrigger,
      header: this.header,
      bgClass: this.bgClass,
      scrollTarget: this.scrollTarget
    });
  }

  // attributeChangedCallback(attributeName, oldValue, newValue) {
  //   if (attributeName === 'scroll-target') {
  //     if (!newValue) {
  //       this.rsHero.enableScrollFeature(false);
  //     }

  //     if (newValue && !oldValue) {
  //       this.rsHero.enableScrollFeature(true, this.scrollTarget);
  //     }
  //   }

  //   if (attributeName === 'sticky-header') {
  //     if (this.hasStickyHeader) {
  //       if (!newValue || newValue == '') {
  //         console.log('[redsift-ui] WARNING: No selector specified with "sticky-header" attribute. No "hero-sticky-header--active" class will be added!');
  //       }
  //       this.rsHero.enableStickyHeader(true, this.stickyHeader);
  //     } else {
  //       this.rsHero.enableStickyHeader(false);
  //     }
  //   }
  // }
}

export default () => {
  try {
    document.registerElement('rs-loader', RedsiftLoaderWebComponent);
  } catch (e) {
    console.log('[redsift-ui] Element already exists: ', e);
  }
}