/* globals __DEV__ */
import Phaser from 'phaser'
import Background from '../sprites/Background'
import Controller from '../sprites/Controller'
import Spawn from '../sprites/Spawn'
import Controls from '../sprites/Controls'
import { myCustomFunction } from '../utils'

export default class extends Phaser.State {
  init () {}

  create () {

    this.camera.flash('#000000');

    this.win = new Phaser.Image(this.game, 0, 0, 'win')

    this.game.add.existing(this.win)

    this.car = new Phaser.Sprite(this.game, 2000, 915, 'cherryred')
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

    setTimeout(() => this.game.camera.fade(), 9000)

  }}