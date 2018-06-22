import { commandLoader } from './helpers';
import tmi from 'tmi.js';

class Bot {
  constructor(options) {
    this.name = options.name;
    this.channel = options.channel;
    this.botChannel = option.botChannel;
    this.apiKey = option.apiKey;
    this.commandFolder = options.commandFolder;
    this.commands = {};
  }

  init() {
    this.loadCommands();
    this.loadTwitchBot();
  }

  loadCommands() {
    this.commands = commandLoader(this.commandFolder);
  }

  loadTwitchBot() {
    let opts = {
      identity: {
        username: this.botChannel,
        password: this.apiKey
      },
      channels: [
        this.channel
      ]
    };

    let bot = new tmi.client(opts);

    twitch.on('message', (channel, userstate, message, self) => {

      var parts = message.split(' ');
      var commandName = parts[0];

      if (this.commands[commandName]) {
        this.commands[commandName].call();
      }

    });
  }
}