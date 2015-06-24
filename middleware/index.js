'use strict'

module.exports = Middleware
function Middleware() {
  if (!this instanceof Middleware) {
    return new Middleware
  }
  this._queue = []
}
Middleware.prototype.use = function(cb) {
  var me = this
  var index = me._queue.push(false) - 1
  cb.call(me, function() {
    me._queue[index] = true
    var queueFinished = me._queue.every(function(value) {
      return value
    })
    if (queueFinished) {
      me._go && me._go()
    }
  })
}
Middleware.prototype.go = function(cb) {
  var me = this
  me._go = function() {
    cb.call(me, arguments)
    me._queue = []
    me._go = null
  }
}

