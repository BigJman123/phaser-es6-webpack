/* globals __DEV__ */
import Phaser from 'phaser'
import Background from '../sprites/Background'
import Button from '../sprites/Button'
import Spawn from '../sprites/Spawn'
import Controls from '../sprites/Controls'
import { myCustomFunction } from '../utils'

export default class extends Phaser.State {
  init () {}

  create () {

    this.game.config.reset();

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

    // this.game.sounds.win.play("", 0, .2, false, false)

    this.spawn = new Spawn(this.game)
    this.spawn.start()

    // Controller Sprite
    this.game.add.existing(new Button({
      game: this.game,
      x: 415,
      y: 860,
      asset: 'button'
    }))

    
    this.game.add.existing(new Phaser.Text(this.game, 200, 1000, "Press", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' }))
    this.game.add.existing(new Phaser.Text(this.game, 610, 1000, "To Start", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' }))

    this.controls = new Controls(this.game);

  }

  update () {
    if (this.game.config.state === 'Title') {
      this.controls.startGameOnButtonPress();
    }
  }
}