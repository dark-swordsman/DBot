import bot from './lib/Bot';

export default class App {
  constructor(){
    console.log(process.env.darkbot_token, process.env.darkbot_id);

    this.bots = {
      darksBot: bot
    };
  }

  init() {
    this.bots.darksBot.loadCommands()
      .then(() => {
        this.bots.darksBot.loadBot();    
      })
      .catch((err) => console.error(err));
  }
}