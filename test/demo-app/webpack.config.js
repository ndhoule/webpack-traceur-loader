'use strict';

module.exports = {
  // Tell Webpack where to find loaders; the last entry allows it to find the
  // (local) Traceur module. Omit this configuration option in your own project.
  resolveLoader: {
    modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', 'node_modules', '../..']
  },

  cache: true,

  module: {
    loaders: [
      { test: /\.es6.js$/, loader: 'traceur?runtime&sourceMaps' }
    ]
  }
};
