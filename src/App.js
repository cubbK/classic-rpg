import grassPic from './assets/Tiles/grassMid.png'
import sandPic from './assets/Tiles/sandCenter.png'
import playerPic from './assets/Player/p1_stand.png'
import {drawGrass, drawSand} from './tileActions'
import Player from './Player'

const PIXI = require('pixi.js')
export const stage = new PIXI.Container()
export const renderer = PIXI.autoDetectRenderer(256, 256)

renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.backgroundColor = 0x96C3E1
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.view)

// Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add('grass', grassPic)
  .add('sand', sandPic)
  .add('player', playerPic)
  .load(setup)

const groundHeight = renderer.height / 2 - 20
let hero, state

function setup () {
  const nrOfGrassTiles = Math.floor(renderer.width / 70) + 1
  const nrOfSandVert = Math.floor(((renderer.height + 70) / 2) / 70) + 1

  drawGrass(nrOfGrassTiles)
  drawSand(nrOfGrassTiles, nrOfSandVert)

  hero = new Player(renderer.heigh)
  hero.draw()
  hero.sprite.vy = 0

  state = play

  playerLoop()
}

document.addEventListener('keydown', event => {
  if (event.key === ' ') {
    hero.sprite.vy = -17
  }
})

function playerLoop () {
  // Loop this function 60 times per second
  window.requestAnimationFrame(playerLoop)

  // Move the cat 1 pixel per frame
  state()

  // Render the stage
  renderer.render(stage)
}

function play () {
  if (hero.sprite.y < groundHeight - 230) {
    hero.sprite.vy = 12
  }
  if (hero.sprite.y > groundHeight) {
    hero.sprite.vy = 0
    hero.sprite.y = groundHeight
  }
  hero.sprite.y += hero.sprite.vy
}
