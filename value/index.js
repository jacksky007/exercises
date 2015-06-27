'use strict'

module.exports = function(value) {
  return(function f(value) {
    if (typeof value !== 'function') {
      return value
    }
    return f(value())
  })(value)
}

