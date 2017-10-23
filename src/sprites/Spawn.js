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

  update () {
    
  }
}