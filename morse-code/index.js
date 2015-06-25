'use strict'

module.exports = function(options, f) {
  options.timeouter(options.toggle, 0)
  var count = 0
  iterStr(options.message, function(char, index) {
    if (index > 0 && char !== ' ' && options.message[index - 1] !== ' ') {
      count += 3
      options.timeouter(function() {
        options.toggle()
      }, count)
    }
    if (char === ' ') {
      count += 7 
      options.timeouter(options.toggle, count)
    } else {
      var code = options.codes[char]
      iterStr(code, function(c, index) {
        if (index > 0) {
          count += 1
          options.timeouter(options.toggle, count)
        }
        var length = c === '.' ? 1 : 3
        count += length
        options.timeouter(options.toggle, count)
      })
    }
  })
  options.timeouter(f, count)
}
function iterStr(str, f) {
  for (var i = 0; i < str.length; i++) {
    f.call(null, str[i], i)
  }
}

