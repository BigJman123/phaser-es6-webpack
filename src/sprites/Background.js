import Phaser from 'phaser'

export default class extends Phaser.TileSprite {
  constructor ({ game, x, y, width, height, asset }) {
    super(game, x, y, width, height, asset)
  }

  update () {
    // this.angle += 1
    this.tilePosition.y += this.game.config.roadSpeed;
  }
}