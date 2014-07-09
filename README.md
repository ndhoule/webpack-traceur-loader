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
  }
};
```

<!-- TODO: Document loader configuration once it's implemented -->


## Demo

See the `test/demo-app` directory in this project for a usage example.


## License

MIT ([License](LICENSE.md))



<!-- Links -->
[Documentation: Using Loaders]: http://webpack.github.io/docs/using-loaders.html "Documentation: Using Loaders"
[Traceur]: https://github.com/google/traceur-compiler "Traceur"
[Webpack]: https://webpack.github.io/docs/ "Webpack"
