'use strict'

module.exports = flattenThunk
function flattenThunk(thunk) {
  return function(cb) {
    (function f() {
      thunk.call(null, function(err, result) {
        if (typeof result === 'function') {
          thunk = result
          return f()
        }
        cb.call(null, err, result)
      })
    })()
  }
}

