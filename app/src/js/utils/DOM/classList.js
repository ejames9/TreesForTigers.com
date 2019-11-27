/*
** classList.js
**
** classList.js has a few helper funcs for interacting with an element's
** classList in a little bit more of a direct way.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Add a class to an el's class list...
const addClass =(el, _class)=> {
  return el.classList.add(_class)
}

// Remove a class to an el's class list...
const removeClass =(el, _class)=> {
  return el.classList.remove(_class)
}

// Confirm the existance of a class in an el's class list....
const listContains =(el, _class)=> {
  return el.classList.contains(_class)
}

// Replace a class with a new one in an el's class list...
const replaceClass =(el, oldie, newie)=> {
// Remove old...
    el.classList.remove(oldie)
// Add new...
    el.classList.add(newie)
// Return the list...
    return el.classList
}

export {
  addClass,
  removeClass,
  listContains,
  replaceClass
 }
