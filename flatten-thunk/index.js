module.exports = flattenThunk
function flattenThunk(thunk) {
  return function(cb) {
    setTimeout(function() {
      var f = function() {
        thunk.call(null, function(err, result) {
          if (typeof result === 'function') {
            thunk = result
            return f()
          }
          cb.call(null, err, result)
        })
      }
      f()
    }, 1)
  }
}

