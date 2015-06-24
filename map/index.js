'use strict'

module.exports = function(arr, iter, context) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    result.push(iter.call(context, arr[i], i, arr))
  }
  return result
}

