/*
Is.js

A file containing a small type checking utility library...

Eric James Foster, MIT License.
*/

// Get data...


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
  isOffscreen
}
