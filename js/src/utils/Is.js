/*
Is.js

A file containing a small type checking utility library...

Eric James Foster, MIT License.
*/

// Get data...

import {log, dir} from './Loggers'
import el from './DOM/el'

class Is {
// Simple convenience function for determining if a value is
// undefined or not...
    static undefined(val) {
      return typeof val === 'undefined'
    }

// Simple convenience function for determining if a value is
// an object or not...
    static object(val) {
      return typeof val === 'object'
    }

// Simple convenience function for determining if a value is
// a number or not...
    static number(val) {
      return typeof val === 'number'
    }

// Simple convenience function for determining if a value is
// a string or not...
    static string(val) {
      return typeof val === 'string'
    }

// Simple convenience function for determining if a value is
// a function or not...
    static function(val) {
      return typeof val === 'function'
    }

// A copy of the above function with a different name... I have my reasons....
    static func(val) {
      return typeof val === 'function'
    }

// Simple convenience function for determining if a value is
// a symbol or not...
  static symbol(val) {
    return typeof val === 'symbol'
  }

// Simple convenience function for determining if a value is
// a boolean or not...
  static boolean(val) {
    return typeof val === 'boolean'
  }

// A simple convenience function for determining if a value is
// a class or not...
  static class(val) {
    return /_classCallCheck/.test(String(val))
  }

// A simple convenience function for determining if a value is
// a component or not...
  static component(tagName) {
    return (!tagName.indexOf('-') === -1)&& true
  }

// A simple convenience function for determining if a value is
// a function or not...
  static array(val) {
    return Array.isArray(val)
  }

// A function for confirming same type...
  static kin(val1, val2) {
    return typeof val1 === typeof val2
  }

// A function for determining whether or not an element is on screen...
  static offscreen(el) {
    let rect = el.getBoundingClientRect()
//
    return (
      (rect.x + rect.width) < 0 || (rect.y + rect.height) < 0
      || (rect.x > window.innerWidth || rect.y > window.innerHeight)
    )
  }

// A function for determining whether or not a user has scrolled to the bottom of the page...
  static bottom() {
    let levelTwo = el('#levelTwo')
    return (
      window.innerHeight + Math.ceil(window.pageYOffset) >= (levelTwo.offsetTop + levelTwo.offsetHeight) -2
    )
  }
}


const isUndefined = Is.undefined
const isObject = Is.object
const isNumber = Is.number
const isString = Is.string
const isFunction = Is.function
const isFunc = Is.func
const isSymbol = Is.symbol
const isBoolean = Is.boolean
const isClass = Is.class
const isComponent = Is.component
const isArray = Is.array
const isKin = Is.kin
const isOffscreen = Is.offscreen
const isBottom = Is.bottom


export {
  Is,
  isUndefined,
  isObject,
  isNumber,
  isString,
  isFunction,
  isFunc,
  isSymbol,
  isBoolean,
  isClass,
  isComponent,
  isArray,
  isKin,
  isOffscreen,
  isBottom
}




//
//
// log('#####################################-E-########################################', ['', ''])
// log(`innerHeight: ${window.innerHeight}`)
// log(`pageYOffset: ${window.pageYOffset}`)
// log(`doc.body.offsetHeight: ${document.body.offsetHeight}`)
// log(`Math.ceil: ${Math.ceil(document.body.offsetHeight)}`)
// log(window.innerHeight + Math.ceil(window.pageYOffset) >= window.offsetHeight -2)
// log(`Total: ${window.innerHeight + Math.ceil(window.pageYOffset)}`)
// log(document.body.offsetHeight - 2)


//
// log('#####################################-E-########################################', ['', ''])
// log(`innerHeight: ${window.innerHeight}`)
// log(`pageYOffset: ${window.pageYOffset}`)
// log(`doc.body.offsetHeight: ${document.body.offsetHeight}`)
// log(`Math.ceil: ${Math.ceil(document.body.offsetHeight)}`)
// log(window.innerHeight + Math.ceil(window.pageYOffset) >= window.offsetHeight -2)
// log(`Total: ${window.innerHeight + Math.ceil(window.pageYOffset)}`)
// log(document.body.offsetHeight - 2)
// dir(el('#levelTwo'))
