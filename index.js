/**
 * @license
 * traceur-loader v0.1.0
 * https://github.com/ndhoule/traceur-loader/issues/new
 *
 * Copyright 2014, Nathan Houle <nathan@nathanhoule.com>
 * Licensed under the MIT license. See LICENSE.md.
 */

'use strict';

var chalk = require('chalk');
var runtimePath = require.resolve(require('traceur').RUNTIME_PATH);
var support = require('./lib/support');
var traceur = require('traceur');

module.exports = function(source) {
  var log = this.debug ? support.log : support.noop;
  // TODO: Provide a synchronous code path to maintain compatibility with
  // `enhanced-require`
  var callback = this.async();
  this.cacheable && this.cacheable();

  // If this is Traceur's runtime library, skip it--we don't need to run it
  // through Traceur
  if (this.resourcePath === runtimePath) {
    callback(null, source);
  }

  log('Processing file: %s', this.resourcePath);

  // Add a Webpack loader for the Traceur runtime library. (Our output files
  // always rely on the runtime library being present.)
  //
  // TODO: Control this with an (optional) config flag
  source = 'require("' + runtimePath + '");\n\n' + source;

  // TODO: Expose configuration options here
  // TODO: Provide a set of default configuration options and merge them
  var output = traceur.compile(source, {
    sourceMap: true
  });

  if (output.errors.length) {
    console.error(chalk.red('ERROR:'), 'The Traceur module encountered the following errors:');
    console.error('\t' + output.errors.join('\n\t'));

    callback(new Error(chalk.red('ERROR:'), 'Please fix these errors and re-run Webpack.'));
  }

  callback(null, output.js, output.sourceMap);
};
