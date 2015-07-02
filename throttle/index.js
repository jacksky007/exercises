'use strict'

module.exports = function(f, time) {
  var lastCalledAt
  var timeout
  var context
  var args
  return function() {
    context = this
    args = [].slice.call(arguments)
    if (!lastCalledAt || ((new Date) - lastCalledAt > time && !timeout)) {
      lastCalledAt = new Date
      return f.apply(context, args)
    }
    if (!timeout) {
      timeout = setTimeout(function() {
        lastCalledAt = new Date
        f.apply(context, args)
        timeout = null
      }, time)
      return
    }
  }
}

