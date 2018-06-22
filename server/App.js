import Bot from './Bot';

export default class App {
  constructor(){
    this.bots = {
      darksBot: new Bot({
        apiKey: process.env.darkbot_token,
        botChannel: 'darkswordsmanbot',
        channel: 'darkswordsmantv',
        commandFolder: 'commands/commandObjects/',
        commands: {}
      })
    }
  }

  init() {
    this.bots.darksBot.init()
  }
}