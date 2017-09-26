import {stage, renderer, groundHeight} from './App'
const PIXI = require('pixi.js')

class Obstacle {
  constructor () {
    this.obstaclesList = []
  }

  add (initialX = 0) {
    const obstacle = new PIXI.Sprite(
      PIXI.loader.resources['box'].texture
    )
    obstacle.y = groundHeight + 20
    obstacle.x = initialX
    stage.addChild(obstacle)
    this.obstaclesList.push(obstacle)
  }
  addAll () {
    const nrObstacles = Math.floor(renderer.width / 70 / 2) + 1
    for (let i = 0; i < nrObstacles; i++) {
      this.add(i * 500)
    }
  }
}

export default Obstacle
