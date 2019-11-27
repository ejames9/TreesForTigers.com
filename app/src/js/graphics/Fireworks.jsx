/*
** fireworks.jsx
**
** fireworks.jsx is an animation graphic for the t4t site, wrapped
** in a reactjs component.....
**
** Eric James Foster, Fostware LLC, MIT License.
***/




// Get react...
import React, {Component} from 'react'
// Get styled-components...
import styled, {createGlobalStyle} from 'styled-components'
// Get loggers...
import {log, dir} from '../utils/Loggers'


// Need ctx to be global, so it is declared here....
let ctx


// styles for the Fireworks canvas....
const FireworksStyler = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 1003;

  /* canvas {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1003;
  } */
`


export default class Fireworks extends Component {

// Static ....
static Particle = class {
// Ctor
    constructor(
      x = 0,
      y = 0,
      red = ~~(Math.random() * 255),
      green = ~~(Math.random() * 255),
      blue = ~~(Math.random() * 255),
      speed,
      isFixedSpeed,
      lifespan,
      particle_initial_speed,
      gravity
    ) {

      this.x = x
      this.y = y
      this.red = red
      this.green = green
      this.blue = blue
      this.alpha = 0.05
      this.radius = 1 + Math.random()
      this.angle = Math.random() * 360
      this.speed = (Math.random() * speed) + 0.1
      this.velocityX = Math.cos(this.angle) * this.speed
      this.velocityY = Math.sin(this.angle) * this.speed
      this.startTime = (new Date()).getTime()
      this.duration = Math.random() * 300 + lifespan
      this.currentDuration = 0
      this.dampening = 30 // slowing factor at the end

      this.particle_initial_speed = particle_initial_speed
      this.gravity = gravity

      this.colour = this.getColour()

      if (isFixedSpeed) {
        this.speed = speed
        this.velocityY = Math.sin(this.angle) * this.speed
        this.velocityX = Math.cos(this.angle) * this.speed
      }

      this.initialVelocityX = this.velocityX
      this.initialVelocityY = this.velocityY

    }

    animate() {
      this.currentDuration = (new Date()).getTime() - this.startTime

      // initial speed kick
      if (this.currentDuration <= 200) {

        this.x += this.initialVelocityX * this.particle_initial_speed
        this.y += this.initialVelocityY * this.particle_initial_speed
        this.alpha += 0.01

        this.colour = this.getColour(240, 240, 240, 0.9)
      } else {
        // normal expansion
        this.x += this.velocityX
        this.y += this.velocityY
        this.colour = this.getColour(this.red, this.green, this.blue, 0.4 + (Math.random() * 0.3))
      }

      this.velocityY += this.gravity / 1000

// slow down particles at the end
      if (this.currentDuration >= this.duration) {
        this.velocityX -= this.velocityX / this.dampening
        this.velocityY -= this.velocityY / this.dampening
      }

      if (this.currentDuration >= this.duration + this.duration / 1.1) {

// fade out at the end
        this.alpha -= 0.02
        this.colour = this.getColour()
      } else {
// fade in during expansion
        if (this.alpha < 1) {
          this.alpha += 0.03
        }
      }
    }

    render() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
      ctx.lineWidth = this.lineWidth
      ctx.fillStyle = this.colour
      ctx.shadowBlur = 8
      ctx.shadowColor = this.getColour(this.red + 150, this.green + 150, this.blue + 150, 1)
      ctx.fill()
    }

    getColour(red, green, blue, alpha) {
      return `rgba(${red || this.red}, ${green || this.green}, ${blue || this.blue}, ${alpha || this.alpha})`
    }
  }



// Fireworks Ctor ...
  constructor(props) {
    super(props)
// fun options!
    this.PARTICLES_PER_FIREWORK = props.particles || 150 // 100 - 400 or try 1000
    this.FIREWORK_CHANCE = props.chance || 0.08 // percentage, set to 0 and click instead
    this.BASE_PARTICLE_SPEED = props.base_particle_speed || 2.9 // between 0-4, controls the size of the overall fireworks
    this.FIREWORK_LIFESPAN = props.lifespan || 600 // ms
    this.PARTICLE_INITIAL_SPEED = props.initial_speed || 5.5 // 2-8

// not so fun options =\
    this.GRAVITY = props.gravity || 9.8

// Get canvas ref...
    this.canvas = React.createRef()
    this.ctx = null

    this.particles = []
    this.disableAutoFireworks = false
    this.resetDisable = 0

// Bind methods...
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.createFirework = this.createFirework.bind(this)
    this.updateCanvasSize = this.updateCanvasSize.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.loop = this.loop.bind(this)
  }


  componentDidMount() {
    ctx = this.canvas.current.getContext('2d')
// Run the animation....
    this.props.grabber(this.start, this.stop)

    // this.start()
  }


  handleClick(e) {
    this.createFirework(e.clientX, e.clientY)

// stop fireworks when clicked, re-enable after short time
    this.disableAutoFireworks = true
    clearTimeout(this.resetDisable)

    this.resetDisable = setTimeout(() => {
      this.disableAutoFireworks = false
    }, 3000)
  }


// The animation loop...
  loop() {
//
    if (!this.disableAutoFireworks && Math.random() < this.FIREWORK_CHANCE) {
      this.createFirework()
    }

    ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)

    this.particles.forEach((particle, i) => {
      particle.animate()
      particle.render()
      if (particle.y > this.canvas.current.height
          || particle.x < 0
          || particle.x > this.canvas.current.width
          || particle.alpha <= 0
         ) {
        this.particles.splice(i, 1)
      }
    })

    requestAnimationFrame(this.loop)
  }


// Create the firework, using the Particle class... .
  createFirework(
// Randomly set firework into the middle 60% of horizontal space...
    x = Math.random() * (this.canvas.current.width * .6) + (this.canvas.current.width * .20),
// Randomly set firework into the top 50% of vertical space...
    y = Math.random() * this.canvas.current.height * .5
  ) {
    let speed = (Math.random() * 2) + this.BASE_PARTICLE_SPEED
    let maxSpeed = speed

    let red = ~~(Math.random() * 255)
    let green = ~~(Math.random() * 255)
    let blue = ~~(Math.random() * 255)

    // use brighter colours
    // red = (red < 150 ? red + 150 : red)
    // green = (green < 150 ? green + 150 : green)
    // blue = (blue < 150 ? blue + 150 : blue)

    // inner firework
    for (let i = 0; i < this.PARTICLES_PER_FIREWORK; i++) {
      let particle = new Fireworks.Particle(x, y, red, green, blue, speed, false, this.FIREWORK_LIFESPAN, this.PARTICLE_INITIAL_SPEED, this.GRAVITY)
      this.particles.push(particle)
      // dir(particle)

      maxSpeed = (speed > maxSpeed ? speed : maxSpeed)
    }

    // outer edge particles to make the firework appear more full
    for (let i = 0; i < 40; i++) {
      let particle = new Fireworks.Particle(x, y, red, green, blue, maxSpeed, true, this.FIREWORK_LIFESPAN, this.PARTICLE_INITIAL_SPEED, this.GRAVITY)
      this.particles.push(particle)
    }
  }


// A method for updating canvas size...
  updateCanvasSize() {
    this.canvas.current.width = window.innerWidth
    this.canvas.current.height = window.innerHeight
  }



// Method for starting up the animation
  start() {
    this.updateCanvasSize()

    window.onresize = ()=> {
      this.updateCanvasSize()
    }
// Run the loop...
    this.loop()
  }

// Method for stopping the fireworks...
  stop() {
    this.disableAutoFireworks = true
  }


// Component markup...
  render() {
    return (
      <FireworksStyler ref={this.canvas} onClick={(e)=> this.handleClick(e)}/>
    )
  }

}
