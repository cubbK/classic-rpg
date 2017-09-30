import grassPic from './assets/Tiles/grassMid.png'
import sandPic from './assets/Tiles/sandCenter.png'
import playerPic from './assets/Player/p1_stand.png'
import cactusPic from './assets/Items/cactus.png'
import boxPic from './assets/Tiles/box.png'
import boxAltPic from './assets/Tiles/boxAlt.png'

import {drawGrass, drawSand} from './tileActions'
import Obstacle from './Obstacle'
import Player from './Player'

import SpriteUtilities from 'pixi-sprite-utilities'

const PIXI = require('pixi.js')


export const stage = new PIXI.Container()
export const renderer = PIXI.autoDetectRenderer(256, 256)
export const spriteUtil = new SpriteUtilities(PIXI)

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
  .add('cactus', cactusPic)
  .add('box', boxPic)
  .add('boxAlt', boxAltPic)
  .load(setup)

export const groundHeight = renderer.height / 2 - 20
let hero, state, box

function setup () {
  const nrOfGrassTiles = Math.floor(renderer.width / 70) + 1
  const nrOfSandVert = Math.floor(((renderer.height + 70) / 2) / 70) + 1

  drawGrass(nrOfGrassTiles)
  drawSand(nrOfGrassTiles, nrOfSandVert)

  box = new Obstacle()
  box.addAll()
  console.log(box.obstaclesList)

  hero = new Player(renderer.heigh)
  hero.draw()
  hero.sprite.vy = 0

  state = play

  playerLoop()
}

document.addEventListener('keypress', event => {
  if (event.key === ' ' && hero.sprite.y === groundHeight) {
    hero.sprite.vy = -20
  }
})

document.addEventListener('touchstart', () => {
  if (hero.sprite.y === groundHeight) {
    hero.sprite.vy = -20
  }
})

function playerLoop () {
  // Loop this function 60 times per second
  window.requestAnimationFrame(playerLoop)

  state()

  // Render the stage
  renderer.render(stage)
}

function play () {
  if (hero.sprite.y < groundHeight - 230) {
    hero.sprite.vy = 16
  }
  if (hero.sprite.y > groundHeight) {
    hero.sprite.vy = 0
    hero.sprite.y = groundHeight
  }
  hero.sprite.y += hero.sprite.vy
  box.moveLeftAll(10)
}
