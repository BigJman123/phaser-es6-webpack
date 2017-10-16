/* globals __DEV__ */
import Phaser from 'phaser'
import Spawn from '../sprites/Spawn'
import Player from '../sprites/Player'
import Background from '../sprites/Background'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
  	this.camera.flash('#000000');

    this.background = new Background({
      game: this.game,
      x: 0,
      y: 0,
      width: 1080,
      height: 1920,
      asset: 'highway'
    })

    this.cherryred = new Player({
      game: this.game,
      x: 625,
      // y will be 2500 in final code
      y: 2500,
      asset: 'cherryred'
    })


    this.spawn = new Spawn(this.game)
    // this.spawn.spawn(1000)
    // setTimeout(() => {
    	// this.spawn.start()
    // }, 4000);
    this.spawn.start()

    this.game.add.tween(this.cherryred).to({y: 1000}, 2000, Phaser.Easing.Quadratic.Out, true);


    this.game.add.existing(this.background)
    this.game.add.existing(this.cherryred)

  }
  
}
