import helpers from './helpers';
import { tmiBot } from './lib';

export default class Bot {
  constructor(options) {
    this.name = options.name;
    this.channel = options.channel;
    this.botChannel = options.botChannel;
    this.apiKey = options.apiKey;
    this.commandFolder = options.commandFolder;
    this.clientID = options.clientID;
    this.commands = {};
  }

  init() {
    this.loadCommands();
    this.loadTwitchBot();
  }

  loadCommands() {
    this.commands = helpers.commandLoader(this.commandFolder);
  }

  loadTwitchBot() {
    let options = {
      'opts': {
        identity: {
          username: this.botChannel,
          password: this.apiKey
        },
        channels: [
          this.channel
        ]
      },
      'commands': this.commands,
      'clientID': this.clientID
    }

    tmiBot.init(options);
  }
}