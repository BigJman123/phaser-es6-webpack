export default class {

  constructor() {
    this.reset();
  }

  reset() {
    this.state = 'Title'
    // this.gameWidth = 1080
    // this.gameHeight = 1920
    this.localStorageName = 'phaseres6webpack'

    this.spawning = true
    this.playerControlsEnabled = false

    this.gravity = 200
    this.spawnDelay = 1000
    this.roadSpeed = 18

    this.minute = 60

    this.lives = 3

    this.endOfLevel = false;

    this.enableDebug = true;
  }
}
