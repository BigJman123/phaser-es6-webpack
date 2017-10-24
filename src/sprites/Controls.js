import Phaser from 'phaser'

export default class {
	constructor (game) {

		this.game = game;

		// start the gamepad

		game.input.gamepad.start()

		this.controller = this.game.input.gamepad.pad1
	}

	startGameOnButtonPress () {
		if (this.controller.justPressed(Phaser.Gamepad.XBOX360_A) || this.controller.justPressed(Phaser.Gamepad.XBOX360_B)){
			this.game.config.state = 'Game';
			this.game.config.spawning = false;
			this.game.camera.fade();
			setTimeout(() => this.game.state.start('Game'), 1200);
		}
	}

	honkHornOnButtonPress() {
		// honk horn code
	}

	moveCarOnDirectionInput(car) {

		car.body.velocity.x = 0
	    car.body.velocity.y = 0

    
	    if(this.game.config.playerControlsEnabled) {

	    	if (this.controller.justPressed(Phaser.Gamepad.XBOX360_A, 0) || this.controller.justPressed(Phaser.Gamepad.XBOX360_B, 0)){
				this.game.sounds.horn.play("", 0, .5, false, false)
			}
	        
	        if(this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
	            car.body.velocity.x -= 600
	            car.angle = -10
	        }
	        
	        else if (this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
	            car.body.velocity.x += 600
	            car.angle = +10
	        }

	        else {
	            car.rotation = 0
	        }
	        
	        if (this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
	            car.body.velocity.y -= 500
	        }
	        
	        else if (this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
	            car.body.velocity.y += 700
	        }
	        
	    }

	}

}