import helpers from '../helpers';
import tmi from 'tmi.js';
import config from '../../config/darkswordsman';

class Bot {
  constructor(options) {
    this.name = options.name;
    this.channel = options.channel;
    this.botChannel = options.botChannel;
    this.apiKey = options.apiKey;
    this.commandFolder = options.commandFolder;
    this.clientID = options.clientID;
    this.commands = {};
    this.opts = {
      identity: {
        username: this.botChannel,
        password: this.apiKey
      },
      channels: [
        this.channel
      ]
    };
    this.tmiBot = new tmi.client(this.opts);
  }

  loadCommands() {
    return new Promise((resolve, reject) => {
      helpers.commandLoader(this.commandFolder)
        .then((commands) => {
          this.commands = commands;

          resolve();
        })
        .catch((err) => console.error(err));
    });
  }

  loadBot() {
    console.log(this.botChannel);

    this.tmiBot.connect()
      .then(() => {
        //twitch.say(this.channel, '/me Walks in and stares at everyone...');
        console.log(`Successfully connected to ${this.opts.channels[0]}\n--------\nReady to Rock!`);

        this.tmiBot.on('message', (channel, userstate, message, self) => {

          var parts = message.split(' ');
          var commandName = parts[0];
    
          if (commandName in this.commands) {
            this.commands[commandName].call();
          }
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  say(msg, channel = this.opts.channels[0]){
    this.tmiBot.say(channel, msg);
  }

  /*
    // do a retention bonus on bot start to generate list
    setTimeout(() => {
      this.retention(this.options)
    }, 1000);

    setInterval(() => {
      this.retention(this.options)
    }, 420000);
  }

  retention(options) {
    const fileLocation = 'E:/stream_loyalty_files/retention.json';

    Retention.retentionBonus(options, fileLocation);
  }
  */
}

export default new Bot(config);