/* globals __DEV__ */
import Phaser from 'phaser'
import Background from '../sprites/Background'
import Controller from '../sprites/Controller'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    const press = 'Press'
    let text1 = this.add.text(200, 1000, press)
    text1.font = 'Press Start 2P'
    text1.fontSize = 35
    text1.fill = '#fff'

    this.background = new Background({
      game: this.game,
      x: 0,
      y: 0,
      width: 1080,
      height: 1920,
      asset: 'highway'
    })

    this.controller = new Controller({
      game: this.game,
      x: 375,
      y: 890,
      asset: 'controller'
    })

    this.game.add.existing(this.background)
    this.game.add.existing(this.controller)
    // this.game.add.existing(this.car)
  }

  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(this.car, 32, 32)
  //   }
  // }
}