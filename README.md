Traceur Loader for Webpack
==========================

A [Webpack][] loader for transpiling ES6-compatible code to ES5-compatible code using Google's [Traceur][] compiler.


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
      { test: /\.es6\.js$/, loader: 'traceur-loader' },

      // Include the Traceur runtime:
      { test: /\.es6\.js$/, loader: 'traceur-loader?runtime' },

      // ...And any other Traceur option you like:
      { test: /\.es6\.js$/, loader: 'traceur-loader?runtime&sourceMap&experimental' }
    ]
  }
};
```


### Settings

You can set default settings for Traceur in `webpack.config.js`, or in a `require` statement as a querystring.

#### List of Settings

`runtime`: Set to `true` to disable inclusion of the Traceur runtime library in your built file. Defaults to `false`.

All other options are passed directly to to the Traceur compiler. See [this list][Traceur options] for a list of all Traceur options.


## Demo

See the `test/demo-app` directory in this project for a usage example.


## License

MIT ([License](LICENSE.md))



<!-- Links -->
[Documentation: Using Loaders]: http://webpack.github.io/docs/using-loaders.html "Documentation: Using Loaders"
[Traceur]: https://github.com/google/traceur-compiler "Traceur"
[Webpack]: https://webpack.github.io/docs/ "Webpack"
[Traceur options]: https://github.com/google/traceur-compiler/blob/aebf32380cfc70f31e940fc3c9ec26279e10b996/src/options.js#L235
