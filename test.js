'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var proxyquire = require('proxyquire')

test('node', function (t) {
  t.doesNotThrow(load)
  t.end()

  function load () {
    proxyquire('./', {
      'global/window': {}
    })
  }
})

test('browser', function (t) {
  var window = new EventTarget()
  var focus = proxyquire('./', {
    'global/window': window,
    'global/document': {
      hasFocus: function () {
        return true
      }
    }
  })

  t.equal(focus(), true, 'initially matches document focus state')
  window.send('blur', {})
  t.equal(focus(), false, 'handles blur')
  window.send('focus', {})
  t.equal(focus(), true, 'handles focus')

  t.end()
})
