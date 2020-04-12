import * as ex from 'excalibur';
import { Resources } from './resources';
import { ScenarioScene } from './scenes/ScenarioScene'

export class Game extends ex.Engine {
  constructor() {
    super({ width: 1280, height: 720, displayMode: ex.DisplayMode.Fixed })
  }

  public start(loader: ex.Loader) {
    return super.start(loader)
  }
}

const game = new Game()

let loader = new ex.Loader()


loader.logo = 'https://cdn.discordapp.com/attachments/696832988645818489/698655752147042314/logo_discord.png'
loader.logoWidth = 128
loader.logoHeight = 128


for (let key in Resources) {
  loader.addResource(Resources[key])
}


loader.startButtonFactory = () => {
  const playButton = document.createElement('button');

  playButton.textContent = 'Jouer !';
  return playButton;
}

game.start(loader).then(() => {
  game.add('scenarioScene', new ScenarioScene(game))

  game.goToScene('scenarioScene')
})
