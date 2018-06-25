import tmi from 'tmi.js';

class tmiBot {
  constructor() {
    this.initializeBot = (options) => {
      this.twitch = new tmi.client(options.opts);
      this.options = options;
    }
  }

  init(options){
    
    this.initializeBot(options);
  
    console.log(`Connecting to ${options.opts.channels[0]}`);

    this.twitch.connect()
      .then(() => {
        //twitch.say(this.channel, '/me Walks in and stares at everyone...');
        console.log(`Successfully connected to ${options.opts.channels[0]}\n--------\nReady to Rock!`);
      })
      .catch(function(err) {
        console.error(err);
      });;

    this.twitch.on('message', (channel, userstate, message, self) => {

      var parts = message.split(' ');
      var commandName = parts[0];

      if (commandName in this.options.commands) {
        this.options.commands[commandName].default.call();
      }

    });
  }
}

export default new tmiBot();