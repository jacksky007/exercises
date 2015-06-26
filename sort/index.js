'use stirct'

module.exports = function(arr) {
  function sort(arr) {
    if (arr.length === 0 || arr.length === 1) {
      return arr
    }
    var delimiter = (arr[0] + arr[1]) / 2
    var left = arr.filter(function(item) {
      return item <= delimiter
    })
    var right = arr.filter(function(item) {
      return item > delimiter
    })
    return sort(left).concat(sort(right))
  }

  return sort(arr)
}

