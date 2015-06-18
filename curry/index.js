'use strict'

module.exports = curry
function curry(f) {
  function _curry(f, argsCount, params) {
    var context = this
    if (params.length >= argsCount) {
      return f.apply(context, params)
    }
    return function() {
      return _curry.call(
          context,
          f.bind.apply(f, [context].concat(params)),
          argsCount - params.length,
          [].slice.call(arguments)
      )
    }
  }
  return function() {
    return _curry.call(this, f, f.length, [].slice.call(arguments))
  }
}

