'use strict';

// THis is a custom Jest transformer truning style imports into empty objects.

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};