import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.scale.setTo(.8, .8)
  }

  tween(game) {
  	// this.game.add.tween(this.cherryred).to({y: 1000}, 2000, Phaser.Easing.Quadratic.Out, true);
  }

  update () {
    // this.angle += 1
  }
}
