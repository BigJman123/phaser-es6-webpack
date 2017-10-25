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

    // let explosion = this.game.add.sprite(enemy.x - 55, enemy.y, 'explosion');
    // let boom = explosion.animations.add('boom');
    // explosion.scale.setTo(2.5, 2.5);
    // explosion.animations.play('boom', 30, false, true);

    this.timerText = new Phaser.Text(this.game, 383, 100, "Time:" + this.game.config.minute, { fontSize: '45px', fill: '#fff', font: 'Press Start 2P' });
    setTimeout(() => this.game.add.existing(this.timerText), 7000)

    this.livesText = new Phaser.Text(this.game, 22, 1725, "Lives", { fontSize: '35px', fill: '#fff', font: 'Press Start 2P' });
    this.game.add.existing(this.livesText)
    
    this.setTimer()

    this.spawn = new Spawn(this.game)
    setTimeout(() => this.spawn.start(), 7000)


    this.car.body.collideWorldBounds = false
    setTimeout(() => this.car.body.collideWorldBounds = true, 7000)
    
    
    console.log('create method called')

    this.carLives = new Phaser.Sprite(this.game, 25, 1775, this.game.config.livesSprite, 0)
    this.carLives.scale.setTo(.4, .4)
    this.game.add.existing(this.carLives)

    let dpad = new Phaser.Sprite(this.game, 192, 1175, 'dpad')
    let direction = dpad.animations.add('direction')
    dpad.scale.setTo(.6, .6)
    dpad.animations.play('direction', 3, true, false)
    this.game.add.existing(dpad)

    setTimeout(() => {
        game.add.tween(dpad).to({ alpha: 0 }, 500, Phaser.Easing.Quadratic.None, true, 0, 0, false);
    }, 6350);

    setTimeout(() => dpad.kill(), 6750)

    setTimeout(() => this.game.sounds.bgmusic.play("", 0, 1, false, false), 200)

  }


  createPlayer() {
    this.car = new Player({
      game: this.game,
      x: 625,
      y: 2500,
      asset: this.game.config.carSprite
    })


    this.game.add.existing(this.car)
    this.game.physics.arcade.enable(this.car)
    // this.car.body.gravity.y = 100
    this.car.body.velocity.x = 0
    this.car.body.velocity.y = 0
    this.car.body.allowGravity = false

    this.game.add.tween(this.car).to({y: 1350}, 2000, Phaser.Easing.Quadratic.Out, true)

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
      
      this.updateGlobals()

    }
  }

  updateTimer() {
    if(! this.game.config.endOfLevel && this.game.config.minute === 0) {

      this.car.body.collideWorldBounds = false
      this.game.config.endOfLevel = true
      this.game.config.spawning = false

      this.game.config.playerControlsEnabled = false;
      this.car.angle = 0;

      setTimeout(() => this.spawn.destroyAllEnemies(), 500);
      
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

  updateGlobals() {

      if (this.game.config.minute  === 60) return;

      let tick = (61 - this.game.config.minute).toFixed();


      this.game.config.gravity = 200 + (tick * 16.6); // update globally below
      this.game.config.spawnDelay = 1000 - (tick * 10); // used in Spawn
      this.game.config.roadSpeed = 18 + (tick * .36); // used in Background

      this.game.physics.arcade.gravity.y = this.game.config.gravity;
  }

  decreasePlayerLives() {
    this.game.config.lives--;
    this.carLives.frame++;
  }

  gameOver() {

          this.game.config.endOfLevel

          this.game.config.spawning = false
          
          this.car.kill()
          this.timerText.kill()
          this.livesText.kill()
          this.carLives.kill()

          this.game.config.playerControlsEnabled = false;

          // queue the music!
          this.game.sounds.deadMusic.play("", 0, .8, false, false)

          // stop the music!
          this.game.sounds.bgmusic.stop()

          this.gameOver = new Phaser.Text(this.game, 319, 300, 'Game Over', { fontSize: '50px', fill: '#fff', font: 'Press Start 2P' })
          setTimeout(() => this.game.add.existing(this.gameOver), 1900)

          setTimeout(() => this.camera.fade('#000000'), 4500)
          setTimeout(() => this.game.state.start('Title'), 5500)
  }

  update() {

    // detect collisions
    game.physics.arcade.collide(this.car, this.wallLeft)
    game.physics.arcade.collide(this.car, this.wallRight)

    // Enemy & Car Collide
    game.physics.arcade.collide(this.game.enemy, this.car, (car, enemy) =>  {

      if (! this.game.config.endOfLevel) {

        // decrease lives if not invincible
        if (! this.game.config.invincible) {this.decreasePlayerLives();}

        // destroy enemy
        this.spawn.destroyEnemy(enemy);

        // No lives left
        if(this.game.config.lives === 0) {this.gameOver();}
      }
    
    });

    this.updateTimer()

    this.controls.moveCarOnDirectionInput(this.car)

  }

}
