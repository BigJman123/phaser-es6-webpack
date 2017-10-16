import config from '../config'
import Enemy from './Enemy'

export default class {
  constructor (game) {
    // super()

    this.enemy = new Enemy(game)

  }

  start() {
  	this.spawn(config.spawnDelay)
  }

  spawn(wait) {

	new Promise((resolve, reject) => {

		setTimeout(() => {
			if (config.spawning && wait > 0) {
				this.enemy.create()
				resolve();
			} else {
				reject();
			}

		}, wait);

	})
	.then(() => this.spawn(config.spawnDelay))
	.catch(() => console.log('no more enemies'))
}

  update () {
    
  }
}