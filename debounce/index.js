'use strict'

module.exports = function(f, delay) {
  var immediate
  return function() {
    var me = this
    var args = [].slice.call(arguments)
    clearImmediate(immediate)
    var d0 = new Date
    ;(function fn() {
      immediate = setImmediate(function() {
        var d1 = new Date
        if (d1 - d0 > delay) {
          return f.apply(me, args)
        }
        fn()
      })
    })()
  }

  var timeout
  return function() {
    var me = this
    var args = [].slice.call(arguments)
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      f.apply(me, args)
    }, delay)
  }
} 

