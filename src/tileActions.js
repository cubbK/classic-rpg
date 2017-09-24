const PIXI = require('pixi.js')

export function drawGrass (howMany, renderHeight, stage) {
  for (let i = 0; i < howMany; i++) {
    const grass = new PIXI.Sprite(
      PIXI.loader.resources['grass'].texture
    )
    grass.y = renderHeight / 2 + 70
    grass.x = grass.width * i
    stage.addChild(grass)
  }
}

export function drawSand (howManyX, howManyY, renderHeight, stage) {
  for (let i = 0; i < howManyX; i++) {
    for (let j = 0; j < howManyY; j++) {
      const sand = new PIXI.Sprite(
        PIXI.loader.resources['sand'].texture
      )
      sand.y = (renderHeight / 2 + 140) + (j * 70)
      sand.x = sand.width * i
      stage.addChild(sand)
    }
  }
}
