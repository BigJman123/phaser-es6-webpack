import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('cherryred', 'assets/images/cherryred.png')
    this.load.image('highway', 'assets/images/road3.png');
    this.load.spritesheet('controller', 'assets/images/controller.png', 320, 320);
  }

  create () {
    this.state.start('Title')
  }
}
