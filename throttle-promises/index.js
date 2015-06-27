'use strict'

module.exports = function(limit, factories) {
  return new Promise(function(resolve) {
    var results = []

    var resolvedCount = 0
    var workingCount = 0
    ;(function f(index) {
      if (workingCount === limit || index > factories.length - 1) {
        return
      }
      workingCount++
      factories[index]().then(function(result) {
        resolvedCount++
        workingCount--
        results[index] = result
        if (workingCount === 0) {
          return resolve(results)
        }
        f(resolvedCount + workingCount)
      })
      f(index + 1)
    })(0)
  })
}

