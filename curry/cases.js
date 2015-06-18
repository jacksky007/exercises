'use strict'

var curry = require('./')

var add = function(a, b, c, d) {
  return 'this.name: ' + this.name + ', a + b + c + d: ' + (a + b + c + d)
}

var obj1 = {
  name: 'obj1'
}

var obj2 = {
  name: 'obj2'
}

var obj3 = {
  name: 'obj3'
}

var a1 = curry(add.bind(obj1))
console.log('\na1(1)(2)(3)(4)')
console.log('expected: ', 'this.name: obj1, a + b + c + d: 10')
console.log('actual:   ', a1(1)(2)(3)(4))

var a2 = curry(add)
console.log('\na2.bind(obj1)(1)(2)(3)(4)')
console.log('expected: ', 'this.name: obj1, a + b + c + d: 10')
console.log('actual:   ', a2.bind(obj1)(1)(2)(3)(4))

var a3 = curry(add)
console.log('\na3(1).bind(obj1)(2)(3)(4)')
console.log('expected: ', 'this.name: obj1, a + b + c + d: 10')
console.log('actual:   ', a3(1).bind(obj1)(2)(3)(4))

var a4 = curry(add)
console.log('\na4(1).bind(obj1)(2)(3).bind(obj2)(4)')
console.log('expected: ', 'this.name: obj2, a + b + c + d: 10')
console.log('actual:   ', a4(1).bind(obj1)(2)(3).bind(obj2)(4))

