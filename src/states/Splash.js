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
    this.load.image('car1', 'assets/images/car1.png', 136, 300);
    this.load.image('car2', 'assets/images/car2.png', 138, 299);
    this.load.image('car3', 'assets/images/car3.png', 136, 300);
    this.load.image('car4', 'assets/images/car4.png', 143, 300);
    this.load.image('car5', 'assets/images/car5.png', 149, 300);
    this.load.image('car6', 'assets/images/car6.png', 149, 300);
    this.load.image('car7', 'assets/images/car7.png', 149, 300);
    this.load.image('car8', 'assets/images/car8.png', 149, 300);
    this.load.image('car9', 'assets/images/car9.png', 149, 300);
    this.load.image('car10', 'assets/images/car10.png', 149, 300);
    this.load.image('wall', 'assets/images/wall.png', 300, 1920);
    this.load.image('wall2', 'assets/images/wall2.png', 300, 1920);
    this.load.image('win', 'assets/images/win.png', 1080, 1920);
    this.load.spritesheet('explosion', 'assets/images/explosion.png', 96, 96);
    this.load.spritesheet('controller', 'assets/images/controller.png', 320, 320);
    this.load.spritesheet('lives', 'assets/images/livessprite.png', 450, 302);
  }

  create () {
    this.state.start('Win')
  }
}
