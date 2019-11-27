/*
** el.js
**
** This function combines querySelector and querySelectorAll, and becomes a
** noop if 'el' is a letiable. There is an optional 2nd argument 'mod', that
** is a boolean. By default, 'mod' is false. If true is passed as the 2nd argument,
** the function will use querySelectorAll() instead of querySelector(), meaning an
** array will be returned if possible.
**
** Eric James Foster, Fostware LLC, MIT License.
***/



/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
export default function queryDOM(el, all=false) {
//
    let lm, lms = []

  if (typeof el === 'string') {
    if (el.charAt(0) === '.') {
      el = el.substring(1, el.length)

      lm = document.getElementsByClassName(el)

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0]
        } else {
          for (let i = 0; i < lm.length; i++) {
            lms.push(lm[i])
          }
        }
      } else {
        return null
      }
    } else if (el.charAt(0) !== '#' && el.indexOf('[') === -1 && el.indexOf(':') === -1 && el.indexOf(' ') === -1) {
      lm = document.getElementsByTagName(el)

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0]
        } else {
          for (let j = 0; j < lm.length; j++) {
            lms.push(lm.item(j))
          }
        }
      } else {
        return null
      }
    } else {
      lm = document.querySelectorAll(el)
      if (lm.length <= 1) {
        lm = undefined
        lm = document.querySelector(el)
        return lm
      } else {
        return lm
      }
    }
    return lms
  } else {
    return el
  }
}
