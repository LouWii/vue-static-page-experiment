# vue-static-page-experiment

**What is this about?** I wanted to try and use Vue to replace the old jquery way of doing things, where you have your HTML page generated, and jquery plugs into some part of the HTML to do its thing (you know, stuff like `$(".expander").expander()`).

I wanted to see if this is even worth it, how light/heavy it is, etc.

## Production build

### Async

The production build generates 5 js files.

* async.xxxxx.js - 3.77 KiB (1.70 KiB gzipped)
* chunk-vendors.xxxxx.js - 111.56 KiB (40.55 KiB gzipped)
* chunk.xxxxx.js - Vue Component (Counter) - 1.67 KiB (0.83 KiB gzipped)
* chunk.xxxxx.js - Vue Component (Expander) - 1.50 KiB (0.79 KiB gzipped)
* chunk.xxxxx.js - Vue Component (Modal) - 28.53 KiB (8.58 KiB gzipped) - Bigger because it contains a third party library for modals (vue-js-modal), imported directly in the component code, so not included in chunk-vendor

The nice part: we only need to include `async.js` and `vendors.js` in the HTML, the components are loaded asynchronously by the browser when Vue asks for them. Bad news, it seems that Vue will load components even if they aren't in the template (need to verify that).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
