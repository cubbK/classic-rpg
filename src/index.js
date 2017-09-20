import registerServiceWorker from './registerServiceWorker'
import './styles.module.styl'
registerServiceWorker()
const PIXI = require('pixi.js')

var app = new PIXI.Application()

const renderer = PIXI.autoDetectRenderer(
  256, 256,
  {transparent: false, resolution: 1}
)
renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.view)
