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

function setup () {
  const nrOfGrassTiles = Math.floor(renderer.width / 70) + 1
  const nrOfSandVert = Math.floor(((renderer.height + 70) / 2) / 70) + 1

  drawGrass(nrOfGrassTiles)
  drawSand(nrOfGrassTiles, nrOfSandVert)

  const hero = new Player(renderer.heigh)
  hero.draw()

  // Render the stage
  renderer.render(stage)
}
