/*
utils.js

A simple file for convenience utility functions...

Eric James Foster
*/

// Get react...
import React from 'react'
import mergeData from './mergeData'
import Bowser from 'bowser'

import {log, dir} from './Loggers'


function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
}


const times =(n, iteree, id=true, propsObj={})=> {
  let arr = []

  for (let i = 0; i < n; i++) {
    if (id) {
      let props = mergeData(propsObj, {key: i})

      arr.push(
        React.createElement(iteree, props, null)
      )
    } else {
      arr.push(
        React.createElement(iteree, propsObj, null)
      )
    }
  }

  return arr
}


function isMobile() {
  const android = function() {
      return navigator.userAgent.match(/Android/i)
  }
  const blackBerry = function() {
      return navigator.userAgent.match(/BlackBerry/i)
  }
  const iOS = function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  }
  const operaMini = function() {
      return navigator.userAgent.match(/Opera Mini/i)
  }
  const windowsMobile = function() {
      return navigator.userAgent.match(/IEMobile/i)
  }
  const any = function() {
      return (android() || blackBerry() || iOS() || operaMini() || windowsMobile())
  }
  return any()
}


function isSafari() {
  let browser = Bowser.getParser(window.navigator.userAgent).parsedResult.browser.name

  log('USER AGENT', 'green')
  log(window.navigator.userAgent)
  dir(browser)


  return browser === 'Safari'
}

function isChrome() {
  let browser = Bowser.getParser(window.navigator.userAgent).parsedResult.browser.name

  return browser === 'Chrome'
}

export {
  capitalize,
  times,
  isMobile,
  isSafari,
  isChrome
}
