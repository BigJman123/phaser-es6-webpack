// /* globals __DEV__ */
// import Phaser from 'phaser'
// import Car from '../sprites/Car'
// import Background from '../sprites/Background'

// export default class extends Phaser.State {
//   init () {}
//   preload () {}

//   create () {
//     const bannerText = 'Phaser + ES6 + Webpack'
//     let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
//     banner.font = 'Bangers'
//     banner.padding.set(10, 16)
//     banner.fontSize = 40
//     banner.fill = '#77BFA3'
//     banner.smoothed = false
//     banner.anchor.setTo(0.5)

//     this.background = new Background({
//       game: this.game,
//       x: 0,
//       y: 0,
//       width: 1080,
//       height: 1920,
//       asset: 'highway'
//     })

//     this.car = new Car({
//       game: this.game,
//       x: this.world.centerX,
//       y: this.world.centerY,
//       asset: 'cherryred'
//     })

//     this.game.add.existing(this.background)
//     this.game.add.existing(this.car)
//   }

//   render () {
//     if (__DEV__) {
//       this.game.debug.spriteInfo(this.car, 32, 32)
//     }
//   }
// }
