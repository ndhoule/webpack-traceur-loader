'use strict';

var _ = require('lodash');

// See `traceur-loader`'s README.md for a full list of options
var defaults = {
  runtime: false,
  traceurOptions: {}
};

// Keys that should be at the root level of the options object.
// (All other keys will be put on `traceurOptions`.)
var baseKeys = _.keys(_.omit(defaults, 'traceurOptions'));

module.exports = function parseOptions(options) {
  return _.reduce(options, function(acc, val, key) {
    if (_.contains(baseKeys, key)) {
      acc[key] = val;
    } else {
      acc.traceurOptions[key] = val;
    }

    return acc;
  }, _.clone(defaults));
};
