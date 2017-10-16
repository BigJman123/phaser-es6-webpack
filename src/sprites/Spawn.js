import config from '../config'
import Enemy from './Enemy'

export default class {
  constructor (game) {
    // super()

    this.enemy = new Enemy(game)

  }

  start() {
  	config.spawning = true;
  	this.spawn(config.spawnDelay)
  }

  stop() {
  	config.spawning = false;
  }

  spawn(wait) {

	new Promise((resolve, reject) => {

		if (config.spawning && wait > 0) {
			setTimeout(() => {
					this.enemy.create()
					resolve();
			}, wait);
		} else {
			reject();
		}

	})
	.then(() => this.spawn(config.spawnDelay))
	.catch(() => console.log('no more enemies'))
}

  update () {
    
  }
}