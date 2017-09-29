import {stage, renderer, groundHeight} from './App'
import {getRandomInt} from './utils'

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
    const nrObstacles = Math.floor(renderer.width / 70 / 5) + 1
    for (let i = 0; i < nrObstacles; i++) {
      this.add(i * getRandomInt(420, 630) + renderer.width)
    }
  }

  moveLeftAll (speed) {
    for (const obstacle of this.obstaclesList) {
      if (obstacle.x < -140) {
        
        obstacle.x = renderer.width + getRandomInt(420, 630)
      } else {
        obstacle.x = obstacle.x - 12
      }
    }
  }

  isLastOutsideRenderer () {
    const length = this.obstaclesList.length - 1
    return this.obstaclesList[length] > renderer.width
  }
}

export default Obstacle
