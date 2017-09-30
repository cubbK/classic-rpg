import {stage, renderer, groundHeight, hero} from './App'
import {getRandomInt, isColliding} from './utils'

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
    this.lastObstacleIndex = nrObstacles - 1
    for (let i = 0; i < nrObstacles; i++) {
      this.add(i * 1200 + renderer.width * 2)
    }
    this.length = this.obstaclesList.length - 1
  }

  moveLeftAll (speed) {
    for (const [index, obstacle] of this.obstaclesList.entries()) {
      if (obstacle.x < -140) {
        obstacle.x = this.obstaclesList[this.lastObstacleIndex].x + getRandomInt(350, 800)
        this.lastObstacleIndex = index
      } else {
        obstacle.x = obstacle.x - 12
      }
    }
  }
  checkIfColliding () {
    for (const obstacle of this.obstaclesList) {
      if (isColliding(hero.sprite, obstacle)) {
        return true
      }
    }
    return false
  }
}

export default Obstacle
