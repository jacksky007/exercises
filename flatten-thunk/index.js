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

var thunk1 = function(cb) {
  setTimeout(function() {
    cb(null, 'done');
  }, 1);
}
var thunk2 = function(cb) {
  setTimeout(function() {
    cb(null, thunk1);
  }, 1);
} 
var thunk3 = function(cb) {
  setTimeout(function() {
    cb(null, thunk2);
  }, 1);
}
flattenThunk(thunk3)(function(err, result) {
  console.log(3, err, result)
})
