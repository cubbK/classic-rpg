import grass from './assets/Tiles/grassMid.png'
import sand from './assets/Tiles/sandCenter.png'
import {drawGrass, drawSand} from './tileActions'

const PIXI = require('pixi.js')
const stage = new PIXI.Container()
const renderer = PIXI.autoDetectRenderer(256, 256)

renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.backgroundColor = 0x96C3E1
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.view)

// Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add('grass', grass)
  .add('sand', sand)
  .load(setup)

function setup () {
  const nrOfGrassTiles = Math.floor(renderer.width / 70) + 1
  const nrOfSandVert = Math.floor(((renderer.height + 70) / 2) / 70) + 1
  console.log(nrOfSandVert)
  drawGrass(nrOfGrassTiles, renderer.height, stage)
  drawSand(nrOfGrassTiles, nrOfSandVert, renderer.height, stage)

  // Render the stage
  renderer.render(stage)
}
