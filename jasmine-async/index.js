'use strict'

module.exports = function(f) {
  var test = f()
  test.setup(test.test)
}

