'use strict'

var Observ = require('observ')
var document = require('global/document')
var window = require('global/window')
var partial = require('ap').partial

var focused = Observ(hasFocus())

module.exports = focused

if (typeof window.addEventListener === 'function') {
  window.addEventListener('blur', partial(focused.set, false))
  window.addEventListener('focus', partial(focused.set, true))
}

function hasFocus () {
  return typeof document.hasFocus === 'function' ? document.hasFocus() : false
}
