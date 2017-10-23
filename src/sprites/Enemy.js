export default class {

  constructor (game) {
    // super()

    this.enemyNames = ['car1','car2','car3','car4','car5','car6','car7', 'car8', 'car9', 'car10']
    this.enemyX = [238, 398, 568, 728]

    this.game = game;
  
    this.game.enemy = game.add.group()
    this.game.enemy.enableBody = true
  }

  create() {

  	let x = _.sample(this.enemyX)
  	let sprite = _.sample(this.enemyNames)
  	

    const enemyCars = game.enemy.create(x, -350, sprite);
    enemyCars.scale.setTo(.8, .8);
    enemyCars.body.immovable = true;

  }


}