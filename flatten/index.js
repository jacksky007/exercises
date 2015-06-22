'use strict'

module.exports = function(arr) {
  function flatten(arr) {
    return arr.reduce(function(result, item) {
      return result.concat(item instanceof Array ? flatten(item) : item)
    }, [])
  }
  return flatten(arr)
}

