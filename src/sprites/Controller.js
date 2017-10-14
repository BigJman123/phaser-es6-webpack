import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.scale.setTo(.8, .8);
    this.animations.add('press');
    this.animations.play('press', 10, true, false);
  }

  update () {
    // this.angle += 1
    // this.tilePosition.y += 18;
  }
}