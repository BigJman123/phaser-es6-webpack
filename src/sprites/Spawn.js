import Enemy from './Enemy'

export default class {
  constructor (game) {
    // super()
    this.game = game;
    this.enemy = new Enemy(game)

  }

  start() {
  	this.game.config.spawning = true;
  	this.spawn(this.game.config.spawnDelay)
  }

  stop() {
  	this.game.config.spawning = false;
  }

  spawn(wait) {

	new Promise((resolve, reject) => {

  		if (this.game.config.spawning && wait > 0) {
  			setTimeout(() => {
            this.checkEnemyBounds();
  					this.enemy.create()
  					resolve();
  			}, wait);
  		} else {
  			reject();
  		}

  	})
  	.then(() => this.spawn(this.game.config.spawnDelay))
  	.catch(() => console.log('no more enemies'))
  }

  checkEnemyBounds() {
    let enemies = this.game.enemy.children;
    let height = game.world.bounds.height + 500;

    enemies.forEach((enemy, i) => {
      enemy.y > height && enemy.destroy();
    });
  }

  destroyEnemy(enemy) {

    enemy.destroy();

    // cause explosion
    let explosion = this.game.add.sprite(enemy.x - 55, enemy.y, 'explosion');
    let boom = explosion.animations.add('boom');
    explosion.scale.setTo(2.5, 2.5);
    explosion.animations.play('boom', 30, false, true);
    
    
    // game canvas will flash red
    this.game.camera.flash(0xff0000, 200);
  }

  destroyAllEnemies() {
    this.checkEnemyBounds();
    
    let enemies = this.game.enemy.children;

    enemies.forEach((enemy, i) => {
      this.game.sounds.explode.play("", 0, .2, false, true)
      let e = enemy;
      setTimeout(() => this.destroyEnemy(e), i*100);
    });

  }

}