# ui-rs-loader

`ui-rs-loader` is the Red Sift loader as a component for your application. It is provided as a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) for easy integration into your projects.

> If your browser does *NOT* support *custom elements* natively (see [caniuse](http://caniuse.com/#feat=custom-elements)) you have to install the [web components shim](http://webcomponents.org/) and include it in your project before including this component!

The component is part of the [RedsiftUI](https://github.com/redsift/redsift-ui) library.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/ui-rs-loader.svg?style=svg)](https://circleci.com/gh/Redsift/ui-rs-loader)

A UMD build is available from //static.redsift.io/reusable/ui-rs-loader/latest/ui-rs-loader.umd-es2015.min.js.

To build locally checkout this repository and

```bash
> cd ui-rs-loader
> npm install
> npm run build
```

This will create a `./dist` folder with the Javascript and CSS files.

## Browser Usage

First include the CSS file in the `<head>` of your page:

```html
<link rel="stylesheet" href="//static.redsift.io/reusable/ui-rs-loader/latest/css/ui-rs-loader.min.css">
```

Then include the Javascript at the bottom of the `<body>`:

```html
<script src="//static.redsift.io/reusable/ui-rs-loader/latest/js/ui-rs-loader.umd-es2015.min.js"></script>
```

Including the Javascript already registers the custom element `rs-loader` with the browser.

Use the following HTML code to embed the `rs-loader` element:

```html
<rs-loader animate></rs-loader>
```

The `animate` attribute starts and stops the animation, but probably you will hide the loader with the `display:none` property when not in use.

`rs-loader` contains an SVG inside with the `loader-opts` CSS class, whose attributes can be overriden with normal CSS. An example of changing the `width` is here:

```css
rs-loader > .loader-opts {
  width: 100px;
}
```

# Development Setup

For development run

```bash
> npm run serve
```

within the repository folder. It will start a web server serving the content of `./samples` and supports live-reloading when a source file is changed.
