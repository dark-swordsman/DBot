import tmi from 'tmi.js';
import { bot } from '../Bot';

let opts = {
  identity: {
    username: bot.botChannel,
    password: bot.apiKey
  },
  channels: [
    this.channel
  ]
};

let tmiBot = new tmi.client(opts);

export default tmiBot;