'use strict'

module.exports = function(f) {
  var cache
  var called
  return function() {
    if (called) {
      return cache
    }
    called = true
    return cache = f.apply(this, arguments)
  }
}

