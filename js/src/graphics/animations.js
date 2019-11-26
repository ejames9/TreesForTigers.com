/*
** animations.js
**
** animations.js contains graphical animation tweens for the t4t site. All
** tweens use the tween.js tweening library.....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get tweening...
import TWEEN from '@tweenjs/tween.js'



let sky = this.sky.current,
twinkle = this.twinkle.current,
stars = this.stars.current,
moon = this.moon.current,
clouds = this.clouds.current,
tiger = this.tiger.current,
obj0 = {x: 85},
obj1 = {x: 55},
obj2 = {x: 100},
obj3 = {x: -15},
obj4 = {
  r1: 107, g1: 32, b1: 157,
  r2: 255, g2: 209, b2: 17
}



// Create new tween
const stalkingTiger = new TWEEN.Tween(obj3)

// Define the tween....
stalkingTiger
  .to({x: 85}, 10000)
  .easing(TWEEN.Easing.Linear.None)
  .onStart(()=> {
    tiger.style.transform = ''
  })
  .onUpdate(()=> {
    tiger.style.right = `${obj3.x}%`
  })

// Create new tween
const tigerReturn = new TWEEN.Tween(obj0)

// Define the tween....
tigerReturn
  .to({x: -15}, 10000)
  .easing(TWEEN.Easing.Linear.None)
  .onStart(()=> {
    tiger.style.transform = 'scaleX(-1)'
  })
  .onUpdate(()=> {
    tiger.style.right = `${obj0.x}%`
  })

  stalkingTiger.chain(tigerReturn)
  tigerReturn.chain(stalkingTiger)

/// Create new tween
const darkMorning = new TWEEN.Tween(obj1)

// Define the tween....
darkMorning
  .to( {x: 0}, 500)
  .easing(TWEEN.Easing.Exponential.Out)
  .onStart(()=> {
// kill twinkling....
    twinkle.style.display = 'none'
    twinkle.style.animation = 'paused'
  })
  .onUpdate(()=> {
    sky.style.background = `linear-gradient(to bottom, #151515 ${obj1.x}%, #6b209d 100%)`
    moon.style.top = `-25%`
  })



///Create new tween
const dawn = new TWEEN.Tween(obj2)

// Define the tween....
dawn
  .to( {x: 0}, 2000)
  .easing(TWEEN.Easing.Bounce.In)
  .onStart(()=> {
    this.stopFireworks()
  })
  .onUpdate(()=> {
    sky.style.background = `linear-gradient(to bottom, #151515 0%, rgb(107, 32, 157) ${obj2.x}%, rgb(255, 209, 17) 100%)`

    if (obj2.x <= 80) {
      stars.style.maxHeight = `${obj2.x}%`
      twinkle.style.maxHeight = `${obj2.x}%`
      twinkle.style.background = `transparent url(/images/twinkler.png) repeat top center`
    }
  })

//Create new tween
const day = new TWEEN.Tween(obj4)

// Define the tween....
day
  .to({
    r1: 64, g1: 115, b1: 255,
    r2: 186, g2: 220, b2: 220
  }, 5000)
  .easing(TWEEN.Easing.Quintic.In)
  .onStart(()=> {
    stalkingTiger
      .delay(2000)
      .start()
  })
  .onUpdate(()=> {
    sky.style.background = `linear-gradient(
      to bottom,
      rgb(${obj4.r1}, ${obj4.g1}, ${obj4.b1}) 0%,
      rgb(${obj4.r2}, ${obj4.g2}, ${obj4.b2}) 100%
    )`
  })


export {
  stalkingTiger,
  tigerReturn,
  darkMorning,
  dawn,
  day
}
