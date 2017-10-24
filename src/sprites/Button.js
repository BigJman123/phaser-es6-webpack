import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.scale.setTo(1.6, 1.6)
    this.animations.add('press')
    this.animations.play('press', 2, true, false)
  }
}