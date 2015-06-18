'use strict'

module.exports = function(tree) {
  if (Math.random() < .5) {
    console.log('invertIteratively')
    return invertIteratively(tree)
  }
  console.log('invertRecursively')
  return invertRecursively(tree)
}

function invertRecursively(tree) {
  var invert = function(root) {
    var left = root.left
    if (root.right) {
      root.left = invert(root.right)
    }
    if (left) {
      root.right = invert(left)
    }
    return root
  }
  return invert(tree)
}

function invertIteratively(tree) {
  var stack = [tree]
  while (stack.length) {
    var frame = stack.pop()
    var left = frame.left
    if (frame.right) {
      frame.left = frame.right
      stack.push(frame.left)
    }
    if (left) {
      frame.right = left
      stack.push(left)
    }
  }
}

