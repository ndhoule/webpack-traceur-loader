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

  var callback = this.async();
  this.cacheable && this.cacheable();

  log('Processing file: %s', this.resourcePath);

  // If this is Traceur's runtime library, skip it
  if (this.resourcePath === runtimePath) {
    callback(null, source);
  }

  // Add a Webpack loader for the Traceur runtime library. (Transpiled code
  // relies on Traceur's runtime library to function.)
  source = 'require("' + runtimePath + '");\n\n' + source;

  var output = traceur.compile(source, {
    sourceMap: true
  });

  // Report Traceur errors
  if (output.errors.length) {
    console.error(chalk.red('ERROR:'), 'Traceur encountered the following errors:');
    console.error('\t' + output.errors.join('\n\t'));

    callback(new Error(chalk.red('ERROR:'), 'Please fix these errors and re-run Webpack.'));
  }

  callback(null, output.js, output.sourceMap);
};
