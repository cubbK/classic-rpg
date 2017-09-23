import registerServiceWorker from './registerServiceWorker'
import './styles.module.styl'
const PIXI = require('pixi.js')
registerServiceWorker()

const renderer = PIXI.autoDetectRenderer(
  256, 256,
  {transparent: false, resolution: 1}
)
renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.view)
