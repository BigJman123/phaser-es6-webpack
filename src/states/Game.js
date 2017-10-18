/* globals __DEV__ */
import Phaser from 'phaser'
import Spawn from '../sprites/Spawn'
import Player from '../sprites/Player'
import Background from '../sprites/Background'
import Controls from '../sprites/Controls'
// import Text from 'phaser/text'
import config from '../config'
import GameText from '../text/GameText'
import Timer from '../sprites/Timer'

export default class extends Phaser.State {
  init () {}

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

    this.game.add.existing(this.background)
    
    this.createPlayer()

    this.setWallBounds()

    this.controls = new Controls(this.game)

    this.GameText = new GameText(this.game)
    this.GameText.countdown()

    this.timerText = new Phaser.Text(this.game, 380, 100, "Time:" + config.minute, { fontSize: '45px', fill: '#fff', font: 'Press Start 2P' });
    setTimeout(() => this.game.add.existing(this.timerText), 7000)
    
    this.setTimer()
  }


  createPlayer() {
    this.car = new Player({
      game: this.game,
      x: 625,
      y: 2500,
      asset: 'cherryred'
    })


    // this.spawn = new Spawn(this.game)
    // this.spawn.spawn(1000)
    // setTimeout(() => {
      // this.spawn.start()
    // }, 4000);
    // this.spawn.start()


    this.game.add.existing(this.car)
    this.game.physics.arcade.enable(this.car)
    this.car.body.gravity.y = 100
    this.car.body.velocity.x = 0
    this.car.body.velocity.y = 0
    // this.car.body.collideWorldBounds = true

    this.game.add.tween(this.car).to({y: 1000}, 2000, Phaser.Easing.Quadratic.Out, true)

  }

  setWallBounds() {
    this.bounds = this.game.add.group()
    this.bounds.enableBody = true
    
    this.wallLeft = this.bounds.create(-123, 0, 'wall')
    this.wallLeft.body.allowGravity = false
    this.wallLeft.body.immovable = true
  
    this.wallRight = this.bounds.create(910, 0, 'wall')
    this.wallRight.body.allowGravity = false
    this.wallRight.body.immovable = true

    this.game.physics.arcade.collide(this.car, this.wallLeft)
    this.game.physics.arcade.collide(this.car, this.wallRight)
  }

  setTimer() {
    let timer = game.time.create(false)

    timer.loop(Phaser.Timer.SECOND, updateCounter, this)

    setTimeout(() => {timer.start()}, 7000)
  
    function updateCounter() {

      config.minute--

      this.timerText.setText("Time:" + config.minute)
      
      console.log(config.minute)

    }
  }


  
  update() {
    // detect collisions
    game.physics.arcade.collide(this.car, this.wallLeft)
    game.physics.arcade.collide(this.car, this.wallRight)

    this.controls.moveCarOnDirectionInput(this.car)

    if(config.minute > 0) {
        setTimeout(() => {this.car.body.collideWorldBounds = true}, 3000)
    }
    else {
        this.car.body.collideWorldBounds = false
    }

  }
}
