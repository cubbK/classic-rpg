const PIXI = require('pixi.js')
const stage = new PIXI.Container()
const renderer = PIXI.autoDetectRenderer(256, 256)

renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.view)

// Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add('grass', './assets/Tiles/grassMid.png')
  .add('sand', './assets/Tiles/sandCenter')
  .load(setup)


function setup () {
  const nrOfGrassTiles = Math.floor(renderer.width / 70) + 1
  // renderGrass(nrOfGrassTiles, renderer.height, stage)

  // Render the stage
  renderer.render(stage)
}
