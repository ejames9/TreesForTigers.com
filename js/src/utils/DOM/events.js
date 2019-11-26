/*
events.js

This file contains the library convenience EventListener function.

Author: Eric James Foster
License: ISC
*/

import el from './el'


//Function for setting event listeners.
const on =(event, elem, callback, bubbles=true)=> {
  let domEl = el(elem)
// Making sure we have addEventListener, in case of IE or Edge....
  if (document.addEventListener) {
    return elem.addEventListener(event, callback, bubbles)
  } else {
// For IE or Edge...
    return elem.attachEvent(`on${event}`, callback, bubbles)
  }
}

const go =(callback)=> {
  return document.addEventListener('DOMContentLoaded', callback)
}


//This is an alias function for XMLHttpRequests.
var xhr = function(url, fd, options) {                                          //DONE:80 Perfect this function.
    var formData;
                                                                               //DONE:100 Build FormData in function from object that user passes as an argument.
    if (fd) {                                                                  //DONE:70 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {                                                  //TEST:50 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = 'get';
  // var data = fd || null;
  var val;

  var ajax = function() {
      var ajax = new XMLHttpRequest();

      ajax.onloadend = function() {
        if (ajax.status === 200) {
          val = this.response;
        }
      };
      ajax.open(m, url, false);
      // if (options.header)
      //   ajax.setRequestHeader(options.header, options.value)
      ajax.send(formData);
  };
  ajax();

  return val;
};


export {
  on,
  go,
  xhr
}
