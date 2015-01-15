/**
 * @license
 * traceur-loader v0.2.0
 * https://github.com/ndhoule/traceur-loader/issues/new
 *
 * Copyright 2014, Nathan Houle <nathan@nathanhoule.com>
 * Licensed under the MIT license. See LICENSE.md.
 */

'use strict';

var chalk = require('chalk');
var slash = require('slash');
var parseOptions = require('./parseOptions');
var parseQuery = require('./parseQuery');
var support = require('./support');
var traceur = require('traceur');
var runtimePath = slash(require.resolve(require('traceur').RUNTIME_PATH));
var utils = require('loader-utils');

module.exports = function(source) {
  var output;
  var toCompile = source;
  var sourceMap = null;
  var options = parseOptions(parseQuery(this.query));
  var log = this.debug ? support.log : support.noop;
  var callback = this.async();

  this.cacheable && this.cacheable();

  log('Processing file: %s', this.resourcePath);
  log('Current options are:', options);

  // Skip Traceur's runtime library
  if (this.resourcePath === runtimePath) {
    log('Skipping compilation of runtime file: %s', this.resourcePath);
    return callback(null, source);
  }

  // If enabled, add a Webpack loader for the Traceur runtime library.
  // (Many features require the Traceur runtime library to work.)
  if (options.runtime) {
    toCompile = 'require("' + runtimePath + '");\n\n' + source;
  }

  output = traceur.compile(toCompile, options.traceurOptions);

  // If Traceur encountered any errors, report them and bail out
  if (output.errors.length) {
    console.error(chalk.red('ERROR:'), 'Traceur encountered the following errors:');
    console.error('\t' + output.errors.join('\n\t'));

    return callback(new Error(chalk.red('ERROR:'), 'Please fix these errors and re-run Webpack.'));
  }

  if (output.generatedSourceMap) {
    sourceMap = JSON.parse(output.generatedSourceMap);

    // For some reason, Traceur always outputs source maps with the filename
    // '<unknown file>'. Set the source map filename to fix this.
    sourceMap.file = utils.getCurrentRequest(this);
    sourceMap.sources[0] = sourceMap.file;

    sourceMap = JSON.stringify(sourceMap);
  }

  callback(null, output.js, sourceMap);
};
