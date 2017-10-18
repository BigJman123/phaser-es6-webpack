import Phaser from 'phaser';
import config from '../config'

export default class {
	constructor(game) {
		this.game = game;
	}

	countdown () {
		this.three = new Phaser.Text(this.game, 478, 300, "3", { fontSize: '125px', fill: '#fff', font: 'Press Start 2P' })
	    setTimeout(() => this.game.add.existing(this.three), 3000)
	    setTimeout(() => this.three.kill(), 3750)

	    this.two = new Phaser.Text(this.game, 478, 300, "2", { fontSize: '125px', fill: '#fff', font: 'Press Start 2P' })
	    setTimeout(() => this.game.add.existing(this.two), 4250)
	    setTimeout(() => this.two.kill(), 4750)

	    this.one = new Phaser.Text(this.game, 478, 300, "1", { fontSize: '125px', fill: '#fff', font: 'Press Start 2P' })
	    setTimeout(() => this.game.add.existing(this.one), 5250)
	    setTimeout(() => this.one.kill(), 5750)

	    this.go = new Phaser.Text(this.game, 410, 300, "GO!", { fontSize: '125px', fill: '#fff', font: 'Press Start 2P' })
	    setTimeout(() => this.game.add.existing(this.go), 6250)
	    setTimeout(() => this.go.kill(), 6750)
	}

	gameover() {

	}
}
