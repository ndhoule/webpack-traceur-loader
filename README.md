Traceur Loader for Webpack
==========================

A [Webpack][] loader for transpiling ES6-compatible code to ES5-compatible code using Google's [Traceur][] compiler.


## Installation

```sh
npm install webpack-traceur-loader
```


## Usage

### Inline

Requiring files inline:

```javascript
// Simple inline usage
require('traceur!./src/index');

// More advanced version; include the Traceur runtime
require('traceur!./src/index?runtime');
```

[Documentation: Using Loaders][]

### Recommended Configuration

In your `webpack.config.js` file:

```js
module.exports = {
  module: {
    loaders: [
      // Transpile any JavaScript file:
      { test: /\.js$/, loader: 'traceur' },

      // Or only those with a specific suffix:
      { test: /\.es6\.js$/, loader: 'traceur' },

      // Include the Traceur runtime:
      { test: /\.es6\.js$/, loader: 'traceur?runtime' },

      // ...And any other Traceur option you like:
      { test: /\.es6\.js$/, loader: 'traceur?runtime&sourceMaps&experimental' }
    ]
  }
};
```


### Settings

You can set default settings for Traceur in `webpack.config.js`, or in a `require` statement as a querystring.

#### List of Settings

`runtime`: Set to `true` to disable inclusion of the Traceur runtime library in your built file. Defaults to `false`.

All other options are passed directly to to the Traceur compiler. See [this list][Traceur options] for a list of all Traceur options, and see [this guide][ES6 options] for example usages of ES6 features supported by Traceur.


## Demo

See the [`test/demo-app`](test/demo-app) directory for demo of the loader.


## License

MIT ([License](LICENSE.md))



<!-- Links -->
[Documentation: Using Loaders]: http://webpack.github.io/docs/using-loaders.html "Documentation: Using Loaders"
[Traceur]: https://github.com/google/traceur-compiler "Traceur"
[Webpack]: https://webpack.github.io/docs/ "Webpack"
[Traceur options]: https://github.com/google/traceur-compiler/blob/aebf32380cfc70f31e940fc3c9ec26279e10b996/src/options.js#L235
[ES6 options]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
