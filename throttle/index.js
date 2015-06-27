'use strict'

module.exports = function(f, time) {
  var lastCalledAt
  var timeout
  return function() {
    var me = this
    var args = [].slice.call(arguments)
    if (timeout || (new Date) - lastCalledAt < time) {
      clearTimeout(timeout)
      timeout = setTimeout(function() {
        lastCalledAt = new Date
        f.apply(me, args)
      }, time - ((new Date) - lastCalledAt))
      return
    }
    if (!lastCalledAt || (new Date) - lastCalledAt > time) {
      lastCalledAt = new Date
      clearTimeout(timeout)
      return f.apply(me, args)
    }
  }
}

