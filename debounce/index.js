'use strict'

module.exports = function(f, delay) {
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

