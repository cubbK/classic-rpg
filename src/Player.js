import {stage, renderer, spriteUtil} from './App'
import plWalk1 from './assets/Player/p1_walk/PNG/p1_walk01.png'
import plWalk2 from './assets/Player/p1_walk/PNG/p1_walk02.png'
import plWalk3 from './assets/Player/p1_walk/PNG/p1_walk03.png'
import plWalk4 from './assets/Player/p1_walk/PNG/p1_walk04.png'
import plWalk5 from './assets/Player/p1_walk/PNG/p1_walk05.png'
import plWalk6 from './assets/Player/p1_walk/PNG/p1_walk06.png'

class Player {
  draw () {
    const posX = renderer.width / 100 * 15
    const posY = renderer.height / 2 - 20
    this.sprite = spriteUtil.sprite([plWalk1, plWalk2, plWalk3, plWalk4, plWalk5, plWalk6], posX, posY)
    this.sprite.playAnimation()
    stage.addChild(this.sprite)
  }
}

export default Player
