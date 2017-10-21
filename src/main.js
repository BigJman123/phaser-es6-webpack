import 'pixi'
import 'p2'
import Phaser from 'phaser'
window._ = require('lodash');

import BootState from './states/Boot'
import SplashState from './states/Splash'
import TitleState from './states/Title'
import GameState from './states/Game'
import WinState from './states/Win'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Title', TitleState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Win', WinState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
