'use strict'

var debounce = require('./')

var count = 0
var debounced = debounce(function() {
  count++
}, 100)

debounce()
setTimeout(debounced, 50)
setTimeout(debounced, 100)
setTimeout(debounced, 150)
setTimeout(function() {
  console.log('expected count = 0')
  console.log('actual count = ' + count)
}, 200)
