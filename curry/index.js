'use strict'

module.exports = function(f) {
  var argsCount = f.length
  function args2Array(args) {
    return [].slice.call(args)
  }
  function _curry(context, params) {
    if (params.length >= argsCount) {
      return f.apply(context, params)
    }
    return function() {
      return _curry(this || context, params.concat(args2Array(arguments)))
    }
  }
  return function() {
    return _curry(this, args2Array(arguments))
  }
}

