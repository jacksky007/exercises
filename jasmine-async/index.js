'use strict'

module.exports = function(f) {
  var done
  function isDone() {
    done = true
  }
  var test = f()
  it(test.desc, function() {
    runs(function() {
      test.setup(isDone)
    })
    waitsFor(function() {
      return done
    })
    runs(test.test)
  })
}

