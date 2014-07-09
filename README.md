Traceur Loader for Webpack
==========================

A [Webpack][] loader for transpiling ES6-compatible code to ES5-compatible code
using Google's [Traceur][] compiler.


## Usage

<!-- TODO: Show inline/`require()` usage -->

[Documentation: Using Loaders][]

### Recommended Configuration

In your `webpack.config.js` file:

```js
module.exports = {
  module: {
    loaders: [
      // Transpile any JavaScript file:
      { test: /\.js$/, loader: 'traceur-loader' },
      // Or only those with a specific suffix:
      { test: /\.es6\.js$/, loader: 'traceur-loader' }
    ]
  },

  // Place Traceur configuration settings on this object
  traceur: {
    includeRuntime: true,
    compilerOptions: {
      sourceMap: true
    }
  }
};
```

<!-- TODO: Document loader configuration once it's implemented -->

### Settings

You can set settings for Traceur in `webpack.config.js`. Add a `traceur`
property to your `module.exports` (see above) and put settings on it.

#### List of Settings

`includeRuntime`: Set to `false` to disable inclusion of the Traceur runtime
library in your built file. Defaults to `true`.

Settings placed on the `traceur.compilerOptions` get passed directly to the
Traceur compiler. See this list of [Traceur options][Traceur options] for a
list of possible options.


## Demo

See the `test/demo-app` directory in this project for a usage example.


## License

MIT ([License](LICENSE.md))



<!-- Links -->
[Documentation: Using Loaders]: http://webpack.github.io/docs/using-loaders.html "Documentation: Using Loaders"
[Traceur]: https://github.com/google/traceur-compiler "Traceur"
[Webpack]: https://webpack.github.io/docs/ "Webpack"
[Traceur options]: https://github.com/google/traceur-compiler/blob/aebf32380cfc70f31e940fc3c9ec26279e10b996/src/options.js#L235
