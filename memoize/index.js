'use strict'

module.exports = function(f) {
  var cache = {}
  return function() {
    var key = JSON.stringify([].slice.call(arguments))
    if (cache.hasOwnProperty(key)) {
      return cache[key]
    }
    return cache[key] = f.apply(this, arguments)
  }
}
