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
    this.load.image('pinky', 'assets/images/pinky.png')
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
    this.load.spritesheet('button', 'assets/images/buttonpush.png', 98, 144);
    this.load.spritesheet('lives', 'assets/images/livessprite.png', 450, 302);
    this.load.spritesheet('pinkyLives', 'assets/images/pinkylivessprite.png', 450, 302);
    this.load.spritesheet('dpad', 'assets/images/dpad.png', 600, 600)
    this.load.spritesheet('dpad2', 'assets/images/dpad2.png', 238, 238)
    this.load.spritesheet('wilber', 'assets/images/wilber.png', 288, 288)

    this.load.audio('game', 'assets/sounds/game.mp3');
    this.load.audio('win', 'assets/sounds/win.mp3');
    this.load.audio('dead', 'assets/sounds/dead.mp3');
    this.load.audio('horn', 'assets/sounds/horn.mp3');
    this.load.audio('explosion', 'assets/sounds/explosion.mp3');
  }

  create () {


    //setup sounds
    this.game.sounds.bgmusic = new Phaser.Sound(this.game, 'game', 1, false)
    this.game.sounds.deadMusic = new Phaser.Sound(this.game, 'dead', 1, false)
    this.game.sounds.explode = new Phaser.Sound(this.game, 'explosion', 1, false)
    this.game.sounds.horn = new Phaser.Sound(this.game, 'horn', 1, false)
    this.game.sounds.win = new Phaser.Sound(this.game, 'win', 1, false)


    // start the Title screen
    this.state.start('Title')
  }
}
