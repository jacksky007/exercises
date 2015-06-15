var async = {}

async.sequence = function(tasks) {
  var tasks = tasks.slice()
  return function(cb) {
    var f = function(err, data) {
      var task = tasks.shift()
      if (tasks.length) {
        return task.call(null, function(err, data) {
          f.call(null, err, data)
        })
      }
      task.call(null, cb, data)
    }
    f()
  }
}

async.parallel = function(tasks) {
  return function(cb) {
    var count = 0
    var errs = []
    var results = []
    tasks.forEach(function(task, index) {
      task.call(null, function(err, data) {
        errs[index] = err
        results[index] = data
        if (++count === tasks.length) {
          cb.call(null, errs, results)
        }
      })
    })
  }
}

async.race = function(tasks) {
  var cbCalled
  return function(cb) {
    tasks.forEach(function(task) {
      task.call(null, function(err, data) {
        if (cbCalled) {
          return
        }
        cbCalled = true
        cb.call(null, err, data)
      })
    })
  }
}

module.exports = async

