'use strict';

var _ = require('lodash');
var utils = require('loader-utils');

/**
 * All values in querystrings are represented as strings. Ensures that primitive
 * values like booleans, `null`, and `undefined` are appropriately converted to
 * their primitivecounterparts.
 *
 * TODO
 *
 * @return {Object}
 */

var primitives = {
  'false': false,
  'null': null,
  'true': true,
  'undefined': undefined
};

module.exports = function parseQuery(querystring) {
  return _.transform(utils.parseQuery(querystring), function(acc, val, key) {
    if (_.has(primitives, val)) {
      acc[key] = primitives[val];
    } else {
      acc[key] = val;
    }
  });
};
