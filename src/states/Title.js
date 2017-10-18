/* globals __DEV__ */
import Phaser from 'phaser'
import Background from '../sprites/Background'
import Controller from '../sprites/Controller'
import Spawn from '../sprites/Spawn'
import Controls from '../sprites/Controls'
import config from '../config'
import { myCustomFunction } from '../utils'

export default class extends Phaser.State {
  init () {}

  create () {

    this.camera.flash('#000000');

    this.physics.arcade.gravity.y = 200;

    // myCustomFunction('happy');

    this.background = new Background({
      game: this.game,
      x: 0,
      y: 0,
      width: 1080,
      height: 1920,
      asset: 'highway'
    })

    this.game.add.existing(this.background)


    this.spawn = new Spawn(this.game)
    this.spawn.start()

    // Controller Sprite
    this.game.add.existing(new Controller({
      game: this.game,
      x: 375,
      y: 890,
      asset: 'controller'
    }))

    
    this.game.add.existing(new Phaser.Text(this.game, 200, 1000, "Press", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' }))
    this.game.add.existing(new Phaser.Text(this.game, 610, 1000, "To Start", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' }))

    this.controls = new Controls(this.game);

  }

  update () {
    if (config.state === 'Title') {
      this.controls.startGameOnButtonPress();
    }
  }
}