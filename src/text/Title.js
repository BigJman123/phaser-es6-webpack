export default class extends Phaser.Text {
	constructor(game, x, y, text) {
		super(game, x, y, text);
		this.font = 'Press Start 2P'
	    this.fontSize = 35
	    this.fill = '#fff'
	}
}