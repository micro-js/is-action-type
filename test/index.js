/**
 * Imports
 */

var isActionType = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should return true if correct type', function (t) {
  t.equal(isActionType('foo', {type: 'foo', payload: 'bar'}), true)
  t.end()
})

test('should return true if wrong type', function (t) {
  t.equal(isActionType('foo', {type: 'qux', payload: 'bar'}), false)
  t.end()
})

test('should return true if not action', function (t) {
  t.equal(isActionType('foo', {type: 'qux', bar: 'bar'}), false)
  t.end()
})
