# vue-static-page-experiment

**What is this about?** I wanted to try and use Vue to replace the old jquery way of doing things, where you have your HTML page generated, and jquery plugs into some part of the HTML to do its thing (you know, stuff like `$(".expander").expander()`).

I wanted to see if this is even worth it, if it's easy/easier than jQuery, how light/heavy it is, etc.

One of the biggest advantage right out of the box is having the power and features that Vue offers, which I consider way better than what jQuery offers. It's also worth mentionning jQuery is 30kb minified gzipped. You'll see below Vue is barely over.

## Production build

### Async

The async production build generates 5 js files.

* `async.xxxxx.js` - 3.77 KiB (1.70 KiB gzipped)
* `chunk-vendors.xxxxx.js` - 111.56 KiB (40.55 KiB gzipped)
* `chunk.xxxxx.js` - Vue Component (Counter) - 1.67 KiB (0.83 KiB gzipped)
* `chunk.xxxxx.js` - Vue Component (Expander) - 1.50 KiB (0.79 KiB gzipped)
* `chunk.xxxxx.js` - Vue Component (Modal) - 28.53 KiB (8.58 KiB gzipped) - Bigger because it contains a third party library for modals (vue-js-modal), imported directly in the component code, so not included in chunk-vendor

We only need to include `async.js` and `vendors.js` in the HTML page, the components are loaded asynchronously by the browser when Vue asks for them. And Vue asks for them only if it needs them.

Check out the 2 async examples.

* https://louwii.github.io/vue-static-page-experiment/demo/async.html
* https://louwii.github.io/vue-static-page-experiment/demo/async2.html

Both use the exact same JS code. The only difference is the HTML [async.html source](public/async.html) [async2.html source](public/async2.html). Async2 does not have a `modal` in its HTML. If you look at the files loaded in both example in your browser network tab, you'll see `async2` is not loading the js chunk for the modal.


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
