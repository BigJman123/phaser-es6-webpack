/* globals __DEV__ */
import Phaser from 'phaser'
import Background from '../sprites/Background'
import Spawn from '../sprites/Spawn'
import Controls from '../sprites/Controls'
import { myCustomFunction } from '../utils'

export default class extends Phaser.State {
  init () {}

  create () {
    
    this.game.sounds.win.play("", 0, .8, false, false)

    this.camera.flash('#000000');

    this.win = new Phaser.Image(this.game, 0, 0, 'win')

    this.game.add.existing(this.win)

    this.car = new Phaser.Sprite(this.game, 2000, 915, this.game.config.carSprite)
    this.car.anchor.setTo(0.5, 0.5);
    this.car.angle = -90;
    this.car.scale.setTo(.7, .7);

    this.game.add.existing(this.car)

    setTimeout(() => {
        this.game.add.tween(this.car).to({x: 400}, 3000, Phaser.Easing.Quadratic.Out, true)
    }, 3000);
    
    setTimeout(() => {
        this.game.add.tween(this.car).to({x: -200}, 500, Phaser.Easing.Quadratic.In, true)
    }, 8000);

    this.text1 = new Phaser.Text(this.game, 2000, 900, "GOOD JOB!", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.text1)
    setTimeout(() => this.game.add.tween(this.text1).to({x: 385}, 2000, Phaser.Easing.Quadratic.in, true), 7000)

    this.text2 = new Phaser.Text(this.game, 2000, 1025, "FIND A WILBER REPRESENTATIVE", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.text2)
    setTimeout(() => this.game.add.tween(this.text2).to({x: 52}, 2000, Phaser.Easing.Quadratic.in, true), 9000)

    this.text3 = new Phaser.Text(this.game, 2000, 1160, "TO GET YOUR ENTRY CARD", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.text3)
    setTimeout(() => this.game.add.tween(this.text3).to({x: 140}, 2000, Phaser.Easing.Quadratic.in, true), 11000)

    this.text4 = new Phaser.Text(this.game, 2000, 1275, "THANKS FOR PLAYING!", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.text4)
    setTimeout(() => this.game.add.tween(this.text4).to({x: 205}, 2000, Phaser.Easing.Quadratic.in, true), 13000)

    setTimeout(() => this.game.camera.fade(), 17000)

    setTimeout(() => this.game.sounds.win.fadeOut(1000), 17000)
    setTimeout(() => this.game.sounds.win.stop(), 18000)
    setTimeout(() => this.game.state.start('Title'), 18500)

  }}