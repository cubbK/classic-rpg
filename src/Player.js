import {stage, renderer} from './App'
const PIXI = require('pixi.js')

class Player {
  draw () {
    this.sprite = new PIXI.Sprite(
      PIXI.loader.resources['player'].texture
    )
    this.sprite.y = renderer.height / 2 - 20
    this.sprite.x = 160
    stage.addChild(this.sprite)
  }
}

export default Player
