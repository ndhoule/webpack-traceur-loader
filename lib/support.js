'use strict';

var chalk = require('chalk');

exports.noop = function noop() {};

exports.log = function log() {
  process.stdout.write(chalk.green('[traceur-loader]: '));
  return console.log.apply(console, arguments);
};
