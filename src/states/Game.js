/* globals __DEV__ */
import Phaser from 'phaser'
import Spawn from '../sprites/Spawn'
import Player from '../sprites/Player'
import Background from '../sprites/Background'
import Controls from '../sprites/Controls'
// import Text from 'phaser/text'
import GameText from '../text/GameText'

export default class extends Phaser.State {
  init () {}

  create () {

    this.game.config.reset();

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

    this.timerText = new Phaser.Text(this.game, 383, 100, "Time:" + this.game.config.minute, { fontSize: '45px', fill: '#fff', font: 'Press Start 2P' });
    setTimeout(() => this.game.add.existing(this.timerText), 7000)

    this.livesText = new Phaser.Text(this.game, 22, 1725, "Lives", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.livesText)
    
    this.setTimer()

    this.spawn = new Spawn(this.game)
    setTimeout(() => this.spawn.start(), 7000)
    
    console.log('create method called')

    this.carLives = new Phaser.Sprite(this.game, 25, 1775, 'lives', 0)
    this.carLives.scale.setTo(.4, .4)
    this.game.add.existing(this.carLives)
    // this.carLives.frame = 1
    // this.carLives.frame = config.lives

    // this.setHealth()
    // this.hitHealth()
  }


  createPlayer() {
    this.car = new Player({
      game: this.game,
      x: 625,
      y: 2500,
      asset: 'cherryred'
    })


    this.game.add.existing(this.car)
    this.game.physics.arcade.enable(this.car)
    // this.car.body.gravity.y = 100
    this.car.body.velocity.x = 0
    this.car.body.velocity.y = 0
    this.car.body.allowGravity = false

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
  
    function updateCounter(timer) {

      this.game.config.minute--

      this.timerText.setText("Time:" + this.game.config.minute)
      
      // console.log(config.minute)

    }
  }

  updateTimer() {
    if(! this.game.config.endOfLevel && this.game.config.minute === 0) {

      this.game.config.endOfLevel = true
      this.game.config.spawning = false

      this.game.config.playerControlsEnabled = false;
      this.car.angle = 0;


      // stop timer
      this.timerText.kill()

      this.livesText.kill()
      this.carLives.kill()

      setTimeout(() => {
        this.game.add.tween(this.car).to({y: -500}, 2000, Phaser.Easing.Quadratic.In, true)
      }, 4000);

      setTimeout(() => {
        this.camera.fade('#000000');
      }, 6000);

      setTimeout(() => this.game.state.start('Win'), 7000);
      
    }
  }

  update() {
    if(this.game.config.minute > 0) {
        setTimeout(() => {this.car.body.collideWorldBounds = true}, 3000)
    }
    else {
        this.car.body.collideWorldBounds = false
    }


    // detect collisions
    game.physics.arcade.collide(this.car, this.wallLeft)
    game.physics.arcade.collide(this.car, this.wallRight)

    game.physics.arcade.collide(this.game.enemy, this.car, (car, enemy) =>  {

      this.game.config.lives--;
      this.carLives.frame++;

      if(this.game.config.lives === 0) {
        
        let explosion = game.add.sprite(this.car.x - 115, this.car.y - 100, 'explosion');
        let boom = explosion.animations.add('boom');
        explosion.scale.setTo(2.5, 2.5);
        explosion.animations.play('boom', 30, false, true);

        this.car.kill()
        this.timerText.kill()
        this.livesText.kill()
        this.carLives.kill()

        this.gameOver = new Phaser.Text(this.game, 319, 300, 'Game Over', { fontSize: '50px', fill: '#fff', font: 'Press Start 2P' })
        setTimeout(() => this.game.add.existing(this.gameOver), 1500)

        // this.game.state.start('Boot')

        setTimeout(() => window.location = 'index.html', 3500)
        
      }


      enemy.destroy();
    
      // cause explosion
      let explosion = game.add.sprite(enemy.x - 55, enemy.y, 'explosion');
      let boom = explosion.animations.add('boom');
      explosion.scale.setTo(2.5, 2.5);
      explosion.animations.play('boom', 30, false, true);
      
      
      // game canvas will flash red
      game.camera.flash(0xff0000, 200);

    });

    this.updateTimer()

    this.controls.moveCarOnDirectionInput(this.car)

  }
}
