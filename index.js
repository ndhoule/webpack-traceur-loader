/**
 * @license
 * traceur-loader v0.2.0
 * https://github.com/ndhoule/traceur-loader/issues/new
 *
 * Copyright 2014, Nathan Houle <nathan@nathanhoule.com>
 * Licensed under the MIT license. See LICENSE.md.
 */

'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var support = require('./lib/support');
var parseQuery = require('./lib/parseQuery');
var parseOptions = require('./lib/parseOptions');
var traceur = require('traceur');
var runtimePath = require.resolve(require('traceur').RUNTIME_PATH);

module.exports = function(source) {
  var log = this.debug ? support.log : support.noop;
  var callback = this.async();
  this.cacheable && this.cacheable();

  var options = parseOptions(parseQuery(this.query));

  log('Processing file: %s', this.resourcePath);
  log('Current options are:', options);

  // If this is Traceur's runtime library, skip it
  if (this.resourcePath === runtimePath) {
    log('Skipping compilation of runtime file: %s', this.resourcePath);
    return callback(null, source);
  }

  // Add a Webpack loader for the Traceur runtime library. (Transpiled code
  // relies on Traceur's runtime library to function.)
  if (options.runtime) {
    source = 'require("' + runtimePath + '");\n\n' + source;
  }

  // Clone options, excluding non-Traceur options, and compile source
  var output = traceur.compile(source, options.traceurOptions);

  // Report Traceur errors
  if (output.errors.length) {
    console.error(chalk.red('ERROR:'), 'Traceur encountered the following errors:');
    console.error('\t' + output.errors.join('\n\t'));

    return callback(new Error(chalk.red('ERROR:'), 'Please fix these errors and re-run Webpack.'));
  }

  callback(null, output.js, output.sourceMap);
};
