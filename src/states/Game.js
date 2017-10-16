/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Background from '../sprites/Background'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    this.background = new Background({
      game: this.game,
      x: 0,
      y: 0,
      width: 1080,
      height: 1920,
      asset: 'highway'
    })

    this.car = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'cherryred'
    })

    this.game.add.existing(this.background)
    this.game.add.existing(this.car)
  }
  
}
