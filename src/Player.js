import {stage, renderer} from './App'
const PIXI = require('pixi.js')

class Player {

  draw () {
    const player = new PIXI.Sprite(
      PIXI.loader.resources['player'].texture
    )
    player.y = renderer.height / 2 - 20
    player.x = 80
    stage.addChild(player)
  }
}

export default Player
