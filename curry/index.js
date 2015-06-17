'use strict'

module.exports = function(f) {
  function _curry(f, argsCount, params) {
    if (params.length >= argsCount) {
      return f.apply(null, params)
    }
    return function() {
      return _curry(f.bind.apply(f, [null].concat(params)), argsCount - params.length, [].slice.call(arguments))
    }
  }
  return function() {
    return _curry(f, f.length, [].slice.call(arguments))
  }
}

